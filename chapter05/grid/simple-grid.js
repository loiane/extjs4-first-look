Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.onReady(function() {

    Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.ArrayStore', {
            fields: [
                {name: 'book'},
                {name: 'author'}
            ],
            data: [['Ext JS 4: First Look','Loiane Groner']]
        }),
        columns: [ {
            text     : 'Book',
            flex     : 1,
            sortable : false,
            dataIndex: 'book'
        },{
            text     : 'Author',
            width    : 100,
            sortable : true,
            dataIndex: 'author'
        }],
        width: 300,
        title: 'Simple Grid',
        renderTo: 'grid-example'
    });
});