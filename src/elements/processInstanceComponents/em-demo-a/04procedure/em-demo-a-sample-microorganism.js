import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitSamples, samplesStagesReduxVariables} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../01moduleFunctionality/functions-env-monit-samples';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';
import '../../../internalComponents/Elements/table-with-buttons';
import '../03config/em-demo-a-sample-microorganism-settings';
import {sampleMicroorganism} from '../03config/em-demo-a-sample-microorganism-settings'; //'../03config/config-process.js';
import {SampleIcons} from '../../../../platform-mixins/functions/config-icons';
class emDemoASampleMicroorganism extends SampleIcons(FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement))))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:sampleMicroorganism},
            samplesStagesReduxVariables:{type: String, value: samplesStagesReduxVariables},
            allSamplesStageMicroorganism: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
        }
    }
    static get template() {
        return html`            
            <style include="em-demo-a-sample-microorganism-style"></style> 
            <em-demo-a-webcomponent-env-monit-samples call-back-function="{{refreshWindow}}" id="myElementsSample"></em-demo-a-webcomponent-env-monit-samples>
<!--        <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
            <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
                <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                on-field-button-clicked="fieldButtonClickedForSamples" on-field-list-value-changed="onListChange"> 
                </field-controller>
            </template>  
        </template>  
-->        
            <table-with-buttons id="emdemoa-samplemicroorganism" modulearea="env-monit-prod-lot" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{allSamplesStageMicroorganism}}" 
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
        this.tableDefinition.callBackFunction=this.getMicroorganismList.bind(this);
        this.getAllSamplesStageSampling(this.tableDefinition,this.samplesStagesReduxVariables.SAMPLES_MICROORG_IDENTIF);
        //this.getMicroorganismList();
    } 
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.allSamplesStageMicroorganism= state.emDemoA.allSamplesStageMicroorganism;
        }
    }        
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('em-demo-a-sample-microorganism', emDemoASampleMicroorganism);