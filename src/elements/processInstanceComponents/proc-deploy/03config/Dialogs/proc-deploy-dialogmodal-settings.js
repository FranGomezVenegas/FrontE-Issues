export const dialogAddComment=[{
  "name": "Comment",
  "label_en": "Add Comment", "label_es": "Añade comentario",
  "type": "text",
  "password": "false",
  "read_only": false,
  "value": ''
}];

export const dialogProductionLotNew=[{  
  "name": "migroorganism_freetext",
  "label_en": "New Production Lot Name", "label_es": "Nombre para nuevo lote de producción",
  "type": "text",
  "password": "false",
  "value": "",
  "read_only": false  
}];
export const dialogProductionLotActivate=[{  
  "name": "migroorganism_freetext",
  "label_en": "Production Lot Name to reactivate", "label_es": "Nombre para el lote de producción a reactivar",
  "type": "text",
  "password": "false",
  "value": "",
  "read_only": false  
}];
export const dialogincubBatchNew=[{  
  "name": "migroorganism_freetext",
  "label_en": "New Batch Name", "label_es": "Nombre para la nueva tanda",
  "type": "text",
  "password": "false",
  "value": "",
  "read_only": false  
}];
export const dialogincubAddTmpReading=[{  
  "name": "newtemperature_freetext",
  "label_en": "New Temperature Reading", "label_es": "Nueva Lectura de Temperatura",
  "type": "text",
  "password": "false",
  "value": "",
  "read_only": false  
}];

export const dialogIncubatorsListTableHeader=[
  {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false}
, {name: 'description', label_en:'description', label_es: 'descripción', sort:false, filter:true}
];
export const dialogMicroorgListTableHeader=[
  {name: 'name', label_en:'Name', label_es: 'Nombre', sort:true, filter:false}
];
export const dialogMicroorgListAdhocMicroorg=[
  {
    "name": "adhoc_name",
    "label_en": "Ad-hoc microorganism name", "label_es": "Nombre Ad-hoc",
    "type": "text",
    "password": "false",
    "read_only": false,
    "value": ''
  },
  {
    "name": "ADD_ADHOC_MICROORGANISM",
    "label_en": "Add Adhoc", "label_es": "Añadir Nuevo",
    "type": "button",              
    "value": "",
    "read_only": false
  },
  {
    "name": "ADD_MICROORGANISM",
    "label_en": "Add", "label_es": "Añadir",
    "type": "button",              
    "value": "",
    "read_only": false
  },
];
export const dialogInvestDecision=[
  {"name": "external_system_name",
  "label_en": "System Name", "label_es": "Nombre Sistema",
  "type": "text",
  "password": "false",
  "value": "Trackwise",
  "read_only": false, 
  "dbType": "String",
  },
  {"name": "external_system_id",
  "label_en": "System Id", "label_es": "Id Sistema",
  "type": "text",
  "password": "false",
  "value": "",
  "read_only": false,
  "dbType": "String",
  },
  {"name": "capa_required",
  "label_en": "CAPA Required", "label_es": "¿Requiere CAPA?",
  "type": "boolean",
  "password": "false",
  "value": "",
  "read_only": false,
  "dbType": "Boolean",
  },
  {"name": "capa_external_system_name",
  "label_en": "CAPA System Name", "label_es": "Nombre Sistema CAPA",
  "type": "text",
  "password": "false",
  "value": "Trackwise",
  "read_only": false,
  "dbType": "String",
  },
  {"name": "capa_external_system_id",
  "label_en": "CAPA Id", "label_es": "Id CAPA",
  "type": "text",
  "password": "false",
  "value": "",
  "read_only": false,
  "dbType": "String",
  },  
];
export const dialogInvestigationsListTableHeader=[
  {name: 'id', label_en:'Id', label_es: 'Id', sort:true, filter:false}
, {name: 'created_on', label_en:'Creation', label_es: 'Creación', sort:false, filter:true}
];

export const dialog_buttons=[
	{
	  "name": "closeDialog",
	  "label_en": "Close Dialog", "label_es": "Cerrar Ventana",
	  "type": "icon-button",
	  "icon_name": "icons:restore-page", "icon_color": "aqua",
	  "esign_required": false,
	  "read_only": false,
	}
];	
export const cancelDialogButton={
  "name": "CANCEL_DIALOG_BUTTON",
  "label_en": "Cancel", "label_es": "Cancelar",
  "type": "button",
  "icon_name": "icons:next-week",
  "read_only": false,
}
export const confirmDialogButton={
"name": "ACCEPT_DIALOG_BUTTON",
"label_en": "Accept", "label_es": "Aceptar",
"type": "button",
"icon_name": "icons:next-week",
"read_only": false,
}
export const closeDialogButton={
"name": "CLOSE_DIALOG_BUTTON",
"label_en": "Close", "label_es": "Cerrar",
"type": "button",
"icon_name": "icons:next-week",
"read_only": false,
}



const documentContainerprocDeployDialogModalStyle = document.createElement('proc-deploy-dialogmodal-style');
documentContainerprocDeployDialogModalStyle.setAttribute('style', 'display: none;');

documentContainerprocDeployDialogModalStyle.innerHTML = `
  <dom-module id="proc-deploy-dialogmodal-style">
    <template>
    <style>
    /* Modal Content */
    div.modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        -moz-box-shadow: 3px 3px 5px #535353;
        -webkit-box-shadow: 3px 3px 5px #535353;       
        box-shadow: 3px 3px 5px #535353;
        -moz-border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 6px;  
        border-radius: 6px 6px 6px 6px;                
    }        
    /* The Close Button */

    div.modal-content.bgimg {
        background-image: url('./images/hexagon-white-blue-light.jpg');   
        width: 420px;       
    }          

    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerprocDeployDialogModalStyle);