Ext.onReady(function(){
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: true, //resize
	    items: [{
	        type: 'square',
	        fill: '#79BB3F',
	        width: 180
	        //size: 10
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 215,
	    height: 235,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});