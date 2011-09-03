Ext.require(['*']);

Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: 'Panel 1',
		flex: 1
	});

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: 'Panel 2',
		flex: 3
	});

	var hbox = Ext.create('Ext.window.Window', {
		title: 'HBox Layout',
		width: 300,
		height:100,
		layout: {
	        type: 'hbox',
	        align: 'stretch'
	    },
		defaults: {
			bodyStyle: 'padding:10px'
	    },
		items: [panel1, panel2]
	});
	hbox.show();
});