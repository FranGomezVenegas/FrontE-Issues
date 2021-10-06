import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import '@polymer/iron-selector/iron-selector';
import './field-badge';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
//import './../../../config/styles/form-fields-style'  
class FieldTreeList extends FieldsMethods(connect(store)(PolymerElement)) {
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
                    padding-top: 0.4vw;
                    position: relative;
                    left: auto;
                    text-shadow: 3px 2px #42f4f4;
                    width: 3.25vw;
                    height: 2.2vh;                
                }                 
                div.level2 {
                    padding-top: 0.4vw;
                    position: relative;
                    left: 1.3vw;
                    width: 9.76vw;
                    height: 2vh;                
                } 
                div.level3 {
                    padding-top: 0.4vw;
                    position: relative;
                    left: 2.6vw;
                    width: 9.76vw;
                    height: 2vh;               
                }
                div.vaadin-button-container{       
                    justify-content: left;
                }
                vaadin-button{       
                    padding: 0px;              
                }  
                .level1{       
                    height: 0.97vh;         
                    text-shadow: 0.13vw 0.19vw #42f4f4;    
                    padding: 0.35vw;                                    
                }  
                .level2{  
                    height: 0.97vh;
                    padding: 0.2vw;                                    
                }                           
                .red{  
                    height: 0.97vh;                  
                    color: red;
                    align:left;
                } 
                .iron-icon:hover .tooltiptext {
                    visibility: visible;
                }            
            </style> 
            <div class$="{{field.branch_level}}">
            
                <template is="dom-if" if="{{sopsPassed(field.sops_passed)}}">
                    <vaadin-button class$="{{field.branch_level}}" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                        <template is="dom-if" if="{{hasBadge(field.badge)}}">
                            <field-badge value="{{field.badge}}"></field-badge>
                        </template>                              
                    </vaadin-button>           
                </template>
                <template is="dom-if" if="{{!sopsPassed(field.sops_passed)}}">                
                    <vaadin-button title="{{labelValue(selectedLanguage, title)}}" class$="{{field.branch_level}} red" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                    </vaadin-button> 
<!--                    <vaadin-button class="red" on-click="openSopsSummary">
                        <iron-icon style="fill:red" icon="report-problem">
                            <span class="tooltiptext">Tooltip text</span>
                        </iron-icon> -->
                    </vaadin-button>    
                    <template is="dom-if" if="{{hasBadge(field.badge)}}">
                        <field-badge value="{{field.badge}}"></field-badge>
                    </template>                                                  
                </template> 
                
            </div>                                     

<!--            <div class$="formFieldTreeListDiv{{field.branch_level}}">            
                <template is="dom-if" if="{{sopsPassed(field.sops_passed)}}">
                    <vaadin-button class$="{{field.branch_level}}" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                        <template is="dom-if" if="{{hasBadge(field.badge)}}">
                            <field-badge value="{{field.badge}}"></field-badge>
                        </template>                              
                    </vaadin-button>           
                </template>
                <template is="dom-if" if="{{!sopsPassed(field.sops_passed)}}">                
                    <vaadin-button class$="formFieldTreeListButton{{field.branch_level}} red" on-click="clicked">{{labelValue(selectedLanguage, field)}}
                    </vaadin-button> 
                    <vaadin-button style="height:0px;" class="formFieldTreeListButtonRed" on-click="openSopsSummary">
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
        this.dispatchEvent(new CustomEvent('field-tree-list-clicked', {
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
customElements.define('field-tree-list', FieldTreeList);