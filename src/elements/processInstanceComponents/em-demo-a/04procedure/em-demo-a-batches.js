import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitForBatches} from '../01moduleFunctionality/endpoints-frontend-env-monit';
import {FrontendEndpointsEnvMonitSamples} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import '../03config/em-demo-a-batches-settings';
import {FunctionsEnvMonit} from '../01moduleFunctionality/functions-env-monit';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit';
import {setSelectedBatch} from '../02Redux/em-demo-a_actions';
import {incubActiveBatches, selectedBatchEmpty} from '../03config/em-demo-a-batches-settings'; //'../03config/config-process.js';
import '../../../internalComponents/Elements/table-with-buttons';
import {sampleIncubBatchPendingIncub1, sampleIncubBatchPendingIncub2} from '../03config/em-demo-a-sample-incub-batch-settings'; //'../03config/config-process.js';

class emDemoABatches extends FrontendEndpointsEnvMonitSamples(FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForBatches(connect(store)(PolymerElement))))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:incubActiveBatches},
            selectedBatchEmpty:{type: Object, value: selectedBatchEmpty},
            allActiveBatches: {type: Array, notify:true},
            selectedObject: Object, 
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
            batchesChanged:{type: Boolean, value: false, notify:true},
            incub1TableDefinition: {type: Object, value:sampleIncubBatchPendingIncub1},
            incub2TableDefinition: {type: Object, value:sampleIncubBatchPendingIncub2},    
        }
    }
    stateChanged(state) {
        if (state.emDemoA!=null){
            this.allActiveBatches= state.emDemoA.allActiveBatches;
        }
        this.selectedLanguage = state.app.user.appLanguage; 
    }        
    static get template() {
        return html`            
            <style include="em-demo-a-batches-style"></style> 
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <div style="display:flex; width:75%">            
            <table-with-buttons id="batches" modulearea="incub_batch" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{allActiveBatches}}" selected-object="{{selectedBatch}}" on-selected-object-changed="batchSelected"  
                on-field-button-clicked="fieldButtonClickedForIncubBatch" on-refresh-button-clicked="refreshWindow"
                on-right-menu-clicked="fieldButtonClickedForIncubBatch"
            ></table-with-buttons>
            <div>
                <template is="dom-if" if="{{!selectedBatch.name}}">
                    <p style="color:blue;">{{labelValue(selectedLanguage, selectedBatchEmpty)}}</p>
                </template> 
                <template is="dom-if" if="{{selectedBatch.name}}">
                    <p style="color:blue;"><b>{{selectedBatchLabel(selectedBatch)}}</p>                
                    <div class="cardPendingSops">
                        <template is="dom-repeat" items="{{selectedBatch.SAMPLES_ARRAY}}" as="currentbcontent"> 
                            <div class="batchContent cardMySops"> 
                                {{currentbcontent.sample_id}} Incub {{currentbcontent.incubation_moment}}
                            </div>
                        </template>
                    </div>
                </template>
            </div>     
        `;
    }
    selectedBatchLabel(selectedBatch){
        var selIncub=selectedBatch.incubation_incubator;
        if (selIncub==""){
            if (this.selectedLanguage=="es") selIncub="Por favor selecciona incubadora!";
            else selIncub="Please select incubator!";
        }
        if (this.selectedLanguage=="es"){
            return "La tanda seleccionada es: " +selectedBatch.name + ". Incubadora: "+selIncub+". Núm. Muestras: "+selectedBatch.NUM_SAMPLES;}
        return "The selected batch is: " +selectedBatch.name+ ". Incubator: "+selIncub+ ". #Samples: "+selectedBatch.NUM_SAMPLES;
    }    
    batchSelected(e) {
        //console.log('batchSelected', e.detail);
        if (!e.detail){ 
            var noBatch=[];
            store.dispatch(setSelectedBatch(noBatch));
            return;        
        }
        //console.log('batchSelected', 'e.detail.value', e.detail.value);
        this.selectedBatch=e.detail;
        this.selectedObject=this.selectedBatch;
        store.dispatch(setSelectedBatch(e.detail));
        return;
    }
    refreshWindow(){
        this.loadSamplingTable();
    }
    loadSamplingTable(){
        var data={};
        data.incub1_whereFieldsName=this.incub1TableDefinition.samplesWhereFieldsName;
        data.incub1_whereFieldsValue=this.incub1TableDefinition.samplesWhereFieldsValue;
        data.incub1_samplesTabSortFields=this.incub1TableDefinition.sampleFieldToSort;
        data.incub2_whereFieldsName=this.incub2TableDefinition.samplesWhereFieldsName;
        data.incub2_whereFieldsValue=this.incub2TableDefinition.samplesWhereFieldsValue;
        data.incub2_samplesTabSortFields=this.incub2TableDefinition.sampleFieldToSort;

        this.getSamplesPendingIncub1And2AndActiveBatches(data);
    } 
    ready() {
        super.ready();
        //this.loadSamplingTable();
    }
}
customElements.define('em-demo-a-batches', emDemoABatches);
