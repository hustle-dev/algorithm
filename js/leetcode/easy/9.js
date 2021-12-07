/**
 * Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x.toString().split('').reverse().join('') === x.toString()) {
    return true;
  }
  return false;
};
console.log(isPalindrome(121));
