/**
 * Reverse String
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let lt = 0;
  let rt = s.length - 1;
  while (lt < rt) {
    [s[lt], s[rt]] = [s[rt], s[lt]];
    lt++;
    rt--;
  }
  return;
};
