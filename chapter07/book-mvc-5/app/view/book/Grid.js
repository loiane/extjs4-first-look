Ext.define('App.view.book.Grid' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.bookList',

	title: 'Books',

	initComponent: function() {
		
		this.store = 'Book';
		
		this.columns = [
		          {text: "Title", width: 120, dataIndex: 'title', sortable: true},
		          {text: "Pages", flex: 1, dataIndex: 'pages', sortable: true},
		          {text: "Topic", width: 115, dataIndex: 'topic', sortable: true},
		          {text: "Publisher", width: 100, dataIndex: 'publisher', sortable: true}
		];

		this.viewConfig = {
	        forceFit: true
	    };
	    
		this.callParent(arguments);
	}
});