import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '../../../internalComponents/Charts/chart-controller';
import {windowDefinition, moduleKPIs} from '../03config/em-demo-a-kpi-settings';
import '../03config/em-demo-a-kpi-settings';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitKpis} from '../01moduleFunctionality/endpoints-frontend-env-monit-kpis';
class EmDemoAKpi extends FieldsMethods(FrontendEndpointsEnvMonitKpis(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=null){
            var kpis=[];
            kpis.sampleStatCounterByStage=state.emDemoA.sampleStatsCounterByStage;
            kpis.sampleStatsLastNresults=state.emDemoA.sampleStatsLastNresults;  
            this.kpiData=kpis;          
        }
    }        
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            kpiData:{type: Object},
            moduleKPIs:{type: Object, value:moduleKPIs},
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-kpi-style"></style>    
        <div class="main">
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}</p>
            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
        </div>
        `;
    }
    refreshWindow() {
        this.loadKPIPage();
    }
    loadKPIPage(){        
        this.setKPIs(this.moduleKPIs.kpis);
    }
    ready() {
        super.ready();
        this.loadKPIPage();
    }    
}
customElements.define('em-demo-a-kpi', EmDemoAKpi);