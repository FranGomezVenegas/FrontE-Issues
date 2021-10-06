import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '../../../../internalComponents/form-fields/field-controller';
import '../../../../internalComponents/Dialogs/dialogmodal-buttons.js';
import {FrontendEnvMonitSample} from '../../01moduleFunctionality/frontend-env-monit-sample';
import {EmDemoAapiEnvMonit} from '../../01moduleFunctionality/api-env-monit';
import {schema_name, microorganism_allowAddNotOnTheList, microorganism_allowAddNotOnTheList_formFields, microorganismList_fieldsToDisplay} from '../../03config/config-process';

class emDemoAListModalMicroorganism extends EmDemoAapiEnvMonit(FrontendEnvMonitSample(PolymerElement)) {
    static get properties() {
        return {
            listRows: {
                type:Array, value: [{code: 'LOD', method_name: 'LOD Method', method_version: 1}]
            },
            listHeader: {
                type:Array, value: microorganismList_fieldsToDisplay
            },            
            displayFreeText: {type:Boolean, value:microorganism_allowAddNotOnTheList},
            adhocFormFields: {type: Array, value: microorganism_allowAddNotOnTheList_formFields},
            procInstanceName:{type:String, value:schema_name},
            sampleId:{type: Number},
            finalToken: {type: String}, selectedObject:{type: Object},  
            callBackFunctionEnvMonitElem: Object,                
        }
    }
    static get template() {
        return html`  
        <style include="modal-dialogs">
        /* The Modal (background) */
        .modal-content {
            width: 450px;
        } 
        </style>        
        <div class="modal-content bgimg">
            <dialogmodal-buttons display-close-button></dialogmodal-buttons> 
            
            <template is="dom-if" if="{{displayFreeText}}">
                <template is="dom-repeat" items="{{adhocFormFields}}" as="currentfield">       
                    <field-controller on-keydown="keyPressedAdhoc" on-field-button-clicked="actionOnSel" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>             
            </template>
            
            <vaadin-grid id="mygridid" items="{{listRows}}">  
                <vaadin-grid-selection-column  auto-select></vaadin-grid-selection-column>
                <template is="dom-repeat" items="{{listHeader}}" as="fld">        
                    <vaadin-grid-column resizable width="{{fld.width}}" path="{{fld.name}}" header="{{fld.label_en}}"></vaadin-grid-column>
                </template>
            </vaadin-grid>      
        </div>    
        `;
    } 
    keyPressedAdhoc(e){
        var buttonName = 'buttonNewAdhocMicroorganism';
        if(e.key=="Enter") {
            var elem=this.shadowRoot.getElementById(buttonName);
            if (elem){
                //console.log('keyPressedAdhoc', 'elem', this.adhocFormFields[1]);    
                elem.focus();  
                var i=0;
                for (i = 0; i < this.adhocFormFields.length; i++) {               
                    if (this.adhocFormFields[i].name==buttonName){
                        var mye={ detail: {'buttonName': this.adhocFormFields[1].name,'value': this.adhocFormFields[1].value, 'buttonDefinition': this.adhocFormFields[1]}};    
                        this.addAdhocMicroorganism(mye);
                        return;
                    }
                }
            }
        }
    }

    actionOnSel(e){
//        console.log('actionOnSel');
        if (e.detail.buttonName=="buttonNewMicroorganism"){this.addMicroorganism(e);}
        if (e.detail.buttonName=="buttonNewAdhocMicroorganism"){this.addAdhocMicroorganism(e);}
    }   
    dialogConfirmed(){
        //console.log('clicked', this.$.mygrid.getSelectedRows());        
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'confirmed',
            'selectedItems': this.$.mygridid.selectedItems   
            }
        })); 
        this.$.mygridid.selectedItems=[];  
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
    // openDialog(){
    //     var fldName=this.adhocFormFields[0].name;
    //     var elem=this.shadowRoot.getElementById(fldName);   
    //     if (elem){elem.focus();}
    // }
    constructor(){
        super();     
//        this.$.mygridid.selectedItems=[];
    }  
}

customElements.define('em-demo-a-list-modal-microorganism', emDemoAListModalMicroorganism);