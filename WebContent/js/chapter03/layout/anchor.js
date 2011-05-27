Ext.require(['*']);

Ext.onReady(function(){

	var panel1 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 1',
		html: '100% 30%',
		anchor:'100% 30%'
	});

	var panel2 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 2',
		html: '80% 25%',
		anchor:'80% 25%'
	});

	var panel3 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 3',
		html: '-70 20%',
		anchor:'-70 20%'
	});

	var panel4 = Ext.create('Ext.panel.Panel', {
		title: 'Panel 4',
		html: '-30 25%',
		anchor:'-30 25%'
	});

	var anchor = Ext.create('Ext.window.Window', {
		title: 'Anchor Layout',
		width: 250,
		height:300,
		layout:'anchor',
		defaults: {
        	bodyStyle: 'padding:10px'
        },
		items: [panel1, panel2, panel3, panel4]
	});
	anchor.show();
	
});