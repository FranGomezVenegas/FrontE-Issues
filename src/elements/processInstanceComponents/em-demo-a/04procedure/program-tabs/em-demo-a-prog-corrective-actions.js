import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {progTabCorrectiveActions} from '../../03config/Programs/em-demo-a-progtab-correctiveactions-settings';
import '../../03config/Programs/em-demo-a-progtab-correctiveactions-settings';
import {FrontendEndpointsEnvMonitForPrograms, FrontendEndpointsEnvMonitForInvestigation} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import '../../01moduleFunctionality/em-demo-a-webcomponent-env-monit';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
class EmDemoAProgCorrectiveActions extends (FunctionsEnvMonit(FrontendEndpointsEnvMonitForInvestigation(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement))))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=undefined && state.emDemoA.selectedProgram.name!=undefined){
            this.selectedProgram=state.emDemoA.selectedProgram;                    
            this.selectedProgramCorrectiveActions = state.emDemoA.selectedProgramCorrectiveActions;
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
            <style include="em-demo-a-progtab-correctiveactions-style"></style>
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <table-with-buttons id="batches" modulearea="env-monit-investigations" selected_language="{{selectedLanguage}}"  
            element_definition="[[tableDefinition]]" table_data="{{selectedProgramCorrectiveActions}}" 
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
customElements.define('em-demo-a-prog-corrective-actions', EmDemoAProgCorrectiveActions);