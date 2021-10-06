import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import './em-demo-a-dialogmodal-buttons.js';
import '../../03config/Dialogs/em-demo-a-list-modal-sample-audit-settings';

import {sampleAudit} from '../../03config/Dialogs/em-demo-a-list-modal-sample-audit-settings';
import {FrontendEndpointsEnvMonitSamples} from  '../../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';


/**
 * `em-demo-a-list-modal-sample-audit` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EmDemoAListModalSampleAudit extends FunctionsEnvMonitSamples(FrontendEndpointsEnvMonitSamples(connect(store)(PolymerElement))) {
    static get properties() {
        return {
            tableDefinition: {type: Object, value:sampleAudit},

            listRows: Array,
            listHeader: Array,
            sampleId: Number,
            selectedObject: {type: Object, notify: true},  
                      
        }
    }

    static get template() {
        return html`
        <style include="em-demo-a-dialog-sample-audit-settings""></style>              
        <div class="modal-content bgimg">
            <template is="dom-if" if="[[tableDefinition.tableTitle.display]]"> 
                <p class="tableTitle">{{labelValue(selectedLanguage, tableDefinition.tableTitle.label)}}</p>
            </template>  
            <div name="tableDefinitionButtons" class="buttonGroup">
            <em-demo-a-dialogmodal-buttons display-close-button={{tableDefinition.dialogButtons.displayCloseButton}} display-cancel-button={{tableDefinition.dialogButtons.displayCancelButton}} display-confirm-button={{tableDefinition.dialogButtons.displayConfirmButton}}
                on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
            ></em-demo-a-dialogmodal-buttons>             
                <template is="dom-if" if="[[tableDefinition.displayRefreshButton]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[tableDefinition.displayButtons]]"> 
                    <template is="dom-repeat" items="{{tableDefinition.buttons}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}"
                        on-field-button-clicked="setAuditReviewed" on-field-list-value-changed="onListChange"> 
                        </field-controller>
                    </template>  
                </template>  
            </div>    
            <vaadin-grid id="mygridid" items="{{listRows}}" on-active-item-changed="itemSelected" 
            column-reordering-allowed multi-sort selected-object="{{selectedObject}}">  
                <vaadin-grid-selection-column  auto-select></vaadin-grid-selection-column>
                <template name="auditLvl2" class="row-details">
                    <div class="details">
                        <vaadin-grid id="grid-level2" name="audit-lvl2" items="[[item.sublevel]]" active-item="{{activeItem}}">
                            <template is="dom-repeat" items="{{tableDefinition.fieldToDisplay}}" as="fld">        
                                <vaadin-grid-column resizable path="{{fld.name}}" header="{{fld.label_en}}"></vaadin-grid-column>
                            </template>
                        </vaadin-grid> 
                    </div> 
                </template>
                <vaadin-grid-column style="width: 30px;">
                    <template>
                        <vaadin-checkbox aria-label$="Ver Detalle" unchecked checked="{{detailsOpened}}">
                            <img style="height:24px; width: 12px;" src="{{auditDrillDownButton}}"> 
                        </vaadin-checkbox>
                    </template>
                </vaadin-grid-column>
                <template is="dom-repeat" items="{{tableDefinition.fieldToDisplay}}" as="fld">        
                    <vaadin-grid-column resizable path="{{fld.name}}" header="{{fld.label_en}}"></vaadin-grid-column>
                </template>
            </vaadin-grid>                     
        </div>
        `;
    }
    itemSelected(e) {        
        const item = e.detail.value;
        this.selectedObject=item;
        //console.log(' em-demo-a-list-modal-sample-audit >> itemSelected', this.selectedObject); 
        this.$.mygridid.selectedItems =[];
    }       
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
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;
        if (state.emDemoA!=null){ 
            this.listRows= state.emDemoA.sampleAudit;}
    }        
    refreshWindow() {
        this.loadData();
    }
    loadData(){
console.log('loadData', 'sampleId', this.sampleId);
        var datas=[];
        datas.sampleId=this.sampleId;
        datas.sampleAuditFieldToRetrieve=this.tableDefinition.fieldToRetrieve;
        this.getSampleAudit(datas);
    }
    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();

    }
}

customElements.define('em-demo-a-list-modal-sample-audit', EmDemoAListModalSampleAudit);