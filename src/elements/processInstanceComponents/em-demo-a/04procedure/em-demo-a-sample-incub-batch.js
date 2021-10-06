import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';

import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';
import '../../../internalComponents/Elements/table-with-buttons';
import './em-demo-a-batches';
import '../03config/em-demo-a-sample-incub-batch-settings';
import {sampleIncubBatchScreenSettings, sampleIncubBatchPendingIncub1, sampleIncubBatchPendingIncub2} from '../03config/em-demo-a-sample-incub-batch-settings'; //'../03config/config-process.js';

class emDemoASampleIncubBatch extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            sampleIncubBatchScreenSettings: {type: Object, value:sampleIncubBatchScreenSettings},
            incub1TableDefinition: {type: Object, value:sampleIncubBatchPendingIncub1},
            incub2TableDefinition: {type: Object, value:sampleIncubBatchPendingIncub2},    
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},        
            allSamplesStageIncubation1: {type: Array, notify:true},
            allSamplesStageIncubation2: {type: Array, notify:true},
            selectedObject: Object,
            selectedObject1: Object,
            selectedObject2: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
            batchesChanged: {type: Boolean, observer:'refreshWindowFromBatches'},
        }
    }
    static get template() {
        return html`  
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>

                <div class="mainIncubBatchDiv">
                    <template is="dom-if" if="[[sampleIncubBatchScreenSettings.displayIncubBatchesTbl]]">  
                        <em-demo-a-batches id="batches" batches-changed="{{batchesChanged}}"></em-demo-a-batches>
                    </template>

                    <table-with-buttons id="incub1" modulearea="incub1" selected_language="{{selectedLanguage}}"  
                        element_definition="[[incub1TableDefinition]]" table_data="{{allSamplesStageIncubation1}}"
                        selected-object="[[selectedObject1]]" on-selected-object-changed="sampleSelected"
                        on-field-button-clicked="fieldButtonClickedForSamples1" on-refresh-button-clicked="refreshWindow"
                        on-right-menu-clicked="fieldButtonClickedForSamples1"
                    ></table-with-buttons>

                    <table-with-buttons id="incub2" modulearea="incub2" selected_language="{{selectedLanguage}}"  
                        element_definition="[[incub2TableDefinition]]" table_data="{{allSamplesStageIncubation2}}"
                        selected-object="[[selectedObject2]]" on-selected-object-changed="sampleSelected2"  
                        on-refresh-button-clicked="refreshWindow" on-field-button-clicked="fieldButtonClickedForSamples2"
                        on-right-menu-clicked="fieldButtonClickedForSamples2"
                    ></table-with-buttons>
                </div>
        `;
    }
    fieldButtonClickedForSamples1(e){
//console.log('fieldButtonClickedForSamples1');            
        this.selectedObject=this.selectedObject1;
        var buttonDefinition=e.detail.buttonDefinition;  
        if (buttonDefinition.name =='EM_BATCH_INCUB_ADD_SMP'){ 
            var elem=this.shadowRoot.getElementById("batches");
            var selBatch={};
            selBatch=elem.selectedBatch;
            if (selBatch.incub_stage!="1"){
                var msg={};
                msg=sampleIncubBatchScreenSettings.wrongIncubStageMsg;
                msg.message_en=msg.message_en.replace("<*1*>", "1");
                msg.message_en=msg.message_en.replace("<*2*>", selBatch.incub_stage);
                msg.message_es=msg.message_es.replace("<*1*>", "1");
                msg.message_es=msg.message_es.replace("<*2*>", selBatch.incub_stage);
                this.toastErrorMessage(msg);
                return;
            }
        }
        this.fieldButtonClickedForSamples(e);
    }
    fieldButtonClickedForSamples2(e){
        this.selectedObject=this.selectedObject2;
        var buttonDefinition=e.detail.buttonDefinition;  
        if (buttonDefinition.name =='EM_BATCH_INCUB_ADD_SMP'){ 
            var elem=this.shadowRoot.getElementById("batches");
            var selBatch={};
            selBatch=elem.selectedBatch;
            if (selBatch.incub_stage!="2"){
                var msg={};
                msg=sampleIncubBatchScreenSettings.wrongIncubStageMsg;
                msg.message_en=msg.message_en.replace("<*1*>", "2");
                msg.message_en=msg.message_en.replace("<*2*>", selBatch.incub_stage);
                msg.message_es=msg.message_es.replace("<*1*>", "2");
                msg.message_es=msg.message_es.replace("<*2*>", selBatch.incub_stage);
                this.toastErrorMessage(msg);
                return;
            }
        }
        this.fieldButtonClickedForSamples(e);
    }   
    sampleSelected(e){
        //console.log('sampleSelected', e.detail);
        this.selectedObject1=e.detail;
    }
    sampleSelected2(e){
        //console.log('sampleSelected2', e.detail);
        this.selectedObject2=e.detail;
    }
    refreshWindow() {
       // console.log('refreshWindow');
        this.loadWindowTables();
    }
    loadWindowTables(){
        var data={};
        data.incub1_sampleFieldToRetrieve=this.incub1TableDefinition.sampleFieldToRetrieve;
        data.incub1_whereFieldsName=this.incub1TableDefinition.samplesWhereFieldsName;
        data.incub1_whereFieldsValue=this.incub1TableDefinition.samplesWhereFieldsValue;
        data.incub1_samplesTabSortFields=this.incub1TableDefinition.sampleFieldToSort;
        data.incub2_sampleFieldToRetrieve=this.incub2TableDefinition.sampleFieldToRetrieve;
        data.incub2_whereFieldsName=this.incub2TableDefinition.samplesWhereFieldsName;
        data.incub2_whereFieldsValue=this.incub2TableDefinition.samplesWhereFieldsValue;
        data.incub2_samplesTabSortFields=this.incub2TableDefinition.sampleFieldToSort;
        this.getSamplesPendingIncub1And2AndActiveBatches(data);
    } 
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.allSamplesStageIncubation1=state.emDemoA.allSamplesStageIncubation1;
            this.allSamplesStageIncubation2=state.emDemoA.allSamplesStageIncubation2;    
        }        
    }
    ready() {
        super.ready();
        this.loadWindowTables();
    }
}
customElements.define('em-demo-a-sample-incub-batch', emDemoASampleIncubBatch);