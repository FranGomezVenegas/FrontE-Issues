import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitForProductionLot} from '../01moduleFunctionality/endpoints-frontend-env-monit';
import {FunctionsEnvMonit} from '../01moduleFunctionality/functions-env-monit';
import '../01moduleFunctionality/em-demo-a-webcomponent-env-monit';
import '../03config/em-demo-a-production-lot-settings';
import {productionLot} from '../03config/em-demo-a-production-lot-settings'; //'../03config/config-process.js';
import '../../../internalComponents/Elements/table-with-buttons';
class emDemoAProductionLot extends FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitForProductionLot(connect(store)(PolymerElement)))) {
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
        if (state.emDemoA!=null){
            this.activeProductionLots= state.emDemoA.activeProductionLots;}
    }        
    static get template() {
        return html`            
            <style include="em-demo-a-production-lot-style"></style> 
            <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
            <table-with-buttons id="batches" modulearea="env-monit-prod-lot" selected_language="{{selectedLanguage}}"  
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
customElements.define('em-demo-a-production-lot', emDemoAProductionLot);