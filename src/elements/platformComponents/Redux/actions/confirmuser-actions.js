export const OPEN_CONFIRM_USER_DIALOG = 'OPEN_CONFIRM_USER_DIALOG';
export const CLOSE_CONFIRM_USER_DIALOG = 'CLOSE_CONFIRM_USER_DIALOG';
export const CONFIRM_USER_SUCCESS = 'CONFIRM_USER_SUCCESS';
export const CONFIRM_USER_FAILURE = 'CONFIRM_USER_FAILURE';
export const RESET_AND_CLOSE_CONFIRM_USER_DIALOG = 'RESET_AND_CLOSE_CONFIRM_USER_DIALOG';


export const openConfirmUserDialog = (acceptedHandler, canceledHandler) => {
  return {
    type: OPEN_CONFIRM_USER_DIALOG,
    acceptedHandler,
    canceledHandler
  }
}
export const resetAndCloseConfirmUserDialog = (handler) => {
  return {
    type: RESET_AND_CLOSE_CONFIRM_USER_DIALOG,
  }
}
export const closeConfirmUserDialog = (handler) => {
  return {
    type: CLOSE_CONFIRM_USER_DIALOG,
  }
}
export const confirmUserSuccess = (note, usr, pw) => {
  return {
    type: CONFIRM_USER_SUCCESS,
    note: note,
    usr: usr,
    pw: pw
  }
}
export const confirmUserFailure = () => {
  return {
    type: CONFIRM_USER_FAILURE,
  }
}