import {personal_smp_template} from './config-process';
export const windowSettings={
    apicall:{
      sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
      samplesWhereFieldsName:'status in-|sample_config_code not in*|sampling_date is not null',
      samplesWhereFieldsValue:'RECEIVED-INCOMPLETE-COMPLETE*String|'+personal_smp_template+'|-',
      sampleFieldToSort:'sample_id desc',
      addSampleAnalysis:'true',
      addSampleAnalysisFieldToRetrieve:'method_name|testing_group',
      sampleAnalysisWhereFieldsName:'testing_group|status not in',
      sampleAnalysisWhereFieldsValue:'FQ*String|REVIEWED*String',
      addSampleAnalysisResult:'true',
      //addSampleAnalysisResultFieldToRetrieve:'method_name|testing_group',
      //sampleAnalysisResultWhereFieldsName:'testing_group',
      //sampleAnalysisResultWhereFieldsValue:'FQ*String',
      //sampleLastLevel:'TEST',
    },
    elementdefinition:{
      tableHdrFlds:[ 
        {name: 'status', is_icon:true, iconMethod:'getSampleStatusIcon', iconsPath:'./src/elements/processInstanceComponents/proc-deploy/05images/Samples/', label_en:'Status', label_es: 'Estado', sort:true, filter:false, width:'4%'},
        {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:true, filter:true, width:'7%'},
        {name: 'program_name', label_en:'Project', label_es: 'Programa', sort:true, filter:true, width:'7%'},
        {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:true, filter:true, width:'7%'},
        {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:true, filter:true, width:'9%'},
        {name: 'spec_code', label_en:'Spec', label_es: 'Especificación', sort:true, filter:true, width:'9%'},
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
      tableTitle:{
        display: true,
        label:{label_en:'FQ-Testing Pending Results', label_es:'FQ-Ensayos pendientes entrar resultados'}
      },
      displayRefreshButton: true,
      autorefreshWindow: false,
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
          "name": "givenSampleEnterResult",
          "label_en": "Enter Result", "label_es": "Entrar Resultado",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
      ],    
      displayRightMouseMenu: true,
      rightMouseButtons:[
        {
          "name": "givenSampleEnterResult",
          "label_en": "Enter Result", "label_es": "Entrar Resultado",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
      ],
        
    }
  };
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-fq-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-fq-style">
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