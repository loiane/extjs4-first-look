Ext.require(['*']);

Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: 'x: 10; y: 10 - anchor: 80% 80%',
		anchor:'80% 80%',
		x: 10,
        y: 10
	});

	var absolute = Ext.create('Ext.window.Window', {
		title: 'Absolute Layout',
		width: 300,
		height: 200,
		layout:'absolute',
		defaults: {
        	bodyStyle: 'padding:10px'
	    },
		items: [panel1]
	});
	absolute.show();
});