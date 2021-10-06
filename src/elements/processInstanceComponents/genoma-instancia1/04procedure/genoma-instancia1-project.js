// import {LitElement, html, css} from 'lit-element';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../../../../store.js';
// import '@polymer/paper-tabs/paper-tabs';
// import '@polymer/paper-tabs/paper-tab';
// import '@polymer/iron-pages/iron-pages';

// import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
// import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
// import '../03config/Project/genoma-instancia1-projectmainview-settings';
// import {FrontendEndpointsModuleGenoma} from '../01moduleFunctionality/endpoints-frontend-genoma.js';
// import {documentContainerGenomaInstancia1ProjectmainviewStyleLit, window_tabs, projectMain_projectSelectionForm, home_defaultTab,
//     tabsDefinition} from '../03config/Project/genoma-instancia1-projectmainview-settings';

//     import { setSelectedProject as setSelectedProject_genoma_instancia1, setSelectedStudy as setSelectedStudy_genoma_instancia1
//         //    as activeProjects_genoma_instancia1
//         } from '../02Redux/genoma-instancia1_actions';

//         // import {setSelectedProgram} from '../02Redux/em-demo-a_actions.js.js';
// import '../01moduleFunctionality/genoma-instancia1-webcomponent-project';
   
// import './project-tabs/genoma-instancia1-proj-home';
// // import './project-tabs/genoma-instancia1-proj-summary-cards';
// import './project-tabs/genoma-instancia1-proj-samples-set';
// import './project-tabs/genoma-instancia1-proj-study-variablevalues';
// import './project-tabs/genoma-instancia1-proj-study-samples';
// import './project-tabs/genoma-instancia1-proj-study-family';
// import './project-tabs/genoma-instancia1-proj-study-individuals';
// import './project-tabs/genoma-instancia1-proj-study-files';

// /**
//  * `genoma-instancia1-project` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class GenomaInstancia1Project extends FieldsMethods(TabsMethods((FrontendEndpointsModuleGenoma(connect(store)(LitElement))))) {  
//     static get properties() {
//         return {
//             selectedLanguage: String,
//             projects: Object,
//             selectedProject: Object,
//             selectedStudy: Object,
//             filtersList: {type: Array, notify: true, bubble: true},
//             tabs: {type:Object},
//             currentSubTab: {type: String},
//             tabsDefinition:{type: Object},
//         }
//     }

//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//         super();
//         this.filtersList=projectMain_projectSelectionForm;
//         this.currentSubTab=home_defaultTab;
//         this.tabsDefinition=tabsDefinition;
//         this.tabs=window_tabs;
//         this.getProjects();
//         this.getConfigVariablesAndVariablesSet();        
//     }

//     static get styles() {
//         return [
//             //super.styles,
//             documentContainerGenomaInstancia1ProjectmainviewStyleLit,
//             css``,
//         ];
//     }

