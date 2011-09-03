Ext.define('App.store.Book', {
    extend: 'Ext.data.Store',	
    model: 'App.model.Book',
	proxy: {
		type: 'ajax',
		url: 'data/books.json'
	}
});