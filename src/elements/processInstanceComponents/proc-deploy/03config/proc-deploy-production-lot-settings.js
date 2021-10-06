import {personal_smp_template} from './config-process';
export const productionLot={
    tableHdrFlds:[
      {name: 'lot_name', label_en:'Name', label_es: 'Nombre', width:'80%', sort:false, filter:true}
      , {name: 'created_on', label_en:'Created On', label_es: 'F. Creación', width:'20%', sort:true, filter:false}
      //, {name: 'created_by', label_en:'Created By', label_es: 'Creador', width:'5%', sort:false, filter:true}
      //, {name: 'closed_on', label_en:'Closed On', label_es: 'F. Cierre', width:'10%', sort:true, filter:false}
      //, {name: 'closed_by', label_en:'Closed By', label_es: 'Cerrado Por', width:'20px', sort:false, filter:true}
    ],  
    displayRefreshButton: true,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'Active Production Lots', label_es:'Lotes en producción activos'}
    },
    displayButtons: true,
    buttons:[
      {
        "name": "EM_NEW_PRODUCTION_LOT",
        "label_en": "New", "label_es": "Nuevo",
        "type": "icon-button",
        "icon_name": "icons:create-new-folder",
        "requires_selected_object": false,
        "read_only": false,
      }, 
      {
        "name": "EM_ACTIVATE_PRODUCTION_LOT",
        "label_en": "Activate", "label_es": "Activar",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "requires_selected_object": false,
        "read_only": false,
      }, 
      {
        "name": "EM_DEACTIVATE_PRODUCTION_LOT",
        "label_en": "Deactivate", "label_es": "Desactivar",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "requires_selected_object": true,
        "read_only": false,
      }, 
    ],
    level2:{
      hasLevel2: false,
      label_en:'Open Tests', label_es:'Ver Ensayos',
      level1FldRoot:'child',
      isTable: true,
      tableHdrFlds:[    
        {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
      ]  
    },
    level3:{
      hasLevel3: false,
	  label_en:'Open Results', label_es:'Ver Resultados',
      level1FldRoot:'child2',
      isTable: true,
      tableHdrFlds:[    
        {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
      ]  
    },  
    displayRightMouseMenu: true,
    rightMouseButtons:[
      {
        "name": "EM_ACTIVATE_PRODUCTION_LOT",
        "label_en": "Activate", "label_es": "Activar",
        "type": "icon-button",
        "icon_name": "icons:alarm-add",
        "requires_selected_object": false,
        "read_only": false,
      }, 
      {
        "name": "EM_DEACTIVATE_PRODUCTION_LOT",
        "label_en": "Deactivate", "label_es": "Desactivar",
        "type": "icon-button",
        "icon_name": "alarm-off",
        "requires_selected_object": true,
        "read_only": false,
      }, 
    ],      
  };

const documentContainerEmDemoAProductionLotStyle = document.createElement('proc-deploy-production-lot-style');
documentContainerEmDemoAProductionLotStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoAProductionLotStyle.innerHTML = `
  <dom-module id="proc-deploy-production-lot-style">
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
        display: flex
      }      
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoAProductionLotStyle);