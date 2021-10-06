export const programHome_sampleSummaryGaugeOptions={"width": 400, "height": 120, "redFrom": 90, "redTo": 100, "yellowFrom":75,
                                                    "yellowTo": 90, "minorTicks": 5};
export const programHome_sampleSummaryPieOptions={"title": "Samples Progress"};

export const programHome_lastResults_infoGrouped={
  'grouped':true,
}

export const windowDefinition={
  tableTitle:{
    display:true,
    label:{label_en:'All Study variables and values', label_es:'Todas las variables y valores del estudio'}
  },
  displayRefreshButton:true,
  displayButtons: false,
  buttons:[          
    {
      "name": "STUDY_CREATE_SAMPLES_SET",
      "requires_selected_object":false,
      "label_en": "Create new project", "label_es": "Crear Proyecto",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },  
    {
      "name": "STUDY_SAMPLES_SET_ACTIVATE",
      "label_en": "Activate project", "label_es": "Activar Proyecto",
      "type": "icon-button",
      "icon_name": "icons:alarm-add",
      "read_only": false,
    },  
    {
      "name": "STUDY_SAMPLES_SET_DEACTIVATE",
      "label_en": "Deactivate project", "label_es": "Desactivar Proyecto",
      "type": "icon-button",
      "icon_name": "alarm-off",
      "read_only": false,
    }, 
    {
      "name": "STUDY_SAMPLES_SET_ADD_SAMPLE",
      "label_en": "Add individual", "label_es": "Añadir invididuo",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },  
    {
      "name": "STUDY_SAMPLES_SET_REMOVE_SAMPLE",
      "label_en": "Remove Individual", "label_es": "Quitar individuo",
      "type": "icon-button",
      "icon_name": "icons:remove",
      "read_only": false,
    },                 
  ],
  tableHdrFlds:[
    {name: 'id', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'value', label_en:'Value', label_es: 'Valor', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'variable_set', label_en:'Var Set', label_es: 'Conjunto', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'owner_table', label_en:'Owner', label_es: 'Dueño', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'owner_id', label_en:'Owner Id', label_es: 'Id Dueño', sort:false, filter:true, is_icon:false, width:"20%"},    
    {name: 'sample', label_en:'Sample', label_es: 'Muestra', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'individual', label_en:'Individual', label_es: 'Individuo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'family', label_en:'Family', label_es: 'Familia', sort:true, filter:false, is_icon:false, width:"20%"},    
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'id', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'owner_table', label_en:'Owner', label_es: 'Dueño', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'value', label_en:'Value', label_es: 'Valor', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  },  
  zcharts:[
    {
      display_chart: true,
      chart_type:'pie',
      chart_name:'samples_summary_by_stage',
      chart_title:{label_en:'In-Progress Sample Percentage ', label_es:'Porcentaje en Muestras En-Progreso'},
      counter_field_name:'COUNTER',
      counterLimits:{
        // min_allowed: 3,
        // min_allowed_included:3,
        // max_allowed:100,
        // max_allowed_included:100,
        // value:0,
      },
      grouper_field_name:'current_stage',
      grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
      label_item:{label_en:'Statussss', label_es:'Estado'},
      label_value:{label_en:'#', label_es:'#'},
    },
  ],
};
//import {personal_smp_template} from './config-process';

// export const shifts=[
//   {keyName:"M1", keyValue_en:"M1", keyValue_es:"M1"},
//   {keyName:"M2", keyValue_en:"M2", keyValue_es:"M2"}
// ];
// export const progTabPoints={
//     //sampleFieldToRetrieve:'sample_id|current_stage|status|status_previous|sampling_date|sampling_comment|sample_config_code|program_name|location_name|spec_code|spec_variation_name',
//     //samplesWhereFieldsName:'current_stage|sample_config_code not in*',
//     //samplesWhereFieldsValue:'Sampling|'+personal_smp_template,
//     //sampleFieldToSort:'sample_id desc',
//     fieldToDisplay:[
//       {name: 'area', label_en:'Area', label_es: 'Area', sort:false, filter:true, is_icon:true, width:"20%"}
//       , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:"20%"}
//       , {name: 'spec_code', label_en:'Spec', label_es: 'Especificación', sort:false, filter:true, width:"20%"}
//       , {name: 'spec_variation_name', label_en:'Variation', label_es: 'Variación', sort:false, filter:true, width:"20%"}
//       , {name: 'spec_analysis_variation', label_en:'Analysis Variation', label_es: 'Análisis de Variación', sort:false, filter:true, width:"20%"}
//       , {name: 'person_ana_definition', label_en:'Person Sampling Areas', label_es: 'Areas a analizar de Personal', sort:false, filter:true, width:"40%"}
//     ],  
//     displayRefreshButton: true,
//     autorefreshWindow: false,
//     tableTitle:{
//       display: true,
//       label:{label_en:'Program Active Corrective Actions', label_es:'Acciones correctivas aún activas del programa'}
//     },
//     displayButtons: true,
//     dialogButtons:[
//       {
//         "name": "logSample",
//         "label_en": "Log Sample", "label_es": "Registrar Muestra",
//         "type": "button",
//         "read_only": false,
//       },  
//       {
//         "name": "shift",
//         "label_en": "Shift", "label_es": "Turno",
//         "type": "list",
//         "dbType": "String",
//         "value": '',
//         "read_only": false,
//         "items" : ""//this.systemShifts
//       },
//       {
//         "name": "production_lot",
//         "label_en": "Lot", "label_es": "Lote",
//         "type": "list",
//         "dbType": "String",
//         "value": "",
//         "read_only": false,
//         "items" : ""//this.productionLotsList
//       }          
//     ]    
//   };

const documentContainerGenomaInstancia1ProjtabStudyVariablevaluesStyle = document.createElement('genoma-instancia1-projtab-study-variablevalues-style');
documentContainerGenomaInstancia1ProjtabStudyVariablevaluesStyle.setAttribute('style', 'display: none;');

documentContainerGenomaInstancia1ProjtabStudyVariablevaluesStyle.innerHTML = `
  <dom-module id="genoma-instancia1-projtab-study-variablevalues-style">
    <template>
    <style>
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:6vmin;
      }  
      p.chartTitle{       
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:20px;
      }  
      div.main{
        width:95%;
      }
      div.buttonGroup{
        display:flex;
      }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerGenomaInstancia1ProjtabStudyVariablevaluesStyle);