import {personal_smp_template} from './config-process';
import {windowSettings as windowSettings_fq} from './proc-deploy-sample-fq-settings';
export const windowSettings={
  apicall:{
    sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
    samplesWhereFieldsName:'status in-|sample_config_code not in*|sampling_date is not null',
    samplesWhereFieldsValue:'RECEIVED-INCOMPLETE-COMPLETE*String|'+personal_smp_template+'|-',
    sampleFieldToSort:'sample_id desc',
    addSampleAnalysis:'false',
    addSampleAnalysisFieldToRetrieve:'method_name|testing_group',
    sampleAnalysisWhereFieldsName:'testing_group|status not in',
    sampleAnalysisWhereFieldsValue:'MB*String|REVIEWED*String',
    addSampleAnalysisResult:'false',
  },
  elementdefinition:{
    tableTitle:{
      display: true,
      label:{label_en:'Samples Pending Micro Testing', label_es:'Muestras pendientes de testeo Microbiológico'}
    },
    tableHdrFlds:windowSettings_fq.elementdefinition.tableHdrFlds,
    level2:windowSettings_fq.elementdefinition.level2,
    level3:windowSettings_fq.elementdefinition.level3,
    displayRightMouseMenu: windowSettings_fq.elementdefinition.displayRightMouseMenu,
    rightMouseButtons:windowSettings_fq.elementdefinition.rightMouseButtons,    
    displayRefreshButton:windowSettings_fq.elementdefinition.displayRefreshButton,
    autorefreshWindow:windowSettings_fq.elementdefinition.autorefreshWindow,
    displayButtons:windowSettings_fq.elementdefinition.displayButtons,
    buttons:windowSettings_fq.elementdefinition.buttons,
  }
};
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-mb-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-mb-style">
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
