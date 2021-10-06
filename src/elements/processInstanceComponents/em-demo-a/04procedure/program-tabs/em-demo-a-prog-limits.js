import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {tableFieldLabel} from '../../03config/tablefield_labels';
import {programLimitsTab_sectionsTitle} from '../../03config/Programs/em-demo-a-progtab-limits-settings';
class EmDemoAProgLimits extends tableFieldLabel(FieldsMethods(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;   
        if (state.emDemoA!=null){
            //this.selectedProgram=state.emDemoA.selectedProgram;
            // if (state.emDemoA.selectedProgram!=null && state.emDemoA.selectedProgram.spec_definition!=null){                
            //     this.selProgSpecInfo=state.emDemoA.selectedProgram.spec_definition.spec;
            //     this.selProgSpecLimits=state.emDemoA.selectedProgram.spec_definition.spec_limits;
            // }
        }        
    }        
    static get properties() {
        return {
            selectedLanguage: String,
            selectedProgram:{type: Object},
            // selProgSpecInfo:{type: Object},
            // selProgSpecLimits:{type: Object},
            programLimitsTab_sectionsTitle:{type: Object, value: programLimitsTab_sectionsTitle},
            tableTitle:{type: Object, value:{name:'tableTitle', label_en:'Program limits list', label_es:'Lista de rangos límite para el programa'}},
        }
    }
    static get template() {
        return html`
        <style>
            div.wrapper{display:flex;}
            p {color: #032bbc;}
            p.title{
                color: #018786; font-size: 30px;
            }
            li {margin: 5px;
                color: #032bbc;}
            p.tableTitle{
                margin-top: 0px;
                margin-bottom: 3px;
                color: #4285f4;
                font-size:6vmin;
            } 
            .styled-table {
                display: -webkit-inline-box;
                margin-top: 0px;
                margin-bottom: 3px;
                color: #4285f4;
                font-size:2vmin;
                border-collapse: collapse;
                margin: 25px 0;
/*                font-size: 0.9em; */
                font-family: sans-serif;
                min-width: 400px;
                box-shadow: 0 0 20px #44cbe6;
            }            
            .styled-table thead tr {
                background-color: #2989d8;
                color: #ffffff;
                text-align: left;
            }   
            .styled-table th,
            .styled-table td {
                color: #032bbc; 
                padding: 12px 15px;
            }  
            .styled-table tbody tr {
                border-bottom: 1px solid #207cca;
            }
            
            .styled-table tbody tr:nth-of-type(even) {
                background-color: #c2f2ff5c;
            }
            
            .styled-table tbody tr:last-of-type {
                border-bottom: 2px solid #009879;
            }      
            .styled-table tbody tr.active-row {
                font-weight: bold;
                color: #009879;
            }                                                    
        </style>
        <div>
            <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}}  {{selectedProgram.name}}</p>
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>{{getTableFieldLabel('config', 'specLimits', 'variation', selectedLanguage)}}</th>
                        <th>{{getTableFieldLabel('config', 'specLimits', 'analysis', selectedLanguage)}}</th>
                        <th>{{getTableFieldLabel('config', 'specLimits', '*method_and_version', selectedLanguage)}}</th>
                        <th>{{getTableFieldLabel('config', 'specLimits', 'parameter', selectedLanguage)}}</th>
                        <th>{{getTableFieldLabel('config', 'specLimits', '*rule', selectedLanguage)}}</th>
                    </tr>
                </thead>
                <tbody>
                    <template is="dom-repeat" items="{{selectedProgram.spec_definition.spec_limits}}" as="limit">
                    <tr>            
                        <td>{{valueTranslation('CONFIG', 'SPECLIMITS', limit.variation_name, selectedLanguage)}}</td>
                        <td>{{valueTranslation('CONFIG', 'SPECLIMITS', limit.analysis, selectedLanguage)}}</td>
                        <td>{{valueTranslation('CONFIG', 'SPECLIMITS', limit.method_name, selectedLanguage)}} v{{limit.method_version}}</td>
                        <td>{{valueTranslation('CONFIG', 'SPECLIMITS', limit.parameter, selectedLanguage)}}</td>
                        <td>
                           <span style="color:green">{{fieldValueFromObject(selectedLanguage, 'spec_text_green_area', limit)}}</span>
                            <span style="color:orange">{{fieldValueFromObject(selectedLanguage, 'spec_text_yellow_area', limit)}}</span>
                            <span style="color:red">{{fieldValueFromObject(selectedLanguage, 'spec_text_red_area', limit)}}</span>
                        </td>
                    </tr>
                    </template>
                </tbody>
            </table>        
        </div>
        `;
    }
}
customElements.define('em-demo-a-prog-limits', EmDemoAProgLimits);