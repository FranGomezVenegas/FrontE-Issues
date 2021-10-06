import {ApiEnvMonitSampleUrl, ApiEnvMonitProdLotUrl, ApiEnvMonitUrl, 
    ApiEnvMonitIncubationUrl, ApiInvestigationUrl, ApiSavedQueriesUrl} from '../../../../config/platform/logic/api-config';
export const EnvMonitModuleDefinition = (superClass) => class extends superClass {  
moduleDefinition(){
    return{
        name:"environmental_monitoring",
        version:1.0,
        functionalAreas:[
            {name: 'SAMPLES', apiUrlForActions: ApiEnvMonitSampleUrl},
            {name: 'PROGRAMS', apiUrlForActions: ApiEnvMonitUrl},
            {name: 'PRODUCTION_LOTS', apiUrlForActions: ApiEnvMonitProdLotUrl},
            {name: 'INCUB_BATCH', apiUrlForActions: ApiEnvMonitUrl},
            {name: 'INCUBATOR', apiUrlForActions: ApiEnvMonitIncubationUrl},
            {name: 'INVESTIGATION', apiUrlForActions: ApiInvestigationUrl},
            {name: 'SAVED_QUERIES', apiUrlForActions: ApiSavedQueriesUrl},            
        ],
    }
}
getFunctionalArea(name){
    var moduleDefinition=this.moduleDefinition();
    var functionalAreas=[];
    functionalAreas=moduleDefinition.functionalAreas;
    var actionDefinition = functionalAreas.find(function(tab) {
        return tab.name.toUpperCase() == name.toUpperCase();
    });
    return actionDefinition;
}
sampleActions(){
    return [
    {actionName:'SAMPLINGCOMMENTADD', 
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'addComment', dialogArgument:'SAMPLINGCOMMENTADD'},
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true}, 
                {paramName:'sampleComment', dataArrName:'sample_comment', isMandatory: true}],
    },
    {actionName:'COC_CONFIRMCHANGE', 
        apiParams:[{paramName:'sampleId', dataArrName:'selectedSample', isMandatory:true}, 
                   {paramName:'confirmChangeComment', dataArrName:'confirmChangeComment', isMandatory: true}],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'addComment', dialogArgument:'COC_CONFIRMCHANGE'}},
    {actionName:'COC_ABORTCHANGE', 
        apiParams:[{paramName:'sampleId', dataArrName:'selectedSample', isMandatory:true}, 
        {paramName:'cancelChangeComment', dataArrName:'cancelChangeComment', isMandatory: true}],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'addComment', dialogArgument:'COC_ABORTCHANGE'}},
    {actionName:'SETSAMPLINGDATE', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true}],
        dialogInfo:{requiresDialog:false},    
    },
    {actionName:'SAMPLINGCOMMENTREMOVE', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true}],
        dialogInfo:{requiresDialog:false},    
    },
    {actionName:'SAMPLESTAGE_MOVETONEXT', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true},
                   {paramName:'sampleStage', dataArrName:'currentStage', isMandatory:false}],
        dialogInfo:{requiresDialog:false},    
    },
    {actionName:'SAMPLESTAGE_MOVETOPREVIOUS', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true},
                   {paramName:'sampleStage', dataArrName:'currentStage', isMandatory:false}],
        dialogInfo:{requiresDialog:false},    
    },
    {actionName:'SAMPLE_AUDIT', apiParams:['sampleId'],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'sampleAudit', dialogArgument:''},
    },
    {actionName:'SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true},
                   {paramName:'auditId', dataArrName:'audit_id', isMandatory:true}],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'sampleAudit', dialogArgument:''},
    },
    {actionName:'ADD_SAMPLE_MICROORGANISM', 
        apiParams:[{paramName:'sampleId', dataArrName:'sampleId', isMandatory:true},
                   {paramName:'microorganismName', dataArrName:'microorganismName', isMandatory:true}],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'addSampleMicroorg', dialogArgument:''},        
    },
    {actionName:'EM_BATCH_INCUB_ADD_SMP', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true},
                   {paramName:'batchName', dataArrName:'batchName', isMandatory:true},
                   {paramName:'batchTemplateId', dataArrName:'batchtemplateId', isMandatory:true},
                   {paramName:'batchTemplateVersion', dataArrName:'batchtemplateVersion', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: true, functionName:'REDUX_GET_INCUBBATCH'},
    },
    {actionName:'EM_BATCH_INCUB_REMOVE_SMP', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true},
                   {paramName:'batchName', dataArrName:'batchName', isMandatory:true},
                   {paramName:'batchTemplateId', dataArrName:'batchtemplateId', isMandatory:true},
                   {paramName:'batchTemplateVersion', dataArrName:'batchtemplateVersion', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: true, functionName:'REDUX_GET_INCUBBATCH'},
    },
    {actionName:'GIVENSAMPLEENTERRESULT', 
        apiParams:['sampleId'],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'enterResults', dialogArgument:''},
    },
    {actionName:'ENTERRESULT', 
        apiParams:[{paramName:'sampleId', dataArrName:'sampleId', isMandatory:true},
                    {paramName:'resultId', dataArrName:'resultId', isMandatory:true},
                   {paramName:'rawValueResult', dataArrName:'rawValue', isMandatory:true}],
        dialogInfo:{requiresDialog:true, webComponentName:'myElementsSample', dialogName:'enterResults', dialogArgument:''},
    },
    {actionName:'LOGSAMPLE', 
        apiParams:[{paramName:'programName', dataArrName:'programName', isMandatory:true},
                    {paramName:'locationName', dataArrName:'locationName', isMandatory:true},
                    {paramName:'sampleTemplate', dataArrName:'sampleTemplate', isMandatory:true},
                    {paramName:'sampleTemplateVersion', dataArrName:'sampleTemplateVersion', isMandatory:true},
                    {paramName:'fieldName', dataArrName:'fieldName', isMandatory:true},
                    {paramName:'fieldValue', dataArrName:'fieldValue', isMandatory:true},
                    {paramName:'numSamplesToLog', dataArrName:'numSamplesToLog', isMandatory:true}],
        dialogInfo:{requiresDialog:false},    
    },
    {actionName:'CANCELSAMPLE', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: false, functionName:''},
    },
    {actionName:'UNCANCELSAMPLE', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: false, functionName:''},
    },
    {actionName:'REVIEWSAMPLE', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: false, functionName:''},
    },
    {actionName:'REVIEWTEST', 
        apiParams:[{paramName:'testId', dataArrName:'test_id', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: false, functionName:''},
    },    
    {actionName:'REVIEWSAMPLE_TESTINGGROUP', 
        apiParams:[{paramName:'sampleId', dataArrName:'sample_id', isMandatory:true},
                    {paramName:'testingGroup', dataArrName:'testing_group', isMandatory:true}],
        dialogInfo:{requiresDialog:false},
        functionInfo:{requiresTriggerFunction: false, functionName:''},
    },

    

    ]
};
programActions(){
    return [
    {actionName:'CORRECTIVE_ACTION_COMPLETE', 
        dialogInfo:{requiresDialog:false},
        apiParams:[{paramName:'programName', dataArrName:'program_name', isMandatory:true}, 
                {paramName:'programCorrectiveActionId', dataArrName:'id', isMandatory: true}],
    },
    ]
};
investigationActions(){
    return [
    {actionName:'NEW_INVESTIGATION', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'investigationNew', dialogArgument:''},
        apiParams:[{paramName:'fieldName', dataArrName:'fieldName', defaultValue:'', isMandatory: true},
            {paramName:'fieldValue', dataArrName:'fieldValue', defaultValue:'', isMandatory: true},
            {paramName:'objectsToAdd', dataArrName:'objectsToAdd', defaultValue:'', isMandatory: false}],
    },
    {actionName:'ADD_INVEST_OBJECTS', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'investigationAddObject', dialogArgument:''},
        apiParams:[{paramName:'investigationId', dataArrName:'investigationId', isMandatory:true},
                {paramName:'objectsToAdd', dataArrName:'objectsToAdd', isMandatory:true}],
    },
    {actionName:'CLOSE_INVESTIGATION', 
        dialogInfo:{requiresDialog:false},
        apiParams:[{paramName:'investigationId', dataArrName:'id', isMandatory:true}],
    },
    {actionName:'INVESTIGATION_TAKEN_DECISION', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'investigationDecision'},
        apiParams:[{paramName:'investigationId', dataArrName:'id', isMandatory:true},
            {paramName:'capaRequired', dataArrName:'capaRequired', isMandatory:true},
            {paramName:'capaFieldName', dataArrName:'capaFieldName', isMandatory:false},
            {paramName:'capaFieldValue', dataArrName:'capaFieldValue', isMandatory:false},
        ],
    },        
    {actionName:'UPDATE_INVESTIGATION', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'investigationDecision'},
        apiParams:[{paramName:'investigationId', dataArrName:'id', isMandatory:true}],
    },    
    
    ]
};
savedQueriesActions(){
    return [
    {actionName:'CREATE_SAVED_QUERY', 
        dialogInfo:{requiresDialog:false, webComponentName:'myelements', dialogName:'investigationNew', dialogArgument:''},
        apiParams:[{paramName:'name', dataArrName:'name', defaultValue:'', isMandatory: true},
                {paramName:'definition', dataArrName:'definition', defaultValue:'', isMandatory: true},
                {paramName:'private', dataArrName:'objectsToAdd', defaultValue:'', isMandatory: false}],
    },
    ]
};

