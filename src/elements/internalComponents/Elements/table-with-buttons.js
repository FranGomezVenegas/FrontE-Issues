import {LitElement, html, css} from 'lit-element';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
import './../Grids/myvaadin-grid';
import {tableWithButtonsStyle} from './table-with-buttons-style';

/**
<!--  * `table-with-buttons` Description -->
<!--  * -->
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TableWithButtons extends (FieldsMethods((LitElement))) {
    static get properties() {
        return {
            selected_language:{type: String },
            modulearea:{type: String},
            element_definition:{type: Object},
            table_data:{type: Object},
            selected_object:{type: Object, notify:true},
            tableHidden:{type: Boolean},
            
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.tableHidden=true;
        // console.log('element_definition', this.element_definition);
    }

    static get styles() {
        return [
            //super.styles,
            tableWithButtonsStyle,
            css``,
        ]; 
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <!-- <style include="genoma-instancia1-projtab-study-samples-style"></style> -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
            crossorigin="anonymous"/>  

            <!-- <genoma-instancia1-webcomponent-project id="myElementsProject" selected-study="${this.selectedStudy}"></genoma-instancia1-webcomponent-project> -->
            <div style="display:flex; padding:2px;">
                <button style="border:none; background-color:transparent;" @click="${this.tableDisplayToogle}">
                    <span style="${this.tableIconColorStyle(this.tableHidden)}" class="${this.tableIcon(this.tableHidden)}" > 
                </button>
                ${this.element_definition.tableTitle.display ? html`
                    <p class="tableTitle"> ${this.labelValue(this.selected_language, this.element_definition.tableTitle.label)}</p>
                `:``}
            </div>
            ${this.tableHidden ? html`
                <div name="elementDefinitionButtons" class="buttonGroup">
                    ${this.element_definition.displayRefreshButton ? html`
                        <vaadin-button id="refreshButton" @click="${this.refreshWindowClicked}"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                    `:``}
                    ${this.element_definition.displayButtons && this.element_definition.buttons ? html`
                    
                    ${this.element_definition.buttons.map(currentfield => html`
                    <field-controller modulearea="${this.modulearea}" id="${currentfield.name}"  .field="${currentfield}"  .selectedobject="${this.selected_object}"
                         @field-list-value-changed="${this.sampleSelected}"> 
                    </field-controller>
                    `)}
                `:``}
                </div>                      
<!--                <vaadingrid-lit-singleselect id="genoma-instancia1-proj-samplessetgrid" .headerfields="${this.element_definition.tableHdrFlds}" 
                    .rowcontainer="${this.table_data}" .selected_object="${this.selected_object}" @selected-object-changed=${this.objChanged}>
                </vaadingrid-lit-singleselect>  -->

                <myvaadin-grid class="grid" id="ProcDeploy-samplesampling" .griddefinition="${this.element_definition}" .headerfields="${this.element_definition.tableHdrFlds}" 
                    .rowcontainer="${this.table_data}" .selected-object="${this.selected_object}">
                </myvaadin-grid> 

            `: html` 
            ${this.element_definition.tableSectionWhenHidden!=undefined && this.element_definition.tableSectionWhenHidden.displaySelectedObjectData ? html`
                ${this.selected_object ? html`
                    <div class="selectedobjectwhentblhiddenDiv" >
                        ${this.element_definition.tableSectionWhenHidden.selectedObjectData.map(currentfield => html`
                            <p class="selectedobjectwhentblhiddenFld">${this.selectedObjectFldValue(this.selected_object, currentfield)}</p>
                        `)}
                    `: html` <p class="nothingselectedwhentblhiddenFld"> No Object selected </p>`}
                    </div>
            `: ``} 
            `}            
        `;
    }
    selectedObjectFldValue(selObj, fld){
        return this.labelValue(this.selected_language, fld)+': '+selObj[fld.name];
    }
    objChanged(e){
        console.log('sampleSelected', e);
        this.selected_object=e.detail;
        let myEvent = new CustomEvent('selected-object-changed', { 
            detail: e.detail ,
            bubbles: true, 
            composed: true });
          this.dispatchEvent(myEvent);    
    
    }
    tableDisplayToogle(e){        
        this.tableHidden=!this.tableHidden;
        console.log('tableDisplayToogle', this.selectedLanguage, this.tableHidden);
    }
    tableIcon(hd){
        //console.log('tableIcon', this.tableHidden, 'hd', hd);
        //return '';
        if (this.tableHidden){return "fa fa-angle-down";}
        return "fa fa-angle-up";        
    }
    tableIconColorStyle(hd){
        if (this.tableHidden){return "padding:0px 7px 0px 7px; font-size: 34px; border:none; background-color:transparent; color:green";}
        return "padding:0px 7px 0px 7px; font-size: 34px; border:none; background-color:transparent; color:red;";        
    }
    ready() {
        super.ready();
        if (this.elementDefinition!=undefined && this.elementDefinition.tableTitle!=undefined){
            this.tableTitle=this.elementDefinition.tableTitle;
            console.log(this.tableTitle, this.selectedLanguage);
        }
    }
     //  refreshWindow() {
    //      this.getProjects();
    //  }

    refreshWindowClicked(){        
        console.log('refreshWindowClicked');
        this.dispatchEvent(new CustomEvent('refresh-button-clicked', {
          bubbles: true,
          composed: true,
          detail: {'buttonName': 'refresh','value': 'value', 'buttonDefinition': 'this.field'}
        }));    
    }    

}

customElements.define('table-with-buttons', TableWithButtons);


// // import {LitElement, html, css} from 'lit-element';
// // import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

// // import {ModuleFunctionsGenoma} from '../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/0module-functions-genoma';
// // import '../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/genoma-instancia1-webcomponent-project';
// // import '../../processInstanceComponents/genoma-instancia1/03config/Project/genoma-instancia1-projtab-study-samples-settings';
// // import {FrontendEndpointsModuleGenoma} from '../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/endpoints-frontend-genoma.js';
// // /**
// //  * `table-with-buttons` Description
// //  *
// //  * @customElement
// //  * @polymer
// //  * @demo
// //  * 
// //  */
// // class TableWithButtons extends FrontendEndpointsModuleGenoma(FieldsMethods(ModuleFunctionsGenoma(LitElement))) {
//     static get properties() {
//         return {
//             // elementDefinition:{type: Object, notify:true,},
//             modulearea:{type: String},
//             // tableData:{type: Array},
//             // selectedProject:{type: Object, notify:true},
//             // selectedStudy:{type: Object, notify:true},
//             selectedLanguage:{type: String, },
//             tableTitle:{type: Object},
//             tableHidden:{type: Boolean},
//         }
//     }
//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//         super();
// //        this.modulearea='';
//         this.tableHidden=true;
//         console.log('constructor', 'selectedLanguage', this.selectedLanguage, 'modulearea', this.modulearea); //,
//         //'elementDefinition', this.elementDefinition, 'elementdefinition', this.elementdefinition);
//         // modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" .element-definition="{{windowDefinition.elementTable2}}"
//         // .table-data="{{selectedSample.study_variable_values}}" .selected-object="{{selectedObject}}        
//     }
// //     tableDisplayToogle(e){        
// //         this.tableHidden=!this.tableHidden;
// //         console.log('tableDisplayToogle', this.selectedLanguage, this.tableHidden);
// //     }
// //     tableIcon(hd){
// //         console.log('tableIcon', this.tableHidden);
// //         //return '';
// //         if (this.tableHidden){return "fa fa-angle-down";}
// //         return "fa fa-angle-up";        
// //     }
// //     tableIconColorStyle(hd){
// //         if (this.tableHidden){return "padding:0px 7px 0px 7px; font-size: 34px; border:none; background-color:transparent; color:green";}
// //         return "padding:0px 7px 0px 7px; font-size: 34px; border:none; background-color:transparent; color:red;";        
// //     }
//     static get template() {
//         return html`
//         ${this.modulearea} ${this.selectedLanguage}  dsdf
//         `;
            
//     // static get template() {
//     //     return html`
//     //         <style include="genoma-instancia1-projtab-study-samples-style"></style>
//     //         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
//     //         integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
//     //         crossorigin="anonymous"/>  
//     //         <genoma-instancia1-webcomponent-project id="myElementsProject" selected-study="{{selectedStudy}}"></genoma-instancia1-webcomponent-project>
//     //         ${this.modulearea} ${this.selectedLanguage}
//     //         <div style="display:flex; padding:2px;">
//     //             <button style="border:none; background-color:transparent;" on-click="tableDisplayToogle">
//     //                <span style="{{tableIconColorStyle(tableHidden)}}" class$="{{tableIcon(tableHidden)}}" > 
//     //             </button>
//     //             <template is="dom-if" if="[[elementDefinition.tableTitle.display]]">
//     //                 <p class="tableTitle"> {{labelValue(selectedLanguage, tableTitle.label)}}</p>
//     //             </template>  
//     //         </div>
//     //         <template is="dom-if" if="[[tableHidden]]"> 
//     //             <div name="elementDefinitionButtons" class="buttonGroup">
//     //                 <template is="dom-if" if="[[elementDefinition.displayRefreshButton]]"> 
//     //                     <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
//     //                 </template>  
//     //                 <template is="dom-if" if="[[elementDefinition.displayButtons]]"> 
//     //                     <template is="dom-repeat" items="{{elementDefinition.buttons}}" as="currentfield">       
//     //                         <field-controller modulearea="{{modulearea}}" id="{{currentfield.name}}"  field="{{currentfield}}"  selected-object="{{selectedObject}}"
//     //                             on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
//     //                         </field-controller>
//     //                     </template>  
//     //                 </template>  
//     //             </div>                      
//     //             <vaadingrid-lit-singleselect id="genoma-instancia1-proj-samplessetgrid" headerfields="{{elementDefinition.tableHdrFlds}}" 
//     //                 rowcontainer="{{tableData}}" selected-object="{{selectedObject}}">
//     //             </vaadingrid-lit-singleselect>
//     //         </template>
//     //     `;
//     }
// //     /**
// //      * Use for one-time configuration of your component after local
// //      * DOM is initialized.
// //      */
// //     ready() {
// //         super.ready();
// //         if (this.elementDefinition!=undefined && this.elementDefinition.tableTitle!=undefined){
// //             this.tableTitle=this.elementDefinition.tableTitle;
// //             console.log(this.tableTitle, this.selectedLanguage);
// //         }
// //     }
// //     refreshWindow() {
// //         this.getProjects();
// //     }
// // }
// // customElements.define('table-with-buttons', TableWithButtons);

// import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
// import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';

// import {ModuleFunctionsGenoma} from '../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/0module-functions-genoma';
// import '../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/genoma-instancia1-webcomponent-project';
// import '../../processInstanceComponents/genoma-instancia1/03config/Project/genoma-instancia1-projtab-study-samples-settings';
// import {FrontendEndpointsModuleGenoma} from '../../processInstanceComponents/genoma-instancia1/01moduleFunctionality/endpoints-frontend-genoma.js';
// /**
//  * `table-with-buttons` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class TableWithButtons extends FrontendEndpointsModuleGenoma(FieldsMethods(ModuleFunctionsGenoma(PolymerElement))) {
//     static get properties() {
//         return {
//             elementDefinition:{type: Object, notify:true,},
//             modulearea:{type: String, attribute:'modulearea'},
//             tableData:{type: Array},
//             selectedProject:{type: Object, notify:true},
//             selectedStudy:{type: Object, notify:true},
//             selectedLanguage:{type: String, notify:true},
//             tableTitle:{type: Object},
//             tableHidden:{type: Boolean},
//         }
//     }
//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//         super();
// //        this.modulearea='';
//         this.tableHidden=true;
//         console.log('constructor', 'selectedLanguage', this.selectedLanguage, 'modulearea', this.modulearea,
//         'elementDefinition', this.elementDefinition, 'elementdefinition', this.elementdefinition);
//         // modulearea="STUDY_INDIVIDUAL_SAMPLE_VARIABLES" id="samplevariables" .element-definition="{{windowDefinition.elementTable2}}"
//         // .table-data="{{selectedSample.study_variable_values}}" .selected-object="{{selectedObject}}        
//     }
//     tableDisplayToogle(e){        
//         this.tableHidden=!this.tableHidden;
//         console.log('tableDisplayToogle', this.selectedLanguage, this.tableHidden);
//     }
//     tableIcon(hd){
//         console.log('tableIcon', this.tableHidden);
//         //return '';
//         if (this.tableHidden){return "fa fa-angle-down";}
//         return "fa fa-angle-up";        
//     }
//     tableIconColorStyle(hd){
//         if (this.tableHidden){return "padding:0px 7px 0px 7px; font-size: 34px; border:none; background-color:transparent; color:green";}
//         return "padding:0px 7px 0px 7px; font-size: 34px; border:none; background-color:transparent; color:red;";        
//     }
//     static get template() {
//         return html`
//             <style include="genoma-instancia1-projtab-study-samples-style"></style>
//             <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
//             integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" 
//             crossorigin="anonymous"/>  
//             <genoma-instancia1-webcomponent-project id="myElementsProject" selected-study="{{selectedStudy}}"></genoma-instancia1-webcomponent-project>
            
