export const sampleStatusIconsUrl='../05-images/sampleStatus/';


export const auditDrillDownIcon=sampleStatusIconsUrl+'sampleUnreceived.png';

export const sampleStatusUNDEFINED='';
export const sampleStatusLOGGED='sampleUnreceived.png';
export const sampleStatusRECEIVED='sampleInProgress.png';
export const sampleStatusINCOMPLETE='sampleInProgress.png';
export const sampleStatusCOMPLETE='sampleComplete.png';
export const sampleStatusCANCELED='sampleCanceled.png';
export const sampleStatusREVIEWED='sampleReviewed.png';

export const sampleAnalysisStatusUNDEFINED='sampleUnreceived.png';
export const sampleAnalysisStatusLOGGED='sampleUnreceived.png';

export const sampleAnalysisResultStatusUNDEFINED='sampleUnreceived.png';
export const sampleAnalysisResultStatusLOGGED='sampleUnreceived.png';

export const sampleAnalysisResultSpecIN='sampleUnreceived.png';

export const SampleIcons = (superClass) => class extends superClass {

        
    getBatchInProgress(fld, itm){
        var iconsPath=fld.iconsPath;
        if (!itm){return;}
//        alert(itm.name+' '+itm.incubation_start);
        if (itm.incubation_start){
            return iconsPath+'IncubInProgress.gif';
        }else{
            return iconsPath+'iconTercerPrograma.jpg';
        }
    }
    getSampleIncub1InProgress(fld, itm){
        var iconsPath=fld.iconsPath;
        if (!itm){return;}
//        alert(itm.sample_id+' '+itm.incubation_start);
        if (itm.incubation_start){
            return iconsPath+'IncubInProgress.gif';
        }else{
            return iconsPath+'iconTercerPrograma.jpg';
        }
    }
    getSampleIncub2InProgress(fld, itm){
        var iconsPath=fld.iconsPath;
        if (!itm){return;}
        if (itm.incubation2_start){
            return iconsPath+'IncubInProgress.gif';
        }else{
            return iconsPath+'iconTercerPrograma.jpg';
        }
    }
    getSampleConfigIcon(fld, itm){
        var iconsPath=fld.iconsPath;
        if (!itm){return;}
//        console.log('getSampleConfigIcon', fld, 'itm', itm);
        if (itm.sample_config_code=='program_smp_template'){
            return iconsPath+'samplesIcon.png';   
        }else{
            return iconsPath+'samplePerson.png';   
        }
    }
    getSpecEvalIcon(fldValue, itm){
        //console.log('getSpecEvalIcon', fldValue, 'itm', itm);
        if (!itm || !itm.spec_eval){return 'https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg';}
        if (itm.spec_eval.toUpperCase()=="IN")
        {return 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Button_Icon_GreenForest.svg';}
        if (itm.spec_eval.toUpperCase().includes("OUT")){
            if (itm.spec_eval.toUpperCase().includes("CONTROL")){
                return 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Button_Icon_Yellow.svg';
            }else{
                return 'https://upload.wikimedia.org/wikipedia/commons/0/07/Button_Icon_Red.svg';
            }
        }
        return 'https://upload.wikimedia.org/wikipedia/commons/9/96/Button_Icon_White.svg';
    }    
    getSampleStatusIcon(fld, itm){
        var iconsPath=fld.iconsPath;
        if (!itm){return;}
//        console.log('getSampleStatusIcon', fldValue, 'itm', itm);
        var fldValue=itm.status;
        if (!fldValue){return iconsPath+sampleStatusUNDEFINED;}
        switch(fldValue){
            case 'LOGGED':
                return iconsPath+sampleStatusLOGGED;   
            case 'RECEIVED':
                    return iconsPath+sampleStatusRECEIVED; 
            case 'INCOMPLETE':
                return iconsPath+sampleStatusINCOMPLETE;                           
            case 'COMPLETE':
                return iconsPath+sampleStatusCOMPLETE; 
            case 'REVIEWED':
                    return iconsPath+sampleStatusREVIEWED;                 
            case 'CANCELED':
                    return iconsPath+sampleStatusCANCELED;                         
            default: 
                return iconsPath+sampleStatusUNDEFINED; 
        }
        //console.log('config-icons', 'getSampleStatusIcon', 'fldName', fldName);        
    }

    getSampleAnalysisStatusIcon(fldValue){
        switch(fldValue){
/*            case 'LOGGED':
                return sampleStatusIconsUrl+sampleAnalysisStatusLOGGED;   
            case 'RECEIVED':
                    return sampleStatusIconsUrl+sampleAnalysisStatusRECEIVED; 
            case 'INCOMPLETE':
                return sampleStatusIconsUrl+sampleAnalysisStatusINCOMPLETE;                           
            case 'COMPLETE':
                return sampleStatusIconsUrl+sampleAnalysisStatusCOMPLETE; 
            case 'REVIEWED':
                    return sampleStatusIconsUrl+sampleAnalysisStatusREVIEWED;                 
            case 'CANCELED':
                    return sampleStatusIconsUrl+sampleAnalysisStatusCANCELED;  */                       
            default: 
                return sampleStatusIconsUrl+sampleAnalysisStatusUNDEFINED; 
        }
        //console.log('config-icons', 'getSampleStatusIcon', 'fldName', fldName);        
    }

    getSampleAnalysisResultStatusIcon(fldValue){
        switch(fldValue){
/*            case 'LOGGED':
                return sampleStatusIconsUrl+sampleAnalysisResultStatusLOGGED;   
            case 'RECEIVED':
                    return sampleStatusIconsUrl+sampleAnalysisResultStatusRECEIVED; 
            case 'INCOMPLETE':
                return sampleStatusIconsUrl+sampleAnalysisResultStatusINCOMPLETE;                           
            case 'COMPLETE':
                return sampleStatusIconsUrl+sampleAnalysisResultStatusCOMPLETE; 
            case 'REVIEWED':
                    return sampleStatusIconsUrl+sampleAnalysisResultStatusREVIEWED;                 
            case 'CANCELED':
                    return sampleStatusIconsUrl+sampleAnalysisResultStatusCANCELED;  */                       
            default: 
                return sampleStatusIconsUrl+sampleAnalysisResultStatusUNDEFINED; 
        }
        //console.log('config-icons', 'getSampleStatusIcon', 'fldName', fldName);        
    }

    getSampleCustodianStatusIcon(fldValue){
        switch(fldValue){
/*            case 'LOGGED':
                return sampleStatusIconsUrl+sampleAnalysisResultStatusLOGGED;   
            case 'RECEIVED':
                    return sampleStatusIconsUrl+sampleAnalysisResultStatusRECEIVED; 
            case 'INCOMPLETE':
                return sampleStatusIconsUrl+sampleAnalysisResultStatusINCOMPLETE;                           
            case 'COMPLETE':
                return sampleStatusIconsUrl+sampleAnalysisResultStatusCOMPLETE; 
            case 'REVIEWED':
                    return sampleStatusIconsUrl+sampleAnalysisResultStatusREVIEWED;                 
            case 'CANCELED':
                    return sampleStatusIconsUrl+sampleAnalysisResultStatusCANCELED;  */                       
            default: 
                return sampleStatusIconsUrl+sampleAnalysisResultStatusUNDEFINED; 
        }
        //console.log('config-icons', 'getSampleStatusIcon', 'fldName', fldName);        
    }
        
    
}