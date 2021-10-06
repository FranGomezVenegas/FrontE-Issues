import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '@polymer/polymer/lib/elements/dom-if';
import {FrontendEndpointsEnvMonitBrowser} from '../../01moduleFunctionality/endpoints-frontend-env-monit-browser';
import {tableFieldLabel} from '../../03config/tablefield_labels';
import '../../01moduleFunctionality/em-demo-a-webcomponent-env-monit';
//import {schema_name, browserBatchFieldToRetrieve, browserBatchFieldsToDisplay, browserBatchNoContent } from '../../03config/config-process.js';

import '../../03config/Browser/em-demo-a-browser-batch-settings';
import {windowContent, browserBatchFields} from '../../03config/Browser/em-demo-a-browser-batch-settings';
class emDemoABrBatch extends tableFieldLabel(FrontendEndpointsEnvMonitBrowser(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage=state.app.user.appLanguage;
        if (state.emDemoA!=null){            
            if (state.emDemoA.browserSelectedBatch!=null){
                this.selBatch=state.emDemoA.browserSelectedBatch;
                if (this.selBatch.lastTemperatureReadings!=null){
                    var i;
                    this.selBatchTempReadings=[["Time", "Temperature"]];
                    if (!this.selBatch.lastTemperatureReadings){
                        this.displayChart=false;
                        return;}
                    if (this.selBatch.lastTemperatureReadings[0].error){
                        this.displayChart=false;
                        return;}
                    this.displayChart=true;
                    for (i = 0; i < this.selBatch.lastTemperatureReadings.length; i++) {
                        if (!this.selBatch.lastTemperatureReadings[i].error){
                            this.selBatchTempReadings.push([this.selBatch.lastTemperatureReadings[i].created_on, 
                            this.selBatch.lastTemperatureReadings[i].temperature]);
                        }
                    }
                    this.selectedObject=this.selBatch.batchFieldToRetrieve.name;
                }                
            }                      
        }        
    }        
    static get properties() {
        return {
            windowContent:{type: Array, notify: true, value: windowContent},
            browserBatchFields:{type: Object, notify: true, value: browserBatchFields},
            displayChart: Boolean,
            selectedLanguage: String,
            selBatchTempReadings:{type: Array},
            selBatch:{type: Object},
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-browser-batch-style"></style>
        <em-demo-a-webcomponent-env-monit id="myElements"></em-demo-a-webcomponent-env-monit> 
        <div class="mainDiv"> <!--This is the Div 1 in the picture-->        
        <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
          <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>       
            <div class="filter">            
                <div class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, '*batch_info_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="[[selBatch.batchFieldsToDisplay]]">  
                        <p><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, item.field_name, selectedLanguage)}}:</b> {{item.field_value}}<p></p>
                    </template>
                </div>
            </div>  
            <div class="detailMain"> 
                <div class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, '*batch_content_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="{{selBatch.SAMPLES_ARRAY}}" as="currentfield"> 
                        <div class="detailDataSection"> 
                            {{currentfield.sample_id}} Incubation {{currentfield.incubation_moment}}
                        </div>
                    </template>
                </div>
                <div class="detailDataSection">                   
                    <template is="dom-if" if="{{displayChart(selBatchTempReadings)}}" >
                        <p><h2><b>{{getTableFieldLabel(browserBatchFields.schemaName, browserBatchFields.tableName, '*incubator_temp_reading_title', selectedLanguage)}}</h2></p>
                        <google-chart type="line" style="height: 500px; width: 750px;" data="{{selBatchTempReadings}}"></google-chart>
                    </template>                                            
                    <template is="dom-if" if="{{!displayChart(selBatchTempReadings)}}" >
                        <template is="dom-repeat" items="{{windowContent.batchNoContent}}" as="currentfield">       
                            <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
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
        data.BatchName=this.windowContent.fields[0].value;
        data.browserBatchFieldToRetrieve=this.browserBatchFields.fieldToRetrieve;
        data.browserBatchFieldsToDisplay =this.browserBatchFields.fieldsToDisplay;
        this.getBrowserSelectedBatchData(data);                
        //console.log('RunReport', 'browserBatchFields', this.browserBatchFields);
    }
}
customElements.define('em-demo-a-br-batch', emDemoABrBatch);