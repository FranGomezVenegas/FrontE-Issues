// For ADD_SYSTEM_TAB, two things required, example below:
// In app_config:
// export const pendingSOPTab={
//   lp_frontend_page_name: 'sop/my-pending-sops.js',        
//   tabName: 'sop-myPendingSops',
//   tabLabel_en: 'My Pending SOPs',
//   tabLabel_es: 'Mis PNT Pendientes',
//   procedure:'sop',
//   tabEsignRequired: false, tabConfirmUserRequired: false
// }
// in app-center-tabs
// <my-pending-sops tab-index="{{tabIndex}}" name="sop-myPendingSops"> </my-pending-sops>

import { ADD_TAB, ADD_SYSTEM_TAB, CLOSE_TAB, SET_CURRENT_TAB, DO_LOGOUT_TAB, addSystemTab } from '../actions/tabs_actions.js';
import { systemTabContentUrl, tabContentUrl } from '../../../../config/platform/logic/api-config';

const InitialTabState = {
  tabs: [],
  tabIndex: 0,
  currentTabName: '',
  currentTab: [],
  currentTabProcedure: [],
  currentTabSops: [],
};

const eventExists = (tabs, tab) => {
  return tabs.find((e) => e.tabName === tab.tabName);
}

const tabsReducer = (state = InitialTabState, action) => {
  let foundTabInfo = [];
  switch (action.type) {
    case ADD_SYSTEM_TAB:
      // var tabUrl = systemTabContentUrl;
      // tabUrl = tabUrl + action.tab.lp_frontend_page_name;
      // console.log(action.tab.lp_frontend_page_name)
      var found = state.tabs.find(function (tab) {
        return tab.tabName == action.tab.tabName;
      });
      if (found == undefined) {
        return {
          ...state,
          tabIndex: state.tabIndex + 1,
          tabs: [
            ...state.tabs,
            action.tab
          ],
          currentTab: action.tab,
          currentTabName: action.tab.tabName,
          currentTabSops: action.tab.currentTabSops,
          currentTabProcedure: action.tab.currentTabProcedure,
        }
      } else {
        return {
          ...state,
          currentTab: action.tab,
          currentTabName: action.tab.tabName,
          currentTabSops: action.tab.currentTabSops,
          currentTabProcedure: action.tab.currentTabProcedure,
        }
      }
    case ADD_TAB:
      var found = state.tabs.find(function (tab) {
        return tab.tabName == action.tab.tabName;
      });
      if (found == undefined) {
        return {
          ...state,
          tabIndex: state.tabIndex + 1,
          tabs: [
            ...state.tabs,
            action.tab
          ],
          tabIndex: tabPosic,
          currentTab: action.tab,
          currentTabName: action.tab.tabName,
          currentTabSops: action.tab.currentTabSops,
          currentTabProcedure: action.tab.currentTabProcedure,
        }
      } else {
        return {
          ...state,
          currentTab: found,
          currentTabName: found.tabName,
          currentTabSops: found.currentTabSops,
          currentTabProcedure: found.currentTabProcedure,

        }
      }
    case CLOSE_TAB:
      let tabI;
      if (state.tabs.length <= 1) {
        foundTabInfo = '';
        action.tabName = '';
        return {
          tabIndex: 0,
          currentTab: '',
          currentTabName: '',
          currentTabSops: '',
          currentTabProcedure: '',
          tabs: [],
        }
      } else {
        foundTabInfo = state.tabs.find(function (tab) {
          if (tab.tabName == action.tabName) { return tab; }
        });
        if (foundTabInfo == undefined) {
          return {
            ...state,
          }
        } else {
          var tabPosic = state.tabs.indexOf(foundTabInfo);
          if (tabPosic == 0 && state.tabs.length == 1) {
            return {
              tabIndex: 0,
              currentTab: '',
              currentTabName: '',
              currentTabSops: '',
              currentTabProcedure: '',
              tabs: [],
            }
          }
          var previousTabPosic = 0;
          if (tabPosic > 0) { previousTabPosic = tabPosic - 1; }
          return {
            ...state,
            tabIndex: tabPosic,
            currentTab: state.tabs[previousTabPosic],
            currentTabName: state.tabs[previousTabPosic].tabName,
            currentTabSops: state.tabs[previousTabPosic].currentTabSops,
            currentTabProcedure: state.tabs[previousTabPosic].currentTabProcedure,
            tabs: state.tabs.filter((tab) => {
              return (tab.tabName != foundTabInfo.tabName);
            })
          }
        }
      }
    case SET_CURRENT_TAB:
      foundTabInfo = state.tabs.find(function (tab) {
        if (tab.tabName == action.tabName) { return tab; }
      });
      console.log('SET CURRENT TAB', 'tab', tab, 'foundTabInfo', foundTabInfo);
      if (foundTabInfo == undefined) {
        return {
          ...state,
        }
      } else {
        var tabPosic = state.tabs.indexOf(foundTabInfo);
        return {
          ...state,
          tabIndex: tabPosic,
          currentTab: foundTabInfo,
          currentTabName: foundTabInfo.tabName,
          currentTabSops: foundTabInfo.currentTabSops,
          currentTabProcedure: foundTabInfo.currentTabProcedure,
        }
      }
    case DO_LOGOUT_TAB:
      return {
        tabs: [],
        tabIndex: 0,
        currentTab: [],
        currentTabName: '',
        currentTabProcedure: [],
        currentTabSops: [],
      }
    default:
      return state;
  }
}
export default tabsReducer;