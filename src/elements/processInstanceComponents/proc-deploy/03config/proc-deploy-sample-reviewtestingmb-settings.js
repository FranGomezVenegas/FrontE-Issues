import {personal_smp_template} from './config-process';
import {windowSettings as windowSettingsFQ} from './proc-deploy-sample-reviewtestingfq-settings';
export const windowSettings={
  apicall:{ 
    samplesWhereFieldsName:'status not in*',
    samplesWhereFieldsValue:'REVIEWED',
    testingGroup:'MB',
  },
  elementdefinition:{
    tableTitle:{
      display: true,
      label:{label_en:'MB-Pending Review Testing', label_es:'MB-Ensayos pendiente revisión'}
    },
    tableHdrFlds:windowSettingsFQ.elementdefinition.tableHdrFlds,
    displayRefreshButton:windowSettingsFQ.elementdefinition.displayRefreshButton,
    autorefreshWindow:windowSettingsFQ.elementdefinition.autorefreshWindow,
    displayRightMouseMenu: windowSettingsFQ.elementdefinition.displayRightMouseMenu,
    rightMouseButtons:windowSettingsFQ.elementdefinition.rightMouseButtons,    
    displayButtons:windowSettingsFQ.elementdefinition.displayButtons,
    buttons:windowSettingsFQ.elementdefinition.buttons,
  }
};  
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-reviewtestingmb-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-reviewtestingmb-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
        background-color: #ffffff5c;
      }
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:3vw;
      }         
      div.main{
        width:95%;
      }     
      div.buttonGroup {
        display: flex
      }      
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerProcDeploySampleSamplingStyle);