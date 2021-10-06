import {store} from '../../../../store';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {EndpointsActionsEnvMonitModule} from './0module-endpoints-actions-env-monit';
import {openEsignDialog} from '../../../platformComponents/Redux/actions/esign-actions';
import {openConfirmUserDialog} from '../../../platformComponents/Redux/actions/confirmuser-actions';
import {EnvMonitModuleDefinition} from './0module-actions-available';

export const FunctionsEnvMonit = (superClass) => class extends EnvMonitModuleDefinition(EndpointsActionsEnvMonitModule(ToastMethods(superClass))) {  
    
    selectedObjectIsMandatory(button){
        if (button && button.requires_selected_object!=undefined && button.requires_selected_object==false){
            return false
        }else{        
            return true;
        }
    } 
    
    fieldButtonClickedForInvestigations(e) {
        if (e.detail.dialogState=="canceled"){return;}
        //if (e.detail.buttonDefinition.)
        var buttonDefinition=e.detail.buttonDefinition;
        //  console.log('functions-env-monit >> fieldButtonClickedForInvestigations ', 
        //      'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
        if (this.selectedObjectIsMandatory(buttonDefinition) && this.selectedObject==null){
            this.toastErrorMessage(this.objectNotSelected());
            return;
        }    
        var datas = [];
        datas.selectedObject=this.selectedObject;
        if (this.refreshWindow){
            datas.callBackFunction=this.refreshWindow.bind(this); }
        if (buttonDefinition.actionName=="CORRECTIVE_ACTION_COMPLETE"){
            this.moduleActionTrigger(buttonDefinition, datas, "PROGRAMS");           
        }else{
        this.moduleActionTrigger(buttonDefinition, datas, "INVESTIGATION");}
    } 
    fieldButtonClickedForSavedQueries(e) {
        var buttonDefinition=e.detail.buttonDefinition;
        console.log('frontend-env-monit-sample >> fieldButtonClickedForSavedQueries ', 
             'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
        if (this.selectedObjectIsMandatory(buttonDefinition) && this.selectedObject==null){
            this.toastErrorMessage(this.objectNotSelected());
            return;
        }    
        var datas = [];
        datas.selectedObject=this.selectedObject;
        if (this.refreshWindow){
            datas.callBackFunction=this.refreshWindow.bind(this); }
        this.moduleActionTrigger(buttonDefinition, datas, "SAVED_QUERIES");
    }             

    fieldButtonClickedForProductionLots(e) {
        var buttonDefinition=e.detail.buttonDefinition;
        // console.log('frontend-env-monit-sample >> fieldButtonClicked ', 
        //     'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
        if (this.selectedObjectIsMandatory(buttonDefinition) && this.selectedObject==null){
            this.toastErrorMessage(this.objectNotSelected());
            return;
        }    
        var datas = [];
        datas.selectedObject=this.selectedObject;
        if (this.refreshWindow){
            datas.callBackFunction=this.refreshWindow.bind(this); }
        this.moduleActionTrigger(buttonDefinition, datas, "PRODUCTION_LOTS");
    } 
    fieldButtonClickedForIncubBatch(e) {
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
        this.moduleActionTrigger(buttonDefinition, datas, "INCUB_BATCH");
    } 
    fieldButtonClickedForSavedQueries(e) {
        var buttonDefinition=e.detail.buttonDefinition;
        console.log('frontend-env-monit-sample >> fieldButtonClickedForSavedQueries ', 
             'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', this.selectedObject);
        if (this.selectedObjectIsMandatory(buttonDefinition) && this.selectedObject==null){
            this.toastErrorMessage(this.objectNotSelected());
            return;
        }    
        var datas = [];
        datas.selectedObject=this.selectedObject;
        if (this.refreshWindow){
            datas.callBackFunction=this.refreshWindow.bind(this); }
        this.moduleActionTrigger(buttonDefinition, datas, "SAVED_QUERIES");
    }             
    dialogClosedProductionLotNew(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.productionLotsActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas.newLotName=this.dialogProductionLotNew[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("PRODUCTION_LOTS"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.productionLotNew.close();
        }
    }   
    dialogClosedProductionLotActivate(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.productionLotsActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas.lot_name=this.dialogProductionLotActivate[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("PRODUCTION_LOTS"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.productionLotActivate.close();
        }
    } 
    dialogClosedincubBatchNew(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.batchActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas.newBatchName=this.dialogincubBatchNew[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("INCUB_BATCH"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.incubBatchNew.close();
        }
    }            
    dialogClosedincubBatchAssignIncubator(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.batchActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){            
            var datas = []; 
            datas=this.selectedObject;
            datas.incubatorName=e.target.simpleModalSelectedObject.name;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("INCUB_BATCH"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.incubBatchNew.close();
        }
    }  
    dialogClosedIncubatorAddTempReading(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var moduleArea=this.getFunctionalArea("INCUBATOR");
        var actionDefinition = this.incubatorActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){            
            var datas = []; 
            datas.name=this.selectedObject.incubatorFieldToRetrieve.name;
            datas.tempValue=this.dialogincubAddTmpReading[0].value;
console.log('dialogClosedIncubatorAddTempReading');            
            //datas.tempValue=e.target.simpleModalSelectedObject.name;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, moduleArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.incubBatchNew.close();
        }
    } 
    incubatorFieldButtonClicked(e) {
        var state=store.getState();
        var selectedLanguage=state.app.user.appLanguage; 
    
    //    console.log('frontend-env-monit-sample >> fieldButtonClicked ', 
    //        'e.detail.buttonName', e.detail.buttonName, 'this.selectedObject', this.selectedObject, 'e.detail.buttonDefinition', e.detail.buttonDefinition);
        if (this.selIncubator==null){
            var message=''; 
            switch(selectedLanguage){
                case 'es': message='Por favor selecciona una incubadora primero'; break; //message=response.data.message_es; break;            
                default: message='Please select one incubator first.'; break; //message=response.data.message_en; break;
            }                    
            this.dispatchEvent(new CustomEvent('toast-error', {
                bubbles: true,
                composed: true,
                detail: message
                }));        
            return;
        }    
        this.selectedObject=this.selIncubator;
        var datas = [];
        datas.actionName=e.detail.buttonName;
        datas.selectedObject=this.selIncubator;
        if (this.refreshWindow){
            datas.callBackFunction=this.refreshWindow.bind(this); }
        var tabInfo={
            currTabEsignRequired: e.detail.buttonDefinition.esign_required,
            currTabConfirmUserRequired: e.detail.buttonDefinition.confirmuser_required};  
            //var elem=this.shadowRoot.getElementById("myelements");
            this.moduleActionTrigger(e.detail.buttonDefinition, datas, "INCUBATOR");  
            //this.$.myelements.moduleActionTrigger(e.detail.buttonDefinition, datas, "INCUBATOR");  
    } 
    investigationNewNoDialog(){ 
        console.log('investigationNewNoDialog');
        var functionalArea="INVESTIGATION";
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.investigationActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        var datas = []; 
        datas=this.selectedObject;
        datas.objectsToAdd="sample_analysis_result*"+this.selectedObject.result_id;
        datas.fieldName="description";
        datas.fieldValue="Investigation for "+this.selectedObject.result_id+"*String";
        this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea(functionalArea), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
    } 
    dialogClosedInvestigationAddObject(e){
        //console.log('dialogClosedInvestigationAddObject');
        //return;
        if (e.detail.dialogState!='confirmed'){return;}

        var functionalArea="INVESTIGATION";
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.investigationActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        var datas = [];         
        datas=this.selectedObject;
        datas.objectsToAdd="sample_analysis_result*"+this.selectedObject.result_id;
        datas.investigationId=e.target.simpleModalSelectedObject.id;
        //datas.fieldValue="Investigation for "+this.selectedObject.result_id+"*String";
        //datas.fieldName="description";
        this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea(functionalArea), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.investigationAddObject.close();
        }
    }                   
    dialogClosedInvestigationDecision(e){
        console.log('dialogClosedInvestigationDecision');
        //return;
        var functionalArea="INVESTIGATION";
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.investigationActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        var datas = [];         
        datas=this.selectedObject;
        var formElements=e.detail.formElements;
        var iField;
        var fieldsStringNames='';
        var fieldsStringValues='';
        var fieldType;        
        for (iField = 0; iField < formElements.length; iField++) {
            if (formElements[iField].name=="capa_required"){
                if (formElements[iField].value==undefined || formElements[iField].value.length==0){
                    datas.capaRequired=false    
                }else{
                    datas.capaRequired=formElements[iField].value;
                }
            }else{
                if (String(formElements[iField].value).length>0){
                    fieldType = formElements[iField].dbType;
                    if (!fieldType){fieldType = ">>>";} //formElements[iField].type;}
                    switch (fieldType) {
                        case 'date':
                        case 'Date':
                            if (fieldsStringValues.length>0) {
                                fieldsStringNames=fieldsStringNames+'|';
                                fieldsStringValues=fieldsStringValues+'|';
                            }
                            fieldsStringNames=fieldsStringNames+formElements[iField].name;
                            fieldsStringValues=fieldsStringValues+formElements[iField].value+'*Date';
                            break;
                        case 'string':
                        case 'text':
                        case 'Text':
                        case 'String':
                            if (fieldsStringValues.length>0) {
                                fieldsStringNames=fieldsStringNames+'|';
                                fieldsStringValues=fieldsStringValues+'|';
                            }
                            fieldsStringNames=fieldsStringNames+formElements[iField].name;
                            fieldsStringValues=fieldsStringValues+formElements[iField].value+'*String';
                            break;
                        case 'Boolean':
                            if (fieldsStringValues.length>0) {
                                fieldsStringNames=fieldsStringNames+'|';
                                fieldsStringValues=fieldsStringValues+'|';}
                                fieldsStringNames=fieldsStringNames+formElements[iField].name;
                                fieldsStringValues=fieldsStringValues+formElements[iField].value+'*Boolean';
                            break;   
                        case 'integer':
                        case 'Integer':
                            if (fieldsStringValues.length>0) {
                                fieldsStringNames=fieldsStringNames+'|';
                                fieldsStringValues=fieldsStringValues+'|';}
                                fieldsStringNames=fieldsStringNames+formElements[iField].name;
                                fieldsStringValues=fieldsStringValues+formElements[iField].value+'*Integer';
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
        }   
        datas.capaFieldName=fieldsStringNames;
        datas.capaFieldValue=fieldsStringValues;
        //datas.objectsToAdd="sample_analysis_result*"+this.selectedObject.result_id;
        datas.investigationId=this.selectedObject.id;
        //datas.fieldValue="Investigation for "+this.selectedObject.result_id+"*String";
        //datas.fieldName="description";
        this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea(functionalArea), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        var elem=this.shadowRoot.getElementById("myelements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.investigationDecision.close();
        }
    }   

}    