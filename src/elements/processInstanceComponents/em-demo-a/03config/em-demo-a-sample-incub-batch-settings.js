import {personal_smp_template} from './config-process';
export const sampleIncubBatchScreenSettings={
  displaySamplesPendingIncub1Tbl: true,
  displaySamplesPendingIncub2Tbl: true,
  displayIncubBatchesTbl: true,
  wrongIncubStageMsg:{message_en:'Sample Incubation is <*1*> and this batch is for <*2*> therefore action aborted',
      message_es:'La incubación de la muestra es <*1*> y la tanda es para <*2*> por lo que no se puede proceder'}
}  
export const sampleIncubBatchPendingIncub1={
  sampleFieldToRetrieve:'sample_id|current_stage|status|sampling_date|sampling_comment|sample_config_code|incubation_batch|incubation_start',
  samplesWhereFieldsName:'current_stage|incubation_passed',
  samplesWhereFieldsValue:'Incubation|false',
  addSampleAnalysis: true,
  addSampleAnalysisFieldToRetrieve:'',
  addSampleAnalysisResult: true,
  addSampleAnalysisResultFieldToRetrieve:'',
  sampleFieldToSort:'sample_id desc',
  tableTitle:{
    display:true,
    label:{label_en:'Samples Pending 1st Incubation', label_es:'Muestras pendiente 1ª incubación'}
  },
  displayRefreshButton:true,
  displayButtons: true,
  buttons:[  
    {
      "name": "SAMPLE_AUDIT",
      "label_en": "Sample Audit", "label_es": "Auditoría",
      "type": "button",
      "icon_name": "icons:next-week",
      "read_only": false,
    },             
    {
      "name": "EM_BATCH_INCUB_ADD_SMP",
      "label_en": "Add To Batch", "label_es": "Añadir a Tanda",
      "type": "button",
      "read_only": false,
    },             
      {
      "name": "EM_BATCH_INCUB_REMOVE_SMP",
      "label_en": "Remove from Batch", "label_es": "Quitar de Tanda",
      "type": "button",
      "read_only": false,
    },   
  ],
  gridShowColsBorder: true,
  tableHdrFlds:[
    {name: 'BatchStartedIcon', label_en:'', label_es: '',is_icon:true, iconMethod:'getSampleIncub1InProgress', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/Incubators/', sort:false, filter:true, min_width:'3.5%', width:'3.5%'},
    {name: 'sampleType', label_en:'', label_es: '',is_icon:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/Samples/', sort:false, filter:true, min_width:'3%', width:'3.5%'},    
    {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, min_width:'20%', width:'5%'}
    , {name: 'incubation_batch', label_en:'Batch', label_es: 'Tanda', sort:true, filter:false, min_width:'20%', width:'20%'}
    , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true, min_width:'20%', width:'20%'}
    , {name: 'sampling_comment', label_en:'sampling Comment', label_es: 'Comentario Muestreo', sort:false, filter:true, min_width:'20%', width:'40%'}
  ],
  tableSectionWhenHidden:{
    displaySelectedObjectData: true,
    selectedObjectData:[
      {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, min_width:'20%', width:'20%'},
      {name: 'incubation_batch', label_en:'Batch', label_es: 'Tanda', sort:true, filter:false, min_width:'20%', width:'30%'}
      ]
  },
  level2:{
    hasLevel2: false,
    label_en:'Open Tests', label_es:'Ver Ensayos',
    level1FldRoot:'child',
    isTable: true,
    tableHdrFlds:[    
      {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
    ]  
  },
  level3:{
    hasLevel3: false,
    label_en:'Open Results', label_es:'Ver Resultados',
    level1FldRoot:'child2',
    isTable: true,
    tableHdrFlds:[    
      {name: 'name', hasChild:true, iconMethod:'getSampleConfigIcon', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/', label_en:'', label_es: '',is_icon:false, sort:false, filter:true, min_width:'20%', width:'20%'},
    ]  
  },  
  displayRightMouseMenu: true,
  rightMouseButtons:[
    {
      "name": "EM_BATCH_INCUB_ADD_SMP_STAGE1",
      "label_en": "Add To Batch", "label_es": "Añadir a Tanda",
      "type": "button",
      "read_only": false,
    },             
    {
      "name": "EM_BATCH_INCUB_REMOVE_SMP_STAGE1",
      "label_en": "Remove from Batch", "label_es": "Quitar de Tanda",
      "type": "button",
      "read_only": false,
    },   
  ],
}
  export const sampleIncubBatchPendingIncub2={
    sampleFieldToRetrieve:'sample_id|current_stage|status|incubation2_batch|incubation2_start|incubation_start|incubation_end|sampling_date|sampling_comment|sample_config_code',
    samplesWhereFieldsName:'current_stage|incubation_passed',
    samplesWhereFieldsValue:'Incubation|true',
    addSampleAnalysis: true,
    addSampleAnalysisFieldToRetrieve:'',
    addSampleAnalysisResult: true,
    addSampleAnalysisResultFieldToRetrieve:'',
    sampleFieldToSort:'sample_id desc',
      tableTitle:{
      display:true,
      label:{label_en:'Samples Pending 2nd Incubation', label_es:'Muestras pendiente 2ª incubación'}
    },
    displayRefreshButton:true,
    displayButtons: true,
    buttons:[  
      {
        "name": "SAMPLE_AUDIT",
        "label_en": "Sample Audit", "label_es": "Auditoría",
        "type": "button",
        "icon_name": "icons:next-week",
        "read_only": false,
      },             
      {
        "name": "EM_BATCH_INCUB_ADD_SMP",
        "label_en": "Add To Batch", "label_es": "Añadir a Tanda",
        "type": "button",
        "read_only": false,
      },             
        {
        "name": "EM_BATCH_INCUB_REMOVE_SMP",
        "label_en": "Remove from Batch", "label_es": "Quitar de Tanda",
        "type": "button",
        "read_only": false,
      },   
    ],
    tableHdrFlds:[
      {name: 'iconCol', label_en:'', label_es: '',is_icon:true, iconMethod:'getSampleIncub2InProgress', iconsPath:'./src/elements/processInstanceComponents/em-demo-a/05images/Incubators/', sort:false, filter:true, min_width:'20%', width:'20%'},
      {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, width:'20%'},
      {name: 'incubation2_batch', label_en:'Batch', label_es: 'Tanda', sort:false, filter:false, width:'30%'},
      {name: 'incubation2_start', label_en:'incubation 2 start', label_es: 'Inicio 2a Incubacion', sort:false, filter:true, width:'20%'},
      {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true, width:'30%'},
      {name: 'incubation_incubator', label_en:'Incubator incub 1', label_es: 'Incubadora 1a Incubacion', sort:false, filter:true, width:'30%'},
      {name: 'incubation_start', label_en:'incubation 1 start', label_es: 'Inicio 1a Incubacion', sort:false, filter:true, width:'30%'},
      {name: 'incubation_end', label_en:'incubation 1 end', label_es: 'Fin 1a Incubacion', sort:false, filter:true, width:'30%'},
    ],
    tableSectionWhenHidden:{
      displaySelectedObjectData: true,
      selectedObjectData:[
        {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:false, filter:true, min_width:'20%', width:'20%'},
        {name: 'incubation_batch', label_en:'Batch', label_es: 'Tanda', sort:true, filter:false, min_width:'20%', width:'30%'}
        ]
    },
    displayRightMouseMenu: true,
    rightMouseButtons:[
      {
        "name": "EM_BATCH_INCUB_ADD_SMP_STAGE2",
        "label_en": "Add To Batch", "label_es": "Añadir a Tanda",
        "type": "button",
        "read_only": false,
      },             
      {
        "name": "EM_BATCH_INCUB_REMOVE_SMP_STAGE2",
        "label_en": "Remove from Batch", "label_es": "Quitar de Tanda",
        "type": "button",
        "read_only": false,
      },   
    ],  
}  

 


const documentContainerEmDemoASampleIncubBatch = document.createElement('em-demo-a-sample-incub-batch-style');
documentContainerEmDemoASampleIncubBatch.setAttribute('style', 'display: none;');

documentContainerEmDemoASampleIncubBatch.innerHTML = `
  <dom-module id="em-demo-a-sample-incub-batch-style">
    <template>
    <style>
      div.mainIncubBatchDiv{
        display: flex;
      }
      vaadin-grid {
        width:95%;
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
        display: flex;
        align-items: center;      
      } 
      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoASampleIncubBatch);