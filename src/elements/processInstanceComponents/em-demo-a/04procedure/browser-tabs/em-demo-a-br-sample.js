import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {addTab, setCurrentTab} from '../../../../platformComponents/Redux/actions/tabs_actions';
import {FrontendEndpointsEnvMonitBrowser} from '../../01moduleFunctionality/endpoints-frontend-env-monit-browser';
import {tableFieldLabel} from '../../03config/tablefield_labels';
import '../../03config/Browser/em-demo-a-browser-sample-settings';

import {windowContent, browserSampleFields} from '../../03config/Browser/em-demo-a-browser-sample-settings';
import {schema_name, personal_smp_template} from '../../03config/config-process';
class emDemoABrSample extends tableFieldLabel(FrontendEndpointsEnvMonitBrowser(connect(store)(PolymerElement))) {
    stateChanged(state) {
        if (state.emDemoA!=null){
            if (state.emDemoA.browserSelectedSample!=null){
                this.selSample=state.emDemoA.browserSelectedSample;
            }            
        }        
        this.selectedLanguage=state.app.user.appLanguage;
    }        
    static get properties() {
        return {
            procInstanceName: {type: String, value:schema_name},
            personTemplate: {type: String, value:personal_smp_template},
            selectedLanguage: String,            
            selSample:{type: Object},
            browserFields:{type: Object, value: browserSampleFields},
            windowContent: {type: Array, value: windowContent},
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-browser-sample-style"></style> 

        <div id="mainDiv"> <!--This is the Div 1 in the picture-->        
        <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
          <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>       
            <div class="filter">            
                <div class="detailDataSection"> 
                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_info_title', selectedLanguage)}}</h2></p>
                <template is="dom-repeat" items="[[selSample.sampleFieldsToDisplay]]">  
                    <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, item.field_value, selectedLanguage)}}<p></p>
                </template>
                </div>
            </div>
            <div class="detailMain"> 
                <template is="dom-repeat" items="[[selSample.stages]]" as="stage">  
                    <div class="detailDataSection"> 
                        <p><h2><b>{{stageTitle(browserFields.schemaName, browserFields.tableName, stage, selectedLanguage)}}</h2> {{stage.started_on}} >> {{stage.ended_on}}   </b></p>                        
                        <template is="dom-if" if="{{isTheCurrentStage(stage)}}">                                   
                            <field-controller id="OpenStage"  field="{{windowContent.goToStageTabButton}}" value="{{item}}"
                                on-field-button-clicked="openTab" 
                                selected-Object="[[item]]"> 
                            </field-controller>
                        </template>            
                        <template is="dom-if" if="{{isIncubationStage(stage)}}">  
                            <div id="incub1" class="detailDataSection"> 
                                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_stage_Incubation1_title', selectedLanguage)}}</h2></p>
                                <template is="dom-repeat" items="[[stage.data.0.incubation_1]]" as="incub1item">  
                                    <template is="dom-if" if="{{displayStageFld(stage, incub1item)}}"> 
                                        <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, incub1item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, incub1item.field_value, selectedLanguage)}}<p></p>
                                    </template>
                                </template>
                            </div>
                            <div id="incub2" class="detailDataSection"> 
                                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_stage_Incubation2_title', selectedLanguage)}}</h2></p>
                                <template is="dom-repeat" items="[[stage.data.0.incubation_2]]" as="incub2item">  
                                    <template is="dom-if" if="{{displayStageFld(stage, incub2item)}}"> 
                                        <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, incub2item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, incub2item.field_value, selectedLanguage)}}<p></p>
                                    </template>    
                                </template>
                            </div>
                        </template>
                        <template is="dom-if" if="{{!isIncubationStage(stage)}}">    
                            <template is="dom-repeat" items="[[stage.data]]">  
                                <template is="dom-if" if="{{displayStageFld(stage, item)}}"> 
                                    <p><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, item.field_name, selectedLanguage)}}:</b> {{valueTranslation(browserFields.schemaName, browserFields.tableName, item.field_value, selectedLanguage)}}<p></p>
                                </template>    
                            </template>
                        </template>
                    </div>
                </template>            
            </div><!--Closing "central"-->            
        </div>
        `;
    }
    isIncubationStage(st){
        if (st.current_stage=="Incubation") return true;
        return false;
    }
    isTheCurrentStage(st){
        console.log('current stage', st.current_stage, 'this.selSample.currentStage', this.selSample.sampleFieldToRetrieve.current_stage);
        if (st.current_stage==this.selSample.sampleFieldToRetrieve.current_stage) return true;
        return false;
    }
    displayStageFld(st, currFld){
        if (!currFld) return false;
        if (!currFld.field_name) return false;
        if (st.current_stage=="PlateReading"){
            if (currFld.field_name=="raw_value"){
                return true;
            }return false;
        }
        if (st.current_stage=="MicroorganismIdentification"){
            if (currFld.field_name=="microorganism_list"){
                return true;
            }return false;
        }
        if (st.current_stage=="Incubation"){
            if (currFld.field_name=='') return false;        
        }
        
        return true;
    }
    keyPressed(e){
        if(e.code.includes("Enter")) {
          this.RunReport();
          return;
        }
    }    
    RunReport(){
        var data=[];
        data.sampleId=this.windowContent.fields[0].value;
        data.browserSampleFieldToRetrieve=this.browserFields.fieldToRetrieve;
        data.browserSampleFieldsToDisplay =this.browserFields.fieldsToDisplay;
        this.getBrowserSelectedSampleData(data);        
    }
    openTab(){
        //console.log('openTab > '+this.procInstanceName+ '-' + this.selSample.currentStage);
        var procObj = {"name": this.procInstanceName};
        var pageForStage="";
        if (this.selSample.sampleFieldToRetrieve.sample_config_code==this.personTemplate){
            pageForStage=pageForStage+"person-";
        }else{pageForStage=pageForStage+"sample-";}
        
        switch (this.selSample.sampleFieldToRetrieve.current_stage){
        case "Sampling":
            pageForStage=pageForStage+"sampling";
            break;
        case "Incubation":
            pageForStage=pageForStage+"incub-batch";
            break;
        case "Incubation":
            pageForStage=pageForStage+"incub-batch";
            break;
        case "PlateReading":
            pageForStage=pageForStage+"plate-reading";
            break;
        case "MicroorganismIdentification":
            pageForStage=pageForStage+"microorganism";
            break;
        default: 
            break;
        }
        store.dispatch(addTab({             
            lp_frontend_page_name: pageForStage,
            tabName: this.procInstanceName+ '-' + pageForStage,
            tabLabel_en: this.procInstanceName+ '-' + pageForStage,
            tabLabel_es: this.procInstanceName+ '-' + pageForStage,
            procedure: procObj, tabEsignRequired: false, tabConfirmUserRequired: false
          }));  
        var curTab = [];           
        curTab.tabName = procObj.name + '-' + pageForStage;
        curTab.currTabEsignRequired=false;
        curTab.currTabConfirmUserRequired=false;
        curTab.sops = procObj.sops;
        store.dispatch(setCurrentTab(curTab));      
    }
}
customElements.define('em-demo-a-br-sample', emDemoABrSample);