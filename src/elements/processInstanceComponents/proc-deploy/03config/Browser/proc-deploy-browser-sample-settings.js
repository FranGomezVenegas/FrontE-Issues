import {schema_name} from '../config-process';

export const windowContent={
  fields:[{
    "name": "SampleId",
    "label_en": "Sample", "label_es": "Muestra",
    "type": "text",
    "password": "false",
    "value": "154",
    "read_only": false
    },    
    {
    "name": "RunReport",
    "label_en": "Report", "label_es": "Informe",
    "type": "button",              
    "value": "",
    "read_only": false
    }],
    goToStageTabButton:{
      "name": "buttonAccess",
      "label_en": "Go", "label_es": "Ir",
      "type": "button",              
      "value": "",
      "read_only": false
    }
};
export const browserSampleFields={
  schemaName: 'data',
  sampleSettings:{
    tableName:'sample',
    fieldToRetrieve:'ALL',
    fieldsToDisplay:['current_stage', 'program_name', 'location_name', 'product_lot', 'shift'],
  },
  testingGroupSettings:{
    tableName:'sample_revision_testing_group',
    fieldToRetrieve:'ALL',
    fieldsToDisplay:['testing_group', 'ready_for_revision', 'reviewed', 'revision_on', 'revision_by'],
  },
  testSettings:{
    tableName:'sample_analysis',
    fieldToRetrieve:'ALL',
    fieldsToDisplay:['test_id', 'analysis', 'method_name', 'method_version', 'added_on', 'status', 'reviewer'],
  },
  resultSettings:{
    tableName:'sample_analysis_result',
    fieldToRetrieve:'ALL',
    fieldsToDisplay:['result_id', 'param_name', 'param_type', 'mandatory', 'status', 'raw_value', 'entered_on', 'spec_eval', 'spec_eval_detail'],
  },
};

const documentContainerProcDeployBrowserSampleStyle = document.createElement('proc-deploy-browser-sample-style');
documentContainerProcDeployBrowserSampleStyle.setAttribute('style', 'display: none;');

documentContainerProcDeployBrowserSampleStyle.innerHTML = `
  <dom-module id="proc-deploy-browser-sample-style">
    <template>
    <style>
    div.mainDiv{
      width:50%;
      position:relative;
      left:55px;
      border-radius: 10px;
      -moz-border-radius: 10px;
      padding:5px;
    }   
    div.filter{
      width:780px;
      border: 1px solid;
      border-color: #dbd9ca;
      border-radius: 10px;
      -moz-border-radius: 10px;
      margin:5px;
      padding:5px;
    }
    div.detailMain{
      width:780px;
      border: 1px solid;
      border-color: #dbd9ca;
      border-radius: 10px;
      -moz-border-radius: 10px;
      margin:5px;
      margin-top:20px;
      padding:5px;
    }  
    div.detailDataSection {      
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-image: url('./images/hexagon-white-blue-light.jpg');
      background-repeat: no-repeat;
      background-size: cover;                  
      background-color: #fff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
    div.testingGroup {  
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-image: url('./images/hexagon-white-blue-light.jpg');
      background-repeat: no-repeat;
      background-size: cover;                  
      background-color: #fff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
    div.testingGroupInfoForm{
      display: grid;    
    }
    div.fieldInfo{
      display:inline-grid;
      font-size:1.8vmax;
    }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerProcDeployBrowserSampleStyle);