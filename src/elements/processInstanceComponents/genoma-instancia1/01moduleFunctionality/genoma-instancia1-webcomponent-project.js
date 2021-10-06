import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';

import {ModuleFunctionsGenoma} from './0module-functions-genoma';

import {elementTableConfigVariablesSet, elementTableFamily, elementTableFamilyIndividual, elementTableIndividual, elementTableSamplesSet, elementTableSample} from './../03config/Project/genoma-instancia1-projectmainview-settings';
//, elementTableIndividual, elementTableSample, elementTableSampleVariable
//import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js'
import '../04procedure/dialogs/genoma-instancia1-simple-modal-dialog';
import '../04procedure/dialogs/genoma-instancia1-enter-variable-value-dialog';
//import '../04procedure/dialogs/genoma-instancia1-list-modal-sample-audit.js'
//import '../04procedure/dialogs/genoma-instancia1-list-modal-enterresults';
 /* `genoma-instancia1-webcomponent-project` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
import {dialogStudyNew, dialogStudyUpdate, dialogStudyIndividualNew, dialogStudyIndividualUpdate
    , dialogStudySamplesSetNew, dialogStudySamplesSetUpdate, dialogStudyFamilyNew, dialogStudyFamilyUpdate} 
    from '../03config/Dialogs/genoma-instancia1-dialogmodal-settings';
class GenomaInstancia1WebcomponentProject extends ModuleFunctionsGenoma(connect(store)(PolymerElement)) {
    static get properties() {
        return {
            selectedObject: {type: Object},
            selectedStudy: {type: Object},
            selectedStudyName: {type: String},
            selectedStudyFamily: {type: Object},
            selectedStudyIndividual: {type: Object},
            selectedStudySamplesSet: {type: Object},
            selectedStudySamples: {type: Object},
            
            selectedVariablesSet: {type: Object},
            
            callBackFunction: {type: Object},
            callBackFunctionError: {type: Object},
            buttonDefinition: {type: Object},
            //fieldsDialogAddComment:{type: Array, notify: true, bubble: true, value: dialogAddComment},
            dialogStudyNew:{type: Array, notify: true, bubble: true, value:dialogStudyNew},
            dialogStudyUpdate:{type: Array, notify: true, bubble: true, value:dialogStudyUpdate},
            dialogStudyIndividualNew:{type: Array, notify: true, bubble: true, value:dialogStudyIndividualNew},
            dialogStudyIndividualUpdate:{type: Array, notify: true, bubble: true, value:dialogStudyIndividualUpdate},
            dialogStudyFamilyNew:{type: Array, notify: true, bubble: true, value:dialogStudyFamilyNew},
            dialogStudyFamilyUpdate:{type: Array, notify: true, bubble: true, value:dialogStudyFamilyUpdate},
            dialogStudySamplesSetNew:{type: Array, notify: true, bubble: true, value:dialogStudySamplesSetNew},
            dialogStudySamplesSetUpdate:{type: Array, notify: true, bubble: true, value:dialogStudySamplesSetUpdate},
            activeIncubatorsListRows:{type: Array},

            dialogStudyFamilyList:{type: Array, notify: true, bubble: true, value:elementTableFamily},
            dialogStudyFamilyIndividualList:{type: Array, notify: true, bubble: true, value:elementTableFamilyIndividual},
            
            dialogStudyIndividualList:{type: Array, notify: true, bubble: true, value:elementTableIndividual},
            dialogStudySamplesSetList:{type: Array, notify: true, bubble: true, value:elementTableSamplesSet},
            dialogStudySamplesList:{type: Array, notify: true, bubble: true, value:elementTableSample},

            dialogConfigVariablesSetList:{type: Array, notify: true, bubble: true, value:elementTableConfigVariablesSet},

            
        }
    }
    stateChanged(state) {
        if (state.genomaInstancia1!=null){

            this.selectedVariablesSet=state.genomaInstancia1.configActiveVariablesAndVariablesSet.variables_set;

            this.selectedStudy=state.genomaInstancia1.selectedStudy;
            //console.log('genoma-instancia1-webcomponent-project, selectedStudy',this.selectedStudy);
            // this.selectedStudyName=this.selectedStudy.name;
            // this.selectedStudyFamily=this.selectedStudy.study_family;
            // this.selectedStudyIndividual=this.selectedStudy.study_individual;
            // this.selectedStudySamplesSet=this.selectedStudy.study_samples_set;
            // this.selectedStudySamples=this.selectedStudy.study_individual_sample;            
        }
    }
    static get template() {
        return html`
        <style>
             paper-dialog{
                 top:100px; left:1vw; height:0px; width:0px; z-index: 100;  position: fixed;  
                 -webkit-transition: opacity 0.3s ease-in;
             }
         </style> 
        <!-- focus-in-field="{{fieldsDialogAddComment.0.name}}" -->

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="variablesSetListAddToObject" on-opened-changed="variablesSetListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="variablesSetListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" on-dialog-button-clicked="dialogClosedVariablesSetListAddToObject"
                list-rows="{{selectedVariablesSet}}" list-header="{{dialogConfigVariablesSetList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="createNewStudy" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudyDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyNew}}" on-dialog-button-clicked="dialogClosedStudyNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="updateStudy" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="updateStudyDialog" action-name="" display-confirm-button display-cancel-button 
             selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyUpdate}}" on-dialog-button-clicked="dialogClosedStudyUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="createNewStudyIndividual" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudyIndividualDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyIndividualNew}}" on-dialog-button-clicked="dialogClosedStudyIndividualNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="updateStudyIndividual" on-opened-changed="studyNewOpenedChangedListener">
        {{selectedObject.study}} aaa
            <genoma-instancia1-simple-modal-dialog id="updateStudyIndividualDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyIndividualUpdate}}" on-dialog-button-clicked="dialogClosedStudyIndividualUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="createNewStudyFamily" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudyFamilyDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyFamilyNew}}" on-dialog-button-clicked="dialogClosedStudyFamilyNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="updateStudyFamily" on-opened-changed="studyNewOpenedChangedListener">
        {{selectedObject.study}} aaa
            <genoma-instancia1-simple-modal-dialog id="updateStudyFamilyDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudyFamilyUpdate}}" on-dialog-button-clicked="dialogClosedStudyFamilyUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="createNewStudySamplesSet" on-opened-changed="studyNewOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="createNewStudySamplesSetDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudySamplesSetNew}}" on-dialog-button-clicked="dialogClosedStudySamplesSetNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="updateStudySamplesSet" on-opened-changed="studyNewOpenedChangedListener">
        {{selectedObject.study}} aaa
            <genoma-instancia1-simple-modal-dialog id="updateStudySamplesSetDialog" action-name="" display-confirm-button display-cancel-button 
            selected-study-name="{{selectedStudyName}}" selected-object="{{selectedObject}}" form-elements="{{dialogStudySamplesSetUpdate}}" on-dialog-button-clicked="dialogClosedStudySamplesSetUpdate"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="updateProject" on-opened-changed="updateProjectOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="updateProjectDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}" form-elements="{{dialogProductionLotNew}}" on-dialog-button-clicked="dialogClosedProductionLotNew"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="enterVariableValue" on-opened-changed="enterVariableValueOpenedChangedListener">
            <genoma-instancia1-enter-variable-value-dialog id="enterVariableValueDialog" action-name="" display-confirm-button display-cancel-button 
                selected-study-name="{{selectedStudyName}}"  selected-object="{{selectedObject}}" form-elements="{{dialogStudyNew}}" on-dialog-button-clicked="dialogClosedEnterVariableValue"></genoma-instancia1-enter-variable-value-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="familyList" on-opened-changed="familyListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="familyListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedFamilyList"
                list-rows="{{selectedStudyFamily}}" list-header="{{dialogStudyFamilyList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="familyListRemove" on-opened-changed="familyListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="familyListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedFamilyList"
                list-rows="{{selectedObject.study_family_individual}}" list-header="{{dialogStudyFamilyIndividualList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="individualList" on-opened-changed="individualListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="individualListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedIndividualList"
                list-rows="{{selectedStudyIndividual}}" list-header="{{dialogStudyIndividualList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="individualListRemove" on-opened-changed="individualListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="individualListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedIndividualList"
                list-rows="{{selectedObject.study_individual}}" list-header="{{dialogStudyIndividualList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>
        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="samplesSetList" on-opened-changed="samplesSetListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="samplesSetListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedSamplesSetList"
                list-rows="{{selectedStudySamplesSet}}" list-header="{{dialogStudySamplesSetList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="samplesSetListRemove" on-opened-changed="samplesSetListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="samplesSetListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedSamplesSetList"
                list-rows="{{selectedObject.study_samples_set}}" list-header="{{dialogStudySamplesSetList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="samplesList" on-opened-changed="samplesListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="samplesListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedSamplesList"
                list-rows="{{selectedStudySamples}}" list-header="{{dialogStudySamplesList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="samplesListRemove" on-opened-changed="samplesListOpenedChangedListener">
            <genoma-instancia1-simple-modal-dialog id="samplesListDialog" action-name="" display-confirm-button display-cancel-button 
                selected-object="{{selectedObject}}" selected-study-name="{{selectedStudyName}}" on-dialog-button-clicked="dialogClosedSamplesList"
                list-rows="{{selectedObject.samples}}" list-header="{{dialogStudySamplesList.tableHdrFlds}}"></genoma-instancia1-simple-modal-dialog>
        </paper-dialog>

        `;
    }
    variablesSetListOpenedChangedListener(){}
    samplesSetListOpenedChangedListener(){}
    samplesListOpenedChangedListener(){}
    individualListOpenedChangedListener(){}
    familyListOpenedChangedListener(){}
    enterVariableValueOpenedChangedListener(){
        this.$.enterVariableValueDialog.openListElement();
    }
    
    // AddCommentOpenedChangedListener(){
    //     const modalwindow=this.shadowRoot.getElementById('addCommentDialog');
    //     if (modalwindow && modalwindow.parentElement.opened){
    //         if (modalwindow.resetValue){
    //             modalwindow.resetValue();
    //             //modalwindow.setFocusInField();
    //         }
    //     }
    // }

    studyNewOpenedChangedListener(){}
    incubBatchNewOpenedChangedListener(){
        const modalwindow=this.shadowRoot.getElementById('incubBatchNewDialog');
        if (modalwindow && modalwindow.parentElement.opened){
            if (modalwindow.resetValue){
                modalwindow.resetValue();
                //modalwindow.setFocusInField();
            }
        }
    }
    productionLotActivateOpenedChangedListener(){
        const modalwindow=this.shadowRoot.getElementById('productionLotActivateDialog');
        if (modalwindow && modalwindow.parentElement.opened){
            if (modalwindow.resetValue){
                modalwindow.resetValue();
                //modalwindow.setFocusInField();
            }
        }
    }       
    updateProjectOpenedChangedListener(){
        const modalwindow=this.shadowRoot.getElementById('productionLotNewDialog');
        if (modalwindow && modalwindow.parentElement.opened){
            if (modalwindow.resetValue){
                modalwindow.resetValue();
                //modalwindow.setFocusInField();
            }
        }
    }       
    openDialog(dialogName, actionName){  
        // console.log('openDialog fired');     
        if ( (dialogName=='STUDY_FAMILY_ADD_INDIVIDUAL') || (dialogName=='STUDY_FAMILY_REMOVE_INDIVIDUAL') ){
            if (this.selectedObject.individual_id!=undefined){
                dialogName='familyList';}
            else{dialogName='individualList';}            
        }     
        if ( (dialogName=='STUDY_SAMPLES_SET_ADD_SAMPLE') || (dialogName=='STUDY_SAMPLES_SET_REMOVE_SAMPLE') ){
            if (this.selectedObject.sample_id!=undefined){
                dialogName='samplesSetList';}
            else{dialogName='samplesList';}
        }   
        if (String(actionName).includes("REMOVE")){dialogName=dialogName+"Remove";}                    
        var elem=this.shadowRoot.getElementById(dialogName);
        // if ( (actionName=='STUDY_FAMILY_REMOVE_INDIVIDUAL') ){                
        // //    individualList  list-rows
        //     if (this.selectedObject.individual_id!=undefined){
        //         //elem.listRows=this.selectedObject.;
        //     }else{
        //         elem.listRows=this.selectedObject.study_individual;
        //     }
        // }
        // if (dialogName=="addComment"){
        //     elem.actionName=actionName;
        // }
        // if (dialogName=="sampleAudit" || dialogName=="enterResults"){
        //     var elemDialog=this.shadowRoot.getElementById(dialogName+"Dialog");
        //     elemDialog.loadData();
        // }
        console.log(dialogName, this.selectedObject);
        elem.open();
    }
    closeDialog(dialogName){        
        var elem=this.shadowRoot.getElementById(dialogName);
        elem.close();
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
        this.selectedObject=this.selectedProject;
    }
}

customElements.define('genoma-instancia1-webcomponent-project', GenomaInstancia1WebcomponentProject);