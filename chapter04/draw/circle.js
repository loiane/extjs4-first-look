Ext.onReady(function(){
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: false,
	    items: [{
	        type: 'circle',
	        fill: '#9966FF',
	        radius: 100,
	        x: 110,
	        y: 110
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 240,
	    height: 250,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});