import {personal_smp_template} from './config-process';
export const windowSettings={
    sampleFieldToRetrieve:'sample_id|program_name|location_name|sampling_date',
    samplesWhereFieldsName:'status in-|sample_config_code not in*',
    samplesWhereFieldsValue:'RECEIVED-INCOMPLETE-COMPLETE*String|'+personal_smp_template,
    sampleFieldToSort:'sample_id desc',
    addSampleAnalysis:'true',
    addSampleAnalysisFieldToRetrieve:'method_name|testing_group',
    sampleAnalysisWhereFieldsName:'testing_group',
    sampleAnalysisWhereFieldsValue:'MB*String',
    addSampleAnalysisResult:'true',
    testingGroup:'MB',
    addSampleAnalysisResultFieldToRetrieve:'method_name|testing_group|param_name|raw_value',
    //sampleAnalysisResultWhereFieldsName:'testing_group',
    //sampleAnalysisResultWhereFieldsValue:'FQ*String',
    sampleLastLevel:'RESULT',
    tableHdrFlds:[ 
      {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, width:'20%'}
      , {name: 'program_name', label_en:'Project', label_es: 'Programa', sort:false, filter:true, width:'30%'}
      , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:'30%'}
      , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true, width:'30%'}
    ],  
    displayRefreshButton: true,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'Samples Review Pending', label_es:'Muestras pendientes de revisión'}
    },
    displayButtons: true,
    buttons:[
        {
          "name": "SAMPLE_AUDIT",
          "label_en": "Sample Audit", "label_es": "Auditoría",
          "type": "button",
          "icon_name": "icons:next-week",
          "read_only": false,
          "confirmuser_required": false,
          "esign_required": false,    
        },   
        {
          "name": "REVIEWSAMPLE",
          "label_en": "Review Sample", "label_es": "Revisar Muestra",
          "type": "icon-button",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
        {
          "name": "CANCELRESULT",
          "label_en": "Cancel", "label_es": "Cancelar",
          "type": "buttonzzz",
          "icon_name": "icons:receipt",
          "read_only": false,
        },	      
      ]    
  };
const documentContainerProcDeploySampleSamplingStyle = document.createElement('proc-deploy-sample-reviewsample-style');
documentContainerProcDeploySampleSamplingStyle.setAttribute('style', 'display: none;');

documentContainerProcDeploySampleSamplingStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-reviewsample-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
        background-color: #ffffff5c;
      }
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:3vw;
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
document.head.appendChild(documentContainerProcDeploySampleSamplingStyle);