Ext.onReady(function(){

    Ext.form.Field.prototype.msgTarget = 'side';

    var simple = new Ext.FormPanel({
        labelWidth: 75, 
        frame:true,
        title: 'Form - Ext 3',
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        renderTo:'ext3-form',
        defaults: {width: 230},
        	
        items: [
        	new Ext.form.ComboBox({
        		store: new Ext.data.ArrayStore({
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