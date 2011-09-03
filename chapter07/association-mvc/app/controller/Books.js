Ext.define('App.controller.Books', {
	extend: 'Ext.app.Controller',
	
    models: ['Author', 'Book', 'Chapter'],
	
	init: function() {
		
		this.getAuthorModel().load(1, {
			
		    success: function(author) {
		    	
		        var books = author.books();
		        
		        console.log("Author "+ author.get('name') + " has written " + books.getCount() + " books");
		        
		        books.each(function(book) {

		        	var title = book.get('title');
		            var chapters = book.chapters();
		            
		            console.log("Book " + title + " has " +  chapters.getCount() + " chapters");
		        	
		            chapters.each(function(chapter) {
		            	console.log(chapter.get('number') + " " + chapter.get('title'));
		            });
		        });
		    }
		});
		
	}
	
});