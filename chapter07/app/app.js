Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.onReady(function(){
	
    Ext.define('Book',{
        extend: 'Ext.data.Model',
        fields: ['id','title','pages','numChapters','topic','publisher',
                 'isbn','isbn13']
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'Book',
        proxy: {
            type: 'ajax',
            url: 'data/books.json'
        }
    });

    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        title: 'Books',
        columns: [
            {text: "Title", width: 120, dataIndex: 'title', sortable: true},
            {text: "Pages", flex: 1, dataIndex: 'pages', sortable: true},
            {text: "Topic", width: 115, dataIndex: 'topic', sortable: true},
            {text: "Publisher", width: 100, dataIndex: 'publisher', sortable: true}
        ],
        viewConfig: {
            forceFit: true
        },
        region: 'center'
    });
        
    var bookTplMarkup = [
        '<b>Title:</b> {title}<br/>',
        '<b>Pages:</b> {pages}<br/>',
        '<b>No Chapters:</b> {numChapters}<br/>',
        '<b>Topic:</b> {topic}<br/>',
        '<b>Publisher:</b> {publisher}<br/>',
        '<b>ISBN:</b> {isbn}<br/>',
        '<b>ISBN 13:</b> {isbn13}<br/>'
    ];
    var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
    
    var details = Ext.create('Ext.panel.Panel',{
    	id: 'bookDetail',
        bodyPadding: 7,
        bodyStyle: "background: #ffffff;",
        html: 'Please select a book to see additional details.',
        height: 150,
        split: true,
        region: 'south'
    });
    
    Ext.create('Ext.container.Viewport', {
        frame: true,
        layout: 'border',
        items: [grid,details]
    });
    
    grid.getSelectionModel().on('selectionchange', function(sm, selectedRecord) {
        if (selectedRecord.length) {
            var detailPanel = Ext.getCmp('bookDetail');
            bookTpl.overwrite(detailPanel.body, selectedRecord[0].data);
        }
    });

    store.load();
});