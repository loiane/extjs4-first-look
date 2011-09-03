Ext.define('App.controller.Books', {
	extend: 'Ext.app.Controller',
	
	stores: ['Book'],
	
    models: ['Book'],
	
	views: ['book.Grid','book.DetailPanel'],
	
	refs: [
	        {
	            ref: 'panel',
	            selector: 'detailPanel'
	        }
	    ],


	init: function() {
		
		this.getBookStore().load();
		
		this.control({
            'viewport > bookList dataview': {
            	itemclick: this.bindGridToPanel
            }
        });
	},

	bindGridToPanel : function(grid, record) {
		this.getPanel().updateDetail(record.data);
	}     
});