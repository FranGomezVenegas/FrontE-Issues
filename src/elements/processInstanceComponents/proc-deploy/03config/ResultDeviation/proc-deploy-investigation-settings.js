import {personal_smp_template} from '../config-process';

export const windowDefinition={
    sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
    samplesWhereFieldsName:'current_stage|sample_config_code not in*',
    samplesWhereFieldsValue:'MicroorganismIdentification|'+personal_smp_template,
    addSampleAnalysis: true,
    addSampleAnalysisFieldToRetrieve:'',
    addSampleAnalysisResult: true,
    addSampleAnalysisResultFieldToRetrieve:'',
    sampleFieldToSort:'sample_id desc',
    tableTitle:{
      display: true,
      label:{label_en:'Active Investigations', label_es:'Investigaciones abiertas'}
    },    
    tableHdrFlds:[
      , {name: 'id', label_en:'ID', label_es: 'ID', width:'12px', sort:false, filter:true, width:'5%'}
      , {name: 'description', label_en:'description', label_es: 'description', width:'20px', sort:false, filter:true, width:'15%'}
      , {name: 'created_on', label_en:'Creation', label_es: 'Creación', width:'30px', sort:false, filter:true, width:'10%'}
      , {name: 'external_system_name', label_en:'External System Name', label_es: 'Nombre Sistema Externo', width:'20px', sort:false, filter:true, width:'10%'}
      , {name: 'external_system_id', label_en:'External System Id', label_es: 'Id Sistema Externo', width:'20px', sort:false, filter:true, width:'5%'}
      , {name: 'capa_required', label_en:'capa_required', label_es: 'CAPA Necesario', width:'20px', sort:false, filter:true, width:'5%'}
      , {name: 'capa_external_system_name', label_en:'CAPA System', label_es: 'Sistema para CAPAs', width:'20px', sort:false, filter:true, width:'10%'}
      , {name: 'capa_external_system_id', label_en:'CAPA System Id', label_es: 'Id en Sistema CAPAs', width:'20px', sort:false, filter:true, width:'5%'}
    ],
    fieldsToDisplayTable2:[
      , {name: 'id', label_en:'ID', label_es: 'ID', width:'12px', sort:false, filter:true, width:'5%'}
      , {name: 'added_on', label_en:'Addition', label_es: 'Añadido', width:'30px', sort:false, filter:true, width:'10%'}
      , {name: 'object_type', label_en:'Type', label_es: 'Tipo', width:'20px', sort:false, filter:true, width:'10%'}
      , {name: 'object_id', label_en:'Id', label_es: 'Id', width:'20px', sort:false, filter:true, width:'5%'}
      , {name: 'notes', label_en:'Notes', label_es: 'Notas', width:'20px', sort:false, filter:true, width:'5%'}
    ],
    tableTitle2:{
      display: true,
      label:{label_en:'Investigation Objects', label_es:'Objetos de la Investigación'}
    },    
    displayRefreshButton: true,
    autorefreshWindow: false,

    displayButtons: true,
    buttons:[                
      {
        "name": "INVESTIGATION_TAKEN_DECISION",
        "label_en": "Decision", "label_es": "Decisión",
        "type": "button",
        "icon_name": "icons:next-week",
        "read_only": false,
      },               
      {
        "name": "CLOSE_INVESTIGATION",
        "label_en": "Close", "label_es": "Cerrar",
        "type": "button",
        "icon_name": "icons:next-week",
        "read_only": false,
      },               
    ]  
  };
const documentContainerProcDeploySampleMicroorganism = document.createElement('proc-deploy-investigation-style');
documentContainerProcDeploySampleMicroorganism.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleMicroorganism.innerHTML = `
  <dom-module id="proc-deploy-investigation-style">
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