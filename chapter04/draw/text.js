Ext.onReady(function(){
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: false,
	    items: [{
	        type: 'text',
            text: 'Hello, World!',
            fill: '#000',
            font: '20px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            x: 30,
            y: 30
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 215,
	    height: 100,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});