import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
import './../../../config/platform/main-layout/two-headers-form-fields-style';
class FieldGoogleFonts extends FieldsMethods(connect(store)(PolymerElement)) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage;        
    }            
    static get template() {
        return html`
        <style include="form-fields-style"></style>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Annie Use Your Telescope' type='text/css'>
        <div>
            <p class="formFieldGoogleFonts" style="font-family:{{field.font_family}};font-size:{{field.font_size}};">{{labelValue(selectedLanguage, field)}}</p>
        </div>
        `;
    }
}
customElements.define('field-google-fonts', FieldGoogleFonts);