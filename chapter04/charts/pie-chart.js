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
    
    var pieChart = Ext.create('Ext.chart.Chart', {
    	animate: true,
        shadow: true,
        store: store,
        style: 'background:#fff',
        shadow: true,
        legend: {
            position: 'right'
        },
        
        series: [{
            type: 'pie',
            showInLegend: true,
            field: ['visits'],
            label: {
                field: 'os',
                display: 'rotate',
                contrast: true,
                font: '18px Arial'
            },
            highlight: {
                segment: {
                  margin: 20
                }
            }/*,
            donut: 30*/
        }]
    });
	
    Ext.create('Ext.window.Window', {
        width: 600,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Pie Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [pieChart]
    });
});