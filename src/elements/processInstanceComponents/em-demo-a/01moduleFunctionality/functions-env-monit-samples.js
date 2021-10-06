import {store} from '../../../../store';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {EndpointsActionsEnvMonitModule} from './0module-endpoints-actions-env-monit';
import {EnvMonitModuleDefinition} from './0module-actions-available';
import {openEsignDialog} from '../../../platformComponents/Redux/actions/esign-actions';
import {openConfirmUserDialog} from '../../../platformComponents/Redux/actions/confirmuser-actions';

    
export const FunctionsEnvMonitSamples = (superClass) => class extends EnvMonitModuleDefinition(EndpointsActionsEnvMonitModule(ToastMethods(superClass))) {  

selectedObjectIsMandatory(button){
    if (button && button.requires_selected_object!=undefined && button.requires_selected_object==false){
        return false
    }else{        
        return true;
    }
}    
fieldButtonClickedForSamples(e) {
    var buttonDefinition=e.detail.buttonDefinition;
     console.log('frontend-env-monit-sample >> fieldButtonClicked ', 
         'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
    if (this.selectedObjectIsMandatory(buttonDefinition) && this.selectedObject==null){
        this.toastErrorMessage(this.objectNotSelected());
        return;
    }    
    var datas = [];
    datas.selectedObject=this.selectedObject;
    if (this.refreshWindow){
        datas.callBackFunction=this.refreshWindow.bind(this); }
    this.moduleActionTrigger(buttonDefinition, datas, "samples");                     
}  
enterResultChecker(rawValue, selectedRow){
    var messageErr=[];
//console.log('enterResultChecker', rawValue, 'selectedRow', selectedRow); 
    if (selectedRow && selectedRow.param_type!=undefined && selectedRow.param_type.toUpperCase()=='TEXT'){
        return true;}
   
    if (isNaN(parseFloat(rawValue)) || !isFinite(rawValue)){
        messageErr.message_en=this.resultCheckerMessages.valueNotNumeric.message_en.replace("<*1*>", String(rawValue)).replace("<*2*>", String(selectedRow.min_val_allowed));
        messageErr.message_es=this.resultCheckerMessages.valueNotNumeric.message_es.replace("<*1*>", String(rawValue)).replace("<*2*>", String(selectedRow.min_val_allowed));
        this.toastErrorMessage(messageErr);
        return false;    
    }
    if (selectedRow.min_val_allowed!=undefined && String(selectedRow.min_val_allowed).length>0){
        var minStrict=true;
        if (selectedRow.min_allowed_strict!=undefined && selectedRow.min_allowed_strict==false){
            minStrict=false;
        }
        if (!minStrict && rawValue<selectedRow.min_val_allowed){
            messageErr.message_en=this.resultCheckerMessages.valueLessThanMinAllowed.message_en.replace("<*1*>", String(rawValue)).replace("<*2*>", String(selectedRow.min_val_allowed));
            messageErr.message_es=this.resultCheckerMessages.valueLessThanMinAllowed.message_es.replace("<*1*>", String(rawValue)).replace("<*2*>", String(selectedRow.min_val_allowed));
            this.toastErrorMessage(messageErr);
            return false;    
        }
        if (minStrict && rawValue<=selectedRow.min_val_allowed){
            messageErr.message_en=this.resultCheckerMessages.valueLessThanMinAllowed.message_en.replace("<*1*>", String(rawValue)).replace("<*2*>", "<"+String(selectedRow.min_val_allowed));
            messageErr.message_es=this.resultCheckerMessages.valueLessThanMinAllowed.message_es.replace("<*1*>", String(rawValue)).replace("<*2*>", "<"+String(selectedRow.min_val_allowed));    
            this.toastErrorMessage(messageErr);
            return false;    
        }        
    }
    if (selectedRow.max_val_allowed!=undefined && String(selectedRow.max_val_allowed).length>0){
        var maxStrict=true;
        if (selectedRow.max_allowed_strict!=undefined && selectedRow.max_allowed_strict==false){
            maxStrict=false;
        }
        if (!maxStrict && rawValue>selectedRow.max_val_allowed){
            messageErr.message_en=this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_en.replace("<*1*>", String(rawValue)).replace("<*2*>", String(selectedRow.max_val_allowed));
            messageErr.message_es=this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_es.replace("<*1*>", String(rawValue)).replace("<*2*>", String(selectedRow.max_val_allowed));
            this.toastErrorMessage(messageErr);
            return false;    
        }
        if (maxStrict && rawValue>=selectedRow.max_val_allowed){
            messageErr.message_en=this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_en.replace("<*1*>", String(rawValue)).replace("<*2*>", ">"+String(selectedRow.max_val_allowed));
            messageErr.message_es=this.resultCheckerMessages.valueGreaterThanMaxAllowed.message_es.replace("<*1*>", String(rawValue)).replace("<*2*>", ">"+String(selectedRow.max_val_allowed));
            this.toastErrorMessage(messageErr);
            return false;    
        }        
    }
    return true;
}
enterResult(e){
    var actionName='ENTERRESULT';
    let rawValue=e.currentTarget.value;
    let selectedRow=this.$.mygridid.__data.items[e.currentTarget.id];
    if (!this.enterResultChecker(rawValue, selectedRow)){return;}
    //console.log('enterResult', 'callBackFunctionEnvMonitElem', this.callBackFunctionEnvMonitElem, e.currentTarget.id, e.currentTarget.value, this.$.mygridid.__data.items[e.currentTarget.id].result_id); 
    this.$.mygridid.__data.items[e.currentTarget.id].raw_value=e.currentTarget.value;
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
        }); 
    let sampleId=selectedRow.sample_id; //this.$.mygridid.__data.items[e.currentTarget.id].sample_id; 
    let resultId=selectedRow.result_id; //this.$.mygridid.__data.items[e.currentTarget.id].result_id;    
    var datas = [];
    datas.sampleId=sampleId;
    datas.resultId=resultId;
    datas.rawValue=rawValue;
    this.moduleActionTriggerAPI(actionName, e.detail.buttonDefinition, datas, this.getFunctionalArea("samples"), actionDefinition, this.loadData.bind(this), this.callBackFunctionError, this.refreshWindowMethod);                              
}
setAuditReviewed(e){    
    if (e.detail.buttonDefinition && e.detail.buttonDefinition.esign_required){    
        store.dispatch(openEsignDialog(
        this.setAuditReviewedAPI.bind(this, e)        
        ));  
        return;       
    }
    //if (this.currTabConfirmUserRequired){
    if (e.detail.buttonDefinition && e.detail.buttonDefinition.confirmuser_required){              
        store.dispatch(openConfirmUserDialog(
        this.setAuditReviewedAPI.bind(this, e)        
        )); 
        return;
    }
    this.setAuditReviewedAPI(e);
}
dialogClosedSampleAssignBatch(e){
    if (e.detail.dialogState=='canceled'){return;}
    var datas = [];   
    datas=e.currentTarget.selectedObject;
    if (!e.target.simpleModalSelectedObject.name){
        alert('no batch selected');
    }
    var actionName=this.buttonDefinition.name;
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
        });     
    datas.batchName=e.target.simpleModalSelectedObject.name;
    datas.batchTemplateId=e.target.simpleModalSelectedObject.incub_batch_config_id;
    datas.batchTemplateVersion=e.target.simpleModalSelectedObject.incub_batch_config_version;
    console.log('dialogClosedSampleAssignBatch', this.selectedObject);
    //this.buttonDefinition.name="EM_BATCH_INCUB_ADD_SMP";
    this.moduleActionTriggerAPI("EM_BATCH_INCUB_ADD_SMP", this.buttonDefinition, datas, this.getFunctionalArea("samples"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                          
    return;
}
setAuditReviewedAPI(e){
    //console.log('frontend-env-monit-sample >> setAuditReviewedAPI >> e.detail = ', 'e.detail');    
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == e.detail.buttonDefinition.name.toUpperCase();
        }); 
    var datas = [];   
    datas.audit_id=this.selectedObject.audit_id;
    datas.sample_id=this.selectedObject.sample_id;
    this.moduleActionTriggerAPI(e.detail.buttonDefinition.name, e.detail.buttonDefinition, datas, this.getFunctionalArea("samples"), actionDefinition, this.loadData.bind(this), this.callBackFunctionError, this.refreshWindowMethod);                          
}
dialogClosedAddComment(e){ 
    var buttonDefinition=this.buttonDefinition;                 
    var buttonName = this.$.addComment.actionName;
    var formElements=this.$.addComment.formElements;
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == buttonName.toUpperCase();
        }); 
    var elem=this.shadowRoot.getElementById("myElementsSample");//(actionDefinition.dialogInfo.webComponentName); 
    console.log('dialogClosedAddComment >> buttonName', buttonName, 'formElements', formElements);    
    if (e.detail.dialogState=='confirmed'){
        var datas = [];
        datas.sample_id=this.selectedObject.sample_id;
        switch (buttonName) {
            case 'SAMPLINGCOMMENTADD':
                datas.sample_comment=this.fieldsDialogAddComment[0].value;
                this.moduleActionTriggerAPI(buttonDefinition.name, buttonDefinition, datas, this.getFunctionalArea("samples"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
                break;
            case 'COC_CONFIRMCHANGE':
                this.backEndData.actionName=buttonName;//actionName; //datas.paramsUrl=paramsUrl;
                    datas.confirmChangeComment=this.fieldsDialogAddComment[0].value;
                this.moduleActionTriggerAPI(buttonName, datas, datas.tabInfo, this.getFunctionalArea("samples"), actionDefinition, this.refreshWindowMethod);
                break;                  
            case 'COC_ABORTCHANGE':
                this.backEndData.actionName=buttonName;//actionName; //datas.paramsUrl=paramsUrl;
                    datas.cancelChangeComment=this.fieldsDialogAddComment[0].value;
                this.moduleActionTriggerAPI(buttonName, datas, datas.tabInfo, this.getFunctionalArea("samples"), actionDefinition, this.refreshWindowMethod);
                break;                  
            default:
                break;
        }    
    }
    if (elem){
        elem.closeDialog("addComment");
    }else{
        this.$.addComment.close();
    }
}
dialogClosedaddSampleMicroorg(e){
    var elemName=e.target.formElements[0].name;
    console.log('dialogClosedaddSampleMicroorg', 'elemName', elemName); 
    var elem=this.shadowRoot.getElementById('adhoc_name'); //this.dialogMicroorgListAdhocMicroorg[0].name); //this.$.addSampleMicroorgDialog.formElements[0].name);
    if (elem){elem.resetValue();}    
    if (this.$.addSampleMicroorgDialog.callbackFunction){this.$.addSampleMicroorgDialog.callbackFunction();}
}
dialogClosedremoveSampleMicroorgzzz(e){
    var elemName=e.target.formElements[0].name;
    console.log('dialogClosedremoveSampleMicroorg', 'elemName', elemName); 
    this.removeMicroorganism(e);
    var elem=this.shadowRoot.getElementById('adhoc_name'); //this.dialogMicroorgListAdhocMicroorg[0].name); //this.$.removeSampleMicroorgDialog.formElements[0].name);
    if (elem){elem.resetValue();}    
    if (this.$.removeSampleMicroorgDialog.callbackFunction){this.$.removeSampleMicroorgDialog.callbackFunction();}
}
microorgKeyPressedAdhoc(e){
    var buttonName = 'buttonNewAdhocMicroorganism';
    if(e.key=="Enter") {
        var elem=this.shadowRoot.getElementById(buttonName);
        if (elem){
            //console.log('keyPressedAdhoc', 'elem', this.adhocFormFields[1]);    
            elem.focus();  
            var i=0;
            for (i = 0; i < this.adhocFormFields.length; i++) {               
                if (this.adhocFormFields[i].name==buttonName){
                    var mye={ detail: {'buttonName': this.adhocFormFields[1].name,'value': this.adhocFormFields[1].value, 'buttonDefinition': this.adhocFormFields[1]}};    
                    this.addAdhocMicroorganism(mye);
                    return;
                }
            }
        }
    }
}

microorgActionOnSel(e){
    if (e.detail.buttonName=="ADD_MICROORGANISM"){this.addMicroorganism(e);}
    if (e.detail.buttonName=="ADD_ADHOC_MICROORGANISM"){this.addAdhocMicroorganism(e);}
}   
addAdhocMicroorganism(e){   
    var actionName="ADD_SAMPLE_MICROORGANISM";
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
    }); 
    var allowed=this.checkAdditionIsCorrect(this.selectedObject, 1);
    if (!allowed){
        return;
    }
    this.increaseMicroorgAdded(1);
    var row = [];   
    row.actionName=actionName;     
    row.sampleId=this.sampleId;
    row.microorganismName=this.formElements[0].value;
    if (this.callBackFunction){
        row.callBackFunction=this.callBackFunction.bind(this); }    
    this.moduleActionTriggerAPI(actionName, e.detail.buttonDefinition, row, this.getFunctionalArea("samples"), actionDefinition, this.refreshWindowMethod);     
    var elem=this.shadowRoot.getElementById(this.formElements[0].name);
    if (elem){elem.resetValue();}
}    
removeMicroorganismOld(e){   
    var actionName="REMOVE_SAMPLE_MICROORGANISM";
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
    }); 
    var allowed=this.checkAdditionIsCorrect(this.selectedObject, 1);
    if (!allowed){
        return;
    }
    this.increaseMicroorgAdded(1);
    var row = [];   
    row.actionName=actionName;     
    row.sampleId=this.sampleId;
    row.microorganismName=this.formElements[0].value;
    console.log('removeMicroorganism row', row);
    if (this.callBackFunction){
        row.callBackFunction=this.callBackFunction.bind(this); }    
    this.moduleActionTriggerAPI(actionName, e.detail.buttonDefinition, row, this.getFunctionalArea("samples"), actionDefinition, this.refreshWindowMethod);     
    var elem=this.shadowRoot.getElementById(this.formElements[0].name);
    if (elem){elem.resetValue();}
}    

