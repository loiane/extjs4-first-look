Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    
	var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'month'},
           {name: 'visits2009', type: 'int'},
           {name: 'visits2010', type: 'int'}
        ],
        data: [
           ['January','4875','3587'],
           ['February', '3854','2489'],
           ['March', '2358','4965'],
           ['April','5693','1684'],
           ['May', '6751','2943'],
           ['June', '5231','1846']/*,
           ['July', '8721','4662'],
           ['August', '8642','9712'],
           ['September', '7231','6847'],
           ['October', '5642','5222'],
           ['November', '8642','7304'],
           ['December', '6154','5651']*/
        ]
    });
	
	var groupedRadarChart = Ext.create('Ext.chart.Chart', {
		style: 'background:#fff',
        animate: true,
        store: store,
        shadow: true,
        legend: {
            position: 'right'
        },
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
            yField: 'visits2009',
            highlight: true,
            showMarkers: true,
            markerConfig: {
                radius: 4
            },
            style: {
                'stroke-width': 2,
                fill: 'none'
            }
        },
        {
            type: 'radar',
            xField: 'month',
            yField: 'visits2010',
            highlight: true,
            showMarkers: true,
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
        items: [groupedRadarChart]
    });
});