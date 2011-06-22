Ext.onReady(function(){
	
    var store = Ext.create('Ext.data.JsonStore', {
        fields:['name', 'age'],
        data: [
            {name:'Loiane', age: 25},
            {name:'Peter', age: 24},
            {name:'Claudia', age: 30},
            {name:'John', age: 28},
            {name:'Steve', age: 32}
        ]
    });

    Ext.create('Ext.window.Window', {
    	title: 'Friends x Age',
        width:500,
        height:300,
        layout:'fit',
        maximizable: true,
        
        items: {
            xtype: 'chart',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: store,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['age'],
                title: 'Age',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Friend Name'
            }],
            legend:{
            	position: 'right'
            },
            series: [{
                type: 'column',
                axis: 'left',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('age'));
                  }
                },
                xField: 'name',
                yField: 'age',
                showInLegend: true
            }]
        }
    }).show();
});