checkAdditionIsCorrect(object, number, nothingMessage){
    //console.log(object, number);
    if (number==undefined || object==undefined || object.microorganism_count==undefined || object.raw_value==undefined){
        var errMsg={message_en: 'Wrong data passed for the addition, review checkAdditionIsCorrect in functions-env-minit-samples',
                    message_es: 'Recibida información incorrecta para añadir microorganismos, revisar checkAdditionIsCorrect en functions-env-minit-samples'}
        console.log(errMsg.message_en);
        this.toastErrorMessage(errMsg);
        return false;}
    if (number==0){
        console.log(nothingMessage.message_en);
        this.toastErrorMessage(nothingMessage);
        return false;}    
    var sumVal=parseInt(object.microorganism_count, 10)+parseInt(number, 10);
    if (sumVal<=Number(object.raw_value)){return true;}
    var errMsg={message_en: 'this addition would be '+sumVal+' what is greater than the reading '+object.raw_value+' what is not allowed.',
                message_es: 'Está adición sumaría un total de '+sumVal+', mayor a la lectura identificada, '+object.raw_value+', lo que no es permitido.'}
    this.toastErrorMessage(errMsg);
    return false;
}
increaseMicroorgAdded(number){
    // Now it adds the microorganisms without knowing the response status...improvable.
    this.selectedObject.microorganism_count=this.selectedObject.microorganism_count+number;
}
addMicroorganism(e){   
    console.log('addMicroorganism');
    var actionName="ADD_SAMPLE_MICROORGANISM";
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
    }); 
    var row = [];   
    var microorganismName=""; 
    var i, len;       
    var elem=this.shadowRoot.getElementById("simplemodaldialoggrid");  
    var selectedItems=[];
    selectedItems[0]=elem.selectedObject;
    
    var errMsg={message_en: 'Nothing to add',
    message_es: 'Nada que añadir'}
    var allowed=this.checkAdditionIsCorrect(this.selectedObject, selectedItems.length, errMsg);
    if (!allowed){        
        return;
    }    
    this.increaseMicroorgAdded(selectedItems.length);
    for (i = 0, len = selectedItems.length, microorganismName=''; i < len; i++) { 
        if (microorganismName.length>0){microorganismName=microorganismName+"|"}
        if (selectedItems[i].name!='undefined'){
        microorganismName = microorganismName+selectedItems[i].name;}
    }
    row.actionName=actionName; 
    row.sampleId=this.sampleId;
    row.microorganismName=microorganismName;
    this.moduleActionTriggerAPI(actionName, e.detail.buttonDefinition, row, this.getFunctionalArea("samples"), actionDefinition, this.refreshWindowMethod);     
}    
dialogClosedremoveSampleMicroorg(e){   
    console.log('removeMicroorganism');
    var actionName="REMOVE_SAMPLE_MICROORGANISM";
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
    }); 
    var row = [];   
    var microorganismName=""; 
    var i, len;       
    var selectedItems=e.detail.selectedItems;
    var errMsg={message_en: 'Nothing to remove',
        message_es: 'Nada que borrar'}
    // var allowed=this.checkAdditionIsCorrect(this.selectedObject, selectedItems.length, errMsg);
    // if (!allowed){        
    //     return;
    // }    
    // this.increaseMicroorgAdded(selectedItems.length);
    // for (i = 0, len = selectedItems.length, microorganismName=''; i < len; i++) { 
    //     if (microorganismName.length>0){microorganismName=microorganismName+"|"}
    //     if (selectedItems[i].name!='undefined'){
    //     microorganismName = microorganismName+selectedItems[i].name;}
    // }
    row.actionName=actionName; 
    row.sampleId=e.target.sampleId;
    //var elem=this.shadowRoot.getElementById("removeSampleMicroorgDialog");  
    var elem2=this.shadowRoot.getElementById("removeSampleMicroorgDialog");  
    var elem=elem2.shadowRoot.getElementById("simplemodaldialoggrid");  
    var selectedItems=[];
    microorganismName=elem.selectedObject;
