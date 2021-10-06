
{/*
    <div class="detailMain">  

    s -->
    <template is="dom-repeat" items="[[selSample]]" as="sample">  
    a                {{sample.incubation2_end}} aa
b                {{rowFieldValue(sample, smpFld)}}
c                {{sample.length}}
        <div class="detailDataSection"> 
            {{sample.sample_id}}
            {{rowFieldValue(sample, smpFld)}}
            {{selSample.length}}
<!--                        <p><h2><b>{{stageTitle(browserFields.schemaName, browserFields.tableName, stage, selectedLanguage)}}</h2> {{stage.started_on}} >> {{stage.ended_on}}   </b></p>                        -->
            </div>
        </template>            
    </div><!--Closing "central"-->            
</div> */}


import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {addTab, setCurrentTab} from '../../../../platformComponents/Redux/actions/tabs_actions';
import {FrontendEndpointsEnvMonitBrowser} from '../../01moduleFunctionality/endpoints-frontend-env-monit-browser';
import {tableFieldLabel} from '../../03config/tablefield_labels';
import '../../03config/Browser/proc-deploy-browser-sample-settings';

import {windowContent, browserSampleFields} from '../../03config/Browser/proc-deploy-browser-sample-settings';
import {schema_name, personal_smp_template} from '../../03config/config-process';
class procDeployBrSample extends tableFieldLabel(FrontendEndpointsEnvMonitBrowser(connect(store)(PolymerElement))) {
    stateChanged(state) {
        if (state.procDeploy!=null){
            if (state.procDeploy.browserSelectedSample!=null){
                this.selSample=state.procDeploy.browserSelectedSample.sample;
                console.log('selSample', this.selSample);
            }            
        }        
        this.selectedLanguage=state.app.user.appLanguage;
    }        
    static get properties() {
        return {
            procInstanceName: {type: String, value:schema_name},
            selectedLanguage: {type: String, notify:true},            
            selSample:{type: Object},
            browserFields:{type: Object, value: browserSampleFields},
            windowContent: {type: Array, value: windowContent},
        }
    }
    static get template() {
        return html`
{{selSample.sample_id}}
        <style include="proc-deploy-browser-sample-style"></style> 

        <div id="mainDiv"> <!--This is the Div 1 in the picture-->        
            <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
            <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
            </template>       
            <div class="filter">            
                <div class="detailDataSection"> 
                <p><h2><b>{{getTableFieldLabel(browserFields.schemaName, browserFields.tableName, '*sample_info_title', selectedLanguage)}}</h2></p>
                </div>
            </div>
            <div class="detailMain"> 
                <div class="detailDataSection"> 
                    <div class="testingGroupInfoForm">
                        <template is="dom-repeat" items="[[browserFields.sampleSettings.fieldsToDisplay]]" as="smpFld">  
                        <div class="fieldInfo">
                            <p><b> {{getTableFieldLabel(browserFields.schemaName, browserFields.sampleSettings.tableName, smpFld, selectedLanguage)}} 
                            :</b>{{rowFieldValue('sample', smpFld, browserFields.sampleSettings.schemaName, browserFields.tableName)}} </p>
                        </div>
                        </template>
                    </div>
                    <div class="testingGroup"> 
                    <template is="dom-repeat" items="[[selSample.sample_revision_testing_group]]" as="tstGrpRow">  
                    {{tstGrpRow.testing_group}}
                        <div class="testingGroupInfoForm">
                            <template is="dom-repeat" items="[[browserFields.testingGroupSettings.fieldsToDisplay]]" as="tstGrpFld">  
                            <div class="fieldInfo">
                                <p><b>{{getTableFieldLabel(browserFields.testingGroupSettings.schemaName, browserFields.testingGroupSettings.tableName, tstGrpFld, selectedLanguage)}}
                                :</b>{{rowFieldValue(tstGrpRow, tstGrpFld, browserFields.testingGroupSettings.schemaName, browserFields.testingGroupSettings.tableName)}} </p>
                            </div>
                            </template>
                        </div>
                        <template is="dom-repeat" items="[[tstGrpRow.sample_analysis]]" as="testRow">  
                        {{testRow.analysis}}
                            <div class="testingGroupInfoForm">
                                <template is="dom-repeat" items="[[browserFields.testSettings.fieldsToDisplay]]" as="testFld">  
                                <div class="fieldInfo">
                                    <p style="display:flex;"><b>{{getTableFieldLabel(browserFields.testSettings.schemaName, browserFields.testSettings.tableName, testFld, selectedLanguage)}}
                                    :{{rowFieldValue(testRow, testFld, browserFields.testSettings.schemaName, browserFields.testSettings.tableName)}}
                                </div>
                                </template>
                            </div>
                            <div class="testingGroupInfoForm">
                                <template is="dom-repeat" items="[[testRow.sample_analysis_result]]" as="resultRow">  
                                {{resultRow.param_name}}
                                    <template is="dom-repeat" items="[[browserFields.testSettings.fieldsToDisplay]]" as="resultFld">  
                                    <div class="fieldInfo">
                                        <p style="display:flex;"><b>{{getTableFieldLabel(browserFields.resultSettings.schemaName, browserFields.resultSettings.tableName, resultFld, selectedLanguage)}}
                                        :{{rowFieldValue(resultRow, resultFld, browserFields.resultSettings.schemaName, browserFields.resultSettings.tableName)}}
                                    </div>
                                    </template>
                                </template>
                            </div>    
                        </template>
                    </template>
                    </div>

                </div>
            </div>
        </div>
        `;
    }
    rowFieldValue(item, fldName, schemaName, tableName){
        if (this.selSample==undefined){return 'sample empty';}
        if (item==undefined){return 'no item specified';}
        var fldValue='';
        if (item==='sample'){
            fldValue=this.selSample[fldName];
            return this.valueTranslation(this.browserFields.sampleSettings.schemaName, this.browserFields.tableName, fldValue, this.selectedLanguage);
        }           
        fldValue=item[fldName];
        console.log('rowFieldValue', fldName, fldValue, item, tableName);     
        return fldValue; //this.valueTranslation(schemaName, tableName, fldValue, this.selectedLanguage);
    }    
    // displayStageFld(st, currFld){
    //     if (!currFld) return false;
    //     if (!currFld.field_name) return false;
    //     if (st.current_stage=="PlateReading"){
    //         if (currFld.field_name=="raw_value"){
    //             return true;
    //         }return false;
    //     }
    //     if (st.current_stage=="MicroorganismIdentification"){
    //         if (currFld.field_name=="microorganism_list"){
    //             return true;
    //         }return false;
    //     }
    //     if (st.current_stage=="Incubation"){
    //         if (currFld.field_name=='') return false;        
    //     }
        
