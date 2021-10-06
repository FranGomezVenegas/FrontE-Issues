import {backendUrl, frontEndEnvMonitSampleUrl, ApiEnvMonitStatsUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {dbName} from '../../../../config/platform/logic/platform-config';
import {
    getBrowserSampleData as getBrowserSampleData_em_demo_a, 
    getBrowserIncubatorData as getBrowserIncubatorData_em_demo_a,
    getBrowserBatchData as getBrowserBatchData_em_demo_a,
    getBrowserProdLotData as getBrowserProdLotData_em_demo_a,
    setDataMiningQueryOutput as setDataMiningQueryOutput_em_demo_a} from '../02Redux/em-demo-a_actions';   
/**
 * @mixinFunction
 * @polymer
 */
export const FrontendEndpointsEnvMonitBrowser = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {    
    getBrowserSelectedSampleData(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_SAMPLE_STAGES_SUMMARY_REPORT', 'finalToken':this.getFinalToken(), 
                'sampleId':data.sampleId, 'sampleFieldToRetrieve': data.browserSampleFieldToRetrieve, 'sampleFieldsToDisplay': data.browserSampleFieldsToDisplay
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getBrowserSampleData_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }  

    getBrowserSelectedIncubatorData(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_INCUBATOR_REPORT', 'finalToken':this.getFinalToken(), 
                'incubatorName':data.incubName, 'incubatorFieldToRetrieve': data.browserIncubatorFieldToRetrieve, 'incubatorFieldsToDisplay': data.browserIncubatorFieldsToDisplay,
                'startDate':data.startDate, 'endDate':data.endDate
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getBrowserIncubatorData_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }  

    getBrowserSelectedBatchData(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_BATCH_REPORT', 'finalToken':this.getFinalToken(), 
                'batchName':data.BatchName, 'batchFieldToRetrieve': data.browserBatchFieldToRetrieve, 'batchFieldsToDisplay': data.browserBatchFieldsToDisplay
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getBrowserBatchData_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }      
    getBrowserSelectedProdLotData(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_PRODLOT_REPORT', 'finalToken':this.getFinalToken(), 
                'lotName':data.prodLotName, 'prodLotFieldToRetrieve': data.browserProdLotFieldToRetrieve, 'prodLotFieldsToDisplay': data.browserProdLotFieldsToDisplay,
                'sampleFieldToRetrieve': data.browserSampleFieldToRetrieve, 'sampleFieldsToDisplay': data.browserSampleFieldsToDisplay,
                'sampleWhereFieldName': data.sampleWhereFieldName, 'sampleWhereFieldValue': data.sampleWhereFieldValue,
                'sampleGroups': data.sampleGroups
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getBrowserProdLotData_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }   
    getDataMiningQueryOutput(data, url) {
        var apiUrl=backendUrl+ApiEnvMonitStatsUrl+'?'+url; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':data.actionName, 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(setDataMiningQueryOutput_em_demo_a(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
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