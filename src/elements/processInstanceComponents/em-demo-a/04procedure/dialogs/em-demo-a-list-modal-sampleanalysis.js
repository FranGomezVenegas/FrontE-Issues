import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store.js';
import '@polymer/paper-button/paper-button';

import '../../03config/css/Theme01/modal-dialogs.js';
//import '../../../../internalComponents/grid-components/vaadingrid-singleselect.js';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter'; 
import '@vaadin/vaadin-grid/vaadin-grid-filter-column'; 
import '../../../../internalComponents/grid-components/vaadingrid-multiselect.js';

import '../../../../internalComponents/form-fields/field-icon-button.js';
//import {FrontendEnvMonitSample} from '../../01moduleFunctionality/frontend-env-monit-sample.js';
//import {EmDemoAapiEnvMonit} from '../../01moduleFunctionality/api-env-monit.js';
import '../../01moduleFunctionality/env-monit-elements-sample.js';
import {dialog_buttons} from '../../../../../config/app-config.js';
import '../../../../internalComponents/Dialogs/dialogmodal-buttons.js';
import {schema_name, sampleResults_givenSampleAnalysisListDialog_buttons} from '../../../process-us/03config/config-process.js';
//import {dbName} from '../../../../../config/platform/logic/platform-config';
/**
 * `em-demo-a-list-modal-sampleanalysis` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class emDemoAListModalSampleanalysis extends (connect(store)(PolymerElement)) {
    static get properties() {
        return {
            dialogButtons: { type: Array, value: dialog_buttons},
            listRows: Array,
            listHeader: Array,
            procInstanceName: {type:String, value: schema_name},
            buttons: {type: Array, value: sampleResults_givenSampleAnalysisListDialog_buttons},
            selectedObject: {type: Object, notify: true},
            callBackRefreshWindow: Object,
            selectedLanguage:{ type: String},
        }
    }
    stateChanged(state) {        
        this.selectedLanguage = state.app.user.appLanguage;  
    }
    static get template() {
        return html`
  
  <style include="modal-dialogs">
            .modal-content {
                width: 550px;
            } 
            .buttonGroup{
            display: flex;
            }
        </style>        

        <env-monit-elements-sample id="myElementsSample" refresh-window-method="{{callBackRefreshWindow}}"></env-monit-elements-sample>  	
        <div class="modal-content bgimg">
        <dialogmodal-buttons 
            display-cancel-button 							display-confirm-button 								
            on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmedbutton-clicked="dialogConfirmed"> </dialogmodal-buttons>             
        <div name="Buttons1" class="buttonGroup">
            <template is="dom-repeat" items="{{buttons}}" as="currentfield">       
                <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange"> 
                </field-controller>
            </template>  
        </div>            
        <div>
        <!-- <vaadingrid-singleselect id="mygrid" headerfields="{{listHeader}}" rowcontainer="{{listRows}}"            
        selected-object="{{selectedObject}}"></vaadingrid-singleselect> -->

            <vaadingrid-multiselect id="mygridid" headerfields="{{listHeader}}" rowcontainer="{{listRows}}"            
            selected-object="{{selectedObject}}"></vaadingrid-multiselect>

            <!-- <vaadin-grid id="mygridid" items="{{listRows}}">  
                <vaadin-grid-selection-column  auto-select></vaadin-grid-selection-column>
            <template is="dom-repeat" items="{{listHeader}}" as="fld">        
                <vaadin-grid-column resizable path="{{fld.name}}" header="{{fld.label_en}}"></vaadin-grid-column>
            </template>
            </vaadin-grid>                   -->
        </div>    
        
        `;
    } 

/*    itemSelected(e) {
        //console.log('process-us-sample-reception >> itemSelected', e.detail.value);
                let selectedSampleAnalysisLocal = e.detail.value.test_id;
                this.selectedSampleAnalysis= selectedSampleAnalysisLocal;
                var datas = [];
                datas.row=e.detail.value;        
                datas.selectedSampleAnalysis=this.selectedSampleAnalysis;
                this.selectedObject=e.detail.value;                                    
                console.log('em-demo-a-list-modal-sampleanalysis > itemSelected > this.selectedObject', this.selectedObject);
                this.value='confirmed';
                this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
                    bubbles: true,
                    composed: true,
                    detail: {
                    'buttonName': this.name,
                    'value': this.value,
                    'dialogState': 'confirmed',
                    'selectedItems': this.$.mygridid.selectedItems   
                    }
                })); 
                this.$.mygridid.selectedItems=[];                  
    }    
*/
/*    fieldButtonClicked(e) {
        console.log('optionPressed', e.detail.buttonName, 'selectedSampleAnalysis', this.selectedObject);                
        //console.log('optionPressed', e.detail.buttonName, 'selectedSample', this.selectedObject);                
        if (this.selectedObject==null){
            var message=''; 
            switch(this.selectedLanguage){
                case 'es': message='Por favor selecciona un objeto primero'; break; //message=response.data.message_es; break;            
                default: message='Please select one object first.'; break; //message=response.data.message_en; break;
            }                    
            this.dispatchEvent(new CustomEvent('toast-error', {
                bubbles: true,
                composed: true,
                detail: message
                }));        
            return;
        }           
        var datas = [];
        datas.procInstanceName=this.procInstanceName; datas.actionName=e.detail.buttonName;
        datas.selectedObject=this.selectedObject;
        var tabInfo={
            currTabEsignRequired: this.currTabEsignRequired,
            currTabConfirmUserRequired: this.currTabConfirmUserRequired};
        datas.tabInfo=tabInfo;            
//        datas.sampleResults_analysisListFieldsToRetrieve=sampleResults_analysisListFieldsToRetrieve;
        switch (e.detail.buttonName) {        
        case 'testAssignment':
            var actionName='TESTASSIGNMENT';
            console.log('Esto no funciona porque llamar a sample-elements de nuevo crea un loop infinito');
            //this.$.myElements.actionTrigger(actionName, datas);
            break;
            // var paramsUrl="actionName="+actionName+"&finalToken="+this.finalToken+"&procInstanceName="+this.procInstanceName + "&dbName="+dbName
            // +"&testId="+"141"+"&newAnalyst="+"2";
            // var datas = [];
            // datas.procInstanceName=this.procInstanceName; datas.actionName=actionName; datas.paramsUrl=paramsUrl;   
            // this.sampleAPI(datas);
            // break;  
        default:
            break;
        }
        return;
    }
*/        
    dialogConfirmed(){
        //console.log('clicked', this.$.mygrid.getSelectedRows());        
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'confirmed',
            'selectedItems': this.$.mygridid.selectedItems   
            }
        })); 
        this.$.mygridid.selectedItems=[];  
    }        
    dialogCanceled(){
        //console.log('clicked', this.value);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'canceled'
            }
        }));    
    }
    refreshWindow() {
    }
    /*ready(){
        this.addEventListener('toast-error', (e) => this.toastError(e) );
    } */       
}

customElements.define('em-demo-a-list-modal-sampleanalysis', emDemoAListModalSampleanalysis);