import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '@polymer/polymer/lib/elements/dom-if';

import { store } from '../../../../store.js';
import { connect } from 'pwa-helpers/connect-mixin';
import {AuthenticationApi} from '../../../../platform-mixins/apis/api-authentication';
import '../../form-fields/field-controller.js';
import {CloseOnEscPressed} from '../close-dialog-on-esc-pressed-mixin';

import {closeConfirmUserDialog, resetAndCloseConfirmUserDialog, confirmUserSuccess, confirmUserFailure} from '../../../platformComponents/Redux/actions/confirmuser-actions.js';
import {dialog_buttons} from '../dialogmodal-buttons-settings';
import {platformConfirmUser_windowTitle, platformConfirmUser_formFields, platformConfirmUser_notCorrectMessage} from './dialog-confirmuser-settings';
import './dialog-confirmuser-style';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';

let acceptedHandler = null;
let canceledHandler = null;
let numConfirmations = null;
import '../dialogmodal-buttons.js';

class ConfirmUserDialog extends FieldsMethods(CloseOnEscPressed(AuthenticationApi(connect(store)(PolymerElement)))){
  static get properties() {
    return {
      dialogButtons: { type: Array, value: dialog_buttons},
      opened: {type: Boolean,},
      maximumFailures: Number,
      classAttemptsPhrase:{type: String},
      numAttempts: {type: Number, observer:'changeAttemptsPhrase'},
      attemptsPhrase: String,
      classModal: {type: String, computed: 'changeClass(opened)'},
      formFields: {type: Array, notify: true, bubble: true, value: platformConfirmUser_formFields},      
      validationNotCorrectMessage: {type: Object, value: platformConfirmUser_notCorrectMessage},
      selectedLanguage:{ type: String}, 
      platformConfirmUser_windowTitle:{type: Object, value: platformConfirmUser_windowTitle},     
    }
  }

  changeAttemptsPhrase(){
    if (this.numAttempts===0){
      this.classAttemptsPhrase="attemptsphraseblue";
    }else{
      this.classAttemptsPhrase="attemptsphrasered";
    }
    if (this.selectedLanguage=="en"){
      this.attemptsPhrase='*** Attempts:'+this.numAttempts+' of '+this.maximumFailures;}
    if (this.selectedLanguage=="en"){
      this.attemptsPhrase='*** Intentos:'+this.numAttempts+' de '+this.maximumFailures;}
      return;
  }
  changeClass(opened) {
    if(opened) {
      return '';
    }
    return 'closed';
  }
  static get template() {
    return html`
    <style include="dialog-confirmuser-style"></style>      
      <div class$="{{classModal}}">
        <div class="confirmUserDialogModalMain">        </div>
        <div class="confirmUserDialogModalDialog" >
        {{labelValue(selectedLanguage, platformConfirmUser_windowTitle)}}

          <template is="dom-repeat" items="{{formFields}}" as="currentfield">       
            <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
          </template>          
          <div>
            <dialogmodal-buttons 
              display-cancel-button 							display-confirm-button 								
              on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmedbutton-clicked="dialogConfirmed"> </dialogmodal-buttons>             
            <p class$="{{classAttemptsPhrase}}">{{attemptsPhrase}}</p>
          </div> 
        </div>
      </div>
    `;
  }
  close(){
    this.dialogCanceled();
  }

  keyPressed(e){
    if(e.code.includes("Enter")) {
      this.dialogConfirmed();
      return;
    }
    // if(e.code == "Escape") {
    //   this.dialogCanceled();
    //   return;
    // }    
  }
  confirmUserFailure(){
    console.log('esignFailure', this.numAttempts+1 , this.maximumFailures-1);
    if (this.numAttempts+1<=this.maximumFailures-1){
      store.dispatch(confirmUserFailure());
      return;
    }
    var message=''; 
    switch(this.selectedLanguage){
        case 'es': message=this.validationNotCorrectMessage.attempts_consumed.message_es; break; //message=response.data.message_es; break;            
        default: message=this.validationNotCorrectMessage.attempts_consumed.message_en; break; //message=response.data.message_en; break;
    }     
    this.dispatchEvent(new CustomEvent('toast-error', {
        bubbles: true,        composed: true,
        detail: message
    }));      
    if(canceledHandler) {canceledHandler();}
    store.dispatch(resetAndCloseConfirmUserDialog());
    return;
  }
  confirmUserCorrect(){
    if(acceptedHandler){
      store.dispatch(confirmUserSuccess(this.formFields[2].value, this.formFields[0].value, this.formFields[1].value));
      acceptedHandler();
    }
    store.dispatch(closeConfirmUserDialog());
  }
  dialogConfirmed() {    
    var paramsUrl='userToCheck='+this.formFields[0].value+'&passwordToCheck='+this.formFields[1].value;    
    var datas = [];
    datas.paramsUrl=paramsUrl;
    datas.userToCheck=this.formFields[0].value; 
    datas.passwordToCheck=this.formFields[1].value;
    datas.callBackFunction=this.confirmUserCorrect.bind(this);
    datas.callBackFunctionError=this.confirmUserFailure.bind(this);
    this.ajaxTokenValidateUserCredentials(datas);    
    var elem=this.shadowRoot.getElementById('pwToCheck');
    if (elem){elem.resetValue();}    
  }
  dialogCanceled() {
    var message=''; 
    switch(this.selectedLanguage){
        case 'es': message=this.validationNotCorrectMessage.dialog_cancelled.message_es; break; //message=response.data.message_es; break;            
        default: message=this.validationNotCorrectMessage.dialog_cancelled.message_en; break; //message=response.data.message_en; break;
    }     
    this.dispatchEvent(new CustomEvent('toast-error', {
        bubbles: true,        composed: true,
        detail: message
    }));    
    if(canceledHandler) {canceledHandler();}
    store.dispatch(closeConfirmUserDialog());    
    var elem=this.shadowRoot.getElementById('pwToCheck');
    if (elem){elem.resetValue();}
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
    this.opened = state.confirmUserDialog.confirmUserDialogOpened;
    acceptedHandler = state.confirmUserDialog.acceptedHandler;
    canceledHandler = state.confirmUserDialog.canceledHandler;
    numConfirmations = state.confirmUserDialog.numConfirmations;
    this.maximumFailures=state.confirmUserDialog.maximumFailures;
    this.numAttempts=state.confirmUserDialog.numAttempts;
  }
}
customElements.define('confirmuser-dialog', ConfirmUserDialog);