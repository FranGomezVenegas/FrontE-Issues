import {LitElement, html, css} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store';

import {SOP_pendingSOPTab, SOP_userMySOPTab, notificationsTab} from '../../../../elements/platformComponents/Tabs/tabs-settings';

import {TabsMethods} from '../../../../platform-mixins/platform-functions/tabs-functions';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {notificationsPaneTitle} from '../../MainView/Components/Notifications/notifications-pane-settings';

import {isTabOpenableWhenNotSopCertified} from '../../../../config/platform/logic/platform-config';
//import {addTab,setCurrentTab} from '../../Redux/actions/tabs_actions';
//import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
//import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';

import {platformHeadertwoStyle} from './platform-headertwo-settings';
import {platformHeaderFields} from './platform-headertwo-settings';
import '../Components/SOP/sop-icon-and-badge';
import '../../../internalComponents/others/store-consola';
import '../../../internalComponents/others/language-selectortwoflags';
import '../Components/Notifications/notifications-pane';
import '../Components/ProceduresList/procedures-list-pane.js';

import {appLogOut_logOutMessage} from '../../../../config/platform/logic/platform-config';
import { doLogout, setAppLanguage } from '../../Redux/actions/app_actions';
import { doLogoutNotification } from '../../Redux/actions/notifications_actions';

import { addSystemTab, setCurrentTab, addTab, doLogoutTab} from  '../../../platformComponents/Redux/actions/tabs_actions';
import {sopPaneIconAndBadge_icons} from './../Components/SOP/sop-icon-and-badge-settings';

