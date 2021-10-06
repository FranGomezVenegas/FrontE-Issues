import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

import './../../../config/platform/main-layout/two-headers-form-fields-style';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

class FieldAvatar extends FieldsMethods(connect(store)(PolymerElement)) {
    static get properties() {
        return {
          field: {        type: Object,        notify: true      },
          value: {        type: String,        notify: true              },
          selectedLanguage: String
        }
    }    
    static get template() {
        return html`            
            <style include="form-fields-style">
              button {
                background: transparent;
                border: none !important;
                font-size:0;
              }
            </style>
            <!-- <vaadin-button on-click="clicked"  class="button" value="{{field.name}}"> -->
              <img class="formFieldAvatar"  on-click="clicked" src="{{field.source}}" aligned="center"  height="50" width="50"> 
              <template is="dom-if" if="[[field.display_label]]"> 
                <a on-click="clicked"  value="{{field.name}}" disabled="{{field.read_only}}">
                  {{labelValue(selectedLanguage, field)}}
                </a>              
              </template>
              <!-- </vaadin-button> -->
        `;
    }
    stateChanged(state) {
      this.selectedLanguage=state.app.user.appLanguage;
    }     
    clicked(){        
        this.dispatchEvent(new CustomEvent('avatar-item-clicked', {
          bubbles: true,
          composed: true,
          detail: {'avatarName': this.field.name,'value': this.value, 'avatarDefinition': this.field}
        }));    
      }    
}
customElements.define('field-avatar', FieldAvatar);