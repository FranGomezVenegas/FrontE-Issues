import {
    PROGRAMS, SELECTED_PROGRAM, SELECTED_SAMPLING_POINT, SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST,
    MICROORGANISM_LIST, GET_SAMPLE_AUDIT, ACTIVE_PRODUCTION_LOTS,
    
    SAMPLES_IN_SAMPLING, SAMPLES_IN_PROGRESS_FQ, SAMPLES_IN_PROGRESS_MB,
    SAMPLES_PENDING_REVISION_TESTINGGROUPFQ, SAMPLES_PENDING_REVISION_TESTINGGROUPMB, SAMPLES_PENDING_SAMPLE_REVISION,
    SAMPLES_ANALYSIS_PENDING_REVISION_FQ, SAMPLES_ANALYSIS_PENDING_REVISION_MB,

    ALL_SAMPLES_STAGE_SAMPLING, ALL_SAMPLES_STAGE_INCUBATION1, ALL_SAMPLES_STAGE_INCUBATION2, 
    ALL_SAMPLES_STAGE_PLATEREADING, ALL_SAMPLES_STAGE_MICROORGANISM,

    ALL_PERSON_SAMPLES_STAGE_SAMPLING, ALL_PERSON_SAMPLES_STAGE_PLATEREADING, ALL_PERSON_SAMPLES_STAGE_MICROORGANISM,
    
    SET_SELECTED_INCUBATOR, GET_ALL_INCUBATORS, SET_SELECTED_BATCH, GET_ACTIVE_BATCHES,

    ALL_PROGRAMS_UNRECEIVED_SAMPLES, SAMPLE_TEMPLATES, UNRECEIVED_SAMPLES_LIST, RECEIVED_SAMPLES_IN_SESSION, FOR_RESULTS_SAMPLES_LIST 
    , FOR_REVISION_SAMPLES_LIST, ANALYSIS_LIST, GIVEN_SAMPLE_ANALYSIS_LIST, GIVEN_SAMPLE_ANALYSIS_RESULT_LIST
    , FOR_RESULTS_SAMPLES_CUSTODIAN_LIST, FOR_RESULTS_SAMPLES_CANDIDATE_LIST, COC_SAMPLE_HISTORY, COC_USERS_LIST

    , OBJECT_BROWSER_ADD, SELECT_BROWSER_SAMPLE_OBJECT, SELECT_BROWSER_PRODLOT_OBJECT
    , KPIS, SAMPLE_STATS_COUNTER_BY_STAGE , SAMPLE_STATS_LAST_N_RESULTS
    , OPEN_INVESTIGATIONS, INVESTIGATION_RESULTS_PENDING_DECISION
    , ALL_SAVED_QUERIES
} from './proc-deploy_actions.js';

const INITIAL_STATE = {

    programs: []
    , selectedProgram: []
    , selectedProgramCorrectiveActions: []
    , selectedSamplingPoint: []
    , allIncubators:[]
    , selectedIncubator: []
    , allActiveBatches:[]
    , selectedBatch: []
    , allProgramsUnreceivedSamples: []
    , microorganismList: []
    , activeProductionLots:[]
    , openInvestigations:[]
    , investigationResultsPendingDecision:[]
    , allSavedQueries:[]

    , samplesInSampling:[]
    , samplesInProgressFQ:[]
    , samplesInProgressMB:[]
    , samplePendingRevisionTheTestingGroupFQ:[]
    , samplePendingRevisionTheTestingGroupMB:[]
    , samplePendingSampleRevision:[]
    , samplesAnalysisPendingRevisionFQ:[]
    , samplesAnalysisPendingRevisionMB:[]
    
    
    
    , allSamplesStageSampling: []
    , allSamplesStageIncubation1: []
    , allSamplesStageIncubation2: []
    , allSamplesStagePlateReading: []
    , allSamplesStageMicroorganism: []

    , allPersonSamplesStageSampling: []
    , allPersonSamplesStagePlateReading: []
    , allPersonSamplesStageMicroorganism: []

    , sampleTemplates: []
    , unReceivedSamples: []
    , receivedSamplesInSession: []
    , forResultsSamples: [] 
    , forRevisionSamples: []
    , analysisList: []  
    , givenSampleAnalysisList: []  
    , givenSampleAnalysisResultEntryList: []  
    , forResultsSamplesCustodian: []     
    , forResultsSamplesCandidate: [] 
    , cocSampleHistory: []
    , cocUsersList: []
    , sampleAudit:[]

    , sampleBrowserSamplesList:[]
    , browserSelectedSample:[]
    , browserSelectedIncubator:[]
    , browserSelectedBatch:[]
    , browserSelectedProdLot:[]

    , kpis:[]

    , sampleStatsCounterByStage:[]
    , sampleStatsLastNresults:[]
}

const procDeployReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PROGRAMS:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            programs: action.DATA,
        }
    case SELECTED_PROGRAM:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            selectedProgram: action.DATA,
        }    
    case SELECTED_SAMPLING_POINT:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            selectedSamplingPoint: action.DATA,
        }  
    case GET_ALL_INCUBATORS:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allIncubators: action.DATA,
        } 
    case SET_SELECTED_INCUBATOR:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            selectedIncubator: action.DATA,
        } 
    case GET_ACTIVE_BATCHES:
/*        var selBatchName=state.selectedBatch.name;
        //console.log('proc-deploy_reducers.programs', action);
        var found = action.DATA.find(function(selBatchName) {
            console.log('proc-deploy_reducers >> GET_ACTIVE_BATCHES >> tab reducer find', selBatchName, action.DATA);
            return index == action.DATA.index;
          });      
        //console.log('tab reducer', action, state, found);
        if (found != undefined){
          return {
            ...state,
            selectedBatch: action.DATA[index],
            allActiveBatches: action.DATA,    
        }
        }else{ */
            return {
                ...state,        
                allActiveBatches: action.DATA,    
            }
        //} 
    case SET_SELECTED_BATCH:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            selectedBatch: action.DATA,
        } 
    case SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST:
        //console.log('proc-deploy_reducers.SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST', action);
        return {
            ...state,        
            selectedProgramCorrectiveActions: action.DATA,
        }   
    case ACTIVE_PRODUCTION_LOTS:
        return {
            ...state,        
            activeProductionLots: action.DATA,
        }                   
    case OPEN_INVESTIGATIONS:
        return {
            ...state,        
            openInvestigations: action.DATA,
        }  
    case INVESTIGATION_RESULTS_PENDING_DECISION:
        return {
            ...state,        
            investigationResultsPendingDecision: action.DATA,
        } 
    case ALL_SAVED_QUERIES:
        return {
            ...state,        
            allSavedQueries: action.DATA,
        } 
    case ALL_PROGRAMS_UNRECEIVED_SAMPLES:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allProgramsUnreceivedSamples: action.DATA,
        }  
    case SAMPLES_IN_SAMPLING:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            samplesInSampling: action.DATA,
        }  
    case SAMPLES_IN_PROGRESS_FQ:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            samplesInProgressFQ: action.DATA,
        }  
    case SAMPLES_IN_PROGRESS_MB:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            samplesInProgressMB: action.DATA,
        } 
    case SAMPLES_PENDING_REVISION_TESTINGGROUPFQ:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            samplePendingRevisionTheTestingGroupFQ: action.DATA,
        }  
    case SAMPLES_PENDING_REVISION_TESTINGGROUPMB:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            samplePendingRevisionTheTestingGroupMB: action.DATA,
        }  
        
    case SAMPLES_ANALYSIS_PENDING_REVISION_FQ:
        //console.log('proc-deploy_reducers.SAMPLES_ANALYSIS_PENDING_REVISION_FQ', action);
        return {
            ...state,        
            samplesAnalysisPendingRevisionFQ: action.DATA,
        }  
    case SAMPLES_ANALYSIS_PENDING_REVISION_MB:
        //console.log('proc-deploy_reducers.SAMPLES_ANALYSIS_PENDING_REVISION_MB', action);
        return {
            ...state,        
            samplesAnalysisPendingRevisionMB: action.DATA,
        }  
            
    case SAMPLES_PENDING_SAMPLE_REVISION:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            samplePendingSampleRevision: action.DATA,
        }  
    case ALL_SAMPLES_STAGE_SAMPLING:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allSamplesStageSampling: action.DATA,
        }  
    case ALL_SAMPLES_STAGE_INCUBATION1:
            //console.log('proc-deploy_reducers.programs', action);
            return {
                ...state,        
                allSamplesStageIncubation1: action.DATA,
            }  
    case ALL_SAMPLES_STAGE_INCUBATION2:
            //console.log('proc-deploy_reducers.programs', action);
            return {
                ...state,        
                allSamplesStageIncubation2: action.DATA,
            }              
    case ALL_SAMPLES_STAGE_PLATEREADING:
            //console.log('proc-deploy_reducers.programs', action);
            return {
                ...state,        
                allSamplesStagePlateReading: action.DATA,
            }  
    case ALL_SAMPLES_STAGE_MICROORGANISM:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allSamplesStageMicroorganism: action.DATA,
        }  
    case ALL_PERSON_SAMPLES_STAGE_SAMPLING:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allPersonSamplesStageSampling: action.DATA,
        }  
    case ALL_PERSON_SAMPLES_STAGE_PLATEREADING:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allPersonSamplesStagePlateReading: action.DATA,
        }  
    case ALL_PERSON_SAMPLES_STAGE_MICROORGANISM:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            allPersonSamplesStageMicroorganism: action.DATA,
        }  
    case MICROORGANISM_LIST:
            //console.log('proc-deploy_reducers.programs', action);
            return {
                ...state,        
                microorganismList: action.DATA,
            }  
    case OBJECT_BROWSER_ADD:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,
            sampleBrowserSamplesList: [
                ...state.sampleBrowserSamplesList,
                action.DATA           
              ]            
        }  
    case SELECT_BROWSER_SAMPLE_OBJECT:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            browserSelectedSample: action.DATA,
        }  
    case SELECT_BROWSER_PRODLOT_OBJECT:
        //console.log('proc-deploy_reducers.programs', action);
        return {
            ...state,        
            browserSelectedProdLot: action.DATA,
        }         

    case SAMPLE_TEMPLATES:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        sampleTemplates: action.DATA,
    }
    case UNRECEIVED_SAMPLES_LIST:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        unReceivedSamples: action.DATA,
    }   
    case RECEIVED_SAMPLES_IN_SESSION:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        //tabIndex: state.tabIndex + 1,
        receivedSamplesInSession: [
          ...state.receivedSamplesInSession,
          action.data           
        ]        
    }        
    case FOR_RESULTS_SAMPLES_LIST:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        forResultsSamples: action.DATA,
    }    
    case FOR_RESULTS_SAMPLES_CUSTODIAN_LIST:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        forResultsSamplesCustodian: action.DATA,
    }    
    case FOR_RESULTS_SAMPLES_CANDIDATE_LIST:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        forResultsSamplesCandidate: action.DATA,
    }    
    case FOR_REVISION_SAMPLES_LIST:
    //console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        forRevisionSamples: action.DATA,
    }    
    case ANALYSIS_LIST:
//    console.log('process-us_reducers.sampleTemplates', action);
    return {
        ...state,        
        analysisList: action.DATA,
    }
    case GIVEN_SAMPLE_ANALYSIS_LIST:
//    console.log('process-us_reducers.GIVEN_SAMPLE_ANALYSIS_LIST', action);
    return {
        ...state,        
        givenSampleAnalysisList: action.DATA,
    }    
    case GIVEN_SAMPLE_ANALYSIS_RESULT_LIST:
//    console.log('process-us_reducers.GIVEN_SAMPLE_ANALYSIS_RESULT_LIST', action);
    return {
        ...state,        
        givenSampleAnalysisResultEntryList: action.DATA,
    }    
    case COC_SAMPLE_HISTORY:
//    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
    return {
        ...state,        
        cocSampleHistory: action.DATA,
    }
    case COC_USERS_LIST:
//    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
    return {
        ...state,        
        cocUsersList: action.DATA,
    }
    case GET_SAMPLE_AUDIT:
//    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
    return {
        ...state,        
        sampleAudit: action.DATA,
    }            
    case SAMPLE_STATS_COUNTER_BY_STAGE:
        //    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
        return {
            ...state,        
            sampleStatsCounterByStage: action.DATA
        }       
    case SAMPLE_STATS_LAST_N_RESULTS:
        //    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
        return {
            ...state,        
            sampleStatsLastNresults: action.DATA
        }       
    case KPIS:
        //    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
        return {
            ...state,        
            kpis: action.DATA
        }       
    default:
      return state;  
    }   
}

export default procDeployReducer;


