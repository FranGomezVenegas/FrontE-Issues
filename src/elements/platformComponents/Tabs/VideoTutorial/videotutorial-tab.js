import {PolymerElement, html} from '@polymer/polymer';
import('@polymer/paper-dialog/paper-dialog');
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../store.js';
import './videotutorial-tab-settings';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
// import '@polymer/iron-collapse/iron-collapse.js';
// import 'vaadin-button/vaadin-button';
// import '@alenaksu/json-viewer';
// import '@polymer/paper-input/paper-input';
// import 'webcomponent-qr-code';
// import '@thuoe/mp4-video-player';

//import '@granite-elements/granite-qrcode-scanner/granite-qrcode-scanner.js';
import {FrontendVideoTutorials} from '../../../../platform-mixins/platform-functions/frontend-videotutorials';
class VideotutorialTab extends FieldsMethods(FrontendVideoTutorials((connect(store)(PolymerElement)))) {
    static get properties() {
        return {    
            currentVideoElementId:{type:String, value:''},        
            currentvideo: {type:Object} ,
            // elementOpen: {type: Boolean, value: true},    
            // qrCodeText:{ type:String, value :'type here'},
            allVideoTutorials: {type: Array, notify:true},
            videoUrl:{type: String, value:
                'https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing'
            //'../images/ScreenCaptureProject35.mkv'
            //'C:/Users/User/Videos/Movavi Screen Capture Pro/ScreenCaptureProject35.mkv'
            },
        }
    }    
    
