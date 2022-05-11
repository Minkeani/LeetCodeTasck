// Given two binary strings a and b, return their sum as a binary string.

function parseBigInt(str, base=10) {
  base = BigInt(base)
  var bigint = BigInt(0)
  for (var i = 0; i < str.length; i++) {
    var code = str[str.length-1-i].charCodeAt(0) - 48; if(code >= 10) code -= 39
    bigint += base**BigInt(i) * BigInt(code)
  }
  return bigint
}

var addBinary = function(a, b) {
    return (parseBigInt(a, 2) + parseBigInt(b, 2)).toString(2)
};