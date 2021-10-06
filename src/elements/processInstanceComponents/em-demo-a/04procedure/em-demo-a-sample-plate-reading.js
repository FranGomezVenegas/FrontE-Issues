import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';
import '../../../internalComponents/Elements/table-with-buttons';
import '../03config/em-demo-a-sample-plate-reading-settings';
import {samplePlateReading} from '../03config/em-demo-a-sample-plate-reading-settings'; //'../03config/config-process.js';

class emDemoASamplePlateReading extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:samplePlateReading},
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},
            allSamplesStagePlateReading: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            iconFunction2: Object,
            selectedLanguage: {type: String},
        }
    }
    static get template() {
        return html`            
            <style include="em-demo-a-sample-plate-reading-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>
            <table-with-buttons id="batches" modulearea="env-monit-samples" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{allSamplesStagePlateReading}}" 
                selected-object="{{selectedObject}}" on-selected-object-changed="objectSelected"  
                on-field-button-clicked="fieldButtonClickedForSamples" on-refresh-button-clicked="refreshWindow"
                on-right-menu-clicked="fieldButtonClickedForSamples"
            ></table-with-buttons>
        `;
    }
    objectSelected(e){
        this.selectedObject=e.detail;
    }
    refreshWindow() {
        this.loadSamplingTable();
    }
    loadSamplingTable(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.SAMPLES_PLATE_READING);
        //     {
        //     actionName:'SAMPLES_BY_STAGE',
        //     sampleFieldToRetrieve:this.tableDefinition.sampleFieldToRetrieve,
        //     samplesTabSortFields:this.tableDefinition.sampleFieldToSort,
        //     samplesWhereFieldsName: this.tableDefinition.samplesWhereFieldsName, 
        //     samplesWhereFieldsValue: this.tableDefinition.samplesWhereFieldsValue,
        //     addSampleAnalysis: this.tableDefinition.addSampleAnalysis, 
        //     addSampleAnalysisFieldToRetrieve: this.tableDefinition.addSampleAnalysisFieldToRetrieve,
        //     addSampleAnalysisResult: this.tableDefinition.addSampleAnalysisResult, 
        //     addSampleAnalysisResultFieldToRetrieve: this.tableDefinition.addSampleAnalysisResultFieldToRetrieve,
        //   });         
    } 
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.allSamplesStagePlateReading= state.emDemoA.allSamplesStagePlateReading;
        }
    }        
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('em-demo-a-sample-plate-reading', emDemoASamplePlateReading);