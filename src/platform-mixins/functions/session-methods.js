import {store} from '../../store';
import { doLogout } from '../../elements/platformComponents/Redux/actions/app_actions';
import { doLogoutNotification } from '../../elements/platformComponents/Redux/actions/notifications_actions';
import { doLogoutTab} from  '../../elements/platformComponents/Redux/actions/tabs_actions';
import {appLogOut_logOutMessage, minsLockSession, minsLogoutSession, enableLockSession, enableLogoutSession, showTimingInConsole, secondsNextTimeChecker} from '../../config/platform/logic/platform-config';
import {openConfirmUserDialog} from './../../elements/platformComponents/Redux/actions/confirmuser-actions';
import { addNotification  } from '../../elements/platformComponents/Redux/actions/notifications_actions';
import {ApiSettings} from '../apis/api-settings';
export const SessionMethods = (superClass) => class extends superClass {

    addNotification(notifObj){
        console.log('sessionMethods > addNotification > SetInterval ADD_NOTIFICATION');
        clearInterval();
        setInterval(sessionLogout(), secondsNextTimeChecker);  
        store.dispatch(addNotification(notifObj));    
    }

    sessionLogout(){
        console.log('sessionLogout');
        //var state=store.getState();  
        //var lang=state.app.user.appLanguage;
var lang="en";
            var message=''; 
            switch(lang){
                case 'es': message=appLogOut_logOutMessage.closedSession.message_es; break; //message=response.data.message_es; break;            
                default: message=appLogOut_logOutMessage.closedSession.message_en; break; //message=response.data.message_en; break;
            }        
            this.authenticated=true;
            this.dispatchEvent(new CustomEvent('toast-message', {
              bubbles: true,        composed: true,
              detail: message//'User valid, please select your role to proceed'
            }));       
            store.dispatch(doLogout(lang));
            store.dispatch(doLogoutTab());
            store.dispatch(doLogoutNotification());
    }
}
function sessionUnLocked(){
//    console.log('sessionUnLocked');
    clearInterval();
    store.dispatch(addNotification(appLogOut_logOutMessage.sessionUnlocked));    
    return;
}
export function sessionLogoutInterval(){    
    var state=store.getState();  
    if (state.notifications.lastNotificationDate==undefined){
        clearInterval();
        return;
    }
    var lastNotifDate = state.notifications.lastNotificationDate;
    var currentDate=new Date().getTime();
    var dif =currentDate-lastNotifDate;
    if (showTimingInConsole){
        console.log('sessionLogout. InactiveTime=', dif, 'lockSessionTime', minsLockSession*60000, 'logoutSession', minsLogoutSession*60000);
    }
    if (enableLockSession && dif > (minsLockSession*60000) && dif < (minsLogoutSession*60000)){
        //alert('dif='+dif);
        if (state.notifications.lastNotificationDate==undefined){
            store.dispatch(openConfirmUserDialog(sessionUnLocked.bind(this) ,undefined));
            return;
        }else{
            store.dispatch(openConfirmUserDialog(sessionUnLocked.bind(this) ,undefined));
            return;
                //store.dispatch(doLogoutNotification());
        }
        clearInterval();
        setInterval(() => {sessionLogoutInterval();}, secondsNextTimeChecker);            
        return;
    }
    if (enableLogoutSession && dif > (minsLogoutSession*60000)){
        store.dispatch(doLogout(lang));
        store.dispatch(doLogoutTab());
        store.dispatch(doLogoutNotification());

//            clearInterval();
//            setInterval(() => {sessionLogoutInterval();}, secondsNextTimeChecker);            
        return;
    }
    //var lang=state.app.user.appLanguage;
    clearInterval();
    var lang="en";

    var message=''; 
    switch(lang){
        case 'es': message=appLogOut_logOutMessage.closedSession.message_es; break; //message=response.data.message_es; break;            
        default: message=appLogOut_logOutMessage.closedSession.message_en; break; //message=response.data.message_en; break;
    }        
    //this.authenticated=true;
    // this.dispatchEvent(new CustomEvent('toast-message', {
    //   bubbles: true,        composed: true,
    //   detail: message//'User valid, please select your role to proceed'
    // }));       
    // store.dispatch(doLogout(lang));
    // store.dispatch(doLogoutTab());
    // store.dispatch(doLogoutNotification());
}
