import {schema_name} from '../config-process';
export const programHome_defaultTab = schema_name+"-pending-decision";

export const em_deviation_tabs=[
  {procedure: schema_name ,tabConfirmUserRequired: false,tabEsignRequired: false
    ,tabLabel_en: "Pending Decision", tabLabel_es: "Decisión pendiente"
    ,tabName: schema_name+"-pending-decision", tabIndex:1
  } ,
  {procedure: schema_name ,tabConfirmUserRequired: false,tabEsignRequired: false
    ,tabLabel_en: "Investigations" ,tabLabel_es: "Investigaciones"
    ,tabName: schema_name+"-investigation"  ,tabIndex:1
  } ,
];
export const tabsDefinition={
  configCalendar:{
    displayCalendar: true,
    displayTable: true,
  }
};

export const programMain_programSelectionForm=
[
    {                    
      "name": "programsList",
      "label_en": "Programs", "label_es": "Programas",
      "type": "list",
      "value": "",
      "read_only": false,
      "items" : [{
          "keyName":"",                        
          "keyValue_en":"", "keyValue_es":""              
      }]
    },
];
// export const incubActiveBatches={
//   fieldToDisplay:[
//     {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false, width:'30%'}
//     , {name: 'incubation_incubator', label_en:'Incubator', label_es: 'Incubadora', sort:false, filter:true, width:'30%'}
//     , {name: 'NUM_SAMPLES', label_en:'Num Samples', label_es: 'Nº Muestras', sort:false, filter:true, width:'20%'}
//     , {name: 'incubation_start', label_en:'Start Date', label_es: 'Fecha Inicio', sort:false, filter:true, width:'30%'}
//     , {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, width:'30%'}  ],
//   displayRefreshButton: true,
//   autorefreshWindow: false,
//   tableTitle:{
//     display: true,
//     label:{label_en:'Active Batches', label_es:'Tandas en activo'}
//   },
//   displayButtons: true,
//   buttons:[          
//     {
//       "name": "EM_BATCH_INCUB_CREATE",
//       "label_en": "New Batch", "label_es": "Crear Tanda",
//       "type": "button",
//       "icon_name": "icons:assignment-return",
//       "read_only": false,
//     },
//     {
//       "name": "EM_BATCH_ASSIGN_INCUB",
//       "label_en": "Assign Incubator", "label_es": "Asignar incubadora",
//       "type": "button",
//       "icon_name": "icons:assignment-return",
//       "read_only": false,
//     },
//     {
//       "name": "EM_BATCH_INCUB_START",
//       "label_en": "Start Incubation", "label_es": "Empezar incubación",
//       "type": "button",
//       "icon_name": "icons:assignment-return",
//       "read_only": false,
//     },
//     {
//       "name": "EM_BATCH_INCUB_END",
//       "label_en": "End Incubation", "label_es": "Terminar incubación",
//       "type": "button",
//       "icon_name": "icons:assignment-return",
//       "read_only": false,
//     },    
//   ]  
// }; 
// export const selectedBatchEmpty={  
//   "label_en": "No Batch selected", "label_es": "Seleccione una tanda",
//   "icon_name": "vaadin:chevron-circle-up"
// };
//   export const sampleIncubation_incubBatch_newBatchFormFields=[
//     {
//       "name": "migroorganism_freetext",
//       "label_en": "New", "label_es": "Nuevo",
//       "type": "text",
//       "password": "false",
//       "value": "",
//       "read_only": false
//     }, 
//   ];
  
const documentContainerEmDemoAProgrammainviewStyle = document.createElement('em-demo-a-programmainview-style');
documentContainerEmDemoAProgrammainviewStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoAProgrammainviewStyle.innerHTML = `
  <dom-module id="em-demo-a-programmainview-style">
    <template>
    <style>
      div {            
          width: 80%;
          height: 80%;
      }
      .wrapper{
          display: flex;
      }
      .programsList {
          margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
          /* display: inline-block; */
          width: 100%;
          height: 100%;
          margin: 0px;
      }  
      .programTabs {
        /*display: var(--layout_-_display); */
        margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
        /* display: inline-block; */
        /* top: 170px;*/
        width: 100%;
        /* margin: 1em; */
/*          max-height: 300px;*/
/*          min-height: 150px;*/
/*          height: 3.5vh;*/
        font-size: 2vh;          
    } 
    paper-tabs{
        height: 3.5vh;
        font-size: 2vh;
      }       
      paper-tab.tabItem {
          color: var(--paper-light-blue-50);
          background-color: var(--paper-light-blue-500);
          /* width:38px; */
          height:100%;
          /* max-width:112px; */
      }                                  
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoAProgrammainviewStyle);