import {emdemoa_marc, genoma1} from './sessionFakes';
export const backendUrlLocal='http://localhost:8080/LabPLANET-API'; //rR6ICitv
export const backendUrl='http://51.75.202.142:8888/LabPLANET-API';

export const autoLogin={
    enable:false,
    // Si importamos sessionFakes entonces descomentar este bloque. Inicio
    userName:emdemoa_marc.app.user.userName,
    pw:emdemoa_marc.app.user.pw,
    role:emdemoa_marc.app.user.role,
    sessionJson: emdemoa_marc,
    // Si importamos sessionFakes entonces descomentar este bloque. Fin

    // userName:genoma1.app.user.userName,
    // pw:genoma1.app.user.pw,
    // role:genoma1.app.user.role,
    // sessionJson: genoma1,
}

export const appProcedureListApiUrl='/frontend/AppProcedureListAPI';
export const appAuthenticateApiUrl='/frontend/AuthenticationAPI';
export const appHeaderListApiUrl='/frontend/AppHeaderAPI';

export const ApiSopUserUrl='/app/SopUserAPI';
export const frontEndSopUrl='/frontend/SopUserAPIfrontend';
export const ApiIncidentsUrl='/app/IncidentAPI';
export const frontEndIncidentsUrl='/frontend/IncidentAPIfrontend';
export const frontEndVideoTutorialsUrl='/frontend/VideoTutorialAPIfrontend';
export const ApiInvestigationUrl='/app/InvestigationAPI';
export const frontEndInvestigationUrl='/frontend/InvestigationAPIfrontend';
export const ApiSavedQueriesUrl='/app/SavedQueriesAPI';
export const frontEndSavedQueriesUrl='/frontend/SavedQueriesAPIfrontend';

export const ApiProcedureDefinition='/app/ProcedureDefinitionAPI';
export const frontEndProcedureDefinition='/frontend/ProcedureDefinitionfrontend';

export const ApiSampleUrl='/modulesample/SampleAPI';
export const frontEndSampleUrl='/frontend/SampleAPIfrontEnd';
export const ApiModulesConfigMasterDataUrl='/modules/ConfigMasterData';

export const ApiEnvMonitUrl='/moduleenvmon/EnvMonAPI';
export const ApiEnvMonitStatsUrl='/moduleenvmon/EnvMonAPIstats';
export const frontEndEnvMonitUrl='/moduleenvmon/frontend/EnvMonAPIfrontend';
export const ApiEnvMonitSampleUrl='/moduleenvmon/EnvMonSampleAPI';
export const frontEndEnvMonitSampleUrl='/moduleenvmon/frontend/EnvMonSampleAPIfrontend';
export const ApiEnvMonitProdLotUrl='/moduleenvmon/EnvMonProdLotAPI';
export const ApiEnvMonitIncubationUrl='/moduleenvmon/EnvMonIncubationAPI';
export const frontEndEnvMonitIncubationUrl='/moduleenvmon/frontend/EnvMonIncubationAPIfrontend';
export const ApiEnvMonitIncubBatchUrl='/moduleenvmon/EnvMonIncubBatchAPI';
export const frontEndEnvMonitIncubBatchUrl='/moduleenvmon/frontend/EnvMonIncubBatchAPIfrontend';

export const ApiGenomaProjectUrl='/modulegenoma/ProjectAPI';
export const frontEndGenomaProjectUrl='/modulegenoma/GenomaStudyAPIFrontend';
export const ApiGenomaStudyUrl='/modulegenoma/GenomaStudyAPI';
export const ApiGenomaStudyObjectsVariablesUrl='/modulegenoma/GenomaStudyObjectsVariablesAPI';

export const ApiInspLotRMUrl='/moduleinsplotrm/InspLotRMAPI';

export const systemTabContentUrl='../../01-main-views/';
export const tabContentUrl='../../../../elements/processInstanceComponents/#ModuleName/04procedure/#PageName.js';