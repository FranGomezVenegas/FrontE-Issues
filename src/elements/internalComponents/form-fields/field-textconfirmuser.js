import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

//import '@polymer/paper-input/paper-input';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-password-field';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

class FieldTextconfirmuser extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      field: {type: Object, observer: 'fieldChange', notify: true},
      type: {type: String, notify: true},
      value: {type: String, notify: true},
      fieldClass: String,
      numConfirmations: Number, readOnly: {type: Boolean, value: false},
      iAm: {type: Object,
        value: function() {
          return {
            button: false,
            checkBox: false,
          }
        }
      }      
    }
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;  
    this.numConfirmations = state.confirmUserDialog.numConfirmations;
    //console.log('field-textconfirmuser >> numConfirmations', this.numConfirmations);
    if (this.numConfirmations > 0){
      this.readOnly=true;
      this.fieldClass='paperInput';
      this.$.userToCheck.value=state.app.user.userName;
      //this.$.userToCheck.readOnly=true;
      this.$.userToCheck.backgroundColor='rgba(' + [0,0,0,0.12].join(',') + ')';//'rgba(' + '0' + ',' + '0' + ',' + '0' + ',' + '0.12' + ')'; //rgba(0, 0, 0, 0.12);      
    }else{
      this.$.userToCheck.value='';
      //this.$.userToCheck.readOnly=false;
      this.readOnly=false;
      this.fieldClass='paperInputLocked';
    }
  }   
  textClass(langApp){
    if (langApp=="en") {this.fieldClass="x-field.myCustomFieldRed"; return;}
    this.fieldClass="x-field.myCustomFieldBlue";
    return;
  } 
  textType() {
    return this.field.password =="false";  }
  textTypePassword() {
    return this.field.password =="true";  }
  textTypeConfidential() {
    return this.field.password =="confidential";  }
  fieldChange(newField) {
    switch(newField.showDisplayPasswordType) {
      case 'Button':
        this.set('iAm.button', true);
        break;
      case 'CheckBox':
        this.set('iAm.checkBox', true);
        break;  
    }
  }

  static get template() {
    return html`    
    <style>
      paperInput {
        color: #0085ffe6;
      }
      paperInputLocked {
        color:rgba(0,0,0,0.12);
      }      
      .required {
        color: #ffff;
      }
      .btn {
          position: absolute;
          font-family: 'FontAwesome';
          top: 0;
          left: 10px;
          content: "\f005";
      }
      .input {
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 16px;
          box-sizing: border-box;
          color: Red;
      }    
      .x-field.myCustomFieldRed input {
          color: Red;
      }
      .x-field.myCustomFieldBlue input {
          color: Blue;
      }        
    </style>
    <paper-input class$="{{fieldClass}}" type="{{field.type}}" id="userToCheck" 
      required label="{{labelValue(selectedLanguage, field)}}" value="{{value}}" 
      auto-validate="{{field.required}}" 
      readonly="{{readOnly}}"></paper-input>
    `;
  } 
}
customElements.define('field-textconfirmuser', FieldTextconfirmuser);