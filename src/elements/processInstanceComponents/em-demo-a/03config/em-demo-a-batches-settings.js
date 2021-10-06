
// export const programHome_sampleSummaryGaugeOptions={"width": 400, "height": 120, "redFrom": 90, "redTo": 100, "yellowFrom":75,
//                                                     "yellowTo": 90, "minorTicks": 5};
// export const programHome_sampleSummaryPieOptions={"title": "Samples Progress"};

export const incubActiveBatches={
  tableTitle:{
    display:true,
    label:{label_en:'Batches', label_es:'Tandas'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[  
    {
      "name": "EM_BATCH_INCUB_CREATE",
      "label_en": "New Batch", "label_es": "Crear Tanda",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "requires_selected_object": false,
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_REMOVE",
      "label_en": "Delete Batch", "label_es": "Borrar Tanda",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "requires_selected_object": true,
      "read_only": false,
    },
    {
      "name": "EM_BATCH_ASSIGN_INCUB",
      "label_en": "Assign Incubator", "label_es": "Asignar incubadora",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_START",
      "label_en": "Start Incubation", "label_es": "Empezar incubación",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_END",
      "label_en": "End Incubation", "label_es": "Terminar incubación",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },    
  ],
  displayRightMouseMenu:true,
  rightMouseButtons:[  
    {
      "name": "EM_BATCH_INCUB_CREATE",
      "label_en": "New Batch", "label_es": "Crear Tanda",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "requires_selected_object": false,
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_REMOVE",
      "label_en": "Delete Batch", "label_es": "Borrar Tanda",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "requires_selected_object": true,
      "read_only": false,
    },
    {
      "name": "EM_BATCH_ASSIGN_INCUB",
      "label_en": "Assign Incubator", "label_es": "Asignar incubadora",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_START",
      "label_en": "Start Incubation", "label_es": "Empezar incubación",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_END",
      "label_en": "End Incubation", "label_es": "Terminar incubación",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },    
  ],
  tableHdrFlds:[
    {name: 'iconCol', label_en:'', label_es: '',is_icon:true, iconMethod:'getBatchInProgress', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/Incubators/', sort:false, filter:true, min_width:'10%', width:'10%'},
    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false, width:'20%'},
    {name: 'incub_stage', label_en:'#Incub', label_es: 'IncNº', sort:true, filter:false, width:'10%'},
    {name: 'incubation_incubator', label_en:'Incubator', label_es: 'Incubadora', sort:false, filter:true, width:'20%'},
    {name: 'incubator_info_temperature', label_en:'Temperature', label_es: 'Temperatura', sort:false, filter:false, width:'10%'},
    {name: 'incubator_info_created_on', label_en:'T.Date', label_es: 'Fecha T.', sort:false, filter:false, width:'25%'},
    {name: 'NUM_SAMPLES', label_en:'Num Samples', label_es: 'Nº Muestras', sort:false, filter:false, width:'10%'},
    {name: 'incubation_start', label_en:'Start Date', label_es: 'Fecha Inicio', sort:false, filter:false, width:'10%'},
//   {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, width:'30%'},
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false, width:'30%'},
      {name: 'NUM_SAMPLES', label_en:'Num Samples', label_es: 'Nº Muestras', sort:false, filter:true, width:'20%'}
    ]
  }
}
export const incubActiveBatchesOld={
  fieldToDisplay:[
    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false, width:'30%'}
    , {name: 'incubation_incubator', label_en:'Incubator', label_es: 'Incubadora', sort:false, filter:true, width:'30%'}
    , {name: 'NUM_SAMPLES', label_en:'Num Samples', label_es: 'Nº Muestras', sort:false, filter:true, width:'20%'}
    , {name: 'incubation_start', label_en:'Start Date', label_es: 'Fecha Inicio', sort:false, filter:true, width:'30%'}
//    , {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, width:'30%'}  
  ],
  displayRefreshButton: true,
  autorefreshWindow: false,
  tableTitle:{
    display: true,
    label:{label_en:'Active Batches', label_es:'Tandas en activo'}
  },
  displayButtons: true,
  buttons:[          
    {
      "name": "EM_BATCH_INCUB_CREATE",
      "label_en": "New Batch", "label_es": "Crear Tanda",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "requires_selected_object": false,
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_REMOVE",
      "label_en": "Delete Batch", "label_es": "Borrar Tanda",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "requires_selected_object": true,
      "read_only": false,
    },
    {
      "name": "EM_BATCH_ASSIGN_INCUB",
      "label_en": "Assign Incubator", "label_es": "Asignar incubadora",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_START",
      "label_en": "Start Incubation", "label_es": "Empezar incubación",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },
    {
      "name": "EM_BATCH_INCUB_END",
      "label_en": "End Incubation", "label_es": "Terminar incubación",
      "type": "button",
      "icon_name": "icons:assignment-return",
      "read_only": false,
    },    
  ]  
}; 
export const selectedBatchEmpty={  
  "label_en": "No Batch selected", "label_es": "Seleccione una tanda",
  "icon_name": "vaadin:chevron-circle-up"
};
  export const sampleIncubation_incubBatch_newBatchFormFields=[
    {
      "name": "migroorganism_freetext",
      "label_en": "New", "label_es": "Nuevo",
      "type": "text",
      "password": "false",
      "value": "",
      "read_only": false
    }, 
  ];
  
const documentContainerEmDemoABatchesStyle = document.createElement('em-demo-a-batches-style');
documentContainerEmDemoABatchesStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoABatchesStyle.innerHTML = `
  <dom-module id="em-demo-a-batches-style">
    <template>
    <style>
    vaadingrid-lit-singleselect {
      width:55%;
    }
    p.tableTitle{
      margin-top: 0px;
      margin-bottom: 3px;
      color: #44cbe6;
      font-size:6vmin;
    }         
    div.main{
      //display:flex;
      width:95%;
    }         
    div.buttonGroup {
      display: flex;
      align-items: center;      
    } 
    div.batchContent{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } 
    div.cardPendingSops {
      display: flex;
      margin: 24px;
      padding: 16px;
      color: ##2ec3ec; //#757575;
      border-radius: 5px;
      /*background-image: url('./images/hexagon-white-blue-light.jpg'); */
      /*background-image: url('./images/fondo-blanco-hexagono-tecnologia-azul.jpg');*/
      background-repeat: no-repeat;
      background-size: cover;                  
      background-color: #c2f2ff; // #1676f31a; //#fff; // #49cce633;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    div.cardMySops{      
      flex-basis: 10%;
      height: 5vh;
      width: auto;
      font-size:2vh;
    }    
    @media (min-width:900px){
      div.batchContent{
        flex-wrap: wrap;
        display:flex;
        justify-content: space-between;
      }
    }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoABatchesStyle);