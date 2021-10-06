import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
import './../../../config/platform/main-layout/two-headers-form-fields-style';
import '@polymer/paper-checkbox/paper-checkbox';
class FieldBoolean extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      value: {
        type: Date,
        value: false,
        notify: true
      }      
    }
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;        
  }      
  static get template() {
    return html`
    <style include="form-fields-style"></style>
    <span>
      <br><paper-checkbox [[name]] class="formFieldBoolean" checked="{{value}}" aligned="center" disabled="{{field.read_only}}">{{labelValue(selectedLanguage, field)}}  
      </paper-checkbox>
      </span>      
    `;
  }  
}
customElements.define('field-boolean', FieldBoolean);