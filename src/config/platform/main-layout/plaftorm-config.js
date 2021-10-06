// export const sopUserAllSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|status|file_link';
// export const sopUserPendingSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|status|file_link';
// export const sopUserProcedureSop_fieldToRetrieve='procedure|sop_id|brief_summary|sop_name|sop_version|sop_revision|current_status|file_link';

// export const sopStatusLabel={
//   pass:{label_en:'Certified', label_es:'Certificado'},
//   not_pass:{label_en:'Not Certified', label_es:'No Certificado'}
// }
// export const sopMySops_buttons=[
// 	{
// 	  "name": "SOP_MARK_AS_COMPLETED",
// 	  "label_en": "Mark Completed", "label_es": "Marcar Completado",
// 	  "type": "icon-button",
// 	  "icon_name": "icons:restore-page", "icon_color": "aqua",
// 	  "esign_required": false,
// 	  "read_only": false,
// 	}
// ];
// export const sopMySops_cardContent={
//   display_pdf_link: true,
//   display_certification_status_icon: true,
//   sopFieldsToDisplay:['procedure', 'sop_name', 'brief_summary'],  
// };

// export const sopMyPendingSops_buttons=[
// 	{
// 	  "name": "SOP_MARK_AS_COMPLETED",
// 	  "label_en": "Mark Completed", "label_es": "Marcar Completado",
// 	  "type": "icon-button",
// 	  "icon_name": "icons:restore-page", "icon_color": "aqua",
// 	  "esign_required": false,
// 	  "read_only": false,
// 	}
// ];
// export const sopMyPendingSops_cardContent={
//   display_pdf_link: true,
//   display_certification_status_icon: true,
//   sopFieldsToDisplay:['procedure', 'sop_name', 'brief_summary'],  
// }

// export const appConfirmUserOrEsign_notCorrectMessage={
//     "now":{
//     "message_en":"Validation not completed, action aborted",
//     "message_es":"Validación no completada, acción abortada",},
//     "dialog_cancelled":{
//       "message_en":"dialog canceled, action aborted",
//       "message_es":"Diálogo cancelado, acción abortada",},
//     "attempts_consumed":{
//         "message_en":"All attempts consumed, action aborted",
//         "message_es":"Todos los intentos consumidos, acción abortada",},
//     }
// export const appLogin_ribbonField=[{"label_en": "Draft", "label_es": "Provisional",}];
// export const appLogin_formFields=[
//     {
//       "name": "title",
//       "label_en": "Welcome to the new Planet", "label_es": "Bienvenido al nuevo Planeta",
//       "type": "title",
//       "size": 'h2',
//       "style": "color: var(--paper-light-blue-50);",
//       "read_only": true
//     },             
//     {
//       "name": "User",
//       "label_en": "User", "label_es": "Usuario",
//       "type": "text",
//       "password": "false",
//       "value": "",
//       "read_only": false
//     },    
//     {
//       "name": "password",
//       "label_en": "Password", "label_es": "Contraseña",
//       "type": "password",
//       "password": "true",
//       "value": "",
//       "read_only": false,
//       "showDisplayPasswordType": "Button"
//     },
//     {
//       "name": "buttonAccess",
//       "label_en": "Access", "label_es": "Entrar",
//       "type": "button",              
//       "value": "",
//       "read_only": false
//     },            
//     {
//       "name": "userRole",
//       "label_en": "Role", "label_es": "Rol",
//       "type": "list",
//       "value": "Admin",
//       "read_only": true,
//       "items" : [{
//         "keyName":"Analyst",                        
//         "keyValue_en":"Analyst", "keyValue_es":"valor1"              
//       }]
//     },                        
//   ];
// export const appEsign_formFields=[
//     {
//       "name": "buttonAccept",
//       "label_en": "Validate", "label_es": "Validar",
//       "type": "button",              
//       "value": "",
//       "read_only": false
//     }, 
//     {
//       "name": "buttonCancel",
//       "label_en": "Cancel", "label_es": "Cancelar",
//       "type": "button",              
//       "value": "",
//       "read_only": false
//     }, 	
// ];
// export const appConfirmUser_formFields=[
//     {
//       "name": "userToCheck",
//       "label_en": "User", "label_es": "Usuario",
//       "type": "textconfirmuser",
//       "password": "false",
//       "value": "labplanet",
//       "read_only": false
//     },    
//     {
//       "name": "pwToCheck",
//       "label_en": "Current Password", "label_es": "Contraseña Actual",
//       "type": "password",
//       "password": "true",
//       "value": "",
//       "read_only": false,
//       "showDisplayPasswordType": "Button"
//     },
//   {
//     "name": "confirmUserNote",
//     "label_en": "Note", "label_es": "Nota",
//     "type": "text",
//     "password": "false",
//     "value": "",
//     "read_only": false
//   }
// ];

