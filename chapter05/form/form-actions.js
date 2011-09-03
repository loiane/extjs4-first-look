Ext.require(['Ext.form.*']);

Ext.onReady(function() {

	 Ext.create('Ext.form.Panel', {
		title: 'Book Info',
		renderTo: 'form-example',
		width: 300,
        bodyPadding: 5,
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 90,
            anchor: '100%'
        },
		items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            allowBlank: false
        }],
        buttons: [{
            text: 'Validate',
            handler: function() {
                var form = this.up('form').getForm();
                form.load({
            		url: '../../../js/chapter05/data/form.json',
            		failure: function(form, action) {
            			Ext.Msg.alert("Load failed", action.result.errorMessage);
            		}
            	});
            }
        }]
	});
});