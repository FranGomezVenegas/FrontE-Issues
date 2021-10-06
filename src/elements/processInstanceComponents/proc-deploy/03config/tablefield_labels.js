export const dataTableSample=[
    {'name':'*sample_info_title', 'label_en':'Sample Info', 'label_es':'Datos de Muestra'},
    {'name':'*sample_stage_Sampling_title', 'label_en':'Sampling Stage', 'label_es':'Etapa Muestreo'},
    {'name':'*sample_stage_Incubation_title', 'label_en':'Incubation Stage', 'label_es':'Etapa Incubación'},
    {'name':'*sample_stage_Incubation1_title', 'label_en':'First Incubation', 'label_es':'Primera Incubación'},
    {'name':'*sample_stage_Incubation2_title', 'label_en':'Second Incubation', 'label_es':'Segunda Incubación'},
    {'name':'*sample_stage_PlateReading_title', 'label_en':'Plate Reading Stage', 'label_es':'Etapa Lectura de Placa'},
    {'name':'*sample_stage_MicroorganismIdentification_title', 'label_en':'Microbial Identification Stage', 'label_es':'Etapa Identificacion Microorganismos'},
    {'name':'*value_true', 'label_en':'Yes', 'label_es':'Si'},
    {'name':'*value_false', 'label_en':'No', 'label_es':'No'},

    {'name':'current_stage', 'label_en':'Current Stage', 'label_es':'Estado Actual'},
    {'name':'program_name', 'label_en':'Program', 'label_es':'Programa'},
    {'name':'location_name', 'label_en':'Location', 'label_es':'Ubicación'},
    {'name':'sampling_date', 'label_en':'Sampling Date', 'label_es':'Fecha de Muestreo'},    

    {'name':'incubation_passed', 'label_en':'Passed', 'label_es':'¿Completado?'},
    {'name':'incubation_incubator', 'label_en':'Incubator', 'label_es':'Incubadora'},
    {'name':'incubation_batch', 'label_en':'Batch', 'label_es':'Tanda'},
    {'name':'incubation_start', 'label_en':'Started On', 'label_es':'Fecha de Inicio'},
    {'name':'incubation_end', 'label_en':'Ended On', 'label_es':'Fecha de Fin'},
    {'name':'incubation_start_temp_event_id', 'label_en':'Start Temp Id', 'label_es':'Evento de Temperatura al Iniciar'},
    {'name':'incubation_start_temperature', 'label_en':'Temp on Start', 'label_es':'Temperatura de Inicio'},
    {'name':'incubation_end_temp_event_id', 'label_en':'End Temp Id', 'label_es':'Evento de Temperatura al Finalizar'},
    {'name':'incubation_end_temperature', 'label_en':'Temp on End', 'label_es':'Temperatura de Fin'},
    {'name':'incubation2_passed', 'label_en':'Passed', 'label_es':'¿Completado?'},
    {'name':'incubation2_incubator', 'label_en':'Incubator', 'label_es':'Incubadora'},
    {'name':'incubation2_batch', 'label_en':'Batch', 'label_es':'Tanda'},
    {'name':'incubation2_start', 'label_en':'Started On', 'label_es':'Fecha de Inicio'},
    {'name':'incubation2_end', 'label_en':'Ended On', 'label_es':'Fecha de Fin'},
    {'name':'incubation2_start_temp_event_id', 'label_en':'Start Temp Id', 'label_es':'Evento de Temperatura al Iniciar'},
    {'name':'incubation2_start_temperature', 'label_en':'Temp on Start', 'label_es':'Temperatura de Inicio'},
    {'name':'incubation2_end_temp_event_id', 'label_en':'End Temp Id', 'label_es':'Evento de Temperatura al Finalizar'},
    {'name':'incubation2_end_temperature', 'label_en':'Temp on End', 'label_es':'Temperatura de Fin'},
    {'name':'raw_value', 'label_en':'Microbial Count', 'label_es':'Recuento microbiológico'},
    {'name':'microorganism_list', 'label_en':'Detected Microorganisms', 'label_es':'Lista de microorganismos detectados'},
];
export const configTableIncubator=[
    {'name':'*incubator_info_title', 'label_en':'Incubator Info', 'label_es':'Datos de Incubadora'},
    {'name':'*incubator_temp_reading_title', 'label_en':'Temperature readings during the incubation', 'label_es':'Lecturas de temperatura durante la incubación'},
    {'name':'*value_true', 'label_en':'Yes', 'label_es':'Si'},
    {'name':'*value_false', 'label_en':'No', 'label_es':'No'},
    {'name':'name', 'label_en':'Name', 'label_es':'Nombre'},
    {'name':'description', 'label_en':'Description', 'label_es':'Descripción'},
    {'name':'created_by', 'label_en':'Creator', 'label_es':'Creador'},
    {'name':'created_on', 'label_en':'Creation Date', 'label_es':'Creado El'},
    {'name':'active', 'label_en':'Currently Active', 'label_es':'¿Activo ahora?'},
];
export const dataTableBatch=
[
    {'name':'*batch_info_title', 'label_en':'Batch Info', 'label_es':'Datos de la Tanda'},
    {'name':'*batch_content_title', 'label_en':'Batch Samples Content', 'label_es':'Muestras de la tanda'},
    {'name':'*incubator_temp_reading_title', 'label_en':'Temperature readings during the incubation', 'label_es':'Lecturas de temperatura durante la incubación'},
    {'name':'*value_true', 'label_en':'Yes', 'label_es':'Si'},
    {'name':'*value_false', 'label_en':'No', 'label_es':'No'},
    {'name':'name', 'label_en':'Name', 'label_es':'Nombre'},
    {'name':'description', 'label_en':'Description', 'label_es':'Descripción'},
    {'name':'created_by', 'label_en':'Creator', 'label_es':'Creador'},
    {'name':'created_on', 'label_en':'Creation Date', 'label_es':'Creado El'},
    {'name':'active', 'label_en':'Currently Active', 'label_es':'¿Activo ahora?'},
    {'name':'completed', 'label_en':'Completed?', 'label_es':'¿Completado?'},
    {'name':'incubation_incubator', 'label_en':'Incubator', 'label_es':'Incubadora'},
    {'name':'incubation_start', 'label_en':'Started On', 'label_es':'Fecha de Inicio'},
    {'name':'incubation_end', 'label_en':'Ended On', 'label_es':'Fecha de Fin'},
];
export const dataTableProductionLot=
[
    {'name':'*production_lot_info_title', 'label_en':'Production Lot Info', 'label_es':'Datos del Lote de Producción'},
    {'name':'*sample_info_title', 'label_en':'Lot Sampled Samples', 'label_es':'Muestras muestreadas del lote'},
    {'name':'*incubator_temp_reading_title', 'label_en':'Temperature readings during the incubation', 'label_es':'Lecturas de temperatura durante la incubación'},
    {'name':'*value_true', 'label_en':'Yes', 'label_es':'Si'},
    {'name':'*value_false', 'label_en':'No', 'label_es':'No'},
    {'name':'lot_name', 'label_en':'Name', 'label_es':'Nombre'},
    {'name':'description', 'label_en':'Description', 'label_es':'Descripción'},
    {'name':'created_by', 'label_en':'Creator', 'label_es':'Creador'},
    {'name':'created_on', 'label_en':'Creation Date', 'label_es':'Creado El'},
    {'name':'active', 'label_en':'Currently Active', 'label_es':'¿Activo ahora?'},
    {'name':'completed', 'label_en':'Completed?', 'label_es':'¿Completado?'},
    {'name':'incubation_incubator', 'label_en':'Incubator', 'label_es':'Incubadora'},
    {'name':'incubation_start', 'label_en':'Started On', 'label_es':'Fecha de Inicio'},
    {'name':'incubation_end', 'label_en':'Ended On', 'label_es':'Fecha de Fin'},
];
export const configTableSpecLimits=
[
    {'name':'*rule', 'label_en':'Rule', 'label_es':'Regla'},
    {'name':'*method_and_version', 'label_en':'Method & Version', 'label_es':'Método y Versión'},
    {'name':'analysis', 'label_en':'Analysis', 'label_es':'Análisis'},
    {'name':'parameter', 'label_en':'Parameter', 'label_es':'Parámetro'},
    {'name':'variation', 'label_en':'Variation', 'label_es':'Variación'},
    {'name':'testing_group', 'label_en':'Testing Group', 'label_es':'Grupo Analítico'},
];

