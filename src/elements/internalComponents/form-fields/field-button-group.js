import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';


// import { 
//     addTab,
//     closeTab,
//     setCurrentTab
//   } from '../../app/Redux/actions/tabs_actions';
  
class FieldButtonGroup extends connect(store)(PolymerElement) {
    static get properties() {
        return {
            _page: String,
            currentProcedure: {
                type: Object,
                notify: true
              },
            currentProcedureEvent: {
                type: Object,
                notify: true
            },  
            value: {
                type: String,
                notify: true        
              },
              fieldClass: String            
        }
    }
    stateChanged(state) {        
        this.selectedLanguage = state.app.user.appLanguage;  
    }               
    locallabelValue() {   
        //console.log('field-button-group', 'labelValue', this.selectedLanguage, this.field);
        if (this.selectedLanguage=="en") return this.procedure.label_en+'-'+this.field.label_en;    
        if (this.selectedLanguage=="es") return this.procedure.label_es+'-'+this.field.label_es;
        return this.field.label_en;
    }      
    static get template() {
        return html`
            <style>
                paper-button.blue {
                    min-width: 3em;
                    padding: 0em;
                    margin: 0.2em;
                    min-height: 2em;
                    color: var(--paper-light-blue-500);
                    --paper-button-flat-focus-color: var(--paper-light-blue-50);                
                }            
                paper-button.blue:hover {
                    background: var(--paper-light-blue-50);
                }            
            </style> 
            <paper-button-group id="{{buttonGroupName}}" on-click="optionPressed" selected="{{selectedActionName}}" attr-for-selected="item-name">
                <template is="dom-repeat" items="[[field.items]]">
                    <paper-button class="blue" item-name="[[item.keyName]]">
                        {{_labelListValue(selectedLanguage, item.keyValue_en, item.keyValue_es)}}
                    </paper-button>
                </template>                
                <paper-button class="blue" item-name="SAMPLINGCOMMENTADD">Add Comment</paper-button>
                <paper-button class="blue" item-name="SAMPLINGCOMMENTREMOVE">Remove Comment</paper-button>
            </paper-button-group>

            <!-- <div class$="{{field.branch_level}}"><a href="" on-click="clicked" class="{{field.branch_level}}">{{locallabelValue(selectedLanguage)}}</a> </div> -->                                    
        `;
    }
    clicked(){
        console.log('field-button-group.clicked', 'procedure', this.procedure, 'procEvent', this.field);
        this.dispatchEvent(new CustomEvent('field-button-group-clicked', {
          bubbles: true,
          composed: true,
          detail: {
            'procedure': this.procedure,
            'tabName_en': this.procedure.label_en+'-'+this.field.label_en,
            'procEvent': this.field
          }
        }));    
      }    
}
customElements.define('field-button-group', FieldButtonGroup);