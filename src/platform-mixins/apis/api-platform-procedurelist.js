import {backendUrl, appProcedureListApiUrl} from '../../config/platform/logic/api-config'
import {store} from '../../store';
import {tokenMixin} from '../store/token-mixin'
import {ToastMethods} from '../functions/toast-methods'
import {setAppProcedureList} from '../../elements/platformComponents/Redux/actions/app_actions';
import {ApiSettings} from './api-settings';
import {dbName} from '../../config/platform/logic/platform-config';
/**
 * @mixinFunction
 * @polymer
 */
export const ProcedureList = (superClass) => class extends ApiSettings(ToastMethods(tokenMixin(superClass))) {
    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }   
getProcedureList(data) {
  var endpoints_returningError=this.endpoints_returningError();
  if (data && data.finalToken){
    var finalToken=data.finalToken; 
  }else{
    var finalToken=this.getFinalToken();
  }
  if (!finalToken){return;}
  var apiUrl=backendUrl+appProcedureListApiUrl; 
  if (!finalToken){ return;}
    axios.get(apiUrl, {        
      params: {'finalToken': finalToken, 'dbName': dbName}
    })
    .then( response => {
      if(response.status == 200) {
          store.dispatch(setAppProcedureList(response.data));
          if (data && data.callBackFunction){data.callBackFunction();}
          if (data && data.callBackFunction2){data.callBackFunction2();}
          return;
      }
      if (data && data.callBackFunctionError){data.callBackFunctionError();}
      this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
    })
    .catch(error => {
        if (data && data.callBackFunctionError){data.callBackFunctionError();}
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
    })
    .then(function () {
        });
}
}