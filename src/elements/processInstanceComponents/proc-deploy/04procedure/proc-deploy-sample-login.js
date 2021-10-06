import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store';

import './program-elements/proc-deploy-program-selector';
import './program-tabs/proc-deploy-prog-points.js';
import '../03config/proc-deploy-sample-login-settings';
import {tabsDefinition} from '../03config/proc-deploy-sample-login-settings';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
class ProcDeploySampleLogin extends FieldsMethods(((connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            selectedProgram: {type: Object, notify:true},
            programs: {type: Object},
            tabsDefinition:{type: Object, value:tabsDefinition},
        }
    }
    static get template() {
        return html`
            <style include="proc-deploy-sample-login-style"></style>
            <vaadin-button on-click="loadData"><iron-icon icon="refresh"></iron-icon></vaadin-button>
            <proc-deploy-program-selector id="program_selector" programs="{{programs}}" selected-program="{{selectedProgram}}"></proc-deploy-program-selector>            
            <proc-deploy-prog-points-map id="proc-deploy-sampling-points-map" selected-program="{{selectedProgram}}"> </proc-deploy-prog-points-map>
            
            <proc-deploy-prog-points selected-program="{{selectedProgram}}" display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="proc-deploy-configcalendar" selected-program="{{selectedProgram}}"> </proc-deploy-prog-points>            
<!--            <proc-deploy-prog-configcalendar selected-program="{{selectedProgram}}" display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="proc-deploy-configcalendar" selected-program="{{selectedProgram}}"> </proc-deploy-prog-configcalendar>            -->
        `;
    }
    loadData(){
        var elem=this.shadowRoot.getElementById('program_selector');
        if (elem){
            elem.ready();
        }
    }
}
customElements.define('proc-deploy-sample-login', ProcDeploySampleLogin);