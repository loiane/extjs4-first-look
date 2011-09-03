//Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.container.Viewport');

Ext.application({
    name: 'App',

    appFolder: 'app',
    
    controllers: ['Books'],

    launch: function() {
    	
    	console.log('called function launch - application');
    
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Books',
                    html : 'List of books will be displayed here'
                }
            ]
        });
    }
});