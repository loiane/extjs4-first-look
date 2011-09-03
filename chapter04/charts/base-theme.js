Ext.define('Ext.chart.theme.Custom', {
    extend: 'Ext.chart.theme.Base',
    
    constructor: function(config) {
        this.callParent([Ext.apply({
        	background: false,
            axis: {
                stroke: '#444',
                'stroke-width': 1
            },
            axisLabelTop: {
                fill: '#444',
                font: '12px Arial, Helvetica, sans-serif',
                spacing: 2,
                padding: 5,
                renderer: function(v) { return v; }
            },
            axisLabelRight: {
                fill: '#444',
                font: '12px Arial, Helvetica, sans-serif',
                spacing: 2,
                padding: 5,
                renderer: function(v) { return v; }
            },
            axisLabelBottom: {
                fill: '#444',
                font: '12px Arial, Helvetica, sans-serif',
                spacing: 2,
                padding: 5,
                renderer: function(v) { return v; }
            },
            axisLabelLeft: {
                fill: '#444',
                font: '12px Arial, Helvetica, sans-serif',
                spacing: 2,
                padding: 5,
                renderer: function(v) { return v; }
            },
            axisTitleTop: {
                font: 'bold 18px Arial',
                fill: '#444'
            },
            axisTitleRight: {
                font: 'bold 18px Arial',
                fill: '#444',
                rotate: {
                    x:0, y:0,
                    degrees: 270
                }
            },
            axisTitleBottom: {
                font: 'bold 18px Arial',
                fill: '#444'
            },
            axisTitleLeft: {
                font: 'bold 18px Arial',
                fill: '#444',
                rotate: {
                    x:0, y:0,
                    degrees: 270
                }
            },
            series: {
                'stroke-width': 0
            },
            seriesLabel: {
                font: '12px Arial',
                fill: '#333'
            },
            marker: {
                stroke: '#555',
                fill: '#000',
                radius: 3,
                size: 3
            },
            colors: [ "#94ae0a", "#115fa6","#a61120", "#ff8809", "#ffd13e", "#a61187", "#24ad9a", "#7c7474", "#a66111"],
            seriesThemes: [{
                fill: "#115fa6"
            }, {
                fill: "#94ae0a"
            }, {
                fill: "#a61120"
            }, {
                fill: "#ff8809"
            }, {
                fill: "#ffd13e"
            }, {
                fill: "#a61187"
            }, {
                fill: "#24ad9a"
            }, {
                fill: "#7c7474"
            }, {
                fill: "#a66111"
            }],
            markerThemes: [{
                fill: "#115fa6",
                type: 'circle' 
            }, {
                fill: "#94ae0a",
                type: 'cross'
            }, {
                fill: "#a61120",
                type: 'plus'
            }]
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
    	theme: 'Custom',
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
        //title: 'Grouped Bar Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [groupedBarChart]
    });
});