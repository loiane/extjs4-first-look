Ext.onReady(function(){

    // static data for the store
    var myData = [
        ['Learning Ext JS',                            'Packt', 'November 2008'],
        ['Learning Ext JS 3.2',                        'Packt', 'October 2010'],
        ['Ext JS 3.0 Cookbook',                        'Packt', 'October 2009'],
        ['Oracle Application Express 4.0 with Ext JS', 'Packt', 'March 2011']
    ];

    // create the data store
    var store = new Ext.data.ArrayStore({
        fields: [
           {name: 'book'},
           {name: 'manufacturer'},
           {name: 'published',  type: 'date', dateFormat: 'F Y'},
        ]
    });

    // manually load local data
    store.loadData(myData);

    // create the Grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {
                id       :'book',
                header   : 'Book', 
                width    : 250, 
                sortable : true, 
                dataIndex: 'book'
            },
            {
                header   : 'Manufacturer', 
                width    : 75, 
                sortable : true, 
                dataIndex: 'manufacturer'
            },
            {
                header   : 'Published', 
                width    : 100, 
                sortable : true, 
                renderer : Ext.util.Format.dateRenderer('F Y'), 
                dataIndex: 'published'
            }
        ],
        stripeRows: true,
        height: 140,
        width: 430,
        title: 'Ext JS Books - Ext 3',
        stateId: 'grid'
    });

    grid.render('grid3');
});