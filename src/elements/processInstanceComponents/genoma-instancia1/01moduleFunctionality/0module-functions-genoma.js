import {store} from '../../../../store';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {EndpointsActionsGenomaModule} from './0module-endpoints-actions-genoma';
import {openEsignDialog} from '../../../platformComponents/Redux/actions/esign-actions';
import {openConfirmUserDialog} from '../../../platformComponents/Redux/actions/confirmuser-actions';
import {GenomaModuleDefinition} from './0module-backendfunctionality-available';

export const ModuleFunctionsGenoma = (superClass) => class extends GenomaModuleDefinition(EndpointsActionsGenomaModule(ToastMethods(superClass))) {  
    
    selectedObjectIsMandatory(button){
        if (button && button.requires_selected_object!=undefined && button.requires_selected_object==false){
            return false
        }else{        
            return true;
        }
    } 
    fieldButtonClickedForProjects(e) {
        var buttonDefinition=e.detail.buttonDefinition;
        var selObject=e.target.selectedObject;
        if (selObject==undefined){var selObject=e.target.selectedobject;}
        // var elemAttributes=[];
        // elemAttributes=e.target.attributes;
        // var moduleAreaAttr = elemAttributes.find(function(tab) {
        //     return tab.name.toLowerCase() == 'modulearea';
        // });         
        var moduleArea='';
        moduleArea=e.target.modulearea; 
        if (moduleArea==undefined){moduleArea=e.currentTarget.attributes["modulearea"].value;}
        console.log('fieldButtonClickedForProjects ', 
            'e.detail.buttonDefinition', e.detail.buttonDefinition, 'this.selectedObject', selObject);
        if (this.selectedObjectIsMandatory(buttonDefinition) && selObject==null){
            this.toastErrorMessage(this.objectNotSelected());
            return;
        }    
        var datas = [];
        datas.selectedObject=selObject;
        // if (e.detail.buttonName=='STUDY_FAMILY_ADD_INDIVIDUAL'){
        //     datas.selectedObject.indivId=this.selectedStudyIndividual.individual_id;            
        // }  
        if (this.refreshWindow){
            datas.callBackFunction=this.refreshWindow.bind(this); }
        this.moduleActionTrigger(buttonDefinition, datas, moduleArea);
    }
    
    dialogClosedProjectNew(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas.study=e.currentTarget.selectedStudyName;
            datas.newLotName=this.dialogProductionLotNew[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("PRODUCTION_LOTS"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudy.close();
        }
    }   

    dialogClosedProjectActivate(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas.lot_name=this.dialogProductionLotActivate[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("PRODUCTION_LOTS"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.productionLotActivate.close();
        }
    } 
    
    dialogClosedStudyNew(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.genomaModuleProjectActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            datas.newStudyName=this.dialogStudyNew[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyNew.length>1){
                var i;
                for (i=1;i<this.dialogStudyNew.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyNew[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyNew[i].value;

                    if (i<this.dialogStudyNew.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("PROJECTS"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudy.close();
        }
    } 
     
    dialogClosedStudyUpdate(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            //datas.newStudyName=this.dialogStudyUpdate[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyUpdate.length>1){
                var i;
                for (i=1;i<this.dialogStudyUpdate.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyUpdate[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyUpdate[i].value;

                    if (i<this.dialogStudyUpdate.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, this.getFunctionalArea("STUDIES"), actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudy.close();
        }
    } 
    dialogClosedStudyIndividualNew(e){ 
        var selStudy=this.selectedStudy;
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = {};
            datas.study=e.currentTarget.selectedStudyName;
            // if (this.selectedObject!=undefined){
            //     datas=this.selectedObject;
            // }else{
            //     datas=e.currentTarget.selectedObject;}
            datas.newStudyIndividualName=this.dialogStudyIndividualNew[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyIndividualNew.length>1){
                var i;
                for (i=1;i<this.dialogStudyIndividualNew.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyIndividualNew[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyIndividualNew[i].value;

                    if (i<this.dialogStudyIndividualNew.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyIndividualFieldsNames=fieldsNames;
            datas.newStudyIndividualFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudyIndividual.close();
        }
    } 
     
    dialogClosedStudyIndividualUpdate(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            //datas.newStudyName=this.dialogStudyIndividualUpdate[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyIndividualUpdate.length>1){
                var i;
                for (i=1;i<this.dialogStudyIndividualUpdate.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyIndividualUpdate[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyIndividualUpdate[i].value;

                    if (i<this.dialogStudyIndividualUpdate.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyIndividual.close();
        }
    } 

    dialogClosedStudyFamilyNew(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = {};
            datas.study=e.currentTarget.selectedStudyName;
            // if (this.selectedObject!=undefined){
            //     datas=this.selectedObject;
            // }else{
            //     datas=e.currentTarget.selectedObject;}
            datas.newStudyFamilyName=this.dialogStudyFamilyNew[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyFamilyNew.length>1){
                var i;
                for (i=1;i<this.dialogStudyFamilyNew.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyFamilyNew[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyFamilyNew[i].value;

                    if (i<this.dialogStudyFamilyNew.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudyFamily.close();
        }
    } 
     
    dialogClosedStudyFamilyUpdate(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyFamilyUpdate.length>1){
                var i;
                for (i=1;i<this.dialogStudyFamilyUpdate.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyFamilyUpdate[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyFamilyUpdate[i].value;

                    if (i<this.dialogStudyFamilyUpdate.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyFamily.close();
        }
    } 

    dialogClosedFamilyList(e){
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
console.log('dialogClosedFamilyList');            
            datas=e.currentTarget.selectedObject;
            datas.familyName=e.detail.selectedItems.name;
            if (datas.name==undefined){
                datas.name=e.detail.selectedItems.family_name;
            }
            datas.individualsList=e.currentTarget.selectedObject.individual_id;
            datas.indivId=e.currentTarget.selectedObject.individual_id;
            //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyFamilyUpdate.length>1){
                var i;
                for (i=1;i<this.dialogStudyFamilyUpdate.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyFamilyUpdate[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyFamilyUpdate[i].value;

                    if (i<this.dialogStudyFamilyUpdate.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyFamily.close();
        }
    }

    dialogClosedIndividualList(e){
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            datas.individualsList=e.detail.selectedItems.individual_id;
            datas.indivId=e.detail.selectedItems.individual_id;             
            datas.familyName=e.currentTarget.selectedObject.name;
            //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudyFamilyUpdate.length>1){
                var i;
                for (i=1;i<this.dialogStudyFamilyUpdate.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudyFamilyUpdate[i].name;
                    fieldsValues=fieldsValues+this.dialogStudyFamilyUpdate[i].value;

                    if (i<this.dialogStudyFamilyUpdate.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyFamily.close();
        }
    }
    
    dialogClosedSamplesSetList(e){
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_SAMPLES_SET");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
//console.log('dialogClosedSamplesSetList');            
            datas=e.currentTarget.selectedObject;
            datas.samplesSetName=e.detail.selectedItems.name;
            if (datas.name==undefined){
                datas.name=e.detail.selectedItems.name;
            }
            datas.sampleId=e.currentTarget.selectedObject.sample_id;
            //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyFamily.close();
        }
    }

    dialogClosedSamplesList(e){
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_INDIVIDUAL_SAMPLES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            datas.sampleId=e.detail.selectedItems.sample_id;
            datas.samplesSetName=e.currentTarget.selectedObject.name;
            //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyFamily.close();
        }
    }

    dialogClosedStudySamplesSetNew(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = {};
            datas.study=e.currentTarget.selectedStudyName;
            // if (this.selectedObject!=undefined){
            //     datas=this.selectedObject;
            // }else{
            //     datas=e.currentTarget.selectedObject;}
            datas.newStudySamplesSetName=this.dialogStudySamplesSetNew[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudySamplesSetNew.length>1){
                var i;
                for (i=1;i<this.dialogStudySamplesSetNew.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudySamplesSetNew[i].name;
                    fieldsValues=fieldsValues+this.dialogStudySamplesSetNew[i].value;

                    if (i<this.dialogStudySamplesSetNew.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudySamplesSet.close();
        }
    } 
     
    dialogClosedStudySamplesSetUpdate(e){ 
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_FAMILIES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            //datas.newStudyName=this.dialogStudySamplesSetUpdate[0].value;
            var fieldsNames="";
            var fieldsValues="";
            if (this.dialogStudySamplesSetUpdate.length>1){
                var i;
                for (i=1;i<this.dialogStudySamplesSetUpdate.length;i++){
                    fieldsNames=fieldsNames+this.dialogStudySamplesSetUpdate[i].name;
                    fieldsValues=fieldsValues+this.dialogStudySamplesSetUpdate[i].value;

                    if (i<this.dialogStudySamplesSetUpdate.length-1){
                        fieldsNames=fieldsNames+"|";
                        fieldsValues=fieldsValues+"|";
                    }
                }
            }
            datas.newStudyFieldsNames=fieldsNames;
            datas.newStudyFieldsValues=fieldsValues;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudySamplesSet.close();
        }
    } 
    
    dialogClosedEnterVariableValue(e){ 
        console.log('dialogClosedEnterVariableValue');
        var functionalArea =this.getFunctionalArea("STUDY_INDIVIDUAL_SAMPLE_VARIABLES");
        var buttonDefName=this.buttonDefinition.name;
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;
            datas.newValue=e.currentTarget.newValue;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, 
                functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.createNewStudy.close();
        }
    } 

    dialogClosedVariablesSetListAddToObject(e){
        var buttonDefName=this.buttonDefinition.name;
        var functionalArea=this.getFunctionalArea("STUDY_INDIVIDUAL_SAMPLE_VARIABLES");
        var actionDefinition = this.genomaModuleStudyActions().find(function(tab) {
            return tab.actionName.toUpperCase() == buttonDefName.toUpperCase();
        }); 
        if (e.detail.dialogState=='confirmed'){
            var datas = [];
            datas=e.currentTarget.selectedObject;            
            if (this.buttonDefinition.ownerTable==undefined){
                console.log("The action for adding Variables Set to study Objects requires the attribute called OwnerTable in the BUTTON definition to know for which object type it should be added")
                return;
            }
            switch(this.buttonDefinition.ownerTable){
                case 'study_individual_sample':
                    datas.ownerId=e.currentTarget.selectedObject.sample_id;
                    break;
                default:
                    console.log("The ownerTable "+ownerTable+" is not recognized in the list of objects type where variables set can be added");
                    return;
            }
            datas.ownerTable=this.buttonDefinition.ownerTable;
            datas.variableSetName=e.detail.selectedItems.name;
            //datas.newStudyName=this.dialogStudyFamilyUpdate[0].value;
            this.moduleActionTriggerAPI(this.buttonDefinition.name, this.buttonDefinition, datas, functionalArea, actionDefinition, this.callBackFunction, this.callBackFunctionError, this.refreshWindowMethod);                      
        }
        var elem=this.shadowRoot.getElementById("myProjectElements");//(actionDefinition.dialogInfo.webComponentName); 
        if (elem){
            elem.closeDialog(actionDefinition.dialogInfo.dialogName);
        }else{
            this.$.updateStudyFamily.close();
        }
    }    
    

}    