import {store} from './../../../store';
export const emdemoa_marc={
    app: {
        user: {
            loggedIn: true,
            appLanguage: 'es',
            partialToken: 'eyJ1c2VyREIiOiJtYXJjIiwiZVNpZ24iOiIiLCJ1c2VyREJQYXNzd29yZCI6ImF1bGluIiwidXNlcl9wcm9jZWR1cmVzIjoiW2VtLWRlbW8tYV0iLCJ0eXAiOiJKV1QiLCJhcHBTZXNzaW9uSWQiOiIiLCJhcHBTZXNzaW9uU3RhcnRlZERhdGUiOiIiLCJ1c2VyUm9sZSI6IkFkbWluIiwiYWxnIjoiSFMyNTYiLCJpbnRlcm5hbFVzZXJJRCI6IjEyIn0.eyJpc3MiOiJMYWJQTEFORVRkZXN0cmFuZ2lzSW5UaGVOaWdodCJ9.lnixbuqRq1iGdgq-WLORy8DNOXEO9w_L4H2awy4HP7Q',
            finalToken: 'eyJ1c2VyREIiOiJtYXJjIiwiZVNpZ24iOiJ2YWxlZSIsInVzZXJEQlBhc3N3b3JkIjoiYXVsaW4iLCJ1c2VyX3Byb2NlZHVyZXMiOiJbZW0tZGVtby1hXSIsInR5cCI6IkpXVCIsImFwcFNlc3Npb25JZCI6IjEzMzQyIiwiYXBwU2Vzc2lvblN0YXJ0ZWREYXRlIjoiTW9uIERlYyAwNyAyMDoxODoxNCBVVEMgMjAyMCIsInVzZXJSb2xlIjoiY29vcmRpbmF0b3IiLCJhbGciOiJIUzI1NiIsImludGVybmFsVXNlcklEIjoiMTIifQ.eyJpc3MiOiJMYWJQTEFORVRkZXN0cmFuZ2lzSW5UaGVOaWdodCJ9.kL0_DRQU23VIgejy2580nnRG8c3EnD4FZ2mRahWdp5s',
            personId: '12',
            userName: 'marc',
            pw: 'aulin',
            role: 'coordinator',
            tabsOpenOnLogin: [
              {
                tabLabel_en: 'DemoA EM-Browser',
                tabName: 'em-demo-a-browser',
                tabEsignRequired: 'false',
                tabLabel_es: 'DemoA EM-Buscador',
                tabType: 'tab',
                procedure: 'em-demo-a',
                tabConfirmUserRequired: 'false',
                lp_frontend_page_name: 'browser'
              },
              {
                tabLabel_en: 'Incubation',
                tabName: 'em-demo-a-sample-incub-batch',
                tabEsignRequired: 'false',
                tabLabel_es: 'Incubaciones',
                tabType: 'tab',
                tabConfirmUserRequired: 'true',
                procedure: 'em-demo-a',
                lp_frontend_page_name: 'sample-incub-batch'
            },            
            ],
            appProcedureList: {
            procedures: [
                {
                label_es: 'Aire (em-demo-a)',
                windowOpenableWhenNotSopCertifiedUserSopCertification: 'YES',
                icons_up: [
                    {
                    mode: 'readonly',
                    label_es: 'Buscador',
                    sop: '',
                    sops_passed: true,
                    name: 'Browser',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Browser',
                    type: 'icon-button',
                    icon_name: 'icons:search',
                    lp_frontend_page_name: 'browser',
                    esign_required: ''
                    }
                ],
                name: 'em-demo-a',
                procInstanceName: 'em-demo-a',
                definition: [
                    {
                    mode: 'readonly',
                    label_es: 'Inicio',
                    sop: 'DEMO',
                    sops_passed: true,
                    name: 'Home',
                    branch_level: 'level1',
                    sops: {
                        sop_total: 1,
                        sop_total_completed: 1,
                        sop_total_not_completed: 0,
                        sop_list: [
                        {
                            sop_name: 'DEMO',
                            sop_total_completed: true
                        }
                        ]
                    },
                    label_en: 'Home',
                    type: 'tree-list',
                    lp_frontend_page_name: 'home',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Registrar Nuevas Muestras',
                    sop: 'LOG SAMPLE',
                    sops_passed: true,
                    name: 'sampleLogin',
                    branch_level: 'level2',
                    sops: {
                        sop_total: 1,
                        sop_total_completed: 1,
                        sop_total_not_completed: 0,
                        sop_list: [
                        {
                            sop_name: 'LOG SAMPLE',
                            sop_total_completed: true
                        }
                        ]
                    },
                    label_en: 'Login New Samples',
                    type: 'tree-list',
                    lp_frontend_page_name: 'sample-login',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Procesado de Muestras',
                    sop: 'DEMO',
                    sops_passed: true,
                    name: 'samples-home',
                    branch_level: 'level2',
                    sops: {
                        sop_total: 1,
                        sop_total_completed: 1,
                        sop_total_not_completed: 0,
                        sop_list: [
                        {
                            sop_name: 'DEMO',
                            sop_total_completed: true
                        }
                        ]
                    },
                    label_en: 'Samples Procedure',
                    type: 'tree-list',
                    lp_frontend_page_name: 'person-home',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Muestreo de Muestras',
                    sop: 'RECEIVING SAMPLES',
                    sops_passed: true,
                    name: 'Sampling',
                    branch_level: 'level3',
                    sops: {
                        sop_total: 1,
                        sop_total_completed: 1,
                        sop_total_not_completed: 0,
                        sop_list: [
                        {
                            sop_name: 'RECEIVING SAMPLES',
                            sop_total_completed: true
                        }
                        ]
                    },
                    label_en: 'Samples Sampling',
                    type: 'tree-list',
                    lp_frontend_page_name: 'sample-sampling',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Incubación  ',
                    sop: '',
                    sops_passed: true,
                    name: 'Incubation',
                    branch_level: 'level3',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Samples Incubation',
                    type: 'tree-list',
                    lp_frontend_page_name: 'sample-incub-batch',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Lectura de Placas',
                    sop: '',
                    sops_passed: true,
                    name: 'PlateReading',
                    branch_level: 'level3',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Samples Plate Reading',
                    type: 'tree-list',
                    lp_frontend_page_name: 'sample-plate-reading',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Identificación de microorganismos',
                    sop: '',
                    sops_passed: true,
                    name: 'MicroOrganism',
                    branch_level: 'level3',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Microorganism Idenification',
                    type: 'tree-list',
                    lp_frontend_page_name: 'sample-microorganism',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Procesado de Muestras de Personal',
                    sop: 'DEMO',
                    sops_passed: true,
                    name: 'person-home',
                    branch_level: 'level2',
                    sops: {
                        sop_total: 1,
                        sop_total_completed: 1,
                        sop_total_not_completed: 0,
                        sop_list: [
                        {
                            sop_name: 'DEMO',
                            sop_total_completed: true
                        }
                        ]
                    },
                    label_en: 'Personal Procedure',
                    type: 'tree-list',
                    lp_frontend_page_name: 'person-home',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Muestreo',
                    sop: 'RECEIVING SAMPLES',
                    sops_passed: true,
                    name: 'Sampling_person',
                    branch_level: 'level3',
                    sops: {
                        sop_total: 1,
                        sop_total_completed: 1,
                        sop_total_not_completed: 0,
                        sop_list: [
                        {
                            sop_name: 'RECEIVING SAMPLES',
                            sop_total_completed: true
                        }
                        ]
                    },
                    label_en: 'Sampling',
                    type: 'tree-list',
                    lp_frontend_page_name: 'person-sampling',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Incubación  ',
                    sop: '',
                    sops_passed: true,
                    name: 'person-Incubation',
                    branch_level: 'level3',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Samples Incubation',
                    type: 'tree-list',
                    lp_frontend_page_name: 'sample-incub-batch',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Lectura de Placas',
                    sop: '',
                    sops_passed: true,
                    name: 'PlateReading_person',
                    branch_level: 'level3',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Plate Reading',
                    type: 'tree-list',
                    lp_frontend_page_name: 'person-plate-reading',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Identificación de microorganismos',
                    sop: '',
                    sops_passed: true,
                    name: 'MicroOrganism_person',
                    branch_level: 'level3',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Microorganism Idenification',
                    type: 'tree-list',
                    lp_frontend_page_name: 'person-microorganism',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Programas',
                    sop: '',
                    sops_passed: true,
                    name: 'programs',
                    branch_level: 'level2',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Programs',
                    type: 'tree-list',
                    lp_frontend_page_name: 'programs',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Lotes de Producción',
                    sop: '',
                    sops_passed: true,
                    name: 'productionLots',
                    branch_level: 'level2',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Production Lots',
                    type: 'tree-list',
                    lp_frontend_page_name: 'production-lot',
                    esign_required: ''
                    },
                    {
                    mode: 'readonly',
                    label_es: 'Desviaciones',
                    sop: '',
                    sops_passed: true,
                    name: 'ResultDeviation',
                    branch_level: 'level2',
                    sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                    },
                    label_en: 'Deviation',
                    type: 'tree-list',
                    lp_frontend_page_name: 'result-deviation',
                    esign_required: ''
                    }
                ],
                icons_down: [],
                label_en: 'Air (em-demo-a)',
                version: 1
                }
            ]
            },
            userInfo: {
            type: 'USER_INFO',
            data: {
                last_name: 'Aulin',
                photo: '',
                first_name: 'Marc'
            }
            },
            loading: false
        },
        session: {
            sessionId: '13342',
            userRole: 'coordinator',
            startDate: 'Mon Dec 07 20:18:14 UTC 2020'
        }
        },
        tabs: {
        tabs: [
          {
            lp_frontend_page_name: '../Tabs/VideoTutorial/videotutorial-tab.js',
            tabName: 'videotutorial-tab',
            tabLabel_en: 'Video Tutorial',
            tabLabel_es: 'Tutorial en Video',
            tabEsignRequired: 'false',
            tabConfirmUserRequired: 'true'
            },
            {
            lp_frontend_page_name: 'browser',
            tabName: 'em-demo-a-browser',
            tabLabel_en: 'DemoA EM-Browser',
            tabLabel_es: 'DemoA EM-Buscador',
            procedure: {
                name: 'em-demo-a'
            },
            tabEsignRequired: 'false',
            tabConfirmUserRequired: 'false'
            },
        ],
        tabIndex: null,
        currentTabName: 'em-demo-a-browser',
        currentTab: {
          lp_frontend_page_name: 'browser',
          tabName: 'em-demo-a-browser',
          tabLabel_en: 'DemoA EM-Browser',
          tabLabel_es: 'DemoA EM-Buscador',
          procedure: {
              name: 'em-demo-a'
          },
          tabEsignRequired: 'false',
          tabConfirmUserRequired: 'false'
      }
        },
        SOPS: {
        userName: '',
        userAllSop: [
            {
            my_sops: [
                {
                sop_name: 'LOG SAMPLE',
                brief_summary: 'Este documento describe cómo deben ser registradas las muestras en el sistema, debe tener una sección por cada tipo de muestra, por favor avisar en caso de no encontrar la sección para algún tipo de muestra',
                sopFieldsToDisplay: [
                    {
                    field_value: '2',
                    field_name: 'sop_id'
                    },
                    {
                    field_value: 'LOG SAMPLE',
                    field_name: 'sop_name'
                    },
                    {
                    field_value: '2',
                    field_name: 'sop_id'
                    },
                    {
                    field_value: 'LOG SAMPLE',
                    field_name: 'sop_name'
                    },
                    {
                    field_value: 'PASS',
                    field_name: 'status'
                    }
                ],
                file_link: 'https://drive.google.com/file/d/1HyGjBr6C6usri7h48LlEwwiH0tT8XVdj/view?usp=sharing',
                sop_id: '2',
                procedure: 'em-demo-a',
                status: 'PASS'
                },
                {
                sop_name: 'RECEIVING SAMPLES',
                brief_summary: 'Este documento describe el proceso de recepción de muestra y sus implicaciones dentro del trabajo de laboratorio',
                sopFieldsToDisplay: [
                    {
                    field_value: '3',
                    field_name: 'sop_id'
                    },
                    {
                    field_value: 'RECEIVING SAMPLES',
                    field_name: 'sop_name'
                    },
                    {
                    field_value: '3',
                    field_name: 'sop_id'
                    },
                    {
                    field_value: 'RECEIVING SAMPLES',
                    field_name: 'sop_name'
                    },
                    {
                    field_value: 'PASS',
                    field_name: 'status'
                    }
                ],
                file_link: 'https://drive.google.com/file/d/1-O09Nok5BApjAxygYMQNZeRwimhgLzYi/view?usp=sharing',
                sop_id: '3',
                procedure: 'em-demo-a',
                status: 'PASS'
                }
            ],
            columns_names: [
                {
                column_0: 'sop_id',
                column_7: 'file_link',
                column_6: 'status',
                column_5: 'sop_name',
                column_4: 'brief_summary',
                column_3: 'sop_id',
                column_2: 'procedure',
                column_1: 'sop_name'
                }
            ]
            }
        ],
        userPendingSop: [],
        procedureSops: []
        },        
}    
export const genoma1={
    app:{
        session:{
            sessionId:13309,
            startDate:'Mon Dec 07 10:43:18 UTC 2020',
            userRole:'edit'
        },
        user:{
            loggedIn: false,
            appLanguage: 'es',
            partialToken: 'eyJ1c2VyREIiOiJsYWJwbGFuZXQiLCJlU2lnbiI6IiIsInVzZXJEQlBhc3N3b3JkIjoidmFsZSIsInVzZXJfcHJvY2VkdXJlcyI6IltnZW5vbWEtMV0iLCJ0eXAiOiJKV1QiLCJhcHBTZXNzaW9uSWQiOiIiLCJhcHBTZXNzaW9uU3RhcnRlZERhdGUiOiIiLCJ1c2VyUm9sZSI6IkFkbWluIiwiYWxnIjoiSFMyNTYiLCJpbnRlcm5hbFVzZXJJRCI6IjEifQ.eyJpc3MiOiJMYWJQTEFORVRkZXN0cmFuZ2lzSW5UaGVOaWdodCJ9.I-tzkxGUloXuzftI8h4W3u0xDTzCudBoXUW3MOeERpA',
            finalToken: 'eyJ1c2VyREIiOiJsYWJwbGFuZXQiLCJlU2lnbiI6InZhbGUiLCJ1c2VyREJQYXNzd29yZCI6InZhbGUiLCJ1c2VyX3Byb2NlZHVyZXMiOiJbZ2Vub21hLTFdIiwidHlwIjoiSldUIiwiYXBwU2Vzc2lvbklkIjoiMTMzMTciLCJhcHBTZXNzaW9uU3RhcnRlZERhdGUiOiJNb24gRGVjIDA3IDExOjA4OjE2IFVUQyAyMDIwIiwidXNlclJvbGUiOiJlZGl0IiwiYWxnIjoiSFMyNTYiLCJpbnRlcm5hbFVzZXJJRCI6IjEifQ.eyJpc3MiOiJMYWJQTEFORVRkZXN0cmFuZ2lzSW5UaGVOaWdodCJ9.Sy1zgL9rZvxhBN0m0ojTX4wsj7GJxeFFOlS6xozrr74',
            personId: '1',
            userName: 'labplanet',
            pw: 'vale',
            role: 'edit',
            tabsOpenOnLogin: [
                {
                tabLabel_en: 'Genome 1-Active Projects',
                tabName: 'genoma-instancia1-project',
                tabEsignRequired: 'false',
                tabLabel_es: 'Genoma 1-Proyectos Activos',
                tabType: 'tab',
                procedure: 'genoma-instancia1',
                tabConfirmUserRequired: 'false',
                lp_frontend_page_name: 'project'
                }
            ],
            appProcedureList: {
                procedures: [
                {
                    label_es: 'Genoma 1',
                    windowOpenableWhenNotSopCertifiedUserSopCertification: '',
                    name: 'genoma-instancia1',
                    procInstanceName: 'genoma-1',
                    definition: [
                    {
                        mode: 'edit',
                        label_es: 'Inicio para Genoma 1',
                        sop: '',
                        sops_passed: true,
                        name: 'Genoma-1-Home',
                        branch_level: 'level1',
                        sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                        },
                        label_en: 'Home for Genoma 1',
                        type: 'tree-list',
                        lp_frontend_page_name: 'home',
                        esign_required: ''
                    },
                    {
                        mode: 'edit',
                        label_es: 'Proyectos Activos',
                        sop: '',
                        sops_passed: true,
                        name: 'ProjectManager',
                        branch_level: 'level-2',
                        sops: {
                        sop_list_info: 'There are no SOPS for this form',
                        sop_total: 0,
                        sop_total_completed: 0,
                        sop_total_not_completed: 0,
                        sop_list: []
                        },
                        label_en: 'Active Projects',
                        type: 'tree-list',
                        lp_frontend_page_name: 'project',
                        esign_required: ''
                    }
                    ],
                    icons_down: [],
                    label_en: 'Genome 1',
                    SopCertification: 'Disabled',
                    version: 1
                }
                ]
            },
            userInfo: {
                type: 'USER_INFO',
                data: {
                last_name: 'World',
                photo: 'resources/images/labplanet.png',
                first_name: 'LabPlanet'
                }
            },
            loading: false
        },
        tabs: {
            tabs: [
              {
                lp_frontend_page_name: 'project',
                tabName: 'genoma-instancia1-project',
                tabLabel_en: 'Genome 1-Active Projects',
                tabLabel_es: 'Genoma 1-Proyectos Activos',
                procedure: {
                  name: 'genoma-instancia1'
                },
                tabEsignRequired: 'false',
                tabConfirmUserRequired: 'false'
              }
            ],
            currentTabName: 'genoma-instancia1-project',
            currentTab: {
              lp_frontend_page_name: 'project',
              tabName: 'genoma-instancia1-project',
              tabLabel_en: 'Genome 1-Active Projects',
              tabLabel_es: 'Genoma 1-Proyectos Activos',
              procedure: {
                name: 'genoma-instancia1'
              },
              tabEsignRequired: 'false',
              tabConfirmUserRequired: 'false'
            }
        },
        SOPS: {
            userName: '',
            userAllSop: [
              {
                my_sops: [
                  {
                    sop_name: 'Modelo Datos',
                    brief_summary: null,
                    sopFieldsToDisplay: [
                      {
                        field_value: '1',
                        field_name: 'sop_id'
                      },
                      {
                        field_value: 'Modelo Datos',
                        field_name: 'sop_name'
                      },
                      {
                        field_value: '1',
                        field_name: 'sop_id'
                      },
                      {
                        field_value: 'Modelo Datos',
                        field_name: 'sop_name'
                      },
                      {
                        field_value: 'NOT_PASS',
                        field_name: 'status'
                      }
                    ],
                    file_link: 'http://docs.opencb.org/display/opencga/Data+Management?preview=/9240787/9240789/catalog_data_models_v13.png',
                    sop_id: '1',
                    procedure: 'genoma-1',
                    status: 'NOT_PASS'
                  }
                ],
                columns_names: [
                  {
                    column_0: 'sop_id',
                    column_7: 'file_link',
                    column_6: 'status',
                    column_5: 'sop_name',
                    column_4: 'brief_summary',
                    column_3: 'sop_id',
                    column_2: 'procedure',
                    column_1: 'sop_name'
                  }
                ]
              }
            ],
            userPendingSop: [
              {
                procedure_name: 'genoma-1',
                pending_sops: [
                  {
                    sop_name: 'Modelo Datos',
                    brief_summary: null,
                    sopFieldsToDisplay: [
                      {
                        field_value: '1',
                        field_name: 'sop_id'
                      },
                      {
                        field_value: 'Modelo Datos',
                        field_name: 'sop_name'
                      },
                      {
                        field_value: '1',
                        field_name: 'sop_id'
                      },
                      {
                        field_value: 'Modelo Datos',
                        field_name: 'sop_name'
                      },
                      {
                        field_value: 'NOT_PASS',
                        field_name: 'status'
                      }
                    ],
                    file_link: 'http://docs.opencb.org/display/opencga/Data+Management?preview=/9240787/9240789/catalog_data_models_v13.png',
                    sop_id: '1',
                    procedure: 'genoma-1',
                    status: 'NOT_PASS'
                  }
                ]
              }
            ],
            procedureSops: []
        },        
    }
}
import {tokenMixin} from '../../../platform-mixins/store/token-mixin';

import {userSessionMixin} from '../../../platform-mixins/store/user-session-mixin';
import { addSession } from  '../../../elements/platformComponents/Redux/actions/session_actions';
import {setPartialToken, updateFinalToken, doLogin, setUserTabsOnLogin, setAppProcedureList, userInfo, stopLoading, setAppLanguage} from '../../../elements/platformComponents/Redux/actions/app_actions';
export const sessionFakeMixin = (superClass) => class extends (userSessionMixin(tokenMixin(superClass))) {
    sessionFakeMethod(){
        var finalTokenData=[];
        finalTokenData.personId=this.autoLogin.sessionJson.app.user.personId;
        finalTokenData.partialToken=this.autoLogin.sessionJson.app.user.partialToken;
        //this.userInfoId=response.data.userInfoId;
        store.dispatch(setPartialToken(finalTokenData));        
        var finalToken=this.autoLogin.sessionJson.app.user.finalToken;
        //alert(finalToken);
        var userTabsOnLogin=this.autoLogin.sessionJson.app.user.tabsOpenOnLogin;            
        var userName=this.autoLogin.sessionJson.app.user.userName;
        var appSessionId=this.autoLogin.sessionJson.app.session.sessionId;
        var appSessionStartDate=this.autoLogin.sessionJson.app.session.startDate;
        var addSessionData={
            sessionId: appSessionId,
            userRole: this.autoLogin.sessionJson.app.session.userRole,
            startDate: appSessionStartDate,                                  
        };
        store.dispatch(addSession(addSessionData));           
        store.dispatch(updateFinalToken(finalToken));
        store.dispatch(doLogin(userName));
        store.dispatch(setUserTabsOnLogin(userTabsOnLogin));

        this.openTabsOnLogin();
        var procListData=[];
        procListData.finalToken=finalToken;
        //this.getProcedureList(procListData); 
        store.dispatch(setAppProcedureList(this.autoLogin.sessionJson.app.user.appProcedureList));           
        //this.getAPIPlatformHeader(procListData);
        store.dispatch(userInfo(this.autoLogin.sessionJson.app.user.userInfo.data));   
        //this.getSopOnStartSession(procListData);
        console.log(store.getState());
        this.authSuccess();
        this.initAppSession();
         this.getFinalToken(this.autoLogin.sessionJson.app.session.userRole);
         this.loading=false;
        store.dispatch(setAppLanguage(this.selectedLanguage));  
        store.dispatch(stopLoading());
    }
}