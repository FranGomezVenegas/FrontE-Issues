import {LitElement, css, html} from 'lit-element';
import {ToastMethods} from '../../../../platform-mixins/functions/toast-methods';

/**
 * `pdf-link` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PdfLink extends ToastMethods(LitElement) {
    static get properties() {
        return {
            fileLink: String,
            errorMsg:{type: Object}            
        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        this.errorMsg={
            message_en:'This SOP has no PDF attached',
            message_es:'Este PNT no tiene PDF asociado',}
    }

    static get styles() {
        return css`
                .pdfIcon{
                    height:24px;
                    width:24px;
                    color:red; 
                    fill:#03a9f4;
                }
            `;
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <vaadin-button value="${this.fileLink}" @click="${this.openPDF}">
                <svg class="pdfIcon">
                    <path d="M 20 2 H 8 c -1.1 0 -2 0.9 -2 2 v 12 c 0 1.1 0.9 2 2 2 h 12 c 1.1 0 2 -0.9 2 -2 V 4 c 0 -1.1 -0.9 -2 -2 -2 Z m -8.5 7.5 c 0 0.83 -0.67 1.5 -1.5 1.5 H 9 v 2 H 7.5 V 7 H 10 c 0.83 0 1.5 0.67 1.5 1.5 v 1 Z m 5 2 c 0 0.83 -0.67 1.5 -1.5 1.5 h -2.5 V 7 H 15 c 0.83 0 1.5 0.67 1.5 1.5 v 3 Z m 4 -3 H 19 v 1 h 1.5 V 11 H 19 v 2 h -1.5 V 7 h 3 v 1.5 Z M 9 9.5 h 1 v -1 H 9 v 1 Z M 4 6 H 2 v 14 c 0 1.1 0.9 2 2 2 h 14 v -2 H 4 V 6 Z m 10 5.5 h 1 v -3 h -1 v 3 Z" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </vaadin-button>
        `;
    }
    openPDF() {
        if (this.fileLink==null){
            this.toastErrorMessage(this.errorMsg);
            return;            
        }
        if (this.fileLink==""){
            this.toastErrorMessage(this.errorMsg);
            return;            
        }
        //console.log('openPDF', fileLink);
        //var pdf = e.detail.value; //'http://www.bib.uia.mx/tesis/pdf/014828/014828.pdf';//MyPdf.pdf;
        //var pdf = fileLink;
        window.open(this.fileLink);
    }
}

customElements.define('pdf-link', PdfLink);