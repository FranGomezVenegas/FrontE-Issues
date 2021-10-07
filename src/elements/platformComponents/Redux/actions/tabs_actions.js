export const ADD_TAB = 'ADD_TAB';
export const ADD_SYSTEM_TAB = 'ADD_SYSTEM_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';
export const DO_LOGOUT_TAB = 'DO_LOGOUT_TAB';


export function addSystemTab(tab) {
  switch (tab.lp_frontend_page_name) {
    case 'session-notifications':
      import('../../Tabs/Notifications/session-notifications.js');
      break;
    case 'my-pending-sops':
      import('../../Tabs/SOP/MyPendingSOPs/my-pending-sops.js');
      break;
    case 'my-sops':
      import('../../Tabs/SOP/MySOPs/my-sops.js');
      break;
    case 'incident-management':
      import('../../Tabs/Incidents/incident-management.js');
      break;
    case 'user-profile':
      import('../../Tabs/User/user-profile/user-profile.js');
      break;
    case 'videotutorial-tab':
      import('../../Tabs/VideoTutorial/videotutorial-tab.js');
      break;
    case 'procedure-management':
      import('../../ProceduresManagement/04procedure/procedure-management.js');
      break;
    default:
      import('../../Tabs/SOP/MySOPs/my-sops.js');
  }

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
  switch (tab.tabName) {
    case 'em-demo-a-home':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-home.js');
      break;
    case 'em-demo-a-programs':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-programs.js');
      break;
    case 'em-demo-a-sample-login':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-sample-login.js');
      break;
    case 'em-demo-a-sample-sampling':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-sample-sampling.js');
      break;
    case 'em-demo-a-sample-incub-batch':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-sample-incub-batch.js');
      break;
    case 'em-demo-a-sample-plate-reading':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-sample-plate-reading.js');
      break;
    case 'em-demo-a-sample-microorganism':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-sample-microorganism.js');
      break;
    case 'em-demo-a-production-lot':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-production-lot.js');
      break;
    case 'em-demo-a-person-sampling':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-person-sampling.js');
      break;
    case 'em-demo-a-person-plate-reading':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-person-plate-reading.js');
      break;
    case 'em-demo-a-person-microorganism':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-person-microorganism.js');
      break;
    case 'em-demo-a-browser':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-browser.js');
      break;
    case 'em-demo-a-result-deviation':
      import('../../../processInstanceComponents/em-demo-a/04procedure/em-demo-a-result-deviation.js');
      break;
    case 'proc-deploy-home':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-home.js');
      break;
    case 'proc-deploy-sample-login':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-login.js');
      break;
    case 'proc-deploy-sample-sampling':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-sampling.js');
      break;
    case 'proc-deploy-sample-fq':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-fq.js');
      break;
    case 'proc-deploy-sample-mb':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-mb.js');
      break;
    case 'proc-deploy-sample-reviewtestingfq':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-reviewtestingfq.js');
      break;
    case 'proc-deploy-sample-reviewtestingmb':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-reviewtestingmb.js');
      break;
    case 'proc-deploy-sample-reviewsampletestinggroupfq':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-reviewsampletestinggroupfq.js');
      break;
    case 'proc-deploy-sample-reviewsampletestinggroupmb':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-reviewsampletestinggroupmb.js');
      break;
    case 'proc-deploy-sample-reviewsample':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-sample-reviewsample.js');
      break;
    case 'proc-deploy-programs':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-programs.js');
      break;
    case 'proc-deploy-browser':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-browser.js');
      break;
    case 'proc-deploy-result-deviation':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-result-deviation.js');
      break;
    case 'proc-deploy-production-lot':
      import('../../../processInstanceComponents/proc-deploy/04procedure/proc-deploy-production-lot.js');
      break;
    case 'genoma-instancia1-home':
      import('../../../processInstanceComponents/genoma-instancia1/04procedure/genoma-instancia1-home.js');
      break;
    case 'genoma-instancia1-project':
      import('../../../processInstanceComponents/genoma-instancia1/04procedure/genoma-instancia1-project.js');
      break;
    default:
      import('../../../processInstanceComponents/genoma-instancia1/04procedure/genoma-instancia1-project.js');
  }

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