import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';


import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

class FieldInteger extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      value: {type: Number, notify: true}      
    }
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;        
  }      
  static get template() {
    return html`    
    <paper-input class="inputBlue" type="number" id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" required label="{{labelValue(selectedLanguage, field)}}" value="{{value}}" auto-validate="{{field.required}}" ></paper-input>
    <!-- <h3>{{labelValue(selectedLanguage, field)}} {{value}} </h3>      -->
<!--        
    <template is="dom-if" if="{{!field.read_only}}">
      <p>
        <vaadin-button on-click="decrementar"><iron-icon icon="remove"></iron-icon></vaadin-button>
        <vaadin-button on-click="incrementar"><iron-icon icon="add"></iron-icon></vaadin-button>
      </p>
    </template>-->
    `;
  }  
  incrementar() {
    if (this.field.value==null){this.field.value=1; this.value=1;  return; }
    if (this.field.maxValue==null){this.field.value++; this.value++;  return; }    
    if (this.field.value<this.field.maxValue){
      this.field.value++;
      this.value++;  
    }
  }
  decrementar() {
    if (this.field.value==null){this.field.value=0; this.value=0;  return; }
    if (this.field.maxValue==null){this.field.value--; this.value--;  return; }
    if (this.field.minValue<this.field.value){
      this.field.value--;
      this.value--;
    }
  }  
}
customElements.define('field-integer', FieldInteger);