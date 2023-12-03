/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase()
  let newStr = str.replace(/[^a-z0-9]/g, '');
  let isPalindrome = false

let reversedString = newStr.split("").reverse().join("")

if (newStr === reversedString) {
  isPalindrome = true
} else {
  isPalindrome = false
}

return isPalindrome

}

module.exports = isPalindrome;
