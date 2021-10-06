import {LitElement, html, css} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';

import '../../../../internalComponents/Charts/chart-controller';
import {windowDefinition} from '../../03config/Project/genoma-instancia1-projtab-study-variablevalues-settings';
import '../../03config/Project/genoma-instancia1-projtab-study-variablevalues-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';
import '../../01moduleFunctionality/genoma-instancia1-webcomponent-project';
import '../../../../internalComponents/Elements/table-with-buttons';
import {FrontendEndpointsModuleGenoma} from '../../01moduleFunctionality/endpoints-frontend-genoma.js';
import {EndpointsActionsGenomaModule} from '../../01moduleFunctionality/0module-endpoints-actions-genoma';

/**
 * `genoma-instancia1-proj-study-variablevalues` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class GenomaInstancia1ProjStudyVariablevalues extends EndpointsActionsGenomaModule(FrontendEndpointsModuleGenoma(FieldsMethods(ModuleFunctionsGenoma(connect(store)(LitElement))))) {
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String, notify:true},
            selectedProject:{type: Object},
            selected_study:{type: Object},
            selectedProject2:{type: Object},
            selected_variable_value:{type: Object},
        }
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        console.log('GenomaInstancia1ProjStudyIndividuals', 'stateChanged', this.selectedLanguage);
        if (state.genomaInstancia1!=null){
            this.selected_study=state.genomaInstancia1.selectedStudy;
        }
    } 
    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.selected_variable_value=[];
        this.windowDefinition=windowDefinition;
    }
    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
        <style include="genoma-instancia1-projtab-study-samples-style"></style>   
        <genoma-instancia1-webcomponent-project id="myElementsProject"></genoma-instancia1-webcomponent-project>         
        <div class="main">
            <table-with-buttons id="families" modulearea="STUDY_VARIABLE_VALUES" selected_language="${this.selectedLanguage}"  
                .element_definition=${this.windowDefinition} 
                .table_data=${this.selected_study.study_variable_values} 
                @selected-object-changed=${this.variableValueWasSelected} .selectedObject="${this.selected_variable_value}"  
                @field-button-clicked="${this.fieldButtonClickedForProjects}"
            ></table-with-buttons>        
        </div>
        `;
    }
    variableValueWasSelected(e){
        console.log('proj-study-samples >> individualSelected', e);
        this.selected_variable_value=e.detail;
    }    
}
customElements.define('genoma-instancia1-proj-study-variablevalues', GenomaInstancia1ProjStudyVariablevalues);