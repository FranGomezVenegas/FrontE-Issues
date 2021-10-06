import {schema_name} from '../config-process';
export const windowContent={
  fields:[
    {
      "name": "lotName",
      "label_en": "Production Lot", "label_es": "Lote de Producción",
      "type": "text",
      "password": "false",
      "value": "lote4",
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
      "name": "EM_ACTIVATE_PRODUCTION_LOT",
      "label_en": "Activate", "label_es": "Activar",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    },
    {
      "name": "EM_DEACTIVATE_PRODUCTION_LOT",
      "label_en": "Deactivate", "label_es": "Desactivar",
      "type": "icon-button",
      "icon_name": "icons:add-box",
      "read_only": false,
    }
  ], 
  charts:[
      {
        display_chart: true,
        chart_type:'pie',
        chart_name:'counter_by_status',
        chart_title:{label_en:'Samples by status', label_es:'Muestras por estado'},
        grouper_field_name:'grouper',
        label_item:{label_en:'Statussss', label_es:'Estado'},
        label_value:{label_en:'#', label_es:'#'},
      },
      {
        display_chart: true,
        chart_type:'column',
        chart_name:'counter_by_status',
        chart_title:{label_en:'Samples by status', label_es:'Muestras por estado'},
        grouper_field_name:'grouper',
        label_item:{label_en:'Statussss', label_es:'Estado'},
        label_value:{label_en:'#', label_es:'#'},
      },      
      {
        display_chart: true,
        chart_type:'line',
        chart_name:'counter_by_area_spec_tmp',
        chart_title:{label_en:'Samples Per area and type', label_es:'Muestras por area y tipo'},
        grouper_field_name:'grouper',
        label_item:{label_en:'Status', label_es:'Estado'},
        label_value:{label_en:'#', label_es:'#'},
      }
  ]
};
export const browserProdLotFields={
  schemaName: 'data',
  tableName: 'production_lot',  
  prodLotFieldToRetrieve:'ALL',
  prodLotFieldsToDisplay:'ALL',
  sampleFieldToRetrieve:'ALL',
  sampleFieldsToDisplay:'ALL', 
  //sampleWhereFieldsName:
  //sampleWhereFieldsValue:   
  sampleGroups:'area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_status',
};
const documentContainerProcDeployBrowserProdlotStyle = document.createElement('proc-deploy-browser-prodlot-style');
documentContainerProcDeployBrowserProdlotStyle.setAttribute('style', 'display: none;');

documentContainerProcDeployBrowserProdlotStyle.innerHTML = `
  <dom-module id="proc-deploy-browser-prodlot-style">
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
    chart-controller{
      height: 100px;
      width: 30em;    }
    #sampleCharts{
      display:flex;
    }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerProcDeployBrowserProdlotStyle);