import {
    PROGRAMS, SELECTED_PROGRAM, SELECTED_SAMPLING_POINT, SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST,
    MICROORGANISM_LIST, SAMPLE_MICROORGANISM_LIST, GET_SAMPLE_AUDIT, ACTIVE_PRODUCTION_LOTS,
    
    ALL_SAMPLES_STAGE_SAMPLING, ALL_SAMPLES_STAGE_INCUBATION1, ALL_SAMPLES_STAGE_INCUBATION2, 
    ALL_SAMPLES_STAGE_PLATEREADING, ALL_SAMPLES_STAGE_MICROORGANISM,

    ALL_PERSON_SAMPLES_STAGE_SAMPLING, ALL_PERSON_SAMPLES_STAGE_PLATEREADING, ALL_PERSON_SAMPLES_STAGE_MICROORGANISM,
    
    SET_SELECTED_INCUBATOR, GET_ALL_INCUBATORS, SET_SELECTED_BATCH, GET_ACTIVE_BATCHES, GET_ACTIVE_BATCHES_BY_STAGE,

    ALL_PROGRAMS_UNRECEIVED_SAMPLES, SAMPLE_TEMPLATES, UNRECEIVED_SAMPLES_LIST, RECEIVED_SAMPLES_IN_SESSION, FOR_RESULTS_SAMPLES_LIST 
    , FOR_REVISION_SAMPLES_LIST, ANALYSIS_LIST, GIVEN_SAMPLE_ANALYSIS_LIST, GIVEN_SAMPLE_ANALYSIS_RESULT_LIST
    , FOR_RESULTS_SAMPLES_CUSTODIAN_LIST, FOR_RESULTS_SAMPLES_CANDIDATE_LIST, COC_SAMPLE_HISTORY, COC_USERS_LIST

    , OBJECT_BROWSER_ADD, SELECT_BROWSER_SAMPLE_OBJECT, SELECT_BROWSER_INCUBATOR_OBJECT, SELECT_BROWSER_BATCH_OBJECT, SELECT_BROWSER_PRODLOT_OBJECT
    , KPIS, DATAMINING_QUERY_OUTPUT, SAMPLE_STATS_COUNTER_BY_STAGE , SAMPLE_STATS_LAST_N_RESULTS
    , OPEN_INVESTIGATIONS, INVESTIGATION_RESULTS_PENDING_DECISION
    , ALL_SAVED_QUERIES
} from './em-demo-a_actions.js';

const INITIAL_STATE = {

    programs: []
    , selectedProgram: []
    , selectedProgramCorrectiveActions: []
    , selectedSamplingPoint: []
    , allIncubators:[]
    , selectedIncubator: []
    , allActiveBatches:[]
    , allActiveBatchesByStage:[]
    , selectedBatch: []
    , allProgramsUnreceivedSamples: []
    , microorganismList: []
    , sampleMicroorganismList: []
    , activeProductionLots:[]
    , openInvestigations:[]
    , investigationResultsPendingDecision:[]
    , allSavedQueries:[]
    
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
    , dataminingQueryOutput:[]
    , kpis:[]

    , sampleStatsCounterByStage:[]
    , sampleStatsLastNresults:[]
}

const EmDemoAReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PROGRAMS:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            programs: action.DATA,
        }
    case SELECTED_PROGRAM:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            selectedProgram: action.DATA,
        }    
    case SELECTED_SAMPLING_POINT:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            selectedSamplingPoint: action.DATA,
        }  
    case GET_ALL_INCUBATORS:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            allIncubators: action.DATA,
        } 
    case SET_SELECTED_INCUBATOR:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            selectedIncubator: action.DATA,
        } 
    case GET_ACTIVE_BATCHES:
        return {
            ...state,        
            allActiveBatches: action.DATA,    
        }
    case GET_ACTIVE_BATCHES_BY_STAGE:
        return {
            ...state,        
            allActiveBatchesByStage: action.DATA,    
        }
    case SET_SELECTED_BATCH:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            selectedBatch: action.DATA,
        } 
    case SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST:
        //console.log('em-demo-a_reducers.SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST', action);
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
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            allProgramsUnreceivedSamples: action.DATA,
        }  

    case ALL_SAMPLES_STAGE_SAMPLING:
            //console.log('em-demo-a_reducers.programs', action);
            return {
                ...state,        
                allSamplesStageSampling: action.DATA,
            }  
    case ALL_SAMPLES_STAGE_INCUBATION1:
            //console.log('em-demo-a_reducers.programs', action);
            return {
                ...state,        
                allSamplesStageIncubation1: action.DATA,
            }  
    case ALL_SAMPLES_STAGE_INCUBATION2:
            //console.log('em-demo-a_reducers.programs', action);
            return {
                ...state,        
                allSamplesStageIncubation2: action.DATA,
            }              
    case ALL_SAMPLES_STAGE_PLATEREADING:
            //console.log('em-demo-a_reducers.programs', action);
            return {
                ...state,        
                allSamplesStagePlateReading: action.DATA,
            }  
    case ALL_SAMPLES_STAGE_MICROORGANISM:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            allSamplesStageMicroorganism: action.DATA,
        }  
    case ALL_PERSON_SAMPLES_STAGE_SAMPLING:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            allPersonSamplesStageSampling: action.DATA,
        }  
    case ALL_PERSON_SAMPLES_STAGE_PLATEREADING:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            allPersonSamplesStagePlateReading: action.DATA,
        }  
    case ALL_PERSON_SAMPLES_STAGE_MICROORGANISM:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            allPersonSamplesStageMicroorganism: action.DATA,
        }  
    case MICROORGANISM_LIST:
            //console.log('em-demo-a_reducers.programs', action);
            return {
                ...state,        
                microorganismList: action.DATA,
            }  
    case SAMPLE_MICROORGANISM_LIST:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            sampleMicroorganismList: action.DATA,
        }  
    case OBJECT_BROWSER_ADD:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,
            sampleBrowserSamplesList: [
                ...state.sampleBrowserSamplesList,
                action.DATA           
              ]            
        }  
    case SELECT_BROWSER_SAMPLE_OBJECT:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            browserSelectedSample: action.DATA,
        }  
    case SELECT_BROWSER_INCUBATOR_OBJECT:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            browserSelectedIncubator: action.DATA,
        }  
    case SELECT_BROWSER_BATCH_OBJECT:
        //console.log('em-demo-a_reducers.programs', action);
        return {
            ...state,        
            browserSelectedBatch: action.DATA,
        }  
    case SELECT_BROWSER_PRODLOT_OBJECT:
        //console.log('em-demo-a_reducers.programs', action);
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
    case DATAMINING_QUERY_OUTPUT:
        //    console.log('process-us_reducers.COC_SAMPLE_HISTORY', action);
        return {
            ...state,        
            dataminingQueryOutput: action.DATA
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

export default EmDemoAReducer;


