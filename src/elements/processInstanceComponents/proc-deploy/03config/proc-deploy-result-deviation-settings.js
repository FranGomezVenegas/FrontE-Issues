import {personal_smp_template} from './config-process';

export const sampleMicroorganism={
    sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
    samplesWhereFieldsName:'current_stage|sample_config_code not in*',
    samplesWhereFieldsValue:'MicroorganismIdentification|'+personal_smp_template,
    addSampleAnalysis: true,
    addSampleAnalysisFieldToRetrieve:'',
    addSampleAnalysisResult: true,
    addSampleAnalysisResultFieldToRetrieve:'',
    sampleFieldToSort:'sample_id desc',
    sampleFieldToDisplay:[
      , {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', width:'12px', sort:false, filter:true, width:'5%'}
      , {name: 'program_name', label_en:'Project', label_es: 'Programa', width:'20px', sort:false, filter:true, width:'15%'}
      , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', width:'30px', sort:false, filter:true, width:'10%'}
      , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', width:'20px', sort:false, filter:true, width:'10%'}
      , {name: 'raw_value', label_en:'Reading Result', label_es: 'Recuento', width:'20px', sort:false, filter:true, width:'5%'}
      , {name: 'microorganism_count', label_en:'# Organism Ident.', label_es: 'Num. MicroOrg. Detectados', width:'20px', sort:false, filter:true, width:'5%'}
      , {name: 'microorganism_list', label_en:'Microorganisms', label_es: 'Microorganismos', width:'20px', sort:false, filter:true, width:'50%'}
    ],
    displayRefreshButton: true,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'Samples Pending Microorganism Identification', label_es:'Muestras pendientes de la identificación de microorganismos'}
    },
    displayButtons: true,
    buttons:[          
      {
        "name": "SAMPLESTAGE_MOVETOPREVIOUS",
        "label_en": "Previous", "label_es": "Anterior",
        "type": "icon-button",
        "icon_name": "icons:assignment-return",
        "read_only": false,
      }, 
      {
        "name": "SAMPLESTAGE_MOVETONEXT",
        "label_en": "Next", "label_es": "Siguiente",
        "type": "icon-button",
        "icon_name": "icons:next-week",
        "read_only": false,
      },    
      {
        "name": "SAMPLE_AUDIT",
        "label_en": "Sample Audit", "label_es": "Auditoría",
        "type": "button",
        "icon_name": "icons:next-week",
        "read_only": false,
      },               
      {
        "name": "ADD_SAMPLE_MICROORGANISM",
        "label_en": "Add Microorganism", "label_es": "Añadir Microorganismo",
        "type": "icon-button",
        "icon_name": "icons:add-box", "icon_color": "aqua",
        "confirmuser_required": false,
        "esign_required": false,
        "read_only": false,
      },  
      {
        "name": "givenSampleAnalysisList",
        "label_en": "Sample Analysis", "label_es": "Análisis de la Muestra",
        "type": "zicon-button",
        "icon_name": "icons:description",
        "esign_required": false,
        "read_only": false,
      },  
      {
        "name": "givenSampleEnterResult",
        "label_en": "Enter Result", "label_es": "Entrar Resultado",
        "type": "zicon-button",
        "icon_name": "icons:receipt",
        "read_only": false,
      },	                                                                             
    ]  
  };
const documentContainerProcDeploySampleMicroorganism = document.createElement('proc-deploy-sample-microorganism-style');
documentContainerProcDeploySampleMicroorganism.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleMicroorganism.innerHTML = `
  <dom-module id="proc-deploy-sample-microorganism-style">
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
document.head.appendChild(documentContainerProcDeploySampleMicroorganism);