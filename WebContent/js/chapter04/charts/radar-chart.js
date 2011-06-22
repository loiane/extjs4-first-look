Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    
	var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'month'},
           {name: 'visits', type: 'int'}
        ],
        data: [
           ['January','1875'],
           ['February', '1854'],
           ['March', '1358'],
           ['April','1693'],
           ['May', '1751'],
           ['June', '1231']/*,
           ['July', '1721'],
           ['August', '1642'],
           ['September', '1231'],
           ['October', '1642'],
           ['November', '1642'],
           ['December', '1154']*/
        ]
    });
	
	var radarChart = Ext.create('Ext.chart.Chart', {
		style: 'background:#fff',
        animate: true,
        store: store,
        shadow: true,
        axes: [{
            type: 'Radial',
            position: 'radial',
            label: {
                display: true
            }
        }],
        series: [{
            type: 'radar',
            xField: 'month',
            yField: 'visits',
            showInLegend: true,
            showMarkers: true,
            highlight: true,
            markerConfig: {
                radius: 4
            },
            style: {
                'stroke-width': 2,
                fill: 'none'
            }
        }]
	});
    
    Ext.create('Ext.Window', {
        width: 500,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Radar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [radarChart]
    });
});