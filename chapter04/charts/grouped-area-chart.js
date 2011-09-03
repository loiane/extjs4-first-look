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
           ['June', '5231','1846'],
           ['July', '8721','4662'],
           ['August', '8642','9712'],
           ['September', '7231','6847'],
           ['October', '5642','5222'],
           ['November', '8642','7304'],
           ['December', '6154','5651'],
        ]
    });
	
	var groupedAreaChart = Ext.create('Ext.chart.Chart', {
		style: 'background:#fff',
        animate: true,
        store: store,
        shadow: true,
        legend: {
            position: 'right'
        },
        axes: [{
            type: 'Numeric',
            minimum: 0,
            position: 'left',
            fields: ['visits2009','visits2010'],
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
            axis: 'left',
            highlight: true,
            xField: 'month',
            yField: ['visits2009','visits2010'],
            tips: {
                trackMouse: true,
                width: 200,
                height: 28,
                renderer: function(storeItem, item) {
                    this.setTitle(item.storeField + ' - '
                            + storeItem.get('month')
                            + ' - ' + storeItem.get(item.storeField));
                }
              },
              style: {
                  opacity: 0.93
              }
        }]
	});
    
    Ext.create('Ext.Window', {
        width: 800,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Grouped Area Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [groupedAreaChart]
    });
});