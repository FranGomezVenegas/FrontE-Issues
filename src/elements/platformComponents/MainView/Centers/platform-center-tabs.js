import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store';

import {center_layout} from '../../../../config/platform/main-layout/two-headers-settings';
import '../../../../config/platform/main-layout/two-headers';
import {setCurrentTab, closeTab } from '../../Redux/actions/tabs_actions';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import '../../../../platform-mixins/platform-functions/platform-elements';
import './platform-center-tabs-settings';
import './platform-center-tabs-style';
import '../../../internalComponents/others/store-consola';
import '../../../internalComponents/others/language-selectortwoflags';
import '../Components/Notifications/notifications-pane';
import '../Components/ProceduresList/procedures-list-pane.js';
import '../Components/SOP/sop-icon-and-badge';
import '@thuoe/mp4-video-player';
/**
 * `platform-center-tabs` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformCenterTabs extends TabsMethods(FieldsMethods(connect(store)(PolymerElement))) {
    static get properties() {
        return {
            openVideoTutorial:{ type: Boolean, value: false},
            selectedLanguage: String,
            tabs: Array,
            layoutSettings:{type: String, value: center_layout},
            currentTab: Array,
            tabIndex: Number,
            videoUrl:{type: String, value:
                'http://51.75.202.142:8888/myvideos/LP.mp4'},
        }
    }
    static get template() {
        return html`
        <style include="platform-center-tabs-style"></style>
        <style>
        mp4-video-player {
                width: 80%;
                height: 80%;
                background: rgba(0, 0, 0, 0.12);
            }
        </style>
            <paper-dialog always-on-top no-cancel-on-outside-click  id="videowindowdialog" >    
            <div style="display:flex" style="width:50%; height:50%;">
                <div style="display:block; padding-right:10px;" >
                <nav>
                <ul>Plataforma
                <li>Cabecera</li>
                <li>Pestañas</li>
                </ul>
                </nav>            
                </div>
                <!-- <mp4-video-player src="{{videoUrl}}" ></mp4-video-player>        -->
            </div>
        </paper-dialog>  

        <platform-elements id="platformelements"></platform-elements>
            <template is="dom-if" if="[[layoutSettings.display_second_header]]">
                <div class="secondHeader">
                    <sop-icon-and-badge></sop-icon-and-badge>
                    <procedures-list-pane></procedures-list-pane>   
                    <notifications-pane></notifications-pane>            
                    <language-selector></language-selector>
                    <store-consola></store-consola>
                </div> 
            </template> 
            <template is="dom-if" if="[[layoutSettings.display_tabs]]">  
                <paper-tabs class="platformCenterTabs" selected="{{currentTab}}" attr-for-selected="name" noink scrollable>            
                    <paper-tab class="platformCenterTabsTabItem"  on-click="saveDefaultTabsOnLogin" name="[[tab.tabName]]" 
                        esign-required="false" confirmuser-required="false"
                        tab-index="{{index}}">
                    <br>
                    <paper-icon-button icon="save" icon-tab-index="[[index]]" icon-tab-name="[[tab.tabName]]" on-click="saveDefaultTabsOnLogin"></paper-icon-button>
                    </paper-tab>                

                    </paper-icon-button>
                    <template is="dom-repeat" items="[[tabs]]" as="tab">                                                               
                        <paper-tab class="platformCenterTabsTabItem"  esign-required="[[tab.esign_required]]" 
                            confirmuser-required="[[tab.confirmUser_required]]" on-click="tabSelected" name="[[tab.tabName]]" 
                            tab-index="{{index}}">{{tabLabelValue(selectedLanguage, tab)}}
                            <br>
                            <paper-icon-button icon="clear" icon-tab-index="[[index]]" icon-tab-name="[[tab.tabName]]" on-click="closeTab"></paper-icon-button>
                        </paper-tab>                
                    </template>            
                </paper-tabs>
                <iron-pages selected="[[currentTab.tabName]]" attr-for-selected="name" hide-immediately>
                    <my-sops tab-index="{{tabIndex}}" name="sop-allMySops"> </my-sops>
                    <my-pending-sops tab-index="{{tabIndex}}" name="sop-myPendingSops"> </my-pending-sops>
                    <user-profile tab-index="{{tabIndex}}" name="user-profile"> </user-profile>
                    <incident-management tab-index="{{tabIndex}}" name="incident-management"> </incident-management>
                    <procedure-management tab-index="{{tabIndex}}" name="procedure-management"> </procedure-management>
                    <videotutorial-tab tab-index="{{tabIndex}}" name="videotutorial-tab"> </videotutorial-tab>
                    <session-notifications tab-index="{{tabIndex}}" name="session-notifications"> </session-notifications>

                    <em-demo-a-home tab-index="{{tabIndex}}" name="em-demo-a-home"></em-demo-a-home>            
                    <em-demo-a-programs tab-index="{{tabIndex}}" name="em-demo-a-programs"></em-demo-a-programs> 
                    <em-demo-a-sample-login tab-index="{{tabIndex}}" name="em-demo-a-sample-login"></em-demo-a-sample-login>   
                    <em-demo-a-sample-reception tab-index="{{tabIndex}}" name="em-demo-a-sample-reception"></em-demo-a-sample-reception>   
                    <em-demo-a-sample-results tab-index="{{tabIndex}}" name="em-demo-a-sample-results"></em-demo-a-sample-results>   
                    <em-demo-a-results-calendar tab-index="{{tabIndex}}" name="em-demo-a-results-calendar"></em-demo-a-results-calendar>           
                    <em-demo-a-sample-revision tab-index="{{tabIndex}}" name="em-demo-a-sample-revision"></em-demo-a-sample-revision>
                    <em-demo-a-sample-custodian tab-index="{{tabIndex}}" name="em-demo-a-sample-custodian"></em-demo-a-sample-custodian>
                    <em-demo-a-sample-sampling tab-index="{{tabIndex}}" name="em-demo-a-sample-sampling"></em-demo-a-sample-sampling>
                    <em-demo-a-sample-incubation tab-index="{{tabIndex}}" name="em-demo-a-sample-incubation"></em-demo-a-sample-incubation>
                    <em-demo-a-sample-incub-incubator tab-index="{{tabIndex}}" name="em-demo-a-sample-incub-incubator"></em-demo-a-sample-incub-incubator>
                    <em-demo-a-sample-incub-batch tab-index="{{tabIndex}}" name="em-demo-a-sample-incub-batch"></em-demo-a-sample-incub-batch>
                    <em-demo-a-sample-plate-reading tab-index="{{tabIndex}}" name="em-demo-a-sample-plate-reading"></em-demo-a-sample-plate-reading>
                    <em-demo-a-sample-microorganism tab-index="{{tabIndex}}" id="em-demo-a-sample-microorganism" name="em-demo-a-sample-microorganism"></em-demo-a-sample-microorganism>
                    <em-demo-a-production-lot tab-index="{{tabIndex}}" name="em-demo-a-production-lot"></em-demo-a-production-lot>
                    <em-demo-a-person-sampling tab-index="{{tabIndex}}" name="em-demo-a-person-sampling"></em-demo-a-person-sampling>
                    <em-demo-a-person-plate-reading tab-index="{{tabIndex}}" name="em-demo-a-person-plate-reading"></em-demo-a-person-plate-reading>
                    <em-demo-a-person-microorganism tab-index="{{tabIndex}}" name="em-demo-a-person-microorganism"></em-demo-a-person-microorganism>
                    <em-demo-a-sample-browser tab-index="{{tabIndex}}" name="em-demo-a-sample-browser"></em-demo-a-sample-browser>
                    <em-demo-a-browser tab-index="{{tabIndex}}" name="em-demo-a-browser"></em-demo-a-browser>
                    <em-demo-a-result-deviation tab-index="{{tabIndex}}" name="em-demo-a-result-deviation"></em-demo-a-result-deviation>           

                    <proc-deploy-home tab-index="{{tabIndex}}" name="proc-deploy-home"></proc-deploy-home>  
                    <proc-deploy-sample-login tab-index="{{tabIndex}}" name="proc-deploy-sample-login"></proc-deploy-sample-login>   
                    <proc-deploy-sample-sampling tab-index="{{tabIndex}}" name="proc-deploy-sample-sampling"></proc-deploy-sample-sampling>  
                    <proc-deploy-sample-fq tab-index="{{tabIndex}}" name="proc-deploy-sample-fq"></proc-deploy-sample-fq>  
                    <proc-deploy-sample-mb tab-index="{{tabIndex}}" name="proc-deploy-sample-mb"></proc-deploy-sample-mb>  
                    <proc-deploy-sample-reviewtestingfq tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewtestingfq"></proc-deploy-sample-reviewtestingfq>  
                    <proc-deploy-sample-reviewtestingmb tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewtestingmb"></proc-deploy-sample-reviewtestingmb>  
                    <proc-deploy-sample-reviewsampletestinggroupfq tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewsampletestinggroupfq"></proc-deploy-sample-reviewsampletestinggroupfq>  
                    <proc-deploy-sample-reviewsampletestinggroupmb tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewsampletestinggroupmb"></proc-deploy-sample-reviewsampletestinggroupmb>  
                    <proc-deploy-sample-reviewsample tab-index="{{tabIndex}}" name="proc-deploy-sample-reviewsample"></proc-deploy-sample-reviewsample>  
                    <proc-deploy-programs tab-index="{{tabIndex}}" name="proc-deploy-programs"></proc-deploy-programs>  
                    <proc-deploy-browser tab-index="{{tabIndex}}" name="proc-deploy-browser"></proc-deploy-browser>
                    <proc-deploy-result-deviation tab-index="{{tabIndex}}" name="proc-deploy-result-deviation"></proc-deploy-result-deviation>           
                    <proc-deploy-production-lot tab-index="{{tabIndex}}" name="proc-deploy-production-lot"></proc-deploy-production-lot>

                    <genoma-instancia1-home tab-index="{{tabIndex}}" name="genoma-instancia1-home"></genoma-instancia1-home>      
                    <genoma-instancia1-project tab-index="{{tabIndex}}" name="genoma-instancia1-project"></genoma-instancia1-project>           

                </iron-pages>
            </template>        
        `;
    }
    stateChanged(state) {
        this.selectedLanguage=state.app.user.appLanguage;
        this.tabs = state.tabs.tabs;
        this.currentTab = state.tabs.currentTab;  
        //console.log('tabs', this.tabs,'currentTab', this.currentTab);      
    } 
    closeTab(e){
        //console.log('platform-center-tabs', 'closeTab', this.currentTab);
        store.dispatch(closeTab(this.currentTab));        
    }
    tabSelected(e){
        console.log('platform-center-tabs', 'tabSelected', e.currentTarget);
        store.dispatch(setCurrentTab(e.currentTarget.name));  
        return;
    }
    ready() {
        super.ready();
        if (this.openVideoTutorial===true){
            var elem=this.shadowRoot.getElementById("videowindowdialog");
            if (elem){elem.open();}
            //this.$.videowindowdialog.open();    
        }
    }
}

customElements.define('platform-center-tabs', PlatformCenterTabs);