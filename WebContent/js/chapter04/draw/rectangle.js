Ext.onReady(function(){
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: false,
	    items: [{
	        type: 'rect',
	        fill: '#9966FF',
	        width: 350,
	        height: 200,
	        x: 20,
	        y: 20
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 400,
	    height: 280,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});