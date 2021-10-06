import {personal_smp_template} from './config-process';
export const windowSettings={
  apicall:{
    samplesWhereFieldsName:'status not in*',
    samplesWhereFieldsValue:'REVIEWED',
    testingGroup:'FQ',
  },
  elementdefinition:{
    tableHdrFlds:[ 
      , {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, width:'5%'}
      , {name: 'test_id', label_en:'Test ID', label_es: 'ID Ensayo', sort:false, filter:true, width:'5%'}
      , {name: 'program_name', label_en:'Project', label_es: 'Programa', sort:false, filter:true, width:'10%'}
      , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:'7%'}
      , {name: 'analysis', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:'7%'}
      , {name: 'raw_value', label_en:'Value', label_es: 'Valor', sort:false, filter:true, width:'8%'}
      , {name: 'spec_eval_detail', label_en:'Spec Eval', label_es: 'Eval Espec', sort:false, filter:true, width:'19%'}
      , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true, width:'15%'}
      , {name: 'spec_code', label_en:'Spec', label_es: 'Especificación', sort:false, filter:true, width:'15%'}
    ],
    displayRefreshButton: true,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'FQ-Pending Review Testing', label_es:'FQ-Ensayos pendiente revisión'}
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
          "name": "REVIEWTEST",
          "label_en": "Analysis Review", "label_es": "Revisar Análisis",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
        {
          "name": "CANCELRESULT",
          "label_en": "Cancel", "label_es": "Cancelar",
          "type": "buttonzzz", // zzz para que no añada el elemento
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
      ],
      level2:{
        hasLevel2: false,
        label_en:'Open Tests', label_es:'Ver Ensayos',
        level1FldRoot:'child',
        isTable: true,
        tableHdrFlds:[    
          {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/proc-deploy/05images/', label_en:'', label_es: '',is_icon:false, sort:true, filter:true, min_width:'20%', width:'20%'},
        ]  
      },
      level3:{
        hasLevel3: false,
      label_en:'Open Results', label_es:'Ver Resultados',
        level1FldRoot:'child2',
        isTable: true,
        tableHdrFlds:[    
          {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/proc-deploy/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
        ]  
      },  
      displayRightMouseMenu: true,
      rightMouseButtons:[
        {
          "name": "REVIEWTEST",
          "label_en": "Analysis Review", "label_es": "Revisar Análisis",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
        {
          "name": "CANCELRESULT",
          "label_en": "Cancel", "label_es": "Cancelar",
          "type": "buttonzzz", // zzz para que no añada el elemento
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
      ],          
  }
};
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-reviewtestingfq-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-reviewtestingfq-style">
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