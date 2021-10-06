import {backendUrl, ApiEnvMonitUrl, ApiEnvMonitProdLotUrl, ApiEnvMonitSampleUrl, ApiEnvMonitIncubationUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import { addNotification  } from '../../../platformComponents/Redux/actions/notifications_actions';
import {diagnosticToNotification} from '../../../../platform-mixins/platform-functions/notification-obj';
import {openEsignDialog} from '../../../platformComponents/Redux/actions/esign-actions';
import {openConfirmUserDialog} from '../../../platformComponents/Redux/actions/confirmuser-actions';
import {schema_name} from '../03config/config-process'; //incubationMode
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {userConfirmationMixin} from '../../../../platform-mixins/store/user-confirmation-mixin';

import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {GenomaModuleDefinition} from './0module-backendfunctionality-available';
import {dbName} from '../../../../config/platform/logic/platform-config';
/**
 * @mixinFunction
 * @polymer
 */
export const EndpointsActionsGenomaModule = (superClass) => class extends userConfirmationMixin(GenomaModuleDefinition(ApiSettings(ToastMethods(tokenMixin(superClass))))) {

    moduleActionTrigger(buttonDefinition, backEndData, moduleAreaName){
        console.log('moduleActionTrigger', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData, 'moduleAreaName', moduleAreaName);
        var moduleArea=this.getFunctionalArea(moduleAreaName)
        if (moduleArea==undefined){
            this.toastErrorMessage(this.moduleAreaNotRecognized(moduleAreaName));
            console.log('module area not recognized');
            return;
        }
        console.log('moduleActionTrigger', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
        if (buttonDefinition && buttonDefinition.esign_required){    
            store.dispatch(openEsignDialog(
            this.moduleActionTriggerNext.bind(this, buttonDefinition, backEndData, moduleArea),
            this.moduleActionTriggerAbort.bind(this)
            ));  
            return;       
        }
        if (buttonDefinition && buttonDefinition.confirmuser_required){              
            store.dispatch(openConfirmUserDialog(
            this.moduleActionTriggerNext.bind(this, buttonDefinition, backEndData, moduleArea),
            this.moduleActionTriggerAbort.bind(this)
            )); 
            return;
        }
        this.moduleActionTriggerNext(buttonDefinition, backEndData, moduleArea);
    }    
    moduleActionTriggerAbort(){
        this.loading=false;  
    }
    moduleActionTriggerNext(buttonDefinition, backEndData, moduleArea){
    //    console.log('moduleActionTriggerNext', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
        var buttonName = buttonDefinition.name;
        var datas = [];
        var areaActions=[];
        if (moduleArea.actionsFunction==undefined){
            this.toastErrorMessage(this.moduleAreaNotRecognized(moduleArea.name));
            console.log('moduleActionTriggerNext', 'areaActions not defined');
            return
        }
        areaActions=moduleArea.actionsFunction();

        if (areaActions==undefined){
            this.toastErrorMessage(this.moduleAreaNotRecognized(moduleArea.name));
            console.log('moduleActionTriggerNext', 'areaActions undefined');
            return
        }
        var actionDefinition = areaActions.find(function(tab) {
            return tab.actionName.toUpperCase() == buttonName.toUpperCase();
            }); 
        if (!actionDefinition){
            this.toastErrorMessage(this.actionNameNotRecognized(buttonName.toUpperCase(), moduleArea.name));
            return;
        }   
        if (actionDefinition.dialogInfo.requiresDialog){
            var elem=this.shadowRoot.getElementById(actionDefinition.dialogInfo.webComponentName);
            if (elem){
                elem.buttonDefinition=buttonDefinition;
                elem.selectedObject=backEndData.selectedObject;
                elem.selectedStudy=backEndData.selectedStudy;
                elem.callBackFunction=backEndData.callBackFunction;
                elem.callBackFunctionError=backEndData.callBackFunctionError;
                elem.openDialog(actionDefinition.dialogInfo.dialogName, actionDefinition.dialogInfo.dialogArgument);
            }else{
                var message=[];
                message.message_en='Not found any WebComponent called '+actionDefinition.dialogInfo.webComponentName;
                message.message_es='No encontrado ningún WebComponent llamado '+actionDefinition.dialogInfo.webComponentName;
                this.toastErrorMessage(message);
            }
            return;
        }
        if (actionDefinition.functionInfo && actionDefinition.functionInfo.requiresTriggerFunction){
            this.moduleActionRequiresTriggerFunction(buttonName, buttonDefinition, backEndData.selectedObject, moduleArea, actionDefinition, backEndData.callBackFunction, backEndData.callBackFunctionError, this.refreshWindowMethod);  
            return;
        }
        this.moduleActionTriggerAPI(buttonName, buttonDefinition, backEndData.selectedObject, moduleArea, actionDefinition, backEndData.callBackFunction, backEndData.callBackFunctionError, this.refreshWindowMethod);  
        return;              
    }    
    buildParamsUrlForAction(actionName, actionDefinition, selectedRow){
        var message_en="Unhandled exception";
        var message_es="Excepción no controlada";
        var paramsUrl="";
        var result=[];
        result.diagnostic=false;

        if (actionDefinition==undefined){
            message_en="Action "+actionName+" not declared.";
            message_es="Acción "+actionName+"no declarada.";
            return result;    
        }
        var i=0;
        for (i = 0; i < actionDefinition.apiParams.length; i++) {
            if (actionDefinition.apiParams[i].paramName!=undefined && selectedRow[actionDefinition.apiParams[i].dataArrName]!=undefined ){
                paramsUrl=paramsUrl+"&"+actionDefinition.apiParams[i].paramName+"="+selectedRow[actionDefinition.apiParams[i].dataArrName];            
            }else{
                if (actionDefinition.apiParams[i].defaultValue!=undefined){
                    paramsUrl=paramsUrl+"&"+actionDefinition.apiParams[i].paramName+"="+actionDefinition.apiParams[i].defaultValue;            
                }else{
                    if (actionDefinition.apiParams[i].isMandatory==undefined || actionDefinition.apiParams[i].isMandatory==true){
                        message_en="Not found value for the param "+actionDefinition.apiParams[i].paramName+" which is mandatory for the action "+actionName;
                        message_es="No encontrado valor para el parámetro "+actionDefinition.apiParams[i].paramName+" que es declarado como obligatorio para la acción "+actionName;
                        result.message_en=message_en;
                        result.message_es=message_es
                        console.log('buildParamsUrlForAction, missing mandatory values:', result.message_en, 'actionDefinition.apiParams', actionDefinition.apiParams, selectedRow, selectedRow);
                        return result;        
                    }
                }
            }                
        //message_es=actionDefinition.apiParams[0].paramName+selectedRow[actionDefinition.apiParams[0].dataArrName];
        }
        result.diagnostic=true;
        result.message_en=message_en;
        result.message_es=message_es
        result.paramsUrl=paramsUrl;
        return result;
    }
    moduleActionTriggerAPI(actionName, button, selectedRow, moduleArea, actionDefinition, callBackFunction, callBackFunctionError, refreshFunction ) {
//console.log('moduleActionTriggerAPI', 'selectedRow', selectedRow);   
        var paramsUrlObj=this.buildParamsUrlForAction(actionName, actionDefinition, selectedRow);
        if (paramsUrlObj.diagnostic==false){
            var msgErr=[];
            msgErr.message_en="Error building the call to the API for the action "+actionName+". Error: "+paramsUrlObj.message_en;
            msgErr.message_es="Error al crear la llamada a la API para la acción "+actionName+". Error: "+paramsUrlObj.message_es;
            this.toastErrorMessage(msgErr);
            return;
        }
        actionName=actionName.toUpperCase();
        var paramsUrl=paramsUrlObj.paramsUrl;   
        this.internalCallbackFunction = callBackFunction;        
       
        if (selectedRow.eSignToVerify){paramsUrl=paramsUrl+"&eSignToCheck="+selectedRow.eSignToVerify;}
        paramsUrl="actionName="+actionName+paramsUrl;
        var datas = [];
        datas.actionName=actionName; datas.paramsUrl=paramsUrl;
        if (callBackFunction){
            datas.callBackFunction=callBackFunction.bind(this);}
        //console.log('api-env-monit.js >> SampleAPIControllerAPI >> Before calling moduleAPIEndpointCall the datas contains: ', datas);            
        this.moduleAPIEndpointCall(datas, button, moduleArea, callBackFunction, callBackFunctionError, refreshFunction);            
    }
    moduleAPIEndpointCall(data, button, moduleArea, callBackFunction, callBackFunctionError, refreshFunction) {
        var endpoints_returningError=this.endpoints_returningError();        
        var apiUrl=backendUrl+moduleArea.apiUrlForActions+"?"+data.paramsUrl;
        apiUrl=apiUrl+"&finalToken="+this.getFinalToken()
        +"&procInstanceName="+schema_name + "&dbName="+dbName;        
        //console.log('process-us>api-sample>moduleAPIEndpointCall', data.procInstanceName, data.actionName, apiUrl, data.paramsUrl);    

        if (button && button.esign_required){    
            var ePhrase=this.getEsignPhrase()
            apiUrl=apiUrl+"&esignPhraseToCheck="+ePhrase;
        }
        if (button && button.confirmuser_required){   
            var userPhrase=this.getUserPhrase()
            var userPwPhrase=this.getUserPwPhrase()
            apiUrl=apiUrl+"&userToCheck="+userPhrase;
            apiUrl=apiUrl+"&passwordToCheck="+userPwPhrase;
        }        
        axios.get(apiUrl)        
        .then( response => {
            console.log('em-demo-a > api-env-monit.js > moduleAPIEndpointCall', 'response.data', response.data);
            var notifObj=diagnosticToNotification(response.data, data);
            store.dispatch(addNotification(notifObj));    
            if(response.status == 200) {
                //console.log('callBackFunction');
                this.toastSuccessMessage(response.data);
                if (callBackFunction){callBackFunction();}   
                if (refreshFunction){refreshFunction();} 
                return;
            }
            this.toastErrorMessage(response.data);
            if (callBackFunctionError){callBackFunctionError();}
            if (refreshFunction){refreshFunction();} 
            return;
        })    
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            console.log(error.message);
            if (data.callBackFunctionError){data.callBackFunctionError();}
        })
        .then(function () {
        });
    } 
    moduleActionRequiresTriggerFunction(buttonName, buttonDefinition, selectedObject, moduleArea, actionDefinition, callBackFunction, callBackFunctionError, refreshWindowMethod){  
        return;
    }
}