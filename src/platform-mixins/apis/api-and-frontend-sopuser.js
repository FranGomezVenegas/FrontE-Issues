import {backendUrl, ApiSopUserUrl, frontEndSopUrl} from '../../config/platform/logic/api-config';
import {store} from '../../store';
import {sopUserAllSop, sopUserPendingSop} from '../../config/platform/logic/sop-config';
import {tokenMixin} from '../store/token-mixin'
import {ToastMethods} from '../functions/toast-methods';
import {ApiSettings} from './api-settings';
import {ProcedureList} from '../apis/api-platform-procedurelist';
import { addNotification  } from '../../elements/platformComponents/Redux/actions/notifications_actions';
import{userAllSop, userPendingSop, procedureSops} from '../../elements/platformComponents/Redux/actions/sop_actions';
import {dbName} from '../../config/platform/logic/platform-config';
import {setAppProcedureList} from '../../elements/platformComponents/Redux/actions/app_actions';
/**
 * @mixinFunction
 * @polymer
 */
export const ApiAndFrontendSopUser = (superClass) => class extends ProcedureList(ApiSettings(ToastMethods(tokenMixin(superClass)))) {

fieldButtonClickedForSops(e) {
    //console.log('fieldButtonClickedForSops');
    if (!e.target.value.sop_name){
        this.toastErrorMessage(this.objectNotSelected());
        return;
    }          
    var datas = [];
    var paramsUrl="";
    var actionName= e.detail.buttonName.toUpperCase();  
    var procInstanceName=e.currentTarget.procedureName;
    switch (actionName) {        
    case 'SOP_MARK_AS_COMPLETED':
        var sopName =e.target.value.sop_name;
        datas.sopName=sopName;
        paramsUrl=paramsUrl+"&sopName="+sopName;
        break;
    default:
        return;
    }
    paramsUrl="&actionName="+actionName 
        +"&procInstanceName="+procInstanceName + "&dbName="+dbName        
        +paramsUrl;
    datas.procInstanceName=procInstanceName;  datas.dbName=dbName; datas.actionName=actionName; datas.paramsUrl=paramsUrl;
    datas.callBackFunction=this.refreshAllAndMyPendingSops.bind(this);
    var tabInfo={
        currTabEsignRequired: this.currTabEsignRequired,
        currTabConfirmUserRequired: this.currTabConfirmUserRequired};
    datas.tabInfo=tabInfo;   

    this.sopUserEndPoint(datas);           
} 
refreshAllAndMyPendingSops(){
    //this.getMyPendingSops();
    //var datas = [];
    //datas.callBackFunction=this.getMyPendingSops.bind(this);
    //this.getAllMySops(datas);
    this.getAllInOne();
}  

getSopOnStartSession(data){
    //this.getMyPendingSops(data.finalToken);
    var datas = [];
    datas.callBackFunction=this.getMyPendingSops.bind(this);
    this.getAllMySops(datas);
}
statusLegend(item , lang){
    //console.log('statusLegend', item.status);
    switch (item.light){
        case "GREEN":
            return this.labelValue(lang, this.sopStatusLabel.pass);
        case "RED":
            return this.labelValue(lang, this.sopStatusLabel.not_pass);
        default:
            break;
    }               
    switch (item.status){
        case "PASS":
            return this.labelValue(lang, this.sopStatusLabel.pass);
        case "NOT_PASS":
            return this.labelValue(lang, this.sopStatusLabel.not_pass);
        default:
        return 'Unknown';
    }           
}
displayCompleteButton(item){
    //console.log(item);
    switch (item.status){
        case "PASS":
            return false;
        case "NOT_PASS":
            return true;
        default:
            return false;
    }                
}
certificationStatus(item){
    //console.log('certificationStatus', item);
    switch (item.status){
        case "PASS":
            return "icons:bookmark";
        case "NOT_PASS":
            return "icons:warning";
        case "CERTIFICATION_EXPIRED":
            return "icons:watch-later";
        default:
            return "icons:warning";
    }
    //return "icons:warning"; "icons:bookmark";"xf046@FontAwesome";
}
certificationStatusStyleDefinition(item){
    switch (item.status){
        case "PASS":
            return "color:green;";
        case "NOT_PASS":
            return "color:red;";
        default:
            return "color:red;";
    }
}
getMyPendingSops(datas){
    datas.actionName='MY_PENDING_SOPS';
    datas.paramsUrl='actionName='+datas.actionName+'&sopFieldsToRetrieve='+sopUserPendingSop.fieldToRetrieve;
    this.frontEndSopUserAPI(datas);
}  
getAllMySops(datas){
    datas.actionName='ALL_MY_SOPS';    
    datas.paramsUrl='actionName='+datas.actionName+'&sopFieldsToRetrieve='+sopUserAllSop.fieldToRetrieve;
    this.frontEndSopUserAPI(datas);      
}      
getAllInOne(){
    var datas=[];
    datas.actionName='ALL_IN_ONE';    
    datas.paramsUrl='actionName='+datas.actionName;
    this.frontEndSopUserAPI(datas);      
}
frontEndSopUserAPI(data) {
    var finalToken=this.getFinalToken();
    var apiUrl=[backendUrl, frontEndSopUrl, '?', 'dbName=', dbName, '&finalToken=', finalToken].join('');
    apiUrl=apiUrl+'&'+data.paramsUrl; 
    axios.get(apiUrl)        
    .then( response => {
        if(response.status == 200) {
            switch (data.actionName){
            case 'ALL_MY_SOPS':
                store.dispatch(userAllSop(response.data));
                break;
            case 'MY_PENDING_SOPS':
                store.dispatch(userPendingSop(response.data));
                break;
            case 'ALL_IN_ONE':
                store.dispatch(setAppProcedureList(response.data.procedures_list));    
                store.dispatch(userAllSop(response.data.all_my_sops));
                store.dispatch(userPendingSop(response.data.my_pending_sops));
                store.dispatch(procedureSops(response.data.procedures_sops));
                    break;
            case '*************PROCEDURE_SOPS':
                store.dispatch(procedureSops(response.data));
                break;
            default:
                return;
            }                
            if (data && data.callBackFunction){data.callBackFunction();}
            return;
        }
        if (data.callBackFunctionError){data.callBackFunctionError();}
        store.dispatch(addNotification({
            notificationName: data.prefixName+'.'+data.actionName,
            label_en: error.message, label_es:error.message,
            new_sample:0,
            diagnoses: 'ERROR'
        }));
    })    
    .catch(error => {
        console.log(error.message);
        if (data && data.callBackFunctionError){data.callBackFunctionError();}
    })
    .then(function () {
    });
}
sopUserEndPoint(data) {
    var endpoints_returningError=this.endpoints_returningError();
    var finalToken=this.getFinalToken();      
    if (!finalToken){finalToken=data.finalToken}
    var apiUrl=backendUrl+ApiSopUserUrl+"?"+data.paramsUrl; 
    apiUrl=apiUrl+"&finalToken="+finalToken;
    apiUrl=apiUrl+"&dbName="+dbName;
    axios.get(apiUrl)        
    .then( response => {
        if(response.status == 200) {
            var notifObj = [];
            notifObj.notificationName=data.procInstanceName+'.'+data.actionName;
            notifObj.label_en=response.data.message_en;
            notifObj.label_es=response.data.message_es;
            notifObj.diagnostic=response.data.diagnostic;
            store.dispatch(addNotification(notifObj));
            if (response.data.diagnostic=="LABPLANET_TRUE"){
                this.toastSuccessMessage(response.data);
            }else{
                this.toastErrorMessageWithApiResponse(response.data);
            }
            if (data.callBackFunction){data.callBackFunction();}
            if (data.actionName=='SOP_MARK_AS_COMPLETED'){
                var procListData=[];
                this.getProcedureList(procListData);
            }
            return;
        }else{
            if (data.callBackFunctionError){data.callBackFunctionError();}
            var msgObj={message_en:"Error running sopUserEndPoint: " + response.data.message_en,
                message_es: "Error ejecutando sopUserEndPoint: " + response.data.message_es};
            this.toastErrorMessage(msgObj);
            return;
        }
    })    
    .catch(error => {
        if (data.callBackFunctionError){data.callBackFunctionError();}
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error,'');
        store.dispatch(addNotification({
            notificationName: data.procInstanceName+'.'+data.actionName,
            label_en: error.message, 
            label_es: error.message, 
            diagnoses: 'ERROR'
        }));        
    })
    .then(function () {
    });
    }
}