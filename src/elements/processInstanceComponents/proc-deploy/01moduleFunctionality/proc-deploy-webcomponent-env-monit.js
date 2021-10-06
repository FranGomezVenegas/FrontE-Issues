import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';

import {FunctionsEnvMonit} from './functions-env-monit';


//import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js'
import '../04procedure/dialogs/proc-deploy-simple-modal-dialog';
//import '../04procedure/dialogs/proc-deploy-list-modal-sample-audit.js'
//import '../04procedure/dialogs/proc-deploy-list-modal-enterresults';
 /* `proc-deploy-webcomponent-env-monit` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
import {dialogProductionLotNew, dialogProductionLotActivate, dialogincubBatchNew, dialogincubAddTmpReading, dialogIncubatorsListTableHeader,
    dialogInvestigationsListTableHeader, dialogInvestDecision} from '../03config/Dialogs/proc-deploy-dialogmodal-settings';
class procDeployWebcomponentEnvMonit extends FunctionsEnvMonit(connect(store)(PolymerElement)) {
    static get properties() {
        return {
            selectedObject: {type: Object},
            callBackFunction: {type: Object},
            callBackFunctionError: {type: Object},
            buttonDefinition: {type: Object},
            //fieldsDialogAddComment:{type: Array, notify: true, bubble: true, value: dialogAddComment},
            dialogProductionLotNew:{type: Array, notify: true, bubble: true, value:dialogProductionLotNew},
            dialogProductionLotActivate:{type: Array, notify: true, bubble: true, value:dialogProductionLotActivate},
            dialogincubBatchNew:{type: Array, notify: true, bubble: true, value:dialogincubBatchNew},
            dialogincubAddTmpReading:{type: Array, notify: true, bubble: true, value:dialogincubAddTmpReading},
            activeIncubatorsListHeader:{type: Array, value:dialogIncubatorsListTableHeader},
            activeIncubatorsListRows:{type: Array},
            openInvestigationsListHeader:{type: Array, value:dialogInvestigationsListTableHeader},
            openInvestigationsListRows:{type: Array},
            dialogInvestDecision:{type: Array, notify: true, bubble: true, value:dialogInvestDecision},
        }
    }
    stateChanged(state) {
        if (state.procDeploy!=null){   
            this.activeIncubatorsListRows=state.procDeploy.allIncubators;
            this.openInvestigationsListRows=state.procDeploy.openInvestigations;
        }
    }
    static get template() {
        return html`
        <!-- <style>
        //     paper-dialog{
            background:transparent;
        //         top:100px; left:80px; height:0px; width:0px; z-index: 100;  position: fixed;  
        //         /* height: 100vh; */
        //         width: 100vw;
        //         -webkit-transition: opacity 0.3s ease-in;
        //     }
        // </style> -->
        <!-- focus-in-field="{{fieldsDialogAddComment.0.name}}" -->


        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="productionLotNew" on-opened-changed="productionLotNewOpenedChangedListener">
            <proc-deploy-simple-modal-dialog id="productionLotNewDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogProductionLotNew}}" on-dialog-button-clicked="dialogClosedProductionLotNew"></proc-deploy-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="productionLotActivate" on-opened-changed="productionLotActivateOpenedChangedListener">
            <proc-deploy-simple-modal-dialog id="productionLotActivateDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogProductionLotActivate}}" on-dialog-button-clicked="dialogClosedProductionLotActivate"></proc-deploy-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="incubBatchNew" on-opened-changed="incubBatchNewOpenedChangedListener">
            <proc-deploy-simple-modal-dialog id="incubBatchNewDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogincubBatchNew}}" on-dialog-button-clicked="dialogClosedincubBatchNew"></proc-deploy-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="incubBatchAssignIncubator" on-opened-changed="incubBatchAssignIncubatorOpenedChangedListener">
            <proc-deploy-simple-modal-dialog id="incubBatchAssignIncubatorDialog" action-name="" display-confirm-button display-cancel-button 
                list-header="[[activeIncubatorsListHeader]]" list-rows="{{activeIncubatorsListRows}}"            
                on-dialog-button-clicked="dialogClosedincubBatchAssignIncubator"></proc-deploy-simple-modal-dialog>
        </paper-dialog>
        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="incubatorAddTempReading" on-opened-changed="incubatorAddTempReadingOpenedChangedListener">
            <proc-deploy-simple-modal-dialog id="incubatorAddTempReadingDialog" action-name="" display-confirm-button display-cancel-button 
                form-elements="{{dialogincubAddTmpReading}}"          
                on-dialog-button-clicked="dialogClosedIncubatorAddTempReading"></proc-deploy-simple-modal-dialog>
        </paper-dialog>
<!--
        <paper-dialog id="incubatorAddTempReading">
            <proc-deploy-list-modal-prodlotbrowser list-header="{{incubatorsListFieldsToDisplay}}" list-rows="{{activeIncubatorsList}}" 
            on-dialog-button-clicked="dialogClosedIncubatorAddTempReading" action-name="{{actionName}}"> </proc-deploy-list-modal-prodlotbrowser>
        </paper-dialog>  
-->        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox noshadowbox" id="investigationAddObject" on-opened-changed="incubBatchAssignIncubatorOpenedChangedListener">
            <proc-deploy-simple-modal-dialog id="investigationAddObjectDialog" action-name="" display-confirm-button display-cancel-button 
                list-header="[[openInvestigationsListHeader]]" list-rows="{{openInvestigationsListRows}}"            
                on-dialog-button-clicked="dialogClosedInvestigationAddObject"></proc-deploy-simple-modal-dialog>
        </paper-dialog>

        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox noshadowbox" id="investigationDecision" >
            <proc-deploy-simple-modal-dialog id="investigationDecisionDialog" action-name="" 
                display-confirm-button display-cancel-button form-elements="{{dialogInvestDecision}}"            
                on-dialog-button-clicked="dialogClosedInvestigationDecision"></proc-deploy-simple-modal-dialog>
        </paper-dialog>

        `;
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
    incubatorAddTempReadingOpenedChangedListener(){}

    incubBatchAssignIncubatorOpenedChangedListener(){}
    
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
    productionLotNewOpenedChangedListener(){
//console.log('productionLotNewOpenedChangedListener');        
        const modalwindow=this.shadowRoot.getElementById('productionLotNewDialog');
        if (modalwindow && modalwindow.parentElement.opened){
            if (modalwindow.resetValue){
                modalwindow.resetValue();
                //modalwindow.setFocusInField();
            }
        }
    }       
    openDialog(dialogName, actionName){             
        if (dialogName=="investigationNew"){
            console.log('openDialog >> investigationNew');
            this.investigationNewNoDialog(this.buttonDefinition);
            return;
        }     

        var elem=this.shadowRoot.getElementById(dialogName);
        // if (dialogName=="addComment"){
        //     elem.actionName=actionName;
        // }
        // if (dialogName=="sampleAudit" || dialogName=="enterResults"){
        //     var elemDialog=this.shadowRoot.getElementById(dialogName+"Dialog");
        //     elemDialog.loadData();
        // }
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
    }
}

customElements.define('proc-deploy-webcomponent-env-monit', procDeployWebcomponentEnvMonit);