//     /**
//      * Implement to describe the element's DOM using lit-html.
//      * Use the element current props to return a lit-html template result
//      * to render into the element.
//      */
//     render() {
//         return html`
//             <style include="gemoma-instancia1-projectmainview-style"></style>
//             <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>
//             <div class="wrapper">
//                 <vaadin-button @click="${this.refreshWindow}"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
//                 <div id="projects" class="filtersList"> 
//                     ${this.filtersList.map(currentfield => html`
//                     <field-controller id="${currentfield.name}" name="${currentfield.name}" .items="${this.filtersList}" .field="${currentfield}" value="${this.selectedSampleTemplate}" .selectedobject="${this.selected_object}"
//                         @field-list-value-changed="${this.filterListValueChanged}" style="width:100px;"> 
//                     </field-controller>
//                     `)}                
//                 </div>
//             </div>
//             <div id="project_definition" class="projectTabs">        
//                 <paper-tabs .selected="${this.currentSubTab}" attr-for-selected="name" noink scrollable>
//                     ${this.tabs.map(tab => html`                    
//                         <paper-tab class="tabItem"  .esign-required="${tab.esign_required}" 
//                             .confirmuser-required="${tab.confirmUser_required}" 
//                             @click="${this.tabSelected}" name="${tab.tabName}" tab-name="[${tab.tabName}"
//                             tab-index="${index}">${this.tabLabelValue(this.selectedLanguage, tab)} 
//                         </paper-tab>                
//                     `)}
//                 </paper-tabs>
//                 <iron-pages .selected="${this.currentSubTab}" attr-for-selected="id">                
//                     <genoma-instancia1-proj-home id="home" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-home>  
//                     <genoma-instancia1-proj-summary-cards id="summary-cards" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-summary-cards>  
//                     <genoma-instancia1-proj-samples-set display-table="{{tabsDefinition.configCalendar.displayTable}}" 
//                         id="samples-set" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-samples-set>                  
//                     <genoma-instancia1-proj-study-variablevalues id="study-variablevalues" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-study-variablevalues>                  
//                     <genoma-instancia1-proj-study-samples id="study-samples" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-study-samples>
//                     <genoma-instancia1-proj-study-family id="study-family" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-study-family>                    
//                     <genoma-instancia1-proj-study-individuals id="study-individuals" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-study-individuals>                    
//                     <genoma-instancia1-proj-study-files id="study-files" .selected-project="${this.selectedProject}"> </genoma-instancia1-proj-study-files>                    
//                 </iron-pages>
//             </div>
//         `;
//     }
//     stateChanged(state) {
//         if (state.genomaInstancia1!=null){
//             this.projects= state.genomaInstancia1.activeProjects.project;
//             if (this.projects!=null){this.fillProjectsList();}
//         }  
//         this.selectedLanguage=state.app.user.appLanguage;
//     }  
//     fillProjectsList() {
//         console.log('fillProjectsList');
//         //return;
//         if (this.projects==null){return;}
//         var i;
//         var projectList=[];
//         for (i = 0; i < this.projects.length; i++) { 
//             var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
//             newElement.keyName= this.projects[i].name, 
//             newElement.keyValue_es= this.projects[i].name,  
//             newElement.keyValue_en= this.projects[i].name
//             projectList[i]=newElement;
//         }        
//         this.set('filtersList.0.items', projectList);

//         var mye={ detail: {'name': 'filtersList','index': 0}};    
//         if (this.projects.length==1){this.projectSelected(mye);}
//         else{
//             mye={ detail: {'name': 'filtersList','index': 1}};
//             this.projectSelected(mye);
//         }
//     } 
//     projectSelected(e){        
//         if (e.detail.name=='filtersList'){
//             this.selectedSampleTemplateIndex =e.detail.index;
//             this.selectedProject=this.projects[e.detail.index];
//             var data=[];
//             data=this.selectedProject;
//             //store.dispatch(setSelectedProject_genoma_instancia1(data));    

//             var i;
//             var studyList=[];
//             for (i = 0; i < this.selectedProject.study.length; i++) { 
//                 var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
//                 newElement.keyName= this.selectedProject.study[i].name, 
//                 newElement.keyValue_es= this.selectedProject.study[i].name,  
//                 newElement.keyValue_en= this.selectedProject.study[i].name
//                 studyList[i]=newElement;
//             }        
//             this.set('filtersList.1.items', studyList);
//         }
//     }
//     filterListValueChanged(e){
//         console.log('filterListValueChanged', 'e', e);
//         if (e.detail.name=="projectList"){
//             this.selectedProject=this.projects[e.detail.index];
//             var mye={ detail: {'name': 'filtersList','index': e.detail.index}};
//             this.projectSelected(mye);  
//             return;          
//         }
//         if (e.detail.name=="studyList"){
//             this.selectedStudy=this.selectedProject.study[e.detail.index];
//             var data=[];
//             data=this.selectedStudy;
//             //this.callEndpoint(data, 'SET_SELECTED_PROJECT');
//             store.dispatch(setSelectedStudy_genoma_instancia1(data));    
//             //console.log(this.selectedStudy.name);
//             return;
//         }
//     }
//     tabSelected(e){
//         var curTab = [];
//         curTab.tabName = 'home'; //e.currentTarget.name;
//         curTab.name = 'home';  //e.currentTarget.name;
//         curTab.currTabEsignRequired=false; //this.tabs[meIndex].tabEsignRequired;
//         curTab.currTabConfirmUserRequired=false; //this.tabs[meIndex].tabConfirmUserRequired;
//         this.currentTab=curTab;
//         return;        
//     }
//     refreshWindow() {
//         this.getProjects();
//         this.getConfigVariablesAndVariablesSet();
//     }
//     ready() {
//         super.ready();
//         this.getProjects();
//         this.getConfigVariablesAndVariablesSet();
//     }     
// }
// customElements.define('genoma-instancia1-project', GenomaInstancia1Project);


