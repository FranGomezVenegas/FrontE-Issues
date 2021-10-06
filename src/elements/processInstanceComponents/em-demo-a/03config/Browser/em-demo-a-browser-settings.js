import {schema_name} from '../config-process';
export const em_browser_tabs=[
  {procedure: schema_name
    ,tabConfirmUserRequired: false
    ,tabEsignRequired: false
    ,tabLabel_en: "Data Mining"
    ,tabLabel_es: "Minería Datos"
    ,name:"datamining"
    ,tabName: schema_name+"-datamining"  
    ,tabIndex:1
  } ,
  {procedure: schema_name
    ,tabConfirmUserRequired: false
    ,tabEsignRequired: false
    ,tabLabel_en: "Sample"
    ,tabLabel_es: "Muestra"
    ,name:"sample"
    ,tabName: schema_name+"-br-sample"  
    ,tabIndex:1
  } ,
  {procedure: schema_name
    ,tabConfirmUserRequired: false
    ,tabEsignRequired: false
    ,tabLabel_en: "Incubator"
    ,tabLabel_es: "Incubadora"
    ,name:"incubator"
    ,tabName: schema_name+"-br-incubator"  
    ,tabIndex:1
  } ,
  {procedure: schema_name
    ,tabConfirmUserRequired: false
    ,tabEsignRequired: false
    ,tabLabel_en: "Batch"
    ,tabLabel_es: "Tanda"
    ,name:"batch"
    ,tabName: schema_name+"-br-batch"  
    ,tabIndex:1
  } ,    
  {procedure: schema_name
    ,tabConfirmUserRequired: false
    ,tabEsignRequired: false
    ,tabLabel_en: "Production Lot"
    ,tabLabel_es: "Lote Producción"
    ,name:"prodlot"
    ,tabName: schema_name+"-br-prodlot"  
    ,tabIndex:1
  } ,    
]
export const browserHome_defaultTab = "datamining";

const documentContainerEmDemoABrowserStyle = document.createElement('em-demo-a-browser-style');
documentContainerEmDemoABrowserStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoABrowserStyle.innerHTML = `
  <dom-module id="em-demo-a-browser-style">
    <template>
    <style>
      div {            
        width: 80%;
        height: 80%;
      }
      .wrapper{
          display: flex;
      }
      paper-tab.tabItem {
          color: var(--paper-light-blue-50);
          background-color: var(--paper-light-blue-500);
      }                                              
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoABrowserStyle);