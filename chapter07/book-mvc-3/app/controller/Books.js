Ext.define('App.controller.Books', {
	extend: 'Ext.app.Controller',

	init: function() {
		this.control({
			'viewport > panel': {
				render: this.onPanelRendered
			}
		});
	},

	onPanelRendered: function() {
		console.log('The panel was rendered');
	}
});