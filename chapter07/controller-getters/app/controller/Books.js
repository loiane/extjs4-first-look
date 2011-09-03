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
		
		this.getStore('Book').load();
		
		var model = this.getModel('Book');
		
		var panel = this.getView('book.DetailPanel');
		
		console.log(panel);
		
		this.control({
            'viewport > bookList dataview': {
            	itemclick: this.bindGridToPanel
            }
        });
	},
	
	test : function(){
		var panel = this.getView('book.DetailPanel');
	},

	bindGridToPanel : function(grid, record) {
		//this.getView('book.DetailPanel').updateDetail(record.data);
	}     
});