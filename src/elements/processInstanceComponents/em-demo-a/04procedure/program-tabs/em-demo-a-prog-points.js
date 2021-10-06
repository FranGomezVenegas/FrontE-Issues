import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';
import {progTabPoints} from '../../03config/Programs/em-demo-a-progtab-points-settings';
import {shifts} from '../../03config/config-process';
import '../../03config/Programs/em-demo-a-progtab-points-settings';
import {FrontendEndpointsEnvMonitForPrograms} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import '../../01moduleFunctionality/em-demo-a-webcomponent-env-monit';
import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';
import '../dialogs/em-demo-a-simple-modal-dialog';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
class EmDemoAProgPoints extends FieldsMethods(FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement)))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=undefined && state.emDemoA.selectedProgram.name!=undefined){
            this.activeProductionLots=state.emDemoA.activeProductionLots;
        }
    }       
    static get properties() {
        return {            
            tableDefinition: {type: Object, value:progTabPoints},
            selectedObject:{type: Object},
            selectedProgram:{type: Object},  
            selectedSamplingPoint:{type: Array}, 
            systemShifts:{type: Object, value:shifts},   
            productionLotsList:{type: Array, value:[{keyName:"rutina", keyValue_en:"routine", keyValue_es:"rutina"},]},  
            activeProductionLots:{type:Array, value:[]},          
        }
    }  
    static get template() {
        return html`
            <style include="em-demo-a-progtab-points-style"></style>
            <em-demo-a-webcomponent-env-monit id="myElements"></em-demo-a-webcomponent-env-monit>
            <table-with-buttons id="batches" modulearea="env-monit-programs" selected_language="{{selectedLanguage}}"  
                element_definition="[[tableDefinition]]" table_data="{{selectedProgram.sample_points}}" 
                selected-object="{{selectedObject}}" on-selected-object-changed="pointClicked"  
                on-field-button-clicked="fieldButtonClickedForPrograms" on-refresh-button-clicked="refreshWindow"
                on-right-menu-clicked="fieldButtonClickedForPrograms" on-field-list-value-changed="onListChange"
            ></table-with-buttons>
            <paper-dialog id="pointCard">
                <em-demo-a-simple-modal-dialog id="logNewSample" action-name="" display-confirm-button display-cancel-button 
                    form-elements="{{selectedSamplingPoint}}" on-field-list-value-changed="onListChange"
                    on-field-button-clicked="sampleLogButtonClicked">
                </em-demo-a-simple-modal-dialog>
            </paper-dialog>                
`;
    }
    objectSelected(e){
        this.selectedObject=e.detail;
    }
    onListChange(e){
        //console.log('em-demo-a-prog-points','onListChange');
        return;}

//             <div class="main">
//                 <template is="dom-if" if="[[tableDefinition.tableTitle.display]]"> 
//                     <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
//                 </template>  
//                 <div name="tableDefinitionButtons" class="buttonGroup">
//                     <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
//                         <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
//                     </template>  
//                     <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
//                         <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
//                             <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
//                             on-field-button-clicked="fieldButtonClickedForPrograms" on-field-list-value-changed="onListChange"> 
//                             </field-controller>
//                         </template>  
//                     </template>  
//                 </div>            
                
//                 <vaadingrid-lit-singleselect class="grid" id="emdemoa-samplesampling" headerfields="{{tableDefinition.fieldToDisplay}}" 
//                     rowcontainer="{{selectedProgram.sample_points}}" selected-object="{{selectedObject}}"
//                     on-selected-object-changed="pointClicked">
//                 </vaadingrid-lit-singleselect>
//                 <paper-dialog id="pointCard">
//                 <em-demo-a-simple-modal-dialog id="productionLotNewDialog" action-name="" display-confirm-button display-cancel-button 
//                     form-elements="{{selectedSamplingPoint}}" on-dialog-button-clicked="dialogClosedProductionLotNew"
//                     on-field-button-clicked="sampleLogButtonClicked"></em-demo-a-simple-modal-dialog>

// <!--                    <card-form form-fields="{{selectedSamplingPoint}}" buttons="{{cardFormButtons}}" 
//                     on-field-button-clicked="sampleLogButtonClicked"
//                     on-dialog-button-clicked="dialogClosedpointCard"> </card-form> -->
//                 </paper-dialog>                
//             </div>  
//         `;
//     } 
    createProductionLotsList(){
        //console.log('createProductionLotsList', 'this.productionLotsList', this.productionLotsList);
        var i;
        for (i = 0; i < this.activeProductionLots.length; i++) {
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
        this.createProductionLotsList();
        //console.log(this.selectedSamplingPoint, 'init');
        //console.log('em-demo-a-prog-points >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedSamplingPoint', this.selectedSamplingPoint );        
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
            "mandatory": true,
            "items" : this.systemShifts
          },
          {
            "name": "production_lot",
            "label_en": "Lot", "label_es": "Lote",
            "type": "list",
            "dbType": "String",
            "value": "",
            "read_only": false,
            "mandatory": true,
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
customElements.define('em-demo-a-prog-points', EmDemoAProgPoints);