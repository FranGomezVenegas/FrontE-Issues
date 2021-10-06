import {personal_smp_template} from './config-process';
export const windowSettings={
  apicall:{
    sampleFieldToRetrieve:'ALL',
    testingGroup:'FQ',
    // samplesWhereFieldsName:'status in-|sample_config_code not in*',
    // samplesWhereFieldsValue:'RECEIVED-INCOMPLETE-COMPLETE*String|'+personal_smp_template,
    // sampleFieldToSort:'sample_id desc',
    // addSampleAnalysis:'true',
    // addSampleAnalysisFieldToRetrieve:'method_name|testing_group',
    // sampleAnalysisWhereFieldsName:'testing_group',
    // sampleAnalysisWhereFieldsValue:'FQ*String',
    // addSampleAnalysisResult:'true',
    //addSampleAnalysisResultFieldToRetrieve:'method_name|testing_group',
    //sampleAnalysisResultWhereFieldsName:'testing_group',
    //sampleAnalysisResultWhereFieldsValue:'FQ*String',
    //sampleLastLevel:'TEST',
  },
  elementdefinition:{  
    tableHdrFlds:[ 
      , {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, width:'7%'}
      , {name: 'testing_group', label_en:'testing_group', label_es: 'testing_group', sort:false, filter:true, width:'7%'}
      , {name: 'program_name', label_en:'Project', label_es: 'Programa', sort:false, filter:true, width:'9%'}
      , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:'7%'}
    ],
    level2:{
      hasLevel2: false,
      label_en:'Open Tests', label_es:'Ver Ensayos',
      level1FldRoot:'child',
      isTable: true,
      tableHdrFlds:[    
        {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/proc-deploy/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
      ]  
    },
    level3:{
      hasLevel3: true,
      level1FldRoot:'child2',
      isTable: true,
      tableHdrFlds:[    
        {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/proc-deploy/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
      ]  
      },  
      displayRefreshButton: true,
      autorefreshWindow: false,
      tableTitle:{
      display: true,
      label:{label_en:'FQ-Testing Group Pending Review', label_es:'FQ-Grupos Analíticos pendientes revisión'}
    },
    displayButtons: true,
    buttons:[
        {
          "name": "SAMPLE_AUDIT",
          "label_en": "Sample Audit", "label_es": "Auditoría",
          "type": "button",
          "icon_name": "icons:next-week",
          "read_only": false,
          "confirmuser_required": false,
          "esign_required": false,    
        },   
        {
          "name": "REVIEWSAMPLE_TESTINGGROUP",
          "label_en": "Review Group", "label_es": "Revisar Grupo",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	                    
      ],    displayRightMouseMenu: true,
      rightMouseButtons:[
        {
          "name": "SAMPLE_AUDIT",
          "label_en": "Sample Audit", "label_es": "Auditoría",
          "type": "button",
          "icon_name": "icons:next-week",
          "read_only": false,
          "confirmuser_required": false,
          "esign_required": false,    
        },   
        {
          "name": "REVIEWSAMPLE_TESTINGGROUP",
          "label_en": "Review Group", "label_es": "Revisar Grupo",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	                    
  
      ],
 }      
};
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-reviewsampletestinggroupfq-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-reviewsampletestinggroupfq-style">
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