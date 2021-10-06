export const ADD_TAB = 'ADD_TAB';
export const ADD_SYSTEM_TAB = 'ADD_SYSTEM_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const DO_LOGOUT_TAB = 'DO_LOGOUT_TAB';


export function addSystemTab(tab) {
  //console.log('tab_actions.addTab', 'procedure', procedure);
  return {
    type: ADD_SYSTEM_TAB,
    tab: tab,
    tabName: tab.tabName,
    tabLabel_en: tab.tabLabel_en,
    tabLabel_es: tab.tabLabel_es,
    tabEsignRequired: tab.tabEsignRequired,
    tabConfirmUserRequired: tab.tabConfirmUserRequired,
    procedure: tab.procedure  
  }
}
export function addTab(tab) {
//  console.log('tab_actions.addTab', tab);
  return {
    type: ADD_TAB,
    tab,
    tabName: tab.tabName,
    tabLabel_en: tab.tabLabel_en,
    tabLabel_es: tab.tabLabel_es,
    tabEsignRequired: tab.tabEsignRequired,
    tabConfirmUserRequired: tab.tabConfirmUserRequired,
    procedure: tab.procedure
  }
}

export function closeTab(tabName) {
  return {
    type: CLOSE_TAB,
    tabName: tabName
  }
}
export function setCurrentTab(tabName) {
  return {
    type: SET_CURRENT_TAB,
    tabName,    
  }
}

export function doLogoutTab() {
  //console.log('DoLogout');
  return {
    type: DO_LOGOUT_TAB
  }
}  