import {USER_OPEN_INCIDENTS, SELECTED_USER_INCIDENT_DETAIL} from '../actions/incidents_actions';

const INITIAL_STATE = {
    userOpenIncidents: [],
    selectedUserIncidentDetail: [],
}

const incidentsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_OPEN_INCIDENTS:
//        console.log( incidentsReducer >> ', action.type, action);
        return {
            ...state,        
            userOpenIncidents: action.DATA,
        }
    case SELECTED_USER_INCIDENT_DETAIL:
//        console.log( incidentsReducer >> ', action.type, action);
        return {
            ...state,        
            selectedUserIncidentDetail: action.DATA,
        }        
    default:
      return state;
  }
}

export default incidentsReducer;

