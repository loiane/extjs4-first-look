Ext.onReady(function(){
	
	var html = '<div style="padding:10px;"><h1><center><span>Body</center></h1></div>';
	
	var panel1 = Ext.create('Ext.panel.Panel', {
        collapsible:true,
        width:400,
        renderTo: 'ext4-panel',
        
        title: 'Ext 4 Panel - Header',
        
        html: html,
        
        tbar: Ext.create('Ext.toolbar.Toolbar',{
    		items: [{
    			type: 'button',
                text:'Button - Top Toolbar'
            }]
    	}),
    	
    	bbar: Ext.create('Ext.toolbar.Toolbar',{
    		items: [{
    			type: 'button',
                text:'Button - Bottom Toolbar'
            }]
    	}),
    	
    	fbar: Ext.create('Ext.toolbar.Toolbar',{
    		items: [{
    			type: 'button',
                text:'Button - Footer Toolbar'
            }]
    	})
    });
	
	//code above is equivalent to code bellow
	
	var panel2 = Ext.create('Ext.panel.Panel', {
        collapsible:true,
        width:400,
        border:true,
        renderTo: 'ext4-panel2',
        
        title: 'Ext 4 Panel - Header',
        headerPosition: 'top',
        
        html: html,
        
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [{ 
            	xtype: 'button', 
                text: 'Button - Top Toolbar'
            }]
        },{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{ 
            	xtype: 'button', 
                text: 'Button - Bottom Toolbar'
            }]
        },{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                { xtype: 'component', flex: 1 },
                { xtype: 'button', text: 'Button - Footer Toolbar' }
            ]
        }]
    });
});