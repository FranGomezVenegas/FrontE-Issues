export const ApiSettings = (superClass) => class extends superClass {  
    objectNotSelected(){
        return {
            message_en:'Please select one object',
            message_es:'Por favor, seleccione un objeto',
        }
    }    
    moduleAreaNotRecognized(moduleArea){
        return {
            message_en:'The module area '+moduleArea+' is not recognized.',
            message_es:'El area del módulo '+moduleArea+' no es reconocida.',
        }
    }          
    actionNameNotRecognized(actionName, area){
        return {
            message_en:'The action '+actionName+' is not recognized for the area '+area,
            message_es:'La acción '+actionName+' no es reconocida para el area '+area,
        }
    }          
    endpoints_returningError(){
        return{
            response_not_status_200:{
                message_en:'Response error from API',
                message_es:'Respuesta de error devuelta por la API',
            },
            response_error:{
                message_en:'Response error from API',
                message_es:'Respuesta de error devuelta por la API',
            },        
        }
    }
    endpoints_for_apiPlatform(){
        return{
        userChangePassword:{
            action_name:'USER_CHANGE_PSWD',
            mandatory_field_message:{
                message_en:'new Password field is mandatory',
                message_es:'El Campo Nueva Contraseña es obligatorio',
            }
        },
        userChangeEsign:{
            action_name:'USER_CHANGE_ESIGN',
            mandatory_field_message:{
                message_en:'new Esign field is mandatory',
                message_es:'El Campo Nueva Firma Electrónica es obligatorio',
            }
        },
    }}
    endpoints_for_apiAuthentication(){
        return{
        validateUserCredentials:{
            action_name:'TOKEN_VALIDATE_USER_CREDENTIALS',
            mandatory_field_message:{
                message_en:'User and New Password fields are mandatory for the verification.',
                message_es:'El campo Usuario y Nueva Contraseña son obligatorios para la validación.',
            }
        },
        validateEsignPhrase:{
            action_name:'TOKEN_VALIDATE_ESIGN_PHRASE',
            mandatory_field_message:{
                message_en:'Esign field is mandatory for the verification',
                message_es:'El campo Firma Electrónica es obligatorio para la validación.',
            }
        },                
        }    
    }
    // endpoints_for_apiIncidents(){
    //     return{
    //     zzzzvalidateUserCredentials:{
    //         action_name:'zzzzzzTOKEN_VALIDATE_USER_CREDENTIALS',
    //         mandatory_field_message:{
    //             message_en:'User and New Password fields are mandatory for the verification.',
    //             message_es:'El campo Usuario y Nueva Contraseña son obligatorios para la validación.',
    //         }
    //     },
    //     zzzzvalidateEsignPhrase:{
    //         action_name:'zzzzTOKEN_VALIDATE_ESIGN_PHRASE',
    //         mandatory_field_message:{
    //             message_en:'Esign field is mandatory for the verification',
    //             message_es:'El campo Firma Electrónica es obligatorio para la validación.',
    //         }
    //     },                
    //     }    
    // }
}
