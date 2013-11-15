/**
 * @class MemoryGrid.controller.MemoryGrid
 * Memory grid Controller
 */
Ext.define('MemoryGrid.controller.MemoryGrid', {
    extend: 'Ext.app.Controller',
    requires: ["MemoryGrid.view.Grid",
	       "MemoryGrid.model.Grid"],
    grid: null,
    gridModel: null,
    gridRenderer: null,
    gridView: null,

    init: function() {
    },

    onLaunch: function() {
	this.gridView = Ext.getCmp("memoryGrid");
	this.gridModel = Ext.create("MemoryGrid.model.Grid");
	this.gridRenderer = Ext.create("MemoryGrid.view.Grid", {
	    gridModel: this.gridModel});
	this.renderGrid();
    },

    renderGrid: function() {
	this.gridRenderer.render();
    }
});

