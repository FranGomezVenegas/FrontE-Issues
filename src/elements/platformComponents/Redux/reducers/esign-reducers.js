import {OPEN_ESIGN_DIALOG, CLOSE_ESIGN_DIALOG, RESET_AND_CLOSE_ESIGN_DIALOG, ESIGN_SUCCESS, ESIGN_FAILURE} from '../actions/esign-actions';
import { dataTable } from '@google-web-components/google-chart/loader';

const INITIAL_STATE = {
  esignDialogOpened: false,
  esignConfirmed: false,
  acceptedHandler: null,
  canceledHandler: null,
  numAttempts: 0,
  maximumFailures:3,
  sgn:'',
  text: 'sdsdsds'
}

const esignReducer = (state = INITIAL_STATE, action) => {
  //console.log('esign-reducers >> esignReducer >> action=', action);
  switch (action.type) {
    case OPEN_ESIGN_DIALOG:
      //console.log('estoy en el case OPEN_ESIGN_DIALOG', action);
      return {
        ...state,
        esignDialogOpened: true,
        esignConfirmed: false,
        //numAttempts: 0,
        maximumFailures: state.maximumFailures,
        acceptedHandler: action.acceptedHandler,
        canceledHandler: action.canceledHandler
      };
    case CLOSE_ESIGN_DIALOG:
      //console.log('estoy en el case CLOSE_ESIGN_DIALOG', action);
      return {
        ...state,
        esignDialogOpened: false,
        esignConfirmed: false,
        acceptedHandler: null
      };
    case RESET_AND_CLOSE_ESIGN_DIALOG:
      //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
      return {
        ...state,
        numAttempts: 0,
        esignDialogOpened: false,
        esignConfirmed: false,
        acceptedHandler: null
      };       
    case ESIGN_SUCCESS:
      return {
        ...state,
        esignConfirmed: true,
        numAttempts: 0,
        sgn: action.phrase,
        text: 'foooooo segundo!!'
      }
    case ESIGN_FAILURE:
      return {
        ...state,
        esignConfirmed: true,
        numAttempts: state.numAttempts + 1,
        text: 'foooooo segundo!!'
      }
    default:
      return state;
  }
}
export default esignReducer;
