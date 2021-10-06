import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';

import {FrontendEndpointsEnvMonitForInvestigation} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
import '../../01moduleFunctionality/em-demo-a-webcomponent-env-monit';
import '../../../../internalComponents/Elements/table-with-buttons';

import '../../03config/ResultDeviation/em-demo-a-investigation-settings';
import {windowDefinition} from '../../03config/ResultDeviation/em-demo-a-investigation-settings'; //'../03config/config-process.js';

class emDemoAInvestigation extends FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForInvestigation(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:windowDefinition},
            openInvestigations: {type: Array, notify:true},
            selectedObject: Object,
            selectedObject2: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
        }
    }
    dataminingfiledownload() {
        var apiUrl="http://localhost:8080/LabPLANET-API/moduleenvmon/EnvMonAPIstats?procInstanceName=em-demo-a&actionName=QUERY_SAMPLING_HISTORY&finalToken=eyJ1c2VyREIiOiJsYWJwbGFuZXQiLCJlU2lnbiI6InZhbGUiLCJ1c2VyREJQYXNzd29yZCI6InZhbGUiLCJ1c2VyX3Byb2NlZHVyZXMiOiJbZ2Vub21hLTEsIHByb2MtZGVwbG95XSIsInR5cCI6IkpXVCIsImFwcFNlc3Npb25JZCI6IjExNDAzIiwiYXBwU2Vzc2lvblN0YXJ0ZWREYXRlIjoiTW9uIEF1ZyAyNCAxNTo0ODozOCBDRVNUIDIwMjAiLCJ1c2VyUm9sZSI6ImNvb3JkaW5hdG9yIiwiYWxnIjoiSFMyNTYiLCJpbnRlcm5hbFVzZXJJRCI6IjEifQ.eyJpc3MiOiJMYWJQTEFORVRkZXN0cmFuZ2lzSW5UaGVOaWdodCJ9.b0fVxUL8pny1cfHQfIgQjvhP_ItDh49uNvJPD6UHnh8&sampleGroups=area%2C+spec_code%2Csample_config_code*counter_by_area_spec_tmp%7Carea*counter_by_area%7Chas_pre_invest*counter_out%7Cspec_eval*counter_range_eval%7Chas_invest*counter_investigations%7Chas_pre_invest%2C+has_invest*counter_pre_and_invest&includeSamplerSamples=true&samplingDayStart&samplingDayEnd&includeSamples=true&excludeReadingNotEntered=true&fileName=cambioNombre.csv&outputIsFile=true"; 
        console.log('dataminingfiledownload', apiUrl);
        axios.get(apiUrl, {        
            params: {
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                return;
            }
            return;
        })
        .catch(error => {
            console.log(error.message);
        })
        .then(function () {
            });
    }      
    static get template() {
        return html`            
            <style include="em-demo-a-investigation-style"></style> 
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>  
            <table-with-buttons id="procdeploy-samplefq" modulearea="env-monit-investigation" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{openInvestigations}}" 
                selected-object="{{selectedObject}}" on-selected-object-changed="objectSelected"  
                on-field-button-clicked="fieldButtonClickedForInvestigations" on-refresh-button-clicked="refreshWindow"
                on-right-menu-clicked="fieldButtonClickedForInvestigations"
            ></table-with-buttons>
        `;
    }
    objectSelected(e){
        this.selectedObject=e.detail;
    }             
    refreshWindow() {
        this.tableContentRows();
    }
    tableContentRows(){
        //this.callBackRefreshWindow = this.refreshWindow.bind(this);
        this.getOpenInvestigationsList([]);
    } 
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){
            this.openInvestigations= state.emDemoA.openInvestigations;
        }
    }        
    ready() {
        super.ready();
        this.tableContentRows();
    }
}
customElements.define('em-demo-a-investigation', emDemoAInvestigation);