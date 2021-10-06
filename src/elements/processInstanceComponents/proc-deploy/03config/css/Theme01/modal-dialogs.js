/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="modal-dialogs">
  <template>
    <style>
    .modal2 {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 10;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 1050px;
      left:10;
  }        
  .bgimg {
      background-image: url('./images/hexagon-white-blue-light.jpg');   
      background-repeat: no-repeat;
      background-size: cover;             
      /* width: 90%;        */
  }  
  /* The Close Button */
  .close {
      color: #aaaaaa;
      float: right;
      font-size: 58px;
      font-weight: bold;
  }        
  .close:hover,
  .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
  }
  .closed {
      display: none
  } 
         
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
