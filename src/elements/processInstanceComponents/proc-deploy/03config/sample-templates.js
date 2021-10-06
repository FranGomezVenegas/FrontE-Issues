export const sample_templates=
[
    {
        "name": "sampleTemplate",
        "definition": [
            {
                "name": "sampleTemplate",
                "version": 1,
                "title_en": "The template for US",
                "title_es": "La plantilla para USA",
                "fields": [
                    {
                        "name": "sampling_date",
                        "label_en": "Sampling Date",
                        "label_es": "Fecha Muestreo",
                        "type": "date",
                        "dbType": "date",
                        "value": "",
                        "read_only": false
                    },
                    {
                        "name": "sampling_comment",
                        "label_en": "Sampling Comment",
                        "label_es": "Nota del Muestreo",
                        "type": "text",
                        "password": "false",
                        "dbType": "String",
                        "value": "",
                        "read_only": false
                    },
                    {
                        "name": "logButton",
                        "label_en": "Log",
                        "label_es": "Registrar",
                        "type": "button",
                        "dbType": "none",
                        "value": "",
                        "read_only": false
                    },                    
                ]
            }
        ]
    },
    {
        "name": "specSamples",
        "definition": [
            {
                "title_es": "La plantilla de productos para USA",
                "version": 1,
                "title_en": "The products template for US",
                "name": "specSamples",
                "fields": [
                    {
                        "read_only": false,
                        "name": "sampling_date",
                        "dbType": "date",
                        "label_es": "Fecha",
                        "value": "",
                        "label_en": "Date",
                        "type": "date"
                    },
                    {
                        "read_only": true,
                        "name": "sampling_comment",
                        "dbType": "String",
                        "label_es": "Nota del Muestreo",
                        "value": "",
                        "label_en": "Sampling Comment",
                        "password": "false",
                        "type": "text"
                    },
                    {
                        "read_only": false,
                        "name": "spec_code",
                        "dbType": "String",
                        "label_es": "Especificación",
                        "value": "spec",
                        "label_en": "Specification",
                        "password": "false",
                        "type": "list",
                        "items" : [{
                            "keyName":"spec",                        
                            "keyValue_en":"spec", "keyValue_es":"espec"              
                        }]                        
                    },
                    {
                        "read_only": false,
                        "name": "spec_variation_name",
                        "dbType": "String",
                        "label_es": "Variación",
                        "value": "",
                        "label_en": "Variation",
                        "password": "false",
                        "type": "list",
                        "items" : [{
                            "keyName":"VARIATION1",                        
                            "keyValue_en":"VARIATION1", "keyValue_es":"VARIACION1"              
                        }] 
                    },
                    {
                        "read_only": true,
                        "name": "spec_code_version",
                        "dbType": "Integer",
                        "label_es": "Versión",
                        "value": "1",
                        "label_en": "Version",
                        "password": "false",
                        "type": "integer"
                    },                    
                    {
                        "read_only": false,
                        "name": "logButton",
                        "dbType": "none",
                        "label_es": "Registrar",
                        "value": "",
                        "label_en": "Log",
                        "type": "button"
                    },                    
                ]
            }
        ],        
    }
];