import {backendUrl, frontEndVideoTutorialsUrl} from '../../config/platform/logic/api-config';
import {store} from '../../store';
import { addNotification  } from '../../elements/platformComponents/Redux/actions/notifications_actions';
import{allActiveVideoTutorials} from '../../elements/platformComponents/Redux/actions/videotutorials_actions';
import {tokenMixin} from '../store/token-mixin';
import {ToastMethods} from '../functions/toast-methods';
import {ApiSettings} from '../apis/api-settings';
import {dbName} from '../../config/platform/logic/platform-config';
/**
 * @mixinFunction
 * @polymer
 */
export const FrontendVideoTutorials = (superClass) => class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    
// fieldButtonClickedForIncidents(e) {
//         //console.log('optionPressed', e.detail.buttonName, 'selectedObject', this.selectedObject);                
//         var datas = [];
//         var paramsUrl="";
//         if (e.detail.buttonName==undefined){return;}
//         var actionName= e.detail.buttonName.toUpperCase();  
//         //var procInstanceName=e.target.value.procedure;
//         switch (actionName) {   
//         case 'OPEN_NEW_INCIDENT_DIALOG':     
//             var dialogName='newIncidentDialog';
//             var elem=this.shadowRoot.getElementById(dialogName);
//             if (elem){elem.open();}
//             else{
//             console.log('field-controller.resetValue', 'no field with name ', dialogName);
//             }            
//         case 'NEW_INCIDENT':
//             //console.log('NEW_INCIDENT');
//             paramsUrl=paramsUrl+"&actionName="+e.detail.buttonName.toUpperCase();
//             paramsUrl=paramsUrl+"&incidentTitle="+this.formFields[0].value;
//             paramsUrl=paramsUrl+"&incidentDetail="+this.formFields[1].value;
//             var storeCurrentState=JSON.stringify(store.getState());
//             datas.storeCurrentState=storeCurrentState;
//             datas.incidentTitle=this.formFields[0].value;
//             datas.incidentDetail=this.formFields[1].value;
//             this.$.myElements.actionTrigger(e.detail.buttonName, datas, e.detail.buttonDefinition);   
//             //paramsUrl=paramsUrl+"&sessionInfo="+storeCurrentState;
//             return;
//         case 'CONFIRM_INCIDENT':
//         case 'ADD_NOTE_INCIDENT':
//         case 'CLOSE_INCIDENT':
//         case 'REOPEN_INCIDENT':      
//             if (this.selectedObject==null){
//                 var objectNotSelected=this.objectNotSelected();                
//                 this.toastErrorMessage(objectNotSelected);
//                 //this.dispatchEvent(new CustomEvent('toast-error', {bubbles: true, composed: true,
//                 //    detail: 'Please select one incident first'}));    
//                 return;
//             }          
//             this.$.myElements.actionTrigger(e.detail.buttonName, this.selectedObject, e.detail.buttonDefinition);                      
//             return;            
//         default:
//             var msgObj=this.actionNameNotRecognized(actionName, 'frontend-incidents');
//             this.toastErrorMessage(msgObj);
//             // var msgErr='action '+e.detail.buttonName.toUpperCase()+' not declared in frontend-incidents';
//             // console.log(msgErr);
//             // this.dispatchEvent(new CustomEvent('toast-error', {bubbles: true, composed: true,
//             //     detail: msgErr}));             
//             return;
//         }
// }    

getActiveVideoTutorials(data) {
    var finalToken=this.getFinalToken();
    if (!finalToken){finalToken=data.finalToken;}
    if (!finalToken){ return;}
    var apiUrl=backendUrl+frontEndVideoTutorialsUrl+"?"+"actionName=ALL_ACTIVE_VIDEO_TUTORIALS";
    //console.log('getActiveVideoTutorials', apiUrl, data.finalToken);
    axios.get(apiUrl, {        
        params: {            
            'finalToken': finalToken,'dbName': dbName}
    })
    .then( response => {
        if(response.status == 200) {
            //console.log(response.data);
            store.dispatch(allActiveVideoTutorials(response.data));
            if (data && data.callBackFunction){data.callBackFunction();}
            return;
        }
        if (data && data.callBackFunctionError){data.callBackFunctionError();}
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        composed: true,
            detail: 'Error on '+apiUrl+' although the connectivity with the API ended with success! Status: '+response.status
          }));         
        })
    .catch(error => {
        if (data && data.callBackFunctionError){data.callBackFunctionError();}
        //console.log('FrontEnd-incidents.js >> getActiveVideoTutorials', error.message);
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        composed: true,
            detail: 'Error on authentication'+error.message
          }));           
        })
    .then(function () {
        });
}

getSelectedUserIncidentDetail(data) {
    var finalToken=this.getFinalToken();
    if (!finalToken){finalToken=data.finalToken;}
    if (!finalToken){ return;}
    //console.log('getSelectedUserIncidentDetail', apiUrl, data);
    var apiUrl=backendUrl+FrontendVideoTutorials+"?"+"actionName=INCIDENT_DETAIL_FOR_GIVEN_INCIDENT";
    if (!data.incidentId){
        var noIncident=[];
        store.dispatch(selectedUserIncidentDetail(noIncident));
        return;
    }
    if (!finalToken){ return;}
    
    axios.get(apiUrl, {        
        params: {            
            'finalToken': finalToken, 'incidentId': data.incidentId}
    })
    .then( response => {
        if(response.status == 200) {
            //console.log(response.data);
            store.dispatch(selectedUserIncidentDetail(response.data));
            if (data && data.callBackFunction){data.callBackFunction();}
            return;
        }
        if (data && data.callBackFunctionError){data.callBackFunctionError();}
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        composed: true,
            detail: 'Error on '+apiUrl+' although the connectivity with the API ended with success! Status: '+response.status
          }));         
        })
    .catch(error => {
        if (data && data.callBackFunctionError){data.callBackFunctionError();}
        //console.log('FrontEnd-incidents.js >> getActiveVideoTutorials', error.message);
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        composed: true,
            detail: 'Error on authentication'+error.message
          }));           
        })
    .then(function () {
        });
}

}