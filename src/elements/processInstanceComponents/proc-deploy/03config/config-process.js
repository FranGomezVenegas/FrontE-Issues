function isTabOpn(tabsList, tabName){
  var isOpen = tabsList.find(function(curTab) {
    //console.log('tab reducer find in ', curTab.tabName, ' the value ', tabName);
    return tabName == curTab.tabName;
  });  
  //console.log('is open='+isOpen, 'tabName=', tabName); 
  if (!isOpen) return false;
  //var isOpen= tabsList.indexOf(tabName);
  //if (isOpen==-1) return false;
  return true;}

export  {isTabOpn};
export const schema_name='proc-deploy';
export const personal_smp_template='prog_pers_template';
export const prodLotActiveOnCreate='true';

export const shifts=[
  {keyName:"M1", keyValue_en:"Morning 1", keyValue_es:"Mañana 1"},
  {keyName:"M2", keyValue_en:"Morning 2", keyValue_es:"Mañana 2"},
  {keyName:"N", keyValue_en:"Night", keyValue_es:"Noche"}
];
// export const incubationMode='SAMPLE_AND_INCUBATOR';
// // SAMPLE_AND_DATE,SAMPLE_AND_INCUBATOR

// export const sampleCustodian_cocUsersListFieldToRetrieve='user_name';
// export const sampleCustodian_cocUsersListFieldToDisplay=[
//   {name: 'user_name', label_en:'Candidate', label_es: 'Candidato', sort:true, filter:false}
// //, {name: 'person_name', label_en:'Custodian', label_es: 'Custodio', sort:false, filter:true}
// //, {name: 'custodian_candidate', label_en:'Candidate', label_es: 'Candidato', sort:false, filter:true}
// //, {name: 'status', label_en:'status', label_es: 'Estado', sort:false, filter:true}
// ];
// export const sampleCustodian_cocUsersListWhereFieldsName='';
// export const sampleCustodian_cocUsersListWhereFieldsValue='';
// export const sampleCustodian_cocUsersListFieldToSort='';
// export const sampleCustodian_cocUsersListButtons=[
  
// ];

// export const sampleCustodian_cocSampleHistoryFieldToRetrieve='sample_id';
// export const sampleCustodian_cocSampleHistoryFieldToDisplay=[
//   {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:true, filter:false}
// , {name: 'custodian_name', label_en:'Custodian', label_es: 'Custodio', sort:false, filter:true}
// , {name: 'candidate_name', label_en:'Candidate', label_es: 'Candidato', sort:false, filter:true}
// , {name: 'status', label_en:'status', label_es: 'Estado', sort:false, filter:true}
// ];
// export const sampleCustodian_cocSampleHistoryWhereFieldsName='';
// export const sampleCustodian_cocSampleHistoryWhereFieldsValue='';
// export const sampleCustodian_cocSampleHistoryFieldToSort='';
// export const sampleCustodian_cocSampleHistoryButtons=[
//   {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:true, filter:false}
// ];


// export const sampleCustodian_sampleFieldToRetrieveCustodian='sample_id|status|sampling_date|sampling_comment|sample_config_code';
// export const sampleCustodian_sampleFieldToDisplayCustodian=[
//   {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:true, filter:false}
// , {name: 'status', label_en:'status', label_es: 'Estado', sort:false, filter:true}
// , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true}
// , {name: 'sampling_comment', label_en:'sampling Comment', label_es: 'Comentario Muestreo', sort:false, filter:true}
// , {name: 'sample_config_code', label_en:'Configuration', label_es: 'Configuración', sort:false, filter:true}];
// export const sampleCustodian_samplesWhereFieldsNameCustodian='status in-|custodian';
// export const sampleCustodian_samplesWhereFieldsValueCustodian='RECEIVED-INCOMPLETE-COMPLETE*String|TOKEN_internalUserID*String';
// export const sampleCustodian_sampleFieldToSortCustodian='sample_id desc';
// export const sampleCustodian_buttonsCustodian=[
//   {
//       "name": "ChangeOfCustodyStartChange",
//       "label_en": "Custody Change", "label_es": "Cambiar Custodia",
//       "type": "button",
//       "read_only": false,
//   }, 
//   {
//     "name": "ChangeOfCustodyHistory",
//     "label_en": "Custody History", "label_es": "Histórico Custodia",
//     "type": "button",
//     "read_only": false,
//   },   
// ];

// export const sampleCustodian_sampleFieldToRetrieveCandidate='sample_id|status|sampling_date|sampling_comment|sample_config_code';
// export const sampleCustodian_sampleFieldToDisplayCandidate=[
//   {name: 'sample_id', label_en:'Sample ID', label_es: 'ID Muestra', sort:true, filter:false}
// , {name: 'status', label_en:'status', label_es: 'Estado', sort:false, filter:true}
// , {name: 'sampling_date', label_en:'sampling Date', label_es: 'ID Fecha de Muestreo', sort:false, filter:true}
// , {name: 'sampling_comment', label_en:'sampling Comment', label_es: 'Comentario Muestreo', sort:false, filter:true}
// , {name: 'sample_config_code', label_en:'Configuration', label_es: 'Configuración', sort:false, filter:true}];
// export const sampleCustodian_samplesWhereFieldsNameCandidate='status in-|custodian_candidate';
// export const sampleCustodian_samplesWhereFieldsValueCandidate='RECEIVED-INCOMPLETE-COMPLETE*String|TOKEN_internalUserID*String';
// export const sampleCustodian_sampleFieldToSortCandidate='sample_id desc';
// export const sampleCustodian_buttonsCandidate=[
//   {
//       "name": "COC_CONFIRMCHANGE",
//       "label_en": "Accept CoC", "label_es": "Aceptar CoC",
//       "type": "button",
//       "read_only": false,
//   }, 
//   {
//     "name": "COC_ABORTCHANGE",
//     "label_en": "Reject CoC", "label_es": "Rechazar CoC",
//     "type": "button",
//     "confirmuser_required": false,
//     "read_only": false,
//   },   
// ];



// export const microorganism_allowAddNotOnTheList=true;
// export const microorganism_allowAddNotOnTheList_formFields=[
//   {
//     "name": "migroorganism_freetext",
//     "label_en": "New", "label_es": "Nuevo",
//     "type": "text",
//     "password": "false",
//     "value": "",
//     "read_only": false
//   },    
//   {
//     "name": "buttonNewAdhocMicroorganism",
//     "label_en": "Add Adhoc", "label_es": "Añadir Nuevo",
//     "type": "button",              
//     "value": "",
//     "read_only": false
//   },        
//   {
//     "name": "buttonNewMicroorganism",
//     "label_en": "Add", "label_es": "Añadir",
//     "type": "button",              
//     "value": "",
//     "read_only": false
//   },           
// ];
// export const microorganismList_fieldsToDisplay=[
//   {name: 'name', label_en:'name', label_es: 'Nombre', sort:false, filter:true, width:'85%'}
// ];
