import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';
         import('@vaadin/vaadin-grid/vaadin-grid-filter-column'); 
         import('@vaadin/vaadin-grid/vaadin-grid-column-group');
         import('@vaadin/vaadin-grid/vaadin-grid-sorter');
         import('@vaadin/vaadin-grid/vaadin-grid-selection-column');
import '@vaadin/vaadin-list-box/vaadin-list-box';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column';
import '@vaadin/vaadin-grid/vaadin-grid-filter'; 
import '@vaadin/vaadin-grid/vaadin-grid-tree-toggle'; 
import '@vaadin/vaadin-grid/vaadin-grid-tree-column'; 
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/polymer/lib/elements/dom-if';
import '@vaadin/vaadin-context-menu/vaadin-context-menu';
import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
import {SampleIcons} from '../../../platform-mixins/functions/config-icons';

/**
 * `vaadin-grid`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyVaadinGrid extends FieldsMethods(SampleIcons(connect(store)(PolymerElement))) {
  static get properties() {
    return {
      selectedLanguage: {type: String},
//       iconClss:{type: Object},
//       headerfields:{type: Array},
       rowcontainer:{type: Object},
//       selectedObject:{type: Object, notify:true},
       griddefinition:{type: Array},
       gridShowColsBorder:{type: String},
//       //rowcontainer: { type: Array },
// //      {        //hasChanged: () => true // see https://github.com/Polymer/lit-element/issues/107#issuecomment-416376381           }, 
//       //headerfields: { type: Array },
//       id:{ type: String},
//       refreshFunction: { type: Object},
//       selectedItems: {type: Array, notify: true},
//       allowMultiSelect:{type: Boolean},

    }
  }
  stateChanged(state) {
    this.selectedLanguage = state.app.user.appLanguage;
  }
  static get template() {
    return html`
    <style>
    .address {
      white-space: normal;
    }
    vaadin-grid{
      background-color: #c2f2ff; //#49cce633; //#9eaeef30; //#ffffff5c;
    }
    vaadin-grid-filter {
      display: flex;
    }

    vaadin-text-field {
      max-width: 100%;
    }
    header{
      color: #3168aff0;
    }
    p{
      text-align:center;
    }
    p:hover{
      background-color:#c6dafc; 
    }
    </style>    
    <vaadin-context-menu on-opened-changed="itemSelectedMenu">
      <template>
        <template is="dom-if" if="{{griddefinition.displayRightMouseMenu}}">
          <vaadin-list-box>
            <template is="dom-repeat" items="{{griddefinition.rightMouseButtons}}" as="but">    
              <p button-definition="{{but}}" on-click="butClicked">{{labelValue(selectedLanguage, but)}}</p>
            </template>
          </vaadin-list-box> 
        </template>
      </template>      
      <vaadin-grid theme$="{{gridShowColsBorder}}" column-reordering-allowed multi-sort id="gridlvl1" name="gridlvl1" on-active-item-changed="itemSelected" active-item="{{activeItem}}" items="{{rowcontainer}}"   as="item" >   
            <template class="row-details">
              <div class="details">
                <vaadin-grid id="gridlvl2" name="gridLvl2" items="[[item.child]]" active-item="{{activeItem}}">  
                    <template class="row-details">
                    <div class="details">
                      <vaadin-grid id="gridlvl3" name="gridLvl3" items="[[item.child2]]" active-item="{{activeItem}}">  
                        <template is="dom-if" if="{{griddefinition.level3.hasLevel3}}">
                          <vaadin-grid-column width="100px">
                              <template class="header"></template>
                              <template>
                                <vaadin-checkbox aria-label$="Show Details for [[currentfield.name]]" checked="{{detailsOpened}}">Detalle de Lvl3</vaadin-checkbox>
                              </template>
                          </vaadin-grid-column>        
                        </template>         
                        <template is="dom-repeat" items="{{griddefinition.level3.tableHdrFlds}}" as="fldLvl3">          
                        <vaadin-grid-column path="{{fldLvl3.name}}" header="{{labelValue(selectedLanguage,fldLvl3)}}" editing="false"></vaadin-grid-column>
                        </template>
                      </vaadin-grid>  
                    </div> 
                  </template>             
                  <template is="dom-if" if="{{griddefinition.level2.hasLevel2}}">
                    <vaadin-grid-column width="100px">
                      <template class="header"></template>
                      <template>
                        <vaadin-checkbox aria-label$="Show Details for [[currentfield.name]]" checked="{{detailsOpened}}">{{labelValue(selectedLanguage, griddefinition.level2)}}</vaadin-checkbox>
                      </template>
                    </vaadin-grid-column>        
                  </template>         
      
                  <template is="dom-if" if="{{griddefinition.level3.hasLevel3}}">
                    <vaadin-grid-column width="100px">
                        <template class="header"></template>
                        <template>
                          <vaadin-checkbox aria-label$="Show Details for [[currentfield.name]]" checked="{{detailsOpened}}">{{labelValue(selectedLanguage, griddefinition.level3)}}</vaadin-checkbox>
                        </template>
                    </vaadin-grid-column>        
                  </template>         
                  <template is="dom-repeat" items="{{griddefinition.level2.tableHdrFlds}}" as="fldLvl2">          
                  <vaadin-grid-column path="{{fldLvl2.name}}" header="{{{{labelValue(selectedLanguage,fldLvl2)}}" editing="false"></vaadin-grid-column>
                  </template>
                </vaadin-grid>  
              </div> 
            </template> <!-- TableLvl2 -->             
                  
        <template is="dom-if" if="{{griddefinition.level2.hasLevel2}}">
          <vaadin-grid-column width="100px">
            <template class="header"></template>
            <template>
              <vaadin-checkbox aria-label$="Show Details for [[currentfield.name]]" checked="{{detailsOpened}}">{{labelValue(selectedLanguage, griddefinition.level2)}}</vaadin-checkbox>
            </template>
          </vaadin-grid-column>        
        </template>         
      
        <template is="dom-repeat" items="{{headerfields}}"  as="fld">
            <template is="dom-if" if="{{fld.is_icon}}"> 
              <vaadin-grid-column resizable width="{{fld.width}}">
                <template class="header">{{labelValue(selectedLanguage,fld)}}</template>
                <template>
                    <img style="height:24px; width: 24px;" src="{{iconPath(fld, item)}}"> 
                </template>
              </vaadin-grid-column> 
            </template>
            <template is="dom-if" if="{{!fld.is_icon}}"> 
              <template is="dom-if" if="{{fld.sort}}"> 
                <vaadin-grid-sort-column resizable width="{{fld.width}}" path="{{fld.name}}" header="{{labelValue(selectedLanguage,fld)}}" editing="false"></vaadin-grid-sort-column>
              </template>
              <template is="dom-if" if="{{!fld.sort}}"> 
                <template is="dom-if" if="{{fld.filter}}"> 
                  <vaadin-grid-filter-column resizable width="{{fld.width}}" path="{{fld.name}}" header="{{labelValue(selectedLanguage,fld)}}" editing="false"></vaadin-grid-filter-column>
                </template>
                <template is="dom-if" if="{{!fld.filter}}"> 
                  <vaadin-grid-column resizable width="{{fld.width}}" path="{{fld.name}}" header="{{labelValue(selectedLanguage,fld)}}" editing="false"></vaadin-grid-column>
                </template>
              </template>
            </template> 
        </template>         
      </vaadin-grid>
      <template is="dom-if" if="{{griddefinition.displayRightMouseMenu}}">
        </vaadin-context-menu>
      </template> 
            
      `;
        }
        isTableEmpty(){
          if (!this.rowcontainer){ return true;}
          if (this.rowcontainer.length==0) {return true;}
          return false;
        }
        resetTableSelection(){
          return;
        }      
        iconPath(fld, item){
          //console.log(fld, item);
          if (!fld || fld.iconMethod==undefined){return;}
          if (fld.iconMethod.toUpperCase()=='GETSAMPLECONFIGICON'){return this.getSampleConfigIcon(fld, item);}
          if (fld.iconMethod.toUpperCase()=='GETSAMPLESTATUSICON'){return this.getSampleStatusIcon(fld, item);}
          if (fld.iconMethod.toUpperCase()=='GETBATCHINPROGRESS'){return this.getBatchInProgress(fld, item);}
          if (fld.iconMethod.toUpperCase()=='GETSAMPLEINCUB1INPROGRESS'){return this.getSampleIncub1InProgress(fld, item);}
          if (fld.iconMethod.toUpperCase()=='GETSAMPLEINCUB2INPROGRESS'){return this.getSampleIncub2InProgress(fld, item);}          
        }
        butClicked(e){
          console.log('butClicked');
          let myEvent = new CustomEvent('right-menu-clicked', { 
            detail: e.target ,
            bubbles: true, 
            composed: true });
          this.dispatchEvent(myEvent); 
        }
        itemSelectedMenu(e){
         // console.log(e);
        }
        itemSelected(e){
          //console.log('itemSelected', e.detail.value);
          //alert(e.model.item.name);
          const item = e.detail.value;
          //if (this.singleSelect){    
            //if (item && item.sample_id!=undefined){console.log(item.sample_id);  }
            if (item){
              this.selectedObject = item;
            }else{
              this.selectedObject = undefined;
            }
            e.target.selectedItems = item ? [item] : [];
            let myEvent = new CustomEvent('selected-object-changed', { 
              detail: this.selectedObject,
              bubbles: true, 
              composed: true });
            this.dispatchEvent(myEvent); 
            return;     
          //}else{
            //var selItems=e.target.selectedItems;
            //selItems.add(item);
            //e.target.
          //  e.target.selectedItems = item ? [item] : [];
          //}
        }
        columnIsPicture(fld){
          return fld.is_icon;
        }
         
      /**
       * Use for one-time configuration of your component after local DOM is
       * initialized.
       */
      ready() {
        super.ready();
/*        var fldIndex=0;
        var i;
        if (this.rowcontainer.length==0){
          for (i = 0; i < this.griddefinition.headerfields; i++) { 
            if (fldIndex=0 && (this.griddefinition.headerfields[i].is_icon==undefined || !this.griddefinition.headerfields[i].is_icon) ){fldIndex=i;}
          }
          this.griddefinition.headerfields[0][fldIndex]="No Data";
          alert('No Samples');          
        }*/

        //console.log('this.griddefinition.gridShowColsBorder', this.griddefinition.gridShowColsBorder);
        if (this.griddefinition && this.griddefinition.gridShowColsBorder){
          this.gridShowColsBorder='column-borders';
        }else{
          //this.gridShowColsBorder='row-stripes';
        }
    
      }
}
window.customElements.define('myvaadin-grid', MyVaadinGrid);      
