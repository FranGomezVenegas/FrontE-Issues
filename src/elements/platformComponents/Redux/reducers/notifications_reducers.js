import {ADD_NOTIFICATION, DO_LOGOUT_NOTIFICATION} from '../actions/notifications_actions.js';
import {sessionLogoutInterval} from '../../../../platform-mixins/functions/session-methods';
import {secondsNextTimeChecker} from './../../../../config/platform/logic/platform-config';  
const InitialNotificationState = {
  notifications: [],
  totalNotifications: 0,
  lastNotificationDate: new Date().getTime(),    
};

const notificationsReducer = (state = InitialNotificationState, action) => {
  //var sMeth= new SessionMethods();
  switch(action.type) {
    case ADD_NOTIFICATION:
      //console.log('SetInterval ADD_NOTIFICATION');
      clearInterval();
      setInterval(() => {sessionLogoutInterval();}, secondsNextTimeChecker);
//      console.log('tab reducer', action);
      return {
        ...state,
        totalNotifications: state.totalNotifications + 1,
        lastNotificationDate: new Date().getTime(), 
        notifications: [
          ...state.notifications,
          [state.totalNotifications, action.notifObj]
          //,            notifId=state.totalNotifications            
        ]
      }
    case DO_LOGOUT_NOTIFICATION:
      return {
        notifications: [],
        totalNotifications: 0    
      }          
    default:
      return state;
  }
}
export default notificationsReducer;