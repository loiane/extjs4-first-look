Ext.require('Ext.form.*');

Ext.onReady(function() {
	
    Ext.createWidget('form', {
        renderTo: 'ext4-form',
        labelWidth: 75, 
        frame:true,
        title: 'Form - Ext 4',
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        
        fieldDefaults: {
            anchor: '100%',
            msgTarget: 'side'
        },
        items: [
        	Ext.create('Ext.form.field.ComboBox', {
        		store: Ext.create('Ext.data.ArrayStore', {
        			fields: ['id','lang'],
        	        data: [[1, 'PHP'], [2, 'Java'], [3, 'Ruby']]
                }),
                fieldLabel: 'Favorite Programming Language',
                valueField: 'id',
                displayField:'lang',
                typeAhead: false,
                mode: 'local',
                forceSelection: true,
                triggerAction: 'all',
                emptyText:'Select a language...',
                selectOnFocus:true,
                allowBlank: false
        	}) 
        ]

    });
	
});
