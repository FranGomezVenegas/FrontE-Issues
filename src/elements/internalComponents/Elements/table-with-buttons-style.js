import {css} from "lit-element";
export const tableWithButtonsStyle = css `
    :root{
    }
        p.tableTitle{
            margin-top: 0px;
            margin-bottom: 3px;
            color: #44cbe6;
            font-size:6vmin;
          }  
          p.chartTitle{       
            margin-top: 0px;
            margin-bottom: 3px;
            color: #44cbe6;
            font-size:20px;
          }  
          div.main{
            width:95%;
          }
          div.buttonGroup{
            display:flex;
          }
          div.gridGroup{
            display:flex;
          }    
          div.selectedobjectwhentblhiddenDiv{
            display: flex;
            width: 80%;
            background-color: #c2f2ff5e;
            padding-left: 1em;
            margin-left: 3em;              
          }
          p.nothingselectedwhentblhiddenFld{
            margin-block-start: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            color: #e64444;
//            padding-right:1em;
          }
          p.selectedobjectwhentblhiddenFld{
            margin-block-start: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            color: #03a9f4;
//            padding-right:1em;
          }
    
`;            