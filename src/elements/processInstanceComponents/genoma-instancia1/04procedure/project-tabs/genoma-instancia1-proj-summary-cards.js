import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';
import {windowDefinition} from '../../03config/Project/genoma-instancia1-projtab-summary-cards-settings';
import '../../03config/Project/genoma-instancia1-projtab-summary-cards-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import '../../01moduleFunctionality/genoma-instancia1-webcomponent-project';

class GenomaInstancia1ProjSummaryCards extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.genomaInstancia1!=null){
            this.selectedStudy=state.genomaInstancia1.selectedStudy;
        }
    }      
    selCheckObject(e){
        //console.log('selCurStudyFamily', 'curStudyFamily', curStudyFamily, e);
        var curObjectType=e.currentTarget.curObjectType;
        var curObject=e.currentTarget.curObject;
        switch(curObjectType.toUpperCase()){
            case 'STUDY_FAMILY':
                this.selectedStudyFamily=curObject;
                break;
            case 'STUDY_INDIVIDUAL':
                this.selectedStudyIndividual=curObject;
                break;
            default:
                console.log('curObjectType '+curObjectType+' no recognized.');
                return;
        }
        console.log('curObjectType', curObjectType, 'curObject', curObject);
    }
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            selectedProject:{type: Object},
            selectedObject:{type: Object},// value:this.selectedProject},
            selectedStudy: {type: Object},
            selectedStudyIndividual:{type: Object},
            selectedStudyFamily:{type: Object},
        }
    }
    static get template() {
        return html`
        <style include="genoma-instancia1-projtab-summary-cards-style"></style>  
        <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>  
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}  {{selectedProject.name}} ([[selectedProject.study.length]])</p>
            <div class="wrapper">
                <div name="windowDefinitionButtons" class="buttonGroup">
                    <template is="dom-if" if="[[windowDefinition.displayRefreshButton]]"> 
                        <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                    </template>  
                    <template is="dom-if" if="[[windowDefinition.project_displayButtons]]"> 
                        <template is="dom-repeat" items="{{windowDefinition.project_dialogButtons}}" as="currentfield">       
                            <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="PROJECTS" selected-object="{{selectedProject}}"
                            on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                            </field-controller>
                        </template>  
                    </template>             
                </div>
                <template is="dom-repeat" items="[[selectedProject.study]]" as="curStudy">
                    <div class="elementCard">   
                        <p><b>{{curStudy.name}} - {{curStudy.description}}</b></p>
                        <div name="windowDefinitionButtons" class="buttonGroup">              
                            <template is="dom-if" if="[[windowDefinition.study_displayButtons]]"> 
                                <template is="dom-repeat" items="{{windowDefinition.study_dialogButtons}}" as="currentfield">       
                                    <field-controller selected-object="{{curStudy.name}}" id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDIES" 
                                    on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                                    </field-controller>
                                </template>  
                            </template>             
                        </div>
                        <div class="currstudy">
                            <div class="grid">
                                <template is="dom-repeat" items="{{windowDefinition.study_card_elements}}" as="currentstudycardelements">       
                                    <div id="[[index]]content" class="content">
                                        <template is="dom-if" if="{{isStudyFamily(currentstudycardelements.name)}}"> 
                                            <b>{{currentstudycardelements.name}} [[curStudy.study_family.length]]</b>
                                            <div name="windowDefinitionButtons" class="buttonGroup">
                                                <template is="dom-if" if="[[windowDefinition.study_family_displayButtons]]"> 
                                                <template is="dom-repeat" items="{{windowDefinition.study_family_dialogButtons}}" as="currentfield">       
                                                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDY_FAMILIES" selected-study"{{curStudy}}" selected-object="{{selectedStudyFamily}}"
                                                    on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                                                    </field-controller>
                                                </template>  
                                                </template>             
                                            </div>
                                            <template is="dom-repeat" items="[[curStudy.study_family]]" as="curStudyFamily">
                                                <paper-checkbox cur-object-type="{{currentstudycardelements.name}}" cur-object="{{curStudyFamily}}" on-change="selCheckObject">{{curStudyFamily.name}}</paper-checkbox>
                                                
                                            </template>
                                        </template>                                        

                                        <template is="dom-if" if="{{isStudyIndividual(currentstudycardelements.name)}}"> 
                                            <b>{{currentstudycardelements.name}} [[curStudy.study_individual.length]]</b>
                                            <div name="windowDefinitionButtons" class="buttonGroup">
                                                <template is="dom-if" if="[[windowDefinition.study_individual_displayButtons]]"> 
                                                <template is="dom-repeat" items="{{windowDefinition.study_individual_dialogButtons}}" as="currentfield">       
                                                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDY_INDIVIDUALS" selected-object="{{curStudy}}"
                                                    on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                                                    </field-controller>
                                                </template>  
                                                </template>             
                                            </div>
                                            <template is="dom-repeat" items="[[curStudy.study_individual]]" as="curStudyIndividual">
                                                <paper-checkbox cur-object-type="{{currentstudycardelements.name}}" cur-object="{{curStudyIndividual}}" on-change="selCheckObject">{{curStudyIndividual.individual_id}} -- {{curStudyIndividual.individual_name}}</paper-checkbox>                                                
                                                <template is="dom-if" if="{{isStudyIndividualSample(currentstudycardelements.name)}}"> 
                                                <b>{{currentstudycardelements.name}} [[curStudy.study_individual.length]]</b>
                                                <div name="windowDefinitionButtons" class="buttonGroup">
                                                    <template is="dom-if" if="[[windowDefinition.study_individual_displayButtons]]"> 
                                                    <template is="dom-repeat" items="{{windowDefinition.study_individual_dialogButtons}}" as="currentfield">       
                                                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDIES" selected-object="{{curStudy}}"
                                                        on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                                                        </field-controller>
                                                    </template>  
                                                    </template>             
                                                </div>
                                                <template is="dom-repeat" items="[[curStudy.study_individual]]" as="curStudyIndividual">                                                    
                                                    <paper-checkbox cur-object-type="{{currentstudycardelements.name}}" cur-object="{{curStudyIndividual}}" on-change="selCheckObject">{{curStudyIndividual.individual_id}} -- {{curStudyIndividual.individual_name}}</paper-checkbox>
                                                </template>
                                            </template>                                        
    



                                            </template>
                                        </template>                                        
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
            </div>            
        </div>
        `;
    }
    isStudyFamily(itemName){
        if (itemName.toUpperCase()=="STUDY_FAMILY"){return true;}
        return false;
    }
    isStudyIndividual(itemName){
        if (itemName.toUpperCase()=="STUDY_INDIVIDUAL"){return true;}
        return false;
    }
    isStudyIndividualSample(itemName){
        if (itemName.toUpperCase()=="STUDY_INDIVIDUAL_SAMPLE"){return true;}
        return false;
    }    
}
customElements.define('genoma-instancia1-proj-summary-cards', GenomaInstancia1ProjSummaryCards);