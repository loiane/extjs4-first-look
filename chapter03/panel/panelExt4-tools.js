Ext.onReady(function(){
	
	var html = '<div style="padding:10px;"><h1><center><span>Body</center></h1></div>';
	
	var panel1 = Ext.create('Ext.panel.Panel', {
        width:500,
        renderTo: 'ext4-panel-tools',
        
        title: 'Tools - Header',
        
        html: html,
        
        tools: [{
            type: 'close',
            handler: function(){} //some logic inside handler
        },{
            type: 'collapse',
            handler: function(){} //some logic inside handler
        },{
            type: 'down',
            handler: function(){} //some logic inside handler
        },{
            type: 'expand',
            handler: function(){} //some logic inside handler
        },{
            type: 'gear',
            handler: function(){} //some logic inside handler
        },{
            type: 'help',
            handler: function(){} //some logic inside handler
        },{
            type: 'left',
            handler: function(){} //some logic inside handler
        },{
            type: 'maximize',
            handler: function(){} //some logic inside handler
        },{
            type: 'minimize',
            handler: function(){} //some logic inside handler
        },{
            type: 'minus',
            handler: function(){} //some logic inside handler
        },{
            type: 'next',
            handler: function(){} //some logic inside handler
        },{
            type: 'pin',
            handler: function(){} //some logic inside handler
        },{
            type: 'plus',
            handler: function(){} //some logic inside handler
        },{
            type: 'prev',
            handler: function(){} //some logic inside handler
        },{
            type: 'print',
            handler: function(){} //some logic inside handler
        },{
            type: 'refresh',
            handler: function(){} //some logic inside handler
        },{
            type: 'restore',
            handler: function(){} //some logic inside handler
        },{
            type: 'right',
            handler: function(){} //some logic inside handler
        },{
            type: 'save',
            handler: function(){} //some logic inside handler
        },{
            type: 'search',
            handler: function(){} //some logic inside handler
        },{
            type: 'toggle',
            handler: function(){} //some logic inside handler
        },{
            type: 'unpin',
            handler: function(){} //some logic inside handler
        },{
            type: 'up',
            handler: function(){} //some logic inside handler
        }]
    });
});