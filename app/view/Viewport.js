/**
 * Application viewport
 * @class MemoryGrid.view.Viewport
 */

Ext.define('MemoryGrid.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ["MemoryGrid.view.MemoryGrid"],
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'MemoryGrid'
                }]
	});
	me.callParent(arguments);
    }
});