productionLotsActions(){
    return [
    {actionName:'EM_NEW_PRODUCTION_LOT', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'productionLotNew', dialogArgument:''},
        apiParams:[{paramName:'lotName', dataArrName:'newLotName', isMandatory:true}, 
                {paramName:'fieldName', dataArrName:'', defaultValue:'active', isMandatory: true},
                {paramName:'fieldValue', dataArrName:'', defaultValue:'true*Boolean', isMandatory: true}],
    },
    {actionName:'EM_ACTIVATE_PRODUCTION_LOT', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'productionLotActivate', dialogArgument:''},
        apiParams:[{paramName:'lotName', dataArrName:'lot_name', isMandatory:true}],
    },
    {actionName:'EM_DEACTIVATE_PRODUCTION_LOT', 
        dialogInfo:{requiresDialog:false},
        apiParams:[{paramName:'lotName', dataArrName:'lot_name', isMandatory:true}],
    },
    ]
};
batchActions(){
    return [ 
    {actionName:'EM_BATCH_INCUB_CREATE', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'incubBatchNew', dialogArgument:''},
        apiParams:[{paramName:'batchName', dataArrName:'newBatchName', isMandatory:true}, 
                {paramName:'batchTemplateId', dataArrName:'', defaultValue:'1', isMandatory: true},
                {paramName:'batchTemplateVersion', dataArrName:'', defaultValue:'1', isMandatory: true}],
    },
    {actionName:'EM_BATCH_INCUB_REMOVE', 
        dialogInfo:{requiresDialog:false},
        apiParams:[{paramName:'batchName', dataArrName:'name', isMandatory:true}],
    },
    {actionName:'EM_BATCH_ASSIGN_INCUB', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'incubBatchAssignIncubator', dialogArgument:''},
        apiParams:[{paramName:'batchName', dataArrName:'name', isMandatory:true},
                {paramName:'incubatorName', dataArrName:'incubatorName', isMandatory:true},
                {paramName:'incubStage', dataArrName:'incubatorStage', isMandatory:true}],
    },
    {actionName:'EM_BATCH_INCUB_START', 
        dialogInfo:{requiresDialog:false},
        apiParams:[{paramName:'batchName', dataArrName:'name', isMandatory:true}, 
                {paramName:'batchTemplateId', dataArrName:'incub_batch_config_id', defaultValue:'1', isMandatory: true},
                {paramName:'batchTemplateVersion', dataArrName:'incub_batch_config_version', defaultValue:'1', isMandatory: true}],
    },
    {actionName:'EM_BATCH_INCUB_END', 
        dialogInfo:{requiresDialog:false},
        apiParams:[{paramName:'batchName', dataArrName:'name', isMandatory:true}, 
                {paramName:'batchTemplateId', dataArrName:'incub_batch_config_id', defaultValue:'1', isMandatory: true},
                {paramName:'batchTemplateVersion', dataArrName:'incub_batch_config_version', defaultValue:'1', isMandatory: true}],
    },
    ]
};
incubatorActions(){
    return [
    {actionName:'EM_INCUBATION_ADD_TEMP_READING', 
        dialogInfo:{requiresDialog:true, webComponentName:'myelements', dialogName:'incubatorAddTempReading', dialogArgument:''},
        apiParams:[{paramName:'incubatorName', dataArrName:'name', isMandatory:true}, 
                {paramName:'temperature', dataArrName:'tempValue', isMandatory: true}],
    },
    ]
};
}