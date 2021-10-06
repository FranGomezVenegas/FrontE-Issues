import {store} from './../../store';
import {backendUrl, appAuthenticateApiUrl} from '../../config/platform/logic/api-config'
import { addNotification  } from '../../elements/platformComponents/Redux/actions/notifications_actions';
import {diagnosticToNotification} from '../platform-functions/notification-obj';
import {updateFinalToken} from '../../elements/platformComponents/Redux/actions/app_actions';
import {ToastMethods} from '../../platform-mixins/functions/toast-methods';
import {ApiSettings} from './api-settings';
import {tokenMixin} from '../../platform-mixins/store/token-mixin';
import {dbName} from '../../config/platform/logic/platform-config';

export const ApiPlatform = (superClass) => class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {  
    appActionTriggerAPI(procInstanceName, finalToken, actionName, selectedRow, tabInfo, callBackFunction2) {
                //console.log('invoked ApiPlatform >> appActionTriggerAPI');
                this.appActionControllerAPI(procInstanceName, finalToken, actionName, selectedRow, tabInfo, callBackFunction2);
    }
    appActionControllerAPI(procInstanceName, finalToken, actionName, selectedRow, tabInfo, callBackFunction2 ) {
        this.internalCallbackFunction = callBackFunction2; 
        //console.log('selectedRow', selectedRow);       
        actionName=actionName.toUpperCase();
        var paramsUrl='';   
        var endpoints_for_apiPlatform = this.endpoints_for_apiPlatform();
        switch (actionName) {       
        case endpoints_for_apiPlatform.userChangePassword.action_name: //'USER_CHANGE_PSWD':   
            if (!selectedRow.newPassword || selectedRow.newPassword.length==0){
                this.toastErrorMessage(endpoints_for_apiPlatform.userChangePassword.mandatory_field_message);
            }
            paramsUrl=paramsUrl+"&newPassword="+selectedRow.newPassword;     
            paramsUrl=paramsUrl+"&userToCheck="+selectedRow.userToCheck;     
            paramsUrl=paramsUrl+"&passwordToCheck="+selectedRow.passwordToCheck;     
            paramsUrl=paramsUrl+"&dbName="+dbName;   
            break;    
        case endpoints_for_apiPlatform.userChangeEsign.action_name: //'USER_CHANGE_ESIGN':            
            if (!selectedRow.newEsign || selectedRow.newEsign.length==0){
                this.toastErrorMessage(endpoints_for_apiPlatform.userChangeEsign.mandatory_field_message);
            }
            paramsUrl=paramsUrl+"&newEsign="+selectedRow.newEsign;     
            paramsUrl=paramsUrl+"&userToCheck="+selectedRow.userToCheck;     
            paramsUrl=paramsUrl+"&passwordToCheck="+selectedRow.passwordToCheck; 
            paramsUrl=paramsUrl+"&dbName="+dbName;   
            break;    
        case 'SET_DEFAULT_TABS_ON_LOGIN':            
            paramsUrl=paramsUrl+"&tabsString="+selectedRow.tabsString;     
            paramsUrl=paramsUrl+"&dbName="+dbName;   
            break;                            
        default:       
            var errorMsg={
                'message_en':'Action '+actionName+' not declared on api-platform >> appActionControllerAPI.',
                'message_en':'Acción '+actionName+' no declarado en api-env-monit >> appActionControllerAPI.',
            };            
            this.toastErrorMessage(errorMsg);
            return;            
        }                    
        if (selectedRow.eSignToVerify){paramsUrl=paramsUrl+"&eSignToCheck="+selectedRow.eSignToVerify;}
        paramsUrl="actionName="+actionName   +"&finalToken="+finalToken
            +"&procInstanceName="+procInstanceName + "&dbName="+dbName
            +paramsUrl;
        var datas = [];
        datas.procInstanceName=procInstanceName; datas.dbName=dbName; datas.actionName=actionName; datas.paramsUrl=paramsUrl;
        if (this.callBackFunction2!=null){
            datas.callBackFunction=this.callBackFunction2.bind(this);}
        //console.log('api-env-monit >> itemSelected >> EnvMonitAPI', paramsUrl, datas);            
        this.appBackEndCallAPI(datas);    
        //if (callBackFunction2){callBackFunction2();}
    }
appBackEndCallAPI(data) {
    var endpoints_returningError=this.endpoints_returningError();
    var apiUrl=backendUrl+appAuthenticateApiUrl+"?"+data.paramsUrl; 
    //console.log('process-us>api-sample>sampleBackEndCallAPI', data.procInstanceName, data.actionName, apiUrl, data.paramsUrl);    
    axios.get(apiUrl)        
    .then( response => {
        var notifObj=diagnosticToNotification(response.data, data);
        //console.log('process-us>api-sample>sampleBackEndCallAPI.addNotification', 'notifObj', notifObj);
        store.dispatch(addNotification(notifObj));
        var state=store.getState();
        var language=state.app.user.appLanguage; 
        var message=''; 
        switch(language){
            case 'es': message=response.data.message_es; break;            
            default: message=response.data.message_en; break;
        }            
        if (response.data.diagnostic=="LABPLANET_TRUE"){
            this.toastSuccessMessage(response.data);     
        }else{
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);               
        }
        if(response.status == 200) {
            if (data.actionName.toUpperCase()=='USER_CHANGE_PSWD' || data.actionName.toUpperCase()=='USER_CHANGE_ESIGN'){
                this.finalToken=response.data.finalToken;
                store.dispatch(updateFinalToken(this.finalToken));
            }
            if (this.callBackFunctionEnvMonitElem){this.callBackFunctionEnvMonitElem();} 
            if (data.callBackFunction){data.callBackFunction();}
            return;
        }
        if (data.callBackFunctionError){data.callBackFunctionError();}      
    })    
    .catch(error => {
        console.log(error.message);
        if (data.callBackFunctionError){data.callBackFunctionError();}
        // store.dispatch(addNotification({
        //     notificationName: data.procInstanceName+'.'+data.actionName,
        //     label_en: error.message, 
        //     label_es: error.message, 
        //     diagnoses: 'ERROR'
        // }));     
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);           
    })
    .then(function () {
    });
    }    
}