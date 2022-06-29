// Task
// You will be given some positive integers. Your task is to use all of these integers to combine the largest and smallest prime numbers.

// Input
// An integer array nums:

// [1,2,3,4]

// Output
// An array that contains 2 elements(smallest prime and largest prime).

// [1423, 4231]

// Note:
// The length of nums always less than 10.
// The integer in nums always be 1 digit or 2 digits(1-99). It should keep the order in the combination. For example, 13 can not using as 31 or a single digit 1 or 3. It can only using as 13.
// All of the integers should be used, but can used only once.
// If the given integers can only combine 1 prime, return an array contains 1 prime.
// If there is no possible prime combination, return []
// Examples

// primeCombination([1,2,3,4]) === [1423, 4231]

// primeCombination([9,9,9,3,6,1]) === [136999, 999631]

// primeCombination([3,7]) === [37,73]

// primeCombination([3,5]) === [53]

// primeCombination([1,3,5]) === []

// primeCombination([2]) === [2]
// The kata may contains bug, please help me to test it and give me some feedback, thanks ^_^

function primeCombination(array){
  let k = array.length
  var m=[];
  var combinations = [];
  let final = []
  var indices = [];
  var len=array.length;
  function run(level){    
    for(var i=0; i < len; i++){            
	  if(!indices[i]){            
	    indices[i] = true;                
		combinations[level] = array[i];                
		if(level < k - 1){
		  run(level + 1, i + 1);
		} else {
		  m.push(([]).concat(combinations));
		}                
		indices[i] = false;
	  }
	}        
  }    
  run(0);
  for(let i in m) {
    m[i] = m[i].join('')
  }

function isPrime(n) {
  if (n < 2) {
    return true;
  } else if (n === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i +=1;
  }
  
  return true;
}


  for(i in m) {
    if(isPrime(m[i])) {
      final.push(m[i])
    }
  }
let max = Math.max.apply(null, final)
let min = Math.min.apply(null, final)
if(max === min) {
  return [max]
} else if(min === Infinity || max === -Infinity ){
  return []
} else {
  return [ Math.min.apply(null, final), Math.max.apply(null, final)]
}
  
}
