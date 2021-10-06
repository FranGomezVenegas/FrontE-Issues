import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import '../../../../internalComponents/Elements/table-with-buttons';

import {FrontendEndpointsEnvMonitForInvestigation} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
import '../../01moduleFunctionality/proc-deploy-webcomponent-env-monit-samples';

import '../../03config/ResultDeviation/proc-deploy-pending-decision-settings';
import {pendingDecisionWindowDefinition} from '../../03config/ResultDeviation/proc-deploy-pending-decision-settings'; //'../03config/config-process.js';

class procDeployPendingDecision extends FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForInvestigation(connect(store)(PolymerElement)))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.procDeploy!=undefined){
            this.investigationResultsPendingDecision = state.procDeploy.investigationResultsPendingDecision;
        }
    }       
    static get properties() {
        return {            
            tableDefinition: {type: Object, value:pendingDecisionWindowDefinition},
            selectedObject:{type: Object, notify:true},
            investigationResultsPendingDecision:{type: Object},
        }
    }  
    static get template() {
        return html`
            <style include="proc-deploy-pending-decision-style"></style>
            <proc-deploy-webcomponent-env-monit id="myelements"></proc-deploy-webcomponent-env-monit>

            <table-with-buttons id="procdeploy-samplefq" modulearea="env-monit-investigation" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{investigationResultsPendingDecision}}" 
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
        this.getInvestigationResultsPendingDecision({}); 
    }
    investigationResultsPendingDecision(){
        //this.callBackRefreshWindow = this.refreshWindow.bind(this);
            this.getInvestigationResultsPendingDecision({}); 
    }
    ready() {
        super.ready();
        this.investigationResultsPendingDecision();
    }
}
customElements.define('proc-deploy-pending-decision', procDeployPendingDecision);