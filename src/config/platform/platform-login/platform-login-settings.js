export const appLogin_logoOnTop={
  display:true,
  url:'./images/header/trazit-removebg.png',
  };
export const appLogin_authenticationMessage={
  "connectedSuccess_singleRole":{
    "message_en":"Valid user, Starting session ... please wait",
    "message_es":"Usuario válido, iniciando sesión ... por favor espere",
  },
  "connectedSuccess":{
    "message_en":"Valid user, please proceed selecting the role",
    "message_es":"Usuario válido, por favor escoja rol",
  },
  "connectedFails":{
    "message_en":"I guess there is no user with those credentials",
    "message_es":"Me temo que el usuario o la contraseña no son correctos.",    
  }
};
export const appLogin_ribbon={
  displayRibbon:false,
  field:[{"label_en": "Draft", "label_es": "Provisional",}]
};
export const appLogin_formFields=[
    {
      "name": "title",
      "label_en": "Trace it !!!", "label_es": "¡¡ TRÁZALO !!",
      "type": "title",
      "size": 'h3',
      /* "style": "color: var(--paper-light-blue-50);", */ 
      "color": "#1676f3",
      "read_only": true
    },             
    {
      "name": "User",
      "label_en": "User", "label_es": "Usuario",
      "type": "text",
      "password": "false",
      "value": "",
      "read_only": true
    },    
    {
      "name": "password",
      "label_en": "Password", "label_es": "Contraseña",
      "type": "password",
      "password": "true",
      "value": "",
      "read_only": false,
      "showDisplayPasswordType": "Button"
    },
    {
      "name": "buttonAccess",
      "label_en": "Access", "label_es": "Entrar",
      "type": "button",              
      "value": "",
      "read_only": false
    },            
    {
      "name": "userRole",
      "label_en": "Role", "label_es": "Rol",
      "type": "list",
      "value": "Admin",
      "read_only": true,
      "items" : [{
        "keyName":"Analyst",                        
        "keyValue_en":"Analyst", "keyValue_es":"valor1"              
      }]
    },
    {
      "name": "video",
      "label_en": "Access", "label_es": "Entrar",
      "type": "icon-button",              
      "icon_name": "icons:camera-enhance", //"icons:settings-input-svideo", //"notification:ondemand-video",
      "value": "",
      "read_only": false
    },            

                        
  ];
export const appLogOut_logOutMessage={
"closedSession":{
    "message_en":"Session closed",
    "message_es":"Sesión cerrada",
},
};
  