/**
 * Grid renderer
 * @class MemoryGrid.view.Grid
 */
Ext.define("MemoryGrid.view.Grid", {
    CELL_WIDTH: 125,
    CELL_HEIGHT: 100,

    config: {
	gridModel: null
    },

    grid:  null,
    parentSVG : null,

    constructor: function(pConfig) {
        this.initConfig(pConfig);
    },

    onCellClick: function() {
	console.log("click");
    },

    render: function() {
	var me = this;
	var cells = this.gridModel.cells().getRange();
	var numCols = this.gridModel.get("numCols");
	var numRows = this.gridModel.get("numRows");
	// Setup SVG viewport
	this.grid = d3.select(".memoryGrid").append("svg:svg")
	    .attr("width", this.CELL_WIDTH * numCols)
	    .attr("height", this.CELL_HEIGHT * numRows);
	this.parentSVG = this.grid.append("svg:g")
	    .attr("class", "gridParent");
	this.parentSVG.selectAll("g").data(cells).enter()
	    .append("g")
	    .attr("cellIndex", function(d, i) {return i;})
	    .append("svg:rect")
	    .attr("x", function(d, i){ 
		return (i % numCols) * me.CELL_WIDTH; 
	    })
	    .attr("y", function(d,i) {
		return Math.floor(i/numCols) * me.CELL_HEIGHT;
	    })
	    .attr("width", this.CELL_WIDTH)
	    .attr("height", this.CELL_HEIGHT)
	    .style("stroke", "black")
	    .style("fill", function(d){ 
		if (d.get("selected")) {
		    return "black"
		} 
		else {
		    return "white"
		}
	    })
	    .on("click", me.onCellClick);
    }
});
