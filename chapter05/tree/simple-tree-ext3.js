Ext.onReady(function() {
	
	new Ext.tree.TreePanel({
	    renderTo: 'tree-example',
	    title: 'Simple Tree',
	    width: 200,
	    rootVisible: false, 
	    
	    root: new Ext.tree.AsyncTreeNode({
            expanded: true,
            children: [
       	            { text: "Menu Option 1", leaf: true },
       	            { text: "Menu Option 2", expanded: true, children: [
       	                { text: "Sub Menu Option 2.1", leaf: true },
       	                { text: "Sub Menu Option 2.2", leaf: true}
       	            ] },
       	            { text: "Menu Option 3", leaf: true }
       	        ]
        })
	});
});

