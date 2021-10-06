import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '@polymer/paper-tabs/paper-tabs';
import '@polymer/paper-tabs/paper-tab';
import '@polymer/iron-pages/iron-pages';

import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FunctionsEnvMonit} from '../01moduleFunctionality/functions-env-monit';
 import {em_browser_tabs, browserHome_defaultTab} from '../03config/Browser/proc-deploy-browser-settings';
 import '../03config/Browser/proc-deploy-browser-settings';

 import './browser-tabs/proc-deploy-br-sample.js';
 import './browser-tabs/proc-deploy-br-prodlot.js';
 //import './browser-tabs/proc-deploy-datamining.js';

class procDeployBrowser extends FieldsMethods(FunctionsEnvMonit(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage=state.app.user.appLanguage;
    }            
    static get properties() {
        return {            
            thisTabName: {type:String, value:'proc-deploy-browser'},
            tabs: {type:Object, value:em_browser_tabs}
            ,currentTab: []
            , currentSubTab: {type: String, value: browserHome_defaultTab}
            ,selectedLanguage: String            
        }
    }
    static get template() {
        return html`
        <style include="proc-deploy-browser-style"></style>
        <!--        <div class="wrapper">
            <div id="program_definition" class="programTabs">        -->
                <paper-tabs selected="{{currentSubTab}}" attr-for-selected="name" noink scrollable>
                    <template is="dom-repeat" items="[[tabs]]" as="tab">                
                        <paper-tab class="tabItem"  esign-required="[[tab.esign_required]]" 
                            confirmuser-required="[[tab.confirmUser_required]]" 
                             name="[[tab.name]]" tab-name="[[tab.tabName]]"
                            tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}} 
                        </paper-tab>                
                    </template>
                </paper-tabs>
                <iron-pages selected="[[currentSubTab]]" attr-for-selected="name">                
                    <proc-deploy-br-sample name="sample"> </proc-deploy-br-sample>  
                    <proc-deploy-br-prodlot name="prodlot"> </proc-deploy-br-prodlot>  
                    <proc-deploy-datamining name="datamining"> </proc-deploy-datamining>  
                </iron-pages>
<!--            </div>  -->
        </div> 
        `;
    }
    
    tabSelected(e){
        var curTab = [];
        curTab.tabName = e.currentTarget.name;
        curTab.name = e.currentTarget.name;
        // Las funcionalidad de esign y/o confirmar usuario no funciona para subpestañas aún, por eso envian falso.
        curTab.currTabEsignRequired=false; 
        curTab.currTabConfirmUserRequired=false; 
        this.currentTab=curTab;
        return;        
    }
}
customElements.define('proc-deploy-browser', procDeployBrowser);
