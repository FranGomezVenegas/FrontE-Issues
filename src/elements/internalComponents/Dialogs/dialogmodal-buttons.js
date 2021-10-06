import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store.js';
import {cancelDialogButton, confirmDialogButton, closeDialogButton} from './dialogmodal-buttons-settings';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
/**
 * `dialogmodal-buttons` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class DialogmodalButtons extends FieldsMethods(connect(store)(PolymerElement))  {
    static get properties() {
        return {
            displayCancelButton: {type: Boolean, value:false, notify: true},
            displayConfirmButton: {type: Boolean, value:false, notify: true},            
            displayCloseButton:  {type: Boolean, value:false, notify: true},
            cancelDialogButton:  {type: String,  value:cancelDialogButton},
            confirmDialogButton: {type: String,  value:confirmDialogButton},
            closeDialogButton:   {type: String,  value:closeDialogButton},
            selectedLanguage:    {type:String},
            value:{type: Object},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;        
      }  
    static get template() {
        return html`
        <template is="dom-if" if="[[displayCloseButton]]">
            <paper-button name="close" dialog-confirm autofocus on-click="clickedClose">{{labelValue(selectedLanguage, closeDialogButton)}}</paper-button>
        </template>
        <template is="dom-if" if="{{displayCancelButton}}">
            <paper-button name="cancel" dialog-dismiss on-click="clickedCancel">{{labelValue(selectedLanguage, cancelDialogButton)}}</paper-button>
        </template>
        <template is="dom-if" if="[[displayConfirmButton]]">
            <paper-button name="confirm" dialog-confirm autofocus on-click="clickedConfirm">{{labelValue(selectedLanguage, confirmDialogButton)}}</paper-button>
        </template>
        `;
    }
    clickedCancel(){
        //console.log('clickedCancel');
        this.dispatchEvent(new CustomEvent('dialog-cancelbutton-clicked', {
          bubbles: true,
          composed: true,
          detail: {'buttonName': this.cancelDialogButton.name,'value': this.value, 'buttonDefinition': this.cancelDialogButton}
        }));            
    }
    clickedClose(){
        //console.log('clickedClose');
        this.dispatchEvent(new CustomEvent('dialog-closebutton-clicked', {
          bubbles: true,
          composed: true,
          detail: {'buttonName': this.closeDialogButton.name,'value': this.value, 'buttonDefinition': this.closeDialogButton}
        }));            
    }
    clickedConfirm(){
        console.log('clickedConfirm');
        this.dispatchEvent(new CustomEvent('dialog-confirmbutton-clicked', {
          bubbles: true,
          composed: true,
          detail: {'buttonName': this.confirmDialogButton.name,'value': this.value, 'buttonDefinition': this.confirmDialogButton}
        })); 
    }    
}
customElements.define('dialogmodal-buttons', DialogmodalButtons);