import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import '@polymer/paper-button/paper-button';
import '../dialogmodal-buttons';
//import './../../../config/styles/div-style.js'; 
//import '../../03config/css/Theme01/modal-dialogs.js';
/**
 * `simple-modal-dialog` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class SimpleModalDialog extends PolymerElement {
    static get properties() {
        return {
            displayCancelButton: {type: Boolean, notify: true},
            displayConfirmButton: {type: Boolean, notify: true},            
            displayCloseButton:  {type: Boolean, notify: true},

            formFields: {type: Array},
        }
    }
    static get template() {
        return html`
        <!-- <style include="modal-dialogs"></style> 
        <style include="div-style"></style> -->
        
        <style>
        
        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }
        
        /* Modal Content */
        .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
        }        
        /* The Close Button */

        .bgimg {
            background-image: url('./images/hexagon-white-blue-light.jpg');   
            width: 420px;       
        }          
        </style>
        <div class="modal-content bgimg">
        <dialogmodal-buttons display-close-button={{displayCloseButton}} display-cancel-button={{displayCancelButton}} display-confirm-button={{displayConfirmButton}}
            on-dialog-closebutton-clicked="dialogClosed" on-dialog-cancelbutton-clicked="dialogCanceled" on-dialog-confirmbutton-clicked="dialogConfirmed"
        ></dialogmodal-buttons> 

        <template is="dom-repeat" items="{{formFields}}" as="currentfield">       
            <field-controller on-keydown="keyPressed" on-field-button-clicked="fieldButtonClicked" on-field-list-value-changed="onListChange" id="{{currentfield.name}}"  field="{{currentfield}}"></field-controller>
        </template>      
      </div>
      
        `;
    }    
    onListChange(e){return;}
    keyPressed(e){
        //console.log('key pressed');
        if(e.key=="Enter") {
          this.dialogConfirmed();
          return;
        }   
    }  
    dialogConfirmed(){
        //console.log('dialogConfirmed', this.value);
        this.value='confirmed';
        var butDetail={'buttonName':this.name, dialogState:'confirmed'};
        if (this.value){butDetail.value=this.value};
        if (this.formElements){butDetail.formElements=this.formElements};
        if (this.$.simplemodaldialoggrid && this.$.simplemodaldialoggrid.selectedObject){butDetail.selectedItems=this.$.simplemodaldialoggrid.selectedObject};
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: butDetail
            // {
            // 'buttonName': this.name,
            // 'value': this.value,
            // 'dialogState': 'confirmed',
            // 'formElements':this.formElements,
            // 'selectedItems': this.$.simplemodaldialoggrid.selectedObject 
            // }
        }));   
        //this.resetValue; 
    }        
    dialogCanceled(){
        //console.log('dialogCanceled', this.value);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'canceled'
            }
        }));
        //this.resetValue;    
    } 
    dialogClosed(){
        //console.log('dialogClosed', this.value);
        this.value='confirmed';
        this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
            bubbles: true,
            composed: true,
            detail: {
            'buttonName': this.name,
            'value': this.value,
            'dialogState': 'closed'
            }
        }));
        //this.resetValue;    
    }      
    // dialogConfirmed(){
    //     //console.log('clicked', this.value);
    //     this.value='confirmed';
    //     this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
    //         bubbles: true,
    //         composed: true,
    //         detail: {
    //         'buttonName': this.name,
    //         'value': this.value,
    //         'dialogState': 'confirmed'
    //         }
    //     }));    
    // }        
    // dialogCanceled(){
    //     //console.log('clicked', this.value);
    //     this.value='confirmed';
    //     this.dispatchEvent(new CustomEvent('dialog-button-clicked', {
    //         bubbles: true,
    //         composed: true,
    //         detail: {
    //         'buttonName': this.name,
    //         'value': this.value,
    //         'dialogState': 'canceled'
    //         }
    //     }));    
    // }        
}

customElements.define('simple-modal-dialog', SimpleModalDialog);