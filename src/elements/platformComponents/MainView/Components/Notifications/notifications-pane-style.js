const documentContainerNotificationsPaneStyle = document.createElement('notifications-pane-style');
documentContainerNotificationsPaneStyle.setAttribute('style', 'display: none;');

documentContainerNotificationsPaneStyle.innerHTML = `
  <dom-module id="notifications-pane-style">
    <template>
      <style>
        p.textRed {
            color:red;
            text-size:1.8vh;
        }
        p.textNormal{
            color:red;
            text-size:1.8vh;
        }
        p.textBlue {
            color:blue;
            text-size:1.8vh;
        }                
        p.textGrey {
            color:grey;
            text-size:1.8vh;
        } 
        iron-icon{
            color:cornflowerblue;
            height:2vh;
        }               
        div.title{
            display:flex;
        }
      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerNotificationsPaneStyle);