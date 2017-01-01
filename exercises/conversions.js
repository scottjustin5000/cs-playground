function stringToInt(str) {
  var number = 0;
  var factor = 1;
  var negative = false;
  for (var i = str.length - 1; i >= 0; i--) {
    //check if the very first character has '-', then the result must be negative
    if ((i == 0) && (str.charAt(i) == '-')) {
      negative = true;
      return;
    }
    //if the string has any non-number characters, continue with the next character ignoring the current one
    else if ("0123456789".indexOf(str.charAt(i)) == -1) {
      return;
    }
    number += (str.charAt(i) - '0') * factor;
    factor *= 10;
  }
  if (negative)
    return -number;
  return number;
}

function stringToFloat(s) {
  var r1 = 0.0;
  var r2 = 0.0;
  var negative = false;
  if (s[0] === '-') {
    negative = true;
  }
  var parts = s.split('.');
  var wholes = parts[0];
  var fractions = parts[1];

  for (var i = 0; i < wholes.length; i++) {
    r1 = (r1 * 10) + (wholes.charAt(i) - '0');
  }
  if (fractions) {
    for (var j = fractions.length - 1; j >= 0; j--) {
      r2 = (r2 / 10) + (fractions.charAt(j) - '0');
    }
    r1 += (r2 / 10);
  }
  return negative ? -Math.abs(r1) : r1;
}

module.exports = {
  stringToInt: stringToInt,
  stringToFloat: stringToFloat
}
