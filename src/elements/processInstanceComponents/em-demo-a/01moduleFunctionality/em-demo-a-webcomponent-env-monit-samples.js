import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';

import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import {FrontendEndpointsEnvMonitSamples} from './endpoints-frontend-env-monit-samples';
import {FrontendEndpointsEnvMonitForBatches} from './endpoints-frontend-env-monit';

//import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
// import {NeonAnimationRunnerBehavior} from '@polymer/neon-animation/neon-animation-runner-behavior.js';
// import '@polymer/neon-animation/animations/scale-down-animation.js';
// import '@polymer/neon-animation/animations/scale-up-animation.js';
// import '@polymer/neon-animation/animations/fade-out-animation.js';

//import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog.js'
import '../04procedure/dialogs/em-demo-a-simple-modal-dialog';
import '../04procedure/dialogs/em-demo-a-list-modal-sample-audit.js'
import '../04procedure/dialogs/em-demo-a-list-modal-enterresults';
import {incubActiveBatches} from './../03config/em-demo-a-batches-settings';

 /* `em-demo-a-webcomponent-env-monit-samples` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
import {dialogAddComment, dialogMicroorgListTableHeader, dialogSampleMicroorgListTableHeader, dialogMicroorgListAdhocMicroorg} from '../03config/Dialogs/em-demo-a-dialogmodal-settings';
//mixinBehaviors([NeonAnimationRunnerBehavior],
class EmDemoAWebcomponentEnvMonitSamples extends  FrontendEndpointsEnvMonitForBatches(FrontendEndpointsEnvMonitSamples(FunctionsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            selectedObject: {type: Object},
            selectedItems: {type: Array},
            callBackFunction: {type: Object},
            callBackFunctionError: {type: Object},
            buttonDefinition: {type: Object},
            fieldsDialogAddComment:{type: Array, notify: true, bubble: true, value: dialogAddComment},
            microorgListHeader:{type: Array, value:dialogMicroorgListTableHeader},
            sampleMicroorgListHeader:{type: Array, value:dialogSampleMicroorgListTableHeader},            
            microorgListRows:{type: Array},
            sampleMicroorgListRows:{type: Array},
            dialogMicroorgListAdhocMicroorg:{type: Array, value:dialogMicroorgListAdhocMicroorg},
            allActiveBatchesByStage:{type: Array},
            batchesHeader:{type: Array, value: 
                [
                    {name: 'iconCol', label_en:'', label_es: '',is_icon:true, iconMethod:'getBatchInProgress', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/Incubators/', sort:false, filter:true, min_width:'20%', width:'20%'},
                    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false, width:'30%'},
                ]}
        }
    }
    stateChanged(state) {
        if (state.emDemoA!=null){   
            this.microorgListRows=state.emDemoA.microorganismList;
            this.allActiveBatchesByStage= state.emDemoA.allActiveBatchesByStage;
            //console.log('batchesHeader', this.batchesHeader);
            // if (state.emDemoA.sampleMicroorgList){
            //     this.sampleMicroorgListRows=state.emDemoA.sampleMicroorgList;
            //     console.log('stateChanged', this.sampleMicroorgList);
            // }
        }
    }    

    static get template() {
        return html`
        <style>
            paper-dialog{
                background:transparent;
                top:13.85vh; left:1vw; height:0px; width:0px; z-index: 98;  position: fixed;  
                /* height: 100vh; */
                width: 100vw;
                -webkit-transition: opacity 0.3s ease-in;
            }
        </style>
        <!-- focus-in-field="{{fieldsDialogAddComment.0.name}}" --> <!-- on-opened-changed="AddCommentOpenedChangedListener">-->
        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="addComment" >
            <em-demo-a-simple-modal-dialog id="addCommentDialog" action-name="" display-confirm-button display-cancel-button form-elements="{{fieldsDialogAddComment}}" 
            on-dialog-button-clicked="dialogClosedAddComment"> </em-demo-a-simple-modal-dialog>
        </paper-dialog>

        <!-- modal entry-animation="scale-up-animation" exit-animation="fade-out-animation" -->
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="sampleAudit" >
          <em-demo-a-list-modal-sample-audit id="sampleAuditDialog" 
            sample-id={{selectedObject.sample_id}}></em-demo-a-list-modal-sample-audit>
        </paper-dialog>
        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="enterResults">
          <em-demo-a-list-modal-enterresults id="enterResultsDialog" 
            sample-id={{selectedObject.sample_id}}></em-demo-a-list-modal-enterresults>
        </paper-dialog> <!--on-opened-changed="addSampleMicroorgOpenedChangedListener"-->
        
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="addSampleMicroorg" >
            <em-demo-a-simple-modal-dialog id="addSampleMicroorgDialog" display-close-button allow-multi-select
                list-header="[[microorgListHeader]]" list-rows="{{microorgListRows}}"  form-elements="{{dialogMicroorgListAdhocMicroorg}}"           
                callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" call-back-refresh-window="{{refreshWindow}}"
                selected-object="{{selectedObject}}" selected-items="{{selectedItems}}"
                sample-id={{selectedObject.sample_id}} on-dialog-button-clicked="dialogClosedaddSampleMicroorg"></em-demo-a-simple-modal-dialog>
        </paper-dialog>
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox boxshadow" id="removeSampleMicroorg" >
            <em-demo-a-simple-modal-dialog id="removeSampleMicroorgDialog" display-confirm-button display-close-button allow-multi-select
                list-header="[[sampleMicroorgListHeader]]" list-rows="{{sampleMicroorgListRows}}"  
                callBack-function="[[callBackFunction]]" callBack-function-error="[[callBackFunctionError]]" call-back-refresh-window="{{refreshWindow}}"
                selected-object="{{selectedObject}}" selected-items="{{selectedItems}}"
                sample-id={{selectedObject.sample_id}} on-dialog-button-clicked="dialogClosedremoveSampleMicroorg"></em-demo-a-simple-modal-dialog>
        </paper-dialog>
        <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox noshadowbox" id="sampleAssignBatch" >
            <em-demo-a-simple-modal-dialog id="sampleAssignBatchDialog" display-confirm-button display-cancel-button  
                list-header="[[batchesHeader]]" list-rows="{{allActiveBatchesByStage}}"  
                call-back-function="[[callBackFunction]]" call-back-function-error="[[callBackFunctionError]]" call-back-refresh-window="{{refreshWindow}}"
                selected-object="{{selectedObject}}" selected-items="{{selectedItems}}"
                sample-id={{selectedObject.sample_id}} on-dialog-button-clicked="dialogClosedSampleAssignBatch">
            </em-demo-a-simple-modal-dialog>
        </paper-dialog>

        `;
    }

    addSampleMicroorgOpenedChangedListener(){
        //console.log('addSampleMicroorgOpenedChangedListener');
        var modalwindow=this.shadowRoot.getElementById('addSampleMicroorgDialog');
        if (modalwindow){ //modalwindow.parentElement.opened no necesario pq la accion es un botón , no al confirmar dialogo
            const grid=modalwindow.shadowRoot.getElementById('simplemodaldialoggrid');
            if (grid!=undefined && grid.resetTableSelection!=undefined){
                grid.resetTableSelection();
            }
        }
        //console.log('addSampleMicroorgOpenedChangedListener');
    }
    removeSampleMicroorgOpenedChangedListener(){
        //console.log('removeSampleMicroorgOpenedChangedListener');
        var modalwindow=this.shadowRoot.getElementById('removeSampleMicroorgDialog');
        if (modalwindow){ //modalwindow.parentElement.opened no necesario pq la accion es un botón , no al confirmar dialogo
            var grid=modalwindow.shadowRoot.getElementById('simplemodaldialoggrid');
            if (grid!=undefined && grid.resetTableSelection!=undefined){
                grid.resetTableSelection();
            }
        }
        //console.log('removeSampleMicroorgOpenedChangedListener');
    }
    AddCommentOpenedChangedListener(e){
        var modalwindow=this.shadowRoot.getElementById('addCommentDialog');
        if (modalwindow && modalwindow.parentElement.opened){
            if (modalwindow.resetValue){
                modalwindow.resetValue();
                //modalwindow.setFocusInField();
            }
        }
    }
    openDialog(dialogName, actionName){                        
        var elem=this.shadowRoot.getElementById(dialogName);

        if (dialogName=="sampleAssignBatch"){
            console.log('opendialog')            
            var data={};
            data.whereFieldsName='incub_stage';
            data.whereFieldsValue=actionName;
            this.getActiveBatchesByStage(data);
        }     
        if (dialogName=="addComment"){
            elem.actionName=actionName;
            this.AddCommentOpenedChangedListener();
        }
        if (dialogName=='addSampleMicroorg'){
            this.addSampleMicroorgOpenedChangedListener();
        }
        if (dialogName=='removeSampleMicroorg'){
            var data={};
            if (this.selectedObject.microorganism_count==0){
                var errMsg={message_en: 'Nothing to remove',
                            message_es: 'Nada que borrar'}    
                this.toastErrorMessage(errMsg);
                return;
            }    
            data.sampleId=this.selectedObject.sample_id;
            console.log('removeSampleMicroorg', this.selectedObject.sample_id);
            this.getSampleMicroorganismList(data, dialogName);
            console.log(this.sampleMicroorgListHeader, this.sampleMicroorgListRows);
            this.removeSampleMicroorgOpenedChangedListener();
            return;
        }
        if (dialogName=="sampleAudit" || dialogName=="enterResults"){
            var elemDialog=this.shadowRoot.getElementById(dialogName+"Dialog");
            elemDialog.loadData();
        }
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

customElements.define('em-demo-a-webcomponent-env-monit-samples', EmDemoAWebcomponentEnvMonitSamples);