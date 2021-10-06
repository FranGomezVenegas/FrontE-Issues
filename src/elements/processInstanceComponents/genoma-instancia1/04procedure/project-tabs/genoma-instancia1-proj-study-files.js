import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';

import '../../../../internalComponents/Charts/chart-controller';
import {windowDefinition} from '../../03config/Project/genoma-instancia1-projtab-samples-set-settings';
import '../../03config/Project/genoma-instancia1-projtab-samples-set-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';
import '../../../../internalComponents/Elements/table-with-buttons';
import './../../../../platformComponents/Tabs/SOP/MyPendingSOPs/my-pending-sops-style';
import './../../../../platformComponents/Tabs/SOP/pdf-link';

class GenomaInstancia1ProjStudyFiles extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.genomaInstancia1!=null){
            this.selectedStudy=state.genomaInstancia1.selectedStudy;
        }
    }        
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            selectedProject:{type: Object},
            sopMyPendingSops_cardContent: {type: Object, value:{
                display_pdf_link: true,
                display_certification_status_icon: false,
                sopFieldsToDisplay:['owner_table', 'owner_id', 'doc_name', 'brief_summary'],  
            }},  
/*            displayButtons: true,
            buttons: {type: Array, value:[
                {
                  "name": "SOP_MARK_AS_COMPLETED",
                  "label_en": "Mark Completed", "label_es": "Marcar Completado",
                  "type": "icon-button",
                  "icon_name": "icons:restore-page", "icon_color": "aqua",
                  "esign_required": false,
                  "read_only": false,
                }
            ]},        
*/            
        }        
    }
    static get template() {
        return html`        
        <style include="my-pending-sops-style"></style>        
        <div name="windowDefinitionButtons" class="buttonGroup">
            <template is="dom-if" if="[[displayButtons]]"> 
                <template is="dom-repeat" items="{{buttons}}" as="currentfield">       
                    <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" modulearea="STUDIES" selected-object="{{curStudy}}"
                    on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
                    </field-controller>
                </template>  
            </template>             
        </div>
            
        <div style="display:flex;">
            <template is="dom-repeat" items="[[selectedStudy.study_objects_files]]">  
            <div class="cardPendingSops"> 
                <template is="dom-if" if="{{sopMyPendingSops_cardContent.display_pdf_link}}"> 
                    <p><pdf-link align="center" file-link="[[item.file_link]]"></pdf-link></p>
                </template> 
                <p><b>Owner:</b> {{item.owner_table}}-{{item.owner_id}}<p></p>
                <p><b>SOP Name:</b> {{item.doc_name}}</p>
                <p><b>Summary:</b> {{item.brief_summary}}</p>
                <template is="dom-if" if="{{sopMyPendingSops_cardContent.display_certification_status_icon}}">
                    <p><b>My Certification Status:</b> 
                            <paper-icon-button style="{{certificationStatusStyleDefinition(item)}}" icon="{{certificationStatus(item)}}" 
                            title="{{statusLegend(item, selectedLanguage)}}"
                            disabled="{{field.read_only}}" value="{{field.name}}" ></paper-icon-button>
                    </p>
                </template> 
                <div name="Buttons1" class="buttonGroup">
                    <template is="dom-repeat" items="{{dialogButtons}}" as="currentfield">       
                        <field-controller id="{{currentfield.name}}"  field="{{currentfield}}" value="{{item}}"
                        on-field-button-clicked="fieldButtonClickedForSops" on-field-list-value-changed="onListChange"
                        selected-Object="[[item]]"> 
                        </field-controller>
                    </template>  
                </div>                                                                         
            </template>
        </div>                           
        `;
    }
}
customElements.define('genoma-instancia1-proj-study-files', GenomaInstancia1ProjStudyFiles);