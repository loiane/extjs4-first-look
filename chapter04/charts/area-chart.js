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
	
	var areaChart = Ext.create('Ext.chart.Chart', {
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
            type: 'area',
            highlight: true,
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function(storeItem, item) {
                  this.setTitle(storeItem.get('month') + ': ' + storeItem.get('visits') + ' visits');
                }
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
        title: 'Area Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [areaChart]
    });
});