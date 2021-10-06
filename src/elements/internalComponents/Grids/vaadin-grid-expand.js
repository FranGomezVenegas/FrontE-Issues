import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter'; 
import '@vaadin/vaadin-grid/vaadin-grid-tree-toggle'; 
import '@vaadin/vaadin-grid/vaadin-grid-tree-column'; 


//import '@polymer/paper-button/paper-button';
//import '@polymer/paper-input/paper-input';
//import '@vaadin/vaadin-context-menu/vaadin-context-menu.js';
//import '@polymer/iron-icon/iron-icon';
//import '@polymer/paper-icon-button/paper-icon-button';
// ????? import '@polymer/paper-tree/';

/**
 * `vaadin-grid-expand`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VaadinGridExpand extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }        
        .details {
          display: flex; font-size: 20px;
        }
        img {
          width: 40px; height: 40px; margin: 10px;
        }    
        vaadin-grid.gridnivel1{
          --material-background-color: blue;
          --material-body-text-color: blue
        }        
      </style>     
      <paper-button on-click="addLine" raised id="add-btn">Add Item</paper-button>


<vaadin-grid class=gridnivel1" id="mygrid" name="mygrid" items="[[myGridData]]" active-item="{{activeItem}}">   
    <template class="row-details">
      <div class="details">
        <vaadin-grid id="gridtests" name="gridtests" items="[[item.tests]]" active-item="{{activeItem}}">  

          <template class="row-details">
            <div class="details">
              <vaadin-grid id="gridresults" name="gridresults" items="[[item.results]]" active-item="{{activeItem}}">  
                <template is="dom-repeat" items="{{myResultFieldsNames}}" as="fld">                   
                  <vaadin-grid-column path="{{fld}}" header="{{fld}}" editing="false"></vaadin-grid-column>
                </template>  
              </vaadin-grid>  
            </div> 
          </template>        

          <vaadin-grid-column width="100px">
              <template class="header"></template>
              <template>
                <vaadin-checkbox aria-label$="Show Details for [[currentfield.name]]" checked="{{detailsOpened}}">Detalle de Test</vaadin-checkbox>
              </template>
          </vaadin-grid-column>        
          <template is="dom-repeat" items="{{myTestFieldsNames}}" as="fld">                   
            <vaadin-grid-column path="{{fld}}" header="{{fld}}" editing="false"></vaadin-grid-column>
          </template>         
        </vaadin-grid>  
      </div> 
    </template>

    <vaadin-grid-column width="100px">
      <template class="header"></template>
      <template>
        <vaadin-checkbox aria-label$="Show Details for [[currentfield.name]]" checked="{{detailsOpened}}">Detalle de Muestra</vaadin-checkbox>
      </template>      
    </vaadin-grid-column>

    <vaadin-grid-column>
      <template class="header">Button first child</template>
      <template>
        <button on-click="_alert">Button</button>
        Space does not activate
      </template>
    </vaadin-grid-column>

    <template is="dom-repeat" items="{{myFieldsNames}}" as="fld">      
      <template is="dom-if" if="[[columnIsPicture(fld, item)]]">
        <vaadin-grid-column>
          <template class="header">Expenses category</template>
          <template>
              <img src="[[myicon(fld, item)]]">
          </template>
        </vaadin-grid-column>
      </template>   
      <template is="dom-if" if="[[!columnIsPicture(fld, item)]]">
        <vaadin-grid-column path="{{fld}}" header="{{fld}}" editing="false"></vaadin-grid-column>
      </template>   
    </template>
</vaadin-grid>
<!-- </vaadin-context-menu> -->
  <!--
      <vaadin-grid id="mygrid" class="vaadinGridNivel1" name="mygrid" items="[[myGridData]]"> 
      <vaadin-grid-selection-column  auto-select></vaadin-grid-selection-column>
          <vaadin-grid-column>          
              <template class="header">Id</template>
              <template>
                <vaadin-grid-tree-toggle
                  leaf="[[!item.hasChildren]]"
                  expanded="{{item.expanded}}" itemHasChildrenPath="tests.testName"
                  
                  level="[[level]]">
                  [[item.sampleId]]
                </vaadin-grid-tree-toggle>                
              </template>            
          </vaadin-grid-column>        
          

          <vaadin-grid-column resizable >          
              <template class="header">Name</template>
              <template>
              <paper-input on-change="enterResult" type="text" name="text" required value="ssss" ></paper-input>
              </template>
          </vaadin-grid-column>        
          <vaadin-grid-column>          
              <template class="header">Level</template>
              <template>[[item.objectLevel]]</template>            
          </vaadin-grid-column> 

      </vaadin-grid>
-->

    `;
  }
  myicon(colName, rowData){
    if (rowData==undefined){return;}
    console.log('colName', colName, 'rowData', rowData);
    //alert(e + ' clicked');
    return rowData.image;
  }
  _alert(e){
    console.log(e.model.item.name);
    alert(e.model.item.name + ' clicked');
    return;
  }
  columnIsPicture(fldName, itm){
    //console.log('columnIsPicture','fldName', fldName, 'itm', itm);
    if (fldName=='image'){return true;}
    return false;
  }
  addLine(){
    console.log('addLine');
    this.$.mygrid.push('items', {
      name: 'holaname', 
      value: 'Byevalue',  
      image: this.imagePath}
      );     
  }
  enterResult(e){
    console.log('enterResult', e.currentTarget.value, index);
  }
  ready() {
    super.ready();      
  }
  resetColNum(){
    this.colNum=0;
  }
  fieldValue(index, item, e){
    console.log('ColNum:', this.colNum, 'index:', index, 'item:', item, 'fldItem', e);
    return item[this.colNum][e];
  }
  fieldName(e){
    console.log('ColNum:', this.colNum);
    this.colNum=this.colNum+1;
    console.log('ColNum:', this.colNum);
    return e;
  }
  static get properties() {
    return {
      imagePath: {type: String, value: '../images/app-login/LabPLANET_Atom54x42.png'},
      colNum: {
        type: Number, value:0
      },
      myFieldsNames: {
        type: Array,
        value: ['name', 'image', 'value', 'colExtra']
      },
      myTestFieldsNames: {
        type: Array,
        value: ['test_id', 'status']
      },  
      myResultFieldsNames: {
        type: Array,
        value: ['result_id', 'status']
      },            
      myGridData: { 
        type: Array,
        value: [
          {name: 'row 1', value: 'value 1', colExtra: 'colExtra in 1', image:"./images/header/personNoFace.jpg", hasChildren: true
          ,"children": [{
            "name": "Breaking Bad",
            "icon": "theaters"
        }, {
            "name": "Game of Thrones",
            "icon": "theaters"
        }]          
          , tests:[
              {test_id: 'tst_1_1', status:'In Progress'
              , results:[
                {result_id: 'result_1_1_1', status:'In Progress'},
                {result_id: 'result_1_1_2', status:'In Progress'}
                ]
              },
              {test_id: 'tst_1_2', status:'In Progress'
              , results:[
                {result_id: 'result_1_2_1', status:'In Progress'},
                {result_id: 'result_1_2_2', status:'In Progress'}
                ]
              }
            ]
          },
          {name: 'row 2', value: 'value 2', colExtra: 'colExtra in 2', image:'../images/app-login/LabPLANET.png', hasChildren: false
          , tests:[
            {test_id: 'tst_2_1', status:'In Progress'},
            {test_id: 'tst_2_2', status:'In Progress'}
          ]
        },
          {name: 'row 3', value: 'value 3', colExtra: 'colExtra in 3', image:'./images/header/personNoFace.jpg', hasChildren: true
          }
        ]
      },      
      myGridDataExpanded: { 
        type: Array,
        value: [
          {sampleId: '1', sampleName: 'S1', objectLevel: 'SAMPLE', hasChildren:true, expanded:true, level:1,
            children:[
              {sampleId: '1', testId: 1, testName: 'S1-T1', hasChildren:true, expanded:false, level:2},
              {sampleId: '1', testId: 2, testName: 'S1-T2', hasChildren:true, expanded:false, level:2}
            ]
          },
          {sampleId: '2', sampleName: 'S2', objectLevel: 'SAMPLE', hasChildren:false, expanded:false, level:1
          },
          {sampleId: '3', sampleName: 'S3', objectLevel: 'SAMPLE', hasChildren:true, expanded:false, level:1
          },
        ]
      }
    };
  }
}

window.customElements.define('vaadin-grid-expand', VaadinGridExpand);
