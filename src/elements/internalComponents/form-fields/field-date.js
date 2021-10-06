import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import '@material/mwc-formfield/mwc-formfield';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
class FieldDate extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      field: {        type: Object,        notify: true      },
      value: {        type: Date,        value: false,        notify: true      }
    }
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;        
  }      
  static get template() {
    return html`    
    <mwc-formfield aligned="" label="{{labelValue(selectedLanguage, field)}}" >
      <input type="date" value="{{value::input}}">
    </mwc-formfield>
    `;
  }
}
customElements.define('field-date', FieldDate);