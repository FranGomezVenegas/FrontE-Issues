import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '@polymer/paper-tabs/paper-tabs';
import '@polymer/paper-tabs/paper-tab';
import '@polymer/iron-pages/iron-pages';

import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import '../03config/Programs/proc-deploy-programmainview-settings';
import {FrontendEndpointsEnvMonitForPrograms, FrontendEndpointsEnvMonitForProductionLot} from '../01moduleFunctionality/endpoints-frontend-env-monit';
import {em_programs_tabs, programMain_programSelectionForm, programHome_defaultTab,
    tabsDefinition} from '../03config/Programs/proc-deploy-programmainview-settings';

import {setSelectedProgram} from '../02Redux/proc-deploy_actions.js';

//import './program-tabs/proc-deploy-prog-home.js';
// import './program-tabs/proc-deploy-prog-configcalendar.js'; -> aqui esta el fallo del polymer-legacy
import './program-tabs/proc-deploy-prog-limits.js';
 import './program-tabs/proc-deploy-prog-points.js';
 import './program-tabs/proc-deploy-prog-points-map.js';
// import './program-tabs/proc-deploy-prog-corrective-actions.js';

class procDeployPrograms extends FieldsMethods(TabsMethods(FrontendEndpointsEnvMonitForProductionLot(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement))))) {
    stateChanged(state) {
        if (state.procDeploy!=null){
            this.programs= state.procDeploy.programs.programsList;
            if (this.programs!=null){this.fillProgramsList();}
        }  
        // if (state.app.user.appProcedureList.procedures!=null){  
        //     this.procedure=state.app.user.appProcedureList.procedures[2];    
        // }
        this.selectedLanguage=state.app.user.appLanguage;
    }  
    fillProgramsList() {
        if (this.programs==null){return;}
        var i;
        this.set('programsList.0.items', []);
        for (i = 0; i < this.programs.length; i++) { 
            this.push('programsList.0.items', {
                keyName: this.programs[i].name, 
                keyValue_es: this.programs[i].description_en,  
                keyValue_en: this.programs[i].description_es}
            );     
        }        
    } 
    programSelected(e){
        if (e.detail.name=='programsList'){
            this.selectedSampleTemplateIndex =e.detail.index;
            this.selectedProgram=this.programs[e.detail.index];
            store.dispatch(setSelectedProgram(this.programs[e.detail.index]));
            this.getSelectedProgramCorrectiveAction({programName: this.programs[e.detail.index].name});  
            var elem=this.shadowRoot.getElementById("proc-deploy-corrective-actions");
           // if (elem){elem.getSelectedProgramCorrectiveActions();}            
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
            programs: Object,
            selectedProgram: Object,
            programsList: {type: Array, notify: true, bubble: true, value: programMain_programSelectionForm},
            tabs: {type:Object, value:em_programs_tabs},
            currentSubTab: {type: String, value: programHome_defaultTab},
            tabsDefinition:{type: Object, value:tabsDefinition},
        }
    }
    static get template() {
        return html`
        <style include="proc-deploy-programmainview-style"></style>
        <div class="wrapper">
            <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
            <div id="programs" class="programsList"> 
                <template is="dom-repeat" index="{{index}}" items="{{programsList}}" as="currentfield">
                <field-controller on-field-list-value-changed="programSelected" 
                    name="{{currentfield.name}}" 
                    field="{{currentfield}}" value="{{selectedSampleTemplate}}"
                    style="width:100px;">
                </field-controller>
                </template>          
            </div>
        </div>
        <div id="program_definition" class="programTabs">        
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
            {{id}}            
                <proc-deploy-prog-home id="proc-deploy-home"> </proc-deploy-prog-home>  
                <proc-deploy-prog-configcalendar display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="proc-deploy-config-calendar" selected-program="{{selectedProgram}}"> </proc-deploy-prog-configcalendar>                  
                <proc-deploy-prog-limits id="proc-deploy-limits" selected-program="{{selectedProgram}}"> </proc-deploy-prog-limits>                  
                <proc-deploy-prog-points-map id="proc-deploy-sampling-points-map" selected-program="{{selectedProgram}}"> </proc-deploy-prog-points-map>
                <proc-deploy-prog-points id="proc-deploy-sampling-points" selected-program="{{selectedProgram}}"> </proc-deploy-prog-points>
                <proc-deploy-prog-corrective-actions id="proc-deploy-corrective-actions" selected-program="{{selectedProgram}}"> </proc-deploy-prog-corrective-actions>
            </iron-pages>
        </div>
        `;
    }
    refreshWindow() {
        this.getActivePrograms();
    }
    getActivePrograms(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        this.getPrograms();
        this.getActiveProductionLotsList();
    }
    ready() {
        super.ready();
        this.getActivePrograms();
    }
}
customElements.define('proc-deploy-programs', procDeployPrograms);