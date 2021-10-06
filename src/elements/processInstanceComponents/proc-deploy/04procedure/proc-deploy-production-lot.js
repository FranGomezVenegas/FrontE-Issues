import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';


//import '../01moduleFunctionality/env-monit-elements.js';
//import {FrontendEnvMonit} from '../01moduleFunctionality/frontend-env-monit.js';

import {FrontendEndpointsEnvMonitForProductionLot} from '../01moduleFunctionality/endpoints-frontend-env-monit';
import {FunctionsEnvMonit} from '../01moduleFunctionality/functions-env-monit';
import '../01moduleFunctionality/proc-deploy-webcomponent-env-monit';

import '../03config/proc-deploy-production-lot-settings';
import {productionLot} from '../03config/proc-deploy-production-lot-settings'; //'../03config/config-process.js';

class procDeployProductionLot extends FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForProductionLot(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:productionLot},
            activeProductionLots: {type: Array, notify:true},
            selectedObject: Object,
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.procDeploy!=null){
            this.activeProductionLots= state.procDeploy.activeProductionLots;}
    }        
    static get template() {
        return html`                    
            <style include="proc-deploy-production-lot-style"></style> 
            <proc-deploy-webcomponent-env-monit id="myelements"></proc-deploy-webcomponent-env-monit>
            <table-with-buttons id="procdeploy-prod-lot" modulearea="env-monit-prod-lot" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{activeProductionLots}}" 
                selected-object="{{selectedObject}}" on-selected-object-changed="objectSelected"  
                on-field-button-clicked="fieldButtonClickedForProductionLots" on-refresh-button-clicked="refreshWindow"
                on-right-menu-clicked="fieldButtonClickedForProductionLots"
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
        this.getActiveProductionLotsList();
    } 
    ready() {
        super.ready();
        this.loadSamplingTable();
    }
}
customElements.define('proc-deploy-production-lot', procDeployProductionLot);