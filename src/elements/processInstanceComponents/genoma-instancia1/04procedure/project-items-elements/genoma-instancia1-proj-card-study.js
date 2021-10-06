import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `genoma-instancia1-proj-card-study` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class GenomaInstancia1ProjCardStudy extends PolymerElement {
    static get properties() {
        return {

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

customElements.define('genoma-instancia1-proj-card-study', GenomaInstancia1ProjCardStudy);