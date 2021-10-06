import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '../form-fields/field-button';
//import {ApiSample} from '../../modules/process-us/01moduleFunctionality/api-sample'; borrado por refactoring
import '../Dialogs/dialogmodal-buttons';
//import './../dialogs/shared-styles';
//import './../../../config/styles/div-style.js'; 
/**
 * `card-form` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class CardForm extends PolymerElement { //ApiSample(PolymerElement) {
    static get properties() {
        return {
            dialogButtons: { type: Array},
            buttons: {type: Array},
            formFields: Array,
            buttonCancel: {type: Object,
                value:{
                name: "Cancel",
                label_en: "Cancel", "label_es": "Cancelar",
                type: "button",
                confirmuser_required: false,
                read_only: false,}
            }  
        }
    }
    static get template() {
        return html`  
        <style include="card-form-style"></style>
        <div class="internalComponentCardFormMainDiv internalComponentCardFormMainDivBgimg">
            <dialogmodal-buttons display-close-button
                on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmedbutton-clicked="dialogConfirmed"> </dialogmodal-buttons>             
            <div name="Buttons1" class="buttonGroup">
                <template is="dom-repeat" items="{{buttons}}" as="currentfield">                       
                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                    on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                    </field-controller>
                </template>  
            </div>    
            <template is="dom-repeat" items="{{formFields}}" as="currentfield">      
                 <!-- <p> Curr Fld={{currentfield.name}} / {{currentfield.type}} </p>  -->
                 <field-controller on-keydown="keyPressed" on-field-button-clicked="cardFormdButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}">
                </field-controller> 
            </template>       
  
        </div>            
        `;
    } 
    cardFormdButtonClicked(e) {
        console.log('card-form, button clicked!. Button action=', e.detail.buttonName);
        this.dispatchEvent(new CustomEvent('field-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {'buttonName': e.detail.buttonName,'value': e.detail, 'buttonDefinition':e}
        }));    
    }

    dialogConfirmed(){
        console.log('dialogConfirmed', 'this.selectedObject', this.selectedObject);        
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'confirmed',
            // 'selectedItems': this.$.mygridid.selectedItems   Borrado por refactoring. no hay ningún mygridid aqui
            }
        })); 
//        this.$.mygridid.selectedItems=[];  
    }        
    dialogCanceled(){
        //console.log('clicked', this.value);
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
    }
    /*ready(){
        this.addEventListener('toast-error', (e) => this.toastError(e) );
    } */       
}

customElements.define('card-form', CardForm);