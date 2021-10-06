import {css} from "lit-element";
import {schema_name} from '../config-process';
export const home_defaultTab = "study-samples";

export const window_tabs=[
  {procedure: schema_name ,tabConfirmUserRequired: false,tabEsignRequired: false
    ,tabLabel_en: "Home", tabLabel_es: "Inicio"
    ,tabName: "home", tabIndex:0
  } ,
  {procedure: schema_name ,tabConfirmUserRequired: false,tabEsignRequired: false
    ,tabLabel_en: "Variable Values" ,tabLabel_es: "Variables y valores"
    ,tabName: "study-variablevalues"  ,tabIndex:1
  } ,
  {procedure: schema_name ,tabConfirmUserRequired: false ,tabEsignRequired: false
    ,tabLabel_en: "Samples" ,tabLabel_es: "Muestras"
    ,tabName: "study-samples"  ,tabIndex:1
  } ,    
  {procedure: schema_name ,tabConfirmUserRequired: false ,tabEsignRequired: false
    ,tabLabel_en: "Individuals" ,tabLabel_es: "Individuos"
    ,tabName: "study-individuals"  ,tabIndex:1
  } ,    
  {procedure: schema_name ,tabConfirmUserRequired: false ,tabEsignRequired: false
    ,tabLabel_en: "Families" ,tabLabel_es: "Familias"
    ,tabName: "study-family"  ,tabIndex:1
  } ,    
  {procedure: schema_name ,tabConfirmUserRequired: false,tabEsignRequired: false
    ,tabLabel_en: "Samples Set", tabLabel_es: "Agrupación Muestras"
    ,tabName: "samples-set", tabIndex:1
  } ,
  {procedure: schema_name ,tabConfirmUserRequired: false ,tabEsignRequired: false
    ,tabLabel_en: "Files" ,tabLabel_es: "Archivos"
    ,tabName: "study-files"  ,tabIndex:1
  } ,    
  {procedure: schema_name ,tabConfirmUserRequired: false,tabEsignRequired: false
    ,tabLabel_en: "Summary", tabLabel_es: "Resumen"
    ,tabName: "summary-cards", tabIndex:2
  } ,  
  
];
export const tabsDefinition={
  // configCalendar:{
  //   displayCalendar: true,
  //   displayTable: true,
  // }
};

