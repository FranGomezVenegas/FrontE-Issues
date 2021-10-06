import {schema_name} from '../03config/config-process';
var schemaName=schema_name.replace('-','_');

export const PROGRAMS = 'PROGRAMS'+schemaName;
export const SELECTED_PROGRAM = 'SELECTED_PROGRAM'+schemaName;
export const SELECTED_SAMPLING_POINT = 'SELECTED_SAMPLING_POINT'+schemaName;
export const SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST = 'SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST'+schemaName;

export const GET_ALL_INCUBATORS = 'GET_ALL_INCUBATORS'+schemaName;
export const SET_SELECTED_INCUBATOR = 'SET_SELECTED_INCUBATOR'+schemaName;

export const GET_ACTIVE_BATCHES = 'GET_ACTIVE_BATCHES'+schemaName;
export const SET_SELECTED_BATCH = 'SET_SELECTED_BATCH'+schemaName;

export const ALL_PROGRAMS_UNRECEIVED_SAMPLES = 'ALL_PROGRAMS_UNRECEIVED_SAMPLES'+schemaName;
export const ACTIVE_PRODUCTION_LOTS = 'ACTIVE_PRODUCTION_LOTS'+schemaName;

export const OPEN_INVESTIGATIONS = 'OPEN_INVESTIGATIONS'+schemaName;
export const INVESTIGATION_RESULTS_PENDING_DECISION = 'INVESTIGATION_RESULTS_PENDING_DECISION'+schemaName;

export const ALL_SAVED_QUERIES = 'ALL_SAVED_QUERIES'+schemaName;

export const SAMPLE_STATS_COUNTER_BY_STAGE = 'SAMPLE_STATS_COUNTER_BY_STAGE'+schemaName;
export const SAMPLE_STATS_LAST_N_RESULTS = 'SAMPLE_STATS_LAST_N_RESULTS'+schemaName;


export const SAMPLES_IN_SAMPLING = 'SAMPLES_IN_SAMPLING'+schemaName;
export const SAMPLES_IN_PROGRESS_FQ = 'SAMPLES_IN_PROGRESS_FQ'+schemaName;
export const SAMPLES_IN_PROGRESS_MB = 'SAMPLES_IN_PROGRESS_MB'+schemaName;
export const SAMPLES_PENDING_REVISION_TESTINGGROUPFQ = 'SAMPLES_PENDING_REVISION_TESTINGGROUPFQ'+schemaName;
export const SAMPLES_PENDING_REVISION_TESTINGGROUPMB = 'SAMPLES_PENDING_REVISION_TESTINGGROUPMB'+schemaName;

export const SAMPLES_ANALYSIS_PENDING_REVISION_FQ = 'SAMPLES_ANALYSIS_PENDING_REVISION_FQ'+schemaName;
export const SAMPLES_ANALYSIS_PENDING_REVISION_MB = 'SAMPLES_ANALYSIS_PENDING_REVISION_MB'+schemaName;
export const SAMPLES_PENDING_SAMPLE_REVISION = 'SAMPLES_PENDING_SAMPLE_REVISION'+schemaName;


export const ALL_SAMPLES_STAGE_SAMPLING = 'ALL_SAMPLES_STAGE_SAMPLING'+schemaName;
export const ALL_SAMPLES_STAGE_INCUBATION1 = 'ALL_SAMPLES_STAGE_INCUBATION1'+schemaName;
export const ALL_SAMPLES_STAGE_INCUBATION2 = 'ALL_SAMPLES_STAGE_INCUBATION2'+schemaName;
export const ALL_SAMPLES_STAGE_PLATEREADING = 'ALL_SAMPLES_STAGE_PLATEREADING'+schemaName;
export const ALL_SAMPLES_STAGE_MICROORGANISM = 'ALL_SAMPLES_STAGE_MICROORGANISM'+schemaName;

export const ALL_PERSON_SAMPLES_STAGE_SAMPLING = 'ALL_PERSON_SAMPLES_STAGE_SAMPLING'+schemaName;
export const ALL_PERSON_SAMPLES_STAGE_PLATEREADING = 'ALL_PERSON_SAMPLES_STAGE_PLATEREADING'+schemaName;
export const ALL_PERSON_SAMPLES_STAGE_MICROORGANISM = 'ALL_PERSON_SAMPLES_STAGE_MICROORGANISM'+schemaName;

export const MICROORGANISM_LIST = 'MICROORGANISM_LIST'+schemaName;
export const GET_SAMPLE_AUDIT = 'GET_SAMPLE_AUDIT'+schemaName;

export const OBJECT_BROWSER_ADD = 'OBJECT_BROWSER_ADD'+schemaName;
export const SELECT_BROWSER_SAMPLE_OBJECT = 'SELECT_BROWSER_SAMPLE_OBJECT'+schemaName;
export const SELECT_BROWSER_PRODLOT_OBJECT = 'SELECT_BROWSER_PRODLOT_OBJECT'+schemaName;
export const DATAMINING_QUERY_OUTPUT = 'DATAMINING_QUERY_OUTPUT'+schemaName;
export const KPIS = 'KPIS'+schemaName;

export function getSampleAudit(data) {
  //console.log('proc-deploy_actions.getPrograms', data);
  return {
    type: GET_SAMPLE_AUDIT,
    DATA: data
  }
}
export function getPrograms(data) {
  //console.log('proc-deploy_actions.getPrograms', data);
  return {
    type: PROGRAMS,
    DATA: data
  }
}
export function setSelectedProgram(data) {
  //console.log('proc-deploy_actions.setSelectedProgram', data);
  return {
    type: SELECTED_PROGRAM,
    DATA: data
  }
}
export function getAllIncubators(data) {
  //console.log('proc-deploy_actions.getAllIncubators', data);
  return {
    type: GET_ALL_INCUBATORS,
    DATA: data
  }
}
export function setSelectedIncubator(data) {
  //console.log('proc-deploy_actions.setSelectedProgram', data);
  return {
    type: SET_SELECTED_INCUBATOR,
    DATA: data
  }
}
export function getActiveBatches(data) {
  //console.log('proc-deploy_actions.getActiveBatches', data);
  return {
    type: GET_ACTIVE_BATCHES,
    DATA: data
  }
}
export function setSelectedBatch(data) {
  //console.log('proc-deploy_actions.setSelectedBatch', data);
  return {
    type: SET_SELECTED_BATCH,
    DATA: data
  }
}

export function selectedProgramCorrectiveActionList(data) {
  //console.log('proc-deploy_actions.selectedProgramCorrectiveActionList', data);
  return {
    type: SELECTED_PROGRAMS_CORRECTIVE_ACTION_LIST,
    DATA: data
  }
}
export function setSelectedSamplingPoint(data) {
  //console.log('proc-deploy_actions.setSelectedProgram', data);
  return {
    type: SELECTED_SAMPLING_POINT,
    DATA: data
  }  
}

export function getActiveProductionLots(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ACTIVE_PRODUCTION_LOTS,
    DATA: data
  }  
}

export function getOpenInvestigations(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: OPEN_INVESTIGATIONS,
    DATA: data
  }  
}

export function getInvestigationResultsPendingDecision(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: INVESTIGATION_RESULTS_PENDING_DECISION,
    DATA: data
  }  
}

export function setDataMiningQueryOutput(data) {
  //console.log('em-demo-a_actions.getBrowserProdLotData', data);
  return {
    type: DATAMINING_QUERY_OUTPUT,
    DATA: data
  }  
} 

export function setAllSavedQueries(data) {
  //console.log('em-demo-a_actions.getBrowserProdLotData', data);
  return {
    type: ALL_SAVED_QUERIES,
    DATA: data
  }  
}



export function getAllProgramsUnreceivedSamples(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_PROGRAMS_UNRECEIVED_SAMPLES,
    DATA: data
  }  
}

