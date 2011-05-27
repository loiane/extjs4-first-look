Ext.onReady(function(){
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: true, //resize
	    items: [{
	        type: 'rect',
	        fill: '#79BB3F',
	        width: 180,
	        height: 200,
	        x: 100,
	        y: 100
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 215,
	    height: 235,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});