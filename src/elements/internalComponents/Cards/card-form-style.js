const documentContainerCardFormStyle = document.createElement('card-form-style');
documentContainerCardFormStyle.setAttribute('style', 'display: none;');

documentContainerCardFormStyle.innerHTML = `
  <dom-module id="card-form-style">
    <template>
      <style>
        div.internalComponentCardFormMainDiv {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }          
        div.internalComponentCardFormMainDivBgimg {
            background-image: url('./images/hexagon-white-blue-light.jpg'), url('./images/fondo-blanco-hexagono-tecnologia-azul.jpg'); 
            background-repeat: no-repeat, no-repeat;  
            width: inherit, inherit;  
            height: inherit, inherit;     
        }       
        .buttonGroup {
            display: flex
        }
      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerCardFormStyle);