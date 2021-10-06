import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import '../../../internalComponents/Charts/chart-controller';
import {windowDefinition} from '../03config/genoma-instancia1-home-settings';
import '../03config/genoma-instancia1-home-settings';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
//import {FrontendEndpointsEnvMonitSamples} from '../01moduleFunctionality/endpoints-frontend-env-monit-samples';
//import './em-demo-a-kpi';
//FrontendEndpointsEnvMonitSamples
class GenomaInstancia1Home extends FieldsMethods((connect(store)(PolymerElement))) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=null){
            var kpis=[];
            if (state.emDemoA.kpis){kpis=state.emDemoA.kpis;}            
            kpis.sampleStatCounterByStage=state.emDemoA.sampleStatsCounterByStage;
            kpis.sampleStatsLastNresults=state.emDemoA.sampleStatsLastNresults;          
            console.log('kpis', kpis);
            this.kpiData=kpis;          
        }
    }        
    static get properties() {
        return {
            windowDefinition:{type: Object, value: windowDefinition},
            selectedLanguage: {type:String},
            kpiData:{type: Object},
        }
    }
    static get template() {
        return html`
        <style include="genoma-instancia1-home-style"></style>    
        <div class="main">        
            <p class="tableTitle">{{labelValue(selectedLanguage, windowDefinition.windowTitle)}}</p>
<!--            <template is="dom-repeat" items="[[windowDefinition.charts]]" as="curchart">                                    
                <chart-controller class="chart" chart-definition="{{curchart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
            <template is="dom-repeat" items="[[windowDefinition.kpiCharts]]" as="curkpichart">                                    
                <chart-controller class="chart" chart-definition="{{curkpichart}}" data-object="{{kpiData}}"></chart-controller>
            </template>
-->            
        </div>
        <em-demo-a-kpi id="kpis"></em-demo-a-kpi>
        `;
    }
    refreshWindow() {
        //this.loadHomePage();
    }
    loadHomePage(){
        var data=[];
        data.stagesToInclude="Sampling|Incubation|PlateReading|MicroorganismIdentification|END"; //END not included???
        data.stagesToExclude="Samplingzz|PlateReading";
        data.grouped=true;
        this.getSampleStatsCounterByStage(data);
        this.getSampleStatsLastNresults(data);
        var elem=this.shadowRoot.getElementById("kpis");
        if (elem){elem.loadKPIPage();}        
    }
    ready() {
        super.ready();
        //this.loadHomePage();
    }    
}
customElements.define('genoma-instancia1-home', GenomaInstancia1Home);