//             <div style="display:flex; padding:2px;">
//                 <button style="border:none; background-color:transparent;" on-click="tableDisplayToogle">
//                    <span style="{{tableIconColorStyle(tableHidden)}}" class$="{{tableIcon(tableHidden)}}" > 
//                 </button>
//                 <template is="dom-if" if="[[elementDefinition.tableTitle.display]]">
//                     <p class="tableTitle"> {{labelValue(selectedLanguage, tableTitle.label)}}</p>
//                 </template>  
//             </div>
//             <template is="dom-if" if="[[tableHidden]]"> 
//                 <div name="elementDefinitionButtons" class="buttonGroup">
//                     <template is="dom-if" if="[[elementDefinition.displayRefreshButton]]"> 
//                         <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
//                     </template>  
//                     <template is="dom-if" if="[[elementDefinition.displayButtons]]"> 
//                         <template is="dom-repeat" items="{{elementDefinition.buttons}}" as="currentfield">       
//                             <field-controller modulearea="{{modulearea}}" id="{{currentfield.name}}"  field="{{currentfield}}"  selected-object="{{selectedObject}}"
//                                 on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange"> 
//                             </field-controller>
//                         </template>  
//                     </template>  
//                 </div>                      
//                 <vaadingrid-lit-singleselect id="genoma-instancia1-proj-samplessetgrid" headerfields="{{elementDefinition.tableHdrFlds}}" 
//                     rowcontainer="{{tableData}}" selected-object="{{selectedObject}}">
//                 </vaadingrid-lit-singleselect>
//             </template>
//         `;
//     }
//     /**
//      * Use for one-time configuration of your component after local
//      * DOM is initialized.
//      */
//     ready() {
//         super.ready();
//         if (this.elementDefinition!=undefined && this.elementDefinition.tableTitle!=undefined){
//             this.tableTitle=this.elementDefinition.tableTitle;
//             console.log(this.tableTitle, this.selectedLanguage);
//         }
//     }
//     refreshWindow() {
//         this.getProjects();
//     }
// }
// customElements.define('table-with-buttons', TableWithButtons);