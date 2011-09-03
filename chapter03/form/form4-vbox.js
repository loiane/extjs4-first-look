Ext.require([
	'Ext.form.Panel',
	'Ext.layout.container.Anchor'
]);

Ext.onReady(function(){

    var vboxForm = Ext.create('Ext.form.Panel', {
        
        frame:true,
        title: 'Form - Ext 4',
        bodyStyle:'padding:5px 5px 0',
        width: 300,
        height: 175,
        renderTo:'ext4-form',
        
        fieldDefaults: {
            anchor: '100%',
            msgTarget: 'side'
        },

        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        
        items: [{
        	xtype:'textfield',
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank:false
        },{
        	xtype:'textfield',
            fieldLabel: 'Last Name',
            name: 'last',
            allowBlank:false
        },{
            xtype:'textfield',
            fieldLabel: 'Phone Number',
            name: 'phone',
            allowBlank:false
        },{
            xtype:'textfield',
            fieldLabel: 'Email',
            name: 'email',
            vtype:'email'
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });
});
