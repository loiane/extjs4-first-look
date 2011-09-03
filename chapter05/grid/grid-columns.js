Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.onReady(function() {

    Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.ArrayStore', {
            fields: [
                {name: 'book'},
                {name: 'topic', type: 'string'},
                {name: 'version', type: 'string'},
                {name: 'released', type: 'boolean'},
                {name: 'releasedDate', type: 'date'},
                {name: 'value', type: 'number'}
            ],
            data: [
                ['Ext JS 4: First Look','Ext JS','4',false,null,0],
                ['Learning Ext JS 3.2','Ext JS','3.2',true,'2010/10/01',40.49],
                ['Ext JS 3.0 Cookbook','Ext JS','3',true,'2009/10/01',44.99],
                ['Learning Ext JS','Ext JS','2.x',true,'2008/11/01',35.99],
            ]
        }),
        selModel: Ext.create('Ext.selection.CheckboxModel'),
        columns: [ 
            Ext.create('Ext.grid.RowNumberer'),          
        {
            text: 'Book',
            flex: 1,
            dataIndex: 'book'
        },{
            text: 'Category',
            xtype:'templatecolumn',
            width: 100,
            tpl: '{topic} {version}'
        },{
            text: 'Already Released?',
            xtype: 'booleancolumn',
            width: 100,
            dataIndex: 'released',
            trueText: 'Yes',
            falseText: 'No'
        },{
            text: 'Released Date',
            xtype:'datecolumn',
            width: 100,
            dataIndex: 'releasedDate',
            format:'m-Y'
        },{
            text: 'Price',
            xtype:'numbercolumn',
            width: 80,
            dataIndex: 'value',
            renderer: Ext.util.Format.usMoney
        },{
            xtype:'actioncolumn', 
            width:50,
            items: [{
                icon: 'images/edit.png', 
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.MessageBox.alert('Edit',rec.get('book'));
                }
            },{
                icon: 'images/delete.gif',
                tooltip: 'Delete',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.MessageBox.alert('Delete',rec.get('book'));
                }                
            }]
        }],
        width: 550,
        title: 'Ext JS Books',
        renderTo: 'grid-example'
    });
});