// export const appHeader_ribbonField=[{"label_en": "Draft", "label_es": "Provisional", "color": "aqua"}];
// export const appHeader_personFieldsName='';//'first_name|last_name|photo';

// export const changeUserPasswordForm=[
// {
//   "name": "Password",
//   "label_en": "New Password", "label_es": "Nueva Contraseña",
//   "type": "password",
//   "password": "true",
//   "value": "",
//   "read_only": false,
//   "showDisplayPasswordType": "Button"
// },
// {
//   "name": "USER_CHANGE_PSWD",
//   "label_en": "Confirm", "label_es": "Confirmar",
//   "type": "icon-button",
//   "icon_name": "icons:restore-page", "icon_color": "aqua",
//   "confirmuser_required": true,
//   "read_only": false,
// }];
// export const changeUserEsignForm=[
// {
//   "name": "Esign",
//   "label_en": "New Esign", "label_es": "Nueva Firma Electrónica",
//   "type": "password",
//   "password": "true",
//   "value": "",
//   "read_only": false,
//   "showDisplayPasswordType": "Button"
// },
// {
//   "name": "USER_CHANGE_ESIGN",
//   "label_en": "Confirm", "label_es": "Confirmar",
//   "type": "icon-button",
//   "icon_name": "icons:restore-page", "icon_color": "aqua",
//   "esign_required": true,
//   "read_only": false,  
// }];
// export const saveOpenTabsForm=[
//   {
//     "name": "SET_DEFAULT_TABS_ON_LOGIN",
//     "label_en": "Save Open Tabs", "label_es": "Guardar Pestañas Actuales",
//     "type": "button",
//     "icon_name": "icons:restore-page", "icon_color": "aqua",
//     "esign_required": false,
//     "read_only": false,  
//   }];  
// export const dialog_buttons=[
// 	{
// 	  "name": "closeDialog",
// 	  "label_en": "Close Dialog", "label_es": "Cerrar Ventana",
// 	  "type": "icon-button",
// 	  "icon_name": "icons:restore-page", "icon_color": "aqua",
// 	  "esign_required": false,
// 	  "read_only": false,
// 	}
// ];	
// export const pendingSOPTab={
//   lp_frontend_page_name: 'sop/my-pending-sops.js',        
//   tabName: 'sop-myPendingSops',
//   tabLabel_en: 'My Pending SOPs',
//   tabLabel_es: 'Mis PNT Pendientes',
//   procedure:'sop',
//   tabEsignRequired: false, tabConfirmUserRequired: false
// }
// export const userMySOPTab={
//   lp_frontend_page_name: 'sop/my-sops.js',
//   tabName: 'sop-allMySops',
//   tabLabel_en: 'All My SOPs',
//   tabLabel_es: 'Mis PNTs',
//   procedure:'sop',
//   tabEsignRequired: false, tabConfirmUserRequired: false
// }
// export const userProfileHome={
//   lp_frontend_page_name: 'user-profile/user-profile.js',        
//   tabName: 'user-profile',
//   tabLabel_en: 'User Profile',
//   tabLabel_es: 'Perfil de Usuario',
//   procedure:'user',
//   tabEsignRequired: false, tabConfirmUserRequired: true
// }
// export const appNewIncident_formFields=[
//   {
//     "name": "Title",
//     "label_en": "Title", "label_es": "Titulo",
//     "type": "text",
//     "password": "false",
//     "value": "",
//     "read_only": false
//   },    
//   {
//     "name": "Detail",
//     "label_en": "Detail", "label_es": "Detalle",
//     "type": "text-area",
//     "password": "false",
//     "numRows": "10",
//     "numCols": "100",
//     "value": "Hola Soporte, Estoy teniendo un problema y me gustaría que me ayudárais",
//     "placeholder": '',
//     "read_only": false
//   },    
//   {
//     "name": "NEW_INCIDENT",
//     "label_en": "Access", "label_es": "Entrar",
//     "type": "button",              
//     "value": "",
//     "read_only": false
//   },              
// ];
// export const incidents_userOpenIncidentsFieldToDisplay=[
//   {name: 'id', label_en:'Id', label_es: 'Id', sort:true, filter:false, width:'10%'}
// //, {name: 'status', label_en:'Status', label_es: 'Estado', sort:false, filter:true, width:'22%'}
// , {name: 'date_last_update', label_en:'Last Update', label_es: 'Último cambio', sort:false, filter:true, width:'22%'}
// , {name: 'date_creation', label_en:'Creation', label_es: 'Creación', sort:false, filter:true, width:'22%'}
// , {name: 'item_title', label_en:'Title', label_es: 'Título', sort:false, filter:true, width:'20%'}
// , {name: 'item_detail', label_en:'Detail', label_es: 'Detalle', sort:false, filter:true, width:'30%'}];
// export const incidents_userOpenIncidentsButtons=[
//   {
//     "name": "CONFIRM_INCIDENT",
//     "label_en": "Confirm", "label_es": "Confirmar",
//     "type": "button",
//     "icon_name": "icons:assignment-return",
//     "read_only": false,
//   },
//   {
//     "name": "ADD_NOTE_INCIDENT",
//     "label_en": "Add Note", "label_es": "Añadir Nota",
//     "type": "button",
//     "icon_name": "icons:assignment-return",
//     "read_only": false,
//   },
//   {
//     "name": "CLOSE_INCIDENT",
//     "label_en": "Close it!", "label_es": "¡Zanjarla!",
//     "type": "button",
//     "icon_name": "icons:assignment-return",
//     "read_only": false,
//   },
//   {
//     "name": "REOPEN_INCIDENT",
//     "label_en": "ReOpen it!", "label_es": "¡Reabrirla!",
//     "type": "button",
//     "icon_name": "icons:assignment-return",
//     "read_only": false,
//   },    
// ];

// export const cancelDialogButton={
//   "name": "CANCEL_DIALOG_BUTTON",
//   "label_en": "Cancel", "label_es": "Cancelar",
//   "type": "button",
//   "icon_name": "icons:next-week",
//   "read_only": false,
// }
// export const confirmDialogButton={
// "name": "ACCEPT_DIALOG_BUTTON",
// "label_en": "Accept", "label_es": "Aceptar",
// "type": "button",
// "icon_name": "icons:next-week",
// "read_only": false,
// }
// export const closeDialogButton={
// "name": "CLOSE_DIALOG_BUTTON",
// "label_en": "Close", "label_es": "Cerrar",
// "type": "button",
// "icon_name": "icons:next-week",
// "read_only": false,
// }
// export const notificationsPaneTitle={
//   open:
//   {
//     "label_en": "Notifications", "label_es": "Notificaciones",
//     "icon_name": "vaadin:chevron-circle-up"
//   }, 
//   closed:
//   {
//     "label_en": "Notifications", "label_es": "Notificaciones",
//     "icon_name": "vaadin:chevron-circle-down"
//   },   
//   empty:
//   {
//     "label_en": "Empty tray", "label_es": "Bandeja vacía",
//   }
// };

// export const proceduresListPaneTitle={
//   open:
//   {
//     "label_en": "Procedures", "label_es": "Procesos",
//     "icon_name": "vaadin:chevron-circle-up"
//   }, 
//   closed:
//   {
//     "label_en": "Procedures", "label_es": "Procesos",
//     "icon_name": "vaadin:chevron-circle-down"
//   },   
// };
