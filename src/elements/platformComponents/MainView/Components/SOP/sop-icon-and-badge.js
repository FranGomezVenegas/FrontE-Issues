import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from './../../../../../store';
import {sopPaneIconAndBadge_icons} from './sop-icon-and-badge-settings';
import {SOP_pendingSOPTab, SOP_userMySOPTab} from '../../../Tabs/tabs-settings'
import './sop-icon-and-badge-style';
import '@polymer/paper-badge';
import {addSystemTab, setCurrentTab } from '../../../Redux/actions/tabs_actions';
/**
 * `sop-icon-and-badge` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class SopIconAndBadge extends (connect(store)(PolymerElement)) {
    static get properties() {
        return {
            iconName: {type:String, value: sopPaneIconAndBadge_icons.iconGreen},
            showPendingSOP: Boolean,
            sopPaneIconAndBadge_icons: {type: Object, value: sopPaneIconAndBadge_icons},
        }
    }
    static get template() {
        return html`      
        <style include="sop-icon-and-badge-style"></style>         
        <div class="mainDiv">    
            <img class="imageSOP" src="{{iconName}}">
            <template is="dom-if" if="{{showPendingSOP}}">
                <paper-badge for="btn" id="pendingSop" class="pendingSop" on-click="pendingSOPClicked" label="{{contPendingUserSOPs}}"></paper-badge>
            </template>
            <paper-badge for="btn2" id="allUserSop" class="allUserSop"  on-click="AllUserSOPClicked" label="{{contAllUserSOPs}}"></paper-badge>
        </div>        
        `;
    }
    stateChanged(state) {    
        if (!state.SOPS.userAllSop){this.contAllUserSOPs=0;}         
        else{
            if (state.SOPS.userAllSop.length==0){this.contAllUserSOPs=0;}         
            else{
                if (!state.SOPS.userAllSop[0].my_sops){this.contAllUserSOPs=0;}
                else{this.contAllUserSOPs = state.SOPS.userAllSop[0].my_sops.length;}
            }
        }
        if (state.SOPS.userPendingSop==undefined){
            this.contPendingUserSOPs=0; 
            this.showPendingSOP=false; 
            this.iconName=this.sopPaneIconAndBadge_icons.iconGreen; 
            return;
        }
        if (state.SOPS.userPendingSop.length==0){
            this.contPendingUserSOPs=0; 
            this.showPendingSOP=false; 
            this.iconName=this.sopPaneIconAndBadge_icons.iconGreen;
        }else{
            var pendingUserSOPs = 0;
            var i;
            for (i = 0; i < state.SOPS.userPendingSop.length; i++) { 
                var pendingProcedureSOPs=pendingUserSOPs+state.SOPS.userPendingSop[i].pending_sops.length;                
                pendingUserSOPs=pendingUserSOPs+pendingProcedureSOPs;
            }
            this.contPendingUserSOPs = pendingUserSOPs; //state.SOPS.userPendingSop[0].pending_sops.length; 
            this.showPendingSOP=true; 
            this.iconName=this.sopPaneIconAndBadge_icons.iconRed;
        }
    }   
    pendingSOPClicked(){
        store.dispatch(addSystemTab(SOP_pendingSOPTab));
        store.dispatch(setCurrentTab(SOP_pendingSOPTab));            
    }
    AllUserSOPClicked(){
        store.dispatch(addSystemTab(SOP_userMySOPTab));
        store.dispatch(setCurrentTab(SOP_userMySOPTab));            
    }    
}
customElements.define('sop-icon-and-badge', SopIconAndBadge);