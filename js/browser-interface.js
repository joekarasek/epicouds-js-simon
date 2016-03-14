// Require statements to pull in other resources
var Simon = require('./../js/Simon.js').Simon;

// Document Ready Jquery for page triggers
$(document).ready(function() {
  // Initiate javascript enviroment at page load
  // Initiate a game state variable called sequence step. Starts at -1 (no game started), can be 0 (add a new sequence, this would be when to play the sequence of stored choices), 1 through n (player is clicking buttons to match stored choices). When sequence reaches the stored choices array length (last correct guess), resets to 0
  var sequenceStep = -1;
  $('.simon_btns').hide();
  var mySimon = new Simon();

  // initial new game through a start game button, also hides and shows correct divs
  $('#start_btn').click(function() {
    $('.start_btn').hide();
    $('.simon_btns').show();
    sequenceStep = 0;
    // trigger our first sequence display
  })


  $('#red').click(function() {
    console.log("Red");
    mySimon.addSequence();
    console.log(mySimon.sequence);
  });
  $('#blue').click(function() {
    console.log("blue");
    mySimon.addSequence();
    console.log(mySimon.sequence);
  });
  $('#green').click(function() {
    console.log("green");
    mySimon.addSequence();
    console.log(mySimon.sequence);
  });
  $('#yellow').click(function() {
    console.log("yellow");
    mySimon.addSequence();
    console.log(mySimon.sequence);
  });


});
