import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '@polymer/paper-tabs/paper-tabs';
import '@polymer/paper-tabs/paper-tab';
import '@polymer/iron-pages/iron-pages';

import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import '../03config/Programs/em-demo-a-programmainview-settings';
import {FrontendEndpointsEnvMonitForPrograms, FrontendEndpointsEnvMonitForProductionLot} from '../01moduleFunctionality/endpoints-frontend-env-monit';
import {em_programs_tabs, programMain_programSelectionForm, programHome_defaultTab,
    tabsDefinition} from '../03config/Programs/em-demo-a-programmainview-settings';

import {setSelectedProgram} from '../02Redux/em-demo-a_actions.js';

import './program-tabs/em-demo-a-prog-home.js';
import './program-tabs/em-demo-a-prog-configcalendar.js'; //-- aqui esta el fallo del polymer-legacy
import './program-tabs/em-demo-a-prog-limits.js';
 import './program-tabs/em-demo-a-prog-points.js';
 import './program-tabs/em-demo-a-prog-points-map.js';
 import './program-tabs/em-demo-a-prog-corrective-actions.js';

class emDemoAPrograms extends FieldsMethods(TabsMethods(FrontendEndpointsEnvMonitForProductionLot(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement))))) {
    stateChanged(state) {
        if (state.emDemoA!=null){
            this.programs= state.emDemoA.programs.programsList;
            if (this.programs!=null){this.fillProgramsList();}
            if (this.programs!=undefined && this.selectedProgram==undefined && this.programs.length==1){
                this.selectedProgram=this.programs[0];            
                store.dispatch(setSelectedProgram(this.programs[0]));
                this.getSelectedProgramCorrectiveAction({programName: this.programs[0].name});  
                this.isSingleProgram=true;
            }
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
            if (this.programs==undefined || this.programs[this.selectedSampleTemplateIndex]==undefined){ return;}            
            this.selectedProgram=this.programs[e.detail.index];            
            store.dispatch(setSelectedProgram(this.programs[e.detail.index]));
            this.getSelectedProgramCorrectiveAction({programName: this.programs[e.detail.index].name});  
            var elem=this.shadowRoot.getElementById("em-demo-a-corrective-actions");
           // if (elem){elem.getSelectedProgramCorrectiveActions();}            
        }
        //console.log('programSelected, selectedProgram', this.selectedProgram);
    }
    static get properties() {
        return {  
            selectedLanguage: String,
            programs: Object,
            selectedProgram: {type: Object, notify:true},
            programsList: {type: Array, notify: true, bubble: true, value: programMain_programSelectionForm},
            tabs: {type:Object, value:em_programs_tabs},
            homeDefaultTab: {type: String, value: programHome_defaultTab},
            currentSubTab: {type: String, value: programHome_defaultTab},
            tabsDefinition:{type: Object, value:tabsDefinition},
            isSingleProgram:{type: Boolean, value: false}
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-programmainview-style"></style>
        <template is="dom-if" if="[[!isSingleProgram]]">    
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
        </template>
        <div id="program_definition" class="programTabs">        
            <paper-tabs id="tabs" selected="{{currentSubTab}}" attr-for-selected="name" noink scrollable>
                <template is="dom-if" if="[[isSingleProgram]]">    
                    <paper-tab class="platformCenterTabsTabItem"  on-click="refreshWindow" name="[[tab.tabName]]" 
                    esign-required="false" confirmuser-required="false" tab-index="{{index}}">
                    <br>
                    <paper-icon-button icon="refresh" icon-tab-index="[[index]]" icon-tab-name="[[tab.tabName]]" on-click="refreshWindow"></paper-icon-button>
                    </paper-tab>                                    
                </template>

                <template is="dom-repeat" items="[[tabs]]" as="tab">                
                    <paper-tab class="tabItem"  esign-required="[[tab.esign_required]]" 
                        confirmuser-required="[[tab.confirmUser_required]]" 
                        on-click="tabSelected" name="[[tab.tabName]]" tab-name="[[tab.tabName]]"
                        tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}} 
                    </paper-tab>                
                </template>
            </paper-tabs>
            <iron-pages id="tabsiron" selected="[[currentSubTab]]" attr-for-selected="id">    
            {{id}}            
                <em-demo-a-prog-home id="em-demo-a-home"> </em-demo-a-prog-home>  
                <em-demo-a-prog-configcalendar display-calendar="{{tabsDefinition.configCalendar.displayCalendar}}" display-table="{{tabsDefinition.configCalendar.displayTable}}" id="em-demo-a-config-calendar" selected-program="{{selectedProgram}}"> </em-demo-a-prog-configcalendar>                  
                <em-demo-a-prog-limits id="em-demo-a-limits" selected-program="{{selectedProgram}}"> </em-demo-a-prog-limits>                  
                <em-demo-a-prog-points-map id="em-demo-a-sampling-points-map" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points-map>
                <em-demo-a-prog-points id="em-demo-a-sampling-points" selected-program="{{selectedProgram}}"> </em-demo-a-prog-points>
                <em-demo-a-prog-corrective-actions id="em-demo-a-corrective-actions" selected-program="{{selectedProgram}}"> </em-demo-a-prog-corrective-actions>
            </iron-pages>
        </div>
        `;
    }
    tabSelected(e){
        this.currentSubTab=e.currentTarget.name;
        this.homeDefaultTab=this.currentSubTab;
        return e.currentTarget.name;        
    }       
    refreshWindow(e) {
        this.currentSubTab=this.homeDefaultTab;
        this.getActivePrograms();
    }
    getActivePrograms(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        //this.getActiveProductionLotsList();
        var data={};
        data.callBackFunction=this.getActiveProductionLotsList.bind(this);
        this.getPrograms(data);
    }
    ready() {
        super.ready();
        this.getActivePrograms();
    }
}
customElements.define('em-demo-a-programs', emDemoAPrograms);