export function getSamplesInSampling(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: SAMPLES_IN_SAMPLING,
    DATA: data
  }  
}
export function getSamplesInProgressFQ(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: SAMPLES_IN_PROGRESS_FQ,
    DATA: data
  }  
}
export function getSamplesInProgressMB(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: SAMPLES_IN_PROGRESS_MB,
    DATA: data
  }  
}

export function getSamplesPendingRevisionTestingGroupFQ(data) {
  //console.log('proc-deploy_actions.getSamplesPendingRevisionTestingGroupFQ', data);
  return { 
    type: SAMPLES_PENDING_REVISION_TESTINGGROUPFQ,
    DATA: data
  }  
}
export function getSamplesPendingRevisionTestingGroupMB(data) {
  //console.log('proc-deploy_actions.getSamplesPendingRevisionTestingGroupMB', data);
  return {
    type: SAMPLES_PENDING_REVISION_TESTINGGROUPMB,
    DATA: data
  }  
}
export function getSamplesAnalysisPendingRevisionFQ(data) {
  //console.log('proc-deploy_actions.getSamplesAnalysisPendingRevisionFQ', data);
  return {
    type: SAMPLES_ANALYSIS_PENDING_REVISION_FQ,
    DATA: data
  }  
}
export function getSamplesAnalysisPendingRevisionMB(data) {
  //console.log('proc-deploy_actions.getSamplesAnalysisPendingRevisionMB', data);
  return {
    type: SAMPLES_ANALYSIS_PENDING_REVISION_MB,
    DATA: data
  }  
}
export function getSamplesPendingSampleRevision(data) {
  //console.log('proc-deploy_actions.getSamplesPendingSampleRevision', data);
  return {
    type: SAMPLES_PENDING_SAMPLE_REVISION,
    DATA: data
  }  
}





export function getAllSamplesStageSampling(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_SAMPLES_STAGE_SAMPLING,
    DATA: data
  }  
}
export function getAllSamplesStageIncubation1(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_SAMPLES_STAGE_INCUBATION1,
    DATA: data
  }  
}
export function getAllSamplesStageIncubation2(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_SAMPLES_STAGE_INCUBATION2,
    DATA: data
  }  
}
export function getAllSamplesStagePlateReading(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_SAMPLES_STAGE_PLATEREADING,
    DATA: data
  }  
}
export function getAllSamplesStageMicroorganism(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_SAMPLES_STAGE_MICROORGANISM,
    DATA: data
  }  
} 
export function getAllPersonSamplesStageSampling(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_PERSON_SAMPLES_STAGE_SAMPLING,
    DATA: data
  }  
}
export function getAllPersonSamplesStagePlateReading(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_PERSON_SAMPLES_STAGE_PLATEREADING,
    DATA: data
  }  
}
export function getAllPersonSamplesStageMicroorganism(data) {
  //console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: ALL_PERSON_SAMPLES_STAGE_MICROORGANISM,
    DATA: data
  }  
} 
export function getMicroorganismList(data) {
  //console.log('proc-deploy_actions.getMicroorganismList', data);
  return {
    type: MICROORGANISM_LIST,
    DATA: data
  }  
}    
export function getBrowserSampleData(data) {
  console.log('proc-deploy_actions.getAllProgramsUnreceivedSamples', data);
  return {
    type: SELECT_BROWSER_SAMPLE_OBJECT,
    DATA: data
  }  
}    
export function getBrowserProdLotData(data) {
  //console.log('proc-deploy_actions.getBrowserProdLotData', data);
  return {
    type: SELECT_BROWSER_PRODLOT_OBJECT,
    DATA: data
  }  
}  
export function setKPIs(data) {
  //console.log('proc-deploy_actions.getBrowserProdLotData', data);
  return {
    type: KPIS,
    DATA: data
  }  
} 
  


export const SAMPLE_TEMPLATES = 'SAMPLE_TEMPLATES'+schemaName;
export const UNRECEIVED_SAMPLES_LIST = 'UNRECEIVED_SAMPLES_LIST'+schemaName;
export const RECEIVED_SAMPLES_IN_SESSION = 'COC_USERS_LIST'+schemaName;
export const FOR_REVISION_SAMPLES_LIST = 'FOR_REVISION_SAMPLES_LIST'+schemaName;
export const FOR_RESULTS_SAMPLES_LIST = 'FOR_RESULTS_SAMPLES_LIST'+schemaName;
export const FOR_RESULTS_SAMPLES_CUSTODIAN_LIST = 'FOR_RESULTS_SAMPLES_CUSTODIAN_LIST'+schemaName;
export const FOR_RESULTS_SAMPLES_CANDIDATE_LIST = 'FOR_RESULTS_SAMPLES_CANDIDATE_LIST'+schemaName;
export const ANALYSIS_LIST = 'ANALYSIS_LIST'+schemaName;
export const GIVEN_SAMPLE_ANALYSIS_LIST = 'GIVEN_SAMPLE_ANALYSIS_LIST'+schemaName;
export const GIVEN_SAMPLE_ANALYSIS_RESULT_LIST = 'GIVEN_SAMPLE_ANALYSIS_RESULT_LIST'+schemaName;
export const COC_SAMPLE_HISTORY = 'COC_SAMPLE_HISTORY'+schemaName;
export const COC_USERS_LIST = 'COC_USERS_LIST'+schemaName;

export function getGivenCocUsersList(data) {
  //  console.log('process-us_actions.sampleTemplates', data);
    return {
      type: COC_USERS_LIST,
      DATA: data
    }
  }
export function getGivenSampleAnalysisResultEntry(data) {
  //  console.log('process-us_actions.sampleTemplates', data);
    return {
      type: GIVEN_SAMPLE_ANALYSIS_RESULT_LIST,
      DATA: data
    }
  }
export function givenSampleAnalysisList(data) {
  //  console.log('process-us_actions.sampleTemplates', data);
    return {
      type: GIVEN_SAMPLE_ANALYSIS_LIST,
      DATA: data
    }
  }
  
export function analysisAllList(data) {
//  console.log('process-us_actions.sampleTemplates', data);
  return {
    type: ANALYSIS_LIST,
    DATA: data
  }
}
  
export function sampleTemplates(data) {
//  console.log('process-us_actions.sampleTemplates', data);
  return {
    type: SAMPLE_TEMPLATES,
    DATA: data
  }
}

export function unReceivedSamples(data) {
//    console.log('process-us_actions.sampleTemplates', data);
    return {
      type: UNRECEIVED_SAMPLES_LIST,
      DATA: data
    }
  }

export function receivedSamplesInSession(data) {
//    console.log('process-us_actions.sampleTemplates', data);
    return {
      type: RECEIVED_SAMPLES_IN_SESSION,
      DATA: data
    }
  }
  

  export function forResultsSamples(data) {
//      console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return {
      type: FOR_RESULTS_SAMPLES_LIST,
      DATA: data
    }
  }
  export function forResultsSamplesCustodian(data) {
//      console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return {
      type: FOR_RESULTS_SAMPLES_CUSTODIAN_LIST,
      DATA: data
    }
  }
  export function forResultsSamplesCandidate(data) {
//      console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
    return {
      type: FOR_RESULTS_SAMPLES_CANDIDATE_LIST,
      DATA: data
    }
  }    
  export function givenCocSampleHistory(data) {
//        console.log('Redux.Actions >> process-us_actions.forResultsSamples', data);
        return {
          type: COC_SAMPLE_HISTORY,
          DATA: data
        }
      }    
    
  
  export function forRevisionSamples(data) {
//  console.log('process-us_actions.forRevisionSamples', data);
    return {
      type: FOR_REVISION_SAMPLES_LIST,
      DATA: data
    }
  }
  export function getSampleStatsCounterByStage(data) {
    //  console.log('process-us_actions.forRevisionSamples', data);
    return {
      type: SAMPLE_STATS_COUNTER_BY_STAGE,
      DATA: data
    }
  }  
  export function getSampleStatsLastNresults(data) {
    //  console.log('process-us_actions.forRevisionSamples', data);
    return {
      type: SAMPLE_STATS_LAST_N_RESULTS,
      DATA: data
    }
  }    
