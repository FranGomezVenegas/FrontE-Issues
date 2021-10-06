import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';

import '../../../internalComponents/grid-components/vaadingrid-singleselect.js';
import '../01moduleFunctionality/env-monit-elements-sample.js';
import './shared-styles.js';  
import {dbName} from '../../../../config/platform/logic/platform-config';
import {FrontendEnvMonitSample} from '../01moduleFunctionality/frontend-env-monit-sample.js';

import {schema_name
, sampleCustodian_sampleFieldToRetrieveCustodian, sampleCustodian_sampleFieldToDisplayCustodian, sampleCustodian_samplesWhereFieldsNameCustodian, sampleCustodian_samplesWhereFieldsValueCustodian, sampleCustodian_sampleFieldToSortCustodian, sampleCustodian_buttonsCustodian
, sampleCustodian_sampleFieldToRetrieveCandidate, sampleCustodian_sampleFieldToDisplayCandidate, sampleCustodian_samplesWhereFieldsNameCandidate, sampleCustodian_samplesWhereFieldsValueCandidate, sampleCustodian_sampleFieldToSortCandidate, sampleCustodian_buttonsCandidate
, sampleCustodian_cocSampleHistoryFieldToDisplay, sampleCustodian_cocSampleHistoryWhereFieldsName, sampleCustodian_cocSampleHistoryWhereFieldsValue, sampleCustodian_cocSampleHistoryFieldToSort, sampleCustodian_cocSampleHistoryButtons
 } from '../03config/config-process.js';
    
class emDemoASampleCustodian extends (FrontendEnvMonitSample(connect(store)(PolymerElement))) {
    static get properties() {
        return {
            finalToken: String,
            procInstanceName: {type: String, observer:'onFinalTokenFilled'},   
            dbName: {type: String, value: dbName},   
            currTabEsignRequired: Boolean,
            currTabConfirmUserRequired: Boolean,
            selectedSample: {type: Number},                   
            cocSampleHistoryFieldToDisplay: {type: Array,value: sampleCustodian_cocSampleHistoryFieldToDisplay},   
            cocSampleHistoryWhereFieldsName: {type: String, value:sampleCustodian_cocSampleHistoryWhereFieldsName},            
            cocSampleHistoryWhereFieldsValue: {type: String, value:sampleCustodian_cocSampleHistoryWhereFieldsValue},           
            buttonsCustodian: {type: Array, value: sampleCustodian_cocSampleHistoryButtons},
            sampleFieldToDisplayCustodian: {type: Array,value: sampleCustodian_sampleFieldToDisplayCustodian},   
            samplesWhereFieldsNameCustodian: {type: String, value:sampleCustodian_samplesWhereFieldsNameCustodian},            
            samplesWhereFieldsValueCustodian: {type: String, value:sampleCustodian_samplesWhereFieldsValueCustodian},           
            buttonsCustodian: {type: Array, value: sampleCustodian_buttonsCustodian},
            sampleFieldToDisplayCandidate: {type: Array,value: sampleCustodian_sampleFieldToDisplayCandidate},   
            samplesWhereFieldsNameCandidate: {type: String, value:sampleCustodian_samplesWhereFieldsNameCandidate},            
            samplesWhereFieldsValueCandidate: {type: String, value:sampleCustodian_samplesWhereFieldsValueCandidate},           
            buttonsCandidate: {type: Array, value: sampleCustodian_buttonsCandidate},      
            callBackRefreshWindow: Object,      
        }
    }
    refreshWindow() {
        this.onFinalTokenFilled();
        //console.log('refreshWindow');
        //this.$.mygridid.clearCache();
    }
    onFinalTokenFilled(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        //console.log('calling getSamplesForResultsCustodian');
        //if ( (!this.finalToken) || (!this.procInstanceName) ) {return;}
        this.getSamplesForResultsCustodian({
            finalToken:this.finalToken, procInstanceName:this.procInstanceName, dbName:this.dbName
            , actionName:'SAMPLES_INPROGRESS_LIST'
            , sampleFieldToRetrieve:sampleCustodian_sampleFieldToRetrieveCustodian//this.sampleFieldToRetrieve
            , samplesTabSortFields:sampleCustodian_sampleFieldToSortCustodian//this.samplesTabSortFields,
            , samplesWhereFieldsName: this.samplesWhereFieldsNameCustodian, samplesWhereFieldsValue: this.samplesWhereFieldsValueCustodian,
        }); 
        console.log('calling getSamplesForResultsCandidate');
        wait(2);
        this.getSamplesForResultsCandidate({
            finalToken:this.finalToken, procInstanceName:this.procInstanceName, dbName:this.dbName
            , actionName:'SAMPLES_INPROGRESS_LIST'
            , sampleFieldToRetrieve:sampleCustodian_sampleFieldToRetrieveCandidate//this.sampleFieldToRetrieve
            , samplesTabSortFields:sampleCustodian_sampleFieldToSortCandidate//this.samplesTabSortFields,
            , samplesWhereFieldsName: this.samplesWhereFieldsNameCandidate, samplesWhereFieldsValue: this.samplesWhereFieldsValueCandidate,
        });         
    }         
    stateChanged(state) {
        this.finalToken = state.app.user.finalToken;         
        if (state.emDemoA!=null){
            this.forResultsSamplesCustodian= state.emDemoA.forResultsSamplesCustodian;
            this.forResultsSamplesCandidate= state.emDemoA.forResultsSamplesCandidate;
        }          
        if (this.tabIndex!=0){
            //this.procInstanceName = state.tabs.tabs[this.tabIndex-1].procedure.procInstanceName;
            this.currTabEsignRequired = state.tabs.currTabEsignRequired;
            this.currTabConfirmUserRequired = state.tabs.currTabConfirmUserRequired;            
        } 
        this.procInstanceName=schema_name;           
    }     
    static get template() {
        return html`
            <style include="shared-styles">
            :host {
                display: block;
                padding: 10px;
            }
            .buttonGroup {
                /* display: flex */
            }
            vaadin-grid {
                width:95%;
            }
            </style>      
            <env-monit-elements-sample id="myElementsSample" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements-sample>  	
            <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
            <div style="display: flex">
                <div name="ButtonsCandidate" class="buttonGroup">
                    <template is="dom-repeat" items="{{buttonsCandidate}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </div>           
                <vaadingrid-singleselect id="custodiancandidate" style="width: 43%;" headerfields="{{sampleFieldToDisplayCandidate}}" rowcontainer="{{forResultsSamplesCandidate}}"            
                selected-object="{{selectedObject}}"></vaadingrid-singleselect>

                <div name="ButtonsCustodian" class="buttonGroup">
                    <template is="dom-repeat" items="{{buttonsCustodian}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </div>            
                <vaadingrid-singleselect id="custodian" style="width: 43%;" headerfields="{{sampleFieldToDisplayCustodian}}" rowcontainer="{{forResultsSamplesCustodian}}"            
                    selected-object="{{selectedObject}}"></vaadingrid-singleselect>
            </div>  
            `;
    } 
}
customElements.define('em-demo-a-sample-custodian', emDemoASampleCustodian);