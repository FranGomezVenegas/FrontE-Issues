const documentContainerPlaformProcedureList = document.createElement('procedures-list-pane-style');
documentContainerPlaformProcedureList.setAttribute('style', 'display: none;');

documentContainerPlaformProcedureList.innerHTML = `
  <dom-module id="procedures-list-pane-style">
    <template>
      <style>
      iron-icon{
          color:cornflowerblue;
          height:2vh;
      }               
      div.title{
          display:flex;
      }
        .collapse-content {
          padding: 15px;
          border: 1px solid #dedede;
        }
        iron-collapse {
            border: 1px solid #dedede;
            border-top: none;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            @apply --shadow-elevation-2dp;
        }        
      </style>
    </template>
  </dom-module>`;

document.head.appendChild(documentContainerPlaformProcedureList);