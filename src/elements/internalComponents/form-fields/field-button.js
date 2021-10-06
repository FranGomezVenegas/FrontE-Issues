import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';


class FieldButton extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      field: {        type: Object,        notify: true      },
      value: {        type: String,        notify: true              },
      selectedLanguage: String
    }
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;        
  }   
  static get template() {
    return html`    
    <vaadin-button on-click="clicked"  value="{{field.name}}" disabled="{{field.read_only}}">
      {{labelValue(selectedLanguage, field)}}
    </vaadin-button>
    `;
  }  
  clicked(){
    this.dispatchEvent(new CustomEvent('field-button-clicked', {
      bubbles: true,
      composed: true,
      detail: {'buttonName': this.field.name,'value': this.value, 'buttonDefinition': this.field}
    }));    
  }
}
customElements.define('field-button', FieldButton);