// Require statements to pull in other resources
var Simon = require('./../js/Simon.js').Simon;

// Ui functions
// var displaySequence = function(sequenceArray) {
//   sequenceArray.forEach(function(color) {
//     var target = '#' + color;
//     console.log(color);
//     $(target).css('background-color', color);
//     $(target).css('background-color', 'white');
//   });
// };

var displaySequence = function(sequenceArray) {
  sequenceArray.forEach(function(color) {
    setTimeout(colorButton(color), 500);
    // setInterval(revertButton(color), 2000);
  });
};

var colorButton = function(color) {
  $('#red').css('background-color', 'white');
  $('#blue').css('background-color', 'white');
  $('#green').css('background-color', 'white');
  $('#yellow').css('background-color', 'white');
  var target = '#' + color;
  $(target).css('background-color', color);
}

// var revertButton = function(color) {
//   var target = '#' + color;
//   $(target).css('background-color', 'white');
// }

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
    mySimon.addSequence();
    displaySequence(mySimon.sequence);
    // trigger our first sequence display
  })

  $('#red').click(function() {
    console.log("red");
    mySimon.addSequence();
    displaySequence(mySimon.sequence);
    console.log(mySimon.sequence);
  });
  $('#blue').click(function() {
    console.log("blue");
    mySimon.addSequence();
    displaySequence(mySimon.sequence);
    console.log(mySimon.sequence);
  });
  $('#green').click(function() {
    console.log("green");
    mySimon.addSequence();
    displaySequence(mySimon.sequence);
    console.log(mySimon.sequence);
  });
  $('#yellow').click(function() {
    console.log("yellow");
    mySimon.addSequence();
    displaySequence(mySimon.sequence);
    console.log(mySimon.sequence);
  });


});
