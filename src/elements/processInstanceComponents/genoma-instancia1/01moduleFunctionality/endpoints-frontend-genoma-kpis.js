import {backendUrl, ApiEnvMonitStatsUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {dbName} from '../../../../config/platform/logic/platform-config';
import {
    setKPIs as setKPIs_em_demo_a,    
    } from '../02Redux/em-demo-a_actions';
    
/**
 * @mixinFunction
 * @polymer
 */

export const FrontendEndpointsEnvMonitKpis = (superClass) => class extends (ApiSettings(ToastMethods(tokenMixin(superClass)))) {    
    convertKPIDataArrayToParams(data){
        var newData={};
        var i;
        var objGroupName='';
        var tableCategory='';
        var tableName='';
        var whereFieldsName='';
        var whereFieldsValue='';
        var fieldsToRetrieveOrGrouping='';
        var dataGrouped='';
        for (i = 0; i < data.length; i++) { 
            objGroupName=objGroupName+data[i].objGroupName; 
            tableCategory=tableCategory+data[i].tableCategory; 
            tableName=tableName+data[i].tableName; 
            whereFieldsName=whereFieldsName+data[i].whereFieldsName; 
            whereFieldsValue=whereFieldsValue+data[i].whereFieldsValue;
            fieldsToRetrieveOrGrouping=fieldsToRetrieveOrGrouping+data[i].fieldsToRetrieveOrGrouping;
            dataGrouped=dataGrouped+data[i].dataGrouped;
            if (i<data.length-1){
                objGroupName=objGroupName+'/';
                tableCategory=tableCategory+'/';
                tableName=tableName+'/';
                whereFieldsName=whereFieldsName+'/';
                whereFieldsValue=whereFieldsValue+'/';
                fieldsToRetrieveOrGrouping=fieldsToRetrieveOrGrouping+'/';
                dataGrouped=dataGrouped+'/'; 
            }
        }
        newData.objGroupName=objGroupName;
        newData.tableCategory=tableCategory;
        newData.tableName=tableName;
        newData.whereFieldsName=whereFieldsName;
        newData.whereFieldsValue=whereFieldsValue;
        newData.fieldsToRetrieveOrGrouping=fieldsToRetrieveOrGrouping;
        newData.dataGrouped=dataGrouped;
        return newData;
    }
    
    setKPIs(data) {
        var newData=this.convertKPIDataArrayToParams(data)
        var apiUrl=backendUrl+ApiEnvMonitStatsUrl; 
        //console.log('getGivenSampleAnalysisResultEntry', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}
        axios.get(apiUrl, {        
            params: {
                'procInstanceName':schema_name, 'dbName':dbName, 
                'actionName':'KPIS', 'finalToken':this.getFinalToken(), 
                'objGroupName':newData.objGroupName, 'dataGrouped': newData.dataGrouped, 
                'tableCategory':newData.tableCategory, 'tableName': newData.tableName, 
                'whereFieldsName':newData.whereFieldsName, 'whereFieldsValue': newData.whereFieldsValue, 
                'fieldsToRetrieveOrGrouping':newData.fieldsToRetrieveOrGrouping, 
            }
        })
        .then( response => {
            if(response.status == 200) {
                //console.log(response.data);
                store.dispatch(setKPIs_em_demo_a(response.data));
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