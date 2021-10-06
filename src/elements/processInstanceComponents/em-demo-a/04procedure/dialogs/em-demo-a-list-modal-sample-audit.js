import {LitElement, css, html, property} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from './../../../../../store.js';
import 'pure-timeline/pure-timeline';
import 'pure-timeline/pure-timeline-item';
import {tableFieldLabel} from '../../03config/tablefield_labels'
import {FunctionsEnvMonitSamples} from '../../01moduleFunctionality/functions-env-monit-samples';
import {FrontendEndpointsEnvMonitSamples} from  '../../01moduleFunctionality/endpoints-frontend-env-monit-samples';
import {sampleAudit} from '../../03config/Dialogs/em-demo-a-list-modal-sample-audit-settings';
import{emDemoADialogSampleAuditStyle} from '../../03config/Dialogs/em-demo-a-list-modal-sample-audit-settings';
import './em-demo-a-dialogmodal-buttons';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-icons/iron-icons.js';
//import '@forter/map';
/**
 * `em-demo-a-list-modal-sample-audit` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
 
export class emDemoAListModalSampleAudit extends FrontendEndpointsEnvMonitSamples(FunctionsEnvMonitSamples(tableFieldLabel(connect(store)(LitElement)))) {
    static get properties() {
        return {
            clickedPart:{type: String},
            close:{type: Boolean},
            auditInfo:{ type: Object},
            selectedLanguage:{type: String},
            TranslationsAttributes:{type: Object},
            selectedObject:{ type: Object},
            windowDefinition:{ type: Object},
            buttonDefinition:{ type: Object},
            active: { type: Boolean },
        }
    }
    stateChanged(state) {
        //console.log('stateChanged');
        if (state.emDemoA!=null){
            this.auditInfo= state.emDemoA.sampleAudit;
        }
        //console.log(this.auditInfo);
    }        

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
     constructor() {
        super();
        this.windowDefinition=sampleAudit;
        this.buttonDefinition=sampleAudit.buttons[0];
        this.selectedLanguage='es';
        this.TranslationsAttributes={};
        this.TranslationsAttributes.repository="data";
        this.TranslationsAttributes.table="sample_audit";
        this.close=false;
        this.auditInfo=[];
        this.auditFake=[{audit_id: 1350}, {audit_id: 1747}];
        this.auditInfoNoDate=[{"audit_id":1746,"sample_id":263,"action_name":"SAMPLE_LOGGED","fields_updated":"[spec_code:LlenadoVialesFA2018, spec_variation_name:GradoA, spec_code_version:1, spec_analysis_variation:Contacto-Contacto, program_name:LlenadoVialesFA2018, location_name:V03F, sampler_area:Guante Derecho, status:RECEIVED, sample_config_code:prog_pers_template, sample_config_code_version:1, current_stage:Sampling]","sublevel":[{"audit_id":1747,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_ADDED","fields_updated":"[analysis:Contacto, method_name:Contacto, method_version:1, status:, sample_id:263, added_on:2019-12-27, added_by:labplanet]","reviewed":"","reviewed_on":""},{"audit_id":1748,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_ADDED","fields_updated":"[param_name:Recuento, mandatory:true, analysis:Contacto, param_type:quantitative, replica:1, uom:, uom_conversion_mode:, sample_id:263, test_id:1356, status:, method_name:Contacto, method_version:1, limit_id:30]","reviewed":"","reviewed_on":""},{"audit_id":1749,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_ADDED:SAMPLE_EVALUATE_STATUS","fields_updated":"[status: keep status RECEIVED]","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":1854,"sample_id":263,"action_name":"SET_SAMPLING_DATE","fields_updated":"[sampling_date12020-01-13T01:10:00.487654]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5240,"sample_id":263,"action_name":"SAMPLESTAGE_MOVETONEXT","fields_updated":"[current_stagelabplanetIncubation, previous_stagelabplanetSampling]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5278,"sample_id":263,"action_name":"SAMPLE_SET_INCUBATION_STARTED","fields_updated":"[incubation_start62020-04-29T12:07:52.347701, incubation_incubator6INC_1, incubation_start_temp_event_id6129, incubation_start_temperature635.0, incubation_passed6false]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5283,"sample_id":263,"action_name":"SAMPLE_SET_INCUBATION_ENDED","fields_updated":"[incubation_end62020-04-29T12:07:58.978077, incubation_incubator6INC_1, incubation_end_temp_event_id6129, incubation_end_temperature635.0, incubation_passed6true]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5288,"sample_id":263,"action_name":"SAMPLE_SET_INCUBATION_STARTED","fields_updated":"[incubation2_start62020-04-29T12:11:22.554395, incubation2_incubator6INC_1, incubation2_start_temp_event_id6129, incubation2_start_temperature635.0, incubation2_passed6false]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5294,"sample_id":263,"action_name":"SAMPLE_SET_INCUBATION_ENDED","fields_updated":"[incubation2_end62020-04-29T12:11:25.774642, incubation2_incubator6INC_1, incubation2_end_temp_event_id6129, incubation2_end_temperature635.0, incubation2_passed6true]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5295,"sample_id":263,"action_name":"EM_BATCH_INCUB_END","fields_updated":"[current_stagewiamPlateReading, previous_stagewiamIncubation]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5314,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED","fields_updated":"[raw_value:2, spec_eval:OUT_SPEC_MAX, spec_eval_detail:resultCheck_quantitativeOutSpecByMaxStrict (*** This errorCode has no entry defined in messages property file), entered_by:6, entered_on:2020-04-29T12:12:20.004270, status:RE-ENTERED, limit_id:30]","sublevel":[{"audit_id":5315,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED:SAMPLE_ANALYSIS_EVALUATE_STATUS","fields_updated":"[status:COMPLETE]","reviewed":"","reviewed_on":""},{"audit_id":5316,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED:SAMPLE_EVALUATE_STATUS","fields_updated":"[status: keep status RECEIVED]","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5317,"sample_id":263,"action_name":"ENTERRESULT","fields_updated":"[current_stagewiamMicroorganismIdentification, previous_stagewiamPlateReading]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5353,"sample_id":263,"action_name":"MICROORGANISM_ADDED","fields_updated":"[Added microorganism Actinobacilus]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5384,"sample_id":263,"action_name":"SAMPLESTAGE_MOVETOPREVIOUS","fields_updated":"[current_stagewiamPlateReading, previous_stagewiamMicroorganismIdentification]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5385,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED","fields_updated":"[raw_value:0, spec_eval:IN, spec_eval_detail:resultCheck_quantitativeIn (*** This errorCode has no entry defined in messages property file), entered_by:6, entered_on:2020-04-29T18:21:54.880418, status:RE-ENTERED, limit_id:30]","sublevel":[{"audit_id":5386,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED:SAMPLE_ANALYSIS_EVALUATE_STATUS","fields_updated":"[status:COMPLETE]","reviewed":"","reviewed_on":""},{"audit_id":5387,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED:SAMPLE_EVALUATE_STATUS","fields_updated":"[status: keep status RECEIVED]","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5388,"sample_id":263,"action_name":"ENTERRESULT","fields_updated":"[current_stagewiamEND, previous_stagewiamPlateReading]","sublevel":[{"audit_id":"","sample_id":"","action_name":"No child","fields_updated":"","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""},{"audit_id":5389,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED","fields_updated":"[raw_value:1, spec_eval:OUT_SPEC_MAX, spec_eval_detail:resultCheck_quantitativeOutSpecByMaxStrict (*** This errorCode has no entry defined in messages property file), entered_by:6, entered_on:2020-04-29T18:22:00.365153, status:RE-ENTERED, limit_id:30]","sublevel":[{"audit_id":5390,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED:SAMPLE_ANALYSIS_EVALUATE_STATUS","fields_updated":"[status:COMPLETE]","reviewed":"","reviewed_on":""},{"audit_id":5391,"sample_id":263,"action_name":"SAMPLE_ANALYSIS_RESULT_ENTERED:SAMPLE_EVALUATE_STATUS","fields_updated":"[status: keep status RECEIVED]","reviewed":"","reviewed_on":""}],"reviewed":"","reviewed_on":""}];
      }    

    static get styles() {
        return [
            //super.styles,
        emDemoADialogSampleAuditStyle,
        css`
        //     $primary: #3F51B5;
        //     $dark-primary: #303F9F;
        //     $light-primary: #C5CAE9;
        //     $text: #FFFFFF;
        //     $primary-text: #212121;
        //     $secondary-text: #757575;
        //     $accent: #FF4081;
            
        //     section {
        //       padding: 100px 0;
        //     }
            
        //     html, body {
        //       overflow-x: hidden;
        //     }
            
        //     body {
        //       font-family: 'Roboto';
        //       font-size: 17px;
        //       font-weight: 400;
        //       background-color: #eee;
        //     }
            
        //     h1 {
        //       font-size: 200%;
        //       text-transform: uppercase;
        //       letter-spacing: 3px;
        //       font-weight: 400;
        //     }
            
        //     header {
        //         background: $primary;
        //         color: $text;
        //         padding: 150px 0;
            
        //         p {
        //             font-family: 'Allura';
        //             color: rgba(255, 255, 255, .2);
        //             margin-bottom: 0;
        //             font-size: 60px;
        //             margin-top: -30px;
            
        //         }
        //     }
            
        //     .timeline {
            
        //         position: relative;
            
        //         &::before {
        //             content: '';
        //             background: $light-primary;
        //             width: 5px;
        //             height: 95%;
        //             position: absolute;
        //             left: 50%;
        //             transform: translateX(-50%);
        //         }
        //     }
            
        //     .timeline-item {
        //         width: 100%;
        //         margin-bottom: 70px;
            
        //         &:nth-child(even) {
            
        //             .timeline-content {
        //                 float: right;
        //                 padding: 40px 30px 10px 30px;
            
        //                 .date {
        //                     right: auto;
        //                     left: 0;
        //                 }
            
        //                 &::after {
        //                     content: '';
        //                     position: absolute;
        //                     border-style: solid;
        //                     width: 0;
        //                     height: 0;
        //                     top: 30px;
        //                     left: -15px;
        //                     border-width: 10px 15px 10px 0;
        //                     border-color: transparent #f5f5f5 transparent transparent;
        //                 }
        //             }
        //         }
            
        //         &::after {
        //             content: '';
        //             display: block;
        //             clear: both;
        //         }
        //     }
            
            
        //     .timeline-content {
        //         position: relative;
        //         width: 45%;
        //         padding: 10px 30px;
        //         border-radius: 4px;
        //         background: #f5f5f5;
        //         box-shadow: 0 20px 25px -15px rgba(0, 0, 0, .3);
            
        //         &::after {
        //             content: '';
        //             position: absolute;
        //             border-style: solid;
        //             width: 0;
        //             height: 0;
        //             top: 30px;
        //             right: -15px;
        //             border-width: 10px 0 10px 15px;
        //             border-color: transparent transparent transparent #f5f5f5;
        //         }
        //     }
            
        //     .timeline-img {
        //         width: 30px;
        //         height: 30px;
        //         background: $primary;
        //         border-radius: 50%;
        //         position: absolute;
        //         left: 50%;
        //         margin-top: 25px;
        //         margin-left: -15px;
        //     }
            
        //     a {
        //         background: $primary;
        //         color: $text;
        //         padding: 8px 20px;
        //         text-transform: uppercase;
        //         font-size: 14px;
        //         margin-bottom: 20px;
        //         margin-top: 10px;
        //         display: inline-block;
        //         border-radius: 2px;
        //         box-shadow: 0 1px 3px -1px rgba(0, 0, 0, .6);
            
        //         &:hover, &:active, &:focus {
        //             background: darken($primary, 10%);
        //             color: $text;
        //             text-decoration: none;
        //         }
            
        //     }
            
        //     .timeline-card {
        //         padding: 0!important;
            
        //         p {
        //             padding: 0 20px;
        //         }
            
        //         a {
        //             margin-left: 20px;
        //         }
        //     }
            
        //     .timeline-item {
        //       .timeline-img-header {
        //                 background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url('https://picsum.photos/1000/800/?random') center center no-repeat;
        //                 background-size: cover;
        //             }
        //     }
            
        //     .timeline-img-header {
            
        //         height: 200px;
        //         position: relative;
        //         margin-bottom: 20px;
            
        //         h2 {
        //             color: $text;
        //             position: absolute;
        //             bottom: 5px;
        //             left: 20px;
        //         }
        //     }
            
        //     blockquote {
        //         margin-top: 30px;
        //         color: $secondary-text;
        //         border-left-color: $primary;
        //         padding: 0 20px;
        //     }
            
        //     .date {
        //         background: $accent;
        //         display: inline-block;
        //         color: $text;
        //         padding: 10px;
        //         position: absolute;
        //         top: 0;
        //         right: 0;
        //     }
            
        //     @media screen and (max-width: 768px) {
            
        //         .timeline {
            
        //             &::before {
        //                 left: 50px;
        //             }
            
        //             .timeline-img {
        //                 left: 50px;
        //             }
            
        //             .timeline-content {
        //                 max-width: 100%;
        //                 width: auto;
        //                 margin-left: 70px;
        //             }
            
        //             .timeline-item {
            
        //                 &:nth-child(even) {
            
        //                     .timeline-content {
        //                         float: none;
            
        //                     }
        //                 }
            
        //                 &:nth-child(odd) {
            
        //                     .timeline-content {
                                
        //                         &::after {
        //                             content: '';
        //                             position: absolute;
        //                             border-style: solid;
        //                             width: 0;
        //                             height: 0;
        //                             top: 30px;
        //                             left: -15px;
        //                             border-width: 10px 15px 10px 0;
        //                             border-color: transparent #f5f5f5 transparent transparent;
        //                         }
        //                     }
            
        //                 }
        //             }
        //         }
                
        //     }
            paper-checkbox.reviewed{
                --paper-checkbox-unchecked-color: green;
            }
            pure-timeline{
                width:95%;
                text-align:left;
                
            }
            pure-timeline-item.detail{
                font-size:0.9vmax;
                text-align:left;
                --item-background:#baebf9;
            }
            pure-timeline-item.closefalse{
                font-size:1vmax;
                text-align:left;
                --item-background:#c2f2ff;
            }
            pure-timeline-item.closetrue{
                --dots:green;
                text-align:left;
                --item-background:#c2f2ff;
            }
            div.itemDetail{
                font-size:1vmax;
            }
            div.hidden{
                display: none;
            }
            div.visible{
                visibility: initial;
            }
            img{
                height:2vmax;
            }
            `,
            
        ];
    }

    /**
     * 
     *         <fc-map zoom="12" lat="22.3193" long="114.1694" .markers="${{'cities':{'opened':true,'data':[{'position':[51.5074,0.1278],'label':'London','icon':{'iconUrl':'https://img.icons8.com/material-rounded/2x/marker.png','iconSize':[28,28],'iconAnchor':[0,0],'popupAnchor':[14,-7]},'tooltipClass':'darkTooltip'},{'position':[40.7128,-74.006],'label':'New York','icon':{'iconUrl':'https://img.icons8.com/material-rounded/2x/marker.png','iconSize':[28,28],'iconAnchor':[0,0],'popupAnchor':[14,-7]},'tooltipClass':'darkTooltip'},{'position':[22.3193,114.1694],'label':'Hong Kong','icon':{'iconUrl':'https://img.icons8.com/material-rounded/2x/marker.png','iconSize':[28,28],'iconAnchor':[0,0],'popupAnchor':[14,-7]},'tooltipClass':'darkTooltip'}]},'buildings':{'opened':false,'data':[{'position':[22.3034,114.1602],'label':'ICC (Tallest Building in Hong Kong)','icon':{'iconUrl':'https://img.icons8.com/material-rounded/2x/building.png','iconSize':[28,28],'iconAnchor':[0,0],'popupAnchor':[14,-7]},'tooltipClass':'darkTooltip'},{'position':[40.7127,-74.0134],'label':'One World Trade Center (Tallest Building in NYC)','icon':{'iconUrl':'https://img.icons8.com/material-rounded/2x/building.png','iconSize':[28,28],'iconAnchor':[0,0],'popupAnchor':[14,-7]},'tooltipClass':'darkTooltip'},{'position':[51.5045,0.0865],'label':'The Shard (Tallest Building in London)','icon':{'iconUrl':'https://img.icons8.com/material-rounded/2x/building.png','iconSize':[28,28],'iconAnchor':[0,0],'popupAnchor':[14,-7]},'tooltipClass':'darkTooltip'}]}}}">
 
        <fc-layout slot="buttons" rows=1 columns=3 gap="30px" style="margin: 15px 0px 15px 15px;" flowColumn>
         <fc-button onclick="this.parentNode.parentNode.setView({ lat: 51.5074, long: 0.1278, zoom: 12 })" intent="primary">Go To London</fc-button>
         <fc-button onclick="this.parentNode.parentNode.setView({ lat: 40.7128, long: -74.0060, zoom: 12 })" intent="primary">Go To New York</fc-button>
         <fc-button onclick="this.parentNode.parentNode.flyTo({ lat: 22.3193, long: 114.1694, zoom: 12 })" intent="primary">Fly To Hong Kong</fc-button>
        </fc-layout>
    
       </fc-map>        

     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    /* @mouseover="${this.showAlert} */
    render() {
        return html`
        <style include="em-demo-a-dialog-sample-audit-settings""></style>              
        <div class="modal-content bgimg">
        <div name="tableDefinitionButtons" class="buttonGroup">
            <em-demo-a-dialogmodal-buttons ?display-close-button="${this.windowDefinition.dialogButtons.displayCloseButton}" ?display-cancel-button="${this.windowDefinition.dialogButtons.displayCancelButton}" ?display-confirm-button="${this.windowDefinition.dialogButtons.displayConfirmButton}"
                @dialog-cancelbutton-clicked="${this.dialogCanceled}" @dialog-confirmbutton-clicked="${this.dialogConfirmed}"
            ></em-demo-a-dialogmodal-buttons>             
        </div>
        ${this.auditInfo.map(i => html`
            <pure-timeline>
                <pure-timeline-item class="close${this.close}"> 
                ${this.windowDefinition.signEnabled ? html`
                    ${i.reviewed ? html`
                        <img src="./images/signed.png" title="${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'reviewed_on', this.selectedLanguage)}:${i.reviewed_on}" disabled></img>
                    `:html`
                        <field-controller id="${this.buttonDefinition.name}"  .field="${this.buttonDefinition}"  .selected-object="${i}"
                            @field-button-clicked="${this.showAlert}" .button-definition="${this.buttonDefinition}"> 
                        </field-controller>
                    `}
                `:html``}
                <paper-checkbox unchecked auditid="detail${i.audit_id}" .button-definition="${this.setAuditReviewedButton}" .selected-object="${i}" .revObj="${i}" open=false @click="${this.toogleCheckStage}"></paper-checkbox>                           

                ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'action_name', this.selectedLanguage)}: ${i.action_name} 
                <div class="hidden" id="detail${i.audit_id}">
                ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, '*performed_on', this.selectedLanguage)}: ${i.date}
                ${this.windowDefinition.signEnabled ? html` 
                    ${i.reviewed ? html` ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, '*and', this.selectedLanguage)} ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'reviewed_on', this.selectedLanguage)}:${i.reviewed_on}`:html``}
                `:html``}
                    <li>${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'audit_id', this.selectedLanguage)}: ${i.audit_id}</li> 
                    ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'fields_updated', this.selectedLanguage)}: ${i.fields_updated}
                    
                    ${i.sublevel[0].action_name!='No child' ? html`
                        ${i.sublevel.map(isub => html`
                            <pure-timeline-item class="detail"> 
                            ${this.windowDefinition.signChildEnabled ? html`                                
                                ${isub.reviewed ? html`
                                    <img src="./images/signed.png" title="${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'reviewed_on', this.selectedLanguage)}:${isub.reviewed_on}" disabled></img>
                                `:html`                                
                                    <field-controller id="${this.buttonDefinition.name}"  .field="${this.buttonDefinition}"  .selected-object="${isub}"
                                        @field-button-clicked="${this.showAlert}" .button-definition="${this.buttonDefinition}"> 
                                    </field-controller>
                                `}    
                            `:html``}
                            <paper-checkbox unchecked auditid="detail${isub.audit_id}" .button-definition="${this.setAuditReviewedButton}" .selected-object="${isub}" .revObj="${isub}" open=true @click="${this.toogleCheckStage}"></paper-checkbox>                           
                            <div class="visible" id="detail${isub.audit_id}">
                                ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'action_name', this.selectedLanguage)}: ${isub.action_name} 
                                ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, '*performed_on', this.selectedLanguage)}: ${isub.date}
                                ${this.windowDefinition.signChildEnabled ? html` 
                                    ${isub.reviewed ? html` ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, '*and', this.selectedLanguage)} ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'reviewed_on', this.selectedLanguage)}:${isub.reviewed_on}`:html``}
                                `:html``}
                                ${this.getTableFieldLabel(this.TranslationsAttributes.repository,this.TranslationsAttributes.table, 'fields_updated', this.selectedLanguage)}: ${isub.fields_updated}
                            </div>
                            </pure-timeline-item> 
                        `)}
                    `:``}
                </div>
                </pure-timeline-item>

            </pure-timeline>
        </div>
        `)}
        `;
    }
    toogleCheckStage(e){
        console.log(e.currentTarget.attributes["open"].value);        
        var elem=this.shadowRoot.getElementById(e.currentTarget.attributes["auditid"].value);//(actionDefinition.dialogInfo.webComponentName); 
        if (e.currentTarget.attributes["open"].value=="true"){
            e.currentTarget.attributes["open"].value="false";
            if (elem){
                elem.className="hidden";
            }
            return;
        }
        e.currentTarget.attributes["open"].value="true";
        if (elem){
            elem.className="visible";
        }
    return;
    }
    checkStateLabel(e){
        if (e.open==undefined){return false;}
        return e.open;
    }
    showAlert(e){        
        this.selectedObject=e.currentTarget["selected-object"];
        alert(this.selectedObject.audit_id);
        var myEye=[];
        myEye.detail={}
        myEye.detail.buttonDefinition=this.buttonDefinition;
        myEye.detail.selectedObject=this.selectedObject;
        this.setAuditReviewed(myEye);
        }
    refreshWindow() {
        this.loadData();
    }
    loadData(){
console.log('loadData', 'sampleId', this.sampleId);
        var datas=[];
        datas.sampleId=this.sampleId;
        datas.sampleAuditFieldToRetrieve=this.windowDefinition.fieldToRetrieve;
        this.getSampleAudit(datas);
    }

}
customElements.define('em-demo-a-list-modal-sample-audit', emDemoAListModalSampleAudit);