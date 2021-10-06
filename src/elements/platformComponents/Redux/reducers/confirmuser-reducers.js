import {OPEN_CONFIRM_USER_DIALOG, RESET_AND_CLOSE_CONFIRM_USER_DIALOG, CLOSE_CONFIRM_USER_DIALOG, CONFIRM_USER_SUCCESS, CONFIRM_USER_FAILURE
 } from '../actions/confirmuser-actions';

const INITIAL_STATE = {
  confirmUserDialogOpened: false,
  acceptedHandler: null,
  canceledHandler: null,
  userConfirmed: false,
  numConfirmations: 0,
  numAttempts: 0,
  maximumFailures:3,  
  pwToCheck: '',
  note: '',
  user:'',
  userPw:''
}

const confirmUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CONFIRM_USER_DIALOG:
      //console.log('estoy en el case OPEN_CONFIRM_USER_DIALOG', action);
      return {
        ...state,
        confirmUserDialogOpened: true,
        userConfirmed: false,
        maximumFailures: state.maximumFailures,
        pwToCheck: '',
        note: '',
        acceptedHandler: action.acceptedHandler,
        canceledHandler: action.canceledHandler
      };     
    case RESET_AND_CLOSE_CONFIRM_USER_DIALOG:
      //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
      return {
        ...state,
        numAttempts: 0,
        confirmUserDialogOpened: false,
        userConfirmed: false,
        note: '',
        pwToCheck: '',
        acceptedHandler: null
      };           
    case CLOSE_CONFIRM_USER_DIALOG:
      //console.log('estoy en el case CLEAN_CONFIRM_USER_DIALOG', action);
      return {
        ...state,
        confirmUserDialogOpened: false,
        userConfirmed: false,
        acceptedHandler: null
      };
    case CONFIRM_USER_SUCCESS:
      return {
        ...state,
        userConfirmed: true,
        numConfirmations: state.numConfirmations + 1,
        numAttempts: 0,
        note: action.note,
        pwToCheck: 'foooooo segundo!!',
        user: action.usr,
        userPw: action.pw
      }
    case CONFIRM_USER_FAILURE:
      return {
        ...state,
        userConfirmed: true,
        numAttempts: state.numAttempts + 1,
        text: 'foooooo segundo!!'
      }
    default:
      return state;
  }
}
export default confirmUserReducer;