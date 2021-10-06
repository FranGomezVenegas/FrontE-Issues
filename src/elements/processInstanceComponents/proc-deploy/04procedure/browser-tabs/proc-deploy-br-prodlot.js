import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FrontendEndpointsEnvMonitBrowser} from '../../01moduleFunctionality/endpoints-frontend-env-monit-browser';

import {tableFieldLabel} from '../../03config/tablefield_labels';
import '../../01moduleFunctionality/proc-deploy-webcomponent-env-monit';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import '../../03config/Browser/proc-deploy-browser-prodlot-settings';
import {windowContent, browserProdLotFields} from '../../03config/Browser/proc-deploy-browser-prodlot-settings';

import '../../../../internalComponents/Charts/chart-controller';

class procDeployBrProdlot extends tableFieldLabel(FrontendEndpointsEnvMonitBrowser(FieldsMethods(connect(store)(PolymerElement)))) {
    stateChanged(state) {        
        this.selectedLanguage=state.app.user.appLanguage;
        if (state.procDeploy!=null){
            if (state.procDeploy.browserSelectedProdLot){
                this.selProdLot=state.procDeploy.browserSelectedProdLot;
                //console.log('this.selProdLot', this.selProdLot);
            }            
        }        
    }        
    static get properties() {
        return {
            windowContent:{type: Array, notify: true, value: windowContent},
            browserProdLotFields:{type: Object, notify: true, value: browserProdLotFields},
            displayChart: Boolean,
            selectedLanguage: String,
            selProdLot:{type: Object, notify:true},
            selCharts:{type: Array},
            selProdLotLastNtempReadings:{type: Array},
        }
    }
    static get template() {
        return html`
        <style include="proc-deploy-browser-prodlot-style"></style> 
        <proc-deploy-webcomponent-env-monit id="myElements"></proc-deploy-webcomponent-env-monit> 
        <div class="mainDiv"> <!--This is the Div 1 in the picture-->        
            <div class="filter" class="buttonGroup">
                <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
                    <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>     
                <template is="dom-repeat" items="{{windowContent.buttons}}" as="currentfield">       
                    <field-controller on-keydown="keyPressed" on-field-button-clicked="prodLotFieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>     
            </div>       
            <div class="detailMain"> 
                <div id="prodlot" class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, '*production_lot_info_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="[[selProdLot.prodLotFieldsToDisplay]]">  
                        <p><b>{{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, item.field_name, selectedLanguage)}}:</b> {{item.field_value}}<p></p>
                    </template>
                </div>            
                <div id="sampleCharts" class="detailDataSection">                 
                    <template is="dom-repeat" items="[[windowContent.charts]]" as="curchart">                                    
                        <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{selProdLot}}"></chart-controller>
                    </template>
                </div>  
                <p><h2><b>[[selProdLot.sample.length]] {{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, '*sample_info_title', selectedLanguage)}}</h2></p>
                <template is="dom-repeat" items="[[selProdLot.sample]]" as="smp">  
                    <template is="dom-if" if="{{smp.sample_id}}" >
                        <div id="sampledata" class="detailDataSection"> 
                        {{smp.sample_id}}
                        <template is="dom-repeat" items="[[selProdLot.sampleFieldsToDisplay]]" as="smpfld">  
                            <p><b>{{getTableFieldLabel(browserProdLotFields.schemaName, browserProdLotFields.tableName, smpfld.field_name, selectedLanguage)}}:</b> {{getFieldValueFromRecord(smp, smpfld.field_name)}}<p></p>                    
                        </template>
                        </div>            
                    </template>
                </template>
            </div> 
        </div>
        `;
    }
    keyPressed(e){
        if(e.code.includes("Enter")) {
          this.RunReport();
          return;
        }
    }    
    RunReport(){
        var data=[];
        data.prodLotName=this.windowContent.fields[0].value;
        //if (this.windowContent.fields[1].value.length>0){data.startDate=this.windowContent.fields[1].value;}
        //if (this.windowContent.fields[2].value.length>0){data.endDate=this.windowContent.fields[2].value;}
        if (this.browserProdLotFields.prodLotFieldToRetrieve){data.prodLotFieldToRetrieve=this.browserProdLotFields.prodLotFieldToRetrieve;}
        if (this.browserProdLotFields.prodLotFieldsToDisplay){data.prodLotFieldsToDisplay =this.browserProdLotFields.prodLotFieldsToDisplay;}
        if (this.browserProdLotFields.sampleFieldToRetrieve){data.sampleFieldToRetrieve =this.browserProdLotFields.sampleFieldToRetrieve;}
        if (this.browserProdLotFields.sampleFieldsToDisplay){data.sampleFieldsToDisplay =this.browserProdLotFields.sampleFieldsToDisplay;}
        if (this.browserProdLotFields.sampleWhereFieldsName){data.sampleWhereFieldsName =this.browserProdLotFields.sampleWhereFieldsName;}
        if (this.browserProdLotFields.sampleWhereFieldsValue){data.sampleWhereFieldsValue =this.browserProdLotFields.sampleWhereFieldsValue;}
        if (this.browserProdLotFields.sampleGroups){data.sampleGroups =this.browserProdLotFields.sampleGroups;}
        this.getBrowserSelectedProdLotData(data);                        
    }
}
customElements.define('proc-deploy-br-prodlot', procDeployBrProdlot);