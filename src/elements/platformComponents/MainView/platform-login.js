import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import {store} from '../../../store';
import {appLogin_formFields, appLogin_ribbon, appLogin_authenticationMessage, appLogin_logoOnTop//, userProfileHome        
        } from '../../../config/platform/platform-login/platform-login-settings';
import '../../../config/platform/platform-login/platform-login-style';
import {dbName} from '../../../config/platform/logic/platform-config';
import {AuthenticationApi} from '../../../platform-mixins/apis/api-authentication';
import {startLoading, setAppLanguage} from '../Redux/actions/app_actions';

//import './../../internalComponents/others/language-selectortwoflags.js';
import './../../internalComponents/others/language-selector.js';
import('@polymer/paper-dialog/paper-dialog');
//import '../../internalComponents/Dialogs/DialogVideoPlayer/dialog-videoplayer';
import {autoLogin} from './../../../config/platform/logic/api-config';
import {sessionFakeMixin} from './../../../config/platform/logic/sessionFakes';
import {sessionLogoutInterval} from './../../../platform-mixins/functions/session-methods';



/**
 * `platform-login` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PlatformLogin extends sessionFakeMixin(AuthenticationApi(connect(store)(PolymerElement))) { //(ToastMethods(FrontendSopUser(ProcedureList(UserSession(AuthenticationApi(connect(store)(PolymerElement))))))) {
    static get properties() {
        return {
          autoLogin: {type: Object, value:autoLogin},
          hideVideo:{type: Boolean, value:true},
          loggedIn: {type: Boolean, observer: 'notLoggedIn', notify: true},
          appLogin_logoOnTop: {type: String, value:appLogin_logoOnTop},
          formFields: {type: Array, notify: true, bubble: true, value: appLogin_formFields},
          loading: {type: Boolean,value: false},
          appLogin_ribbon:{type: Object, value:appLogin_ribbon},
          axiosMessage: {type: String, value:appLogin_authenticationMessage},
          userRoles: Array,
          dbName: {type: String, value:dbName},
          selectedLanguage: {type:String, value:''}, 
          rolesList: {type: Array, value:[]},
          //videoUrl:{type: String, value:'https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing'},
          videoToc:{type: Array, value:[{id: 1, label_en:'chapter 1', label_es:'tema 1', src:'https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing'},
          {id: 2, label_en:'Chapter 2', label_es:'tema 2', src:'https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing'}]}
        }
    }
    stateChanged(state){
      //console.log('soy platform-login y hago stateChanged');
      const field=this.shadowRoot.getElementById('User');
      if (field){field.focus();}

      this.selectedLanguage = state.app.user.appLanguage;
      if (state.app.user.loggedIn==false){
          this.notLoggedIn();
      }
    }               
    notLoggedIn(){
        this.set('formFields.1.read_only', false); // userName
        this.set('formFields.2.read_only', false); // password
        this.set('formFields.4.read_only', true); // roleList          
        return;
    }
    openVideoWindow(){
      this.hideVideo=false;
      var elem=this.shadowRoot.getElementById("videowindowdialog");
      if (elem){elem.open();}
    }    
    VideoWindowVisibility(status){
      return "visibility:"+status+";"
    }
    // closeVideoWindow(){
    //   var elem=this.shadowRoot.getElementById("videowindowdialog");
    //   if (elem){elem.close();}
    //   var elem2=this.shadowRoot.getElementById("videoplayer");
    //   if (elem2){elem2.stop();}
    // }
    static get template() {
        return html`
        <style include="platform-login-style"></style>
        <style>
        // div {
        //   display: inline-flex;
        //   width: 200px;
        //   height: 200px;
        //   justify-content: center;
        //   align-items: center;
        //   background-color: #e9a9c7;
        //   color: #39464e;
        //   cursor: pointer;
        // }
        
        // @media print {
        //   body.print-element *:not(.print) {
        //     display: none;
        //   }
        // }
        </style>
        <div class="login">
          <div class="appLoginForm" >
            <img src="[[appLogin_logoOnTop.url]]" class="appLoginLogoOnTop"> 
            <div id="language-selector">
              <!-- <language-selectortwoflags></language-selectortwoflags> -->
              <language-selector></language-selector>
            </div>
            <ribbon-element field="{{appLoginRibbonField.0}}"></ribbon-element>
          
            <paper-spinner-lite alt="Authenticating user and password"  width="6px" active="[[loading]]"></paper-spinner-lite>
            <form id="form">
              <template is="dom-repeat" items="{{formFields}}" as="currentfield">       
                <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
              </template>       
            </form>
<!--            <input type="button" on-click="openVideoWindow">video</input>
            <vaadin-button id="triggerSOP" on-click="openVideoWindow" </vaadin-button> -->
          </div>
<!--          <div on-click="{{print_this(this)}}">Print 1</div>
          <div>Print 2</div> -->
          <paper-dialog hidden="{{hideVideo}}" on-keydown="keyPressedVideoDialog" always-on-top no-cancel-on-outside-click top="4px" id="videowindowdialog" >    
            <video controls id="videoplayer" width=480" height="640"> <!-- autoplay -->
              <source src="https://public.bl.files.1drv.com/y4mLz8UF0o6QbcW2MVcx9le4afsSHgqDKGPrUHQ7QBL1RyBMhow077DNRlmWwTYqqFsHfbstKYno7TWVTuLeW72OeC7RL1-8E3PpOOY6A9Fv28Cw_-orPVE8paObv2yEv0Ku3fGMbXv1RwhkNixP9ENnU0bd9mCIwjHwBYI0o9kf_ZUQOkvBxLjY1nh-9r84LCmxNAAWwoEwiEvT59VAUTaCUDdBWfAtTS6Od_IrhMs_WI?access_token=EwAYA61DBAAU2kADSankulnKv2PwDjfenppNXFIAARIUjO3SPOOldTu%2bfRZXa/7IxRSKT/yHxi6TDPEMWi7m56Xu0ZvLeQpsnF1VAwPYbULfcnZszwb4pl0so1RzIt8xKsc024d2mqdbWqGahVJu9MBRupIJj7M7RTzV2BVzDP40EpOAn64GIBX25pFK9W8YBQncVp0IWvcRLveU4/4mwDz0xJQ51uO/EkyqGTmywDTpV4jnzpuXUpMhK3citM8h44J/BPtMOw5Vf3d%2bZAVJwzlxdcr0jniDoe6VMoEp/jcfAJOMuUVb7WdUMDX1hqnnWRVszuleV43CaAwHXFBIItUtXjQ0oEaq39%2banlUCYjox9HHNh2HwTR55XWd7XGIDZgAACONZoBMGDdAD6AF%2blO5w6UUZKxr%2b8omTC7yGYb6GOx9RIOAi/S/6luSum1yIWD0Q6XAPyxl6wTURmBFLhRejmDf/gqkMduocV%2bSeXsOyDOVjvZN0uIS9USVeyNJ5wmfVcFQGwfbwNJ7remfqXMpCdYwS%2b06m6JrM6K4mMls6ScK5TCViZGDAbO8Bxgy9hMMnJFZinAJ9YtiMk4Fvy3eLQxoIStrywz3odmfMUVpnNDzBeEFBGfxtcGjIrkdEEIUN65DCgxiByur/9HiCNEOETbTNwe8ZyTd30WJjCyfHzEJOqvuchI1pc0hR3Lkil7Eo/6Beq%2bac2PvrivbWH7SmISPJ%2b1Kz5vcxdvX4SFqrdLKroweaiPiAS4hvNKWSNmr5yusNtMUN6Fp9bc8wdc5MdSlOmAgT7dNvjd8dN40p2KRTc65IJ4c6HjaDGpmMVweJktSK1R3lxg49xpG0Cty9lPTMvgf4/JlqFZjOAiudmLLYdjuYW2u1w7BfYZjPbQqqgU5cWt06WiokHMIeEjY9zmfR0shuZQVyN/ZfGf%2boINmfPgTTOEQzY0NpiI82tcx2lNhq8Yto4PMRHgExol1iVf7r116yskiQFtPBa4hAdwTTEhBzfHQYz%2bPK1J3fMyv0qXMJ9KmMk4CqYTgLLP0ttzyDZxcC"
              <!-- https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing" -->
              type="video/mp4"> 
  <!  --            <dialog-videoplayer index-content="{{videoToc}}" video-url="https://drive.google.com/file/d/1jeqSoHwvyDqSmnVk0tksZnKP4ZNWRVG2/view?usp=sharing" video-url2="https://drive.google.com/file/d/1IsYIEljOqwlzqtvAE6X_Z5ioywhdA2mO/view?usp=sharing" selected-language="{{selectedLanguage}}"></dialog-videoplayer>-->
            </video>          
          </paper-dialog>          

        `;
    }
    printme(e){
      console.log('printme', e);
    }
    print_this(elem) {
      document.body.classList.add('print-element')
      elem.classList.add('print')
      window.print()
      document.body.classList.remove('print-element')
      elem.classList.remove('print')
    }
    keyPressed(e){      
        if(e.key=="Enter") {
          if (e.target.field.name.toUpperCase()=="USER"){        
            const field=this.shadowRoot.getElementById('password');
            if(field){field.focus();}
            return;}
          if (e.target.field.name.toUpperCase()=="PASSWORD"){        
            const field=this.shadowRoot.getElementById('userRole');
            this.login();
            return;}  
          if (e.target.field.name.toUpperCase()=="BUTTONACCESS"){        
            const field=this.shadowRoot.getElementById('userRole');
            if(field){field.focus();}
            return;}  
            this.login();
          return;
        }   
    }  
    keyPressedVideoDialog(e){
      if(e.key=="Escape") {
        this.hideVideo=true;
        console.log('keyPressedVideoDialog');
        const field=this.shadowRoot.getElementById('videoplayer');
        if (field){field.pause();}
      }
    }
    fieldButtonClicked(e) {        
      if (e.detail.buttonName=="buttonAccess"){                      
        this.login();
      }
      if (e.detail.buttonName=="video"){                      
        this.openVideoWindow();
      }
    }    
    onListChange(e) {    
      if (e.detail.name=="userRole"){ 
console.log('about to call getFinalToken', e.detail);        
        this.getFinalToken(e.detail.value);}
    }  
    loginFake() {   
      store.dispatch(setAppLanguage(this.selectedLanguage)); 
      alert('sesión fake')
      this.sessionFakeMethod();
    }
    login() { 
        this.loading=true;
        this.userName=this.formFields[1].value;       
        if (this.userName==undefined || this.userName.length==0) return;
        this.password=this.formFields[2].value;
        this.dispatchEvent(new CustomEvent('toast', {
          bubbles: true,        composed: true,
          detail: 'Validating User '+this.formFields[0].value+' ... '
            }));          
        var datas = [];        
        datas.dbUserName=this.formFields[1].value;    
        datas.dbUserPassword=this.formFields[2].value;
        datas.dbName=this.dbName;
        datas.callBackFunction=this.authSuccess.bind(this);
        datas.callBackFunctionError=this.authError.bind(this);
        this.ajaxAuthenticate(datas);
        store.dispatch(setAppLanguage(this.selectedLanguage)); 

    }   
    authSuccess(){
      //console.log('authSuccess');
        this.loading=false;
        setInterval(() => {sessionLogoutInterval();}, 5000);
    }
    authError(e) {
      //console.log('authError');
        this.loading=false;      
        var message=''; 
        switch(this.selectedLanguage){
            case 'es': message=this.axiosMessage.connectedFails.message_es; break; //message=response.data.message_es; break;            
            default: message=this.axiosMessage.connectedFails.message_en; break; //message=response.data.message_en; break;
        }          
        this.set('formFields.1.read_only', false); // userName
        this.set('formFields.2.read_only', false); // password
        this.set('formFields.4.read_only', true); // roleList    
        this.dispatchEvent(new CustomEvent('toast-error', {
            bubbles: true,        
            composed: true,
            detail: message
        }));
    }           
    fillUserRoleList() {      
        if (this.userRoles.length==1){
            this.toastSuccessMessageForSpecificLanguage(this.axiosMessage.connectedSuccess_singleRole, this.selectedLanguage);
        }else{
            this.toastSuccessMessageForSpecificLanguage(this.axiosMessage.connectedSuccess, this.selectedLanguage);            
        }
        const field=this.shadowRoot.getElementById(this.formFields[1].name);
        if (field){field.enable();} 
        const field2=this.shadowRoot.getElementById(this.formFields[2].name);
        if (field2){field2.enable();} 
// #Incident. enable does not work
//const field3=this.shadowRoot.getElementById(this.formFields[4].name);
//if (field3){field3.enable();} 
this.set('formFields.4.read_only', false); // roleList                  
        var i;
        if (this.userRoles.length==1){
          this.getFinalToken(this.userRoles[0]);
          return;
        }  
//console.log('fillUserRoleList');
        var tmpRolesList=[];
        for (i = 0; i < this.userRoles.length; i++) { 
          var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
          newElement.keyName=this.userRoles[i]; 
          newElement.keyValue_en=this.userRoles[i]; 
          newElement.keyValue_es=this.userRoles[i]; 
          tmpRolesList.push(newElement);
        }
        //this.rolesList[i]=tmpRolesList;
        this.set('formFields.4.items', tmpRolesList);
      }

      getFinalToken(userRole) {        
        store.dispatch(startLoading());
        this.ajaxFinalToken({
          userRole:userRole, userName:this.userName //, partialToken:this.partialToken//, personName:this.userInfoId
        });      
      }        
      initAppSession() {  
        if (!(this.autoLogin!=undefined && this.autoLogin.enable)){
          if (this.formFields[1].name!=undefined){
            const field=this.shadowRoot.getElementById(this.formFields[1].name);
            if (field){field.resetValue();} 
          }
          if (this.formFields[2].name!=undefined){
            const field2=this.shadowRoot.getElementById(this.formFields[2].name);
            if (field2){field2.resetValue();} 
          }
          var elem=this.shadowRoot.getElementById("userRole");
          if (elem){
            elem.resetValue();
          }        
        }
        this.dispatchEvent(new CustomEvent('platform-login-loggedwithsuccess', {
            bubbles: true,
            composed: true,
            detail: {}
        }));    
      }
      constructor(){
        super();
        if (this.autoLogin!=undefined && this.autoLogin.enable){
          //return;          
          this.userName=this.autoLogin.userName;
          this.dbUserPassword=this.autoLogin.pw;
          this.userRole=this.autoLogin.role;
          this.loginFake();
          return;
        }
          // this.userName="labplanet";   
          // this.dbUserPassword="vale";
          // this.userRole="edit";        

        this.formFields[1].value=this.userName;
        this.formFields[2].value=this.dbUserPassword;
        this.formFields[3].value=this.userRole;
        this.login();
        return;
    }
    /**
     * Use for one-time configuration of your component after local DOM is
     * initialized.
     */
    ready() {
      super.ready();
    
    }
}
customElements.define('platform-login', PlatformLogin);