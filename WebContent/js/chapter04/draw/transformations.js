Ext.onReady(function(){
	
	var drawComponent1 = Ext.create('Ext.draw.Component', {
	    viewBox: false, //resize
	    autoSize: true,
        padding: 20,
	    items: [{
	        type: 'text',
            text: 'Hello, World!',
            fill: '#000',
            font: '20px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            rotate: {
                degrees: 45
            }
	    }]
	});
	
	var drawComponent = Ext.create('Ext.draw.Component', {
	    viewBox: false, //resize
	    autoSize: true,
        padding: 20,
	    items: [{
	        type: 'text',
            text: 'Hello, World!',
            fill: '#000',
            font: '20px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            translate: {
            	x: 1,
            	y: 1
            }
	    }]
	});
	
	var drawComponent2 = Ext.create('Ext.draw.Component', {
	    viewBox: false, //resize
	    autoSize: true,
        padding: 20,
	    items: [{
	        type: 'text',
            text: 'Hello, World!',
            fill: '#000',
            font: '20px "Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
            scale: {
            	x: 1,
            	y: 3
            }
	    }]
	});

	Ext.create('Ext.Window', {
	    width: 200,
	    height: 200,
	    layout: 'fit',
	    items: [drawComponent]
	}).show();
});