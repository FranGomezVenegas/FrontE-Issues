import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../store';

import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
/**
 * `chart-controller` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ChartController extends FieldsMethods(connect(store)(PolymerElement)) {
    stateChanged(state) {        
        this.selectedLanguage=state.app.user.appLanguage;
    }
    static get properties() {
        return {
            dataObject:{type:Object, observer:'getChartData', notify:true},
            chartDefinition:{type:Object, notify:true},
            chartType:{type:String},
            chartData:{type: Array},
            selectedLanguage: String,
        }
    }

    static get template() {
        return html`
        <style>
        google-chart{
            background-color: transparent;
        }
        </style>
        <p><h2><b>{{labelValue(selectedLanguage, chartDefinition.chart_title)}}</h2></p>
        <google-chart id="pie" type={{chartDefinition.chart_type}} data={{chartData}}></google-chart>
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
    getChartData(){
        var chartType='';
        chartType=this.chartDefinition.chart_type;
        if (this.chartDefinition!=undefined && this.chartDefinition.chart_type!=undefined){
            switch (chartType.toUpperCase()){
                case 'PIE':
                    this.dataForPieAndLine();
                    break;
                case 'LINE':
                    this.dataForPieAndLine();
                    break;
                case 'COLUMN':
                    this.dataForPieAndLine();
                    break;
            }
        }
    }
    dataForPieAndLine(){
        //console.log('dataForPieAndLine');
        if (this.dataObject==undefined){
            //console.log('chart-controller', 'dataForPieAndLine', 'dataObject is empty');
            return;}
        if (this.chartDefinition){
            if (this.chartDefinition.display_chart){
                var chartData=[];
                var itemLabel='item';
                if (this.chartDefinition.label_item){
                    itemLabel=this.labelValue(this.selectedLanguage, this.chartDefinition.label_item);}                            
                var valueLabel='value';
                if (this.chartDefinition.label_value){
                    valueLabel=this.labelValue(this.selectedLanguage, this.chartDefinition.label_value);}
                chartData=[[itemLabel, valueLabel]];
                var chartValues=[];
                chartValues=this.dataObject[this.chartDefinition.chart_name];
                var grpFldName='grouper';
                if (this.chartDefinition.grouper_field_name){grpFldName=this.chartDefinition.grouper_field_name;}
                var cntFldName='count';
                if (this.chartDefinition.counter_field_name){cntFldName=this.chartDefinition.counter_field_name;}
                if (chartValues!=undefined){
                    var itemsToExclude=[];
                    if (this.chartDefinition.grouper_exclude_items){itemsToExclude=this.chartDefinition.grouper_exclude_items;}
                    var j;
                    for (j = 0; j < chartValues.length; j++) {
                        var curchtval=[];
                        curchtval=chartValues[j];
                        if (!itemsToExclude.includes(curchtval[grpFldName])){
                            var addValue=true;
                            if (this.chartDefinition.counterLimits){
                                addValue=this.addNumericValue(this.chartDefinition.counterLimits, curchtval[cntFldName]);
                            }
                            if(addValue){
                                chartData.push(
                                    [curchtval[grpFldName], 
                                    curchtval[cntFldName] ]);
                            }
                        }
                    }
                }
                //console.log('chartData', chartData);
                this.chartData=chartData;
            }
        }
    }
    addNumericValue(rule, value){
        if (rule==undefined){return true;}
        if (value==undefined){return false;}
        if (rule.min_allowed!=undefined){if (value<=rule.min_allowed){return false;}}
        if (rule.min_allowed_included<undefined){if (value<rule.min_allowed_included){return false;}}
        if (rule.max_allowed!=undefined){if (value>=rule.max_allowed){return false;}}
        if (rule.max_allowed_included>undefined){if (value>rule.max_allowed_included){return false;}}
        if (rule.value!=undefined){if (rule.value==value){return false;}}
        return true;
    }
}

customElements.define('chart-controller', ChartController);
// import {LitElement, html} from 'lit-element';
// import '@google-web-components/google-chart';
// import { connect } from 'pwa-helpers/connect-mixin';
// import { store } from '../../../store';

// import {FieldsMethods} from '../../../platform-mixins/functions/fields-methods';
// /**
//  * `chart-controller` Description
//  *
//  * @customElement
//  * @polymer
//  * @demo
//  * 
//  */
// class ChartController extends FieldsMethods(connect(store)(LitElement)) {
//     static get properties() {
//         return {
//             chartType:{type:String},
//             dataa:{type: Array},
//             chartTitle:{type: String},
//             cols:{type: Array}, 

//             dataObject:{type:Object, observer:'getChartData', notify:true},
//             chartDefinition:{type:Object, notify:true},
//             chartType:{type:String},
//             chartData:{type: Array},
//             selectedLanguage: String,
            
//         }
//     }

//     /**
//      * Instance of the element is created/upgraded. Use: initializing state,
//      * set up event listeners, create shadow dom.
//      * @constructor
//      */
//     constructor() {
//         super();
//         this.getChartData();
//     }

//     // static get styles() {
//     //     return [
//     //         super.styles,
//     //         css``,
//     //     ];
//     // }

//     /**
//      * Implement to describe the element's DOM using lit-html.
//      * Use the element current props to return a lit-html template result
//      * to render into the element.
//      */
//     render() {
//         return html`
//             <p><h2><b>${this.chartTitle}</h2></p>
//             <google-chart type=${this.chartType} cols=${this.cols} data='${this.dataa}'></google-chart>

//         `;
//     }
//     getChartData(){
//         console.log('ChartController', 'getChartData');
//         var chartType='';
//         chartType=this.chartDefinition.chart_type;
//         if (this.chartDefinition!=undefined && this.chartDefinition.chart_type!=undefined){
//             switch (chartType.toUpperCase()){
//                 case 'PIE':
//                     this.dataForPieAndLine();
//                     break;
//                 case 'LINE':
//                     this.dataForPieAndLine();
//                     break;
//                 case 'COLUMN':
//                     this.dataForPieAndLine();
//                     break;
//                 }
//         }
//     }
//     dataForPieAndLine(){
//         if (this.dataObject.length==0){return;}
//         if (this.dataObject){console.log(this.dataObject);}
//         if (this.chartDefinition){
//             //var i;
//             //var charts=[];
//             //var chartsCont=0;
//             //for (i = 0; i < this.windowContent.charts.length; i++) {
//                 if (this.chartDefinition.display_chart){
//                     var chartData=[];
//                     var itemLabel='item';
//                     if (this.chartDefinition.label_item){
//                         itemLabel=this.labelValue(this.selectedLanguage, this.chartDefinition.label_item);}                            
//                     var valueLabel='value';
//                     if (this.chartDefinition.label_value){
//                         valueLabel=this.labelValue(this.selectedLanguage, this.chartDefinition.label_value);}
//                     chartData=[[itemLabel, valueLabel]];
//                     var chartValues=[];
//                     chartValues=this.dataObject[this.chartDefinition.chart_name];
//                     if (chartValues.length>0){
//                         var j;
//                         for (j = 0; j < chartValues.length; j++) {
//                             chartData.push(
//                                 [chartValues[j].grouper, 
//                                 chartValues[j].count]);                            
//                         }
//             //            var selChrt={title:'', chartType:'pie', data:[]};
//                         // selChrt.title=this.labelValue(this.selectedLanguage, this.chartDefinition.chart_title);
//                         // selChrt.data=chartData;
//                         // charts.push(selChrt);
//                     }
//                     this.chartData=chartData;
//                 }
//             //}
//             //this.selCharts=charts;
//         }
//         console.log('ChartController dataForPieAndLine chartData', chartData);
//     }
// }

// customElements.define('chart-controller', ChartController);