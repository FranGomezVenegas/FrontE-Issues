import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '../../03config/css/Theme01/modal-dialogs.js';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter'; 
import '@polymer/paper-dialog/paper-dialog';
import '@polymer/paper-input/paper-input';
import {FrontendEnvMonitSample} from '../../01moduleFunctionality/frontend-env-monit-sample.js';
import {EmDemoAapiEnvMonit} from '../../01moduleFunctionality/api-env-monit.js';
import '../../../../internalComponents/Dialogs/dialogmodal-buttons.js';
import {dbName} from '../../../../../config/platform/logic/platform-config';
class emDemoAListModalEnterresults extends EmDemoAapiEnvMonit(FrontendEnvMonitSample(PolymerElement)) {
    static get properties() {
        return {
            finalToken: String,
            procInstanceName: String,
            fieldCol1: {
                type:String, value:'item.result_id'
            },
            callBackFunctionEnvMonitElem: Object,
        }
    }
   
    static get template() {
        return html`
        <style include="modal-dialogs">
            .modal-content {
                width: 650px;
            } 
        vaadin-grid {
            width:645px;
        } 
        .resultBlue {
            --paper-input-input-color: blue;
            color: blue;
        }       
        </style>

        <div class="modal-content bgimg">
        <dialogmodal-buttons display-close-button> </dialogmodal-buttons>
        <template is="dom-repeat" items="{{dialogButtons}}" as="currentfield">       
          <field-controller on-keydown="keyPressed" on-field-button-clicked="dialogConfirmed" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>           
        <div>
            <vaadin-grid id="mygridid" items="{{listRows}}">  
            <!-- <vaadin-grid-selection-column name="check"  auto-select></vaadin-grid-selection-column> -->

            <template name="sampleAnalysis" class="row-details">
                <div class="details">
                Spec Eval: {{item.spec_eval}} Detail: {{item.spec_eval_detail}}
                Spec Rule: {{item.spec_rule_with_detail}}
                </div> 
            </template>
                    <vaadin-grid-column style="width: 30px;">
                        <template style="width: 51px;" class="header">{{labelValue(selectedLanguage, fld)}}</template>
                        <template>
                            <vaadin-checkbox aria-label$="Ver Detalle" unchecked checked="{{detailsOpened}}">
                                <img style="height:24px; width: 24px;" src="{{getSampleStatusIcon(item.status)}}"> 
                            </vaadin-checkbox>
                        </template>
                    </vaadin-grid-column>
                    
                <template is="dom-repeat" items="{{listHeader}}" as="fld">               
                    <template is="dom-if" if="{{!fld.hidden}}">
                        <template is="dom-if" if="{{!fld.editable}}">
                            <vaadin-grid-column resizable path="{{fld.name}}" header="{{fld.label_en}}"></vaadin-grid-column>
                        </template>
                        <template is="dom-if" if="{{fld.editable}}">
                        <template is="dom-if" param-type="{{fld.param_type}}" if="{{editableIsInteger}}">
                            <vaadin-grid-column resizable >          
                                <template class="header">{{fld.label_en}}</template>
                                <template>
                                    <paper-input style="{{resultClass}}" type="{{fld.param_type}}" on-change="enterResult" type="text" 
                                        row-index="{{item.index}}" index="{{index}}" id="{{index}}" required value="{{item.raw_value}}" 
                                        readonly$="[[!fld.editable]]"></paper-input>
                                </template>
                            </vaadin-grid-column>                     
                        </template>
                        </template>
                    </template>
                </template>               
            </vaadin-grid>                   
        </div>        
        `;
    }  
    resultClass(){
        return 'resultBlue';
    }
    editableIsInteger(e){
        //console.log('editableIsInteger', e); //this.$.mygridid.__data.items[e.currentTarget.id].param_type);
        if (fld=='INTEGER') {return true;}
        if (fld=='FLOAT') {return true;}
        return true;
    }
    enterResult(e){
        console.log('enterResult', 'callBackFunctionEnvMonitElem', this.callBackFunctionEnvMonitElem, e.currentTarget.id, e.currentTarget.value, this.$.mygridid.__data.items[e.currentTarget.id].result_id); 
        this.$.mygridid.__data.items[e.currentTarget.id].raw_value=e.currentTarget.value; 
        let sampleId=this.$.mygridid.__data.items[e.currentTarget.id].sample_id; 
        let resultId=this.$.mygridid.__data.items[e.currentTarget.id].result_id;
        let rawValue=e.currentTarget.value;
        //console.log(resultId, rawValue);

        var actionName='ENTERRESULT';
        var paramsUrl="actionName="+actionName+"&finalToken="+this.finalToken
        +"&procInstanceName="+this.procInstanceName + "&dbName="+dbName
        +"&sampleId="+sampleId  +"&resultId="+resultId  +"&rawValueResult="+rawValue;
        var datas = [];
        datas.procInstanceName=this.procInstanceName; datas.dbName=this.dbName; 
        datas.actionName=actionName; datas.paramsUrl=paramsUrl;   
//        console.log('process-us-sample-reception >> itemSelected >> this.SampleAPI', paramsUrl, datas);  
        this.sampleBackEndCallAPI(datas);
        //this.sampleAPI(datas);
    }
    isEditable(fld) {
        //console.log('isEditable', fld);
        if (fld=="1raw_value"){return true;}
        return false;
    }
    actionOnSel(){
    //    console.log('actionOnSel');
    }   
    dialogConfirmed(e){        
        //console.log('clicked', this.$.mygridid.selectedItems);        
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

     ready(){        
         super.ready();
         this.$.mygridid.clearCache();
         this.$.mygridid.selectedIdems=null;
     } 
}

customElements.define('em-demo-a-list-modal-enterresults', emDemoAListModalEnterresults);