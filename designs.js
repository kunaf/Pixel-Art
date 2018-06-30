// Select color input
// Select size input
//const pickColor = $('#colorPicker');
var pickSize = $('#sizePicker');
const canv = $('#pixelCanvas');
var height, width;

// When size is submitted by the user, call makeGrid()
pickSize.submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGrid(height, width);
})

function makeGrid(h, w) {
// Your code goes here!
  $('<tr>').remove;
  for(var i = 1; i <= h; i++) {
    canv.append('<tr id=table' + i + '></tr>');
    for(var j = 1; j <= w; j++) {
      $('#table' + i).append('<td></td>');
    }
  }

  //color cells
  $('td').click(function colorCell() {
    var pickColor = $('#colorPicker').val();
    if($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + pickColor);
    }
  });
}
