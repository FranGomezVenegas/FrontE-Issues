import {LitElement, html, css} from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {notificationsPaneTitle} from '../../MainView/Components/Notifications/notifications-pane-settings';
import {platformHeaderFields} from '../../MainView/Headers/platform-headertwo-settings';

import 'api-viewer-element/lib/api-docs.js';
/**
 * `session-notifications` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class SessionNotifications extends FieldsMethods(connect(store)(LitElement)) {
    stateChanged(state) {
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
    }
    static get properties() {
        return {
            numNotifications: {type: Number},
            notifications:{type: Array},  
            selectedLanguage: {type: String},
            paneTitle:{type: Object},
            platformHeaderFields: {type: Array},
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.paneTitle=notificationsPaneTitle;
        this.platformHeaderFields=platformHeaderFields;
    }

    // static get styles() {
    //     return [
    //         super.styles,
    //         //css``,
    //     ];
    // }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
        <style>
        :root {
            --header-right-width: 120px;
        }
        div.wrapperMySops{
            display: flex;
        }        
        div.cardPendingSops {
            margin: 24px;
            padding: 16px;
            color: ##2ec3ec; //#757575;
            border-radius: 5px;
            /*background-image: url('./images/hexagon-white-blue-light.jpg'); */
            /*background-image: url('./images/fondo-blanco-hexagono-tecnologia-azul.jpg');*/
            background-repeat: no-repeat;
            background-size: cover;                  
            background-color: #c2f2ff; // #1676f31a; //#fff; // #49cce633;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        div.videocard{
            display: inline-grid;
        } 
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto auto;
            grid-gap: 0.2vmax;
            /* background-color: #2196F3; */
            /* padding: 10px; */
          }
          
          .grid-container > div {
            background-color: rgba(255, 255, 255, 0.9);
            text-align: center;
            /* padding: 20px 0; */
            font-size: 1.2vmax;
          }  
    
        </style>
        <div class="grid-container">
        ${this.numNotifications==0 ? html`

          <p>${this.labelValue(this.selectedLanguage, this.paneTitle.empty)}</p>
        ` : html`
            ${this.notifications.map(item => html`
            <div class="videocard" video-info="{{currentvideo}}"> 
                <details>
                <summary>${item[0]} - ${this.notifText(item[1])}</summary>
                ${item[0]} - ${this.notifText(item[1])}
                </details>
            </div>                
            ` )}
        `}  
        </div>
    `;
    }
    notifText(notif){
        console.log('notifText', notif);
  //      return notif.category+' : '+ this.labelValue(this.selectedLanguage, notif);
        return this.labelValue(this.selectedLanguage, notif);
        //${item[1].category} : ${this.labelValue(this.selectedLanguage, item[1])}
      }
  
}
customElements.define('session-notifications', SessionNotifications);
// <h2>${this.tabLabelValue(this.selectedLanguage, this.platformHeaderFields.notificationsOption.tab)} ${this.numNotifications}</h2> 
