import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/polymer/lib/elements/dom-repeat';

import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

class FieldList extends FieldsMethods(connect(store)(PolymerElement)) {
  static get observers() {
    return [
      'changeListValueObserver(field.value)'
    ];
  }
  resetValue(){    
    console.log('field-list', 'resetValue');
    this.set('field.value', '');
    this.newVal="";
  }
  stateChanged(state) {    
    this.selectedLanguage = state.app.user.appLanguage;        
  }     
  changeListValueObserver(newVal) {
    if (newVal.length==0){return;}    
    var findSeparator = newVal.search("-");
    //console.log('changeListValueObserver', 'newVal', newVal, 'this.field', this.field, 'findSeparator', findSeparator);
    if (findSeparator>-1){
      var newValStr=newVal.substring(0, findSeparator);
      var indexVal = newVal.substring(findSeparator+1, newVal.length);
      indexVal = indexVal.trim();
      var newValInt = parseInt(indexVal, 10);
    }else{
      var newValStr=newVal;
      var newValInt = -1;
    }
    //console.log('changeListValueObserver', 'newValStr', newValStr, 'newValInt', newValInt, 'indexVal', indexVal);    
    this.dispatchEvent(new CustomEvent('field-list-value-changed', {
      bubbles: true,
      composed: true,
      detail: {
        'name': this.field.name,
        'value_with_index': newVal,
        'value': newValStr, //newVal,
        'index': newValInt, //index,
        //'thisindex': this.field.index
      }
    }));
    this.value=newVal;
  }
  static get properties() {
    return {
      field: {        type: Object,        notify: true      },
      value: {        type: String,        notify: true      },
      index: Number, fieldIndex: Number      
    }
  }
  changeList(newList) {
    this.set('field.items', newList);
  }

  static get template() {
    return html`      
    <style>
    div.dropdown-trigger:{
      color: #03a9f4;
    }
    paper-dropdown-menu :{
      --primary-background-color: green;
      --paper-listbox-color: blue;
      --primary-text-color:red;
      --paper-listbox:   yellow;
      --paper-listbox-background-color:#1676f31a;
    }
    </style>
        <paper-dropdown-menu   label="{{labelValue(selectedLanguage, field)}}" name="{{field.name}}"  no-animations required disabled="{{field.read_only}}">
        <paper-listbox class="dropdown-content" slot="dropdown-content" selected="{{field.value}}" attr-for-selected="item-name">
          <template is="dom-repeat" items="[[field.items]]">
            <paper-item  field-index="{{index}}" index="{{index}}" item-name="[[item.keyName]]-{{index}}">
            {{labelListValue(selectedLanguage, item)}}
            </paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>         
    `;
  }
}
customElements.define('field-list', FieldList);