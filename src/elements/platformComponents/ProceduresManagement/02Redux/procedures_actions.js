export const GET_PROCEDURES_LIST = 'GET_PROCEDURES_LIST';
export const SET_SELECTED_PROCEDURE = 'SET_SELECTED_PROCEDURE';

export function getProceduresList(data) {
  //console.log('em-demo-a_actions.getPrograms', data);
  return {
    type: GET_PROCEDURES_LIST,
    DATA: data
  }
}
export function setSelectedProcedure(data) {
  //console.log('em-demo-a_actions.getPrograms', data);
  return {
    type: SET_SELECTED_PROCEDURE,
    DATA: data
  }
}

