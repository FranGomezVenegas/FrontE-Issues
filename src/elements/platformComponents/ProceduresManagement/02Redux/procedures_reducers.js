import {
    GET_PROCEDURES_LIST, SET_SELECTED_PROCEDURE
} from './procedures_actions.js';

const INITIAL_STATE = {

    procedures: []
    , selectedProcedureName: ''
    , selectedProcedure: []

}

const EmDemoAReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {    
    case GET_PROCEDURES_LIST:
    //    console.log('procedures_reducers.GET_PROCEDURES_LIST', action);
        return {
            ...state,    
            procedures: action.DATA,
        }
    case SET_SELECTED_PROCEDURE:
    //    console.log('procedures_reducers.SET_SELECTED_PROCEDURE', action);
        return {
            ...state,    
            selectedProcedureName: action.DATA.name,    
            selectedProcedure: action.DATA,
        }        
    default:
      return state;  
    }   
}

export default EmDemoAReducer;


