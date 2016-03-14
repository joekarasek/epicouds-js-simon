// Require statements to pull in other resources
var Simon = require('./../js/Simon.js').Simon;

// Document Ready Jquery for page triggers
$(document).ready(function() {
  var mySimon = new Simon();
  console.log(mySimon.sequence);
  $('#temp_trigger').click(function() {
    console.log("Triggered");
    mySimon.addSequence();
  });
});
