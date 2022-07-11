// DESCRIPTION:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    var carry = 0, result = [],
        len = Math.max(a.length, b.length), i = len;
    while (i--) {
      var sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
      carry = parseInt(sum / 10);
      result.unshift(sum % 10);
    }
    if (carry) result.unshift(carry);
    return result.join('');
  } 