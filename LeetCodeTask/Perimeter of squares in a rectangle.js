// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
// It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

function fib(n) {
  var a = 1, b = 1, tmp;
  while (n-- > 0) {
    tmp = a;
    a = b;
    b += tmp;
  }
  return a;
}

function perimeter(n) {
    return 4 * (fib(n + 2) -1)
}