// // import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
// //  import '@polymer/paper-toast/paper-toast';

// // /**
// //  * `LowerCaseDashedName` Description
// //  *
// //  * @customElement
// //  * @polymer
// //  * @demo
// //  * 
// //  */
// // class PlatformMain extends PolymerElement {
// //   static get properties() {
// //     return {

// //     }
// //   }

// //   static get template() {
// //     return html`
// //              <paper-toast id="toast"></paper-toast>
// //              <paper-button on-click="openToast">Open Toast</paper-button>
// //              <paper-toast id="toast" text="Hello world!"></paper-toast>
// //     `;
// //   }

// //   /**
// //    * Instance of the element is created/upgraded. Use: initializing state,
// //    * set up event listeners, create shadow dom.
// //    * @constructor
// //    */
// //   constructor() {
// //     super();
// //   }

// //   /**
// //    * Use for one-time configuration of your component after local
// //    * DOM is initialized.
// //    */
// //   ready() {
// //     super.ready();
// //     this.$.toast.show({text: "holaadaaaa", duration: 3000});
// //   }
// // }

// // customElements.define('platform-main', PlatformMain);
// import {LitElement, html} from 'lit-element';
// import '@polymer/paper-toast/paper-toast';

// /**
//  * `LowerCaseDashedName` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class PlatformMain extends LitElement {
//   static get properties() {
//     return {

//     }
//   }

//   /**
//    * Instance of the element is created/upgraded. Use: initializing state,
//    * set up event listeners, create shadow dom.
//    * @constructor
//    */
//   constructor() {
//     super();
//        this.$.toast.show({text: 'holaaaa', duration: 3000});
// }


//   /**
//    * Implement to describe the element's DOM using lit-html.
//    * Use the element current props to return a lit-html template result
//    * to render into the element.
//    */
//   render() {
//     return html`
// da
//          <paper-toast id="toast"></paper-toast>

//     `;
//   }

// }

// customElements.define('platform-main', PlatformMain);




import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../store';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/polymer/lib/elements/dom-repeat';
import {default_language} from '../config/platform/logic/platform-config';
import {main_layout} from '../config/platform/main-layout/two-headers-settings';
import '../config/platform/main-layout/two-headers';
// componentes de terceros
import '@polymer/paper-toast/paper-toast';
import('@polymer/paper-styles/shadow');

// mis internalComponents
import '../elements/internalComponents/form-fields/field-controller';

// mis componentes de App
 import '../elements/platformComponents/MainView/Headers/platform-headertwo.js';
// import '../elements/platformComponents/MainView/Headers/platform-header.js';
// import '../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix.js';
 import '../elements/platformComponents/MainView/Centers/platform-center-tabs.js';        

import '../elements/platformComponents/MainView/platform-login';
import '../elements/internalComponents/others/lp-loading';

import '../elements/internalComponents/others/language-selector.js';

/**
 * `platform-main` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformMain extends connect(store)(PolymerElement) {
    stateChanged(state){
        this.loggedIn=state.app.user.loggedIn;
    }      
    static get properties() {
        return {
            selectedLanguage: {type: String, value: default_language, notify: true},
            layoutSettings:{type: String, value:main_layout}, 
            loggedIn: {type: Boolean, value:false},  
            userName: String,
        }
    }

    static get template() {
        return html`
            <style include="two-headers"></style> 
            <template is="dom-if" if="[[!loggedIn]]">                 
                <platform-login id="platf_login" on-platform-login-loggedwithsuccess="loggedSuccesfully"></platform-login>
<!--                <platform-login selected-language="{{selectedLanguage}}" page-name="login"> </platform-login> -->
            </template>
            <template is="dom-if" if="[[loggedIn]]">
                <div id="wrapper">
                    <template is="dom-if" if="[[layoutSettings.display_headertwo]]">  
                        <div class="split top bckimgtop"></div>  
                        <platform-headertwo id="platf-headertwo"></platform-headertwo>
<!--                        <platform-header id="platf-header"></platform-header>  -->
                    </template>
                    <template is="dom-if" if="[[layoutSettings.display_left_pane]]">  
                        <div id="wrapper_inner">
                        <div class="split left bckimgleft">     
                            <platform-leftpane-fix></platform-leftpane-fix>             
                        </div->
                        </div>
                    </template>
                    <template is="dom-if" if="[[layoutSettings.display_center]]">  
                        <div class="split right">
                        <platform-center-tabs class="center-tab"></platform-center-tabs>     
                        </div>         
                    </template> 
                </div>         
            </template> 
            <lp-loading></lp-loading>
            <paper-toast id="toast"></paper-toast>
            <paper-toast id="toasterror"></paper-toast>
        `;
    }
    loggedSuccesfully() {    
        this.loggedIn=true;
        this.importPlatformComponents();
    }       
    ready() {
        super.ready();
        this.addEventListener('toasterror', (e) => this.toastError(e) );   
        this.addEventListener('toast-error', (e) => this.toastError(e) );   
        this.addEventListener('toast-message', (e) => this.toastMessage(e) );       
    }    
    toastMessage(e) {
        this.$.toast.show({text: e.detail, duration: 3000});
    }    
    toastError(e) {
        this.$.toasterror.show({text: e.detail, duration: 3000});
    }
     stateChanged(state) {
         this.loggedIn = state.app.user.loggedIn;
    }    
    importPlatformComponents(){
        import('@vaadin/vaadin-icons');
        import('@vaadin/vaadin-button');
        import('@polymer/polymer/lib/elements/dom-repeat');
        import('@polymer/paper-styles/typography');
        import('@polymer/paper-icon-button/paper-icon-button');
        import('@polymer/iron-pages/iron-pages');
        import('@polymer/iron-icons/iron-icons');
        import('@polymer/iron-selector/iron-selector');
        import('@polymer/paper-checkbox/paper-checkbox');

        import('@polymer/paper-tabs/paper-tabs');
        import('@polymer/paper-tabs/paper-tab');
        import('@polymer/paper-icon-button/paper-icon-button');        

        import('@polymer/paper-button/paper-button');
        import('@polymer/paper-input/paper-input');
        import('@polymer/paper-dialog/paper-dialog');
        import('@vaadin/vaadin-checkbox/vaadin-checkbox');
        import('@google-web-components/google-chart/google-chart');
        import('@polymer/paper-spinner/paper-spinner-lite');
        import('@material/mwc-switch/mwc-switch');
        
        import('@vaadin/vaadin-grid');
        import('@vaadin/vaadin-grid/vaadin-grid-column');
        import('@vaadin/vaadin-grid/vaadin-grid-sort-column');
        import('@vaadin/vaadin-grid/vaadin-grid-filter'); 
        import('@vaadin/vaadin-grid/vaadin-grid-filter-column'); 
        import('@vaadin/vaadin-grid/vaadin-grid-column-group');
        import('@vaadin/vaadin-grid/vaadin-grid-tree-toggle');
        import('@vaadin/vaadin-grid/vaadin-grid-sorter');
        import('@vaadin/vaadin-grid/vaadin-grid-selection-column');

        import('../elements/platformComponents/MainView/Headers/platform-header');
        import('../elements/platformComponents/MainView/LeftPanes/platform-leftpane-fix');
        import('../elements/platformComponents/MainView/Centers/platform-center-tabs');        
    }    
}
customElements.define('platform-main', PlatformMain);

// import {LitElement, css, html} from 'lit-element';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../store';
// import '@polymer/polymer/lib/elements/dom-if';
// import '@polymer/polymer/lib/elements/dom-repeat';
// import {default_language} from '../config/platform/logic/platform-config';
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
//  * `platform-main` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class PlatformMain extends connect(store)(LitElement) {
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
//       console.log('toasts');
//       var elem=this.shadowRoot.getElementById("toasterror");
//       if (elem){      
//         elem.show({text: 'hola', duration: 3000});}

// //      this.$.toast-error.show({text: "hola", duration: 3000});
//       //this.$.toast.show({text: 'hola', duration: 3000});
      
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
//         <paper-toast id="toast"></paper-toast>
//         <lp-loading></lp-loading>
//         <paper-toast id="toasterror"></paper-toast>
//         <paper-toast id="toast-error"></paper-toast>
//         <!-- <paper-toast id="toast2" text="Hello world!" opened></paper-toast> -->
//           <!-- <link rel="stylesheet" href="../../config/platform/main-layout/two-headers"> -->
//             ${!this.loggedIn ? 
//               html`<platform-login id="platf_login" @platform-login-loggedwithsuccess="${this.loggedSuccesfully}"></platform-login>` 
//             : html`<div id="wrapper">
//                 ${this.layoutSettings.display_headertwo ? html`
//                   <div class="split top bckimgtop"></div>
//                   <platform-headertwo id="platf-headertwo"></platform-headertwo>
//                     ` : `` }            
//                     ${this.layoutSettings.display_header ? html`
//                       <div class="split top bckimgtop"></div>
//                       <platform-header id="platf-header"></platform-header> 
//                     ` : `` }
//                     ${this.layoutSettings.display_left_pane ? html`
//                   <div id="wrapper_inner">
//                   <div class="split left bckimgleft">     
//                     <platform-leftpane-fix></platform-leftpane-fix>             
//                   </div>
//                   </div>
//                     ` : `` }
//                     ${this.layoutSettings.display_center ? html`
//                       <div class="split right">
//                       <platform-center-tabs class="center-tab"></platform-center-tabs>     
//                       </div>         
//                     ` : `` } 
//               </div>
//             ` }
//         `;
//     }
//     loggedSuccesfully() {
// console.log('    loggedSuccesfully')  ;
//         this.loggedIn=true;
//         this.importPlatformComponents();
//     }       
//     ready() {
//         super.ready();

// //        this.addEventListener('toasterror', (e) => this.toastError(e) );   
//         this.addEventListener('toast-error', (e) => this.toastError(e) );   
//         this.addEventListener('toast-message', (e) => this.toastMessage(e) );       
//     }    
//     toastMessage(e) {
//   console.log('toastMessage called');
//         this.$.toast.show({text: e.detail, duration: 3000});
//     }    
//     toastError(e) {
//   console.log('toastError called');
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
// customElements.define('platform-main', PlatformMain);