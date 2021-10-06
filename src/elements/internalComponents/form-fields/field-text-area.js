import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';

import '@vaadin/vaadin-text-field/vaadin-password-field';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

class FieldTextArea extends FieldsMethods(connect(store)(PolymerElement)) {
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
    var isPwd=this.textTypePassword();
    if (isPwd) return false;
    var isConfid=this.textTypeConfidential();
    if (isConfid) return false;
    return true;
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
      <link rel='stylesheet' href='ttp://fonts.googleapis.com/css?family=Roboto' type='text/css'>   
      <link rel='stylesheet' href='ttp://fonts.googleapis.com/css?family=Handlee' type='text/css'>   
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
      textarea {
          color: Blue;
      }     
      .paper {
        position: relative;
        width: 100%;
        max-width: 800px;
        min-width: 400px;
        height: 480px;
        margin: 0 auto;
        background: #fafafa;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,.3);
        overflow: hidden;
    }
    .paper:before {
        content: '';
        position: absolute;
        top: 0; bottom: 0; left: 0;
        width: 60px;
        background: radial-gradient(#575450 6px, transparent 7px) repeat-y;
        background-size: 30px 30px;
        border-right: 3px solid #D44147;
        box-sizing: border-box;
    }
    
    .paper-content {
        position: absolute;
        top: 30px; right: 0; bottom: 30px; left: 60px;
        background: linear-gradient(transparent, transparent 28px, #91D1D3 28px);
        background-size: 30px 30px;
    }
    
    .paper-content textarea {
        width: 100%;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        line-height: 30px;
        padding: 0 0 0 10px;
        border: 0;
        outline: 0;
        background: transparent;
        font-family: 'Handlee', cursive;
        font-weight: bold;
        color: mediumblue;
        font-size: 18px;
        box-sizing: border-box;
        z-index: 1;
    }    
    </style>
    <template  is="dom-if" if="{{textType()}}">  
      <div class="paper">
        <div class="paper-content2">
            <vaadin-text-area class="paper-content" autofocus rows="[[field.numRows]]" cols="[[field.numCols]]" readonly="{{field.read_only}}" value="{{field.value}}">{{field.value}}</vaadin-text-area>
        </div>
      </div>    
<!--    placeholder="{{value}}"  <textarea id="{{field.name}}" rows="[[field.numRows]]" cols="[[field.numCols]]" readonly="{{field.read_only}}" ></textarea>
      <textarea type="{{field.type}}" id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" required label="{{labelValue(selectedLanguage, field)}}" value="" auto-validate="{{field.required}}" ></textarea> -->
    </template>
    <template  is="dom-if" if="{{textTypePassword()}}">  
      <vaadin-password-field id="{{field.name}}" name="{{field.name}}" readonly="{{field.read_only}}" label="{{labelValue(selectedLanguage, field)}}" value="{{value}}">value="{{value}}"</vaadin-password-field>
    </template>
    <template  is="dom-if" if="{{textTypeConfidential()}}">  
    <textarea type="{{type}}" name="{{field.name}}" readonly label="{{labelValue(selectedLanguage, field)}}" value="{{confidentialMaskValue(selectedLanguage)}}" required="{{field.required}}" auto-validate tip="You are not authorized to see this information"></textarea>
    </template>    
    `;
  } 
}
customElements.define('field-text-area', FieldTextArea);