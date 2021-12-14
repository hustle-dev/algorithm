/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isPalindrome = str => str === str.split('').reverse().join('');
  const newStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return isPalindrome(newStr);
};
