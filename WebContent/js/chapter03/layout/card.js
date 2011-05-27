Ext.require(['*']);

Ext.onReady(function(){
	
	var navHandler = function(btn) {
		
		var activeItem = card.layout.activeItem;
		var active = card.items.indexOf(activeItem);

		if (btn.id == 'nextButton') {
			active += 1;
		}
		else if (btn.id == 'prevButton') {
			active -= 1;
		}
		
		card.layout.setActiveItem(active);
		
		var prev = card.dockedItems.items[1].items.items[0];
		var next = card.dockedItems.items[1].items.items[2];
		
		if (active == 0){
			prev.setDisabled(true);
		} else if (active == 1){
			prev.setDisabled(false);
			next.setDisabled(false);
		} else if (active == 2){
			next.setDisabled(true);
		}
		
	};

   var card = Ext.create('Ext.window.Window', {
       title: 'Card Layout',
       width: 200,
       height: 150,
       layout: 'card',
       activeItem: 0,
       defaults: {
           border:false,
           bodyStyle: 'padding:30 30 0 50'
       },
       bbar: [
       {
           id: 'prevButton',
           text: 'Preivous Step',
           handler: navHandler,
           disabled: true
       },
       '->', 
       {
           id: 'nextButton',
           text: 'Next Step',
           handler: navHandler
       }],

       items: [{
           id: 'step-0',
           html: '<p>Step 1 of 3</p>'
       },{
           id: 'step-1',
           html: '<p>Step 2 of 3</p>'
       },{
           id: 'step-2',
           html: '<p>Step 3 of 3</p>'
       }]
   }); 
   card.show();
   
});