Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    
	var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'chapters', type: 'int'}
        ],
        data: [
           ['4']
        ]
    });
	
	var gaugeChart = Ext.create('Ext.chart.Chart', {
		style: 'background:#fff',
        animate: true,
        store: store,
        shadow: true,
        axes: [{
            type: 'gauge',
            position: 'gauge',
            minimum: 0,
            maximum: 7,
            steps: 7,
            margin: -10
        }],
        series: [{
            type: 'gauge',
            field: 'chapters',
            //donut: 30,
            //needle: true,
            highlight: true
        }]
	});
    
    Ext.create('Ext.Window', {
        width: 600,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Gauge Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [gaugeChart]
    });
});