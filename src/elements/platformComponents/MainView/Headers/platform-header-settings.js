import {Incidents_ManagementTab, User_UserProfileTab, Procedures_ProcedureManagement} from '../../Tabs/tabs-settings';
export const platformHeader_personFieldsName='';//'first_name|last_name|photo';
export const platformHeaderFields={ 
    ribbonDisplay:false,
    ribbonField:{
        "label_en": "Draft", 
        "label_es": "Provisional", 
        "color": "aqua"
    },
    fieldsLeftDisplay: true,
    fieldsLeft:[
      {"name": "labplanet_logo",
      "source": "./images/header/labplanet.png",
      "aligned": "center",
      "label_en": "User", "label_es": "Usuario",
      "type": "logo-circle",
      "password": "False",
      "value": "labplanet",
    "float": "left",
    "read_only": true
    } ,  
    {
    "name": "customer_logo",
    "source": "./images/header/homeLab.png",
    "aligned": "center",
    "label_en": "User", "label_es": "Usuario",
    "type": "logo-circle",
    "password": "False",
    "value": "labplanet",
    "read_only": true
    }
  ],
   fieldsCenterDisplay: true,
  fieldsCenter:[
  // {
  //   "name": "labplanet_title",
  //   "source": "./images/platform-login/labplanet.png",
  //   "aligned": "center",
  //   "label_en": "LabPLANET, New Lab Solutions era", "label_es": "LabPLANET, Nueva era para tu Lab",
  //   "type": "zzzgoogle-fonts",
  //   "font_family": "Annie Use Your Telescope",
  //   "font_size": '42px',
  //   "margin-top": '0px',
  //   "margin-bottom": '0px',
  //   "color": '#4285f4',
  //   "password": "False",
  //   "value": "labplanet",
  //   "float": "left",
  //   "read_only": true
  //   }, 
    {
    "name": "user_info",
    "aligned": "center",
    "label_en": ", Welcome", "label_es": ", Bienvenido",
    "type": "google-fonts",
    "font_family": "Annie Use Your Telescope",
    "font_size": '10px',
    "password": "false",
    "value": "labplanet",
    "float": "left",
    "read_only": true
    },                   
    {
    "name": "session_data",                    
    "aligned": "center",
    "label_en": "session data", "label_es": "datos de sesión",
    "type": "google-fonts",
    "font_family": "Annie Use Your Telescope",
    "font_size": '10px',
    "password": "False",
    "value": "labplanet",
    "float": "left",
    "read_only": true
    },
    // {
    // "name": "environment_info",                    
    // "aligned": "center",
    // "label_en": "Draft environment for customer HomeLab", "label_es": "Ambiente de desarrollo para el cliente HomeLab",
    // "type": "zzzgoogle-fonts",
    // "font_family": "Annie Use Your Telescope",
    // "font_size": '10px',
    // "password": "False",
    // "value": "labplanet",
    // "float": "left",
    // "read_only": true
    // }
  ],
  fieldsRightDisplay: true,    
  fieldsRight:[
    {
      "name": "doLogout",
      "source": "./images/header/procedure-management.png",
      "aligned": "center",
      "label_en": "Procedure", "label_es": "Proceso",
      "type": "avatar",
      "password": "False",
      "value": "",
      "read_only": false,      
    } ,      
    {
      "name": "procedure-management",
      "source": "./images/header/procedure-management.png",
      "aligned": "center",
      "label_en": "Procedure", "label_es": "Proceso",
      "type": "avatar",
      "password": "False",
      "value": "",
      "read_only": false,
      "tab": Procedures_ProcedureManagement,
      "procedure":{
        name:"procedure-management"
      }
    } ,  
    {
      "name": "incidents",
      "source": "./images/header/technical-support-computer-icons-service-support.jpg",
      "aligned": "center",
      "label_en": "Incidents", "label_es": "Incidencias",
      "type": "avatar",
      "password": "False",
      "value": "",
      "read_only": false,
      "tab": Incidents_ManagementTab,
      "procedure":{
        name:"Incidents"
      }      
    } ,  
    {
    "name": "user_avatar",
    "source": "./images/header/personNoFace.jpg",
    "aligned": "center",
    "label_en": "User", "label_es": "Usuario",
    "type": "avatar",
    "password": "False",
    "value": "",
    "read_only": false,
    "tab": User_UserProfileTab,
    "procedure":{
      name:"User"
    }      
    } ,
    {
      "name": "doLogout",
      "label_en": "Close Session", "label_es": "Cerrar Sesión",
      "type": "icon-button",
      "icon_name": "icons:exit-to-app",
      "icon_color": "#032bbc",
      "esign_required": false,
      "read_only": false,
    } ,     
  ]
 };