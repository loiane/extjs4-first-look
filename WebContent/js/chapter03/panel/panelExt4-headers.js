Ext.onReady(function(){
	
	var html = '<div style="padding:10px;"><h1><center><span>Body</center></h1></div>';
	
	var panel1 = Ext.create('Ext.panel.Panel', {
        collapsible:true,
        width:400,
        border:true,
        renderTo: 'ext4-panel-header-top',
        html: html,
        
        title: 'Ext 4 Panel - Header - Top'
    });
	
	var panel2 = Ext.create('Ext.panel.Panel', {
        collapsible:true,
        width:400,
        border:true,
        renderTo: 'ext4-panel-header-bottom',
        html: html,
        
        title: 'Ext 4 Panel - Header - Bottom',
        headerPosition: 'bottom'
    });
	
	var panel3 = Ext.create('Ext.panel.Panel', {
        collapsible:true,
        width:400,
        height:200,
        border:true,
        renderTo: 'ext4-panel-header-left',
        html: html,
        
        title: 'Ext 4 Panel - Header - Left',
        headerPosition: 'left'
    });
	
	var panel4 = Ext.create('Ext.panel.Panel', {
        collapsible:true,
        width:400,
        height:200,
        border:true,
        renderTo: 'ext4-panel-header-right',
        html: html,
        
        title: 'Ext 4 Panel - Header - Right',
        headerPosition: 'right'
    });
});