import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import '@mpachnis/mp-calendar/mp-calendar.js';
import '../../../../internalComponents/Grids/myvaadin-grid';
import '../../03config/Programs/proc-deploy-progtab-calendar-settings';
import '../../01moduleFunctionality/proc-deploy-webcomponent-env-monit';
import {programProgConfigCalendar_progConfigCalendarTableHeaderFields } from '../../03config/Programs/proc-deploy-progtab-calendar-settings';
class ProcDeployProgConfigcalendar extends FieldsMethods(connect(store)(PolymerElement)) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.procDeploy.selectedProgram!=null){
            this.activeProductionLots=state.procDeploy.activeProductionLots;
            //this.selectedProgram=state.procDeploy.selectedProgram;
            //console.log('state.procDeploy.selectedProgram.config_scheduled_calendar',state.procDeploy.selectedProgram.config_scheduled_calendar);
            //this.events=state.procDeploy.selectedProgram.config_scheduled_calendar;
        }
      }       
    static get properties() {
        return {
            selectedLanguage: {type:String, observer:'labelsLang'},
            monthsLabels:{type:Array},
            daysLabels:{type:Array},
            startDayNumber:{type:String},
            // events: {type: Object, value:
            //     [{"title":"E01","content":"Muestreo ...","date":"2020-02-20","category":"blue", "color": "#000"},]},
            progConfigCalendarTableHeaderFields:{type: Object, value:programProgConfigCalendar_progConfigCalendarTableHeaderFields},
            weekDaysDisabled: {type: Object, value:["Sunday", "Saturday"]},
            tableTitle:{type: Object, value:{label_en:'Scheduled program locations', label_es:'Tabla de ubicaciones programadas para el programa'}},
            selectedProgram: {type: Object}, //, observer:'setConfigScheduledCalendar'},
            displayCalendar:{type: Boolean, value:false},
            displayTable:{type: Boolean, value:false},
            activeProductionLots:{type:Array, value:[]},          
        }
    }
    static get template() {
        return html`
        <style include="proc-deploy-progtab-calendar-style"></style>  
        <style>
        
            span.mp-cld-day.today{
                background-color: aliceblue;
}           }

            mp-calendar{
                --today-boxshadow-color: #4caf5066;
            }
            select.monthSelection{
                color: #032bbc;
            }

        </style>   
        <proc-deploy-webcomponent-env-monit id="myElements"></proc-deploy-webcomponent-env-monit>

        <template is="dom-if" if="[[displayCalendar]]">     
            <mp-calendar id="Jan" show-days-in-month="42" first-day-of-week="[[startDayNumber]]" day-labels="[[daysLabels]]" month-labels="[[monthsLabels]]" 
                disable-prev-days="true" disable-next-days="true" theme="light-blue" disabled-days="[[weekDaysDisabled]]" events-object="[[selectedProgram.config_scheduled_calendar]]"></mp-calendar> 
        </template>
        
        <template is="dom-if" if="[[displayTable]]">     
            <div>
                <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}} {{selectedProgram.name}}</p>
            </div>            
            <div>
            <myvaadin-grid class="grid" id="programCalendarGrid" headerfields="{{progConfigCalendarTableHeaderFields}}" 
                rowcontainer="{{selectedProgram.config_scheduled_calendar}}" selected-object="{{simpleModalSelectedObject}}" selected-items="{{simpleModalSelectedItems}}"
                on-selected-object-changed="pointClicked">>
            </myvaadin-grid> 
            </div>
        </template>
            `;
    }
    createProductionLotsList(){
        console.log('createProductionLotsList', 'this.productionLotsList', this.productionLotsList);
        var i;
        for (i = 0; i < this.activeProductionLots.length; i++) {
            var newElement=[{"keyName":'', "keyValue_en":'',"keyValue_es":''}];
            newElement.keyName=this.activeProductionLots[i].lot_name;
            newElement.keyValue_en=this.activeProductionLots[i].lot_name;
            newElement.keyValue_es=this.activeProductionLots[i].lot_name;
            this.productionLotsList[i+1]=newElement;
            //{keyName:"M1", :"M1", keyValue_es:"M1"},
        }
        //console.log(this.productionLotsList);     
    }   
    pointClicked(e){
        if (!e.detail){return;}
        this.createProductionLotsList();
        console.log('pointClicked', this.selectedSamplingPoint, 'init');
        //console.log('proc-deploy-prog-points >> pointClicked', 'this.selectedObject', this.selectedObject, 'this.selectedSamplingPoint', this.selectedSamplingPoint );        
//store.dispatch(setSelectedSamplingPoint(e.detail.card_info));
        //console.log(this.selectedSamplingPoint, 'before');    
        var selectedSamplingPoint=e.detail;    
        //var selectedSamplingPointLen=selectedSamplingPoint.length;
        //selectedSamplingPointLen=selectedSamplingPointLen++; 
        var newElement=[
            {
                "name": "logSample",
                "label_en": "Log Sample", "label_es": "Registrar Muestra",
                "type": "button",
                "read_only": false,
            },             
            {
            "name": "shift",
            "label_en": "Shift", "label_es": "Turno",
            "type": "list",
            "dbType": "String",
            "value": '',
            "read_only": false,
            "mandatory": true,
            "items" : this.systemShifts
          },
          {
            "name": "production_lot",
            "label_en": "Lot", "label_es": "Lote",
            "type": "list",
            "dbType": "String",
            "value": "",
            "read_only": false,
            "mandatory": true,
            "items" : this.productionLotsList
          }          
            ];  
        //newElement[1].value=this.systemShifts; 
        //newElement[2].value=this.activeProductionLots;
        if (selectedSamplingPoint==undefined || selectedSamplingPoint.card_info==undefined){return;}
        var i;
        for (i = 0; i < selectedSamplingPoint.card_info.length; i++) { 
            newElement[i+3]=selectedSamplingPoint.card_info[i];
        }
        this.selectedSamplingPoint=newElement;
        this.$.pointCard.open();
    }
    labelsLang(){
        if (this.selectedLanguage=="es"){
            this.monthsLabels=["Enero", "Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            this.daysLabels=["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            this.startDayNumber="1";
            return;
        }else{
            this.monthsLabels=["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            this.daysLabels=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            this.startDayNumber="0";
            return;
        }
    }
}
customElements.define('proc-deploy-prog-configcalendar', ProcDeployProgConfigcalendar);