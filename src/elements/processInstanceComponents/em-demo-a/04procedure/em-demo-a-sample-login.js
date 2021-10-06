import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store';
import '../../../internalComponents/Elements/table-with-buttons';
import './program-elements/em-demo-a-program-selector';
import './program-tabs/em-demo-a-prog-points.js';
import '../03config/em-demo-a-sample-login-settings';
import {tabsDefinition} from '../03config/em-demo-a-sample-login-settings';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
class EmDemoASampleLogin extends FieldsMethods(((connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            selectedProgram: {type: Object, notify:true},
            programs: {type: Object},
            tabsDefinition:{type: Object, value:tabsDefinition},
        }
    }
    static get template() {
        return html`
            <style include="sample-login-style"></style>
            <vaadin-button on-click="loadData"><iron-icon icon="refresh"></iron-icon></vaadin-button>
            <em-demo-a-program-selector id="program_selector" programs="{{programs}}" selected-program="{{selectedProgram}}"></em-demo-a-program-selector>            
            <em-demo-a-prog-points-map id="em-demo-a-sampling-points-map" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points-map>
            <em-demo-a-prog-points selected-program="{{selectedProgram}}" display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="em-demo-a-configcalendar" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points>            

<!--            <em-demo-a-prog-configcalendar selected-program="{{selectedProgram}}" display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="em-demo-a-configcalendar" selected-program="{{selectedProgram}}"> </em-demo-a-prog-configcalendar>            -->
        `;
    }
}
customElements.define('em-demo-a-sample-login', EmDemoASampleLogin);