import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Elements/table-with-buttons';
import {progTabCorrectiveActions} from '../../03config/Programs/proc-deploy-progtab-correctiveactions-settings';
import '../../03config/Programs/proc-deploy-progtab-correctiveactions-settings';
import {FrontendEndpointsEnvMonitForPrograms, FrontendEndpointsEnvMonitForInvestigation} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import '../../01moduleFunctionality/proc-deploy-webcomponent-env-monit';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
//FieldsMethods ProcDeployapiEnvMonit FrontendEnvMonit
class ProcDeployProgCorrectiveActions extends (FunctionsEnvMonit(FrontendEndpointsEnvMonitForInvestigation(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement))))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.procDeploy!=undefined && state.procDeploy.selectedProgram.name!=undefined){
            this.selectedProgram=state.procDeploy.selectedProgram;                    
            this.selectedProgramCorrectiveActions = state.procDeploy.selectedProgramCorrectiveActions;
        }
    }       
    static get properties() {
        return {            
            tableDefinition: {type: Object, value:progTabCorrectiveActions},
            selectedObject:{type: Object, notify:true},
            selectedProgram:{type: Object},
            selectedProgramCorrectiveActions:{type: Object},
        }
    }  
    static get template() {
        return html`
            <style include="proc-deploy-progtab-correctiveactions-style"></style>
            <proc-deploy-webcomponent-env-monit id="myelements"></proc-deploy-webcomponent-env-monit>

            <table-with-buttons id="procdeploy-samplefq" modulearea="env-monit-sample" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{selectedProgramCorrectiveActions}}" 
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
        this.getSelectedProgramCorrectiveActions();
    }
    getSelectedProgramCorrectiveActions(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        if (this.selectedProgram){
            this.getSelectedProgramCorrectiveAction({programName: this.selectedProgram.name}); 
        }
        this.getOpenInvestigationsList({programName: ''});  
    }
    ready() {
        super.ready();
        this.getSelectedProgramCorrectiveActions();
    }
}
customElements.define('proc-deploy-prog-corrective-actions', ProcDeployProgCorrectiveActions);
