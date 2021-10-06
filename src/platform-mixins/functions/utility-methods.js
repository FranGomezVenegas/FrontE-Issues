/**
 * @mixinFunction
 * @polymer
 */

export const UtilityMethods = (superClass) => class extends superClass {    
    valuePosicInArray(array, value) {
        return array.findIndex(function(field) {                    
            return value==field.name;
          });      
    }

    stringToArray(value, rowSeparator, fieldSeparator){        
        var res=[];
        var resofres=[];
        var rowArr=[];
        if (rowSeparator='\|'){res=value.split('\|');}
        else{res=value.split(rowSeparator);}
        if (fieldSeparator==undefined){return res;}
       
        var i=0;
        for (i = 0; i < res.length; i++) {
            rowArr=res[i].split("*");
            resofres[i]=rowArr;
        }
        return resofres;
    }
}