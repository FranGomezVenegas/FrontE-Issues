const documentContainerUserProfile = document.createElement('user-profile-style');
documentContainerUserProfile.setAttribute('style', 'display: none;');

documentContainerUserProfile.innerHTML = `
  <dom-module id="user-profile-style">
    <template>
      <style>
        
/*        #wraxxxpper{
            width:800px;
            background-color:#f2f2e8;
            position:relative;
            left:50%;
            margin-left:-400px;
            border-radius: 10px;
            -moz-border-radius: 10px;
            padding:5px;
        }
        #topBar{
            width:780px;
            border: 1px solid;
            border-color: #dbd9ca;
            border-radius: 10px;
            -moz-border-radius: 10px;
            margin:5px;
            padding:5px;
        }
        #central{
            width:780px;
            border: 1px solid;
            border-color: #dbd9ca;
            border-radius: 10px;
            -moz-border-radius: 10px;
            margin:5px;
            margin-top:20px;
            padding:5px;
        }  */
        </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerUserProfile);      