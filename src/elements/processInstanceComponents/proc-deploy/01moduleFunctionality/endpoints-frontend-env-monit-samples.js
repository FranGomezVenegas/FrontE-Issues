import {backendUrl, frontEndEnvMonitSampleUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {dbName} from '../../../../config/platform/logic/platform-config';
import {
    getAllProgramsUnreceivedSamples as allProgramsUnreceivedSamples_proc_deploy  
    , getSamplesInSampling as getSamplesInSampling_proc_deploy 
    , getSamplesInProgressFQ as getSamplesInProgressFQ_proc_deploy 
    , getSamplesInProgressMB as getSamplesInProgressMB_proc_deploy 

    , getSamplesPendingRevisionTestingGroupFQ as getSamplesPendingRevisionTestingGroupFQ_proc_deploy 
    , getSamplesPendingRevisionTestingGroupMB as getSamplesPendingRevisionTestingGroupMB_proc_deploy 
    , getSamplesAnalysisPendingRevisionFQ as getSamplesAnalysisPendingRevisionFQ_proc_deploy
    , getSamplesAnalysisPendingRevisionMB as getSamplesAnalysisPendingRevisionMB_proc_deploy
    , getSamplesPendingSampleRevision as getSamplesPendingSampleRevision_proc_deploy 

    , getAllSamplesStageSampling as getAllSamplesStageSampling_proc_deploy   
    , getAllSamplesStageIncubation1 as getAllSamplesStageIncubation1_proc_deploy   
    , getAllSamplesStageIncubation2 as getAllSamplesStageIncubation2_proc_deploy   
    , getAllSamplesStagePlateReading as getAllSamplesStagePlateReading_proc_deploy   
    , getAllSamplesStageMicroorganism as getAllSamplesStageMicroorganism_proc_deploy   
    , getAllPersonSamplesStageSampling as getAllPersonSamplesStageSampling_proc_deploy   
    , getAllPersonSamplesStagePlateReading as getAllPersonSamplesStagePlateReading_proc_deploy   
    , getAllPersonSamplesStageMicroorganism as getAllPersonSamplesStageMicroorganism_proc_deploy   
    , getMicroorganismList as getMicroorganismList_proc_deploy
    , getBrowserSampleData as getBrowserSampleData_proc_deploy
    
    , getSampleAudit as getSampleAudit_proc_deploy
    
    , sampleTemplates as sampleTemplates_proc_deploy, unReceivedSamples as unReceivedSamples_proc_deploy
    , forResultsSamples as forResultsSamples_proc_deploy, givenCocSampleHistory as givenCocSampleHistory_proc_deploy
    , getGivenCocUsersList as getGivenCocUsersList_proc_deploy
    , forResultsSamplesCustodian as forResultsSamplesCustodian_proc_deploy, forResultsSamplesCandidate as forResultsSamplesCandidate_proc_deploy
        , forRevisionSamples as forRevisionSamples_proc_deploy
    , analysisAllList as analysisAllList_proc_deploy, givenSampleAnalysisList as givenSampleAnalysisList_proc_deploy
    , getGivenSampleAnalysisResultEntry as getGivenSampleAnalysisResultEntry_proc_deploy
    
    , getSampleStatsCounterByStage as getSampleStatsCounterByStage_proc_deploy
    , getSampleStatsLastNresults as getSampleStatsLastNresults_proc_deploy
    
    } from '../02Redux/proc-deploy_actions';
    
/**
 * @mixinFunction
 * @polymer
 */
export const samplesStagesReduxVariables={
    "SAMPLES_IN_SAMPLING": {name:"samples_in_sampling", actionName:'SAMPLES_INPROGRESS_LIST', reducerPropertyName:'getAllSamplesInSampling'},
    "SAMPLES_IN_PROGRESS_FQ": {name:"samples_in_progress_fq", actionName:'SAMPLES_INPROGRESS_LIST', reducerPropertyName:'getAllSamplesInProgressFQ'},
    "SAMPLES_IN_PROGRESS_MB": {name:"samples_in_progress_mb", actionName:'SAMPLES_INPROGRESS_LIST', reducerPropertyName:'getAllSamplesInProgressMB'},

    "SAMPLES_PENDINGREVISION_TESTINGGROUPFQ": {name:"samples_pendingrevision_testinggroup_fq", actionName:'SAMPLES_PENDING_TESTINGGROUP_REVISION', reducerPropertyName:'getSamplesPendingRevisionTestingGroupFQ'},
    "SAMPLES_PENDINGREVISION_TESTINGGROUPMB": {name:"samples_pendingrevision_testinggroup_mb", actionName:'SAMPLES_PENDING_TESTINGGROUP_REVISION', reducerPropertyName:'getSamplesPendingRevisionTestingGroupMB'},
    "SAMPLEANALYSIS_PENDINGREVISION_FQ": {name:"samplesanalysis_pendingrevision_fq", actionName:'SAMPLEANALYSIS_PENDING_REVISION', reducerPropertyName:'getSamplesAnalysisPendingRevisionFQ'},
    "SAMPLEANALYSIS_PENDINGREVISION_MB": {name:"samplesanalysis_pendingrevision_mb", actionName:'SAMPLEANALYSIS_PENDING_REVISION', reducerPropertyName:'getSamplesAnalysisPendingRevisionMB'},
    "SAMPLES_PENDINGSAMPLEREVISION": {name:"samples_pendingrevision_sample", actionName:'SAMPLES_PENDING_SAMPLE_REVISION', reducerPropertyName:'getSamplesPendingSampleRevision'},
        
    "SAMPLES_PLATE_READING": {name:"samples_plate_reading", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStagePlateReading'},
    "SAMPLES_MICROORG_IDENTIF": {name:"samples_microorg_identif", actionName:'GET_SAMPLE_MICROORGANISM_VIEW', reducerPropertyName:'getAllSamplesStageMicroorganism'},
    "PERSON_SAMPLING": {name:"person_sampling", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllPersonSamplesStageSampling'},
    "PERSON_PLATE_READING": {name:"person_plate_reading", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllPersonSamplesStagePlateReading'},
    "PERSON_MICROORG_IDENTIF": {name:"person_microorg_identif", actionName:'GET_SAMPLE_MICROORGANISM_VIEW', reducerPropertyName:'getAllPersonSamplesStageMicroorganism'},
    "PENDING_INCUBATION1": {name:"pending_incubation1", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStageIncubation1'},
    "PENDING_INCUBATION2": {name:"pending_incubation2", actionName:'SAMPLES_BY_STAGE', reducerPropertyName:'getAllSamplesStageIncubation2'},
};
export const FrontendEndpointsEnvMonitSamples = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    getAllSamplesStageSampling(data, reduxVariable) {
//        console.log('getSamplesInProgress', apiUrl, data, 'reduxVariable', reduxVariable);
        var actionName=reduxVariable.actionName;
        var endpoints_returningError=this.endpoints_returningError();
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        //console.log('getAllSamplesStageSampling', 'data', data);
        var params={
            'procInstanceName':schema_name, 'dbName':dbName,
            'actionName':actionName, 
            'finalToken':this.getFinalToken(), 'sampleFieldToRetrieve':data.sampleFieldToRetrieve,
            'whereFieldsName': data.samplesWhereFieldsName, 
            'whereFieldsValue': data.samplesWhereFieldsValue, 'sortFieldsName':data.samplesTabSortFields
        };        
        if (reduxVariable.actionName=="SAMPLES_INPROGRESS_LIST"){
            if (data.addSampleAnalysis){params.addSampleAnalysis=data.addSampleAnalysis;}
            if (data.addSampleAnalysisFieldToRetrieve){params.addSampleAnalysisFieldToRetrieve=data.addSampleAnalysisFieldToRetrieve;}
            if (data.sampleAnalysisWhereFieldsName){params.sampleAnalysisWhereFieldsName=data.sampleAnalysisWhereFieldsName;}
            if (data.sampleAnalysisWhereFieldsValue){params.sampleAnalysisWhereFieldsValue=data.sampleAnalysisWhereFieldsValue;}
            if (data.addSampleAnalysisResult){params.addSampleAnalysisResult=data.addSampleAnalysisResult;}
            if (data.sampleAnalysisResultWhereFieldsName){params.sampleAnalysisResultWhereFieldsName=data.sampleAnalysisResultWhereFieldsName;}
            if (data.sampleAnalysisResultWhereFieldsValue){params.sampleAnalysisResultWhereFieldsValue=data.sampleAnalysisResultWhereFieldsValue;}
            if (data.sampleLastLevel){params.sampleLastLevel=data.sampleLastLevel;}
        }
        if (reduxVariable.actionName=="SAMPLES_PENDING_TESTINGGROUP_REVISION"){
            if (data.testingGroup){params.testingGroup=data.testingGroup;}                        
        }
        if (reduxVariable.actionName=="SAMPLEANALYSIS_PENDING_REVISION"){
            if (data.testingGroup){
                params.sampleAnalysisWhereFieldsName="testing_group"
                params.sampleAnalysisWhereFieldsValue=data.testingGroup+"*String";
            }
        }
        
        axios.get(apiUrl, {        
            params:params 
        })
        .then( response => {
            if(response.status == 200) {
    //            console.log(response.data);
                // console.log(reduxVariable.name);
                switch (reduxVariable.name){
                    
                    case 'samples_in_sampling':
                        store.dispatch(getSamplesInSampling_proc_deploy(response.data));
                        break;
                    case 'samples_in_progress_fq':
                        store.dispatch(getSamplesInProgressFQ_proc_deploy(response.data));
                        break;
                    case 'samples_in_progress_mb':
                        store.dispatch(getSamplesInProgressMB_proc_deploy(response.data));
                        break;
                    case 'samples_pendingrevision_testinggroup_fq': 
                        store.dispatch(getSamplesPendingRevisionTestingGroupFQ_proc_deploy(response.data));
                        break;
                    case 'samples_pendingrevision_testinggroup_mb':
                        store.dispatch(getSamplesPendingRevisionTestingGroupMB_proc_deploy(response.data));
                        break;
                    case 'samplesanalysis_pendingrevision_fq':
                        store.dispatch(getSamplesAnalysisPendingRevisionFQ_proc_deploy(response.data));
                        break;
                    case 'samplesanalysis_pendingrevision_mb':
                        store.dispatch(getSamplesAnalysisPendingRevisionMB_proc_deploy(response.data));
                        break;
                    case 'samples_pendingrevision_sample':
                        store.dispatch(getSamplesPendingSampleRevision_proc_deploy(response.data));
                        break;                                    
                    case 'samples_sampling':
                        store.dispatch(getAllSamplesStageSampling_proc_deploy(response.data));
                        break;
                    case 'samples_plate_reading':
                        store.dispatch(getAllSamplesStagePlateReading_proc_deploy(response.data));
                        break;
                    case 'samples_microorg_identif':
                        store.dispatch(getAllSamplesStageMicroorganism_proc_deploy(response.data));
                        break;
                    case 'person_sampling':
                        store.dispatch(getAllPersonSamplesStageSampling_proc_deploy(response.data));
                        break;
                    case 'person_plate_reading':
                        store.dispatch(getAllPersonSamplesStagePlateReading_proc_deploy(response.data));
                        break;
                    case 'person_microorg_identif':
                        store.dispatch(getAllPersonSamplesStageMicroorganism_proc_deploy(response.data));
                        break;
                    case 'pending_incubation1':
                        store.dispatch(getAllSamplesStageIncubation1_proc_deploy(response.data));
                        break;
                    case 'pending_incubation2':
                        store.dispatch(getAllSamplesStageIncubation2_proc_deploy(response.data));
                        break;
                    default:
                        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
                        return;
                }
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
        });
    }
    getSampleAudit(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        var endpoints_returningError=this.endpoints_returningError();

        //console.log('getSampleAudit', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_SAMPLE_AUDIT', 
                'finalToken':this.getFinalToken(), 'sampleId':data.sampleId,
                'sampleAuditFieldToRetrieve': data.sampleAuditFieldToRetrieve
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getSampleAudit_proc_deploy(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            store.dispatch(getSampleAudit_proc_deploy({}));
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            store.dispatch(getSampleAudit_proc_deploy({}));
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getGivenSampleAnalysisResultEntry(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        var endpoints_returningError=this.endpoints_returningError();

        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        var myparams={
            'procInstanceName':schema_name, 'dbName':dbName,
            'actionName':'GET_SAMPLE_ANALYSIS_RESULT_LIST', 
            'finalToken':this.getFinalToken(), 'sampleId':data.sampleId,
        };
        if (data.fieldToRetrieve){myparams.sampleAnalysisResultFieldToRetrieve=data.fieldToRetrieve};
        if (data.fieldToSort){myparams.sortFieldsName=data.fieldToSort};
        if (data.sampleAnalysisWhereFieldsName){myparams.sampleAnalysisWhereFieldsName=data.sampleAnalysisWhereFieldsName;}
        if (data.sampleAnalysisWhereFieldsValue){myparams.sampleAnalysisWhereFieldsValue=data.sampleAnalysisWhereFieldsValue;}
        axios.get(apiUrl, {params: myparams})
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getGivenSampleAnalysisResultEntry_proc_deploy(response.data));
                if (data.callBackFunction){data.callBackFunction();}
                return;
            }
            store.dispatch(getGivenSampleAnalysisResultEntry_proc_deploy({}));
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            store.dispatch(getGivenSampleAnalysisResultEntry_proc_deploy({}));
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }
    getMicroorganismList(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        var endpoints_returningError=this.endpoints_returningError();

        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_MICROORGANISM_LIST', 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getMicroorganismList_proc_deploy(response.data));
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
    getSampleStatsCounterByStage(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        var endpoints_returningError=this.endpoints_returningError();

        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'STATS_SAMPLES_PER_STAGE', 'finalToken':this.getFinalToken(), 
                'programName':data.programName, 'stagesToInclude':data.stagesToInclude, 'stagesToExclude': data.stagesToExclude
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getSampleStatsCounterByStage_proc_deploy(response.data));
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
    getSampleStatsLastNresults(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        var endpoints_returningError=this.endpoints_returningError();

        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'STATS_PROGRAM_LAST_RESULTS', 'finalToken':this.getFinalToken(), 
                'sampleId':data.sampleId, 'sampleFieldToRetrieve': data.browserSampleFieldToRetrieve, 'sampleFieldsToDisplay': data.browserSampleFieldsToDisplay
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getSampleStatsLastNresults_proc_deploy(response.data));
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
    getBrowserSelectedSampleData(data) {
        var apiUrl=backendUrl+frontEndEnvMonitSampleUrl; 
        var endpoints_returningError=this.endpoints_returningError();

        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'GET_SAMPLE_STAGES_SUMMARY_REPORT', 
                'finalToken':this.getFinalToken(), 
                'sampleId':data.sampleId, 'sampleFieldToRetrieve': data.browserSampleFieldToRetrieve, 'sampleFieldsToDisplay': data.browserSampleFieldsToDisplay
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getBrowserSampleData_proc_deploy(response.data));
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