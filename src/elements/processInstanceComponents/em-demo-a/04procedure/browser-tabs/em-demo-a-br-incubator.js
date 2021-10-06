import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FrontendEndpointsEnvMonitBrowser} from '../../01moduleFunctionality/endpoints-frontend-env-monit-browser';

import {tableFieldLabel} from '../../03config/tablefield_labels';
import '../../01moduleFunctionality/em-demo-a-webcomponent-env-monit';

import '../../03config/Browser/em-demo-a-browser-incubator-settings';
import {windowContent, browserIncubatorFields} from '../../03config/Browser/em-demo-a-browser-incubator-settings';
import {FunctionsEnvMonit} from '../../01moduleFunctionality/functions-env-monit';
class emDemoABrIncubator extends tableFieldLabel(FrontendEndpointsEnvMonitBrowser(FunctionsEnvMonit(connect(store)(PolymerElement)))) {
    stateChanged(state) {        
        this.selectedLanguage=state.app.user.appLanguage;
        if (state.emDemoA!=null){
            if (state.emDemoA.browserSelectedIncubator){
                this.selIncubator=state.emDemoA.browserSelectedIncubator;
                this.selIncubatorLastNtempReadings=[];
                if (this.selIncubator.lastTemperatureReadings!=null){
                    var i;
                    this.selIncubatorLastNtempReadings=[["Time", "Temperature"]];
                    if (!this.selIncubator.lastTemperatureReadings){
                        this.displayChart=false;
                        return;}
                    if (this.selIncubator.lastTemperatureReadings[0].error){
                        this.displayChart=false;
                        return;}
                    this.displayChart=true;
                    for (i = 0; i < this.selIncubator.lastTemperatureReadings.length; i++) {
                        this.selIncubatorLastNtempReadings.push([this.selIncubator.lastTemperatureReadings[i].created_on, 
                        this.selIncubator.lastTemperatureReadings[i].temperature]);
                    }
                }                
            }            
        }        
    }        
    static get properties() {
        return {
            windowContent:{type: Array, notify: true, value: windowContent},
            browserIncubatorFields:{type: Object, notify: true, value: browserIncubatorFields},
            displayChart: Boolean,
            selectedLanguage: String,
            selIncubator:{type: Object},
            selIncubatorLastNtempReadings:{type: Array},
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-browser-incubator-style"></style> 
        <em-demo-a-webcomponent-env-monit id="myelements"></em-demo-a-webcomponent-env-monit>
        <div class="mainDiv"> <!--This is the Div 1 in the picture-->        
            <div class="filter" class="buttonGroup">
                <template is="dom-repeat" items="{{windowContent.fields}}" as="currentfield">       
                <field-controller on-keydown="keyPressed" on-field-button-clicked="RunReport" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>     
                <template is="dom-repeat" items="{{windowContent.buttons}}" as="currentfield">       
                    <field-controller on-keydown="keyPressed" on-field-button-clicked="incubatorFieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                </template>     
    <!--                 <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" selected-object="{{selIncubator}}"
                        on-field-button-clicked="incubatorFieldButtonClicked" on-field-list-value-changed="onListChange"> 
                    </field-controller> -->
                </template>  
            </div>       
            <div class="detailMain"> 
                <div class="detailDataSection"> 
                    <p><h2><b>{{getTableFieldLabel(browserIncubatorFields.schemaName, browserIncubatorFields.tableName, '*incubator_info_title', selectedLanguage)}}</h2></p>
                    <template is="dom-repeat" items="[[selIncubator.incubatorFieldsToDisplay]]">  
                        <p><b>{{getTableFieldLabel(browserIncubatorFields.schemaName, browserIncubatorFields.tableName, item.field_name, selectedLanguage)}}:</b> {{item.field_value}}<p></p>
                    </template>
                </div>            
                <div class="detailDataSection">             
                    <template is="dom-if" if="{{!displayChart}}" >
                        <template is="dom-repeat" items="{{windowContent.temperatureReadingsNotFound}}" as="currentfield">       
                            <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                        </template>                               
                    </template>                   
                    <template is="dom-if" if="{{displayChart}}" >
                        <p><h2><b>{{getTableFieldLabel(browserIncubatorFields.schemaName, browserIncubatorFields.tableName, '*incubator_temp_reading_title', selectedLanguage)}}</h2></p>
                        <google-chart type="line" style="height: 500px; width: 750px;" data="{{selIncubatorLastNtempReadings}}"></google-chart>
                    </template>
                </div> 
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
        console.log('RunReport', 'data', data);            
        data.incubName=this.windowContent.fields[0].value;
        if (this.windowContent.fields[1].value.length>0){data.startDate=this.windowContent.fields[1].value;}
        if (this.windowContent.fields[2].value.length>0){data.endDate=this.windowContent.fields[2].value;}
        data.browserIncubatorFieldToRetrieve=this.browserIncubatorFields.fieldToRetrieve;
        data.browserIncubatorFieldsToDisplay =this.browserIncubatorFields.fieldsToDisplay;
        this.getBrowserSelectedIncubatorData(data);                        
    }
    
}
customElements.define('em-demo-a-br-incubator', emDemoABrIncubator);