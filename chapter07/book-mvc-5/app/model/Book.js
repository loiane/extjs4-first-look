Ext.define('App.model.Book',{
	extend: 'Ext.data.Model',
	fields: ['id','title','pages','numChapters','topic','publisher',
	         'isbn','isbn13']
});