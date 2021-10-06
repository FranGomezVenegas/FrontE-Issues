export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const DO_LOGOUT_NOTIFICATION = 'DO_LOGOUT_NOTIFICATION';

export function addNotification(notifObj) {
    //console.log('tab_actions.addTab', 'procedure', procedure);
    return {
      type: ADD_NOTIFICATION,   
      notifObj: notifObj,
    }
  }

export function doLogoutNotification() {
  //console.log('DoLogout');
  return {
    type: DO_LOGOUT_NOTIFICATION
  }
}  