import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import './proc-deploy-dialogmodal-buttons.js';
import '../../03config/Dialogs/proc-deploy-dialogmodal-settings';
import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';
import '../../../../internalComponents/Grids/myvaadin-grid';
/**
 * `proc-deploy-simple-modal-dialog` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ProcDeploySimpleModalDialog extends FunctionsEnvMonitSamples(PolymerElement) {
    static get properties() {
        return {
            displayCancelButton: {type: Boolean, notify: true},
            displayConfirmButton: {type: Boolean, notify: true},            
            displayCloseButton:  {type: Boolean, notify: true},
            formElements: {type: Array},

            listRows: Array,
            listHeader: Array,
            simpleModalSelectedObject: {type: Object, notify: true},
            focusInField:{type: String},

            selectedObject: {type: Object},
            callBackFunction: {type: Object},
            callBackFunctionError: {type: Object},
            allowMultiSelect:{type:Boolean},

        }
    }
    static get template() {
        return html`        
        <style include="proc-deploy-dialogmodal-style"></style>       
        <div class="modal-content bgimg">
            <proc-deploy-dialogmodal-buttons display-close-button={{displayCloseButton}} display-cancel-button={{displayCancelButton}} display-confirm-button={{displayConfirmButton}}
                on-dialog-closebutton-clicked="dialogClosed" on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
            ></proc-deploy-dialogmodal-buttons> 
            <template is="dom-if" if="[[formElements]]">
                <template is="dom-repeat" items="{{formElements}}" as="currentfield">       
                    <field-controller on-keydown="keyPressed" callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" on-keydown="microorgKeyPressedAdhoc" on-field-button-clicked="microorgActionOnSel" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>    
            </template>    
            <template is="dom-if" if="[[listRows]]">
                <myvaadin-grid class="grid" id="simplemodaldialoggrid" headerfields="{{listHeader}}" allow-multi-select="{{allowMultiSelect}}"
                    rowcontainer="{{listRows}}" selected-object="{{simpleModalSelectedObject}}" selected-items="{{simpleModalSelectedItems}}">
                </myvaadin-grid> 
            </template>    
        </div>      
        `;
    }    
    onListChange(e){return;}
    resetValue(){
        //return;
        if (!this.formElements){return;}
        if (!this.formElements[0]){return;}
        if (!this.formElements[0].name){return;}
        var elemName=this.formElements[0].name;
        //if (!this.formElements || !this.formElements[0] || !this.formElements[0].name){return;}
        if (elemName==undefined){return;}
        if (this.shadowRoot==undefined){return;}
        //console.log('resetValue', 'elemName', elemName);
        var field=this.shadowRoot.getElementById(elemName);
        if (field){field.resetValue();}
    }    
//     setFocusInField(){
// console.log('setFocusInfield', this.focusInField);
//         var elem=this.shadowRoot.getElementById(this.focusInField);  
//         elem.focus();
//     }
    keyPressed(e){
        //console.log('key pressed');
        if(e.key=="Enter") {
          this.dialogConfirmed();
          return;
        }   
    }  
    dialogConfirmed(){
        //console.log('dialogConfirmed', this.value);
        this.value='confirmed';
        const selectedItems={};
        var elem=this.shadowRoot.getElementById("simplemodaldialoggrid");
        if (elem && elem.selectedItems){selectedItems=elem.selectedItems;}
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'confirmed',
            'formElements':this.formElements,
            'selectedItems': selectedItems
            }
        }));   
        //this.resetValue; 
    }        
    dialogCanceled(){
        //console.log('dialogCanceled', this.value);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'canceled'
            }
        }));
        //this.resetValue;    
    } 
    dialogClosed(){
        //console.log('dialogCanceled', this.value);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'closed'
            }
        }));
        //this.resetValue;    
    }        
}

customElements.define('proc-deploy-simple-modal-dialog', ProcDeploySimpleModalDialog);