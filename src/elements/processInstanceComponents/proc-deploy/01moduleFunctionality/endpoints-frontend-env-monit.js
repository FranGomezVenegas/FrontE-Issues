import {backendUrl, frontEndEnvMonitIncubationUrl, frontEndEnvMonitIncubBatchUrl, frontEndEnvMonitUrl,
    frontEndInvestigationUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {dbName} from '../../../../config/platform/logic/platform-config';
import { getActiveProductionLots as getActiveProductionLots_proc_deploy} from '../02Redux/proc-deploy_actions';
import { getActiveBatches as getActiveBatches_proc_deploy, getAllIncubators as getAllIncubators_proc_deploy} from '../02Redux/proc-deploy_actions';
import { getPrograms as getPrograms_proc_deploy, selectedProgramCorrectiveActionList as selectedProgramCorrectiveActionList_proc_deploy} from '../02Redux/proc-deploy_actions';
import {getOpenInvestigations as getOpenInvestigations_proc_deploy,
    getInvestigationResultsPendingDecision as getInvestigationResultsPendingDecision_proc_deploy} from '../02Redux/proc-deploy_actions';

export const FrontendEndpointsEnvMonitForPrograms = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getPrograms(data) {
        var apiUrl=backendUrl+frontEndEnvMonitUrl; 
        console.log('getPrograms', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'PROGRAMS_LIST', 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                console.log(response.data);
                store.dispatch(getPrograms_proc_deploy(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }

            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getSelectedProgramCorrectiveAction(data) {
        var apiUrl=backendUrl+frontEndEnvMonitUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'PROGRAMS_CORRECTIVE_ACTION_LIST',
                'finalToken':this.getFinalToken(), 'programName':data.programName, 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(selectedProgramCorrectiveActionList_proc_deploy(response.data));
                if (data && data.callBackRefreshWindow){data.callBackRefreshWindow();}
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
}

export const FrontendEndpointsEnvMonitForBatches = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getActiveBatches(data) {
        var apiUrl=backendUrl+frontEndEnvMonitIncubBatchUrl; 
        var whereFieldsName="";
        if (data.whereFieldsName) whereFieldsName=data.whereFieldsName;
        var whereFieldsValue="";
        if (data.whereFieldsValue) whereFieldsValue=data.whereFieldsValue;

        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'ACTIVE_BATCH_LIST', 'finalToken':this.getFinalToken(), 
                'whereFieldsName':whereFieldsName, 'whereFieldsValue': whereFieldsValue
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getActiveBatches_proc_deploy(response.data));
                if (data && data.callBackRefreshWindow){data.callBackRefreshWindow();}
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getAllIncubators(data) {
        var apiUrl=backendUrl+frontEndEnvMonitIncubationUrl; 
        //console.log('getAllIncubators', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'INCUBATORS_LIST', 'finalToken':this.getFinalToken(), 
                'incubStage': stage
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getAllIncubators_proc_deploy(response.data));
                if (data && data.callBackRefreshWindow){data.callBackRefreshWindow();}
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
}    

export const FrontendEndpointsEnvMonitForProductionLot = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getActiveProductionLotsList(data) {
        var apiUrl=backendUrl+frontEndEnvMonitUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_ACTIVE_PRODUCTION_LOTS', 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getActiveProductionLots_proc_deploy(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
}   

export const FrontendEndpointsEnvMonitForInvestigation = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getOpenInvestigationsList(data) {
        var apiUrl=backendUrl+frontEndInvestigationUrl; 
        //console.log('getActiveBatches', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'OPEN_INVESTIGATIONS', 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log('getOpenInvestigationsList', 'response.data=', response.data);
                store.dispatch(getOpenInvestigations_proc_deploy(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getInvestigationResultsPendingDecision(data) {
        var apiUrl=backendUrl+frontEndInvestigationUrl; 
        //console.log('getInvestigationResultsPendingDecision', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'INVESTIGATION_RESULTS_PENDING_DECISION', 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getInvestigationResultsPendingDecision_proc_deploy(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }

}   