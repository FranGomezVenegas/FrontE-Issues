//import {personal_smp_template} from './config-process';
export const programProgConfigCalendar_progConfigCalendarTableHeaderFields=[
  {name: 'program_day_date', label_en:'Date', label_es: 'Fecha', sort:false, filter:true, is_icon:false, width:"20%"}
, {name: 'area', label_en:'Area', label_es: 'Area', sort:false, filter:true, is_icon:false, width:"20%"}
, {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:"20%"}
//, {name: 'spec_code', label_en:'Spec', label_es: 'Especificación', sort:false, filter:true, width:"20%"}
, {name: 'spec_variation_name', label_en:'Variation', label_es: 'Variación', sort:false, filter:true, width:"20%"}
, {name: 'spec_analysis_variation', label_en:'Analysis Variation', label_es: 'Análisis de Variación', sort:false, filter:true, width:"20%"}
];
import {shifts} from '../../03config/config-process';
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

const documentContainerEmDemoAProgtabCalendarStyle = document.createElement('em-demo-a-progtab-calendar-style');
documentContainerEmDemoAProgtabCalendarStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoAProgtabCalendarStyle.innerHTML = `
  <dom-module id="em-demo-a-progtab-calendar-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
      }      
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:6vmin;
      }         
      div.main{
        width:95%;
      }     
      div.buttonGroup {
        display: flex;
        align-items: center;      
      } 
      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoAProgtabCalendarStyle);