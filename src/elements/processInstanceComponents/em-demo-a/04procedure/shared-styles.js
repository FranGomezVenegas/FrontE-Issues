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
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    .table-checkbox {
      .line {
        
        min-height: 60px;
        align-items: center;
        border-bottom: 1px solid white;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 700;
        color: #353b4e;
            background: rgb(247, 247, 247);
        &--header {
          min-height: 40px;
          color: #ababab;
                background: #f0f0f0;
        }
        &__item {
          display: flex;
          justify-content: space-between;
          &--check {
            cursor: pointer;
            width: 40px;
            justify-content: center;
            align-self: stretch;
              align-items: center;
            border-right: 1px solid white;
            input {
              opacity: 0;
                        visibility: hidden;
                        overflow: hidden;
                        height: 0;
                        width: 0;
                        margin: 0;
              & + .fake-checkbox {
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
                background: white;
                cursor: pointer;
                max-width: 18px;
                width: 18px;
                height: 18px;
                flex: 0 0 18px;
                border: 1px solid rgba(158, 158, 158, 0.35);
                display: flex;
                justify-content: center;
                align-items: center;
                i.material-icons {
                  opacity: 0;
                  color: #370c72;
                  transition: all 200ms ease;
                }
              }
              &:checked + .fake-checkbox {
                i.material-icons {
                  opacity: 1;
                }
              }
            }
          }
          &--id {
            padding-left: 15px;
            width: calc(15% - 40px);
          }
          &--sell {
            width: 35%;
          }
          &--buy {
            width: 35%;
          }
          &--time {
            width: 15%;
          }
          &__label {
            display: none;
          }
          &__value {}
        }
      }
    }
    
    .selected-inputs {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
        
    .button {
      padding: 15px 25px;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      outline: none;
      color: #fff;
      background-color: #4285f4;
      border: none;
      border-radius: 15px;
      box-shadow: 0 9px #a3c2e3;
    }
    
    .button:hover {background-color: #c2e0ff}
    
    .button:active {
      background-color: #3e8e41;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }    
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }
      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

      app-header {
        color: #fff;
        background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
        --paper-icon-button-ink-color: white;
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 16px;
        text-decoration: none;
        color: var(--app-secondary-color);
        line-height: 40px;
      }

      .drawer-list a.iron-selected {
        color: black;
        font-weight: bold;
      }
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 75%;
      }
      
      th {
          border: 1px solid google-blue-100;
          text-align: left;
          background-color:  var(--paper-light-blue-50);
          padding: 8px;
      }
      td {
        border: 1px solid google-blue-100;
        text-align: left;
        padding: 8px;
    }      
      tr:nth-child(even) {
          background-color: google-blue-300;
      }      
      td, th {
        padding: 8px;
        box-sizing: border-box;
        white-space: nowrap;
      }
      td:nth-of-type(1),
      th:nth-of-type(1) {
        background-color:  var(--paper-light-blue-50);
      }
      tr.iron-selected td {
        background-color: rgba(0, 0, 0, 0.1);
      }
      tr:hover td {
        background-color:  var(--paper-light-blue-500);
        color: White;
      }
      tr td.iron-selected:not(:nth-of-type(1)) {
        background-color: rgba(0, 255, 0, 0.3);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
