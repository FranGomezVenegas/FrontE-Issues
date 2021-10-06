import {schema_name} from '../config-process';
export const windowContent={
  fields:[
    {
      "name": "incubName",
      "label_en": "Incubator", "label_es": "Incubadora",
      "type": "text",
      "password": "false",
      "value": "INC_1",
      "read_only": false
    },{
      "name": "dateFrom",
      "label_en": "Date From", "label_es": "De Fecha",
      "type": "date",
      "password": "False",
      "value": "",
      "read_only": false
    },{
      "name": "dateTo",
      "label_en": "Date To", "label_es": "A Fecha",
      "type": "date",
      "password": "false",
      "value": "",
      "read_only": false
    },{
      "name": "RunReport",
      "label_en": "Report", "label_es": "Informe",
      "type": "button",              
      "value": "",
      "read_only": false
    }     
  ],
  buttons:[          
    {
      "name": "EM_INCUBATION_ADD_TEMP_READING",
      "label_en": "New Temp Reading", "label_es": "Nueva lectura de Temperatura",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    }
  ], 
  temperatureReadingsNotFound:[{
    "name": "title",
    "label_en": "No temperature readings found", "label_es": "No encontradas lecturas de temperatura",
    "type": "title",
    "size": 'h3',
    "style": "color: var(--paper-light-blue-500);",
    "read_only": true
  }],
};
export const browserIncubatorFields={
  schemaName: 'config',
  tableName: 'Incubator',
  fieldToRetrieve:'current_stage',
  fieldsToDisplay:'ALL',
};
const documentContainerEmDemoABrowserIncubatorStyle = document.createElement('em-demo-a-browser-incubator-style');
documentContainerEmDemoABrowserIncubatorStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoABrowserIncubatorStyle.innerHTML = `
  <dom-module id="em-demo-a-browser-incubator-style">
    <template>
    <style>
    div.mainDiv{
      width:50%;
      position:relative;
      left:55px;
      border-radius: 10px;
      -moz-border-radius: 10px;
      padding:5px;
    }   
    div.filter{
      width:780px;
      border: 1px solid;
      border-color: #dbd9ca;
      border-radius: 10px;
      -moz-border-radius: 10px;
      margin:5px;
      padding:5px;
    }
    div.detailMain{
      width:780px;
      border: 1px solid;
      border-color: #dbd9ca;
      border-radius: 10px;
      -moz-border-radius: 10px;
      margin:5px;
      margin-top:20px;
      padding:5px;
    }  
    div.detailDataSection {
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-image: url('./images/hexagon-white-blue-light.jpg');
      background-repeat: no-repeat;
      background-size: cover;                  
      background-color: #fff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoABrowserIncubatorStyle);