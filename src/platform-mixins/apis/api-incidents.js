import {backendUrl, ApiIncidentsUrl} from '../../config/platform/logic/api-config';
import {store} from '../../store';
import { addNotification  } from '../../elements/platformComponents/Redux/actions/notifications_actions';
import {ToastMethods} from '../functions/toast-methods';
import {ApiSettings} from './api-settings';
import {tokenMixin} from '../store/token-mixin';
import {dbName} from '../../config/platform/logic/platform-config';
/**
 * @mixinFunction
 * @polymer
 */
export const ApiIncidents = (superClass) => class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {

incidentsEndPoint(data) {
    var endpoints_returningError=this.endpoints_returningError();
    var finalToken=this.getFinalToken(); 
    var apiUrl=backendUrl+ApiIncidentsUrl+"?"+"finalToken="+finalToken+"&"+"dbName="+dbName;
    if (data.paramsUrl){
        apiUrl=apiUrl+"&"+data.paramsUrl; }
    axios({method:'post', url:apiUrl
        , //data:JSON.stringify({firstName: 'Finn', lastName: 'Williams' })
        })
    .then( response => {
        if(response.status == 200) {
            store.dispatch(addNotification(response.data));
            this.toastSuccessMessage(response.data);            
            if (data.callBackFunction){data.callBackFunction();}
            return;
        }
        if (data.callBackFunctionError){data.callBackFunctionError();}      
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
        return;        
    })    
    .catch(error => {
        if (data.callBackFunctionError){data.callBackFunctionError();}
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
        store.dispatch(addNotification({
            notificationName: data.procInstanceName+'.'+data.actionName,
            label_en: error.message, 
            label_es: error.message, 
            diagnoses: 'ERROR'
        }));        
        return;
    })
    .then(function () {
    });
    }
}