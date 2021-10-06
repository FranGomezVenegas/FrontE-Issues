import {css} from "lit-element";
import {Incidents_ManagementTab, User_UserProfileTab, User_VideoTutorialTab, Procedures_ProcedureManagement} from '../../Tabs/tabs-settings';
export const platformHeaderFields={ 
  ribbonDisplay:false,
  ribbonField:{
      "label_en": "Draft", 
      "label_es": "Provisional", 
      "color": "aqua"
  },
  notificationsOption: {
    display: true, 
    tab:{ 
      tabName: 'notificationsHeaderButton',
      tabLabel_en: 'Notifications', tabLabel_es: 'Notificaciones'},    
      procedure:'procedure',
      tabEsignRequired: false, tabConfirmUserRequired: true,
      read_only:true,      
  },
  proceduresOption: {
    display: true, 
    tab:{ 
      tabName: 'proceduresHeaderButton',
      tabLabel_en: 'Procedures', tabLabel_es: 'Procesos'},    
      procedure:'procedure',
      tabEsignRequired: false, tabConfirmUserRequired: true,
      read_only:true,      
  },  
  personalOption: {
    display: true, 
    tab:{ 
      tabName: 'personalHeaderButton',
      tabLabel_en: 'My Settings', tabLabel_es: 'Mi Espacio'},    
      procedure:'procedure',
      tabEsignRequired: false, tabConfirmUserRequired: true,
      read_only:true,      
    options:[
      {
        "name": "procedure-management",
        "source": "./images/header/procedure-management.png",
        "aligned": "center",
        "label_en": "Procedure", "label_es": "Proceso",
        "type": "avatar",
        display_label:true,
        "password": "False",
        "value": "",
        "read_only": false,
        "tab": Procedures_ProcedureManagement,
        "procedure":{name:"procedure-management"}        
      } ,  
      {
        "name": "incidents",
        "source": "./images/header/technical-support-computer-icons-service-support.jpg",
        "aligned": "center",
        "label_en": "Incidents", "label_es": "Incidencias",
        "type": "avatar",
        display_label:true,
        "password": "False",
        "value": "",
        "read_only": false,
        "tab": Incidents_ManagementTab,
        "procedure":{name:"Incidents"}      
      } ,  
      {
      "name": "user_avatar",
      "source": "./images/header/personNoFace.jpg",
      "aligned": "center",
      "label_en": "User", "label_es": "Usuario",
      "type": "avatar",
      display_label:true,
      "password": "False",
      "value": "",
      "read_only": false,
      "tab": User_UserProfileTab,
      "procedure":{name:"User"}      
      },
      {
        "name": "user_avatar",
        "source": "./images/header/videoTutorial.png",
        "aligned": "center",
        "label_en": "Video Tutorial", "label_es": "Tutorial en Video",
        "type": "avatar",
        display_label:true,
        "password": "False",
        "value": "",
        "read_only": false,
        "tab": User_VideoTutorialTab,
        "procedure":{name:"VideoTutorial"}      
      },
      {
        "name": "doLogout",
        "label_en": "Close Session", "label_es": "Cerrar Sesión",
        "type": "icon-button",
        "icon_name": "icons:exit-to-app",
        "source": "icons:exit-to-app",
        "icon_color": "#032bbc",
        "esign_required": false,
        "read_only": false,
      } ,     
  ]},
  sopOption: {
    display: true, 
    tab:{ 
      tabName: 'sopHeaderButton',
      tabLabel_en: 'My Sops', tabLabel_es: 'Mis PNTs'},    
      procedure:'sop',
      tabEsignRequired: false, tabConfirmUserRequired: true,
      read_only:true,      
    options:[
    ]
  },
  fieldsLeftDisplay: true,
  fieldsLeft:[
    {"name": "labplanet_logo",
    "source": "./images/header/LOGO_GIF_OK_AZUL_1", //labplanet.png",
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
export const platformHeadertwoStyle = css `
        :root{
          --platform-background-image:'./images/hexagon-white-blue-light.jpg';
          --header-right-width:120px;
          --nav-ul-ul-ul-li-width:20vmax;
        }
        p.sessioninfo {color: #2ec3ec;
          font-size:0.95vmax;
        }
        nav.n{
          width: 100%;
          background-color:rgba(177,242,244,.65); /*#69e;*/
        }   
        nav:after{
          content: '';
          clear: both;
          display: table;
        }
        div.main{
          background-color:#d6e9f8; /* rgba(177,242,244,.65); */ /*#69e;*/
          display: flex;
          /*justify-content: space-between;*/
          align-items: center;
        }
        div.left {
          display: flex;
          align-items: flex-start;
        }
        div.center{

        }
        div.right{
         

        }
      .item{
        display: flex;
        align-items: flex-start;
        flex-basis: auto;
      }



        nav{
          width: 100%;
          /* background-color:rgba(177,242,244,.65); */ /*#69e;*/

          display: flex;
          justify-content: space-between;
          float: left;
          color: white;
          font-size: 1vmax;
          font-weight: 600;
          /* line-height: 70px; */
          /* padding-left: 10px;*/
        }
        nav.ul{
            /* flex-wrap: wrap;*/
            /* background-color:#03a9f4; rgba(177,242,244,.65); */
            float: right;
            list-style: none;
            position: relative;
            z-index:1000;
            padding-left: 1.385vw;
        }
        nav.ul.li{
          background-color:#03a9f4; /* rgba(177,242,244,.65); */
          float: left;
          display: inline-block;
          margin: 0 0.32vmax;
          height: 2.6vmax;    
        }
        
        nav ul{
          flex-wrap: wrap;
          display: flex;
          z-index:1001;
          padding-left: 10px;
          padding-down: 10px;
        }
        nav uxl{
          flex-wrap: wrap;
          /* background-color:#03a9f4; rgba(177,242,244,.65); */
          float: right;
          list-style: none;
          position: relative;
          z-index:999999;
          padding-left: 10px;
        }
        nav ul li{
          background-color:#03a9f4; /* rgba(177,242,244,.65); */
          float: left;
          display: inline-block;
          margin: 0 0.32vmax;
          height: 2vmax;
          z-index:1002;    
          border-radius: 5px;
/*          box-shadow: 0 0 5px -1px rgb(0 0 0 / 83%);          */
          box-shadow: rgba(0, 0, 0, 0.83) 0px 0px 5px -1px;

        }

        nav.circle{
          border-radius: 0.78vmax;
        }
        nav ul li:hover > ul{
          /* top: 70px; */
          /* opacity: 1;*/
          visibility: visible;
          z-index:1002.3
        }        
        nav ul li a{
          color: #a1fdd0;
          line-height: 2vmax;
          text-decoration: none;
          font-size: 1vmax;
/*          padding-left:0.32vmax; */
/*          padding-right:0.32vmax; */
/*           padding: 0.52vmax 0.97vmax; */
           z-index:1003;
        }
        img.procedureIcons{
          aligned:center;
          height:1.8vmax;
          width:1.8vmax;          
        } 
        img.procedureIconsHidden{
          aligned:center;
          height:1.8vmax;
          width:1.8vmax;          
          visibility: hidden;
        }               
        nav ul li a:hover{
          color: var(--lumo-primary-color); /* #b1f2f4;*/
          border-radius: 0.32vmax;
          box-shadow:  0 0 0.13vmax #b1f2f4,
                       0 0 0.32vmax #b1f2f4;
                       z-index:199999922
        }
        nav ul ul li a:hover{
          box-shadow: none;
          justify-content: space-between;
          list-style-type: square;
        }
        nav ul ul{
          display: grid;
          position: absolute;
          /* top: 10px;*/
          /* /* border-top: 3px solid #b1f2f4;*/
          /* opacity: 0;*/
          visibility: hidden;
          /* transition: top .3s;*/
          padding-left:0px;          
          /* border-top: none;*/
          padding-left:0.97vmax;
          z-index:1004;
        }

        nav ul ul{
          position: absolute;
          /* top: 10px;*/
          /* /* border-top: 3px solid #b1f2f4;*/
          /* opacity: 0;*/
          visibility: hidden;
          transition: top .3s;
          padding-left:0px;          
          /* border-top: none;*/
          padding-left:0.97vmax;
          z-index:1004;
        }

        nav ul ul li{
          margin: 0 0.32vmax;
          color: transparent;
          position: relative;
          margin: 0px;
          /* width: 150px; */
          /* float: none; */
          display: list-item;
          border-bottom: 1px solid rgba(103, 95, 95, 0.3);
          padding-top: 0.1vw; 
          left: 1.3vmax;
          width: var(--nav-ul-ul-ul-li-width);
          text-align:-webkit-left;
          height: 2vmax; 
          z-index:1005;  
          border-radius: 5px;
          box-shadow:rgba(0, 0, 0, 0.83) 0px 0px 5px -1px;
        }

        #procedure{
          color: transparent;
          position: relative;
          margin: 0px;
          /* width: 150px; */
          /* float: none; */
          display: list-item;
          border-bottom: 1px solid rgba(103, 95, 95, 0.3);
          padding-top: 0.1vw;
          left: 1.3vmax;
          width: 20vmax; 
          /* height: 3vmax; */
          border-radius: 5px;
          box-shadow: 0 0 5px -1px rgb(0 0 0 / 83%);
          z-index:1005;          
        }
        #notification{
          color: transparent;
          position: relative;
          margin: 0px;
          /* width: 150px; */
          /* float: none; */
          display: list-item;
          border-bottom: 1px solid rgba(103, 95, 95, 0.3);
          padding-top: 0.1vw;
          left: -21.3vmax;
          width: 60vmax;
          /* height: 3vmax; */
          border-radius: 5px;
          box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 20%);          
          z-index:1005;          
        }
        #myspace{
          color: transparent;
          position: relative;
          margin: 0px;
          /* width: 150px; */
          /* float: none; */
          display: list-item;
          border-bottom: 1px solid rgba(103, 95, 95, 0.3);
          padding-top: 0.1vw;
          left: 1.3vmax;
          width: 20vmax; 
          /* height: 3vmax; */
          border-radius: 5px;
          box-shadow: 0 0 5px -1px rgb(0 0 0 / 83%);
          z-index:1005;          
        }        
        nav ul ul li a{
          justify-content: space-between;
          margin-left:0.13vmax;
          margin-right:0.13vmax;
          /* line-height: 50px;*/
        }
        nav ul ul ul li{
          align-items:center;
          justify-items:center;
          /* display:inline-grid; */
          display: flex;
          position: relative;
          height:2.5vmax;
          /* top: -60px; */
          /* left: 150px;*/
        }
        .show,.icon,input{
          display: none;
        }
        .fa-plus{
          font-size: 0.97vmax;
          margin-left: 2.6vmax;
        }
        @media all and (max-width: 68px) {
          nav ul{
            margin-right: 0px;
            float: left;
          }
          nav .logo{
            padding-left: 1.95vmax;
            width: 100%;
          }
          .show + a, ul{
            display: none;
          }
          nav ul li,nav ul ul li{
            display: block;
            width: 100%;
          }
          nav ul li a:hover{
            box-shadow: none;
          }
          .show{
            display: block;
            color: white;
            font-size: 1.1718vmax;
            padding: 0 1.3vmax;
            line-height: 4.557vmax;
            cursor: pointer;
          }
          .show:hover{
            color: #b1f2f4;
          }
          .icon{
            display: block;
            color: white;
            position: absolute;
            top: 0;
            right: 2.60vmax;
            line-height: 4.557vmax;
            cursor: pointer;
            font-size: 1.627vmax;
          }
          nav ul ul a{
            /*padding-left: 40px; */
          }
          nav ul ul ul a{
            padding-left: 5.20vmax;
          }
          nav ul ul ul li{
            position: static;
          }
          [id^=btn]:checked + ul{
            display: block;
          }
          nav ul ul li{
            border-bottom: 0px;
          }
          span.cancel:before{
            content: '\f00d';
          }
        }
        .content{
          z-index: -1;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          text-align: center;
        }
        header{
          font-size: 2.27vmax;
          font-weight: 600;
          padding: 10px 0;
        }
        p{
          font-size: 30px;
          font-weight: 500;
        }  
        img.formFieldLogoCircle{
          height:4.5vmax;
        }               
`;
