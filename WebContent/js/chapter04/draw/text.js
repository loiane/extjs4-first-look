Ext.onReady(function(){
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: true, //resize
	    items: [{
	        type: 'text',
            text: 'Hello, World!',
            fill: '#000',
            font: '20px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif'
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 215,
	    height: 235,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});