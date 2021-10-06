const documentContainerCenterTabsStyle = document.createElement('platform-center-tabs-style');
documentContainerCenterTabsStyle.setAttribute('style', 'display: none;');

documentContainerCenterTabsStyle.innerHTML = `
  <dom-module id="platform-center-tabs-style">
    <template>
      <style>
      div.secondHeader{
        display: flex;
      }
      paper-tabs.platformCenterTabs{
        --paper-tabs-selection-bar-color:#0f9d58;   
        align-items: center;
        display: flex;
        width: 100%;
        height: 1.5vw;
        font-size: 1vw;
        font-weight: 500;
        overflow-x: hidden;
        overflow-y: hidden;
        unicode-bidi: isolate;
        user-select: none;  
        padding-top: 3px;               
      }      
      paper-tab.platformCenterTabsTabItem {
        color: #a1fdd0; /* var(--paper-light-blue-50); */ 
        background-color: var(--paper-light-blue-500); 
        //padding-left: 2px;
        //padding-right: 0px;
        //height: 35px;
        box-shadow: 2px 2px 2px 2px #a4aed5;
        border-radius: 5px;
      }
      iron-icon{
        width:4vw;
        padding: 0px;
      }
      sop-icon-and-badge{
        padding: 1vw 0.5vw 0.2vw;
      }
      procedures-list-pane{
        padding:1vw;
      }
      notifications-pane{
        padding:1vw;
      }
      language-selector{
        padding:1vw;
      }
      store-consola{
        padding:1vw;
      }
      /style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerCenterTabsStyle);