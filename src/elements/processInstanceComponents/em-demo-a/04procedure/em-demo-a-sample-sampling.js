import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import '../03config/em-demo-a-sample-sampling-settings';
import {sampleSampling} from '../03config/em-demo-a-sample-sampling-settings'; //'../03config/config-process.js';
import '../../../internalComponents/Elements/table-with-buttons';
import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';

class emDemoASampleSampling extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:sampleSampling},
            allSamplesStageSampling: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.allSamplesStageSampling= state.emDemoA.allSamplesStageSampling;}
    }        
    static get template() {
        return html`            
            <style include="em-demo-a-sample-sampling-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>
            <table-with-buttons id="batches" modulearea="env-monit-samples" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{allSamplesStageSampling}}" 
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
        this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.SAMPLES_SAMPLING);
    } 
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('em-demo-a-sample-sampling', emDemoASampleSampling);