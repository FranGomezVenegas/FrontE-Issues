import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@thuoe/mp4-video-player';
import {FieldsMethods} from '../../../../platform-mixins/functions/fields-methods';
/**
 * `dialog-videoplayer` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class DialogVideoplayer extends FieldsMethods(PolymerElement) {
    static get properties() {
        return {
            videoPoster:{type: String, value:'./images/header/trazit-logo-animado.gif'},
            videoUrl:{type: String, value:'https://www.youtube.com/watch?v=iOdsAE8Mq7I&ab_channel=NPRMusic'},//https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing'},
            classModal: {type: String, computed: 'changeClass(opened)', notify:true}, 
            displayIndex:{type: Boolean,value:false},
            indexDisplay: {type: String, computed: 'indexDisplayClass()', notify:true}, 
            indexContent: {type: Array},
            selectedLanguage:{type: String, value: 'es'},
        }
    }
    static get template() {
        return html`
                <style>
                .closed {
                    display: none;
                }  
                .open {
                    display: flex;
                }
                </style>        
                <div class$="{{classModal}}" id="videoPlayerDiv" style="display:flex; width:50%; height:50%;">
                <div style="display:block; padding-right:10px;" >                
                <input type="button" on-click="{{closeVideoWindow}}"></input>
                    <div class$="indexDisplayClass">
                        <nav>
                            <ul>Plataforma                            
                                <template is="dom-repeat" items="{{indexContent}}" as="curvideo">                            
                                    <li><a  on-click="selectVideo" videoinfo="{{curvideo}}"> <!--(item, item2)-->
                                    {{labelValue(selectedLanguage, curvideo)}}  
                                    </a></li>                          
                                </template>
                            </ul>
                        </nav>            
                    </div>
                // <!-- auto-play -->
                <mp4-video-player id="videoplayer" poster="{{videoPoster}}"          src="{{videoUrl2}}" ></mp4-video-player>  
                    
                </div>
        
        `;
    }
    selectVideo(e){
        console.log('selectVideo', e);
        if (e.currentTarget.videoinfo==undefined){return;}
        var indexEntryVideo=e.currentTarget.videoinfo.src;
        if (indexEntryVideo!=undefined){
            var elem=this.shadowRoot.getElementById("videoplayer");
            if (elem){elem.src=indexEntryVideo;}
        }
    }
    closeVideoWindow(){
        console.log('closeVideoWindow');
        this.changeClass(false);
        //return;
        if (indexEntryVideo!=undefined){
            var elem=this.shadowRoot.getElementById("videoplayer");
            if (elem){elem.stop=true;}
        }
        var elem=this.shadowRoot.getElementById("videowindowdialog");
        if (elem){elem.close();}
        var elem2=this.shadowRoot.getElementById("videoplayer");
        if (elem2){elem2.stop();}
    }
    changeClass(opened) {
        if(opened) {
          return 'open';
        }
        return 'closed'
      }
    indexDisplayClass() {
        if(this.indexContent!=undefined && this.indexContent.length>0) {
            return 'open';
        }
        return 'closed'
    }
    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
}

customElements.define('dialog-videoplayer', DialogVideoplayer);

// import {LitElement, html} from 'lit-element';
// import '@thuoe/mp4-video-player';
// /**
//  * `dialog-videoplayer` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class DialogVideoplayer extends LitElement {
//     static get properties() {
//         return {
//             videoUrl:{type: String}, //, value:'https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing'},
//             classModal: {type: String}, // , computed: 'changeClass(opened)'
//             displayIndex:{type: Boolean},
//         }
//     }

//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//         super();
//         this.videoUrl='https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing';
//     }

//     // static get styles() {
//     //     return [
//     //         super.styles,
//     //         css``,
//     //     ];
//     // }

//     /**
//      * Implement to describe the element's DOM using lit-html.
//      * Use the element current props to return a lit-html template result
//      * to render into the element.
//      */
//     render() {
//         return html`
//         <style>
//         .closed {
//             display: none;
//         }  
//         </style>        
//         <div class="${this.classModal}" id="videoPlayerDiv" style="display:flex; width:50%; height:50%;">
//         <div style="display:block; padding-right:10px;" >
//           <input type="button" @click="${this.closeVideoWindow}">video</input>
//         ${this.displayIndex ? html  `
//           <nav>
//           <ul>Plataforma
//           <li>Cabecera</li>
//           <li>Pestañas</li>
//           </ul>
//           </nav>            
//         `: ``}  
//         </div>
        
//         <mp4-video-player id="videoplayer" src="${this.videoUrl}" auto-play></mp4-video-player>  
            
//         </div>
//         `;
//     }
//     closeVideoWindow(){
//         this.changeClass(false);
//         return;
//         var elem=this.shadowRoot.getElementById("videowindowdialog");
//         if (elem){elem.close();}
//         var elem2=this.shadowRoot.getElementById("videoplayer");
//         if (elem2){elem2.stop();}
//     }
//     changeClass(opened) {
//         if(opened) {
//           return '';
//         }
//         this.classModal='closed';
//         return 'closed'
//     }        
// }

// customElements.define('dialog-videoplayer', DialogVideoplayer);