// Utilities methods

let round = function(x, nb_digits) {
  var tmp = Math.pow(10, nb_digits);
  return Math.round(x * tmp) / tmp;
}

export default round;