export const tableFieldLabel = (superClass) => class extends superClass {
    getFieldValueFromRecord(record, fieldName){
        //console.log('getFieldValueFromRecord', 'record', record);
        return record[fieldName];
    }
    getTableFieldLabel(schema, table, fieldName, language){
        var constName=schema+'Table'+table;
        //console.log(constName);
        switch(constName.toUpperCase()){
            case 'DATATABLESAMPLE':
                var tableObj = dataTableSample;
                break;
            case 'CONFIGTABLEINCUBATOR':
                var tableObj =configTableIncubator;
                break;
            case 'DATATABLEBATCH':
                var tableObj = dataTableBatch;
                break;
            case 'DATATABLEPRODUCTION_LOT':
                var tableObj = dataTableProductionLot;
                break;
            case 'CONFIGTABLESPECLIMITS':
                var tableObj = configTableSpecLimits;
                break;
            default: 
                return fieldName; 
        }
        var found = tableObj.findIndex(function(field) {                    
            return fieldName==field.name;
          });      
        if (found == -1){
            return fieldName;
        }
        if (language=="es") return tableObj[found].label_es;
        return tableObj[found].label_en;
    }
    valueTranslation(schema, table, value, language){
        var translatedValue=this.getTableFieldLabel(schema, table, '*value_'+value, language);
        if (translatedValue=='*value_'+value) return value;
        return translatedValue;
    }   
    stageTitle(schema, table, stage, language){
        return this.getTableFieldLabel(schema, table, '*sample_stage_'+stage.current_stage+'_title', language);
    }
}
