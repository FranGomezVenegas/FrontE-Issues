import {personal_smp_template} from './../config-process';

export const pendingDecisionWindowDefinition={
  tableHdrFlds:[
    , {name: 'result_id', label_en:'Result', label_es: 'Resultado', sort:false, filter:true, width:"10%"}
    , {name: 'sample_id', label_en:'Sample', label_es: 'Muestra', sort:false, filter:true, width:"10%"}
    , {name: 'created_on', label_en:'Creation', label_es: 'Creada', sort:true, filter:false, width:"15%"}
    , {name: 'location_name', label_en:'Location', label_es: 'Ubicación', sort:false, filter:true, width:"15%"}
    , {name: 'method_name', label_en:'Method', label_es: 'Método', sort:false, filter:true, width:"10%"}
    , {name: 'spec_eval_detail', label_en:'Problem Detail', label_es: 'Detalle del Problema', sort:false, filter:true, width:"30%"}
    , {name: 'spec_rule_with_detail', label_en:'Spec Rule', label_es: 'Especificación', sort:false, filter:true, width:"10%"}
  ],  
  displayRefreshButton: true,
  autorefreshWindow: false,
  tableTitle:{
    display: true,
    label:{label_en:'Program Active Corrective Actions', label_es:'Acciones correctivas aún activas del programa'}
  },
  displayButtons: true,  
    buttons:[          
      {
        "name": "NEW_INVESTIGATION",
        "label_en": "Create Investigation", "label_es": "Crear Investigación",
        "type": "button",
        "read_only": false,
        "esign_required": false,
        "requires_selected_object": true,        
      }, 
      {
        "name": "ADD_INVEST_OBJECTS",
        "label_en": "Add to Investigation", "label_es": "Añadir a Investigación",
        "type": "button",
        "read_only": false,
        "esign_required": false,
        "requires_selected_object": true,        
      }, 	                                                                             
    ]  
  };
const documentContainerEmDemoASampleMicroorganism = document.createElement('em-demo-a-pending-decision-style');
documentContainerEmDemoASampleMicroorganism.setAttribute('style', 'display: none;');

documentContainerEmDemoASampleMicroorganism.innerHTML = `
  <dom-module id="em-demo-a-pending-decision-style">
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
      display: flex;
      align-items: center;      
    } 
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoASampleMicroorganism);