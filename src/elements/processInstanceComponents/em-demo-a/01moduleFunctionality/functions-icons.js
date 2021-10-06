
export const iconsMethods = (superClass) => class extends superClass {    
    getIconPath(field, item){
        field.icon_name='icons:next-week';
        console.log('getIconPath', 'field', field);
        return field;
        if (!item){
            console.log('getIconPath with no item. Fld=', field);
            return;}
        if (field.name=='spec_eval'){return this.resultSpecEval(field, item);}
        return '';
    }
    resultSpecEval(field, item){
        console.log('resultSpecEval', 'item', item,'field', field);
        return '../03config/icons/result/spec_eval/'+field.spec_eval+'gif';
        //if (field.spec_eval=="OUT_SPEC_MAX"){}
    }
}