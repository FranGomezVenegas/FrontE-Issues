import { LitElement, html, css } from 'lit-element';
import { store } from '../../../../../store';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { appProcedureListFake } from '../../03config/fakejson';
import {FrontendEndpointsProcedures} from '../../01moduleFunctionality/endpoints-frontend-procedures';
class ProceduresList  extends FrontendEndpointsProcedures(connect(store)(LitElement)) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <p>${appProcedureListFake.map(item => html`      
      <field-controller id="${item.name}" .field=${item} @field-list-value-changed=${this.onListChange}></field-controller>`)}</p>
    `;
  }

  stateChanged(state) {      
  }
  onListChange(e){
    var selProcedure=e.detail.value;
    selProcedure=selProcedure.replace('__','');
    console.log('onListChange', e.detail.value, selProcedure);
    var data=[];
    data.procedureName=selProcedure;
    this.getProcedureDefinition(data);
    //store.dispatch(setSelectedProcedure(data));  
  }
}
customElements.define('procedures-list', ProceduresList);