import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '@polymer/paper-tabs/paper-tabs';
import '@polymer/paper-tabs/paper-tab';
import '@polymer/iron-pages/iron-pages';

import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import '../03config/Project/genoma-instancia1-projectmainview-settings';
import {FrontendEndpointsModuleGenoma} from '../01moduleFunctionality/endpoints-frontend-genoma.js';
import {window_tabs, projectMain_projectSelectionForm, home_defaultTab,
    tabsDefinition} from '../03config/Project/genoma-instancia1-projectmainview-settings';

    import { setSelectedProject as setSelectedProject_genoma_instancia1, setSelectedStudy as setSelectedStudy_genoma_instancia1
        //    as activeProjects_genoma_instancia1
        } from '../02Redux/genoma-instancia1_actions';

        // import {setSelectedProgram} from '../02Redux/em-demo-a_actions.js.js';
import '../01moduleFunctionality/genoma-instancia1-webcomponent-project';
   
import './project-tabs/genoma-instancia1-proj-home';
// import './project-tabs/genoma-instancia1-proj-summary-cards';
import './project-tabs/genoma-instancia1-proj-samples-set';
import './project-tabs/genoma-instancia1-proj-study-variablevalues';
import './project-tabs/genoma-instancia1-proj-study-samples';
import './project-tabs/genoma-instancia1-proj-study-family';
import './project-tabs/genoma-instancia1-proj-study-individuals';
import './project-tabs/genoma-instancia1-proj-study-files';

