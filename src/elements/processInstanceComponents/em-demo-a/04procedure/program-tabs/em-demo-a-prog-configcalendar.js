import {PolymerElement, html} from '@polymer/polymer/polymer-element';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../store.js';
import {FieldsMethods} from '../../../../../platform-mixins/functions/fields-methods';
import '@mpachnis/mp-calendar/mp-calendar.js';
import '../../../../internalComponents/Grids/vaadingrid-lit-singleselect';
import '../../03config/Programs/em-demo-a-progtab-calendar-settings';
import {programProgConfigCalendar_progConfigCalendarTableHeaderFields } from '../../03config/Programs/em-demo-a-progtab-calendar-settings';
class EmDemoAProgConfigcalendar extends FieldsMethods(connect(store)(PolymerElement)) {
    stateChanged(state) {
        this.selectedLanguage = state.app.user.appLanguage; 
        if (state.emDemoA.selectedProgram!=null){
            //this.selectedProgram=state.emDemoA.selectedProgram;
            //console.log('state.emDemoA.selectedProgram.config_scheduled_calendar',state.emDemoA.selectedProgram.config_scheduled_calendar);
            //this.events=state.emDemoA.selectedProgram.config_scheduled_calendar;
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
        }
    }
    static get template() {
        return html`
        <style include="em-demo-a-progtab-calendar-style"></style>  
        <style>
        
            span.mp-cld-day.today{
                background-color: aliceblue;
}           }

            mp-calendar{
                --today-boxshadow-color: #4caf5066;
            }
            #monthSelection{
                color: #032bbc;
            }
        </style>     
        
        <template is="dom-if" if="[[displayCalendar]]">     
            <mp-calendar id="programSchedCalendar" show-days-in-month="42" first-day-of-week="[[startDayNumber]]" day-labels="[[daysLabels]]" month-labels="[[monthsLabels]]" 
                disable-prev-days="true" disable-next-days="true" theme="light-blue" disabled-days="[[weekDaysDisabled]]" events-object="[[selectedProgram.config_scheduled_calendar]]"></mp-calendar> 
        </template>
        
        <template is="dom-if" if="[[displayTable]]">     
            <div>
                <p class="tableTitle">{{labelValue(selectedLanguage, tableTitle)}} {{selectedProgram.name}}</p>
            </div>            
            <div>
            <vaadingrid-lit-singleselect class="grid" id="programCalendarGrid" headerfields="{{progConfigCalendarTableHeaderFields}}" 
            rowcontainer="{{selectedProgram.config_scheduled_calendar}}" selected-object="{{selectedObject}}"
            on-selected-object-changed="pointClicked">
            </vaadingrid-lit-singleselect>
            </div>
        </template>
            `;
    }
    pointClicked(){
        //This does nothing, remove if so
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

customElements.define('em-demo-a-prog-configcalendar', EmDemoAProgConfigcalendar);