/**
 * `platform-headertwo` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformHeadertwo extends FieldsMethods(TabsMethods(connect(store)(LitElement))) {
  stateChanged(state) {
    if (state.app.user){var user=state.app.user;}
    if (state.app.session){var session=state.app.session;}
    if (user && session){
        this.getHeaderInfo(user, session); 
    }
    this.selectedLanguage=state.app.user.appLanguage;
    if (state.notifications!=null){
      this.numNotifications = state.notifications.totalNotifications;
      this.notifications=state.notifications.notifications;
      this.notifications.sort(function sortFunction(a, b){
        //console.log(a[0], b[0]);
        if (a[0] === b[0]) return 0;
        return a[0] < b[0] ? 1 : -1;
      });
      if (this.numNotifications>0){this.notificationPaneIsEmpty=false;}
    }
    if (state.app.user.appProcedureList!=null){
      this.procedureList= state.app.user.appProcedureList;
      //console.log('procedureList', this.procedureList);
    }
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
        //this.iconName=this.sopPaneIconAndBadge_icons.iconGreen;
    }else{
        var pendingUserSOPs = 0;
        var i;
        for (i = 0; i < state.SOPS.userPendingSop.length; i++) { 
//console.log('pendingUserSOPS=', state.SOPS.userPendingSop[i].procedure_name, i, pendingUserSOPs, "Units to add", state.SOPS.userPendingSop[i].pending_sops.length, "Total:",pendingUserSOPs=pendingUserSOPs+state.SOPS.userPendingSop[i].pending_sops.length);
            pendingUserSOPs=pendingUserSOPs+state.SOPS.userPendingSop[i].pending_sops.length;
        }
        this.contPendingUserSOPs = pendingUserSOPs; //state.SOPS.userPendingSop[0].pending_sops.length; 
        this.showPendingSOP=true; 
        //this.iconName=this.sopPaneIconAndBadge_icons.iconRed;
    }
    if (state.app.user){var user=state.app.user;}
    if (state.app.session){var session=state.app.session;}
    if (user && session){
        this.getHeaderInfo(user, session); 
    }    
  }

  /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.iconName=sopPaneIconAndBadge_icons.iconGreen,
        this.sopPaneIconAndBadge_icons=sopPaneIconAndBadge_icons;
        this.platformHeaderFields=platformHeaderFields;
        this.personalOption=platformHeaderFields.personalOption;
        this.selectedLanguage='';
        this.notificationPaneIsEmpty=true;
        this.paneTitle=notificationsPaneTitle;
        this.procedureList=[];
        this.appLogOut_logOutMessage=appLogOut_logOutMessage;
        //console.log('platformHeaderFields', this.platformHeaderFields);
    }
    static get styles() {
      return [
        // super.styles,
        platformHeadertwoStyle,
        css` 
        a.textRed {
          color:red;
          text-size:1.8vh;
        }
        a.textNormal{
            color:red;
            text-size:1.8vh;
        }
        a.textBlue {
            color:blue;
            text-size:1.8vh;
        }                
        a.textGrey {
            color:grey;
            text-size:1.8vh;
        }                  
          `
      ];
    } 
    

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
      return html`
        <div class="main">
          <div class="left">
            <div class="logo">
                <img style="height:4.5vmax;" src="./images/header/LOGO_azul_10_SEG_LOOP.gif"> <!-- trazit-removebg.png"> -->
            </div> 
            <div class="logo">
            <!-- <img class="formFieldLogoCircle" src="./images/header/trazit-removebg.png"> -->
              ${this.platformHeaderFields.fieldsCenter.map(item => html`<p class="sessioninfo"><b>
              ${this.labelValue(this.selectedLanguage, item)}
              </b></p>` )}
            </div>
          </div>
          <div class="center">
            <nav>        
            <ul>
            ${this.platformHeaderFields.proceduresOption.display ? html`              
              <li class="procedure"><a> ${this.tabLabelValue(this.selectedLanguage, this.platformHeaderFields.proceduresOption.tab)}</a>
              <ul>
              ${this.procedureList && this.procedureList.procedures ? html`
                ${this.procedureList.procedures.map(item => html`
                ${item.definition!=undefined && item.definition.length>0 ? html`
                <li><a>
                  ${this.labelValue(this.selectedLanguage, item)} <span class="fa fa-plus"></span>  </a>                                    
                  <ul>
                  ${item.icons_up!=undefined ? html`
                    ${item.icons_up.map(iconup => html`<li id="procedure"><a .procedure="${item}" .procevent="${iconup}" @click="${this.procedureTab}"> <!--(item, iconup)-->
                    <paper-icon-button style="${this.iconStyleDefinition}" icon="${iconup.icon_name}" title="${this.labelValue(this.selectedLanguage, iconup)}"
                    disabled="${iconup.read_only}" value="${iconup.name}" ></paper-icon-button>               
                    </a></li>` )}
                  ` :``}

                  ${item.definition!=undefined ? html`
                      ${item.definition.map(item2 => html`<li>
                        ${item2.type=='icons-group' ? html`
                          ${item2.icons.map(itemicons => html`                      
                          <a .procedure="${item}" .procevent="${itemicons}" @click="${this.procedureTab}">
                            <img class="procedureIcons"  src="${itemicons.icon_name}"  > 
                          </a>
                          `)}
                          <a disable>
                            ${this.labelValue(this.selectedLanguage, item2)}  
                          </a>
                        ` :html`    
                          <img class="procedureIconsHidden"  src="" > 
                          ${item.icon_name!=undefined? html`
                            <img class="procedureIcons"  src="${item.icon_name}">
                          ` :html`
                            <img class="procedureIconsHidden"  src="">
                          `}
                        <a .procedure="${item}" .procevent="${item2}" @click="${this.procedureTab}">
                          ${this.labelValue(this.selectedLanguage, item2)}  
                          </a>
                        `}                        
                      </li>
                      ` 
                      )}
                  ` :``}              
                  ${item.icons_down!=undefined ? html`
                    ${item.icons_down.map(item2 => html`<li id="procedure"><a .procedure="${item}" .procevent="${item2}" @click="${this.procedureTab}"> <!--(item, item2)-->
                    <paper-icon-button style="${this.iconStyleDefinition}" icon="${icons_down.icon_name}" title="${this.labelValue(this.selectedLanguage, icons_down)}"
                    disabled="${icons_down.read_only}" value="${icons_down.name}" ></paper-icon-button>               
                    </a></li>` )}
                  ` :``}
                  </ul>
                ` :``} 
                </li>` )}
              </ul>
              </li>
              ` :``} 
            ` :``}  
            
            ${this.platformHeaderFields.notificationsOption.display ? html`              
              <li><a @click="${this.notificationsClicked}">${this.tabLabelValue(this.selectedLanguage, this.platformHeaderFields.notificationsOption.tab)} ${this.numNotifications}</a>
              <ul>
              ${this.notificationPaneIsEmpty ? html`
                <li id="notification"><a @click="${this.notificationsClicked}">${this.labelValue(this.selectedLanguage, this.paneTitle.empty)}</a></li>
              ` : html`
                ${this.notifications.map(item => html`<li><a @click="${this.notificationsClicked}"
                    class="${this.textColor(item[1])}"> ${this.notifText(item[1])}                
                </a></li>` )}
              `}  
              </ul>
              </li>
            ` :``}  
            
            ${this.platformHeaderFields.sopOption.display ? html`
              <li class="circle">
                <a @click="${this.AllUserSOPClicked}">${this.tabLabelValue(this.selectedLanguage, this.platformHeaderFields.sopOption.tab)}</a>
                ${this.contPendingUserSOPs>0 ? html`   
                  <a style="color:red;" title="${this.tabLabelValue(this.selectedLanguage, SOP_pendingSOPTab)}" @click="${this.pendingSOPClicked}" >${this.contPendingUserSOPs}</a>
                ` :``}            
                <a title="${this.tabLabelValue(this.selectedLanguage, SOP_userMySOPTab)}"  @click="${this.AllUserSOPClicked}" >${this.contAllUserSOPs}</a>
                <input type="checkbox" id="btn-1">
                <ul> 
                  ${this.platformHeaderFields.sopOption.options.map(item => html`<li><a>
                  </a></li>` )}
                </ul>
              </li>
            ` :``}    
            
            
            ${this.platformHeaderFields.personalOption.display ? html`
              <li class="circle">
                <a href="#">${this.tabLabelValue(this.selectedLanguage, this.platformHeaderFields.personalOption.tab)}</a>
                <ul>
                  ${this.platformHeaderFields.personalOption.options.map(item => html`
                    <li id="myspace"><a .field="${item}" @click="${this.platformHeaderRightClicked}">
                      ${item.type=='avatar' ? 
                        html`
                          <div style="float: left;"><img src="${item.source}" style="width:30px;height:30px"></div>
                          <div style="float: left;">${this.labelValue(this.selectedLanguage, item)}</div>
                          <div style="float: none; clear: both;"></div>
                          ` :
                        html`${this.labelValue(this.selectedLanguage, item)}`
                      } 
                  </a></li>` )}
                </ul>
              </li>
            ` :``}      
            </ul>
            </nav>
          </div>
          <div class="right">  
            <language-selector></language-selector>
            <store-consola></store-consola>
          </div>
        </div>
        `;
    }
    iconStyleDefinition(e){
      console.log('iconStyleDefinition', e);
      if (e.read_only){return 'color:var(--lumo-disabled-text-color); '}
      return !e.icon_color ? 'color:cornflowerblue;': 'color:'+e.icon_color+'; '; 
    }  
    getHeaderInfo(user, session){
      if (user.userInfo && user.userInfo.data && user.userInfo.data.first_name){
          this.platformHeaderFields.fieldsCenter[0].label_es="Hola "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name
              +" ("+session.userRole+") ";
          this.platformHeaderFields.fieldsCenter[0].label_en="Hello "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name
              +" ("+session.userRole+") ";
      }
      if (session){
          this.platformHeaderFields.fieldsCenter[1].label_es="SESIÓN Id: "+session.sessionId+" Fecha: "+session.startDate;
          this.platformHeaderFields.fieldsCenter[1].label_en="SESSION Id: "+session.sessionId+" Date: "+session.startDate;
      }
      //var elem=this.shadowRoot.getElementById("fcenter");
      //if (elem){elem.refresh();} 
      
      //console.log(store.getState());
      //console.log('getHeaderInfo', 'user', user, 'session', session, this.platformHeaderFields);
    }    
    notificationsClicked(){
      store.dispatch(addSystemTab(notificationsTab));
    }
    pendingSOPClicked(){
      store.dispatch(addSystemTab(SOP_pendingSOPTab));
      store.dispatch(setCurrentTab(SOP_pendingSOPTab));            
    }
    AllUserSOPClicked(){
        store.dispatch(addSystemTab(SOP_userMySOPTab));
        store.dispatch(setCurrentTab(SOP_userMySOPTab));            
    }      
    notifText(notif){
      //console.log('notifText', notif);
//      return notif.category+' : '+ this.labelValue(this.selectedLanguage, notif);
      return this.labelValue(this.selectedLanguage, notif);
      //${item[1].category} : ${this.labelValue(this.selectedLanguage, item[1])}
    }
    textColor(notif){
      //console.log('textColor', notif);
      if (notif==undefined){return 'textNormal';}
      if (notif.is_error==undefined){
        switch(notif.category) {
          case 'CORRECT': return 'textBlue';
          case 'ERROR': return 'textRed';
          case 'LABPLANET_TRUE': return 'textBlue';
          case 'false': return 'textBlue';
          case 'LABPLANET_FALSE': return 'textRed';
          case 'LABPLANET_FALSE': return 'textRed';
          default: return 'textNormal';
        }
      }else{
        if (notif.is_error){
          return 'textRed';
        }else{
          return 'textBlue';
        }
      }
    }   
    crearTab(e) {
      if (!isTabOpenableWhenNotSopCertified(e.detail.procedure)){
          console.log('isTabOpenableWhenNotSopCertified', isTabOpenableWhenNotSopCertified());
          if ((e.detail.procEvent.sops_passed==null) || (e.detail.procEvent.sops_passed==false)){
              this.toastSuccessMessage(this.tabNotOpenableByCertification);
              return;
          }
      }
      var esignRequired = false;
      if (!e.detail.procEvent.esign_required){esignRequired = false;
      }else{esignRequired=e.detail.procEvent.esign_required;}
      var confirmUserRequired = false;
      if (!e.detail.procEvent.confirm_required){confirmUserRequired = false;
      }else{confirmUserRequired=e.detail.procEvent.confirm_required;}
      e.stopPropagation();
      store.dispatch(addTab({
        lp_frontend_page_name: e.detail.procEvent.lp_frontend_page_name,  
        tabName: e.detail.procedure.name + '-' + e.detail.procEvent.lp_frontend_page_name,
        tabLabel_en: e.detail.procedure.label_en + '-' + e.detail.procEvent.label_en,
        tabLabel_es: e.detail.procedure.label_es + '-' + e.detail.procEvent.label_es,
        sop_list: e.detail.procEvent.sops.sop_list, 
        sops: e.detail.procEvent.sops, 
        sops_passed: e.detail.procEvent.sops_passed,
        procedure: e.detail.procedure, 
        tabEsignRequired: esignRequired, tabConfirmUserRequired: confirmUserRequired
      }));
      var curTab = [];
      curTab.tabName = e.detail.procedure.name+'-'+e.detail.procEvent.lp_frontend_page_name;
      curTab.sops= e.detail.procEvent.sops, 
      curTab.currTabEsignRequired=esignRequired;
      curTab.currTabConfirmUserRequired=confirmUserRequired;
      store.dispatch(setCurrentTab(curTab));    
    }  
    procedureTab(e) {
//      console.log('procedureTab');
      var procedure=e.currentTarget.procedure;
      var procEvent=e.currentTarget.procevent;
      if (!isTabOpenableWhenNotSopCertified(procedure)){
          console.log('isTabOpenableWhenNotSopCertified', isTabOpenableWhenNotSopCertified());
          if ((procEvent.sops_passed==null) || (procEvent.sops_passed==false)){
              this.toastSuccessMessage(this.tabNotOpenableByCertification);
              return;
          }
      }// attributes[1]
      var esignRequired = false;
      if (!procEvent.esign_required){esignRequired = false;
      }else{esignRequired=procEvent.esign_required;}
      var confirmUserRequired = false;
      if (!procEvent.confirm_required){confirmUserRequired = false;
      }else{confirmUserRequired=procEvent.confirm_required;}
      //e.stopPropagation();
      store.dispatch(addTab({
        lp_frontend_page_name: procEvent.lp_frontend_page_name,  
        tabName: procedure.name + '-' + procEvent.lp_frontend_page_name,
        //tabName: procEvent.lp_frontend_page_name,
        tabLabel_en: procedure.label_en + '-' + procEvent.label_en,
        tabLabel_es: procedure.label_es + '-' + procEvent.label_es,
        sop_list: procEvent.sops.sop_list, 
        sops: procEvent.sops, 
        sops_passed: procEvent.sops_passed,
        procedure: procedure, 
        tabEsignRequired: esignRequired, tabConfirmUserRequired: confirmUserRequired
      }));
      var curTab = [];
      curTab.tabName = procedure.name+'-'+procEvent.lp_frontend_page_name;
      curTab.sops= procEvent.sops, 
      curTab.currTabEsignRequired=esignRequired;
      curTab.currTabConfirmUserRequired=confirmUserRequired;
      store.dispatch(setCurrentTab(curTab));    
    }  

    _sortNotifications(a, b){
      //console.log(a[0], b[0]);
      if (a[0] === b[0]) return 0;
      return a[0] < b[0] ? 1 : -1;
    }    
    doLogout() {
      var message=''; 
      switch(this.selectedLanguage){
          case 'es': message=this.appLogOut_logOutMessage.closedSession.message_es; break; //message=response.data.message_es; break;            
          default: message=this.appLogOut_logOutMessage.closedSession.message_en; break; //message=response.data.message_en; break;
      }        
      this.authenticated=true;
      this.dispatchEvent(new CustomEvent('toast-message', {
        bubbles: true,        composed: true,
        detail: message//'User valid, please select your role to proceed'
      }));       
      store.dispatch(doLogout(this.selectedLanguage));
      store.dispatch(doLogoutTab());
      store.dispatch(doLogoutNotification());
    }

    getHeaderInfo(user, session){
      if (user.userInfo && user.userInfo.data && user.userInfo.data.first_name){
          this.platformHeaderFields.fieldsCenter[0].label_es="Hola "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name
              +" ("+session.userRole+") ";
          this.platformHeaderFields.fieldsCenter[0].label_en="Hello "+user.userInfo.data.first_name+" "+user.userInfo.data.last_name
              +" ("+session.userRole+") ";
      }
      if (session){
          this.platformHeaderFields.fieldsCenter[1].label_es="SESIÓN Id: "+session.sessionId+" Fecha: "+session.startDate;
          this.platformHeaderFields.fieldsCenter[1].label_en="SESSION Id: "+session.sessionId+" Date: "+session.startDate;
      }
      //var elem=this.shadowRoot.getElementById("fcenter");
      //if (elem){elem.refresh();} 
      
      //console.log(store.getState());
      //console.log('getHeaderInfo', 'user', user, 'session', session, this.platformHeaderFields);
    }

    platformHeaderRightClicked(e){
      var menuItem=e.currentTarget.field;
        if (menuItem.tab){
            store.dispatch(addSystemTab(menuItem.tab));    
            store.dispatch(setCurrentTab(menuItem.tab)); 
        }else{
            this.doLogout();
        }
        return;                     
    }
    doLogout() {
      var message=''; 
      switch(this.selectedLanguage){
          case 'es': message=this.appLogOut_logOutMessage.closedSession.message_es; break; //message=response.data.message_es; break;            
          default: message=this.appLogOut_logOutMessage.closedSession.message_en; break; //message=response.data.message_en; break;
      }        
      this.authenticated=true;
      this.dispatchEvent(new CustomEvent('toast-message', {
        bubbles: true,        composed: true,
        detail: message//'User valid, please select your role to proceed'
      }));       
      store.dispatch(doLogout(this.selectedLanguage));
      store.dispatch(doLogoutTab());
      store.dispatch(doLogoutNotification());
    }    
    static get properties() {
        return {
          platformHeaderFields: {type: Array},
          selectedLanguage: {type: String},
          appLogOut_logOutMessage: {type: Array},  
          notificationPaneIsEmpty: {type: Boolean},
          numNotifications: {type: Number},
          notifications:{type: Array},
          paneTitle:{type: Object},
          procedureList:{type: Array},
          sopPaneIconAndBadge_icons: {type: Object},
          iconName: {type:String},

        }
    }    
}
customElements.define('platform-headertwo', PlatformHeadertwo);