Ext.Loader.setConfig({
    enabled: true
});

Ext.Loader.setPath('Ext.ux', '../../../extjs/examples/ux');

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.RowExpander',
]);

Ext.onReady(function() {
	
	Ext.define("Book", {
		extend: "Ext.data.Model",
	    fields: [
	        {name: 'id', type: 'int'},
	        {name: 'title', type: 'string'},
	        {name: 'pages', type: 'int'},
	        {name: 'numChapters', type: 'int'},
	        {name: 'authorId', type: 'int'}
	    ],
	    
	    hasMany: {model: 'Chapter', foreignKey: 'bookId'}
	});
	
	Ext.define("Chapter", {
		extend: "Ext.data.Model",
	    fields: [
	        {name: 'id', type: 'int'},
	        {name: 'number', type: 'int'},
	        {name: 'title', type: 'string'},
	        {name: 'bookId', type: 'int'}
	    ]
	});
	
	var store = Ext.create('Ext.data.Store', {
        model: 'Book',
       // autoLoad: true,
        proxy: {
			type: 'ajax',
			url : '../../../js/chapter05/data/books.json',
			reader: {
				type: 'json',
				root: 'books'
			}
		}
    });
	
	var data = {
			"books": [{
				   "id": 11,
			       "title": 'Learning Ext JS 3.2',
			       "pages": 432,
			       "numChapters": 17,
			       "chapters": [{
			        	"id": 111,
			        	"number": 1,
			        	"title": 'Getting Started'
			        },{
			        	"id": 112,
			        	"number": 2,
			        	"title": 'The Staples of Ext JS'
			        }]
			 }]
		};
	
	/*var tpl = new Ext.XTemplate(
			'<tpl for="books">',
		    '<p>Name: {title}</p>',
		    '<p>Kids: ',
		    '<tpl for="chapters">',
		            '<p>{number}</p>',
		    '</tpl></p>',
		    '</tpl>'
		);
		tpl.overwrite(Ext.getBody(), data);*/

    Ext.create('Ext.grid.Panel', {
        store: Ext.create('Ext.data.Store', {
            model: 'Book',
            autoLoad: true,
            proxy: {
    			type: 'ajax',
    			url : '../../../js/chapter05/data/books.json',
    			reader: {
    				type: 'json',
    				root: 'books'
    			}
    		}
        }),
        columns: [ {
            text     : 'Book',
            flex     : 1,
            sortable : false,
            dataIndex: 'title'
        },{
            text     : 'Pages',
            width    : 100,
            sortable : true,
            dataIndex: 'pages'
        },{
            text     : 'Chapters',
            width    : 100,
            sortable : true,
            dataIndex: 'numChapters'
        }],
        plugins: [{
            ptype: 'rowexpander',
            rowBodyTpl : [
                '<tpl for="chapters">',
	            '<p>{number}</p>',
			    '</tpl>',
            ]
        }],
        width: 400,
        height:200,
        title: 'Grid with Row Expander',
        renderTo: 'grid-example'
    });
});