Ext.require([
    'Ext.form.*'
]);

Ext.onReady(function() {

	Ext.apply(Ext.form.field.VTypes, {
	    IPAddress:  function(v) {
	        return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(v);
	    },
	    IPAddressText: 'Must be a numeric IP address',
	    IPAddressMask: /[\d\.]/i
	});
	
    Ext.create('Ext.form.Panel', {
        frame: true,
        title: 'Form Fields Validation',
        width: 340,
        bodyPadding: 5,
        renderTo: 'form-example',

        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 90,
            anchor: '100%',
            msgTarget: 'under'
        },

        items: [{
            xtype: 'textfield',
            name: 'textfield1',
            fieldLabel: 'Required',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'textfield2',
            fieldLabel: 'Min 2',
            minLength: 2
        },{
            xtype: 'textfield',
            name: 'textfield3',
            fieldLabel: 'Max 5',
            maxLength: 5
        },{
            xtype: 'textfield',
            name: 'textfield7',
            fieldLabel: 'Regex - Phone',
            regex: /^\d{3}-\d{3}-\d{4}$/,
            regexText: 'Must be in the format xxx-xxx-xxxx'
        },{
            xtype: 'textfield',
            name: 'textfield4',
            fieldLabel: 'Email',
            vtype: 'email'
        },{
            xtype: 'textfield',
            name: 'textfield5',
            fieldLabel: 'Alpha',
            vtype: 'alpha'
        },{
            xtype: 'textfield',
            name: 'textfield6',
            fieldLabel: 'AlphaNum',
            vtype: 'alphanum'
        },{
            xtype: 'textfield',
            name: 'textfield6',
            fieldLabel: 'Url',
            vtype: 'url'
        },{
            xtype: 'textfield',
            name: 'textfield8',
            fieldLabel: 'Custom: IP Address',
            vtype: 'IPAddress'
        }]
    });
});
