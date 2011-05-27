Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
	
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'os'},
           {name: 'visits', type: 'int'}
        ],
        data: [
           ['Windows','21548'],
           ['Linux', '19864'],
           ['Mac OS', '18459'],
           ['Android','5762'],
           ['iOS', '5635']
        ]
    });
    
    var columnChart = Ext.create('Ext.chart.Chart', {
    	animate: true,
        shadow: true,
        store: store,
        style: 'background:#fff',
        
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['visits'],
            title: 'Number of Visits',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['os'],
            title: 'Operational System'
        }],
        
        series: [{
            type: 'column',
            axis: 'left',
            highlight: true,
            tips: {
              trackMouse: true,
              width: 140,
              height: 28,
              renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('os') + ': ' + storeItem.get('visits') + ' visits');
              }
            },
            xField: 'os',
            yField: ['visits']
        }]
    });
	
    Ext.create('Ext.window.Window', {
        width: 400,
        height: 300,
        hidden: false,
        maximizable: true,
        title: 'Column Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [columnChart]
    });
});