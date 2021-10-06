import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

import {default_language} from '../../../config/platform/logic/platform-config';
import { setAppLanguage } from '../../../elements/platformComponents/Redux/actions/app_actions';
/**
 * `language-selectortwoflags` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class languageSelectortwoflags extends connect(store)(PolymerElement) {
    static get properties() {
        return {
            selectedLanguage: {type: String, value: default_language, observer:'setDefaultLanguage'},
        }
    }
    static get template() {
        return html`
        <style>
            paper-icon-button{
                width: 4vmax;
                height: 4vmax;     
            }
            paper-icon-button.flag{
                --iron-icon-width: 100%;
                --iron-icon-height: 50%;       
            }
            </style>             
        <paper-icon-button class="flag" id="spanish" on-click="pressed" 
            src="./images/flags/spain.jpg"
            value="es" alt="Castellano" title="Castellano"></paper-icon-button>
        
        <mwc-formfield id="switch" label="" name="langSwitch" >
            <mwc-switch id="appLanguageSelector" checked on-click="switchLanguage"></mwc-switch>
        </mwc-formfield>    
        
        <paper-icon-button class="flag" id="english" on-click="pressed" 
            src="./images/flags/england.jpg"
            value="en" alt="English" title="English"></paper-icon-button>
        `;
    }    
    pressed(e) {                
        e.stopPropagation();
        var newLanguage = e.target.getAttribute('value');
        if (this.selectedLanguage==newLanguage){return;}       
        this.getCheckerValue();
        this.selectedLanguage=newLanguage;
        store.dispatch(setAppLanguage(newLanguage));      
    }
    switchLanguage(){
        if (this.selectedLanguage=="en"){
            this.selectedLanguage="es";
            store.dispatch(setAppLanguage(this.selectedLanguage));            
            return;}        
        this.selectedLanguage="en";
        this.getCheckerValue();
        store.dispatch(setAppLanguage(this.selectedLanguage));        
    }
    setDefaultLanguage(){
        store.dispatch(setAppLanguage(this.selectedLanguage)); 
        this.getCheckerValue();
    }
    getCheckerValue(){
        if (this.selectedLanguage=="es"){
            this.$.appLanguageSelector.checked=false;
        return;}
        this.$.appLanguageSelector.checked=true;                    
    }
}

customElements.define('language-selectortwoflags', languageSelectortwoflags);