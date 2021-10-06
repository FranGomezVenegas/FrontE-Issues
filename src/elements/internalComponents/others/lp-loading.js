import { LitElement, html, css } from 'lit-element';
import { store } from './../../../store';
import { connect } from 'pwa-helpers/connect-mixin.js';
import 'dile-spinner/dile-spinner-modal';

class LpLoading  extends connect(store)(LitElement) {

  static get styles() {
    return css`
      :host {
        display: block;
        --dile-spinner-color: #a1fdd0;
        --dile-spinner-modal-box-color: var(--paper-light-blue-500);        
      }
    `;
  }

  static get properties() {
    return {
      loading: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.loading = false;
  }

  render() {
    return html`
      <dile-spinner-modal ?active=${this.loading}></dile-spinner-modal>        
    `;
  }

  stateChanged(state) {      
    this.loading = state.app.user.loading;
  }
}

customElements.define('lp-loading', LpLoading);