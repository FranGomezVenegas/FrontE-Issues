export const dialog_buttons=[
	{
	  "name": "closeDialog",
	  "label_en": "Close Dialog", "label_es": "Cerrar Ventana",
	  "type": "icon-button",
	  "icon_name": "icons:restore-page", "icon_color": "aqua",
	  "esign_required": false,
    "read_only": false,
    "color": "#070b82",
	}
];	
export const cancelDialogButton={
  "name": "CANCEL_DIALOG_BUTTON",
  "label_en": "Cancel", "label_es": "Cancelar",
  "type": "button",
  "icon_name": "icons:next-week",
  "read_only": false,
  "color": "#070b82",
}
export const confirmDialogButton={
"name": "ACCEPT_DIALOG_BUTTON",
"label_en": "Accept", "label_es": "Aceptar",
"type": "button",
"icon_name": "icons:next-week",
"read_only": false,
"color": "#070b82",
}
export const closeDialogButton={
"name": "CLOSE_DIALOG_BUTTON",
"label_en": "Close", "label_es": "Cerrar",
"type": "button",
"icon_name": "icons:next-week",
"color": "#070b82",
"read_only": false,
}

const documentContainerprocDeployDialogModalButtonsSettings = document.createElement('proc-deploy-dialog-buttons-settings');
documentContainerprocDeployDialogModalButtonsSettings.setAttribute('style', 'display: none;');

documentContainerprocDeployDialogModalButtonsSettings.innerHTML = `
  <dom-module id="proc-deploy-dialog-buttons-settings">
    <template>
    <style>
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerprocDeployDialogModalButtonsSettings);