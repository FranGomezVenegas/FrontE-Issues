const documentContainerVideoTutorialTabStyle = document.createElement('videotutorial-tab-style');
documentContainerVideoTutorialTabStyle.setAttribute('style', 'display: none;');

documentContainerVideoTutorialTabStyle.innerHTML = `
  <dom-module id="videotutorial-tab-style">
    <template>
    <style>
    div.videocard{
        display: inline-grid;
    } 
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;
        background-color: #2196F3;
        /* padding: 10px; */
      }
      
      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.9);
        text-align: center;
        /* padding: 20px 0; */
        font-size: 1.2vmax;
      }  
    p.videotitle {
        padding:0px;
    }        
    </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerVideoTutorialTabStyle);