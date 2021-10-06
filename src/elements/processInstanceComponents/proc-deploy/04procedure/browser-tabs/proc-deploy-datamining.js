import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {UtilityMethods} from '../../../../../platform-mixins/functions/utility-methods';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';

import '../../../../internalComponents/Charts/chart-controller';

import {FrontendEndpointsEnvMonitBrowser} from '../../01moduleFunctionality/endpoints-frontend-env-monit-browser';
import '../../03config/proc-deploy-datamining-settings';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
import {FrontendEndpointsEnvMonitSavedQueries} from '../../01moduleFunctionality/endpoints-frontend-env-monit-saved-queries';
import '../../01moduleFunctionality/proc-deploy-webcomponent-env-monit';
//import {setSelectedBatch} from '../../02Redux/proc-deploy_actions';
import {defaultChartType, myQueries, queries, datamining_querySelectionForm, datamining_queryButtonForm, queryOutputDefinition} from '../../03config/proc-deploy-datamining-settings'; //'../03config/config-process.js';

class procDeployDatamining extends FrontendEndpointsEnvMonitSavedQueries(UtilityMethods(FieldsMethods(FunctionsEnvMonit(FrontendEndpointsEnvMonitBrowser(connect(store)(PolymerElement)))))) {
    static get properties() {
        return {
            queryOutputDefinition: {type: Object, value:queryOutputDefinition},
            queries:{type: Object, value: queries},
            myQueries:{type: Object},
            defaultChartType:{type: String, value: defaultChartType},
            queriesList: {
                type: Array,
                notify: true,
                bubble: true,
                value: datamining_querySelectionForm
            },    
            buttonForm: {
                type: Array,
                notify: true,
                bubble: true,
                value: datamining_queryButtonForm
            },                       
            selectedQuery: {type: Object, notify: true},    
            dataminingQueryOutput: {type: Array, notify:true},
            selectedObject: Object, 
            callBackRefreshWindow: Object,
            selectedLanguage: {type: String},
            
            kpiCharts:{type: Array, notify: true, value:[    {
                display_chart: true,
                chart_type:'pie',
                chart_name:'counter_range_eval',
                chart_title:{label_en:'Evaluation Counter', label_es:'Por tipo de evaluación'},
                counter_field_name:'count',
                counterLimits:{
                  //min_allowed: 3,
                  //min_allowed_included:3,
                  //max_allowed:100,
                  //max_allowed_included:100,
                  //value:0,
                },
                grouper_field_name:'spec_eval',
                grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
                label_item:{label_en:'Statussss', label_es:'Estado'},
                label_value:{label_en:'#', label_es:'#'},
              }          
            ]},
            otherCharts:{type: Array, notify: true, value:[    {
                display_chart: false,
                chart_type:'line',
                chart_name:'datatable',
                chart_title:{label_en:'Trending', label_es:'Tendencia'},
                counter_field_name:'raw_value_num',
                counterLimits:{
                  //min_allowed: 3,
                  //min_allowed_included:3,
                  //max_allowed:100,
                  //max_allowed_included:100,
                  //value:0,
                },
                grouper_field_name:'sampling_date',
                grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
                label_item:{label_en:'Statussss', label_es:'Estado'},
                label_value:{label_en:'#', label_es:'#'},
              }          
            ]}

        }
    }
    stateChanged(state) {
        if (state.procDeploy!=null){
            this.dataminingQueryOutput= state.procDeploy.dataminingQueryOutput;
            this.getChartDefinition();
            //this.getCurChartData();
            this.myQueries=state.procDeploy.allSavedQueries;
        }
        this.selectedLanguage = state.app.user.appLanguage; 
    }        
    static get template() {
        return html`            
            <style include="proc-deploy-datamining-style"></style> 
            <proc-deploy-webcomponent-env-monit id="myelements"></proc-deploy-webcomponent-env-monit>
            <env-monit-elements id="myElements" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements>  
            <div class="main">

                <div id="queryform" class="querieslist"> 
                    <template is="dom-repeat" index="{{index}}" items="{{queriesList}}" as="currentfield">
                        <field-controller name="{{currentfield.name}}" style="width:100px;"
                            field="{{currentfield}}" value="{{selectedQuery}}" on-field-list-value-changed="querySelected">
                        </field-controller>
                    </template>          
                    <template is="dom-repeat" index="{{index}}" items="{{selectedQuery.arguments}}" as="currentarg">
                        <field-controller name="{{currentarg.name}}" field="{{currentarg}}" style="width:100px;">
                        </field-controller>
                    </template>
                    <div id="buttonGroup" class="buttonGroup">
                        <template is="dom-repeat" index="{{index}}" items="{{buttonForm}}" as="currentfield">
                            <field-controller name="{{currentfield.name}}" field="{{currentfield}}" on-click="buttonFormClicked" style="width:100px;">
                            </field-controller>
                        </template>                                                    
                    </div>
                </div>
                <div id="queryoutput" class="queriesoutput"> 
                    <div id="tableview" class="queryoutputtable">
                        <template is="dom-if" if="[[queryOutputDefinition.tableTitle.display]]"> 
                            <p class="tableTitle">{{labelValue(selectedLanguage, queryOutputDefinition.tableTitle.label)}}</p>
                        </template>  
                        <div name="tableDefinitionButtons" class="buttonGroup">
                            <template is="dom-if" if="[[queryOutputDefinition.displayRefreshButton]]"> 
                                <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                            </template>  
                            <template is="dom-if" if="[[queryOutputDefinition.displayButtons]]"> 
                                <template is="dom-repeat" items="{{queryOutputDefinition.buttons}}" as="currentfield">       
                                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                                    on-field-button-clicked="fieldButtonClickedForIncubBatch" on-field-list-value-changed="onListChange"> 
                                    </field-controller>
                                </template>  
                            </template>  
                        </div>            
                        <vaadingrid-lit-singleselect id="emdemoa-samplesampling" headerfields="{{queryOutputDefinition.fieldToDisplay}}" 
                            rowcontainer="{{dataminingQueryOutput.datatable}}" selected-object="{{selectedBatch}}" on-selected-object-changed="batchSelected">
                        </vaadingrid-lit-singleselect>
                    </div>            
                    <template is="dom-repeat" items="[[kpiCharts]]" as="curkpichart">                                    
                        <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{dataminingQueryOutput}}"></chart-controller>
                    </template>
                    <template is="dom-repeat" items="[[otherCharts]]" as="curkpichart">                                    
                        <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{dataminingQueryOutput}}"></chart-controller>
                    </template>
                </div>
            </div>
        `;
    }
    buttonFormClicked(e){
        console.log('buttonFormClicked', e);
        if (e.currentTarget.name.toUpperCase()=="RUNQUERY"){
            this.runQuery();
            return;
        }
        if (e.currentTarget.name.toUpperCase()=="LOADQUERY"){
            this.loadQuery();
            return;
        }
        if (e.currentTarget.name.toUpperCase()=="CREATE_SAVED_QUERY"){
            //e.detail.buttonDefinition field
            var buttonDefinition={buttonDefinition:e.currentTarget.field};
            var mye={detail:buttonDefinition}; //.buttonDefinition:e.currentTarget.field};
            this.fieldButtonClickedForSavedQueries(mye);
            return;
        }        
        alert("Action "+e.currentTarget.name.toUpperCase()+" not recognized");
        return;
    }   
    createQuery(){

    } 
    runQuery(){
        var data=[];
        data.actionName=this.selectedQuery.name;
        if (this.selectedQuery.definition_json!=undefined){this.selectedQuery=this.selectedQuery.definition_json;}
        var urlparams="";
        for (var i=0; i < this.selectedQuery.arguments.length; i++) {
            if (this.selectedQuery.arguments[i].value!=undefined && this.selectedQuery.arguments[i].value.length>0){
                if (urlparams.length>0){urlparams=urlparams+"&";}
                urlparams=urlparams+this.selectedQuery.arguments[i].name+'='+this.selectedQuery.arguments[i].value;
            }
        }
        if (urlparams.length==0){
            alert('At least one argument is mandatory');
            return;
        }
        //urlparams="samplingDayEnd=today"+"&"+"includeSamplerSamples=true";
        //urlparams=urlparams+"&"+"sampleGroups=area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest"
        this.selectedObject=this.selectedQuery; 
        this.getDataMiningQueryOutput(data, urlparams)
    }
    loadQuery(){
        this.selectedQuery=this.myQueries[0];
        console.log();
        this.selectedQuery.definition=this.selectedQuery.definition_json;
        this.selectedObject=this.selectedQuery;
        this.selectedObject.definition=JSON.stringify(this.selectedQuery);
        this.otherCharts=[];
        this.otherCharts=this.selectedQuery.otherCharts;
        this.runQuery();
        return;
    }
    querySelected(e) {
        if (!e.detail){return;}
        this.selectedQuery=this.queries[e.detail.index];
        this.selectedObject=this.selectedQuery;        
        this.selectedObject.definition=JSON.stringify(this.selectedQuery);
        return;
    }
    refreshWindow() {
        this.fillQueriesList();
    }
    ready() {
        super.ready();
        this.fillQueriesList();
        this.getAllSavedQueries('', '');
    }
    fillQueriesList() {
        //console.log('fillQueriesList', 'this.queries', this.queries);
        if (this.queries==null){return;}        
        var i;
        this.set('queriesList.0.items', []);
        for (i = 0; i < this.queries.length; i++) { 
            this.push('queriesList.0.items', {
                    keyName: this.queries[i].name, 
                    keyValue_en: this.queries[i].label_en,  
                    keyValue_es: this.queries[i].label_es}
                    );     
        }  
    }
    getChartDefinition() {
        // console.log('getChartDefinition');
        var posic=false;
        this.kpiCharts=[];
        var groupsArgData='';
        var groupsArgDataArr=[];
        if (this.selectedQuery==undefined || this.selectedQuery.arguments==undefined){return;}
        posic=this.valuePosicInArray(this.selectedQuery.arguments, "sampleGroups");
        if (posic > -1){
            groupsArgData=this.selectedQuery.arguments[posic].value;
        }else{
            posic=this.valuePosicInArray(this.selectedQuery.arguments, "investigationGroups");
            if (posic > -1){
                groupsArgData=this.selectedQuery.arguments[posic].value;
            }
        }        
        if (posic == -1){
            this.kpiCharts=[];
            return;
        }
        groupsArgDataArr=this.stringToArray(groupsArgData, "\|", "*");
        
        for (var i=0; i < groupsArgDataArr.length; i++) {
            var curChartName=groupsArgDataArr[i][1];
            var chartType=this.defaultChartType;
            if (groupsArgDataArr[i].length>2){
                if (groupsArgDataArr[i][2].length>0){chartType=groupsArgDataArr[i][2];}                
            }
            var chartTitleEn=curChartName;
            if (groupsArgDataArr[i].length>3){
                if (groupsArgDataArr[i][3].length>0){chartTitleEn=groupsArgDataArr[i][3];}                
            }            
            var chartTitleEs=curChartName;
            if (groupsArgDataArr[i].length>4){
                if (groupsArgDataArr[i][4].length>0){chartTitleEs=groupsArgDataArr[i][4];}
            }            
            //alert(curChartName);
            var chartOutputData=this.dataminingQueryOutput[curChartName];
            //alert(chartOutputData.length);
            var chartKPIItem={
                display_chart: true,
                chart_type:chartType, // 'line',
                chart_name:curChartName,
                chart_title:{label_en:chartTitleEn, label_es:chartTitleEs},
                counter_field_name:'count',
                counterLimits:{
                //     min_allowed: 0,
                // //   min_allowed_included:3,
                //     max_allowed:200,
                // //   max_allowed_included:100,
                // //   value:0,
                },
                grouper_field_name:groupsArgDataArr[i][0],
                grouper_exclude_items:[],
                label_item:{label_en:groupsArgDataArr[i][0], label_es:groupsArgDataArr[i][0]},
                label_value:{label_en:'#', label_es:'#'},
            };                
            this.kpiCharts[i]=chartKPIItem;
        }
        return;// this.kpiCharts;
        var elem=this.shadowRoot.getElementById(this.field.name);
        if (elem){elem.resetValue();}        
        if (this.valuePosicInArray(this.selectedQuery.arguments, "") > -1){
            found=true;
            alert('wooooeeee');
            return;
        }        
        //if (this.selectedQuery.sampleGroup==undefined || this.selectedQuery.investigationGroup==undefined)

    }     
}
customElements.define('proc-deploy-datamining', procDeployDatamining);