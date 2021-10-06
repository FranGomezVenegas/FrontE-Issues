import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitForInvestigation} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
import '../../01moduleFunctionality/em-demo-a-webcomponent-env-monit-samples';
import '../../../../internalComponents/Elements/table-with-buttons';

import '../../03config/ResultDeviation/em-demo-a-pending-decision-settings';
import {pendingDecisionWindowDefinition} from '../../03config/ResultDeviation/em-demo-a-pending-decision-settings'; //'../03config/config-process.js';

class emDemoAPendingDecision extends FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForInvestigation(connect(store)(PolymerElement)))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=undefined){
            this.investigationResultsPendingDecision = state.emDemoA.investigationResultsPendingDecision;
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
            <style include="em-demo-a-pending-decision-style"></style>
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>

            <table-with-buttons id="batches" modulearea="env-monit-investigations" selected_language="{{selectedLanguage}}"  
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
customElements.define('em-demo-a-pending-decision', emDemoAPendingDecision);