(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Simon() {
  // This constructs Simon
  this.sequence = [];
}

// Randomly generate a sequence choice and push it into the array
Simon.prototype.addSequence = function () {
  var randomNumber = Math.floor(Math.random() * (4)) + 1;
  switch(randomNumber) {
    case 1:
      this.sequence.push('red');
      break;
    case 2:
      this.sequence.push('blue');
      break;
    case 3:
      this.sequence.push('green');
      break;
    case 4:
      this.sequence.push('yellow');
      break;
  }
};

// Simon.prototype.anAction = function () {
//   // This is a method
// };
//
// Simon.prototype.anAction = function () {
//   // This is a method
// };

exports.Simon = Simon;

},{}],2:[function(require,module,exports){
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

},{"./../js/Simon.js":1}]},{},[2]);
