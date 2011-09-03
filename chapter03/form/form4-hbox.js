Ext.require([
	'Ext.form.Panel',
	'Ext.layout.container.Anchor'
]);

Ext.onReady(function(){

    var hboxForm = Ext.create('Ext.form.Panel', {
        
        frame:true,
        title: 'Form - Ext 4',
        bodyStyle:'padding:5px 5px 0',
        width: 600,
        renderTo:'ext4-form',
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        defaults: {
            border: false,
            xtype: 'panel',
            flex: 1,
            layout: 'anchor'
        },

        layout: 'hbox',
        items: [{
            items: [{
                xtype:'textfield',
                fieldLabel: 'First Name',
                anchor: '-10',
                name: 'first',
                allowBlank:false
            }, {
                xtype:'textfield',
                fieldLabel: 'Phone Number',
                anchor: '-10',
                name: 'phone',
                allowBlank:false
            }]
        }, {
            items: [{
                xtype:'textfield',
                fieldLabel: 'Last Name',
                anchor: '100%',
                name: 'last',
                allowBlank:false
            },{
                xtype:'textfield',
                fieldLabel: 'Email',
                anchor: '100%',
                name: 'email',
                vtype:'email'
            }]
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });
});
