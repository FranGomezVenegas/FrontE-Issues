import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../store.js';
import '@polymer/paper-dialog/paper-dialog';
import '../../elements/internalComponents/Dialogs/DialogEsign/dialog-esign.js';
import '../../elements/internalComponents/Dialogs/DialogConfirmUser/dialog-confirmuser';
import {ApiIncidents} from '../apis/api-incidents';
import {AuthenticationApi} from '../apis/api-authentication';
import '../../elements/internalComponents/Dialogs/DialogSimple/simple-modal-dialog';

import {openEsignDialog} from '../../elements/platformComponents/Redux/actions/esign-actions.js';
import {openConfirmUserDialog} from '../../elements/platformComponents/Redux/actions/confirmuser-actions.js';

class FrontendIncidentsElements extends ApiIncidents(AuthenticationApi(connect(store)(PolymerElement))) {
    static get properties() {
        return {            
            callBackFunctionIncidentElem: Object,
            backEndData: Object,
            actionName: String,
            buttonName: String,
            givenSampleAnalysisToDisplay: {type: String},//, value: sampleResults_sampleAnalysisListToDisplay},
            givenSampleAnalysisEnterResultToDisplay:String,
            cocUsersListFieldToDisplay: String,
            cocSampleHistoryFieldToDisplay: String,            
            currTabConfirmUserRequired: Boolean, 
            currTabEsignRequired: Boolean,
            confirmIncidentFormFieldsForId:{type: Array, notify: true, bubble: true, value: [
                {
                    "name": "incident_id",
                    "label_en": "Incident Id", "label_es": "Id de Incidencia",
                    "type": "text",
                    "password": "false",
                    "read_only": false,
                    "value": ''
                },
                {
                    "name": "Comment",
                    "label_en": "Add Comment", "label_es": "Añade comentario",
                    "type": "text-area",
                    "password": "false",
                    "read_only": false,
                    "value": ''
                }

            ]},
            confirmIncidentFormFieldsForNote:{type: Array, notify: true, bubble: true, value: [
                {
                    "name": "Comment",
                    "label_en": "Add Comment", "label_es": "Añade comentario",
                    "type": "text-area",
                    "password": "false",
                    "read_only": false,
                    "value": ''
                }
            ]},
            
            selectedIncident:{type: Object},        
            incidentDialogFormFields:{type: Array},//, value:sampleIncubation_incubBatch_newBatchFormFields},    
            //validationNotCorrectMessage: {type: Object, value: appConfirmUserOrEsign_notCorrectMessage}, Borrado por refactoring
            selectedLanguage:{ type: String},
        }
    }
    static get template() {
        return html`
        <style>
        paper-dialog{
            background:transparent;
            top:100px; height:0px; width:0px;
        }
        </style>
        <esign-dialog></esign-dialog>
        <confirmuser-dialog></confirmuser-dialog>

        <paper-dialog id="incidentActionBrowser">        
            <simple-modal-dialog style="width:410px;" dialog form-fields="{{incidentDialogFormFields}}" 
            display-cancel-button display-confirm-button
            on-dialog-button-clicked="dialogClosedincidentActionBrowser" action-name="{{actionName}}"> </simple-modal-dialog>
        </paper-dialog>   
        `;
    }
    
    stateChanged(state) {        
        this.selectedLanguage = state.app.user.appLanguage;   
        if (state.emDemoA!=null){            
            this.forResultsSamples= state.emDemoA.forResultsSamples;
            this.analysisList=state.emDemoA.analysisList;            
            this.givenSampleAnalysisList=state.emDemoA.givenSampleAnalysisList;
            this.givenSampleAnalysisResultEntryList=state.emDemoA.givenSampleAnalysisResultEntryList;
            this.cocSampleHistory=state.emDemoA.cocSampleHistory;
            this.cocUsersList=state.emDemoA.cocUsersList;  
            this.activeIncubatorsList=state.emDemoA.allIncubators;
            if (state.emDemoA.selectedIncubator!=null){
                this.incubatorName=state.emDemoA.selectedIncubator.name;}
            if (state.emDemoA.selectedIncident!=null){
                this.selectedIncident=state.emDemoA.selectedIncident;}                      
        }     
        this.currTabEsignRequired=state.tabs.currTabEsignRequired;
        this.currTabConfirmUserRequired=state.tabs.currTabConfirmUserRequired;        
    }

