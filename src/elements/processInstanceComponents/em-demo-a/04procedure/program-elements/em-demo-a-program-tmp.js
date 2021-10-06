import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';

/**
 * `em-demo-a-program-tmp` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EmDemoAProgramTmp extends (connect(store)(PolymerElement)) {
    static get properties() {
        return {
            selectedProgram: {type: Object},    
            tableTitle:{type: String},
        }
    }

    static get template() {
        return html`            
        `;
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
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
}

customElements.define('em-demo-a-program-tmp', EmDemoAProgramTmp);