import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-password-field';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

class FieldText extends FieldsMethods(connect(store)(PolymerElement)) {
  static get properties() {
    return {
      field: {type: Object, observer: 'fieldChange', notify: true},
      type: {type: String, notify: true},
      value: {type: String, notify: true},
      fieldClass: String,
      iAm: {type: Object,
        value: function() {
          return {
            button: false,
            checkBox: false,
          }
        }
      }      
    }
  }

  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;        
  }   
  textClass(langApp){
    if (langApp=="en") {this.fieldClass="x-field.myCustomFieldRed"; return;}
    this.fieldClass="x-field.myCustomFieldBlue";
    return;
  } 
  textType() {
    if (this.field.password =="false") return true;
    return false;
    }
  textTypePassword() {
    return this.field.password =="true";  }
  textTypeConfidential() {
    return this.field.password =="confidential";  }
  fieldChange(newField) {
    switch(newField.showDisplayPasswordType) {
      case 'Button':
        this.set('iAm.button', true);
        break;
      case 'CheckBox':
        this.set('iAm.checkBox', true);
        break;  
    }
  }

  static get template() {
    return html`    
    <style>
      paper-input {
        color: #0085ffe6;
      }
      .required {
        color: #ffff;
      }
      .btn {
          position: absolute;
          font-family: 'FontAwesome';
          top: 0;
          left: 10px;
          content: "\f005";
      }
      .input {
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 16px;
          box-sizing: border-box;
          color: Red;
      }    
      .x-field.myCustomFieldRed input {
          color: Red;
      }
      .x-field.myCustomFieldBlue input {
          color: Blue;
      }      
      inputBlue {
        color: Blue;}
           
    </style>
    <template  is="dom-if" if="{{textType()}}">  
      <paper-input class="inputBlue" type="{{field.type}}" id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" required label="{{labelValue(selectedLanguage, field)}}" value="{{value}}" auto-validate="{{field.required}}" ></paper-input>
    </template>
    <template  is="dom-if" if="{{textTypePassword()}}">  
      <vaadin-password-field id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" label="{{labelValue(selectedLanguage, field)}}" value="{{value}}">value="{{value}}"</vaadin-password-field>
    </template>
    <template  is="dom-if" if="{{textTypeConfidential()}}">  
      <paper-input type="{{type}}" id="{{field.name}}" name="{{field.name}}" readonly label="{{labelValue(selectedLanguage, field)}}" value="{{confidentialMaskValue(selectedLanguage)}}" required="{{field.required}}" auto-validate tip="You are not authorized to see this information"></paper-input>
    </template>    
    `;
  } 
}
customElements.define('field-text', FieldText);