const documentContainerAppHeaderStyle = document.createElement('platform-header-style');
documentContainerAppHeaderStyle.setAttribute('style', 'display: none;');

documentContainerAppHeaderStyle.innerHTML = `
  <dom-module id="platform-header-style">
    <template>
      <style>
        :root{
          --platform-background-image:'./images/hexagon-white-blue-light.jpg';
          --header-right-width:120px;
        }
        div.wapper {
          display: flex;
        }
        div.platformHeaderSplit {
/*          height: 100%; */
 /*         width: 30%; 80%; */ 
/*          position: fixed; */
/*          z-index: 1;*/
/*          top: 0px;*/
/*          overflow-x: hidden;*/
/*          padding-top: 0px;    */        
        }      
        div.platformHeaderLeftArea {
          z-index: 12;
          flex: 1;
          display: flex;
/*          z-index: 1;*/
          top: 0%;
          /*left: 10px;*/
/*          position:relative;*/
        }  
        div.platformHeaderLeftIcon{
          display: flex;
/*          z-index: 1;*/
          top: 0%;
          left: 2px;
/*          position:relative;*/
        }        
        div.platformHeaderCenterArea {
          z-index: 12;
          flex: 5;
          top: 0%;
          left: 22%; 
          width: 50%;
          height: 100%;   
/*          position: fixed; */
        }
        div.platformHeaderRightArea {
          flex: 1;
          top: 0%;
          left: calc(99% - var(--header-right-width)); /* calc(99% - 120px); /*67%; /*65%; */
          width: 100%;
          height: 100%; 
          display: flex; 
          z-index: 12;
        }  
        vaadin-button.logout{
          width:12px;
          height:0px;
        }
        svg.logout{
          width:24px;
          height:24px;
          viewBox:0 0 24 24
        }
      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerAppHeaderStyle);