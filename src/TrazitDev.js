// import {LitElement, css, html} from 'lit-element';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../store';
// import '@polymer/polymer/lib/elements/dom-if';
// import '@polymer/polymer/lib/elements/dom-repeat';
// import {default_language} from '../../config/platform/logic/platform-config';
// import {main_layout} from '../config/platform/main-layout/two-headers-settings';
// import {appMainLayoutTwoHeadersStyle} from '../config/platform/main-layout/two-headers';
// // componentes de terceros
// import '@polymer/paper-toast/paper-toast';
// import('@polymer/paper-styles/shadow');
// // mis internalComponents
// import '../elements/internalComponents/form-fields/field-controller';
// // mis componentes de App
// //  import '../elements/platformComponents/MainView/Headers/platform-header.js';
// //  import '../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix.js';
// //  import '../elements/platformComponents/MainView/Centers/platform-center-tabs.js';        
// import '../elements/platformComponents/MainView/platform-login';
// import '../elements/internalComponents/others/lp-loading';
// import '../elements/internalComponents/others/language-selector.js';

// /**
//  * `trazit-dev` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class TrazitDev extends connect(store)(LitElement) {
//     static get properties() {
//         return {
//           selectedLanguage: {type: String, notify: true},
//           layoutSettings:{type: String}, 
//           loggedIn: {type: Boolean},  
//           userName: String,
//         }
//     }
//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//       super();
//       this.loggedIn = true;
//       this.selectedLanguage= default_language;
//       this.layoutSettings=main_layout;
//     }
//     /**
//      * Implement to describe the element's DOM using lit-html.
//      * Use the element current props to return a lit-html template result
//      * to render into the element.
//      */
//     static get styles() {
//         return [
//           // super.styles,
//           appMainLayoutTwoHeadersStyle,
//           css` 
//           `
//         ];
//       }               
//     render() {
//         return html` 
//             <!-- <link rel="stylesheet" href="../../config/platform/main-layout/two-headers"> -->
//             ${!this.loggedIn ? 
//               html`<platform-login id="platf_login" @platform-login-loggedwithsuccess="${this.loggedSuccesfully}"></platform-login>` 
//             : html`<div id="wrapper">
//                     ${this.layoutSettings.display_headertwo ? html` 
//                         <div class="split top bckimgtop"></div>  
//                         <platform-headertwo id="platf-headertwo"></platform-headertwo> 
//                     ` : `` }            
//                     ${this.layoutSettings.display_header ? html` 
//                         <div class="split top bckimgtop"></div>  
//                         <platform-header id="platf-header"></platform-header> 
//                     ` : `` }
//                     ${this.layoutSettings.display_left_pane ? html`s
//                         <div id="wrapper_inner">
//                         <div class="split left bckimgleft">     
//                             <platform-leftpane-fix></platform-leftpane-fix>             
//                         </div->
//                         </div>
//                     ` : `` }
//                     ${this.layoutSettings.display_center ? html`
//                         <div class="split right">
//                         <platform-center-tabs class="center-tab"></platform-center-tabs>     
//                         </div>         
//                     ` : `` } 
//                 </div> 
//                     
//             ` }
                        

//                         <lp-loading></lp-loading>
//             <paper-toast id="toast"></paper-toast>
//             <paper-toast id="toasterror"></paper-toast>      
//         `;
//     }
//     loggedSuccesfully() {
//         this.loggedIn=true;
//         this.importPlatformComponents();
//     }       
//     ready() {
//         super.ready();
//         this.addEventListener('toast-error', (e) => this.toastError(e) );   
//         this.addEventListener('toast-message', (e) => this.toastMessage(e) );       
//     }    
//     toastMessage(e) {
//         this.$.toast.show({text: e.detail, duration: 3000});
//     }    
//     toastError(e) {
//         this.$.toasterror.show({text: e.detail, duration: 3000});
//     }
//      stateChanged(state) {
//          this.loggedIn = state.app.user.loggedIn;
//     }    
//     importPlatformComponents(){
//             import('../elements/platformComponents/MainView/Headers/platform-header');
//             import('../elements/platformComponents/MainView/Headers/platform-headertwo');
//         import('../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix');
//         import('../elements/platformComponents/MainView/Centers/platform-center-tabs');        
//          import('@vaadin/vaadin-icons');
// //         import('@vaadin/vaadin-button');
// //                import('@polymer/polymer/lib/elements/dom-repeat');
// // //        import('@polymer/paper-styles/typography');
// //         import('@polymer/paper-icon-button/paper-icon-button');
//         import('@polymer/iron-pages/iron-pages');
//         import('@polymer/iron-icons/iron-icons');
//         import('@polymer/iron-selector/iron-selector');
// //         import('@polymer/paper-checkbox/paper-checkbox');
//         import('@polymer/paper-tabs/paper-tabs');
//         import('@polymer/paper-tabs/paper-tab');
//         import('@polymer/paper-icon-button/paper-icon-button');        
// //         import('@polymer/paper-button/paper-button');
// //         import('@polymer/paper-input/paper-input');
//         import('@polymer/paper-dialog/paper-dialog');
//         // import('@vaadin/vaadin-checkbox/vaadin-checkbox');
//         import('@google-web-components/google-chart/google-chart');
//         import('@polymer/paper-spinner/paper-spinner-lite');
// //         import('@material/mwc-switch/mwc-switch');
//     }            
// }
// customElements.define('trazit-dev', TrazitDev);

import { LitElement, html, css } from 'lit-element';
import './elements/platform-main';
export class TrazitDev extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        /* display: flex; */
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  render() {
    return html` <platform-main id="platf_main"></platform-main>
    `;
  }
}
