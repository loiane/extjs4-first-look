Ext.onReady(function(){

    var simple = Ext.create('Ext.form.Panel', {
        
        frame:true,
        title: 'Form - Ext 4',
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        renderTo:'ext4-form',
        
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank:false
        },{
            fieldLabel: 'Last Name',
            name: 'last',
            allowBlank:false
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });
});
