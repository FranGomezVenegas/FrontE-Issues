import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';

import '../../../internalComponents/Elements/table-with-buttons';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import '../03config/proc-deploy-sample-mb-settings';
import {windowSettings} from '../03config/proc-deploy-sample-mb-settings'; //'../03config/config-process.js';

import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import '../01moduleFunctionality/proc-deploy-webcomponent-env-monit-samples';

class procDeploySampleMb extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:windowSettings},
            samplesInProgressMB: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.procDeploy!=null){
            this.samplesInProgressMB= state.procDeploy.samplesInProgressMB;}
    }        
    static get template() {
        return html`            
            <style include="proc-deploy-sample-mb-style"></style> 
            <proc-deploy-webcomponent-env-monit-samples id="myElementsSample" testing-group="MB"></proc-deploy-webcomponent-env-monit-samples>

            <table-with-buttons id="procdeploy-samplefq" modulearea="env-monit-sample" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition.elementdefinition]]" table_data="{{samplesInProgressMB}}" 
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
        this.getAllSamplesStageSampling(this.tableDefinition.apicall, this.samplesStagesReduxVariables.SAMPLES_IN_PROGRESS_MB);
    } 
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('proc-deploy-sample-mb', procDeploySampleMb);