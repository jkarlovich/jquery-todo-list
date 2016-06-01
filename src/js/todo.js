$(document).ready(function() {
  console.log('ready');
//get input from user

$('#enter').click(function(event) {
  $('#enter').val('');
});

$('#submit').click(function(event) {
  event.preventDefault();
  var a = $('#enter').val();
  $('ul').append('<li><div class="square"></div>' + a + '</li>')
  $('#enter').val('');
  $('#enter').focus();

});

$('ul').on('click', 'li', function(){
 $(this).remove();

});


//add li to html
//reset the input form and refocus on input field
//click on list item to delete

});
