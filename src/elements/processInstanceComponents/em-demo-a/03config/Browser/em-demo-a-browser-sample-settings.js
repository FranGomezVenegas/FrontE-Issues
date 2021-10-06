import {schema_name} from '../config-process';

export const windowContent={
  fields:[{
    "name": "SampleId",
    "label_en": "Sample", "label_es": "Muestra",
    "type": "text",
    "password": "false",
    "value": "273",
    "read_only": false
    },    
    {
    "name": "RunReport",
    "label_en": "Report", "label_es": "Informe",
    "type": "button",              
    "value": "",
    "read_only": false
    }],
    goToStageTabButton:{
      "name": "buttonAccess",
      "label_en": "Go", "label_es": "Ir",
      "type": "button",              
      "value": "",
      "read_only": false
    }
};
export const browserSampleFields={
  schemaName: 'data',
  tableName: 'Sample',
  fieldToRetrieve:'ALL',
  fieldsToDisplay:'current_stage|program_name|location_name|product_lot|shift',
};

const documentContainerEmDemoABrowserSampleStyle = document.createElement('em-demo-a-browser-sample-style');
documentContainerEmDemoABrowserSampleStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoABrowserSampleStyle.innerHTML = `
  <dom-module id="em-demo-a-browser-sample-style">
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
document.head.appendChild(documentContainerEmDemoABrowserSampleStyle);