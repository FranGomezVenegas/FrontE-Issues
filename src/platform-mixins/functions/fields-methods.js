/**
 * @mixinFunction
 * @polymer
 */

export const FieldsMethods = (superClass) => class extends superClass {    
    todayYYYYMMDD() {
        var d = new Date();
        
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    fieldValueFromObject(langApp, fieldName, object) {
        var langSuffix="";
        if (langApp=="en" || langApp=="es"){
            fieldName=fieldName+'_'+langApp;
        }else{
            return 'language '+ langApp+' not recognized';
        }
//console.log('labelValue', object, fieldName, langApp);        
        if (!object){return 'object is empty';}
        if (!object[fieldName]){return ''}; //'field '+fieldName+' not found in object';} -- undefined puede ser que el campo no existe pero tb puede significar que existe con valor nulo ... por ahora devolver cadena vacía 'y a cascarla'
        return object[fieldName];
    }

    labelValue(langApp, field) {  
     //   console.log("field-methods.js", "labelValue", "langApp="+langApp, 'field=', field);
        if (!langApp || !field){
            //console.log("methods.js", "labelValue with no langApp or field recognized", 'field=', field, 'langApp=', langApp ); 
            return '';
        }
        if (langApp=="en"){
            if (field.label_en){return field.label_en;}
            if (field.message_en){return field.message_en;}
            //console.log("methods.js", "labelValue with no label_en recognized", 'field=', field, 'langApp=', langApp );            
            return '';
        }
        if (langApp=="es"){
            if (field.label_es){return field.label_es;}
            if (field.message_es){return field.message_es;}
            //console.log("methods.js", "labelValue with no label_es recognized", 'field=', field, 'langApp=', langApp );            
            return '';
        } 
        return field.label_en;
    }  
    tabLabelValue(langApp, field) {  
//        console.log("methods.js", "labelValue", "langApp="+langApp, field);
        if (!langApp || !field){
            //console.log("methods.js", "labelValue with no langApp or field recognized", 'field=', field, 'langApp=', langApp ); 
            return '';}
        if (langApp=="en"){
            if (!field.tabLabel_en){
                //console.log("methods.js", "labelValue with no label_en recognized", 'field=', field, 'langApp=', langApp ); 
                return field.name;}            
            return field.tabLabel_en;}
        if (langApp=="es"){
            if (!field.tabLabel_es){
                //console.log("methods.js", "labelValue with no label_es recognized", 'field=', field, 'langApp=', langApp ); 
                return field.name;}            
            return field.tabLabel_es;
        } 
        return field.tabLabel_en;
    }      
    labelListValue(langApp, item) {   
        //console.log("_labelListValue", langApp, valEng, valSp);
        if (langApp=="en") return item.keyValue_en;    
        if (langApp=="es") return item.keyValue_es;
        return this.field.keyValue_en;    
    }  
    confidentialMaskValue(langApp) {            
        var formValue_confidentialMaskDefault='*******';
        var formValue_confidentialMask_en='*CONFIDENTIAL*';
        var formValue_confidentialMask_es='*CONFIDENCIAL*'; 
//        console.log('confidentialMaskValue', langApp);
        if (langApp=="en") return formValue_confidentialMask_en; //'$CONFIDENTIAL$';    
        if (langApp=="es") return formValue_confidentialMask_es; //'$CONFIDENCIAL$';
        return formValue_confidentialMaskDefault; //'********';    
    }
    resetValue(){
        this.field.value='';
        this.value=''; 
    }
    focus(){
        var elem=this.shadowRoot.getElementById(this.field.name)
        if (elem){elem.focus();}
    }
    enable(){
        //console.log('field-methods.enable');
        this.shadowRoot.getElementById(this.field.name).removeAttribute("disabled")
        //this.shadowRoot.getElementById(this.field.name).read_only=false;
        //this.shadowRoot.getElementById(this.field.name).enable=true;
        //this.shadowRoot.getElementById(this.field.name).disabled=false;
    }
    disable(){
        this.shadowRoot.getElementById(this.field.name).removeAttribute("enabled")
        this.shadowRoot.getElementById(this.field.name).disabled=true;
    } 
}