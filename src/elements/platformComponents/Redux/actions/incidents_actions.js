export const USER_OPEN_INCIDENTS = 'USER_OPEN_INCIDENTS';
export const SELECTED_USER_INCIDENT_DETAIL = 'SELECTED_USER_INCIDENT_DETAIL';


export function userOpenIncidents(data) {
  //  console.log('process-us_actions.sampleTemplates', data);
    return {
      type: USER_OPEN_INCIDENTS,
      DATA: data
    }
}
export function selectedUserIncidentDetail(data) {
  //  console.log('process-us_actions.sampleTemplates', data);
    return {
      type: SELECTED_USER_INCIDENT_DETAIL,
      DATA: data
    }
}