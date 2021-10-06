import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '@polymer/iron-collapse/iron-collapse';
import './em-demo-a-dialogmodal-buttons.js';
import '../../03config/Dialogs/em-demo-a-list-modal-enterresults-settings';

import {enterResult, resultCheckerMessages} from '../../03config/Dialogs/em-demo-a-list-modal-enterresults-settings';
import {FrontendEndpointsEnvMonitSamples} from  '../../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import '../../../../internalComponents/form-fields/field-icon-button';

import {iconsMethods} from '../../01moduleFunctionality/functions-icons';
import {SampleIcons} from '../../../../../platform-mixins/functions/config-icons';

/**
 * `em-demo-a-list-modal-enterresults` DEmDemoA
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EmDemoAListModalEnterResults extends SampleIcons(iconsMethods(FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))))) {
    static get properties() {
        return {
            opened: {type: Boolean, value: true, reflectToAttribute: true},
            horizontal: {type: Boolean},

            displayCancelButton: {type: Boolean, notify: true},
            displayConfirmButton: {type: Boolean, notify: true},            
            displayCloseButton:  {type: Boolean, notify: true},
            tableDefinition: {type: Object, value:enterResult},
            resultCheckerMessages: {type: Object, value:resultCheckerMessages},
            listRows: Array,
            listHeader: Array,
            sampleId: Number,
            testingGroup: String,
            selectedObject: {type: Object, notify: true},  
            selectedLanguage: {type: String},
            detailOpenStatus: {type: Boolean, value:false},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){ 
            this.listRows= state.emDemoA.givenSampleAnalysisResultEntryList;}
    }        
    toggle() {
        this.$.collapse.toggle();
    }   
    getSpecRule(item){
        return item.spec_eval_detail;
    }
    getItemValue(flddetail, item){    
        if (flddetail.name=='locking_reason'){
            if (this.selectedLanguage=="en"){
                if(item.locking_reason && item.locking_reason.message_en){return item.locking_reason.message_en;
                }else{return '';}
            }
            if (this.selectedLanguage=="es"){
                if(item.locking_reason && item.locking_reason.message_es){return item.locking_reason.message_es;
                }else{return '';}
            }
        }    
        if (flddetail.name=='spec_rule'){
            return this.getSpecRule(item);
        }
        return item[flddetail.name];
    }
    static get template() {
        return html`        
        <style include="em-demo-a-dialog-enterresults-settings"></style>      
        <div class="modal-content bgimg">
        <!-- [[tableDefinition.tableTitle.label.label_es]] -->
            <template is="dom-if" if="[[tableDefinition.tableTitle.label.display]]"> 
                <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
            </template>  
            <div name="tableDefinitionButtons" class="buttonGroup">
                <em-demo-a-dialogmodal-buttons display-close-button={{tableDefinition.dialogButtons.displayCloseButton}} display-cancel-button={{tableDefinition.dialogButtons.displayCancelButton}} display-confirm-button={{tableDefinition.dialogButtons.displayConfirmButton}}
                    on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
                ></em-demo-a-dialogmodal-buttons>             
                <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
                    <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>  
                </template>  
            </div>    
            <div>
            <vaadin-grid class="grid" id="mygridid" items="{{listRows}}" as="item">  
                <template name="sampleAnalysis" class="row-details">
                    <div class="details">
                        <img style="height:24px; width: 24px;" src="{{getSpecEvalIcon(fld, item)}}"> 
                        <template is="dom-repeat" items="{{tableDefinition.detailsFieldToDisplay}}" as="flddetail">  
                            <p><b>{{labelValue(selectedLanguage, flddetail)}}:</b> {{getItemValue(flddetail, item)}}</p>
<!--                            <p>Spec Eval: {{item.spec_eval}} Detail: {{item.spec_eval_detail}}
                            Spec Rule: {{item.spec_rule_with_detail}} </p>
                            <template is="dom-if" if="[[item.is_locked]]"> 
                                <p>{{labelValue(selectedLanguage, item.locking_reason)}}<p>
                            </template> -->
                        </template>
                    </div> 
                </template>                
                <vaadin-grid-column style="width: 30px;">
                    <template style="width: 51px;" class="header">{{labelValue(selectedLanguage, fld)}}</template>
                    <template>
                        <!-- <iron-icon icon="[[titleIcon]]" on-click="toggle"></iron-icon> 
                        <iron-collapse id="collapse" hidden="{{!opened}}" opened="{{opened}}" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0"> -->
                        <vaadin-checkbox aria-label$="Ver Detalle" unchecked checked="{{detailsOpened}}" > 
                        </vaadin-checkbox> 
                        </iron-collapse>
                    </template>
                </vaadin-grid-column>
                
                <template is="dom-repeat" items="{{tableDefinition.fieldToDisplay}}" as="fld">               
                    <template is="dom-if" if="{{!fld.hidden}}">
                        <template is="dom-if" if="{{!fld.editable}}">
                            <template is="dom-if" if="{{!fld.is_icon}}">
                                <vaadin-grid-column resizable path="{{fld.name}}" header="{{labelValue(selectedLanguage, fld)}}"></vaadin-grid-column>                                
                            </template>
                            <template is="dom-if" if="{{fld.is_icon}}">
                                <vaadin-grid-column style="width: 30px;">
                                    <template style="width: 51px;" class="header">{{labelValue(selectedLanguage, fld)}}</template>
                                    <template>
                                        <img style="height:24px; width: 24px;" src="{{getSpecEvalIcon(fld, item)}}"> 
                                    </template>
                                </vaadin-grid-column>
                            </template>
                        </template>
                        <template is="dom-if" if="{{fld.editable}}">
                        <template is="dom-if" param-type="{{fld.param_type}}" if="{{editableIsInteger}}">
                            <vaadin-grid-column resizable >          
                                <template class="header">{{labelValue(selectedLanguage, fld)}}</template>
                                <template>
                                    <paper-input class$="{{resultClass(item.is_locked, item.spec_eval)}}" type="{{fld.param_type}}" on-change="enterResult" type="text" 
                                        row-index="{{item.index}}" index="{{index}}" id="{{index}}" required value="{{item.raw_value}}" 
                                        readonly$="[[item.is_locked]]" title="{{item.index}}"></paper-input>
                                </template>
                            </vaadin-grid-column>                     
                        </template>
                        </template>
                    </template>
                </template>               
            </vaadin-grid>  
        </div>
        </div>
        `;
    }
    refreshWindow() {
        this.loadData();
    }    
    detailCheckToggle(){
        console.log('detailCheckToggle');
        this.detailOpenStatus=!this.detailOpenStatus;
    }
    resultClass(islocked, specEval){
        //console.log('resultClass', 'e', e);
        if (islocked){return 'resultLocked';}
        if (specEval="IN"){return 'resultIn';}  
        if (specEval.includes("OUT_SPEC")){return 'resultOutRange'}
        return 'resultInAlarm';
    }
    editableIsInteger(e){
        //console.log('editableIsInteger', e); //this.$.mygridid.__data.items[e.currentTarget.id].param_type);
        if (fld=='INTEGER') {return true;}
        if (fld=='FLOAT') {return true;}
        return true;
    }
    itemSelected(e) {        
        const item = e.detail.value;
        this.selectedObject=item;
        console.log(' em-demo-a-list-modal-enterresults >>EmDemoAted', this.selectedObject); 
        this.$.mygridid.selectedItems =[];
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
    loadData(){
console.log('loadData', 'sampleId', this.sampleId, 'this.testingGroup', this.testingGroup);
        var datas=[];
        datas.sampleId=this.sampleId;
        datas.fieldToRetrieve=this.tableDefinition.fieldToRetrieve;
        datas.fieldToSort=this.tableDefinition.fieldToSort;
        datas.tableDefinition=this.tableDefinition;
        if (this.testingGroup){
            datas.sampleAnalysisWhereFieldsName="testing_group";
            datas.sampleAnalysisWhereFieldsValue=this.testingGroup;
        }
        datas.sampleAnalysisWhereFieldsName=datas.sampleAnalysisWhereFieldsName+"|status not in";
        datas.sampleAnalysisWhereFieldsValue=datas.sampleAnalysisWhereFieldsValue+'|REVIEWED*String';
    
        this.getGivenSampleAnalysisResultEntry(datas);
    }
    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();

    }
}

customElements.define('em-demo-a-list-modal-enterresults', EmDemoAListModalEnterResults);

// import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../../../../../store.js';
// import '@polymer/iron-collapse/iron-collapse';
// import './em-demo-a-dialogmodal-buttons.js';
// import '../../03config/Dialogs/em-demo-a-list-modal-enterresults-settings';

// import {enterResult, resultCheckerMessages} from '../../03config/Dialogs/em-demo-a-list-modal-enterresults-settings';
// import {FrontendEndpointsEnvMonitSamples} from  '../../01moduleFunctionality/endpoints-frontend-env-monit-samples';
// import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';
// import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
// import '../../../../internalComponents/form-fields/field-icon-button';

// import {iconsMethods} from '../../01moduleFunctionality/functions-icons';
// import {SampleIcons} from '../../03config/config-icons';

// /**
//  * `em-demo-a-list-modal-enterresults` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class EmDemoAListModalEnterResults extends SampleIcons(iconsMethods(FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))))) {
//     static get properties() {
//         return {
//             opened: {type: Boolean, value: true, reflectToAttribute: true},
//             horizontal: {type: Boolean},

//             displayCancelButton: {type: Boolean, notify: true},
//             displayConfirmButton: {type: Boolean, notify: true},            
//             displayCloseButton:  {type: Boolean, notify: true},
//             tableDefinition: {type: Object, value:enterResult},
//             resultCheckerMessages: {type: Object, value:resultCheckerMessages},
//             listRows: Array,
//             listHeader: Array,
//             sampleId: Number,
//             selectedObject: {type: Object, notify: true},  
//             selectedLanguage: {type: String},
//             detailOpenStatus: {type: Boolean, value:false},
//         }
//     }
//     toggle() {
//         this.$.collapse.toggle();
//     }   
//     getSpecRule(item){
//         return item.spec_eval_detail;
//     }
//     getItemValue(flddetail, item){    
//         if (flddetail.name=='locking_reason'){
//             if (this.selectedLanguage=="en"){
//                 if(item.locking_reason && item.locking_reason.message_en){return item.locking_reason.message_en;
//                 }else{return '';}
//             }
//             if (this.selectedLanguage=="es"){
//                 if(item.locking_reason && item.locking_reason.message_es){return item.locking_reason.message_es;
//                 }else{return '';}
//             }
//         }    
//         if (flddetail.name=='spec_rule'){
//             return this.getSpecRule(item);
//         }
//         return item[flddetail.name];
//     }
//     static get template() {
//         return html`        
//         <style include="em-demo-a-dialog-enterresults-settings""></style>      
//         <div class="modal-content bgimg">
//         <!-- [[tableDefinition.tableTitle.label.label_es]] -->
//             <template is="dom-if" if="[[tableDefinition.tableTitle.label.display]]"> 
//                 <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
//             </template>  
//             <div name="tableDefinitionButtons" class="buttonGroup">
//                 <em-demo-a-dialogmodal-buttons display-close-button={{tableDefinition.dialogButtons.displayCloseButton}} display-cancel-button={{tableDefinition.dialogButtons.displayCancelButton}} display-confirm-button={{tableDefinition.dialogButtons.displayConfirmButton}}
//                     on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
//                 ></em-demo-a-dialogmodal-buttons>             
//                 <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
//                     <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
//                 </template>  
//                 <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
//                     <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
//                         <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
//                     </template>  
//                 </template>  
//             </div>    
//             <div>
//             <vaadin-grid class="grid" id="mygridid" items="{{listRows}}" as="item">  
//                 <template name="sampleAnalysis" class="row-details">
//                     <div class="details">
//                     <img style="height:24px; width: 24px;" src="{{getSpecEvalIcon(fld, item)}}"> 
//                     <template is="dom-repeat" items="{{tableDefinition.detailsFieldToDisplay}}" as="flddetail">  
//                             <p><b>{{labelValue(selectedLanguage, flddetail)}}:</b> {{getItemValue(flddetail, item)}}</p>
// <!--                            <p>Spec Eval: {{item.spec_eval}} Detail: {{item.spec_eval_detail}}
//                             Spec Rule: {{item.spec_rule_with_detail}}</p>
//                             <template is="dom-if" if="[[item.is_locked]]"> 
//                                 <p>{{labelValue(selectedLanguage, item.locking_reason)}}<p>
//                             </template> -->
//                         </template>
//                     </div> 
//                 </template>                
//                 <vaadin-grid-column style="width: 30px;">
//                     <template style="width: 51px;" class="header">{{labelValue(selectedLanguage, fld)}}</template>
//                     <template>
//                         <!-- <iron-icon icon="[[titleIcon]]" on-click="toggle"></iron-icon>
//                         <iron-collapse id="collapse" hidden="{{!opened}}" opened="{{opened}}" horizontal="[[horizontal]]" no-animation="[[noAnimation]]" tabindex="0"> -->
//                         <vaadin-checkbox aria-label$="Ver Detalle" unchecked checked="{{detailsOpened}}" > 
//                             <img style="height:24px; width: 24px;" src="{{getSampleStatusIcon(fld.name, item)}}"> 
//                         </vaadin-checkbox> 
//                         </iron-collapse>
//                     </template>
//                 </vaadin-grid-column>
                
//                 <template is="dom-repeat" items="{{tableDefinition.fieldToDisplay}}" as="fld">               
//                     <template is="dom-if" if="{{!fld.hidden}}">
//                         <template is="dom-if" if="{{!fld.editable}}">
//                             <template is="dom-if" if="{{!fld.is_icon}}">
//                                 <vaadin-grid-column resizable path="{{fld.name}}" header="{{labelValue(selectedLanguage, fld)}}"></vaadin-grid-column>                                
//                             </template>
//                             <template is="dom-if" if="{{fld.is_icon}}">
//                                 <vaadin-grid-column style="width: 30px;">
//                                     <template style="width: 51px;" class="header">{{labelValue(selectedLanguage, fld)}}</template>
//                                     <template>
//                                         <img style="height:24px; width: 24px;" src="{{getSpecEvalIcon(fld, item)}}"> 
//                                     </template>
//                                 </vaadin-grid-column>
//                             </template>
//                         </template>
//                         {{fld.length}}-{{fld.name}}-{{fld.editable}}
//                         <template is="dom-if" if="{{fld.editable}}">
//                         <template is="dom-if" param-type="{{fld.param_type}}" if="{{editableIsInteger}}">
//                             <vaadin-grid-column resizable >          
//                                 <template class="header">{{fld.param_type}}-{{labelValue(selectedLanguage, fld)}}</template>
//                                 <template>
//                                     <paper-input class$="{{resultClass(item.is_locked, item.spec_eval)}}" type="{{fld.param_type}}" on-change="enterResult" type="text" 
//                                         row-index="{{item.index}}" index="{{index}}" id="{{index}}" required value="{{item.raw_value}}" 
//                                         readonly$="[[item.is_locked]]" title="{{item.index}}"></paper-input>
//                                 </template>
//                             </vaadin-grid-column>                     
//                         </template>
//                         </template>
//                     </template>
//                 </template>               
//             </vaadin-grid>  
//         </div>
// <!--
//             <vaadin-grid id="mygridid" items="{{listRows}}" on-active-item-changed="itemSelected" 
//             column-reordering-allowed multi-sort selected-object="{{selectedObject}}">  
//                 <vaadin-grid-selection-column  auto-select></vaadin-grid-selection-column>
//                 <template name="auditLvl2" class="row-details">
//                     <div class="details">
//                         <vaadin-grid id="grid-level2" name="audit-lvl2" items="[[item.sublevel]]" active-item="{{activeItem}}">
//                             <template is="dom-repeat" items="{{tableDefinition.fieldToDisplay}}" as="fld">        
//                                 <vaadin-grid-column resizable path="{{fld.name}}" header="{{labelValue(selectedLanguage, fld)}}"></vaadin-grid-column>
//                             </template>
//                         </vaadin-grid> 
//                     </div> 
//                 </template>
// -->                
//         </div>
//         `;
//     }

//     detailCheckToggle(){
//         console.log('detailCheckToggle');
//         this.detailOpenStatus=!this.detailOpenStatus;
//     }
//     resultClass(islocked, specEval){
//         //console.log('resultClass', 'e', e);
//         if (islocked){return 'resultLocked';}
//         if (specEval="IN"){return 'resultIn';}  
//         if (specEval.includes("OUT_SPEC")){return 'resultOutRange'}
//         return 'resultInAlarm';
//     }
//     editableIsInteger(e){
//         //console.log('editableIsInteger', e); //this.$.mygridid.__data.items[e.currentTarget.id].param_type);
//         if (fld=='INTEGER') {return true;}
//         if (fld=='FLOAT') {return true;}
//         return true;
//     }
//     itemSelected(e) {        
//         const item = e.detail.value;
//         this.selectedObject=item;
//         console.log(' em-demo-a-list-modal-enterresults >> itemSelected', this.selectedObject); 
//         this.$.mygridid.selectedItems =[];
//     }       
//     dialogConfirmed(){
//         //console.log('clicked', this.$.mygrid.getSelectedRows());        
//         this.value='confirmed';
//         this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
//             bubbles: true,
//             composed: true,
//             detail: {
//             'buttonName': this.name,
//             'value': this.value,
//             'dialogState': 'confirmed',
//             'selectedItems': this.$.mygridid.selectedItems   
//             }
//         })); 
//         this.$.mygridid.selectedItems=[];  
//     }        
//     dialogCanceled(){
//         //console.log('clicked', this.value);
//         this.value='confirmed';
//         this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
//             bubbles: true,
//             composed: true,
//             detail: {
//             'buttonName': this.name,
//             'value': this.value,
//             'dialogState': 'canceled'
//             }
//         }));    
//     }     
//     stateChanged(state) {
//         this.selectedLanguage = state.app.user.appLanguage;
//         if (state.emDemoA!=null){ 
//             this.listRows= state.emDemoA.givenSampleAnalysisResultEntryList;}
//     }        
//     refreshWindow() {
//         this.loadData();
//     }
//     loadData(){
// console.log('loadData', 'sampleId', this.sampleId);
//         var datas=[];
//         datas.sampleId=this.sampleId;
//         datas.fieldToRetrieve=this.tableDefinition.fieldToRetrieve;
//         datas.fieldToSort=this.tableDefinition.fieldToSort;
//         datas.tableDefinition=this.tableDefinition;
//         this.getGivenSampleAnalysisResultEntry(datas);
//     }
//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//         super();
//     }

//     /**
//      * Use for one-time configuration of your component after local
//      * DOM is initialized.
//      */
//     ready() {
//         super.ready();

//     }
// }

// customElements.define('em-demo-a-list-modal-enterresults', EmDemoAListModalEnterResults);