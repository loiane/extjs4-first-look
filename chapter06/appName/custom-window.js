Ext.require([
    'Ext.window.*'
]);

Ext.onReady(function() {
	
	Ext.createWidget('window', {
		
		renderTo: 'defaultUIWindow',
        width   : 150,
        height  : 150,

        title: 'Window',

        bodyPadding: 5,
        html       : 'Some text here',

        collapsible: false,
        closable:false
        
    }).show();
	
	Ext.createWidget('window', {
		ui:'custom',

		renderTo: 'customUIWindow',
        width   : 150,
        height  : 150,

        title: 'Window',

        bodyPadding: 5,
        html       : 'Some text here',

        collapsible: false,
        closable:false
        
    }).show();
});

