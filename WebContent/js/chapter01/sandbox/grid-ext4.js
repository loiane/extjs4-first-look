Ext4.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext4.onReady(function(){
	
    Ext4.regModel('Book', {
        fields: [
            {name: 'book'},
            {name: 'manufacturer'},
            {name: 'published',  type: 'date', dateFormat: 'F Y'}
         ]
    });
    
    // Array data for the grids
    Ext4.grid.dummyData = [
        ['Drupal 7 Module Development',           'Packt', 'December 2010'],
        ['PHP 5 Social Networking',               'Packt', 'October 2010'],
        ['Object-Oriented Programming with PHP5', 'Packt', 'December 2007'],
        ['Expert PHP 5 Tools',                    'Packt', 'March 2010']
    ];
    
    var store = new Ext4.data.ArrayStore({
        model: 'Book',
        data: Ext4.grid.dummyData
    });

    var grid2 = new Ext4.grid.GridPanel({
        store: store,
        headers: [
            {text: "Book", width: 250, dataIndex: 'book'},
            {text: "Manufacturer", width: 75, dataIndex: 'manufacturer'},
            {text: "Published", width: 100, dataIndex: 'published', 
            	renderer: Ext4.util.Format.dateRenderer('F Y')}
        ],
        columnLines: true,
        width: 430,
        height: 140,
        title: 'PHP Books - Ext 4',
        renderTo: 'grid4'
    });
});