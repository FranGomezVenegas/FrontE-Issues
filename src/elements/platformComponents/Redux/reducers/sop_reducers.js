import {USER_ALL_SOP, USER_PENDING_SOP, PROCEDURE_SOPS} from '../actions/sop_actions';

const INITIAL_STATE = {
    userName:'' 
    ,userAllSop: []
    ,userPendingSop: []
    ,procedureSops: []    
}

const sopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_ALL_SOP:
//        console.log('sopReducer >> ', action.type, action);
        return {
            ...state,        
            userAllSop: action.DATA,
        }
    case USER_PENDING_SOP:
        //console.log('process-us_reducers.sampleTemplates', action);
        return {
            ...state,        
            userPendingSop: action.DATA,
        }            
    case PROCEDURE_SOPS:
        //console.log('process-us_reducers.sampleTemplates', action);
        return {
            ...state,        
            procedureSops: action.DATA,
        }    
    default:
      return state;
  }
}

export default sopReducer;

