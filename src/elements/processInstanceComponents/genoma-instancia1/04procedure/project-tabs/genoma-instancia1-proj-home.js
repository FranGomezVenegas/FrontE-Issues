import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {windowDefinition} from '../../03config/Project/genoma-instancia1-projtab-home-settings';
import '@alenaksu/json-viewer';
import '../../03config/Project/genoma-instancia1-projtab-home-settings';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
//import '../../../../internalComponents/Elements/table-with-buttons';
import {ModuleFunctionsGenoma} from '../../01moduleFunctionality/0module-functions-genoma';

class GenomaInstancia1ProjHome extends FieldsMethods(ModuleFunctionsGenoma(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.genomaInstancia1!=null){
            this.selectedProject=state.genomaInstancia1.selectedProject;
        }
        console.log('proj-home', this.selectedProject);
    }        
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            selectedProject:{type: Object},
            selectedObject:{type: Object},
        }
    }
    static get template() {
        return html`
        <style include="genoma-instancia1-projtab-home-style"></style>    
        <div class="main">
            <div name="elementDefinitionButtons" class="buttonGroup">
                <template is="dom-if" if="[[windowDefinition.displayRefreshButton]]"> 
                    <vaadin-button id="refreshButton" on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button>
                </template>  
                <template is="dom-if" if="[[windowDefinition.displayButtons]]"> 
                    <template is="dom-repeat" items="{{windowDefinition.buttons}}" as="currentfield">       
                        <field-controller modulearea="STUDIES" id="{{currentfield.name}}"  field="{{currentfield}}"  selected-object="{{selectedProject}}"
                            on-field-button-clicked="fieldButtonClickedForProjects" on-field-list-value-changed="onListChange">
                        </field-controller>
                    </template>
                </template>
            </div>
        </div>
        <json-viewer data="{{selectedProject}}"></json-viewer> 
        `;
    }
}
customElements.define('genoma-instancia1-proj-home', GenomaInstancia1ProjHome);