Ext.define('Ext.chart.theme.Blue', {
    extend: 'Ext.chart.theme.Base',
    
    baseColor: '#000099',
    colors: ['#3399FF', '#0066CC', '#003366'],

    constructor: function(config) {
        this.callParent([Ext.apply({
            axis: {
                fill: this.baseColor,
                stroke: this.baseColor
            },
            axisLabelLeft: {
                fill: this.baseColor
            },
            axisLabelBottom: {
                fill: this.baseColor
            },
            axisTitleLeft: {
                fill: this.baseColor
            },
            axisTitleBottom: {
                fill: this.baseColor
            },
            colors: this.colors
        }, config)]);
    }
});

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
    
    var groupedBarChart = Ext.create('Ext.chart.Chart', {
    	animate: true,
        shadow: true,
        store: store,
        style: 'background:#fff',
        theme: 'Blue',
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
            yField: ['windows','linux','macos']
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
        title: 'Grouped Bar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [groupedBarChart]
    });
});