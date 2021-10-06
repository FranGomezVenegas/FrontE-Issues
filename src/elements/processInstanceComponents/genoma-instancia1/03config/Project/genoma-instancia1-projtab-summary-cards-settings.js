export const programHome_sampleSummaryGaugeOptions={"width": 400, "height": 120, "redFrom": 90, "redTo": 100, "yellowFrom":75,
                                                    "yellowTo": 90, "minorTicks": 5};
export const programHome_sampleSummaryPieOptions={"title": "Samples Progress"};

export const programHome_lastResults_infoGrouped={
  'grouped':true,
}

export const windowDefinition={
  windowTitle:{label_en:'Manager for the project', label_es:'Página de gestión para el proyecto'},
    displayRefreshButton: true,
    autorefreshWindow: false,
    project_displayButtons: true,
    project_dialogButtons:[
      {
        "name": "PROJECT_NEW",
        "requires_selected_object":false,
        "label_en": "Create new project", "label_es": "Crear Proyecto",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "PROJECT_UPDATE",
        "label_en": "Update project info", "label_es": "Modificar información Proyecto",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "PROJECT_ACTIVATE",
        "label_en": "Activate project", "label_es": "Activar Proyecto",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "read_only": false,
      },  
      {
        "name": "PROJECT_DEACTIVATE",
        "label_en": "Deactivate project", "label_es": "Desactivar Proyecto",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "read_only": false,
      }, 
      {
        "name": "STUDY_NEW",
        "requires_selected_object":false,
        "label_en": "Create new study", "label_es": "Crear Estudio",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
    ], 
    study_displayButtons: true,
    study_dialogButtons:[
      {
        "name": "STUDY_UPDATE",
        "label_en": "Update study info", "label_es": "Modificar información Estudio",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "STUDY_ACTIVATE",
        "label_en": "Activate study", "label_es": "Activar Estudio",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "read_only": false,
      },  
      {
        "name": "STUDY_DEACTIVATE",
        "label_en": "Deactivate study", "label_es": "Desactivar Estudio",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "read_only": false,
      },  
    ],   
    study_card_elements:[
      {name:'STUDY_FAMILY'},
      {name:'STUDY_INDIVIDUAL'},
      {name:'STUDY_INDIVIDUAL_SAMPLE'},
    ], 
    study_family_displayButtons: true,
    study_family_dialogButtons:[
      {
        "name": "STUDY_CREATE_FAMILY",
        "requires_selected_object":false,
        "label_en": "Create new Family", "label_es": "Crear Familia",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "STUDY_FAMILY_ACTIVATE",
        "label_en": "Activate Family", "label_es": "Activar Familia",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "read_only": false,
      },  
      {
        "name": "STUDY_FAMILY_DEACTIVATE",
        "label_en": "Deactivate Family", "label_es": "Desactivar Familia",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "read_only": false,
      },  
      {
        "name": "STUDY_FAMILY_ADD_INDIVIDUAL",
        "label_en": "Add individual to family", "label_es": "Añadir invididuo a familia",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "STUDY_FAMILY_REMOVE_INDIVIDUAL",
        "label_en": "Remove Individual from Family", "label_es": "Quitar individuo de familia",
        "type": "icon-button",
        "icon_name": "icons:remove",
        "read_only": false,
      },  
    ],  
    study_individual_displayButtons: true,
    study_individual_dialogButtons:[
      {
        "name": "STUDY_CREATE_INDIVIDUAL",
        "requires_selected_object":false,
        "label_en": "Create new Individual", "label_es": "Crear Individuo",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "STUDY_INDIVIDUAL_ACTIVATE",
        "label_en": "Activate Individual", "label_es": "Activar Individuo",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "read_only": false,
      },  
      {
        "name": "STUDY_INDIVIDUAL_DEACTIVATE",
        "label_en": "Deactivate Individual", "label_es": "Desactivar Individuo",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "read_only": false,
      },  
    ],      
    study_individual_sample_displayButtons: true,
    study_individual_sample_dialogButtons:[
      {
        "name": "STUDY_CREATE_INDIVIDUAL_SAMPLE",
        "requires_selected_object":false,
        "label_en": "Create new Individual Sample", "label_es": "Crear Muestra de Individuo",
        "type": "icon-button",
        "icon_name": "icons:add-box",
        "read_only": false,
      },  
      {
        "name": "STUDY_INDIVIDUAL_SAMPLE_ACTIVATE",
        "label_en": "Activate Individual Sample", "label_es": "Activar Muestra de Individuo",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "read_only": false,
      },  
      {
        "name": "STUDY_INDIVIDUAL_SAMPLE_DEACTIVATE",
        "label_en": "Deactivate Individual Sample", "label_es": "Desactivar Muestra de Individuo",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "read_only": false,
      },  
    ],            
  charts:[
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

const documentContainerGenomaInstancia1ProjtabSummaryCardsStyle = document.createElement('genoma-instancia1-projtab-summary-cards-style');
documentContainerGenomaInstancia1ProjtabSummaryCardsStyle.setAttribute('style', 'display: none;');

documentContainerGenomaInstancia1ProjtabSummaryCardsStyle.innerHTML = `
  <dom-module id="genoma-instancia1-projtab-summary-cards-style">
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
      div.elementCard {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        /* background-image: url('./images/hexagon-white-blue-light.jpg'); 
        background-image: url('./images/fondo-blanco-hexagono-tecnologia-azul.jpg'); */
        background-repeat: no-repeat;
        background-size: cover;     
        background-color: #49cce633;             
        /* background-color: #fff; */
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      div.grid{
        display: grid;
        grid-template-columns: repeat(3, minmax(5rem, 1fr));
        grid-template-rows: 1;
        grid-gap: .1rem;
      }
      div.content{
        position:relative;
        z-index:1000;
      }
      .grid-item-occupied{
        padding: 1.5rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center; 
        position: relative; 
        user-select: none;          
      }        

    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerGenomaInstancia1ProjtabSummaryCardsStyle);