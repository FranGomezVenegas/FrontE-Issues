/**
 * @mixinFunction
 * @polymer
 */
export const NotificationObj = (superClass) => class extends superClass {
}
export function diagnosticToNotification(respData, data) {
    var notifObj = [];
    if (data){
        notifObj.category=data.procInstanceName+'.'+respData.category+'.'+data.actionName;
    }else{
        notifObj.category=respData.category;
    }
    notifObj.label_en=respData.message_en;
    notifObj.label_es=respData.message_es;
    notifObj.diagnostic=respData.diagnostic;
    notifObj.is_error=respData.is_error;
    notifObj.relatedObjects=respData.relatedObjects;
    //console.log('diagnosticToNotification', 'notifObj', notifObj);
   return notifObj;         
}