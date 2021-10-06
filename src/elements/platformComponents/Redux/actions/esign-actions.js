export const OPEN_ESIGN_DIALOG = 'OPEN_ESIGN_DIALOG';
export const CLOSE_ESIGN_DIALOG = 'CLOSE_ESIGN_DIALOG';
export const ESIGN_SUCCESS = 'ESIGN_SUCCESS';
export const ESIGN_FAILURE = 'ESIGN_FAILURE';
export const RESET_AND_CLOSE_ESIGN_DIALOG = 'RESET_AND_CLOSE_ESIGN_DIALOG';

export const openEsignDialog = (acceptedHandler, canceledHandler) => {
  //console.log('esign-actions >> openEsignDialog');
  return {
    type: OPEN_ESIGN_DIALOG,
    acceptedHandler: acceptedHandler,
    canceledHandler: canceledHandler
  }
}
export const closeEsignDialog = (handler) => {
  return {
    type: CLOSE_ESIGN_DIALOG,
  }
}
export const resetAndCloseEsignDialog = (handler) => {
  return {
    type: RESET_AND_CLOSE_ESIGN_DIALOG,
  }
}
export const esignSuccess = (data) => {
  return {
    type: ESIGN_SUCCESS,
    phrase: data.phrase
  }
}
export const esignFailure = () => {
  return {
    type: ESIGN_FAILURE,
  }
}
