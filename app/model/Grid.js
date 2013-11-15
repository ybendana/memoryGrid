/**
 * Model for the grid
 * @class MemoryGrid.model.Grid
 */
Ext.define("MemoryGrid.model.Grid", {
    extend: "Ext.data.Model",
    requires: ["MemoryGrid.model.Cell"],

    proxy: {
	type: "memory"
    },

    fields: [
	{name: "numRows", type: "int", defaultValue: 2},
	{name: "numCols", type: "int", defaultValue: 2}
    ],

    associations: [
	{
            type: "hasMany",
            model: "MemoryGrid.model.Cell",
            name: "cells"
	}
    ],

    numCells: null,

    constructor: function() {
        this.callParent(arguments);
	this.initialize();
    },

    initialize: function() {
	this.numCells = this.get("numRows") * this.get("numCols");
	var selectMin = 1;
	var selectMax = Math.floor(0.5 * this.numCells);
	var selectArray = this.calcSelected();
	var selectSum = selectArray.reduce(this.sumFunction);
	while(selectSum < selectMin || selectSum > selectMax) {
	    selectArray = this.calcSelected();
	    selectSum = selectArray.reduce(this.sumFunction);
	}
	for (var i = 0; i < this.numCells; i++) {
	    this.cells().add(Ext.create("MemoryGrid.model.Cell", { 
		selected: selectArray[i] ? true : false}));
	}
    },

    calcSelected: function() {
	var selectArray = new Array(this.numCells);
	for (var i = 0; i < this.numCells; i++) {
	    selectArray[i] = Math.round(Math.random()); 
	}
	return selectArray;
    },

    sumFunction: function(s, it) {
	return s + it;
    }

});
