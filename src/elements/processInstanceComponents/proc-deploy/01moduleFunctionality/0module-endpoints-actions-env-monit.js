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

import {dbName} from '../../../../config/platform/logic/platform-config';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {EnvMonitModuleDefinition} from './0module-actions-available';
/**
 * @mixinFunction
 * @polymer
 */
export const EndpointsActionsEnvMonitModule = (superClass) => class extends userConfirmationMixin(EnvMonitModuleDefinition(ApiSettings(ToastMethods(tokenMixin(superClass))))) {

    moduleActionTrigger(buttonDefinition, backEndData, moduleAreaName){
        var moduleArea=this.getFunctionalArea(moduleAreaName)
        if (moduleArea==undefined){
            this.toastErrorMessage(this.moduleAreaNotRecognized(moduleAreaName));
            console.log('module area not recognized');
            return;
        }
    //    console.log('moduleActionTrigger', 'buttonDefinition', buttonDefinition, 'backEndData', backEndData);
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
        if (moduleArea.name=='SAMPLES'){
            var areaActions=this.sampleActions();
        }
        if (moduleArea.name=='PROGRAMS'){
            var areaActions=this.programActions();
        }
        if (moduleArea.name=='PRODUCTION_LOTS'){
            var areaActions=this.productionLotsActions();
        }
        if (moduleArea.name=='INCUB_BATCH'){
            var areaActions=this.batchActions();
        }
        if (moduleArea.name=='INCUBATOR'){
            var areaActions=this.incubatorActions();
        }
        if (moduleArea.name=='INVESTIGATION'){
            var areaActions=this.investigationActions();
        }        
        if (moduleArea.name=='SAVED_QUERIES'){
            var areaActions=this.savedQueriesActions();
        }        
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
            if (!elem){
                if (actionDefinition.dialogInfo.webComponentName="myelements"){
                    elem=this.shadowRoot.getElementById("myelements");
                }
            }
            if (elem){
                elem.buttonDefinition=buttonDefinition;
                elem.selectedObject=backEndData.selectedObject;
                elem.callBackFunction=backEndData.callBackFunction;
                elem.callBackFunctionError=backEndData.callBackFunctionError;
                elem.openDialog(actionDefinition.dialogInfo.dialogName, actionDefinition.dialogInfo.dialogArgument);
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
            var rowFieldValue=selectedRow[actionDefinition.apiParams[i].dataArrName];
            if (actionDefinition.apiParams[i].paramName!=undefined && rowFieldValue!=undefined){
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
        //console.log('api-env-monit.js >> SampleAPIControllerAPI >> Before calling sampleAPIEndpointCall the datas contains: ', datas);            
        this.sampleAPIEndpointCall(datas, button, moduleArea, callBackFunction, callBackFunctionError, refreshFunction);            
    }
    sampleAPIEndpointCall(data, button, moduleArea, callBackFunction, callBackFunctionError, refreshFunction) {
        var endpoints_returningError=this.endpoints_returningError();        
        var apiUrl=backendUrl+moduleArea.apiUrlForActions+"?"+data.paramsUrl;
        apiUrl=apiUrl+"&finalToken="+this.getFinalToken()
        +"&procInstanceName="+schema_name + "&dbName="+dbName;
        //console.log('process-us>api-sample>sampleAPIEndpointCall', data.procInstanceName, data.dbName, data.actionName, apiUrl, data.paramsUrl);    

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
            console.log('proc-deploy > api-env-monit.js > sampleAPIEndpointCall', 'response.data', response.data);
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
        this.REDUX_GET_INCUBBATCH(buttonName, buttonDefinition, selectedObject, moduleArea, actionDefinition, callBackFunction, callBackFunctionError, refreshWindowMethod);
    }
    REDUX_GET_INCUBBATCH(buttonName, buttonDefinition, selectedObject, moduleArea, actionDefinition, callBackFunction, callBackFunctionError, refreshWindowMethod){
        var state=store.getState();
        var selectedBatch=state.procDeploy.selectedBatch;   
        selectedObject.batchName=selectedBatch.name;
        selectedObject.batchtemplateId=selectedBatch.incub_batch_config_id;
        selectedObject.batchtemplateVersion=selectedBatch.incub_batch_config_version;
        this.moduleActionTriggerAPI(buttonName, buttonDefinition, selectedObject, moduleArea, actionDefinition, callBackFunction, callBackFunctionError, refreshWindowMethod);  
    }
}