import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import {appNewIncident_formFields, incidents_userOpenIncidentsFieldToDisplay, incidents_userOpenIncidentsButtons} from './incident-management-settings';
import './incident-management-style';
import '../../../internalComponents/form-fields/field-controller';
// import '../../../internalComponents/grid-components/vaadingrid-singleselect.js'; // Necesario pero no cargado aún
import {FrontendIncidents} from '../../../../platform-mixins/platform-functions/frontend-incidents'; 
import '../../../../platform-mixins/platform-functions/frontend-incidents-elements.js';
import {ApiIncidents} from '../../../../platform-mixins/apis/api-incidents';
import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import '../../../internalComponents/Dialogs/DialogSimple/simple-modal-dialog';
import '../../../internalComponents/Grids/vaadingrid-lit-singleselect';

/**
 * `incident-management` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class IncidentManagement extends TabsMethods(ApiIncidents(FrontendIncidents(connect(store)(PolymerElement)))) {
    static get properties() {
        return {
            formFields: {type: Array, notify: true, bubble: true, value: appNewIncident_formFields},
            appOpenTabs: {type: String, observer:'onFinalTokenFilled'},
            userOpenIncidents: {type: String},
            selectedUserIncidentDetail: {type: Array},
            thisTabName: {type:String, value:'incident-management'},
            userOpenIncidentsieldToDisplay: {type: Array,value: incidents_userOpenIncidentsFieldToDisplay},
            userOpenIncidentsuttons: {type: Array, value: incidents_userOpenIncidentsButtons}, 
            selectedObject: {type: Object},
        }
    }
    stateChanged(state) {
        this.userOpenIncidents= state.incidents.userOpenIncidents
        this.selectedUserIncidentDetail=state.incidents.selectedUserIncidentDetail;
        if (state.tabs.tabs!=null){
            this.appOpenTabs=state.tabs.tabs;
        }
    }    
    static get template() {
        return html`
        <style>
        paper-dialog.noshadowbox {
            box-shadow:none;
        }
        <style include="incident-management-style"></style>
            <paper-dialog  always-on-top no-cancel-on-outside-click class="roundbox noshadowbox" id="newIncidentDialog" >        
                    <simple-modal-dialog id="newIncidentDialog2" action-name="" display-close-button form-fields="{{formFields}}" 
                    on-dialog-button-clicked="fieldButtonClickedForIncidents" on-field-button-clicked="fieldButtonClickedForIncidents"> </simple-modal-dialog>
            </paper-dialog>
            <div class="myIncidentsTable">
                <frontend-incidents-elements id="myElements" call-back-function-incident-elem="{{onFinalTokenFilled}}" selected-incident="{{selectedObject}}"></frontend-incidents-elements>
                <vaadin-button on-click="callBackRefreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
                <div name="buttonGroup" class="buttonGroup">
                    <template is="dom-repeat" items="{{userOpenIncidentsuttons}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="fieldButtonClickedForIncidents" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </div>    
                <vaadingrid-lit-singleselect headerfields="{{userOpenIncidentsieldToDisplay}}" rowcontainer="{{userOpenIncidents}}" on-selected-object-changed="incidentSelected"
                ></vaadingrid-lit-singleselect>
            </div>
            <div id="selectedIncident" id="selectedIncident">
                <!-- <p>{{selectedUserIncidentDetail.0.incident_id}}</p>                -->
                <template is="dom-repeat" items="{{selectedUserIncidentDetail}}" as="currentfield"> 
                    <div class="incidentEventCard"> 
                       <p> <b>{{currentfield.action_name}} - {{currentfield.date}} </b></p>
                       {{currentfield.note}} 
                    </div>
                </template>
            </div> 
        `;
    }
    keyPressed(){}
    incidentSelected(e) {
        this.selectedObject=e.detail;
        //console.log('incidentSelected', 'this.selectedObject', this.selectedObject);
        this.getSelectedUserIncidentDetail({incidentId: this.selectedObject.id});
        return;
    }    
    callBackRefreshWindow(){
        this.onFinalTokenFilled();
    }
    
    onFinalTokenFilled(){
        //console.log('onFinalTokenFilled', this.thisTabName);
        if (!this.thisTabName){return;}
        //if (this.isThisTabOpen(this.appOpenTabs, this.thisTabName)){
        if (this.isThisTabOpen(this.thisTabName)){
            this.getUserOpenIncidents();               
        }
        // var curTab={
        //     lp_frontend_page_name: 'incidents/incident-management.js',        
        //     tabName: 'incident-management',
        //     tabLabel_en: 'New Issue',
        //     tabLabel_es: 'Nueva Incidencia',
        //     procedure:'incident',
        //     tabEsignRequired: false, tabConfirmUserRequired: false
        //   }
        //store.dispatch(setCurrentTab(curTab)); 
         if (this.selectedObject){
        //     //console.log('onFinalTokenFilled', 'item', this.selectedObject, 'object'this.selectedObject);
        //     //this.selectedObject=this.selectedObject;
        //     //this.$.mygridid.selectedObjects=[];
        //     //this.$.mygridid.itemSelected=this.selectedObject;
        //     var mye={detail:{value:this.selectedObject}};            
        //     this.$.mygridid.changeItemSelected(this.selectedObject.value.id);
            
        //     //this.$.mygridid.changeItemSelected(this.selectedObject);
            
            
        //     //this.$.mygridid.selectedObject=this.selectedObject;
        //     //this.$.mygridid.selectedObjects = [this.selectedObject];
        //    this.getSelectedUserIncidentDetail({finalToken: this.finalToken, incidentId: this.selectedObject.id});
        this.incidentSelected();
        }
    }  
}
customElements.define('incident-management', IncidentManagement);