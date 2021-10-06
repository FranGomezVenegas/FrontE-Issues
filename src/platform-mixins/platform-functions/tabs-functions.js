import {store} from '../../store';
import {userSessionMixin} from '../store/user-session-mixin';
import {ApiPlatform} from '../apis/api-platform';
import {tokenMixin} from '../store/token-mixin';
import { addSystemTab, addTab, setCurrentTab } from  '../../elements/platformComponents/Redux/actions/tabs_actions';
export const TabsMethods = (superClass) => class extends tokenMixin(ApiPlatform(userSessionMixin(superClass))) {

  isThisTabOpen(tabName){
    var state=store.getState();  
    var tabsList=state.tabs.tabs;
    var isOpen = tabsList.find(function(curTab) {
      return tabName == curTab.tabName;
    });  
    if (!isOpen) return false;
    return true;
  }

  saveDefaultTabsOnLogin(){
    var state=store.getState();  
    var tabsInfo=state.tabs.tabs;
    var tabsString='';
    var i;
    for (i = 0; i < tabsInfo.length; i++) { 
      tabsString=tabsString+'lp_frontend_page_name:'+tabsInfo[i].lp_frontend_page_name+'*';
      tabsString=tabsString+'tabName:'+tabsInfo[i].tabName+'*';
      tabsString=tabsString+'tabLabel_en:'+tabsInfo[i].tabLabel_en+'*';
      tabsString=tabsString+'tabLabel_es:'+tabsInfo[i].tabLabel_es+'*';  
      if (tabsInfo[i].systemTab!=undefined && tabsInfo[i].systemTab){
        tabsString=tabsString+'tabType:'+'systab'+'*';
      }else{
        if (tabsInfo[i].procedure){
          tabsString=tabsString+'procedure:'+tabsInfo[i].procedure.name+'*';}
        tabsString=tabsString+'tabType:'+'tab'+'*';
      }
      tabsString=tabsString+'tabEsignRequired:'+tabsInfo[i].tabEsignRequired+'*';
      tabsString=tabsString+'tabConfirmUserRequired:'+tabsInfo[i].tabConfirmUserRequired;
      if (i+1<tabsInfo.length){tabsString=tabsString+'|'}
    }
    var data={};
    var paramsUrl="finalToken="+this.getFinalToken()+"&actionName=SET_DEFAULT_TABS_ON_LOGIN";
    paramsUrl=paramsUrl+"&tabsString="+tabsString;
    data.actionName='SET_DEFAULT_TABS_ON_LOGIN';
    data.paramsUrl=paramsUrl;
    this.appBackEndCallAPI(data);
  }

  openTabsOnLogin(){   
    var tabsInfo=this.getStoreTabs();
//    console.log('tabsInfo', tabsInfo);
    if (!tabsInfo) {return;}
    var i;
    for (i = 0; i < tabsInfo.length; i++) { 
      if (!tabsInfo[0].tabName){return;}
      var curTab={
        lp_frontend_page_name: tabsInfo[i].lp_frontend_page_name,
        tabName: tabsInfo[i].tabName,
        tabLabel_en: tabsInfo[i].tabLabel_en, tabLabel_es: tabsInfo[i].tabLabel_es,
        procedure: tabsInfo[i].procedure, tabEsignRequired: tabsInfo[i].tabEsignRequired, tabConfirmUserRequired: tabsInfo[i].tabConfirmUserRequired
      };
      if (tabsInfo[i].tabType=='systab'){
        curTab.procedure=tabsInfo[i].procedure;
          store.dispatch(addSystemTab(curTab));
      }else{
        var procObj = {"name": tabsInfo[i].procedure};
        curTab.procedure=procObj;
        store.dispatch(addTab(curTab));
      }
    }
    store.dispatch(setCurrentTab(curTab));    
  }    
}
