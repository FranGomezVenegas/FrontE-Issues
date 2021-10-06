import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import '@polymer/iron-selector/iron-selector';
import './field-badge';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
//import './../../../config/styles/form-fields-style'  
class FieldTreeListIron extends FieldsMethods(connect(store)(PolymerElement)) {
    static get properties() {
        return {
            value: {
                type: String,
                notify: true        
              },
        }
    }
    stateChanged(state) {        
        this.selectedLanguage = state.app.user.appLanguage;     
    }       
    static get template() {
        return html`
            <!-- <style include="form-fields-style"></style> -->
            <style>
                div.element {
                    position: relative;
                    width: 100%;
                    height: 18px;  
                    display: inline-block;              
                }                
                div.level1 {
                    position: relative;
                    left: auto;
                    width: 50px;
                    height: 15px;                
                }                 
                div.level2 {
                    position: relative;
                    left: 20px;
                    width: 150px;
                    height: 15px;                
                } 
                div.level3 {
                    position: relative;
                    left: 40px;
                    width: 150px;
                    height: 15px;                
                }
                div.vaadin-button-container{       
                    justify-content: left;
                }
                vaadin-button{       
                    padding: 0px;              
                }  
                .level1{       
                    height: 15px;              
                    text-shadow: 3px 2px #4CAF50;
                }  
                .level2{  
                    height: 15px;                   
                }                           
                .red{  
                    height: 15px;                   
                    color: red;
                    align:left;
                } 
                .iron-icon:hover .tooltiptext {
                    visibility: visible;
                }            
            </style> 
            <div class$="{{field.branch_level}}">
            <p>
                <template is="dom-if" if="{{sopsPassed(field.sops_passed)}}">
                    <vaadin-button class$="{{field.branch_level}}" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                        <template is="dom-if" if="{{hasBadge(field.badge)}}">
                            <field-badge value="{{field.badge}}"></field-badge>
                        </template>                              
                    </vaadin-button>           
                </template>
                <template is="dom-if" if="{{!sopsPassed(field.sops_passed)}}">                
                    <vaadin-button class$="{{field.branch_level}} red" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                    </vaadin-button> 
                    <vaadin-button class="red" on-click="openSopsSummary">
                        <iron-icon style="fill:red" icon="report-problem">
                            <span class="tooltiptext">Tooltip text</span>
                        </iron-icon>
                    </vaadin-button>    
                    <template is="dom-if" if="{{hasBadge(field.badge)}}">
                        <field-badge value="{{field.badge}}"></field-badge>
                    </template>                                                  
                </template> 
            </p>    
            </div>                                     

<!--            <div class$="formFieldTreeListIronDiv{{field.branch_level}}">            
                <template is="dom-if" if="{{sopsPassed(field.sops_passed)}}">
                    <vaadin-button class$="{{field.branch_level}}" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                        <template is="dom-if" if="{{hasBadge(field.badge)}}">
                            <field-badge value="{{field.badge}}"></field-badge>
                        </template>                              
                    </vaadin-button>           
                </template>
                <template is="dom-if" if="{{!sopsPassed(field.sops_passed)}}">                
                    <vaadin-button class$="formFieldTreeListIronButton{{field.branch_level}} red" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                    </vaadin-button> 
                    <vaadin-button style="height:0px;" class="formFieldTreeListIronButtonRed" on-click="openSopsSummary">
                        <iron-icon style="fill:red" icon="report-problem">
                            <span class="tooltiptext">Tooltip text</span>
                        </iron-icon>
                    </vaadin-button>    
                    <template is="dom-if" if="{{hasBadge(field.badge)}}">
                        <field-badge value="{{field.badge}}"></field-badge>
                    </template>                                                  
                </template> -->
                
            </div>                                     
        `;
    }
    hasBadge(bdg) {
        if (bdg>0) {return true;}
        return false;
    }
    sopsPassed(s){
        // if field.sops_passed property is not defined then it is not relevant for Sops, considered as completed/passed.        
        if (s==null){return true;}
        return s;
    }
    openSopsSummary() {        
        this.dispatchEvent(new CustomEvent('toast-message', {
            bubbles: true,
            composed: true,
            detail: 'openSopddd'
        }));         
    }
    clicked(){
        this.dispatchEvent(new CustomEvent('field-tree-listiron-clicked', {
          bubbles: true,
          composed: true,
          detail: {
            'procedure': this.procedure,
            'tabName_en': this.procedure.label_en+'-'+this.field.label_en,
            'procEvent': this.field,
            'sopPassed': this.procedure.sops_passed
          }
        }));    
      }    
}
customElements.define('field-tree-listiron', FieldTreeListIron);