Ext.require(['Ext.data.*', 'Ext.grid.*']);
Ext.onReady(function() {
	
    Ext.define('Contact', {
        extend: 'Ext.data.Model',
        fields: ['name', 'email','phone']
    });

    var Contacts = Ext.create('Ext.data.Store', {
        model: 'Contact',
        data: [
            {name: 'Loiane', email: 'me@loiane.com', phone: '1234-5678'},
            {name: 'Peter', email: 'peter@email.com', phone: '2222-2222'},
            {name: 'Ane', email: 'ane@email.com', phone: '3333-3333'},
            {name: 'Harry', email: 'harry@email', phone: '4444-4444'},
            {name: 'Camile', email: 'camile@email.com', phone: '5555-5555'}
        ]
    });
    
    Ext.create('Ext.grid.Panel', {
        renderTo: 'grid-example',
        frame: true,
        store: Contacts,
        width: 350,
        title: 'Contacts',
        selType: 'rowmodel',
        columns: [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        },{
            text: 'Email',
            flex: 1,
            dataIndex: 'email',
            editor: {
                xtype:'textfield',
                allowBlank:false
            }
        },{
            text: 'Phone',
            flex: 1,
            dataIndex: 'phone',
            editor: {
                xtype:'textfield',
                allowBlank:false
            }
        }],
        plugins: [
            Ext.create('Ext.grid.plugin.RowEditing', {
            	clicksToEdit: 1
            })
        ]
    });
});
