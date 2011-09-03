Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
	
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'year'},
           {name: 'windows', type: 'int'},
           {name: 'linux', type: 'int'},
           {name: 'macos', type: 'int'}
        ],
        data: [
           ['2008','21548','19864','18459'],
           ['2009', '32458','28475','15874'],
           ['2010', '17856','25418','20673'],
           ['2011','2635','29183','23584']
        ]
    });
    
    var stackeBarChart = Ext.create('Ext.chart.Chart', {
    	animate: true,
        shadow: true,
        store: store,
        style: 'background:#fff',
        
        axes: [{
            type: 'Category',
            position: 'left',
            fields: ['year'],
            title: 'Year'
        }, {
            type: 'Numeric',
            position: 'bottom',
            fields: ['windows','linux','macos'],
            title: 'Number of Visits by OS',
            grid: true,
            minimum: 0
        }],
        
        series: [{
            type: 'bar',
            axis: 'bottom',
            highlight: true,
            tips: {
              trackMouse: true,
              width: 140,
              height: 28,
              renderer: function(storeItem, item) {
                  this.setTitle(String(item.value[1]) + ' Visits');
              }
            },
            xField: 'year',
            yField: ['windows','linux','macos'],
            stacked: true
        }],
        
        legend: {
            position: 'right'
        }
    });
	
    Ext.create('Ext.window.Window', {
        width: 600,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Stacked Bar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [stackeBarChart]
    });
});