    stateChanged(state) {
        if (state.videoTutorials!=null){
            this.allVideoTutorials= state.videoTutorials.allActiveVideoTutorials;
        }
        console.log('this.allVideoTutorials', this.allVideoTutorials);
        this.selectedLanguage = state.app.user.appLanguage; 
    }        
    toggleSOP(){
        this.elementOpen=!this.elementOpen;
        return;
    }  
  static get template() {
    return html`
    <style include="videotutorial-tab-style"></style> 
    <style>
        mp4-video-player {
            width: 80%;
            height: 80%;
            background: rgba(0, 0, 0, 0.12);
        }
    </style>
    <div class="grid-container">
        <template is="dom-repeat" items="{{allVideoTutorials}}" as="currentvideo"> 
            <div class="videocard" video-info="{{currentvideo}}"> 
                <p><b>{{currentvideo.entity_name}} - {{fieldValueFromObject(selectedLanguage, 'label', currentvideo)}}</b></p>
                {{fieldValueFromObject(selectedLanguage, 'summary', currentvideo)}}
                <p><video controls id="{{currentvideo.id}}" width=240" height="320" on-play="playme" >
                    <source src="{{currentvideo.source}}" type="video/mp4"> 
                </video>          </p>
      
            </div>
<!--            <div class="videocard" on-click="openVideoWindow" video-info="{{currentvideo}}"> 
                <p><b>{{currentvideo.label_en}}</b></p>
                {{currentvideo.summary_en}}
                <p><video controls id="videoplayer" width=240" height="320" >
                    <source src="{{currentvideo.source}}" type="video/mp4"> 
                </video>          </p>
      
            </div>
            <div class="videocard" on-click="openVideoWindow" video-info="{{currentvideo}}"> 
                <p class="videotitle"><b>{{currentvideo.entity_name}} - {{currentvideo.label_en}}</b></p>
                {{currentvideo.summary_en}}
                <p><video controls id="videoplayer" width=240" height="320" >
                    <source src="{{currentvideo.source}}" type="video/mp4"> 
                </video>          </p>
      
            </div>
            <div class="videocard" on-click="openVideoWindow" video-info="{{currentvideo}}"> 
                <p><b>{{currentvideo.label_en}}</b></p>
                {{currentvideo.summary_en}}
                <p><video controls id="videoplayer" width=240" height="320" >
                    <source src="{{currentvideo.source}}" type="video/mp4"> 
                </video>          </p>
      
            </div>
-->            
        </template>
        <paper-dialog on-keydown="keyPressedVideoDialog" always-on-top no-cancel-on-outside-click top="4px" id="videowindowdialog" >    
        <video controls id="videoplayer" width=480" height="640"> <!-- autoplay -->
          <source src="https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing" type="video/mp4"> 
<!  --            <dialog-videoplayer index-content="{{videoToc}}" video-url="https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing" video-url2="https://drive.google.com/file/d/1IsYIEljOqwlzqtvAE6X_Z5ioywhdA2mO/view?usp=sharing" selected-language="{{selectedLanguage}}"></dialog-videoplayer>-->
        </video>          
      </paper-dialog>          

    </div>
    <paper-dialog on-keydown="keyPressedVideoDialog" always-on-top no-cancel-on-outside-click top="4px" id="videowindowdialog" >    
    {{currentvideo.label_en}} {{currentbcontent.summary_en}}
    {{currentvideo.source}}
    <video controls id="videoplayer" width=480" height="640"> <!-- autoplay -->
    <source src="https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing" type="video/mp4"> 
    <!--  <source src="{{currentvideo.source}}" type="video/mp4"> -->
    </video>          
  </paper-dialog>          

<!--    <paper-dialog always-on-top no-cancel-on-outside-click  id="videowindowdialog" >    
        <div style="display:flex" style="width:50%; height:50%;">
            <div style="display:block; padding-right:10px;" >
            <nav>
            <ul>Plataforma
            <li>Cabecera</li>
            <li>Pestañas</li>
            </ul>
            </nav>            
            </div>
            // <mp4-video-player src="{{videoUrl}}" auto-play></mp4-video-player>        
        </div>

    </paper-dialog>
    
    <vaadin-button id="triggerSOP" on-click="openVideoWindow" aria-expanded\$="[[openedSOPs]]" aria-controls="collapse">[[_getTextSOP(openedSOPs)]]</vaadin-button>
-->    
<!--
    
    <!-- <granite-qrcode-scanner active continuous></granite-qrcode-scanner> 
    <paper-input type="text" id="qrtext" name="qrtext" label="qr code text" value="{{qrCodeText}}" 
     ></paper-input>
    <qr-code data="{{qrCodeText}}"></qr-code>
    <vaadin-button id="triggerSOP" on-click="toggleSOP" aria-expanded\$="[[openedSOPs]]" aria-controls="collapse">[[_getTextSOP(openedSOPs)]]</vaadin-button>
    <iron-collapse id="collapse" opened="{{elementOpen}}">
        <nav>
            <li>Opcion 1</li>
            <li>Opcion 2</li>
        </nav>
    </iron-collapse> 
    <json-viewer>
    { "quiz": { "sport": { "q1": { "question": "Which one is correct team name in NBA?", "options": [ "New York Bulls",
    "Los Angeles Kings", "Golden State Warriros", "Huston Rocket" ], "answer": "Huston Rocket" } }, "maths": { "q1": {
    "question": "5 + 7 = ?", "options": [ "10", "11", "12", "13" ], "answer": "12" }, "q2": { "question": "12 - 8 = ?",
    "options": [ "1", "2", "3", "4" ], "answer": "4" } } } }
</json-viewer>       
-->
    `;
    }
    playme(e){
        if (this.currentVideoElementId.length>0 && e.target.id!=this.currentVideoElementId){
            var elem=this.shadowRoot.getElementById(this.currentVideoElementId);
            if (elem){elem.pause();}            
        }
        this.currentVideoElementId=e.target.id;
    }
    openVideoWindow(e){
      //alert('ooooopening');
      console.log(e, e.videosrc, e.class     );
      this.currentvideo=e.srcElement.videoInfo;
        this.$.videowindowdialog.open();
    }  
    ready() {
        super.ready();
        this.getActiveVideoTutorials({});       
    }      
}
customElements.define('videotutorial-tab', VideotutorialTab);