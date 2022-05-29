// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Description
// Given a list of integers A, for each pair of integers (first, last) in list ranges, calculate the sum of the values in A between indices first and last (both inclusive), and return the greatest resulting sum.

// Example
// A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
// ranges = [(1, 3), (0, 4), (6, 8)]

// result = 6
function maxSum(arr,range){
  const sumEl = []
  let maxRes = -Infinity;
  for(let i = 0; i < arr.length; i++) {
     sumEl[i] = (sumEl[i - 1] || 0) + arr[i]
  }  
  

  for(let i = 0; i < range.length; i++ ) {
    const [start, end] = range[i]
    const sum = sumEl[end] - (sumEl[start - 1] || 0)
    if(sum > maxRes) {
      maxRes = sum 
    }
    
  } 
  
  return maxRes
}

maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]])