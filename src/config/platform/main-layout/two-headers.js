import {css} from "lit-element";
const documentContainerAppMainLayoutTwoHeaders = document.createElement('two-headersenh');
documentContainerAppMainLayoutTwoHeaders.setAttribute('style', 'display: none;');

export const appMainLayoutTwoHeadersStyle = css `
  host:{
    --action-success-background-color: #0085ffe6;
    --action-error-background-color: #a33;
}
/* div {*/
    div.login {
        @apply --shadow-elevation-2dp;
        position:fixed;
        width:100vw;
        height:100vh;
        display:flex;
        align-items: center;
        justify-content: center;
        z-index: 9999999999;
    }               
/* } */
#toast {
    --paper-toast-background-color: #0085ffe6;/* var(--action-success-background-color); */
}          
#toasterror {
--paper-toast-background-color: #a33; /*var(--action-error-background-color); */
}  
.split {
  height: 100%;
  width: 15%; /* 80%; */
  position: fixed;
  z-index: 1;
  top: 0px;
  overflow-x: hidden;
  padding-top: 0px;
}    
.top {
  top: 0;
  left: 2px;
  --height: 10%;
  /* width: 100%; */
  background-color:rgba(0,126,255,.24);
  --opacity: .5; 
}      
.wrapper {
  width: 100%;
  display:inline-block;
}
.left {
  top: 10%;
  left: 2px;
  width: 18%;
  height: 100%;        
  --background: #032bbc; /* Old browsers */
  --background: -moz-linear-gradient(top, #032bbc 0%, #2989d8 5%, #b3cfe5 15%, #ffffff 37%, #ffffff 54%, #032bbc 88%, #207cca 88%, #207cca 88%, #032bbc 88%, #207cca 91%, #032bbc 93%, #2989d8 96%, #b3cfe5 100%, #b3cfe5 101%); /* FF3.6-15 */
  --background: -webkit-linear-gradient(top, #032bbc 0%,#2989d8 5%,#b3cfe5 15%,#ffffff 37%,#ffffff 54%,#032bbc 88%,#207cca 88%,#207cca 88%,#032bbc 88%,#207cca 91%,#032bbc 93%,#2989d8 96%,#b3cfe5 100%,#b3cfe5 101%); /* Chrome10-25,Safari5.1-6 */
  --background: linear-gradient(to bottom, #032bbc 0%,#2989d8 5%,#b3cfe5 15%,#ffffff 37%,#ffffff 54%,#032bbc 88%,#207cca 88%,#207cca 88%,#032bbc 88%,#207cca 91%,#032bbc 93%,#2989d8 96%,#b3cfe5 100%,#b3cfe5 101%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  --filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#032bbc', endColorstr='#b3cfe5',GradientType=0 ); /* IE6-9 */
}
div.right {
  display: flex;
  top: 8%;
  left: 1%; 
  width: 99%;
  height: 95%;
  float: right;
}    
platform-center-tabs.center-tab{
  width: 100%;
}                   
.bckimgtop {        
  background-image: url('./images/logo-cliente1.png'); 
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center;
  opacity: .5;
  float: left;              
}        
`
documentContainerAppMainLayoutTwoHeaders.innerHTML = `
  <dom-module id="two-headers">
    <template>
      <style>
        host:{
            --action-success-background-color: #0085ffe6;
            --action-error-background-color: #a33;
        }
        
          div.login {
            @apply --shadow-elevation-2dp;
            position:fixed;
            width:100vw;
            height:100vh;
            display:flex;
            align-items: center;
            justify-content: center;
            z-index: 9999999999;
        }               
    
        #toast {
            --paper-toast-background-color: #0085ffe6;/* var(--action-success-background-color);*/
        }          
        #toasterror {
        --paper-toast-background-color: #a33; /*var(--action-error-background-color); */
        }  
        .split {
          height: 100%;
          width: 15%; /* 80%; */
          position: fixed;
          z-index: 1;
          top: 0px;
          overflow-x: hidden;
          padding-top: 0px;
        }    
        .top {
          top: 0;
          left: 2px;
          --height: 10%;
          /* width: 100%; */
          --opacity: .5;           
        }      
        .wrapper {
          width: 100%;
          display:inline-block;
        }
        .left {
          top: 10%;
          left: 2px;
          width: 18%;
          height: 100%;        
          --background: #032bbc; /* Old browsers */
          --background: -moz-linear-gradient(top, #032bbc 0%, #2989d8 5%, #b3cfe5 15%, #ffffff 37%, #ffffff 54%, #032bbc 88%, #207cca 88%, #207cca 88%, #032bbc 88%, #207cca 91%, #032bbc 93%, #2989d8 96%, #b3cfe5 100%, #b3cfe5 101%); /* FF3.6-15 */
          --background: -webkit-linear-gradient(top, #032bbc 0%,#2989d8 5%,#b3cfe5 15%,#ffffff 37%,#ffffff 54%,#032bbc 88%,#207cca 88%,#207cca 88%,#032bbc 88%,#207cca 91%,#032bbc 93%,#2989d8 96%,#b3cfe5 100%,#b3cfe5 101%); /* Chrome10-25,Safari5.1-6 */
          --background: linear-gradient(to bottom, #032bbc 0%,#2989d8 5%,#b3cfe5 15%,#ffffff 37%,#ffffff 54%,#032bbc 88%,#207cca 88%,#207cca 88%,#032bbc 88%,#207cca 91%,#032bbc 93%,#2989d8 96%,#b3cfe5 100%,#b3cfe5 101%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          --filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#032bbc', endColorstr='#b3cfe5',GradientType=0 ); /* IE6-9 */
        }
        .right {          
          display: flex;
          position: relative;
          top: 8%;
          left: 1%; 
          width: 99%;
          height: 95%;
          float: right;
        }    
        platform-center-tabs.center-tab{
          width: 100%;
        }                   
        .bckimgtop {        
          /*background-image: url('./images/HexagonBright.jpg');            */
          /*background-image: url('./images/platform-login/login-hexagon-background.png');    */
          /*background-image: url('./images/hexagon-white-blue-light.jpg');    */
          /*background-image: url('./images/fondo-blanco-hexagono-tecnologia-azul.jpg');    */
          /*background-image: url('./images/Sintitulo.png'); 
          background-image: url('./images/logo-cliente1.png'); 
          background-repeat: no-repeat;
          background-size: cover; 
          background-position: center;
          background-color:black;
          opacity: .5;
          float: left;            
        }                      
      </style>
    </template>
  </dom-module>`;

document.head.appendChild(documentContainerAppMainLayoutTwoHeaders);