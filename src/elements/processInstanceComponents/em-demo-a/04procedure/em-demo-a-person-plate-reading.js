import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';
import '../03config/em-demo-a-person-plate-reading-settings';
import '../../../internalComponents/Elements/table-with-buttons';
import {personPlateReading} from '../03config/em-demo-a-person-plate-reading-settings'; //'../03config/config-process.js';

class emDemoAPersonPlateReading extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:personPlateReading},
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},
            allPersonSamplesStagePlateReading: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            iconFunction2: Object,
            selectedLanguage: {type: String},
        }
    }
    static get template() {
        return html`            
            <style include="em-demo-a-person-plate-reading-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>
            <table-with-buttons id="batches" modulearea="env-monit-samples" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{allPersonSamplesStagePlateReading}}" 
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
        this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.PERSON_PLATE_READING);
    } 
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.allPersonSamplesStagePlateReading= state.emDemoA.allPersonSamplesStagePlateReading;
        }
    }        
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('em-demo-a-person-plate-reading', emDemoAPersonPlateReading);