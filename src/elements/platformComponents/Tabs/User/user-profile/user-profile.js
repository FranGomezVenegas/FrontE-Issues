import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {AuthenticationApi} from '../../../../../platform-mixins/apis/api-authentication';
import {changeUserPasswordForm, changeUserEsignForm, saveOpenTabsForm} from './user-profile-settings';
import {ApiPlatform} from '../../../../../platform-mixins/apis/api-platform';
import '../../../../../platform-mixins/platform-functions/platform-elements';
import {TabsMethods} from '../../../../../platform-mixins/platform-functions/tabs-functions';
/**
 * `user-profile` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class UserProfile extends TabsMethods(ApiPlatform(AuthenticationApi(connect(store)(PolymerElement)))){
    stateChanged(state) {
        //console.log('user-Profile.js >> stateChanged >> this.userInfo', this.userInfo);
        this.userInfo = state.app.user;
        this.tabsOpen= state.tabs.tabs 
    }        
    static get properties() {
        return {
            userInfo:{type:Object},
            tabsOpen:{type:Object},
            changeUserPasswordForm:{type:Array, value:changeUserPasswordForm}, changeUserEsignForm:{type:Array, value:changeUserEsignForm}, saveOpenTabsForm:{type:Array, value:saveOpenTabsForm},
        }
    }

    static get template() {
        return html`
        <!-- <style include="cards-style"></style> -->
        <platform-elements id="platformelements"></platform-elements>
        <div id="topBar">
            <div id="central"> 
                <p>{{userInfo.userDB}} </p>
                <div class="card">
                    <div id="changePw" style="display:flex;">
                    <template is="dom-repeat" items="{{changeUserPasswordForm}}" as="currentfield">       
                        <field-controller on-keydown="keyPressedChangePassword" on-field-button-clicked="changePassword" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>       
                    </div>
                    <div id="changeEsign" style="display:flex;">
                    <template is="dom-repeat" items="{{changeUserEsignForm}}" as="currentfield">       
                        <field-controller on-keydown="keyPressedChangeEsign" on-field-button-clicked="changeEsign" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>                                
                    </div>
                    <div id="changeEsign" style="display:flex;">
                    <template is="dom-repeat" items="{{saveOpenTabsForm}}" as="currentfield">       
                        <field-controller on-keydown="keyPressed" on-field-button-clicked="saveDefaultTabsOnLogin" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
                    </template>                                
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    keyPressedChangePassword(e){
        //console.log('key pressed');
        if(e.key=="Enter") {
          this.changePassword();
          return;
        }   
    }      
    keyPressedChangeEsign(e){
        //console.log('key pressed');
        if(e.key=="Enter") {
          this.changeEsign();
          return;
        }   
    }  
    changePassword(e){
        var selectedRow=[];
        selectedRow.newPassword=changeUserPasswordForm[0].value;
        this.$.platformelements.appActionTrigger(changeUserPasswordForm[1].name, selectedRow, changeUserPasswordForm[1]);
    }
    changeEsign(e){
        var selectedRow=[];
        selectedRow.newEsign=changeUserEsignForm[0].value;
        this.$.platformelements.appActionTrigger(changeUserEsignForm[1].name, selectedRow, changeUserEsignForm[1]);
    }    
}
customElements.define('user-profile', UserProfile);