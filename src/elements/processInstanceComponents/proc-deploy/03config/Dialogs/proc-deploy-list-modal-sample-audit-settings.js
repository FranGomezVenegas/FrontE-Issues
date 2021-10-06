export const sampleAudit={
    signEnabled: true,
    signChildEnabled:true,
    fieldToRetrieve:'',
    fieldToSort:'test_id desc',
    fieldToDisplay:[
        {name:'audit_id', label_en:'ID', label_es:'ID'}
        ,{name:'action_name', label_en:'Action', label_es:'Acción'}
        ,{name:'fields_updated', label_en:'Fields Updated', label_es:'Campos Modificados'}
        ,{name:'reviewed', label_en:'Reviewed', label_es:'Revisado'}
        ,{name:'reviewed_on', label_en:'Revision Date', label_es:'Fecha Revisión'}
    ],
    displayRefreshButton: false,
    autorefreshWindow: false,
    tableTitle:{
      display: true,
      label:{label_en:'Personnel Samples Pending Microorganism Identification', label_es:'Muestras de personal pendientes de la identificación de microorganismos'}
    },
    dialogButtons:{
      displayCancelButton: false,
      displayConfirmButton: false,
      displayCloseButton: true,
    },
    displayButtons: true,
    buttons:[          
        {
            "name": "SAMPLEAUDIT_SET_AUDIT_ID_REVIEWED", //"SIGNSAMPLEAUDIT",
            "label_en": "Sign", "label_es": "Firmar",
            "type": "button",
            "read_only": false,
            "confirmuser_required": false,
            "esign_required": true,
        },   
    ]  
  };
  import {css} from "lit-element";
  export const procDeployDialogSampleAuditStyle = css `
      :root{
      }
      div.modal-content {
        position: fixed;
        z-index: 1001;
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        -moz-box-shadow: 3px 3px 5px #535353;
        -webkit-box-shadow: 3px 3px 5px #535353;       
        box-shadow: 3px 3px 5px #535353;
        -moz-border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 6px;  
        border-radius: 6px 6px 6px 6px;                
    }        
    /* The Close Button */

    div.modal-content.bgimg {
        background-image: url('./images/hexagon-white-blue-light.jpg');  
        background-size: cover; 
        width: 750px;       
    }
`;          
