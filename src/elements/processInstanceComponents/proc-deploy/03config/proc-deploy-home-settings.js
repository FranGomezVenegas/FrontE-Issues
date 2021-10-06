export const programHome_sampleSummaryGaugeOptions={"width": 400, "height": 120, "redFrom": 90, "redTo": 100, "yellowFrom":75,
                                                    "yellowTo": 90, "minorTicks": 5};
export const programHome_sampleSummaryPieOptions={"title": "Samples Progress"};

export const windowDefinition={
  windowTitle:{label_en:'Home page for Environmental Monitoring prcocess Demo A ', label_es:'Página de inicio para el proceso de Monitoreo Medioambiental Demo A'},
  kpiCharts:[
    {
      display_chart: true,
      chart_type:'line',
      chart_name:'group_by_area',
      chart_title:{label_en:'Samples by area ', label_es:'Muestreo por areas'},
      counter_field_name:'numeric_value',
        counterLimits:{
          min_allowed: 0,
      //   min_allowed_included:3,
          max_allowed:200,
      //   max_allowed_included:100,
      //   value:0,
       },
      grouper_field_name:'sampling_date',
      grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],
      label_item:{label_en:'Area', label_es:'Area'},
      label_value:{label_en:'#', label_es:'#'},
    },

  ],
  charts:[
    {
      display_chart: true,
      chart_type:'pie',
      chart_name:'sampleStatCounterByStage',
      chart_title:{label_en:'In-Progress Sample Percentage ', label_es:'Porcentaje en Muestras En-Progreso'},
      counter_field_name:'COUNTER',
      counterLimits:{
        min_allowed: 3,
        min_allowed_included:3,
        max_allowed:100,
        max_allowed_included:100,
        value:0,
      },
      grouper_field_name:'current_stage',
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
const documentContainerprocDeployHomeStyle = document.createElement('proc-deploy-home-style');
documentContainerprocDeployHomeStyle.setAttribute('style', 'display: none;');

documentContainerprocDeployHomeStyle.innerHTML = `
  <dom-module id="proc-deploy-home-style">
    <template>
    <style>
    vaadin-grid {
      width:95%;
    }
    p.tableTitle{
      margin-top: 0px;
      margin-bottom: 3px;
      color: #44cbe6;
      font-size:6vmin;
    }         
    div.main{
      width:95%;
    }         
    div.buttonGroup {
      display: flex
    }      
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerprocDeployHomeStyle);