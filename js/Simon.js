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
