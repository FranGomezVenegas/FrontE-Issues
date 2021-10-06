const documentContainerFormFields = document.createElement('form-fields');
documentContainerFormFields.setAttribute('style', 'display: none;');

documentContainerFormFields.innerHTML = `
  <dom-module id="form-fields-style">
    <template>
      <style>
        .formFieldAvatar{
          vertical-align: middle;
          min-height: 3vh;
          min-width: 4vw;
          max-height: 5vh;
          max-width: 6vw;
          border-radius: 50%;
        }
        .formFieldBoolean{
          --paper-checkbox-size: 2em;
          --paper-checkbox-checked-color: var(--paper-red-500);
          --paper-checkbox-checked-ink-color: var(--paper-red-500);
          --paper-checkbox-unchecked-color: var(--paper-red-900);
          --paper-checkbox-unchecked-ink-color: var(--paper-red-900);
          --paper-checkbox-label-color: var(--paper-red-700);
          --paper-checkbox-vertical-align: top;          
        }
        .formFieldGoogleFonts{
          margin-top: 0px !important; 
          margin-bottom: 0px !important;          
        }
        .formFieldLogoCircle{
          min-height:3vh;
          min-width:4vw;
          max-height:5vh;
          max-width:6vw;
          border-radius: 50%;
        }
        .formFieldTitle{
          margin-left: auto; 
          margin-right: auto;
          display:inline-block;
          color: google-blue-700;
        }
        .formFieldTreeListDivlevel1{
          position: relative;
          left: auto;
          width: 50px;
          height: 18px;            
        }
        .formFieldTreeListDivlevel2{
          position: relative;
          left: 20px;
          width: 200px;
          height: 18px;               
        }
        .formFieldTreeListDivlevel3 {
          position: relative;
          left: 40px;
          width: 150px;
          height: 18px;                
        }  
        .formFieldTreeListButtonlevel1{
          height: 18px;              
          text-shadow: 3px 2px #42f4f4;
          padding-bottom: 10px;
        }
        .formFieldTreeListButtonlevel2{
          height: 18px;        
          padding-bottom: 5px;           
        }
        .formFieldTreeListButtonlevel3{
        }
        .formFieldTreeListButtonRed{
          height: 18px;                   
          color: red;
          align:left;
        }
        paper-tabs{
          height: 1.2vh;
          font-size: 1vh;
        } 
      </style>
    </template>
  </dom-module>`;
// field-button-group sigue teniendo sus estilos en el componente
// field-text sigue teniendo sus estilos en el componente
// field-title si tiene migrados los estilos pero el componente es un <h2> a la fija.
document.head.appendChild(documentContainerFormFields);