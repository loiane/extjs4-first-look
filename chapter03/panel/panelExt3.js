Ext.onReady(function(){
	
	var html = '<div style="padding:10px;"><h1><center><span>Body</center></h1></div>';
	
	var panel1 = new Ext.Panel({
		collapsible:true,
        width:400,
        renderTo: 'ext3-panel',
        
        title: 'Ext 3 Panel - Header',
        
        html: html,
        
        tbar: new Ext.Toolbar({
    		items: [{
    			type: 'button',
                text:'Button - Top Toolbar'
            }]
    	}),
    	
    	bbar: new Ext.Toolbar({
    		items: [{
    			type: 'button',
                text:'Button - Bottom Toolbar'
            }]
    	}),
    	
    	fbar: new Ext.Toolbar({
    		items: [{
    			type: 'button',
                text:'Button - Footer Toolbar'
            }]
    	})
    });
});