    actionTrigger(buttonName, backEndData, buttonDefinition){
        this.buttonName=buttonName;
        this.backEndData=backEndData;        
    //console.log('frontend-incidents-elements >> actionTrigger >> backEndData', backEndData, 'this.backEndData', this.backEndData, 'buttonDefinition', buttonDefinition);  
        //if (this.currTabEsignRequired){
        if (buttonDefinition && buttonDefinition.esign_required){    
            store.dispatch(openEsignDialog(
            this.actionTriggerNext.bind(this),
            this.actionTriggerAbort.bind(this)
            ));  
            return;       
        }
        //if (this.currTabConfirmUserRequired){
        if (buttonDefinition && buttonDefinition.confirmuser_required){              
            store.dispatch(openConfirmUserDialog(
            this.actionTriggerNext.bind(this),
            this.actionTriggerAbort.bind(this)
            )); 
            return;
        }
        this.actionTriggerNext();
    }    
    actionTriggerAbort(){
        this.loading=false;  
    }
    actionTriggerNext(){
        var buttonName = this.buttonName;
        var backEndData = this.backEndData;        
        var datas = [];
        if (this.backEndData.selectedObject!=null){
            datas.id=this.backEndData.id;
            datas.selectedObject=this.backEndData;
        }
        var actionName= buttonName.toUpperCase();
        this.actionName=actionName;
        datas.actionName=buttonName.toUpperCase();
//        console.log('frontend-incidents-elements >> actionTriggerNext >> backEndData', backEndData, 'this.backEndData', this.backEndData, 'buttonName', buttonName);                    
        switch (buttonName.toUpperCase()) {
        case 'CORRECTIVE_ACTION_COMPLETE':            
            this.backEndData=backEndData;
            this.programActionTriggerAPI(this.procInstanceName, buttonName, datas, datas.tabInfo, datas.callBackFunction);
            break;  
        case 'NEW_INCIDENT':
            var datas = [];
            datas.paramUrl='';
            datas.paramsUrl="actionName="+actionName;
            datas.paramsUrl=datas.paramsUrl+"&incidentTitle="+backEndData.incidentTitle;
            datas.paramsUrl=datas.paramsUrl+"&incidentDetail="+backEndData.incidentDetail;
            this.incidentsEndPoint(datas);                        
            return;
        case 'CONFIRM_INCIDENT':
        case 'ADD_NOTE_INCIDENT':
        case 'CLOSE_INCIDENT':
//            console.log(buttonName.toUpperCase()+' clicked');
            this.incidentDialogFormFields=this.confirmIncidentFormFieldsForNote;
            import('../../elements/internalComponents/Dialogs/DialogSimple/simple-modal-dialog');
            this.$.incidentActionBrowser.open();                    
            break;
        case 'REOPEN_INCIDENT':            
//            console.log(buttonName.toUpperCase()+' clicked');
            this.incidentDialogFormFields=this.confirmIncidentFormFieldsForId;
            import('../../elements/internalComponents/Dialogs/DialogSimple/simple-modal-dialog');
            this.$.incidentActionBrowser.open();                    
            break;
        default:
            console.log('Action '+buttonName.toUpperCase()+" not recognized in frontend-incidents-elements >> actionTriggerNext");
            break;
        }
        return;            
    }    
    dialogClosedincidentActionBrowser(e){
        console.log("dialogClosedincidentActionBrowser triggered", e.detail, e.detail.value);
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas.paramUrl='';
            datas.paramsUrl="actionName="+e.target.actionName;
            if (e.target.actionName.toUpperCase()=='REOPEN_INCIDENT'){
                datas.paramsUrl=datas.paramsUrl+"&incidentId="+this.incidentDialogFormFields[0].value;
                datas.paramsUrl=datas.paramsUrl+"&note="+this.incidentDialogFormFields[1].value; 
            }else{
                datas.paramsUrl=datas.paramsUrl+"&incidentId="+this.selectedIncident.id;
                datas.paramsUrl=datas.paramsUrl+"&note="+this.incidentDialogFormFields[0].value; 
            }
//console.log('dialogClosedincidentActionBrowser', 'before binding functions');  
            if (this.callBackRefreshWindow!=undefined){
                datas.callBackFunction=this.callBackRefreshWindow.bind(this);}
            if (this.callBackFunctionIncidentElem!=undefined){  
                            
                datas.callBackFunction=this.callBackFunctionIncidentElem.bind(this);}            
            this.incidentsEndPoint(datas);      
        }
        this.$.incidentActionBrowser.close();  
        return;
    }  
}
customElements.define('frontend-incidents-elements', FrontendIncidentsElements);