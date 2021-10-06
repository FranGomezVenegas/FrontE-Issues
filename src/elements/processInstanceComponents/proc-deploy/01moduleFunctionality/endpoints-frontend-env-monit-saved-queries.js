import {backendUrl, frontEndSavedQueriesUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {dbName} from '../../../../config/platform/logic/platform-config';
import {
    getBrowserSampleData as getBrowserSampleData_proc_deploy, 
    getBrowserProdLotData as getBrowserProdLotData_proc_deploy,
    getAllSavedQueries as getAllSavedQueries_proc_deploy} from '../02Redux/proc-deploy_actions';   
/**
 * @mixinFunction
 * @polymer
 */
export const FrontendEndpointsEnvMonitSavedQueries = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {          
    getAllSavedQueries(data, url) {
        var apiUrl=backendUrl+frontEndSavedQueriesUrl+'?'+url; 
        // console.log('getAllSavedQueries', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName,
                'actionName':'ALL_SAVED_QUERIES', 'finalToken':this.getFinalToken(), 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(getAllSavedQueries_proc_deploy(response.data));
                if (data && data.callBackFunction){data.callBackFunction();}
                return;
            }
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
            if (data && data.callBackFunctionError){data.callBackFunctionError()};
            return;
        })
        .catch(error => {
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }   
    
        
}