import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import './field-boolean';
import './field-list';
import './field-date';
import './field-text';
import './field-text-area';
import './field-textconfirmuser';
import './field-logo-circle';
import './field-avatar';
import './field-google-fonts';
import './field-tree-list';
import './field-button';
import './field-title';
import './field-button-group';
import './field-integer';
import './field-icon-button';

class FieldController extends PolymerElement {
  static get properties() {
    return {
      id: {type: String},
      field: {type: Object,observer: 'fieldChange', notify: true},
      title: {type: Object},
      selectedLanguage: {type: String,notify: true},        
      iAm: {type: Object,
        value: function() {
          return {
            boolean: false,            date: false,            list: false,           text: false,      textArea: false, 
            logoCircle: false,         avatar: false,          googleFonts: false,    treeList: false,  iconButton: false,
            button: false,              buttonGroup: false,    integer: false,        badge: false            
          }
        }
      }
    }
  }
  resetValue(){
    var elem=this.shadowRoot.getElementById(this.field.name);
    if (elem){elem.resetValue();}
    else{
      console.log('field-controller.resetValue', 'no field with name ', this.field.name);
    }
  }
  focus(){    
    var elem=this.shadowRoot.getElementById(this.field.name);
    if (elem){elem.focus();}
    else{
      console.log('field-controller.focus', 'no field with name ', this.field.name);
    }
  }
  enable(){    
    var elem=this.shadowRoot.getElementById(this.field.name);
    if (elem){elem.enable();}
    else{
      console.log('field-controller.enable', 'no field with name ', this.field.name);
    }
  }
  disable(){    
    var elem=this.shadowRoot.getElementById(this.field.name);
    if (elem){elem.disable();}
    else{
      console.log('field-controller.disable', 'no field with name ', this.field.name);
    }
  }

  resetIAms(){
    this.set('iAm.boolean', false);   this.set('iAm.date', false);        this.set('iAm.list', false);        this.set('iAm.text', false); this.set('iAm.textArea', false);
    this.set('iAm.logoCircle', false);this.set('iAm.avatar', false);      this.set('iAm.googleFonts', false); this.set('iAm.treeList', false); this.set('iAm.iconButton', false);
    this.set('iAm.button', false);    this.set('iAm.buttonGroup', false); this.set('iAm.integer', false);     this.set('iAm.badge', false);    
  }
  static get template() {
    return html`
<!--      {{field.name}} -->
      <div class="card">      
      <template is="dom-if" if="{{iAm.boolean}}" >
        <field-boolean id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-boolean>
      </template>
      <template is="dom-if" if="{{iAm.date}}">
      <field-date id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-date>
      </template>
      <template is="dom-if" if="{{iAm.list}}">   
        <field-list id="{{field.name}}"  field="[[field]]" value="{{field.value}}" ></field-list>
      </template>
      <template is="dom-if" if="{{iAm.text}}">
        <field-text id="{{field.name}}" "type="{{field.type}}" field="{{field}}" value="{{field.value}}" ></field-text>
      </template>
      <template is="dom-if" if="{{iAm.textArea}}">
        <field-text-area id="{{field.name}}" type="{{field.type}}" field="{{field}}" value="{{field.value}}" ></field-text-area>
      </template>
      <template is="dom-if" if="{{iAm.logoCircle}}">
        <field-logo-circle id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-logo-circle>
      </template>  
      <template is="dom-if" if="{{iAm.avatar}}">
        <field-avatar id="{{field.name}}" field="[[field]]" value="{{field.value}}" ></field-avatar>
      </template>      
      <template is="dom-if" if="{{iAm.googleFonts}}">
        <field-google-fonts id="{{field.name}}" field="[[field]]" value="{{field.value}}"></field-google-fonts>
      </template>      
      <template is="dom-if" if="{{iAm.treeList}}">
        <field-tree-list title="[[title]]" procedure="[[procedure]]" id="{{field.name}}" field="[[field]]" value="{{field.value}}"></field-tree-list>
      </template>         
      <template is="dom-if" if="{{iAm.button}}">
        <field-button id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-button>
      </template>        
      <template is="dom-if" if="{{iAm.title}}">
        <field-title id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-title>
      </template>        
      <template is="dom-if" if="{{iAm.buttonGroup}}">
        <field-button-group id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-button-group>
      </template>  
      <template is="dom-if" if="{{iAm.integer}}">      
        <field-integer id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-integer>
      </template>                    
      <template is="dom-if" if="{{iAm.badge}}">      
        <field-badge id="{{field.name}}" field="{{field}}" value="{{field.value}}"></field-badge>
      </template>    
      <template is="dom-if" if="{{iAm.textconfirmuser}}">
        <field-textconfirmuser type="{{field.type}}" id="{{field.name}}" field="{{field}}" value="{{field.value}}" ></field-textconfirmuser>
      </template>
      <template is="dom-if" if="{{iAm.iconButton}}">
        <field-icon-button procedure="[[procedure]]" type="{{field.type}}" id="{{field.name}}" field="{{field}}" value="{{field.value}}" ></field-icon-button>
      </template>
      </div>
    `;
  }
  listChange(newList) {
    this.field-list
  }
  fieldChange(newField) {
    this.resetIAms();
//if (this.id=='proceduresList'){    
//  console.log('field-controller', newField.name, this.id);
//}
    switch(newField.type) {
      case 'boolean':
        this.set('iAm.boolean', true);
        break;
      case 'list':
        this.set('iAm.list', true);
        //this.set('iAm.text', false);
        break;
      case 'date':
        this.set('iAm.date', true);
        break;
      case 'text':
        this.set('iAm.text', true);
        break;
      case 'text-area':
        this.set('iAm.textArea', true);
        break;    
      case 'password':
        this.set('iAm.text', true);
        break;    
      case 'logo-circle':
        this.set('iAm.logoCircle', true);
        break;        
      case 'avatar':
        this.set('iAm.avatar', true);
        break; 
      case 'google-fonts':
        this.set('iAm.googleFonts', true);
        break;       
      case 'tree-list':
        this.set('iAm.treeList', true);
        break;     
      case 'button':
        this.set('iAm.button', true);
        break;                                        
      case 'title':
        this.set('iAm.title', true);
        break;                                        
      case 'button-group':
        this.set('iAm.buttonGroup', true);
        break;        
      case 'integer':
        this.set('iAm.integer', true);
        break;                                         
      case 'badge':
        this.set('iAm.badge', true);
        break; 
      case 'textconfirmuser':
        this.set('iAm.textconfirmuser', true);
        break;    
      case 'icon-button':
        this.set('iAm.iconButton', true);
        break;    
    }    
  }
}
customElements.define('field-controller', FieldController);