Ext.require(['*']);

Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: 'Panel 1',
		flex: 2 
	});

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: 'Panel 2',
		flex: 1 
	});

	var vbox = Ext.create('Ext.window.Window', {
		title: 'VBox Layout',
		width: 82,
		height: 300,
		layout: {                        
	        type: 'vbox',
	        align: 'stretch'
	    },
		defaults: {
			bodyStyle: 'padding:15px'
	    },
		items: [panel1, panel2]
	});
	vbox.show();
});