Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {
	
	Ext.create('Ext.form.Panel', {
	    title: 'Form with Label',
	    width: 100,
	    bodyPadding: 10,
	    renderTo: 'form-example',
	    items: [{
	        xtype: 'label',
	        forId: 'myFieldId',
	        text: 'Just a Label',
	        margins: '0 0 0 10'
	    }]
	});
});
