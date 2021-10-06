export const platformConfirmUser_windowTitle={
  label_en:"Please confirm your credentials (user & password)",
  label_es:"Por favor confirma tu identidad (usuario y contraseña)"
}
export const platformConfirmUser_notCorrectMessage={
    "now":{
    "message_en":"Validation not completed, action aborted",
    "message_es":"Validación no completada, acción abortada",},
    "dialog_cancelled":{
      "message_en":"dialog canceled, action aborted",
      "message_es":"Diálogo cancelado, acción abortada",},
    "attempts_consumed":{
        "message_en":"All attempts consumed, action aborted",
        "message_es":"Todos los intentos consumidos, acción abortada",},
    }

export const platformConfirmUser_formFields=[
    {
      "name": "userToCheck",
      "label_en": "User", "label_es": "Usuario",
      "type": "textconfirmuser",
      "password": "false",
      "value": "labplanet",
      "read_only": false
    },    
    {
      "name": "pwToCheck",
      "label_en": "Current Password", "label_es": "Contraseña Actual",
      "type": "password",
      "password": "true",
      "value": "",
      "read_only": false,
      "showDisplayPasswordType": "Button"
    },
  {
    "name": "confirmUserNote",
    "label_en": "Note", "label_es": "Nota",
    "type": "text",
    "password": "false",
    "value": "",
    "read_only": false
  }
];