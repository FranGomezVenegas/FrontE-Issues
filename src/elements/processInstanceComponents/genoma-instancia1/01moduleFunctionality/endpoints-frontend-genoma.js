//import {backendUrl, frontEndGenomaStudyUrl} from '../../../../config/platform/logic/api-config';
import {store} from '../../../../store';
import {ApiSettings} from '../../../../platform-mixins/apis/api-settings';
import {tokenMixin} from '../../../../platform-mixins/store/token-mixin';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';
import {schema_name} from '../03config/config-process';
import {GenomaModuleDefinition} from './0module-backendfunctionality-available';
import { activeVariablesAndVariablesSet as activeVariablesAndVariablesSet_genoma_instancia1, 
    activeProjects as activeProjects_genoma_instancia1, setSelectedStudy as setSelectedStudy_genoma_instancia1
} from '../02Redux/genoma-instancia1_actions';
import {dbName} from '../../../../config/platform/logic/platform-config';

export const FrontendEndpointsModuleGenoma = (superClass) => class extends GenomaModuleDefinition(ApiSettings(ToastMethods(tokenMixin(superClass)))) {
    
    getProjects(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        var data=[];
        this.callEndpoint(data, 'ALL_ACTIVE_PROJECTS');
        //this.getActiveProductionLotsList();
    }
    getConfigVariablesAndVariablesSet(){
        this.callBackRefreshWindow = this.refreshWindow.bind(this);
        var data=[];
        this.callEndpoint(data, 'ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET');
    }
    refreshSelectedStudyOnGetProjects(projects){
        //console.log('refreshSelectedStudyOnGetProjects '); 
        var state=store.getState();
        if (state.genomaInstancia1.selectedStudy.name!=undefined){
            var selStudyName=state.genomaInstancia1.selectedStudy.name;
            var selProjectName=state.genomaInstancia1.selectedStudy.project;

            var selProject = projects.project.find(function(tab) {
                return tab.name.toUpperCase() == selProjectName.toUpperCase();
            }); 
            if (selProject==undefined){return;}
            var selStudy = selProject.study.find(function(tab) {
                return tab.name.toUpperCase() == selStudyName.toUpperCase();
            }); 
            store.dispatch(setSelectedStudy_genoma_instancia1(selStudy)); 
            console.log('setSelectedStudy fired by getProjects');  
        }
    }
    callEndpoint(data, endpointName) {        
        var endpoints_returningError=this.endpoints_returningError();
        //console.log('callEndpoint', 'data', data, 'endpointName', endpointName);
        var moduleEndpoints=[];
        moduleEndpoints=this.endPoints();
        var endpointDefinition = moduleEndpoints.find(function(tab) {
            return tab.actionName.toUpperCase() == endpointName.toUpperCase();
            }); 
        if (!endpointDefinition){
            this.toastErrorMessage(this.actionNameNotRecognized(endpointName.toUpperCase(), 'FrontendEndpointsModuleGenoma'));
            return;
        } 
        if (endpointDefinition.apiCallDiscarded!=undefined && endpointDefinition.apiCallDiscarded==true){
            //store.dispatch(activeProjects(data, endpointName));
            return;
        }
        var apiUrl=endpointDefinition.apiurl;//backendUrl+frontEndGenomaStudyUrl; 
        //console.log('callEndpoint', apiUrl, data);
        if (!this.getFinalToken()){return;}
        if (!schema_name){return;}

        apiUrl=apiUrl+'?finalToken='+this.getFinalToken()
        +"&procInstanceName="+schema_name + "&dbName="+dbName
        +'&actionName='+endpointName; 
        //console.log('process-us>api-sample>sampleAPIEndpointCall', data.procInstanceName, data.actionName, apiUrl, data.paramsUrl);    

        // if (button && button.esign_required){    
        //     var ePhrase=this.getEsignPhrase()
        //     apiUrl=apiUrl+"&esignPhraseToCheck="+ePhrase;
        // }
        // if (button && button.confirmuser_required){   
        //     var userPhrase=this.getUserPhrase()
        //     var userPwPhrase=this.getUserPwPhrase()
        //     apiUrl=apiUrl+"&userToCheck="+userPhrase;
        //     apiUrl=apiUrl+"&passwordToCheck="+userPwPhrase;
        // }        
        //axios.get(apiUrl)        
        // .then( response => {
       axios.get(apiUrl, {        
            params: {
                //'procInstanceName':schema_name, 'actionName':'ALL_ACTIVE_PROJECTS',
                //'finalToken':this.getFinalToken(), 
            }
            })
        .then( response => {
            if(response.status == 200) {
                //console.log('endpointName', endpointName, response.data);
                switch(endpointName){
                case 'ALL_ACTIVE_VARIABLES_AND_VARIABLES_SET': 
                    store.dispatch(activeVariablesAndVariablesSet_genoma_instancia1(response.data));
                    return;
                case 'ALL_ACTIVE_PROJECTS':
                    store.dispatch(activeProjects_genoma_instancia1(response.data));
                    this.refreshSelectedStudyOnGetProjects(response.data);
                    //store.dispatch(activeProjects_genoma_instancia1(response.data, endpointName));
                    if (data && data.callBackFunction){data.callBackFunction();}
                    return;
                }
            }
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
        })
        .catch(error => {
            console.log('FrontendEndpointsModuleGenoma', 'callEndpoint', 'error', error);
            this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
            if (data && data.callBackFunctionError){data.callBackFunctionError();}
            console.log(error.message);
        })
        .then(function () {
            });
    }    
}