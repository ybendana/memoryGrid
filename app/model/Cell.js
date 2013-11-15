/**
 * Model for the grid cell
 * @class MemoryGrid.model.Cell
 */
Ext.define("MemoryGrid.model.Cell", {
    extend: "Ext.data.Model",

    proxy: {
	type: "memory"
    },

    fields: [
	{name: "selected", type: "boolean", defaultValue: false}
    ]
});
