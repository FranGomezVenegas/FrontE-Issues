import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {programMain_programSelectionForm} from '../../03config/Programs/em-demo-a-programmainview-settings';
import {FrontendEndpointsEnvMonitForPrograms, FrontendEndpointsEnvMonitForProductionLot} from '../../01moduleFunctionality/endpoints-frontend-env-monit';
import {setSelectedProgram} from '../../02Redux/em-demo-a_actions';

/**
 * `em-demo-a-program-selector` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EmDemoAProgramSelector extends FrontendEndpointsEnvMonitForPrograms(connect(store)(PolymerElement)) {
    static get properties() {
        return {
            programs:{type: Object},
            programsList: {
                type: Array,
                notify: true,
                bubble: true,
                value: programMain_programSelectionForm
            },             
            selectedProgram: {type: Object, notify: true},    
            tableTitle:{type: String},
            isSingleProgram:{type: Boolean, value: false}
        }
    }
    stateChanged(state) {
        if (state.emDemoA!=null){
            this.programs= state.emDemoA.programs.programsList;
            if (this.programs!=null){this.fillProgramsList();}
            if (this.programs!=undefined && this.selectedProgram==undefined && this.programs.length==1){
                this.isSingleProgram=true;
                console.log('this.programs.length==1', this.programs.length==1, this.selectedProgram);
                this.selectedProgram=this.programs[0];            
                store.dispatch(setSelectedProgram(this.selectedProgram));
            }
        }  
        this.selectedLanguage=state.app.user.appLanguage;
    } 
    static get template() {
        return html`    
        <template is="dom-if" if="[[isSingleProgram]]">   
            <div>
                <p class="tableTitle">{{selectedProgram.name}}</p>
            </div>            
        </template>
        <template is="dom-if" if="[[!isSingleProgram]]">    
            <div class="wrapper">
                <vaadin-button on-click="refreshWindow"><iron-icon icon="refresh"></iron-icon></vaadin-button> 
                <div id="programs" class="programsList"> 
                    <template is="dom-repeat" index="{{index}}" items="{{programsList}}" as="currentfield">
                    <field-controller on-field-list-value-changed="programSelected" 
                        name="{{currentfield.name}}" 
                        field="{{currentfield}}" value="{{selectedSampleTemplate}}"
                        style="width:100px;">
                    </field-controller>
                    </template>          
                </div>
            </div>
        </template>
        `;
    }
    programSelected(e){
        if (e.detail.name=='programsList'){
            this.selectedSampleTemplateIndex =e.detail.index;
            this.selectedProgram=this.programs[e.detail.index];
            //store.dispatch(setSelectedProgram(this.programs[e.detail.index]));
            //this.getSelectedProgramCorrectiveAction({programName: this.programs[e.detail.index].name});  
            //var elem=this.shadowRoot.getElementById("em-demo-a-corrective-actions");
            //if (elem){elem.getSelectedProgramCorrectiveActions();}            
        }
    }
    /** on-field-list-value-changed="programSelected" 
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
        this.getPrograms();
        this.fillProgramsList();
    }
    fillProgramsList() {
        //console.log('fillProgramsList', 'this.programs', this.programs);
        if (this.programs==null){return;}        
        var i;
        this.set('programsList.0.items', []);
        for (i = 0; i < this.programs.length; i++) { 
            this.push('programsList.0.items', {
                    keyName: this.programs[i].name, 
                    keyValue_es: this.programs[i].description_en,  
                    keyValue_en: this.programs[i].description_es}
                    );     
        }  
        // console.log('this.programsList', this.programsList);
    }    

}

customElements.define('em-demo-a-program-selector', EmDemoAProgramSelector);