    //     return true;
    // }
    keyPressed(e){
        if(e.code.includes("Enter")) {
          this.RunReport();
          return;
        }
    }    
    RunReport(){
        var data=[];
        data.sampleId=this.windowContent.fields[0].value;
        //data.browserSampleFieldToRetrieve=this.browserFields.fieldToRetrieve;
        //data.browserSampleFieldsToDisplay =this.browserFields.fieldsToDisplay;
        this.getBrowserSelectedSampleData(data);        
    }
    // openTab(){
    //     //console.log('openTab > '+this.procInstanceName+ '-' + this.selSample.currentStage);
    //     var procObj = {"name": this.procInstanceName};
    //     var pageForStage="";
    //     if (this.selSample.sampleFieldToRetrieve.sample_config_code==this.personTemplate){
    //         pageForStage=pageForStage+"person-";
    //     }else{pageForStage=pageForStage+"sample-";}
        
    //     switch (this.selSample.sampleFieldToRetrieve.current_stage){
    //     case "Sampling":
    //         pageForStage=pageForStage+"sampling";
    //         break;
    //     case "Incubation":
    //         pageForStage=pageForStage+"incub-batch";
    //         break;
    //     case "Incubation":
    //         pageForStage=pageForStage+"incub-batch";
    //         break;
    //     case "PlateReading":
    //         pageForStage=pageForStage+"plate-reading";
    //         break;
    //     case "MicroorganismIdentification":
    //         pageForStage=pageForStage+"microorganism";
    //         break;
    //     default: 
    //         break;
    //     }
    //     store.dispatch(addTab({             
    //         lp_frontend_page_name: pageForStage,
    //         tabName: this.procInstanceName+ '-' + pageForStage,
    //         tabLabel_en: this.procInstanceName+ '-' + pageForStage,
    //         tabLabel_es: this.procInstanceName+ '-' + pageForStage,
    //         procedure: procObj, tabEsignRequired: false, tabConfirmUserRequired: false
    //       }));  
    //     var curTab = [];           
    //     curTab.tabName = procObj.name + '-' + pageForStage;
    //     curTab.currTabEsignRequired=false;
    //     curTab.currTabConfirmUserRequired=false;
    //     curTab.sops = procObj.sops;
    //     store.dispatch(setCurrentTab(curTab));      
    // }
}
customElements.define('proc-deploy-br-sample', procDeployBrSample);