const documentContainerSopIconAndBadgeStyle = document.createElement('certif-analysis-methods-style');
documentContainerSopIconAndBadgeStyle.setAttribute('style', 'display: none;');

documentContainerSopIconAndBadgeStyle.innerHTML = `
  <dom-module id="certif-analysis-methods-style">
    <template>
      <style>
        :host{
            display: flex;
            position: relative;
            --image-max-h:5vh;
            --image-max-w:5vw;
            --image-min-h:3vh;
            --image-min-w:3vw;
        }
        div.mainDiv{ 
            display:flex; 
            max-height:var(--image-max-h);
            max-width:var(--image-max-w);
            min-height:var(--image-min-h);
            min-width:var(--image-min-w); 
        }
        img.imageSOP {
          position: relative;
          aligned:center;
          height:100%;
          width:100%;          
        }             
        paper-badge.pendingSop{
            top:  2vw;
            left: 5vw;
            height: 2vh;
            width: 2vw;
            --paper-badge-background: var(--google-red-500);
            --paper-badge-height: 2vh;
            --paper-badge-width: 2vw;
        }
        paper-badge.allUserSop{
            top:  4vw;
            left: 5vw;
            height: 2vh;
            width: 2vw;
            --paper-badge-background: var(--google-blue-700);
            --paper-badge-height: 2vh;
            --paper-badge-width: 2vh;
        } 
        div.badge{
          height:2vh;
          width:2vw;
          //min-height:1vh;
          //min-width:1vw;
        }        
      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerSopIconAndBadgeStyle);