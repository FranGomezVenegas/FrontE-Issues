export const tabsDefinition={
  configCalendar:{
    displayCalendar: true,
    displayTable: true,
  }
};

const documentContainerEmDemoASampleLoginStyle = document.createElement('proc-deploy-sample-login-style');
documentContainerEmDemoASampleLoginStyle.setAttribute('style', 'display: none;');

documentContainerEmDemoASampleLoginStyle.innerHTML = `
  <dom-module id="proc-deploy-sample-login-style">
    <template>
    <style>
      vaadin-grid {
        width:95%;
        background-color: #ffffff5c;
      }
      p.tableTitle{
        margin-top: 0px;
        margin-bottom: 3px;
        color: #44cbe6;
        font-size:3vw;
      }         
      div.main{
        width:95%;
      }     
      div.buttonGroup {
        display: flex
      }      
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerEmDemoASampleLoginStyle);