import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../store.js';

import '../../elements/internalComponents/Dialogs/DialogEsign/dialog-esign';
import '../../elements/internalComponents/Dialogs/DialogConfirmUser/dialog-confirmuser';

import {openEsignDialog} from '../../elements/platformComponents/Redux/actions/esign-actions.js';
import {openConfirmUserDialog} from '../../elements/platformComponents/Redux/actions/confirmuser-actions.js';
import {AuthenticationApi} from '../apis/api-authentication';
import {ApiPlatform} from '../apis/api-platform';

class PlatformElements extends ApiPlatform(AuthenticationApi(connect(store)(PolymerElement))) {
    stateChanged(state) {        
        this.finalToken = state.app.user.finalToken; 
        this.currTabEsignRequired=state.tabs.currTabEsignRequired;
        this.currTabConfirmUserRequired=state.tabs.currTabConfirmUserRequired; 
        this.selectedLanguage = state.app.user.appLanguage;            
    }    
    static get properties() {
        return {
            finalToken: String,
            currTabConfirmUserRequired: Boolean, 
            currTabEsignRequired: Boolean,
            selectedLanguage:{ type: String},
        }
    }
    static get template() {
        return html`
            <esign-dialog></esign-dialog>
            <confirmuser-dialog></confirmuser-dialog>                        
        `;
    }    

appActionTrigger(buttonName, backEndData, buttonDefinition){
    this.buttonName=buttonName;
    this.backEndData=backEndData;        
    if (buttonDefinition && buttonDefinition.esign_required){    
        store.dispatch(openEsignDialog(
        this.appActionTriggerNext.bind(this),
        this.appActionTriggerAbort.bind(this)
        ));  
        return;       
    }
    if (buttonDefinition && buttonDefinition.confirmuser_required){              
        store.dispatch(openConfirmUserDialog(
        this.appActionTriggerNext.bind(this),
        this.appActionTriggerAbort.bind(this)
        )); 
        return;
    }
    this.appActionTriggerNext();
}    
appActionTriggerAbort(){
    this.loading=false;  
}
appActionTriggerNext(){
    var buttonName = this.buttonName;
    var backEndData = this.backEndData;        
    var datas = [];
    datas.finalToken=this.finalToken;
    var actionName= buttonName.toUpperCase();
    switch (buttonName.toUpperCase()) {
    case 'USER_CHANGE_PSWD':
        datas.newPassword=backEndData.newPassword;
        this.appActionTriggerAPI(null, this.finalToken, actionName, datas, datas.tabInfo, this.callBackFunctionEnvMonitElem);
        break;    
    case 'USER_CHANGE_ESIGN':
        datas.newEsign=backEndData.newEsign;
        this.appActionTriggerAPI(null, this.finalToken, actionName, datas, datas.tabInfo, this.callBackFunctionEnvMonitElem);
        break;    
    case 'SET_DEFAULT_TABS_ON_LOGIN':
        datas.tabsString=backEndData.tabsString;
        this.appActionTriggerAPI(null, this.finalToken, actionName, datas, datas.tabInfo, this.callBackFunctionEnvMonitElem);
        break;    
    default:
        console.log('Action '+buttonName+' is not declared in env-monit-elements.sample.js >> appActionTriggerNext');
        break;
    }
    return;            
}

}
customElements.define('platform-elements', PlatformElements);