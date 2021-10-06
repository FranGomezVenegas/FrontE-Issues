import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '../../../internalComponents/Charts/chart-controller';
import {windowDefinition, moduleKPIs} from '../03config/proc-deploy-kpi-settings';
import '../03config/proc-deploy-kpi-settings';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
import {FrontendEndpointsEnvMonitKpis} from '../01moduleFunctionality/endpoints-frontend-env-monit-kpis';
class procDeployKpi extends FieldsMethods(FrontendEndpointsEnvMonitKpis(connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.procDeploy!=null){
            var kpis=[];
            kpis.sampleStatCounterByStage=state.procDeploy.sampleStatsCounterByStage;
            kpis.sampleStatsLastNresults=state.procDeploy.sampleStatsLastNresults;  
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
        <style include="proc-deploy-kpi-style"></style>    
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
customElements.define('proc-deploy-kpi', procDeployKpi);