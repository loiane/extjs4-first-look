Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', '../ux/');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.grid.PagingScroller'
]);

Ext.onReady(function(){

    Ext.define('Book', {
        extend: 'Ext.data.Model',
        fields: [
           {name: 'name'},
           {name: 'pages', type: 'int'}
        ]
    });


    // create the Data Store
    var store = Ext.create('Ext.data.Store', {
        id: 'store',
        pageSize: 50,
        // allow the grid to interact with the paging scroller by buffering
        //buffered: true,
        // never purge any data, we prefetch all up front
        //purgePageCount: 0,
        model: 'Book',
        proxy: {
			type: 'ajax',
			url : '../../../js/chapter05/data/infinite.json',
			reader: {
				type: 'json',
				root: 'books'
			}
		},
		autoLoad:true
    });

    var grid = Ext.create('Ext.grid.Panel', {
        width: 400,
        height: 500,
        title: 'Bufffered Grid - 100k records',
        store: store,
        verticalScroller: {
            xtype: 'paginggridscroller',
            activePrefetch: false
        },
        loadMask: true,
        disableSelection: true,
        invalidateScrollerOnRefresh: false,
        viewConfig: {
            trackOver: false
        },
        // grid columns
        columns:[{
            text: 'Book Name',
            flex:1 ,
            sortable: true,
            dataIndex: 'name'
        },{
            text: 'Pages',
            width: 125,
            sortable: true,
            dataIndex: 'pages'
        }],
        renderTo: 'grid-example'
    });

    //store.guaranteeRange(0, 49);
});


