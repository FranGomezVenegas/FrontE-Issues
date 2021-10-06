import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {ApiAndFrontendSopUser} from '../../../../../platform-mixins/apis/api-and-frontend-sopuser'; 
import {tableFieldLabel} from '../../../../../config/platform/tablefield_labels';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {sopUserPendingSop_fieldToRetrieve, sopMyPendingSops_buttons, sopStatusLabel, sopMyPendingSops_cardContent} from '../../../../../config/platform/logic/sop-config';
import {tokenMixin} from '../../../../../platform-mixins/store/token-mixin';

import '../pdf-link.js';
import './my-pending-sops-style';

class MyPendingSops extends tokenMixin(tableFieldLabel(FieldsMethods(ApiAndFrontendSopUser(connect(store)(PolymerElement))))) {
    static get properties() {
        return {
            allMyPendingSops: Object,
            dialogButtons: { type: Array, value: sopMyPendingSops_buttons},  
            sopStatusLabel:{type: Object, value: sopStatusLabel},
            sopMyPendingSops_cardContent: {type: Object, value: sopMyPendingSops_cardContent},
            tableFieldLabelSchemaName: {type: String, value:'config'},
            tableFieldLabelTableName: {type: String, value:'sop'},
            selectedLanguage: {type:String, notify:true},
        }
    }
    stateChanged(state) {
        this.allMyPendingSops = state.SOPS.userPendingSop;
    }
    onFinalTokenFilled(){
        var paramsUrl='sopFieldsToRetrieve='+sopUserPendingSop_fieldToRetrieve;
        var datas = [];
        datas.paramsUrl=paramsUrl;
        this.frontEndSopUserAPI(datas);
    }   
    
    static get template() {
        return html`
            <style include="my-pending-sops-style"></style>
            <div class="wrapperMySops">
                <template is="dom-repeat" items="[[allMyPendingSops]]" as="procedures">  
                <div class="cardPendingSops"> 
                    <h2><p><b>{{procedures.procedure_name}}   </b></p></h2>
                    <template is="dom-repeat" items="[[procedures.pending_sops]]" as="item">  
                        <template is="dom-if" if="{{sopMyPendingSops_cardContent.display_pdf_link}}">
                            <p><pdf-link align="center" file-link="[[item.file_link]]"></pdf-link></p>
                        </template>
                        <p><b>{{getTableFieldLabel(tableFieldLabelSchemaName, tableFieldLabelTableName, '*procedure_name', selectedLanguage)}}:</b> {{procedures.procedure_name}}<p></p>
                        <p><b>{{getTableFieldLabel(tableFieldLabelSchemaName, tableFieldLabelTableName, 'sop_name', selectedLanguage)}}:</b> {{item.sop_name}}</p>
                        <p><b>{{getTableFieldLabel(tableFieldLabelSchemaName, tableFieldLabelTableName, 'brief_summary', selectedLanguage)}}:</b> {{item.brief_summary}}</p>
                        <template is="dom-if" if="{{sopMyPendingSops_cardContent.display_certification_status_icon}}">
                            <p><b>{{getTableFieldLabel(tableFieldLabelSchemaName, tableFieldLabelTableName, '*certification_status', selectedLanguage)}}:</b> 
                                    <paper-icon-button style="{{certificationStatusStyleDefinition(item)}}" icon="{{certificationStatus(item)}}" 
                                    title="{{statusLegend(item, selectedLanguage)}}" disabled="{{field.read_only}}" value="{{field.name}}" ></paper-icon-button>
                            </p>
                        </template>
                        <div name="Buttons1" class="buttonGroup">
                            <template is="dom-repeat" items="{{dialogButtons}}" as="currentfield">       
                                <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" value="{{item}}"
                                on-field-button-clicked="fieldButtonClickedForSops" on-field-list-value-changed="onListChange"
                                selected-Object="[[item]]" procedure-name="{{procedures.procedure_name}}"> 
                                </field-controller>
                            </template>  
                        </div>                                                       
                    </template>
                </div>
                </template>            
            </div>
        `;
    }
}
customElements.define('my-pending-sops', MyPendingSops);