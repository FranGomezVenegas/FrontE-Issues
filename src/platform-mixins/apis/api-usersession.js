import {backendUrl, appHeaderListApiUrl} from '../../config/platform/logic/api-config'
import {store} from '../../store';
import {userInfo} from '../../elements/platformComponents/Redux/actions/app_actions';
import {ToastMethods} from './../../platform-mixins/functions/toast-methods'
import {ApiSettings} from './api-settings';
import {dbName} from '../../config/platform/logic/platform-config';
//import { addNotification  } from '../elements/platformComponents/Redux/actions/notifications_actions';
//import {platformHeader_personFieldsName} from '../../elements/platformComponents/MainView/Headers/platform-header-settings';
/**
 * @mixinFunction
 * @polymer
 */

export const UserSession = superClass => class extends ToastMethods(ApiSettings(superClass)) {

getAPIPlatformHeader(data) {
    if (!data.finalToken){ return;}
    var platformHeader_personFieldsName="";
    var actionName='getAppHeader';
    var apiUrl=backendUrl+appHeaderListApiUrl+"?"; 
    apiUrl=apiUrl+'actionName='+actionName+'&finalToken='+data.finalToken+'&dbName='+dbName;
    if (!platformHeader_personFieldsName && platformHeader_personFieldsName.length>0){
        apiUrl=apiUrl+'&personFieldsName='+platformHeader_personFieldsName;        
    }    
    axios.get(apiUrl)        
    .then( response => {
        if(response.status == 200) {
            store.dispatch(userInfo(response.data));   
            return;
        }else{
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            return;
        }
    })    
    .catch(error => {
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
        return;
    })
    .then(function () {
    });
}
}

