const v = [ 
    { "query_name":"Mi consulta 2",     
    "owner":"12",     "scope":"GLOBAL",     "name":"QUERY_SAMPLING_HISTORY", 
    "label_en":"All Sampling History", "label_es":"Histórico Todas Muestras",
       "arguments":[     {"name":"sampleGroups", "type":"text", "label_en":"Groups", "label_es":"Grupos",
        "password": "false", 
        "value": "area, spec_code,sample_config_code*counter_by_area_spec_tmp|area*counter_by_area|has_pre_invest*counter_out|spec_eval*counter_range_eval|has_invest*counter_investigations|has_pre_invest, has_invest*counter_pre_and_invest*pie*Deviation & Investigation*Desviaciones e Investigaciones", 
        "read_only": "false"},
           ],   
    }]
           
           //"otherCharts":[         {display_chart: true,     chart_type:'line',     chart_name:'datatable',     chart_title:{label_en:'Trending', label_es:'Tendencia'},     counter_field_name:'raw_value_num',     counterLimits:{       //min_allowed: 3,       //min_allowed_included:3,       //max_allowed:100,       //max_allowed_included:100,       //value:0,     },     grouper_field_name:'sampling_date',     grouper_exclude_items:['Samplingzz','Incubationzz','PlateReadingzz','MicroorganismIdentificationzz','zz','END'],     label_item:{label_en:'Statussss', label_es:'Estado'},     label_value:{label_en:'#', label_es:'#'},     }             ]   } } ]