Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    
	var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'month'},
           {name: 'visits', type: 'int'}
        ],
        data: [
           ['January','4875'],
           ['February', '3854'],
           ['March', '2358'],
           ['April','5693'],
           ['May', '6751'],
           ['June', '5231'],
           ['July', '8721'],
           ['August', '8642'],
           ['September', '7231'],
           ['October', '5642'],
           ['November', '8642'],
           ['December', '6154'],
        ]
    });
	
	var scatterChart = Ext.create('Ext.chart.Chart', {
		style: 'background:#fff',
        animate: true,
        store: store,
        shadow: true,
        axes: [{
            type: 'Numeric',
            minimum: 0,
            position: 'left',
            fields: ['visits'],
            title: 'Number of Visits',
            minorTickSteps: 1
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['month'],
            title: 'Month of the Year'
        }],
        series: [{
            type: 'scatter',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            xField: 'month',
            yField: 'visits'
        }]
	});
    
    Ext.create('Ext.Window', {
        width: 600,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Scatter Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [scatterChart]
    });
});