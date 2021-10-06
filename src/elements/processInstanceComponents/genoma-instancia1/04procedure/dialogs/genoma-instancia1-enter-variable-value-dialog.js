import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import './genoma-instancia1-dialogmodal-buttons.js';
//import '@polymer/paper-checkbox/paper-checkbox';
import '../../03config/Dialogs/genoma-instancia1-dialogmodal-settings';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';
import {dialogEnterVariableValueInteger} from '../../03config/Dialogs/genoma-instancia1-dialogmodal-settings';
/**
 * `genoma-instancia1-enter-variable-value-dialog` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class GenomaInstancia1EnterVariableValueDialog extends ModuleFunctionsGenoma(PolymerElement) {
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

            allowedListValues:{type:Array},
            isList: {type: Boolean},
            isInteger: {type: Boolean},
            integerFlds:{ type: Array, value: dialogEnterVariableValueInteger},   
            newValue: {type:String, value: ''},         
        }
    }
    convertAllowedValuesFldToArray(fldval){
        var fldvalArr = fldval.split('|');
        return fldvalArr;
    }
    openListElement(){
        this.isList=false;
        this.isInteger=false;
        if (this.selectedObject==undefined || this.selectedObject.type==undefined) {return;}
        if (this.selectedObject.type.toUpperCase()=='CATEGORICAL'){this.isList=true; return;}
        if (this.selectedObject.type.toUpperCase()=='INTEGER'){
            this.isInteger=true; 
            //this.$.numSamples.value=this.selectedObject.value ; 
            return;}
        return;
    }
    static get template() {
        return html`        
        <style include="genoma-instancia1-dialogmodal-style"></style>       
        
        <div class="modal-content bgimg">
        
<!--        {{selectedObject.type}}  -->
            <genoma-instancia1-dialogmodal-buttons display-close-button={{displayCloseButton}} display-cancel-button={{displayCancelButton}} display-confirm-button={{displayConfirmButton}}
                on-dialog-closebutton-clicked="dialogClosed" on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
            ></genoma-instancia1-dialogmodal-buttons> 
            <div id="newvalue">
                <template is="dom-if" if="{{isList}}">
                    <template is="dom-repeat" items="{{convertAllowedValuesFldToArray(selectedObject.allowed_values)}}" as="currentListValue">    
                        <paper-checkbox new-value="{{currentListValue}}" cur-object-type="{{currentstudycardelements.name}}" cur-object="{{curStudyFamily}}" on-change="selCheckObject">{{currentListValue}}</paper-checkbox> 
                        <!-- <field-controller on-keydown="keyPressed" callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" on-keydown="microorgKeyPressedAdhoc" on-field-button-clicked="microorgActionOnSel" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller> -->
                    </template>    
                </template>
                <template is="dom-if" if="{{isInteger}}">
                    <template is="dom-repeat" items="{{integerFlds}}" as="currentfield">       
                        <field-controller on-keydown="keyPressed" callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" on-keydown="microorgKeyPressedAdhoc" on-field-button-clicked="microorgActionOnSel" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>    
                </template>    
            </div>
        </div>      
        `;
    }    
    resetValue(){
        return;
        if (!this.formElements){return;}
        if (!this.formElements[0]){return;}
        if (!this.formElements[0].name){return;}
        var elemName=this.formElements[0].name;
        //if (!this.formElements || !this.formElements[0] || !this.formElements[0].name){return;}
        console.log('resetValue', 'elemName', elemName);
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
    selCheckObject(e){
        if (e.currentTarget.ariaChecked==false){this.newValue=''};
        if (e.currentTarget.ariaChecked=="true"){
            this.newValue=String(e.currentTarget.newValue)}
        else{this.newValue='';}
        console.log('selCheckObject', 'this.newValue', this.newValue, e.currentTarget.newValue);

    }
    getNewValue(){
        if (this.selectedObject==undefined || this.selectedObject.type==undefined) {return;}
        if (this.selectedObject.type.toUpperCase()=='CATEGORICAL'){return;}
        if (this.selectedObject.type.toUpperCase()=='INTEGER'){
            var elem=this.shadowRoot.getElementById("VariableValueInteger");        
            this.newValue=elem.__data.field.value;
            return;}
        if (this.selectedObject.type.toUpperCase()=='TEXT'){
            var elem=this.shadowRoot.getElementById("VariableValueText");        
            this.newValue=elem.__data.field.value;
            return;}
        return;
    }
    dialogConfirmed(){   
        this.getNewValue();
        console.log('dialogConfirmed', this.value, this.newValue);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.newValue,
            'dialogState': 'confirmed',                 
            }
        }));   
        //this.resetValue; 
    }        
    dialogCanceled(){
        this.newValue='';
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
        this.newValue='';
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

customElements.define('genoma-instancia1-enter-variable-value-dialog', GenomaInstancia1EnterVariableValueDialog);