Ext.onReady(function() {
	
	var store = Ext.create('Ext.data.TreeStore', {
	    root: {
	        expanded: true, 
	        children: [
	            { text: "Menu Option 1", leaf: true },
	            { text: "Menu Option 2", expanded: true, children: [
	                { text: "Sub Menu Option 2.1", leaf: true },
	                { text: "Sub Menu Option 2.2", leaf: true}
	            ] },
	            { text: "Menu Option 3", leaf: true }
	        ]
	    }
	});     

	Ext.create('Ext.tree.Panel', {
	    title: 'Simple Tree',
	    width: 200,
	    store: store,
	    rootVisible: false,        
	    renderTo: 'tree-example'
	});
});

