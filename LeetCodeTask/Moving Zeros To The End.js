// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
var moveZeros = function (arr) {
  let a = []
  let b = []
  let c = []
  for(let i in arr) {
    if(arr[i] !== 0) {
      a.push(arr[i])
    } else {
      b.push(arr[i])
    }
  }
  return c = a.concat(b)
}