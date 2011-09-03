Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.container.Viewport');

Ext.application({
    name: 'App',

    appFolder: 'app',
    
    controllers: ['Books'],

    launch: function() {
    	
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'bookList',
                    region: 'center'
                },
                {
                    xtype: 'detailPanel',
                    region: 'south',
                    height: 150
                }
            ]
        });
    }
});