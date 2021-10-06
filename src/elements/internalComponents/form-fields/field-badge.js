import {PolymerElement, html} from '@polymer/polymer/polymer-element';
class FieldBadge extends PolymerElement {
    static get properties() {
        return {
            value: {
                type: Number,
                notify: true
            }             
        }
    }
    static get template() {
        return html`
            <paper-badge label="{{value}}"></paper-badge>        `;
    }
}
customElements.define('field-badge', FieldBadge);