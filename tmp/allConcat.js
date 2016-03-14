// Require statements to pull in other resources
var Simon = require('./../js/Simon.js').Simon;

// Document Ready Jquery for page triggers
$(document).ready(function() {
  $('.simon_btns').hide();

  // initial new game through a start game button, also hides and shows correct divs
  $('#start_btn').click(function() {
    var mySimon = new Simon();
    $('.start_btn').hide();
    $('.simon_btns').show();

  })


  $('#temp_trigger').click(function() {
    console.log("Triggered");
    mySimon.addSequence();
  });


});
