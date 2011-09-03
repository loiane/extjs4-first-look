Ext.require(['*']);

Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: '.25',
		columnWidth: .25
	});

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: '.25',
		columnWidth: .25
	});

	var panel3 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 3',
		html: '1/2',
		columnWidth: 1/2
	});

	var column = Ext.create('Ext.window.Window', {
		title: 'Column Layout',
		width: 400,
		layout:'column',
		defaults: {
        	height: 60,
        	bodyStyle: 'padding:10px'
        },
		items: [panel1, panel2, panel3]
	});
	column.show();
});