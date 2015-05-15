//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
  if (input.toUpperCase() === input){
    // this.shouting()
    return 'Whoa, chill out!'
  }
  else {
    return "Whatever."
  }
};

Bob.prototype.shouting = function() {
  //check if input == caps
    return 'Whoa, chill out!'
}

module.exports = Bob;
