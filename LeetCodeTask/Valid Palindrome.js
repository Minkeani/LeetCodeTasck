// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function(s) {
  s = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  if(s.toLowerCase().split('').join('').split(' ').join('') === s.toLowerCase().split('').reverse().join('').split(' ').join('')){
      return true
  } else {
      return false
  }
};