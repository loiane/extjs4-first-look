Ext.onReady(function(){

    Ext.form.Field.prototype.msgTarget = 'side';

    var simple = new Ext.FormPanel({
        labelWidth: 75, 
        url:'save-form.php',
        frame:true,
        title: 'Form - Ext 3',
        bodyStyle:'padding:5px 5px 0',
        width: 350,
        renderTo:'ext3-form',
        defaults: {width: 230},
        defaultType: 'textfield',
        
        items: [{
                fieldLabel: 'First Name',
                name: 'first',
                allowBlank:false
            },{
                fieldLabel: 'Last Name',
                name: 'last',
                allowBlank:false
            }
        ],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });

});