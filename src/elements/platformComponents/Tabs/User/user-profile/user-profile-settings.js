export const changeUserPasswordForm=[
{
  "name": "Password",
  "label_en": "New Password", "label_es": "Nueva Contraseña",
  "type": "password",
  "password": "true",
  "value": "",
  "read_only": false,
  "showDisplayPasswordType": "Button"
},
{
  "name": "USER_CHANGE_PSWD",
  "label_en": "Confirm", "label_es": "Confirmar",
  "type": "icon-button",
  "icon_name": "icons:restore-page", "icon_color": "aqua",
  "confirmuser_required": true,
  "read_only": false,
}];
export const changeUserEsignForm=[
{
  "name": "Esign",
  "label_en": "New Esign", "label_es": "Nueva Firma Electrónica",
  "type": "password",
  "password": "true",
  "value": "",
  "read_only": false,
  "showDisplayPasswordType": "Button"
},
{
  "name": "USER_CHANGE_ESIGN",
  "label_en": "Confirm", "label_es": "Confirmar",
  "type": "icon-button",
  "icon_name": "icons:restore-page", "icon_color": "aqua",
  "esign_required": true,
  "read_only": false,  
}];
export const saveOpenTabsForm=[
  {
    "name": "SET_DEFAULT_TABS_ON_LOGIN",
    "label_en": "Save Open Tabs", "label_es": "Guardar Pestañas Actuales",
    "type": "button",
    "icon_name": "icons:restore-page", "icon_color": "aqua",
    "esign_required": false,
    "read_only": false,  
  }];  
