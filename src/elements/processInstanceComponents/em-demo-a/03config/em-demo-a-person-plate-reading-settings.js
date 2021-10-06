
import {personal_smp_template} from './config-process';

export const personPlateReading={
    sampleFieldToRetrieve:'sample_id|program_name|location_name|current_stage|status|sampling_date|sampling_comment|incubation_batch|incubation_incubator|incubation_start|incubation_end|incubation2_batch|incubation2_incubator|incubation2_start|incubation2_end|sample_config_code',
    samplesWhereFieldsName:'current_stage|sample_config_code in*',
    samplesWhereFieldsValue:'PlateReading|'+personal_smp_template,
    addSampleAnalysis: true,
    addSampleAnalysisFieldToRetrieve:'',
    addSampleAnalysisResult: true,
    addSampleAnalysisResultFieldToRetrieve:'',
    sampleFieldToSort:'sample_id desc',
    tableHdrFlds:[
      {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, width:'5%'},
      , {name: 'status', label_en:'Status', label_es: 'Estado', sort:false, filter:true, width:'5%', is_icon:true},
      , {name: 'program_name', label_en:'Project', label_es: 'Programa', width:'20px', sort:false, filter:true, width:'6%'}
      , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', width:'30px', sort:false, filter:true, width:'6%'}
      , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true, width:'6%' }
      , {name: 'incubation_batch', label_en:'Batch incub 1', label_es: 'Tanda 1a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation_incubator', label_en:'Incubator incub 1', label_es: 'Incubadora 1a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation_start', label_en:'incubation 1 start', label_es: 'Inicio 1a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation_end', label_en:'incubation 1 end', label_es: 'Fin 1a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation2_batch', label_en:'Batch incub 2', label_es: 'Tanda 2a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation2_incubator', label_en:'Incubator incub 2', label_es: 'Incubadora 2a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation2_start', label_en:'incubation 2 start', label_es: 'Inicio 2a Incubacion', sort:false, filter:true, width:'6%'}
      , {name: 'incubation2_end', label_en:'incubation 2 end', label_es: 'Fin 2a Incubacion', sort:false, filter:true, width:'6%'}],  
    displayRefreshButton: true,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'Personnel  Samples Pending Plate Reading', label_es:'Muestras de personal pendientes de la lectura de placa'}
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
      // {
      //   "name": "givenSampleAnalysisList",
      //   "label_en": "Sample Analysis", "label_es": "Análisis de la Muestra",
      //   "type": "icon-button",
      //   "icon_name": "icons:description",
      //   "esign_required": false,
      //   "read_only": false,
      // },  
      {
        "name": "addSampleAnalysis",
        "label_en": "Add Analysis", "label_es": "Añadir Análisis",
        "type": "zicon-button",
        "icon_name": "icons:add-box", "icon_color": "aqua",
        "confirmuser_required": false,
        "esign_required": false,
        "read_only": false,
      },  
      {
        "name": "givenSampleEnterResult",
        "label_en": "Enter Result", "label_es": "Entrar Resultado",
        "type": "icon-button",
        "icon_name": "icons:receipt",
        "read_only": false,
      },
    ]  
  };
const documentContainerEmDemoAPersonPlateReadingStyle = document.createElement('em-demo-a-person-plate-reading-style');
documentContainerEmDemoAPersonPlateReadingStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoAPersonPlateReadingStyle.innerHTML = `
  <dom-module id="em-demo-a-person-plate-reading-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
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
        display: flex;
        align-items: center;      
      } 
      </style>
    </tempPerson  </dom-module>`;
document.head.appendChild(documentContainerEmDemoAPersonPlateReadingStyle);