export const projectMain_projectSelectionForm=
[
  {                    
    "name": "projectList",
    "label_en": "Projects", "label_es": "Proyectos",
    "type": "list",
    "value": "",
    "read_only": false,
    "items" : [{
        "keyName":"",                        
        "keyValue_en":"", "keyValue_es":""              
    }]
  },
  {                    
      "name": "studyList",
      "label_en": "Studies", "label_es": "Estudios",
      "type": "list",
      "value": "",
      "read_only": false,
      "items" : [{
          "keyName":"",                        
          "keyValue_en":"", "keyValue_es":""              
      }]
    },
];
export const elementTableSamplesSet={
  tableTitle:{
    display:true,
    label:{label_en:'Samples Set', label_es:'Agrupación Muestras'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[          
    {
      "name": "STUDY_CREATE_SAMPLES_SET",
      "requires_selected_object":false,
      "label_en": "Create new Sample Set", "label_es": "Crear Agrupación Muestras",
      "requires_selected_object":false,
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },             
  ],
  tableHdrFlds:[
    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'description', label_en:'Description', label_es: 'Descripción', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'active', label_en:'Active', label_es: 'Activo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'created_on', label_en:'Creation Date', label_es: 'F.Creación', sort:true, filter:false, is_icon:false, width:"20%"},
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'description', label_en:'Description', label_es: 'Descripción', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  },  
}


export const elementTableConfigVariablesSet={
  tableTitle:{
    display:true,
    label:{label_en:'Variables Set', label_es:'Variables Set'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[          
    {
      "name": "STUDY_CREATE_FAMILY",
      "requires_selected_object":false,
      "label_en": "Create new family", "label_es": "Crear Familia",
      "type": "icon-button",
      "requires_selected_object":false,
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
  tableHdrFlds:[
    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'active', label_en:'Active', label_es: 'Activo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'created_on', label_en:'Creation Date', label_es: 'F.Creación', sort:true, filter:false, is_icon:false, width:"20%"},
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  },  

};

export const elementTableFamily={
  tableTitle:{
    display:true,
    label:{label_en:'Families', label_es:'Familias'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[          
    {
      "name": "STUDY_CREATE_FAMILY",
      "requires_selected_object":false,
      "label_en": "Create new family", "label_es": "Crear Familia",
      "type": "icon-button",
      "requires_selected_object":false,
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
  tableHdrFlds:[
    {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'active', label_en:'Active', label_es: 'Activo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'created_on', label_en:'Creation Date', label_es: 'F.Creación', sort:true, filter:false, is_icon:false, width:"20%"},
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'type', label_en:'Type', label_es: 'Tipo', sort:false, filter:true, is_icon:false, width:"20%"},
      ]
  }
};
export const elementTableIndividual={
  tableTitle:{
    display:true,
    label:{label_en:'Individuals', label_es:'Individuos'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[  
    {
      "name": "STUDY_CREATE_INDIVIDUAL",
      "label_en": "Create Individual", "label_es": "Crear Individuo",
      "type": "icon-button",
      "requires_selected_object":false,
      "icon_name": "icons:alarm-add",
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
    {
      "name": "STUDY_CREATE_INDIVIDUAL_SAMPLE",
      "requires_selected_object":false,
      "label_en": "Create Individual Sample", "label_es": "Crear Muestra de Individuo",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },  

  ],
  tableHdrFlds:[
    {name: 'individual_id', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'individual_name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'description', label_en:'Description', label_es: 'Descripción', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'active', label_en:'active', label_es: 'activo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'created_on', label_en:'Creation', label_es: 'Creado El', sort:false, filter:true, is_icon:false, width:"20%"},
  ],  
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'individual_id', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'individual_name', label_en:'Name', label_es: 'Nombre', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  }
};
export const elementTableFamilyIndividual={
  tableTitle:{
    display:true,
    label:{label_en:'All Family and Individuals', label_es:'Todas las familias e individuos'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[  
  ],
  tableHdrFlds:[
    {name: 'family_name', label_en:'Family', label_es: 'Familia', sort:false, filter:true, is_icon:false, width:"50%"},
    {name: 'linked_on', label_en:'Creation', label_es: 'Creado El', sort:false, filter:true, is_icon:false, width:"50%"},
  ],  
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'family_name', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  }
};
export const elementTableSample={
  tableTitle:{
    display:true,
    label:{label_en:'All Study Samples', label_es:'Todas las Muestras del estudio'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[          
    {
      "name": "STUDY_INDIVIDUAL_SAMPLE_ACTIVATE",
      "label_en": "Activate Sample", "label_es": "Activar Muestra",
      "type": "icon-button",
      "icon_name": "icons:alarm-add",
      "read_only": false,
    },  
    {
      "name": "STUDY_INDIVIDUAL_SAMPLE_DEACTIVATE",
      "label_en": "Deactivate Sample", "label_es": "Desactivar Muestra",
      "type": "icon-button",
      "icon_name": "alarm-off",
      "read_only": false,
    }, 
    // {
    //   "name": "STUDY_FAMILY_ADD_INDIVIDUAL",
    //   "requires_selected_object":false,
    //   "label_en": "Add Sample Individual to Family", "label_es": "Añadir individuo de la muestra a Familia",
    //   "type": "icon-button",
    //   "icon_name": "icons:add-box",
    //   "read_only": false,
    // },  
    {
      "name": "STUDY_SAMPLES_SET_ADD_SAMPLE",
      "requires_selected_object":false,
      "label_en": "Add to Samples Set", "label_es": "Añadir a Samples Set",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },  
    {
      "name": "STUDY_SAMPLES_SET_REMOVE_SAMPLE",
      "requires_selected_object":false,
      "label_en": "Remove from Samples Set", "label_es": "Borrar de Samples Set",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },  
    {
      "name": "ADD_VARIABLE_SET_TO_STUDY_OBJECT",
      "requires_selected_object":false,
      "label_en": "Add Variables Set", "label_es": "Añadir Conjunto de Variables",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
      "ownerTable":'study_individual_sample'
    },  
  ],
  tableHdrFlds:[
    {name: 'sample_id', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'description', label_en:'Description', label_es: 'Descripción', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'active', label_en:'active', label_es: 'activo', sort:false, filter:true, is_icon:false, width:"20%"},
    {name: 'created_on', label_en:'Creation', label_es: 'Creado El', sort:false, filter:true, is_icon:false, width:"20%"},
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'sample_id', label_en:'Id', label_es: 'Id', sort:false, filter:true, is_icon:false, width:"20%"},
      {name: 'description', label_en:'Description', label_es: 'Descripción', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  }
};
export const elementTableSampleVariable={
  tableTitle:{
    display:true,
    label:{label_en:'Sample Variables', label_es:'Variables de la muestra'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[          
    {
      "name": "STUDY_OBJECT_SET_VARIABLE_VALUE",
      "label_en": "Enter Variable Value", "label_es": "Entrar Valor a Variable",
      "type": "icon-button",
      "icon_name": "icons:alarm-add",
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
      {name: 'variable_set', label_en:'Var Set', label_es: 'Conjunto', sort:false, filter:true, is_icon:false, width:"20%"},
    ]
  }

};
const documentContainerGenomaInstancia1ProjectmainviewStyle = document.createElement('gemoma-instancia1-projectmainview-style');
documentContainerGenomaInstancia1ProjectmainviewStyle.setAttribute('style', 'display: none;');


export const documentContainerGenomaInstancia1ProjectmainviewStyleLit= css `
  dissv {            
    width: 80%;
    /* height: 80%; */
  }
  div.wrapper{
    display: flex;
  }
  div.filtersList{display: flex;}
  div.projectsListxxx {
    margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
    /* display: inline-block; */
    width: 100%;
    height: 100%;
    margin: 0px;
  }  
  div.projectTabxxxxs {
    /*display: var(--layout_-_display); */
    margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
    /* display: inline-block; */
    /* top: 170px;*/
    width: 100%;
/*    height: 300px; */
    /* margin: 1em; */
/*    max-height: 300px; */
/*    min-height: 150px; */
  } 
  paper-tab.tabItemxxxx {
    color: var(--paper-light-blue-50);
    background-color: var(--paper-light-blue-500);
    /* width:38px; */
    height:100%;
    /* max-width:112px; */
  }  
  paper-tabsxxxx{
  height: 3vh;
  font-size: 2vw;
  }                               
`;


documentContainerGenomaInstancia1ProjectmainviewStyle.innerHTML = `
  <dom-module id="gemoma-instancia1-projectmainview-style">
    <template>
    <style>
      div {            
          width: 98%;
          height: 80%;
      }
      div.wrapper{
          display: flex;
      }
      div.filtersList{display: flex;}
      div.projectsList {
          margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
          /* display: inline-block; */
          width: 100%;
          height: 100%;
          margin: 0px;
      }  
      div.projectTabs {
          /*display: var(--layout_-_display); */
          margin-top:0px; margin-left:0px;margin-bottom:0px;margin-right:0px;
          /* display: inline-block; */
          /* top: 170px;*/
/*          width: 100%; */
/*          height: 300px; */
          /* margin: 1em; */
/*          max-height: 300px; */
/*          min-height: 150px; */
      } 
      paper-tab.tabItem {
          color: var(--paper-light-blue-50);
          background-color: var(--paper-light-blue-500);
          /* width:38px; */
          height:100%;
          /* max-width:112px; */
      }  
      paper-tabs{
        height: 2vmax;
        font-size: 1.5vmax;
      }                               
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerGenomaInstancia1ProjectmainviewStyle);