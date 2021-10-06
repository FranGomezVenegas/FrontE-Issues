import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import '@material/mwc-switch/mwc-switch';
import {default_language} from '../../../config/platform/logic/platform-config';
import { setAppLanguage } from '../../../elements/platformComponents/Redux/actions/app_actions';

class languageSelector extends connect(store)(PolymerElement) {
    static get properties() {
        return {
            selectedLanguage: {type: String, value: default_language, observer:'setDefaultLanguage'},
            flagUrl: String,
            flagTitle: String,
        }
    }
    stateChanged(state) {
        //console.log('stateChanged sample-reception', state);
        this.selectedLanguage = state.app.user.appLanguage;    
    }  

    static get template() {
        return html`   
            <style>
            paper-icon-button{
                padding:0.2vmin;
                width: 4vmin;
                height: 4vmin;                 
                }
            }
            </style>             
            <paper-icon-button class="flag" on-click="switchLanguage" 
                src="{{flagUrl}}"
                value="selectedLanguage" title="{{flagTitle}}"></paper-icon-button>
            
<!--            <mwc-formfield id="switch" label="" name="langSwitch" >
                <mwc-switch id="appLanguageSelector" checked on-click="switchLanguage"></mwc-switch>
            </mwc-formfield>    
            
            <paper-icon-button id="english" on-click="langSwitch" 
                src="./images/flags/england.jpg"
                value="en" alt="English" title="English"></paper-icon-button> -->
        `;
    }
    switchLanguage(){
        if (this.selectedLanguage==="en"){
            this.selectedLanguage="es";
            return;
        }
            if (this.selectedLanguage==="es"){
            this.selectedLanguage="en";
            return;
        }
        this.setDefaultLanguage();
        return;        
    }
    setDefaultLanguage(){
        store.dispatch(setAppLanguage(this.selectedLanguage)); 
        this.getCheckerValue();
    }
    getCheckerValue(){
        if (this.selectedLanguage=="en"){
            this.flagUrl="./images/flags/spain.jpg"; //'https://banner2.kisspng.com/20180320/hde/kisspng-flag-of-spain-flag-of-the-united-states-national-f-spain-flags-icon-png-5ab0b60cb326e6.1242812115215303807338.jpg';
            this.flagTitle="Castellano";
        return;}
        this.flagUrl="./images/flags/england.jpg"; //'http://www.johnsonmackenzie.ltd.uk/wp-content/uploads/2015/01/united_kingdom_640.png';
        this.flagTitle='English';
    }
}
customElements.define('language-selector', languageSelector);