console.log('microorganismName', microorganismName);
    if (microorganismName==undefined || microorganismName.name==undefined){
        this.toastErrorMessage(errMsg);
        return;
    }
    row.microorganismName=microorganismName.name;    
    if (e.currentTarget.callbackFunction!=undefined){
        row.callBackFunction=e.currentTarget.callbackFunction.bind(this);}
    this.moduleActionTriggerAPI(actionName, e.detail.buttonDefinition, row, this.getFunctionalArea("samples"), actionDefinition, row.callBackFunction);     
}    

sampleLogButtonClicked(e){      
    if (e.detail.buttonName!="logSample"){
        // this.dispatchEvent(new CustomEvent('toast-error', {
        //     bubbles: true,
        //     composed: true,
        //     detail: 'For sample login, the button name should be logSample, this button name is '+e.detail.buttonName
        //     }));           
        return;
    }
    var locationName="";
    //console.log('sampleLogButtonClicked', e.detail.name, this.selectedSamplingPoint);
    var numSamplesToLog = 1; //this.sampleTemplatesList[1].value;
    if (numSamplesToLog==0){
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,
            composed: true,
            detail: 'Nothing to log when the number is set to '+numSamplesToLog
            }));                        
        return;            
    }
    var iField;
    var fieldsStringNames='';
    var fieldsStringValues='';
    var fieldType;
    var missingMandatoryFieldsEn='';
    var missingMandatoryFieldsEs=''; 
    for (iField = 0; iField < this.selectedSamplingPoint.length; iField++) {
        if (this.selectedSamplingPoint[iField].mandatory!=undefined && this.selectedSamplingPoint[iField].mandatory){
            if (this.selectedSamplingPoint[iField].value==undefined || this.selectedSamplingPoint[iField].value.length==0){
                if (missingMandatoryFieldsEn.length>0){
                    missingMandatoryFieldsEn=missingMandatoryFieldsEn+", ";
                    missingMandatoryFieldsEs=missingMandatoryFieldsEs+", "; 
                } 
                missingMandatoryFieldsEn=missingMandatoryFieldsEn+this.selectedSamplingPoint[iField].label_en;
                missingMandatoryFieldsEs=missingMandatoryFieldsEs+this.selectedSamplingPoint[iField].label_es;
            }
        }
        if (String(this.selectedSamplingPoint[iField].value).length>0){
            if (this.selectedSamplingPoint[iField].name=="location_name"){
                locationName=this.selectedSamplingPoint[iField].value;}
            fieldType = this.selectedSamplingPoint[iField].dbType;
            if (!fieldType){fieldType = ">>>";} //this.selectedSamplingPoint[iField].type;}
            switch (fieldType) {
                case 'date':
                case 'Date':
                    if (fieldsStringValues.length>0) {
                        fieldsStringNames=fieldsStringNames+'|';
                        fieldsStringValues=fieldsStringValues+'|';
                    }
                    fieldsStringNames=fieldsStringNames+this.selectedSamplingPoint[iField].name;
                    fieldsStringValues=fieldsStringValues+this.selectedSamplingPoint[iField].value+'*Date';
                    break;
                case 'string':
                case 'text':
                case 'Text':
                case 'String':
                    if (fieldsStringValues.length>0) {
                        fieldsStringNames=fieldsStringNames+'|';
                        fieldsStringValues=fieldsStringValues+'|';
                    }
                    fieldsStringNames=fieldsStringNames+this.selectedSamplingPoint[iField].name;
                    fieldsStringValues=fieldsStringValues+this.selectedSamplingPoint[iField].value+'*String';
                    break;
                case 'Boolean':
                    if (fieldsStringValues.length>0) {
                        fieldsStringNames=fieldsStringNames+'|';
                        fieldsStringValues=fieldsStringValues+'|';}
                        fieldsStringNames=fieldsStringNames+this.selectedSamplingPoint[iField].name;
                        fieldsStringValues=fieldsStringValues+this.selectedSamplingPoint[iField].value+'*Boolean';
                    break;   
                case 'integer':
                case 'Integer':
                    if (fieldsStringValues.length>0) {
                        fieldsStringNames=fieldsStringNames+'|';
                        fieldsStringValues=fieldsStringValues+'|';}
                        fieldsStringNames=fieldsStringNames+this.selectedSamplingPoint[iField].name;
                        fieldsStringValues=fieldsStringValues+this.selectedSamplingPoint[iField].value+'*Integer';
                    break;                           
                case 'Button':
                    break;
                case '>>>':
                    break;
                default:
                    this.dispatchEvent(new CustomEvent('toast-error', {
                        bubbles: true,
                        composed: true,
                        detail: 'The field type '+fieldType+ ' is not implemented yet in onButonClicked then this field is discarded'
                        }));                        
                    break;
                }
        }
    }
    if (missingMandatoryFieldsEn.length>0){
        var msgErr=[];
        msgErr.message_en="There are mandatory fields not entered: "+missingMandatoryFieldsEn;
        msgErr.message_es="Hay campos obligatorios no entrados: "+missingMandatoryFieldsEs;
        this.toastErrorMessage(msgErr);
        return;
    }   
    var actionName="LOGSAMPLE";
    var actionDefinition = this.sampleActions().find(function(tab) {
        return tab.actionName.toUpperCase() == actionName.toUpperCase();
        }); 
    var row = [];   
    row.actionName=actionName;     
    row.programName=this.selectedProgram.name;
    row.sampleTemplate=this.selectedProgram.sample_config_code;//this.selectedSampleTemplate; 
    row.sampleTemplateVersion=this.selectedProgram.sample_config_code_version;
    row.locationName=locationName;
    row.fieldName=fieldsStringNames; row.fieldValue=fieldsStringValues; row.numSamplesToLog=1;
    this.moduleActionTriggerAPI(actionName, e.detail.buttonDefinition, row, this.getFunctionalArea("samples"), actionDefinition, this.refreshWindowMethod);         
    this.$.pointCard.close();
}  

    

}    