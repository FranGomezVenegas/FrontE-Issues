import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../internalComponents/Elements/table-with-buttons';
import {progTabPoints} from '../../03config/Programs/proc-deploy-progtab-points-settings';
import {shifts} from '../../03config/config-process';
import '../../03config/Programs/proc-deploy-progtab-points-settings';
import {FrontendEndpointsEnvMonitForPrograms} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import '../../01moduleFunctionality/proc-deploy-webcomponent-env-monit';
import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';
import '../dialogs/proc-deploy-simple-modal-dialog';
//FieldsMethods ProcDeployapiEnvMonit FrontendEnvMonit
class ProcDeployProgSchedule extends (FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement)))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.procDeploy!=undefined && state.procDeploy.selectedProgram.name!=undefined){
            //this.selectedProgram=state.procDeploy.selectedProgram; 
            this.activeProductionLots=state.procDeploy.activeProductionLots;
        }
    }       
    static get properties() {
        return {            
            tableDefinition: {type: Object, value:progTabPoints},
            selectedObject:{type: Object, notify:true},
            selectedProgram:{type: Object},  
            selectedSamplingPoint:{type: Array}, 
            systemShifts:{type: Object, value:shifts},   
            productionLotsList:{type: Array, value:[{keyName:"rutina", keyValue_en:"routine", keyValue_es:"rutina"},]},  
            activeProductionLots:{type:Array, value:[]},          
        }
    }  
    static get template() {
        return html`
            <style include="proc-deploy-progtab-points-style"></style>
            <proc-deploy-webcomponent-env-monit id="myElements"></proc-deploy-webcomponent-env-monit>

            <table-with-buttons id="procdeploy-samplefq" modulearea="env-monit-sample" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{selectedProgram.sample_points}}" 
                selected-object="{{selectedObject}}" on-selected-object-changed="pointClicked"  
                on-field-button-clicked="fieldButtonClickedForSamples" on-refresh-button-clicked="refreshWindow"
                on-right-menu-clicked="fieldButtonClickedForSamples"
            ></table-with-buttons>

            <paper-dialog id="pointCard">
                <proc-deploy-simple-modal-dialog id="productionLotNewDialog" action-name="" display-confirm-button display-cancel-button 
                    form-elements="{{selectedSamplingPoint}}" on-dialog-button-clicked="dialogClosedProductionLotNew"
                    on-field-button-clicked="sampleLogButtonClicked"></proc-deploy-simple-modal-dialog>
            </paper-dialog>                
    
        `;
    }
    objectSelected(e){
        this.selectedObject=e.detail;
    }
    createProductionLotsList(){
        var i;
        for (i = 0; i < this.activeProductionLots.length; i++) {
//console.log('createProductionLotsList', 'this.productionLotsList', this.productionLotsList);
            var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
            newElement.keyName=this.activeProductionLots[i].lot_name;
            newElement.keyValue_en=this.activeProductionLots[i].lot_name;
            newElement.keyValue_es=this.activeProductionLots[i].lot_name;
            this.productionLotsList[i+1]=newElement;
            //{keyName:"M1", :"M1", keyValue_es:"M1"},
        }   
        //console.log(this.productionLotsList);     
    }   
    pointClicked(e){
        if (!e.detail){return;}
        //console.log(this.selectedSamplingPoint, 'init');
        //console.log('proc-deploy-prog-schedule >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedSamplingPoint', this.selectedSamplingPoint );        
//store.dispatch(setSelectedSamplingPoint(e.detail.card_info));
        //console.log(this.selectedSamplingPoint, 'before');    
        var selectedSamplingPoint=e.detail;    
        //var selectedSamplingPointLen=selectedSamplingPoint.length;
        //selectedSamplingPointLen=selectedSamplingPointLen++; 
        var newElement=[
            {
                "name": "logSample",
                "label_en": "Log Sample", "label_es": "Registrar Muestra",
                "type": "button",
                "read_only": false,
            },             
            {
            "name": "shift",
            "label_en": "Shift", "label_es": "Turno",
            "type": "list",
            "dbType": "String",
            "value": '',
            "read_only": false,
            "items" : this.systemShifts
          },
          {
            "name": "production_lot",
            "label_en": "Lot", "label_es": "Lote",
            "type": "list",
            "dbType": "String",
            "value": "",
            "read_only": false,
            "items" : this.productionLotsList
          }          
            ];  
        //newElement[1].value=this.systemShifts; 
        //newElement[2].value=this.activeProductionLots;
        if (selectedSamplingPoint==undefined || selectedSamplingPoint.card_info==undefined){return;}
        var i;
        for (i = 0; i < selectedSamplingPoint.card_info.length; i++) { 
            newElement[i+3]=selectedSamplingPoint.card_info[i];
        }
        this.selectedSamplingPoint=newElement;
        this.$.pointCard.open();
    }
    refreshWindow() {
    }
    ready() {
        super.ready();
    }
}
customElements.define('proc-deploy-prog-schedule', ProcDeployProgSchedule);