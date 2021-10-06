import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import './em-demo-a-prog-points';
class EmDemoAProgPointsMap extends ((((connect(store)(PolymerElement))))) {
    static get properties() {
        return {
            selectedProgram:{type: Object},
            selectedSamplingPoint:{type: Object},
        }
    }
    static get template() {
        return html`
            <div class="mainDiv">
                <em-demo-a-prog-points id="progpoints" selected-program="{{selectedProgram}}"></em-demo-a-prog-points>
                <div class="parentMap"  on-click="mapClick"                
                style="position: relative; overflow: hidden; text-align:center; height: 850px; width: 709px; background-image: url({{selectedProgram.map_image}});">
                    <template is="dom-repeat" items="{{selectedProgram.sample_points}}" as="currSamplePoint">
                        <div name="SP_{{currSamplePoint.name}}" id="{{{{currSamplePoint.name}}}}" title="{{currSamplePoint.description_es}}"
                            style="position: absolute; top:{{currSamplePoint.map_icon_top}}; left:{{currSamplePoint.map_icon_left}};">
                                <img on-mouseover="pointClicked" on-click="pointClicked" given-point="{{currSamplePoint}}" src="[[currSamplePoint.map_icon]]" height="[[currSamplePoint.map_icon_h]]" width="{{currSamplePoint.map_icon_w}}"> 
                        </div>                                
                    </template>                                         
                </div>            
            </div>            
        `
    }
    onListChange(e){
        return;};

    pointClicked(e){
        var elem=this.shadowRoot.getElementById("progpoints");
        var mye={detail:e.currentTarget.givenPoint};
        if (elem){elem.pointClicked(mye);}        
    }
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA!=null){
            //this.selectedSamplingPoint = state.emDemoA.selectedSamplingPoint;
            //this.selectedProgram=state.emDemoA.selectedProgram;
        }
    }       
}
customElements.define('em-demo-a-prog-points-map', EmDemoAProgPointsMap);