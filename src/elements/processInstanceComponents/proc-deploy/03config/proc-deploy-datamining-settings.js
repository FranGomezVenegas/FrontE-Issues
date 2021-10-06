export const defaultChartType='pie';
export const myQueries=[  
  { query_name:'Mi consulta',
    owner:'12',
    scope:'GLOBAL',
    name:'QUERY_SAMPLING_HISTORY', label_en:'All Sampling History', label_es:'Histórico Todas Muestras',
  arguments:[
    {name:'sampleGroups', type:'text', label_en:'Groups', label_es:'Grupos', "password": "false", "value": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest*pie*Deviation & Investigation*Desviaciones e Investigaciones", "read_only": false},
    {name:'lotName', type:'text', label_en:'Production Lot', label_es:'Lote Producción'},
  ],
  otherCharts:[    
    {display_chart: true,
    chart_type:'line',
    chart_name:'datatable',
    chart_title:{label_en:'Trending', label_es:'Tendencia'},
    counter_field_name:'raw_value_num',
    counterLimits:{
      //min_allowed: 3,
      //min_allowed_included:3,
      //max_allowed:100,
      //max_allowed_included:100,
      //value:0,
    },
    grouper_field_name:'sampling_date',
    grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
    label_item:{label_en:'Statussss', label_es:'Estado'},
    label_value:{label_en:'#', label_es:'#'},
    }          
  ]
  },
  { query_name:'Mi Segunda consulta',
    owner:'1',
    scope:'PRIVATE',
    name:'QUERY_SAMPLING_HISTORY', label_en:'All Sampling History', label_es:'Histórico Todas Muestras',
  arguments:[
    {name:'sampleGroups', type:'text', label_en:'Groups', label_es:'Grupos', "password": "false", "value": "has_pre_invest, has_invest*counter_pre_and_invest*pie*Deviation & Investigation*Desviaciones e Investigaciones", "read_only": false},
    {name:'samplingDayEnd', type:'date', label_en:'Sampling Day End', label_es:'F. Muestreo, Hasta'},
  ],
  otherCharts:[    
    {display_chart: true,
    chart_type:'line',
    chart_name:'datatable',
    chart_title:{label_en:'Trending', label_es:'Tendencia'},
    counter_field_name:'raw_value_num',
    counterLimits:{
      //min_allowed: 3,
      //min_allowed_included:3,
      //max_allowed:100,
      //max_allowed_included:100,
      //value:0,
    },
    grouper_field_name:'sampling_date',
    grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
    label_item:{label_en:'Statussss', label_es:'Estado'},
    label_value:{label_en:'#', label_es:'#'},
    }          
  ]
  }
];
export const queries=[
  {name:'QUERY_SAMPLING_HISTORY', label_en:'All Sampling History', label_es:'Histórico Todas Muestras',
  arguments:[
    {name:'samplingDayStart', type:'date', label_en:'Sampling Day Start', label_es:'F. Muestreo, Desde'},
    {name:'samplingDayEnd', type:'date', label_en:'Sampling Day End', label_es:'F. Muestreo, Hasta'},
    {name:'loginDayStart', type:'date', label_en:'Login Day Start', label_es:'F. Registro, Desde'},
    {name:'loginDayEnd', type:'date', label_en:'Login Day End', label_es:'F. Registro, Hasta'},
    {name:'includeSamples', "type": "boolean", label_en:'Include Samples', value:true, label_es:'Incluir muestras'},
    {name:'includeSamplerSamples', "type": "boolean", label_en:'Include Sampler Samples', label_es:'Incluir muestras personal'},
    {name:'excludeReadingNotEntered', "type": "boolean", label_en:'Exclude Not Closed', label_es:'Excluir no cerrados'},
    {name:'readingEqual', "type": "integer", label_en:'Reading Equal', label_es:'Lectura igual a'},
    {name:'readingMin', "type": "integer", label_en:'Reading Min', label_es:'Lectura Min'},
    {name:'readingMax', "type": "integer", label_en:'Reading Max', label_es:'Lectura Máx'},
    {name:'includeMicroorganisms', "text": "boolean", label_en:'Include MicroOrganism', label_es:'Incluir MicroOrganismo'},
    {name:'MicroorganismsToFind', "text": "boolean", label_en:'MicroOrg To Find', label_es:'MicroOrg a encontrar'},
    {name:'sampleGroups', type:'text', label_en:'Groups', label_es:'Grupos', "password": "false", "value": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest", "read_only": false},
  ]},
  {name:'QUERY_SAMPLER_SAMPLING_HISTORY', label_en:'Sampler Sampling History', label_es:'Histórico Muestras Personal',
  arguments:[
    {name:'samplingDayStart', type:'date', label_en:'Sampling Day Start', label_es:'F. Muestreo, Desde'},
    {name:'samplingDayEnd', type:'date', label_en:'Sampling Day End', label_es:'F. Muestreo, Hasta'},
    {name:'loginDayStart', type:'date', label_en:'Login Day Start', label_es:'F. Registro, Desde'},
    {name:'loginDayEnd', type:'date', label_en:'Login Day End', label_es:'F. Registro, Hasta'},
    {name:'includeSamples', "type": "boolean", label_en:'Include Samples', value:true, label_es:'Incluir muestras'},
    {name:'includeSamplerSamples', "type": "boolean", label_en:'Include Sampler Samples', label_es:'Incluir muestras personal'},
    {name:'excludeReadingNotEntered', "type": "boolean", label_en:'Exclude Not Closed', label_es:'Excluir no cerrados'},
    {name:'readingEqual', "type": "integer", label_en:'Reading Equal', label_es:'Lectura igual a'},
    {name:'readingMin', "type": "integer", label_en:'Reading Min', label_es:'Lectura Min'},
    {name:'readingMax', "type": "integer", label_en:'Reading Max', label_es:'Lectura Máx'},
    {name:'includeMicroorganisms', "text": "boolean", label_en:'Include MicroOrganism', label_es:'Incluir MicroOrganismo'},
    {name:'MicroorganismsToFind', "text": "boolean", label_en:'MicroOrg To Find', label_es:'MicroOrg a encontrar'},
    {name:'sampleGroups', type:'text', label_en:'Groups', label_es:'Grupos', "password": "false", "value": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest", "read_only": false},
  ]},  
  {name:'KPI_PRODUCTION_LOT_SAMPLES', label_en:'Production Lot Samples', label_es:'Muestras Lote Producción',
  arguments:[
    {name:'samplingDayStart', type:'date', label_en:'Sampling Day Start', label_es:'F. Muestreo, Desde'},
    {name:'samplingDayEnd', type:'date', label_en:'Sampling Day End', label_es:'F. Muestreo, Hasta'},
    {name:'loginDayStart', type:'date', label_en:'Login Day Start', label_es:'F. Registro, Desde'},
    {name:'loginDayEnd', type:'date', label_en:'Login Day End', label_es:'F. Registro, Hasta'},
    {name:'includeSamples', "type": "boolean", label_en:'Include Samples', value:true, label_es:'Incluir muestras'},
    {name:'includeSamplerSamples', "type": "boolean", label_en:'Include Sampler Samples', label_es:'Incluir muestras personal'},
    {name:'excludeReadingNotEntered', "type": "boolean", label_en:'Exclude Not Closed', label_es:'Excluir no cerrados'},
    {name:'readingEqual', "type": "integer", label_en:'Reading Equal', label_es:'Lectura igual a'},
    {name:'readingMin', "type": "integer", label_en:'Reading Min', label_es:'Lectura Min'},
    {name:'readingMax', "type": "integer", label_en:'Reading Max', label_es:'Lectura Máx'},
    {name:'includeMicroorganisms', "text": "boolean", label_en:'Include MicroOrganism', label_es:'Incluir MicroOrganismo'},
    {name:'MicroorganismsToFind', "text": "boolean", label_en:'MicroOrg To Find', label_es:'MicroOrg a encontrar'},
    {name:'sampleGroups', type:'text', label_en:'Groups', label_es:'Grupos', "password": "false", "value": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest", "read_only": false},
  ]},  
  {name:'QUERY_READING_OUT_OF_RANGE', label_en:'Out of Range Readings', label_es:'Lecturas fuera Rango',
  arguments:[
    {name:'samplingDayStart', type:'date', label_en:'Sampling Day Start', label_es:'F. Muestreo, Desde'},
    {name:'samplingDayEnd', type:'date', label_en:'Sampling Day End', label_es:'F. Muestreo, Hasta'},
    {name:'loginDayStart', type:'date', label_en:'Login Day Start', label_es:'F. Registro, Desde'},
    {name:'loginDayEnd', type:'date', label_en:'Login Day End', label_es:'F. Registro, Hasta'},
    {name:'includeSamples', "type": "boolean", label_en:'Include Samples', value:true, label_es:'Incluir muestras'},
    {name:'includeSamplerSamples', "type": "boolean", label_en:'Include Sampler Samples', label_es:'Incluir muestras personal'},
    {name:'excludeReadingNotEntered', "type": "boolean", label_en:'Exclude Not Closed', label_es:'Excluir no cerrados'},
    {name:'readingEqual', "type": "integer", label_en:'Reading Equal', label_es:'Lectura igual a'},
    {name:'readingMin', "type": "integer", label_en:'Reading Min', label_es:'Lectura Min'},
    {name:'readingMax', "type": "integer", label_en:'Reading Max', label_es:'Lectura Máx'},
    {name:'includeMicroorganisms', "text": "boolean", label_en:'Include MicroOrganism', label_es:'Incluir MicroOrganismo'},
    {name:'MicroorganismsToFind', "text": "boolean", label_en:'MicroOrg To Find', label_es:'MicroOrg a encontrar'},
    {name:'sampleGroups', type:'text', label_en:'Groups', label_es:'Grupos', "password": "false", "value": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest", "read_only": false},
  ]},
  {name:'QUERY_INVESTIGATION', label_en:'Investigations', label_es:'Investigaciones',
  arguments:[
    {name:'excludeNotClosedYet', "type": "boolean", label_en:'Exclude Not Closed', label_es:'Excluir no cerrados'},
    {name:'creationDayStart', type:'date', label_en:'Creation Day Start', label_es:'F. Creación, Desde'},
    {name:'creationDayEnd', type:'date', label_en:'Creation Day End', label_es:'F. Creación, Hasta'},
    {name:'closureDayStart', type:'date', label_en:'Closure Day Start', label_es:'F. Cierre, Desde'},
    {name:'closureDayEnd', type:'date', label_en:'Closure Day End', label_es:'F. Cierre, Hasta'},
    {name:'investigationGroups', "type":"text", "password": "false", "value": "", "read_only": false, label_en:'Groups', label_es:'Grupos'},
  ]},
]
export const queryOutputDefinition={
  windowTitle:{label_en:'Home page for Environmental Monitoring prcocess Demo A ', label_es:'Página de inicio para el proceso de Monitoreo Medioambiental Demo A'},
  fieldToDisplay:[
    , {name: 'result_id', label_en:'Result', label_es: 'Resultado', sort:false, filter:true, width:"10%"}
    , {name: 'created_on', label_en:'Creation', label_es: 'Creada', sort:true, filter:false, width:"15%"}
    , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:"15%"}
    , {name: 'method_name', label_en:'Method', label_es: 'Método', sort:false, filter:true, width:"10%"}
    , {name: 'spec_eval_detail', label_en:'Problem Detail', label_es: 'Detalle del Problema', sort:false, filter:true, width:"30%"}
    , {name: 'spec_rule_with_detail', label_en:'Spec Rule', label_es: 'Especificación', sort:false, filter:true, width:"10%"}
  ],  
  displayRefreshButton: false,
  autorefreshWindow: false,
  tableTitle:{
    display: true,
    label:{label_en:'Query result', label_es:'Resultado de la consulta'}
  },
  kpiCharts:[
    {
      display_chart: true,
      chart_type:'pie',
      chart_name:'counter_out',
      chart_title:{label_en:'Range', label_es:'Rango'},
      counter_field_name:'count',
        counterLimits:{
          min_allowed: 0,
      //   min_allowed_included:3,
          max_allowed:200,
      //   max_allowed_included:100,
      //   value:0,
       },
      grouper_field_name:'has_pre_invest',
      grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
      label_item:{label_en:'Area', label_es:'Area'},
      label_value:{label_en:'#', label_es:'#'},
    },
    {
      display_chart: true,
      chart_type:'pie',
      chart_name:'counter_range_eval',
      chart_title:{label_en:'Evaluation Counter', label_es:'Por tipo de evaluación'},
      counter_field_name:'count',
      counterLimits:{
        //min_allowed: 3,
        //min_allowed_included:3,
        //max_allowed:100,
        //max_allowed_included:100,
        //value:0,
      },
      grouper_field_name:'spec_eval',
      grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
      label_item:{label_en:'Statussss', label_es:'Estado'},
      label_value:{label_en:'#', label_es:'#'},
    },
  ],
  charts:[
    {
      display_chart: true,
      chart_type:'pie',
      chart_name:'counter_range_eval',
      chart_title:{label_en:'Evaluation Counter', label_es:'Por tipo de evaluación'},
      counter_field_name:'count',
      counterLimits:{
        //min_allowed: 3,
        //min_allowed_included:3,
        //max_allowed:100,
        //max_allowed_included:100,
        //value:0,
      },
      grouper_field_name:'spec_eval',
      grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
      label_item:{label_en:'Statussss', label_es:'Estado'},
      label_value:{label_en:'#', label_es:'#'},
    },
    {
      display_chart: true,
      chart_type:'line',
      chart_name:'sampleStatsLastNresults',
      chart_title:{label_en:'Last n-results', label_es:'Últimos n-resultados'},
      counter_field_name:'raw_value',
      counterLimits:{
        min_allowed: 3,
        min_allowed_included:3,
        max_allowed:100,
        max_allowed_included:100,
        value:0,
      },     
      grouper_field_name:'sample_id',
      grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
      label_item:{label_en:'Statussss', label_es:'Estado'},
      label_value:{label_en:'#', label_es:'#'},
    },
  ],
};

export const datamining_querySelectionForm=
[
    {                    
      "name": "programsList",
      "label_en": "Queries", "label_es": "Consultas",
      "type": "list",
      "value": "",
      "read_only": false,
      "items" : [{
          "keyName":"",                        
          "keyValue_en":"", "keyValue_es":""              
      }]
    },
];
export const datamining_queryButtonForm=
[
  {"name": "LOADQUERY",
    "label_en": "Load", "label_es": "Cargar",
    "type": "button",
    "value": "",
    "read_only": false,
  },
  {"name": "CREATE_SAVED_QUERY",
    "label_en": "Save", "label_es": "Guardar",
    "type": "button",
    "value": "",
    "read_only": false,
  },  
  {"name": "RUNQUERY",
    "label_en": "Run", "label_es": "Ejecutar",
    "type": "button",
    "value": "",
    "read_only": false,
  },
];

const documentContainerProcDeployBatchesStyle = document.createElement('proc-deploy-datamining-style');
documentContainerProcDeployBatchesStyle.setAttribute('style', 'display: none;');

documentContainerProcDeployBatchesStyle.innerHTML = `
  <dom-module id="proc-deploy-datamining-style">
    <template>
    <style>
    vaadingrid-lit-singleselect {
      width:55%;
    }
    p.tableTitle{
      margin-top: 0px;
      margin-bottom: 3px;
      color: #44cbe6;
      font-size:6vmin;
    }         
    div.main{
      display:flex;
      width:95%;
    }         
    div.querieslist{
      height:100%;
      width:35%;
    }
    div.queriesoutput{
      height:100%;
      width:75%;
      left-margin:0.1vw;      
    }
    div.buttonGroup {
      display: flex
    } 

    div.batchContent{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } 
    div.cardMySops{      
      flex-basis: 10%;
      height: 5vh;
      width: auto;
      font-size:3vh;
    }    
    @media (min-width:900px){
      div.batchContent{
        flex-wrap: wrap;
        display:flex;
        justify-content: space-between;
      }
    }
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerProcDeployBatchesStyle);