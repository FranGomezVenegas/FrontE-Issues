import {LitElement, html} from 'lit-element';
import '../Components/ProceduresList/procedures-list-pane';
import '../../MainView/Components/SOP/sop-icon-and-badge';
import '../Components/Notifications/notifications-pane';
/**
 * `platform-leftpane-fix` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformLeftpaneFix extends LitElement {
    static get properties() {
        return {

        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }


    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <sop-icon-and-badge style="z-index:9;"></sop-icon-and-badge>
            <procedures-list-pane style="z-index:99;"></procedures-list-pane>            
            <notifications-pane style="z-index:999;"></notifications-pane>    
        `;
    }

}
customElements.define('platform-leftpane-fix', PlatformLeftpaneFix);

// import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
// import '../Components/ProceduresList/procedures-list-pane';
// import '../../MainView/Components/SOP/sop-icon-and-badge';
// import '../Components/Notifications/notifications-pane';
// /**
//  * `platform-leftpane-fix` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class PlatformLeftpaneFix extends PolymerElement {
//     static get template() {
//         return html`
//             <sop-icon-and-badge></sop-icon-and-badge>
//             <procedures-list-pane></procedures-list-pane>            
//             <notifications-pane></notifications-pane>    
//         `;
//     }
// }
// customElements.define('platform-leftpane-fix', PlatformLeftpaneFix);