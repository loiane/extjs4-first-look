/*!
 * Ext JS Library 3.3.1
 * Copyright(c) 2006-2010 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */
Ext.onReady(function(){
	
	Ext.chart.Chart.CHART_URL = '../../../ext3/resources/charts.swf';

    var store = new Ext.data.JsonStore({
        fields:['name', 'age'],
        data: [
            {name:'Loiane', age: 25},
            {name:'Peter', age: 24},
            {name:'Claudia', age: 30},
            {name:'John', age: 28},
            {name:'Steve', age: 32}
        ]
    });

    var chart = new Ext.Window({
        title: 'Friends x Age',
        width:500,
        height:300,
        layout:'fit',

        items: {
            xtype: 'columnchart',
            store: store,
            xField: 'name',
            yField: 'age',
            xAxis: new Ext.chart.CategoryAxis({
                title: 'Friend Name'
            }),
            yAxis: new Ext.chart.NumericAxis({
                displayName: 'Age'
            })
        }
    });
    chart.show();
});