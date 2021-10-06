import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import '../03config/em-demo-a-person-sampling-settings';
import '../../../internalComponents/Elements/table-with-buttons';
import {personSampling} from '../03config/em-demo-a-person-sampling-settings'; //'../03config/config-process.js';
class emDemoASampleSampling extends FieldsMethods(FrontendEndpointsEnvMonitSamples(FunctionsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:personSampling},
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},
            allPersonSamplesStageSampling: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.allPersonSamplesStageSampling= state.emDemoA.allPersonSamplesStageSampling;}
    }        
    static get template() {
        return html`            
            <style include="em-demo-a-person-sampling-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>            
            <table-with-buttons id="batches" modulearea="env-monit-samples" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{allPersonSamplesStageSampling}}" 
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
        this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.PERSON_SAMPLING);
    } 
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('em-demo-a-person-sampling', emDemoASampleSampling);
