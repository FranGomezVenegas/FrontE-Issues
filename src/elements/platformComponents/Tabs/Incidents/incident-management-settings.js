export const appNewIncident_formFields=[
  {
    "name": "Title",
    "label_en": "Title", "label_es": "Titulo",
    "type": "text",
    "password": "false",
    "value": "",
    "read_only": false
  },    
  {
    "name": "Detail",
    "label_en": "Detail", "label_es": "Detalle",
    "type": "text-area",
    "password": "false",
    "numRows": "10",
    "numCols": "100",
    "value": "Hola Soporte, Estoy teniendo un problema y me gustaría que me ayudárais",
    "placeholder": '',
    "read_only": false
  },    
  {
    "name": "NEW_INCIDENT",
    "label_en": "Access", "label_es": "Entrar",
    "type": "button",              
    "value": "",
    "read_only": false
  },              
];
export const incidents_userOpenIncidentsFieldToDisplay=[
  {name: 'id', label_en:'Id', label_es: 'Id', sort:true, filter:false, width:'10%'}
//, {name: 'status', label_en:'Status', label_es: 'Estado', sort:false, filter:true, width:'22%'}
, {name: 'date_last_update', label_en:'Last Update', label_es: 'Último cambio', sort:false, filter:true, width:'22%'}
, {name: 'date_creation', label_en:'Creation', label_es: 'Creación', sort:false, filter:true, width:'22%'}
, {name: 'item_title', label_en:'Title', label_es: 'Título', sort:false, filter:true, width:'20%'}
, {name: 'item_detail', label_en:'Detail', label_es: 'Detalle', sort:false, filter:true, width:'40%'}];
export const incidents_userOpenIncidentsButtons=[
  
  {
    "name": "OPEN_NEW_INCIDENT_DIALOG",
    "label_en": "New", "label_es": "Crear",
    "type": "button",
    "icon_name": "icons:assignment-return",
    "read_only": false,
  },
  {
    "name": "CONFIRM_INCIDENT",
    "label_en": "Confirm", "label_es": "Confirmar",
    "type": "button",
    "icon_name": "icons:assignment-return",
    "read_only": false,
  },
  {
    "name": "ADD_NOTE_INCIDENT",
    "label_en": "Add Note", "label_es": "Añadir Nota",
    "type": "button",
    "icon_name": "icons:assignment-return",
    "read_only": false,
  },
  {
    "name": "CLOSE_INCIDENT",
    "label_en": "Close it!", "label_es": "¡Zanjarla!",
    "type": "button",
    "icon_name": "icons:assignment-return",
    "read_only": false,
  },
  {
    "name": "REOPEN_INCIDENT",
    "label_en": "ReOpen it!", "label_es": "¡Reabrirla!",
    "type": "button",
    "icon_name": "icons:assignment-return",
    "read_only": false,
  },    
];

