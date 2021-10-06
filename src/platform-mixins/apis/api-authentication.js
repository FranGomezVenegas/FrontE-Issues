import { backendUrl, appAuthenticateApiUrl } from '../../config/platform/logic/api-config'
import { store } from '../../store';
import { ToastMethods } from '../functions/toast-methods';
import { TabsMethods } from '../platform-functions/tabs-functions';
import { stopLoading, updateFinalToken, setPartialToken, doLogin, setUserTabsOnLogin } from '../../elements/platformComponents/Redux/actions/app_actions';
import { addSession } from '../../elements/platformComponents/Redux/actions/session_actions';
import { ProcedureList } from './api-platform-procedurelist';
import { UserSession } from './api-usersession';
import { ApiAndFrontendSopUser } from './api-and-frontend-sopuser';
import { ApiSettings } from './api-settings';
import { dbName } from '../../config/platform/logic/platform-config';
//import {ApiMessage} from '../app-functions/apiMessage';
//import { addNotification  } from '../../../app/Redux/actions/notifications_actions';

import { userSessionMixin } from '../store/user-session-mixin';
import { loginMixin } from './login-mixin';
import { tokenMixin } from '../store/token-mixin';

import { setAppProcedureList } from '../../elements/platformComponents/Redux/actions/app_actions';
import { userInfo } from '../../elements/platformComponents/Redux/actions/app_actions';
import { userAllSop, userPendingSop, procedureSops } from '../../elements/platformComponents/Redux/actions/sop_actions';


/**
 * @mixinFunction
 * @polymer
 */
export const AuthenticationApi = (superClass) => class extends (ApiSettings(tokenMixin(ApiAndFrontendSopUser(UserSession(ProcedureList(loginMixin(userSessionMixin(TabsMethods(ToastMethods(superClass)))))))))) {

  ajaxAuthenticate(data) {
    var apiUrl = backendUrl + appAuthenticateApiUrl;
    var actionName = 'authenticate';
    //    console.log('authentication-api.ajaxAuthenticate', data, data.actionName);
    axios.get(apiUrl, {
      params: {
        'actionName': actionName, 'dbUserName': data.dbUserName, 'dbUserPassword': data.dbUserPassword
        , 'dbName': data.dbName
      }
    })
      .then(response => {
        if (response.status == 200) {
          //            console.log(response.data);
          if (data.callBackFunction) { data.callBackFunction(); }
          var finalTokenData = [];

          finalTokenData.personId = response.data.userInfoId;
          finalTokenData.partialToken = response.data.myToken;
          //this.userInfoId=response.data.userInfoId;
          store.dispatch(setPartialToken(finalTokenData));
          this.ajaxUserRoles();
          return;
        }
        var state = store.getState();
        var language = state.app.user.appLanguage;
        var message = '';
        switch (language) {
          case 'es': message = response.data.message_es; break;
          default: message = response.data.message_en; break;
        }
        if (message.length == 0) message = response.data.message;
        //console.log('message', message, '.then , response!=200, calling callBackFunctionError', 'response.data', response.data);
        //if (data.callBackFunctionError){data.callBackFunctionError();}
        //var errMessage = ApiMessage.errorMessage(response.data);
        this.dispatchEvent(new CustomEvent('toast-error', {
          bubbles: true, composed: true,
          detail: message //response.data.error_code //ApiMessage.errorMessage(response.data)
        }));
      })
      .catch(error => {
        console.log('.catch , calling callBackFunctionError', error.response.data, data.callBackFunctionError);
        //if (data.callBackFunctionError){data.callBackFunctionError();}
        //var errMessage = ApiMessage.errorMessage(response.data);
        this.dispatchEvent(new CustomEvent('toast-error', {
          bubbles: true, composed: true,
          detail: response.data.error_code
        }));
      })
      .then(() => {
      });
  }
  ajaxUserRoles(data) {
    var actionName = 'getuserrole';
    var apiUrl = backendUrl + appAuthenticateApiUrl;
    var partialToken = this.getPartialToken();
    //    console.log('authentication-api.ajaxUserRoles', partialToken);
    axios.get(apiUrl, {
      params: {
        'actionName': actionName, 'myToken': partialToken, 'dbName': dbName
      }
    })
      .then(response => {
        if (response.status == 200) {
          //            console.log(response);
          this.userRoles = response.data;
          this.fillUserRoleList();
          if (data && data.callBackFunction) { data.callBackFunction(); }
          return;
        }
        if (data && data.callBackFunctionError) { data.callBackFunctionError(); }
        this.dispatchEvent(new CustomEvent('toast-error', {
          bubbles: true, composed: true,
          detail: 'Error on authentication although the connectivity with the API ended with success! Status: ' + response.status
        }));
      })
      .catch(error => {
        if (data && data.callBackFunctionError) { data.callBackFunctionError(); }
        this.dispatchEvent(new CustomEvent('toast-error', {
          bubbles: true, composed: true,
          detail: 'Error on getting user roles'
        }));
      })
      .then(() => {
        //        console.log('always executed')
      });
  }
  ajaxFinalToken(data) {
    var apiUrl = backendUrl + appAuthenticateApiUrl;
    var actionName = 'finaltoken';
    var partialToken = this.getPartialToken();
    //    console.log('authentication-api.ajaxUserRoles', data);
    axios.get(apiUrl, {
      params: {
        'actionName': actionName, 'myToken': partialToken, 'userRole': data.userRole, 'dbName': dbName
      }
    })
      .then(response => {
        if (response.status == 200) {
          var finalToken = response.data.finalToken;
          var userTabsOnLogin = response.data.userTabsOnLogin;
          this.appSessionId = response.data.appSessionId;
          this.appSessionStartDate = response.data.appSessionStartDate;
          var addSessionData = {
            sessionId: this.appSessionId,
            userRole: data.userRole,
            startDate: this.appSessionStartDate,
          };
          store.dispatch(addSession(addSessionData));
          store.dispatch(updateFinalToken(finalToken));
          store.dispatch(doLogin(data.userName));

          var procListData = [];
          procListData.finalToken = finalToken;
          //console.log(response.data.procedures_list);
          store.dispatch(setAppProcedureList(response.data.procedures_list));
          store.dispatch(userAllSop(response.data.all_my_sops));
          store.dispatch(userPendingSop(response.data.my_pending_sops));
          store.dispatch(procedureSops(response.data.procedures_sops));
          store.dispatch(userInfo(response.data.header_info));
          //            var sop_tree_list_element=response.data.sop_tree_list_element; 

          // this.getProcedureList(procListData);            
          // this.getAPIPlatformHeader(procListData);
          // this.getSopOnStartSession(procListData);

          store.dispatch(stopLoading());
          if (data.callBackFunction) { data.callBackFunction(); }

          store.dispatch(setUserTabsOnLogin(userTabsOnLogin));

          this.openTabsOnLogin();

          // if (userTabsOnLogin.length>0){
          //     var i=0;
          //     for (i=0; i<userTabsOnLogin.length; i++){
          //         if (userTabsOnLogin[i].systemTab==true || userTabsOnLogin[i].tabType=='systab'){
          //             store.dispatch(addSystemTab(userTabsOnLogin[i]));                        
          //         }
          //         if (userTabsOnLogin[i].systemTab==false || userTabsOnLogin[i].tabType=='tab'){
          //             store.dispatch(addTab(userTabsOnLogin[i]));
          //         }
          //     }
          //     store.dispatch(setCurrentTab(userTabsOnLogin[userTabsOnLogin.length-1]));
          // }
          this.initAppSession();
          //            console.log(store.getState());
          return;
        } else {
          if (data.callBackFunctionError) { data.callBackFunctionError(); }
          var msgObj = {
            message_en: "Error running ajaxFinalToken: " + response.data,
            message_es: "Error ejecutando ajaxFinalToken: " + response.data
          };
          this.toastErrorMessage(msgObj);
          return;
        }
      })
      .catch(error => {
        if (data.callBackFunctionError) { data.callBackFunctionError(); }
        var msgObj = {
          message_en: "Error running ajaxFinalToken: " + error,
          message_es: "Error ejecutando ajaxFinalToken: " + error
        };
        this.toastErrorMessage(msgObj);
        return;
      })
      .then(() => {
        //      console.log('always executed')
      });
  }
  ajaxTokenValidateEsignPhrase(data) {
    var finalToken = this.getFinalToken();
    var apiUrl = backendUrl + appAuthenticateApiUrl;
    var endpoints_returningError = this.endpoints_returningError();
    var endpoints_for_apiAuthentication = this.endpoints_for_apiAuthentication();
    var actionName = endpoints_for_apiAuthentication.validateEsignPhrase.action_name;
    if (!data || data.esignPhraseToCheck.length == 0) {
      this.toastErrorMessage(endpoints_for_apiAuthentication.validateEsignPhrase.mandatory_field_message)
      return;
    }
    //console.log('authentication-api.ajaxUserRoles', data);
    axios.get(apiUrl, {
      params: {
        'actionName': actionName, 'finalToken': finalToken, 'esignPhraseToCheck': data.esignPhraseToCheck
      }
    })
      .then(response => {
        if (response.status == 200) {
          //this.finalToken=response.data.finalToken;
          if (data.callBackFunction) { data.callBackFunction(); }
          return;
        }
        if (data.callBackFunctionError) { data.callBackFunctionError(); }
        this.toastErrorMessageWithApiResponse(response.data, endpoints_returningError.response_not_status_200);
        return;
      })
      .catch(error => {
        if (data.callBackFunctionError) { data.callBackFunctionError(); }
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
        return;
      })
      .then(() => {
        //      console.log('always executed')
      });
  }

  ajaxTokenValidateUserCredentials(data) {
    var apiUrl = backendUrl + appAuthenticateApiUrl;
    var finalToken = this.getFinalToken();
    var endpoints_for_apiAuthentication = this.endpoints_for_apiAuthentication();
    var actionName = endpoints_for_apiAuthentication.validateUserCredentials.action_name;
    if (!data || data.userToCheck.length == 0 || data.passwordToCheck.length == 0) {
      this.toastErrorMessage(endpoints_for_apiAuthentication.validateUserCredentials.mandatory_field_message);
      return;
    }
    //var endpoints_returningError=this.endpoints_returningError();
    //console.log('authentication-api.ajaxUserRoles', data);
    axios.get(apiUrl, {
      params: {
        'actionName': actionName, 'finalToken': finalToken
        , 'userToCheck': data.userToCheck, 'passwordToCheck': data.passwordToCheck
      }
    })
      .then(response => {
        if (response.status == 200) {
          //            console.log(response);
          //this.finalToken=response.data.finalToken;
          if (data.callBackFunction) { data.callBackFunction(); }
          return;
        }
        if (data.callBackFunctionError) { data.callBackFunctionError(); }
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_not_status_200, response);
        return;
      })
      .catch(error => {
        if (data.callBackFunctionError) { data.callBackFunctionError(); }
        this.toastErrorMessageWithApiResponse(endpoints_returningError.response_error, error);
        return;
      })
      .then(() => {
        //      console.log('always executed')
      });
  }
}