Ext.define('App.controller.Books', {
	extend: 'Ext.app.Controller',
	
	stores: ['Book'],
	
    models: ['Book'],
	
	views: ['book.Grid'],

	init: function() {
		
		this.getBookStore().load();
	}
});