Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {

    Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Form Fields',
        width: 340,
        bodyPadding: 5,
        renderTo: 'form-example',

        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 90,
            anchor: '100%'
        },

        items: [{
            xtype: 'hiddenfield',
            name: 'hiddenfield1',
            value: 'Hidden field value'
        },{
            xtype: 'displayfield',
            name: 'displayfield1',
            fieldLabel: 'Display field',
            value: 'Display field <span style="color:red;">value</span>'
        },{
            xtype: 'textfield',
            name: 'textfield1',
            fieldLabel: 'Text field',
            value: 'Text field value'
        },{
            xtype: 'textfield',
            name: 'password1',
            inputType: 'password',
            fieldLabel: 'Password field'
        },{
            xtype: 'textareafield',
            name: 'textarea1',
            fieldLabel: 'TextArea',
            value: 'Textarea value'
        },{
            xtype: 'filefield',
            name: 'file1',
            fieldLabel: 'File upload'
        },{
            xtype: 'timefield',
            name: 'time1',
            fieldLabel: 'Time Field',
            minValue: '8:00 AM',
            maxValue: '5:00 PM',
            increment: 30
        },{
            xtype: 'datefield',
            name: 'date1',
            fieldLabel: 'Date Field',
            value: new Date()
        },{
        	xtype: 'combobox',
        	fieldLabel: 'Combobox',
            displayField: 'name',
            store: Ext.create('Ext.data.Store', {
       		 fields: [
       			     {type: 'string', name: 'abbr'},
       			     {type: 'string', name: 'name'},
       			     {type: 'string', name: 'slogan'}
       			 ],
       			 data: [
       			     {"name":"Alabama"},
       			     {"name":"Alaska"},
       			     {"name":"Arizona"},
       			     {"name":"Arkansas"},
       			     {"name":"California"}
       			 ]
       		 }),
            queryMode: 'local',
            typeAhead: true
        },{
            xtype: 'numberfield',
            name: 'numberfield1',
            fieldLabel: 'Number field',
            value: 20,
            minValue: 0,
            maxValue: 50
        },{
            xtype: 'checkboxfield',
            name: 'checkbox1',
            fieldLabel: 'Checkbox',
            boxLabel: 'box label'
        },{
            xtype: 'radiofield',
            name: 'radio1',
            value: 'radiovalue1',
            fieldLabel: 'Radio buttons',
            boxLabel: 'radio 1'
        },{
            xtype: 'radiofield',
            name: 'radio1',
            value: 'radiovalue2',
            fieldLabel: '',
            labelSeparator: '',
            hideEmptyLabel: false,
            boxLabel: 'radio 2'
        },{
            xtype: 'multislider',
            fieldLabel: 'Multi Slider',
            values: [25, 50, 75],
            increment: 5,
            minValue: 0,
            maxValue: 100
        },{
            xtype: 'sliderfield',
            fieldLabel: 'Single Slider',
            value: 50,
            increment: 10,
            minValue: 0,
            maxValue: 100
        }]
    });
});
