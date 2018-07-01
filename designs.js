// Select color input
let artColor = $("#colorPicker");

// Select size input
let gridHeight = $('#inputHeight').val();
let gridWidth = $('#inputWidth').val();
let artGrid = $('#pixelCanvas');
// When size is submitted by the user, call makeGrid()

$("#gridMaker").click(function(event) {
	 event.preventDefault();
	makeGrid();
});

function makeGrid() {

	// Your code goes here!
	artGrid.empty();
	for (row = 0; row <= gridHeight; row++) {
	  artGrid.append('<tr></tr>');
	  for (col = 0; col <= gridWidth ; col++) {
	    $('tr').last().append('<td></td>');
	  }
	}
}

$("#colorPicker").change(function() {
	artColor = $(this).val();
});

$("#inputHeight").change(function() {
	gridHeight = $(this).val();
});

$("#inputWidth").change(function() {
	gridWidth = $(this).val();
});

// Attach a delegated event handler to the td elements in the table
artGrid.on( "click", "td", function( event ) {
    var elem = $(this);
     elem.attr("style", "background-color:"+artColor);
});