// FrontendEndpointsEnvMonitForProductionLot FrontendEndpointsEnvMonitForPrograms
class GenomaInstancia1Project extends FieldsMethods(TabsMethods((FrontendEndpointsModuleGenoma(connect(store)(PolymerElement))))) {
    stateChanged(state) {
        if (state.genomaInstancia1!=null){
            this.projects= state.genomaInstancia1.activeProjects.project;
            if (this.projects!=null){this.fillProjectsList();}
        }  
        this.selectedLanguage=state.app.user.appLanguage;
    }  
    fillProjectsList() {
        if (this.projects==null){return;}
        var i;
        var projectList=[];
        for (i = 0; i < this.projects.length; i++) { 
            var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
            newElement.keyName= this.projects[i].name, 
            newElement.keyValue_es= this.projects[i].name,  
            newElement.keyValue_en= this.projects[i].name
            projectList[i]=newElement;
        }        
        this.set('filtersList.0.items', projectList);

        var mye={ detail: {'name': 'filtersList','index': 0}};    
        if (this.projects.length==1){this.projectSelected(mye);}
        else{
            mye={ detail: {'name': 'filtersList','index': 1}};
            this.projectSelected(mye);
        }
    } 
    projectSelected(e){        
        if (e.detail.name=='filtersList'){
            this.selectedSampleTemplateIndex =e.detail.index;
            this.selectedProject={};
            this.selectedProject=this.projects[e.detail.index];
            var data=[];
            data=this.selectedProject;
            //store.dispatch(setSelectedProject_genoma_instancia1(data));    

            var i;
            var studyList=[];
            for (i = 0; i < this.selectedProject.study.length; i++) { 
                var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
                newElement.keyName= this.selectedProject.study[i].name, 
                newElement.keyValue_es= this.selectedProject.study[i].name,  
                newElement.keyValue_en= this.selectedProject.study[i].name
                studyList[i]=newElement;
            }        
            this.set('filtersList.1.items', studyList);
        }
    }
    filterListValueChanged(e){
        console.log('filterListValueChanged', 'e', e);
        if (e.detail.name=="projectList"){
            this.selectedProject=this.projects[e.detail.index];
            var mye={ detail: {'name': 'filtersList','index': e.detail.index}};
            this.projectSelected(mye);  
            return;          
        }
        if (e.detail.name=="studyList"){
            this.selectedStudy=this.selectedProject.study[e.detail.index];
            var data=[];
            data=this.selectedStudy;
            //this.callEndpoint(data, 'SET_SELECTED_PROJECT');
            store.dispatch(setSelectedStudy_genoma_instancia1(data));    
            //console.log(this.selectedStudy.name);
            return;
        }
    }
    tabSelected(e){
        var curTab = [];
        curTab.tabName = 'home'; //e.currentTarget.name;
        curTab.name = 'home';  //e.currentTarget.name;
        curTab.currTabEsignRequired=false; //this.tabs[meIndex].tabEsignRequired;
        curTab.currTabConfirmUserRequired=false; //this.tabs[meIndex].tabConfirmUserRequired;
        this.currentTab=curTab;
        return;        
    }       
    static get properties() {
        return {  
            selectedLanguage: String,
            selectedStudy: {type: Object},
            projects: Object,
            selectedProject: Object,
            filtersList: {type: Array, notify: true, bubble: true, value: projectMain_projectSelectionForm},
            tabs: {type:Object, value:window_tabs},
            currentSubTab: {type: String, value: home_defaultTab},
            tabsDefinition:{type: Object, value:tabsDefinition},
        }
    }
    static get template() {
        return html`
        <style include="gemoma-instancia1-projectmainview-style"></style>
        <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>
        <div class="wrapper">
            <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
            <div id="projects" class="filtersList"> 
                <template is="dom-repeat" index="{{index}}" items="{{filtersList}}" as="currentfield">
                <field-controller on-field-list-value-changed="filterListValueChanged" 
                    name="{{currentfield.name}}" id="{{currentfield.name}}" 
                    field="{{currentfield}}" value="{{selectedSampleTemplate}}"
                    style="width:100px;">
                </field-controller>
                </template>          
            </div>
        </div>
        <div id="project_definition" class="projectTabs">        
            <paper-tabs selected="{{currentSubTab}}" attr-for-selected="name" noink scrollable>
                <template is="dom-repeat" items="[[tabs]]" as="tab">                
                    <paper-tab class="tabItem"  esign-required="[[tab.esign_required]]" 
                        confirmuser-required="[[tab.confirmUser_required]]" 
                        on-click="tabSelected" name="[[tab.tabName]]" tab-name="[[tab.tabName]]"
                        tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}} 
                    </paper-tab>                
                </template>
            </paper-tabs>
            <iron-pages selected="[[currentSubTab]]" attr-for-selected="id">                
                <genoma-instancia1-proj-home id="home"  selected-project="{{selectedProject}}"> </genoma-instancia1-proj-home>  
                <genoma-instancia1-proj-summary-cards id="summary-cards" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-summary-cards>  
                <genoma-instancia1-proj-samples-set selected-language="{{selectedLanguage}}" selected_study="{{selectedStudy}}"
                    id="samples-set" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-samples-set>                  
                <genoma-instancia1-proj-study-variablevalues id="study-variablevalues" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-variablevalues>                  
                <genoma-instancia1-proj-study-samples id="study-samples"  selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-samples>
    
    <genoma-instancia1-proj-study-family id="study-family" 
    selected_study="{{selectedStudy}}"
    selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-family>                    
                <genoma-instancia1-proj-study-individuals id="study-individuals" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-individuals>                    
                <genoma-instancia1-proj-study-files id="study-files" selected-project="{{selectedProject}}"> </genoma-instancia1-proj-study-files>                    
                
            </iron-pages>
        </div>
        
        `;
    }
    refreshWindow() {
        this.getProjects();
        this.getConfigVariablesAndVariablesSet();
    }
    ready() {
        super.ready();
        this.getProjects();
        this.getConfigVariablesAndVariablesSet();
    }
}
customElements.define('genoma-instancia1-project', GenomaInstancia1Project);