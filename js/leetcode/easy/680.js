/**
 * Valid Palindrome II
 * https://leetcode.com/problems/valid-palindrome-ii/
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let lt = 0;
  let rt = s.length - 1;

  while (lt <= rt) {
    if (s[lt] !== s[rt]) {
      const s1 = s.substring(lt + 1, rt + 1);
      const s2 = s.substring(lt, rt);
      if (s1 !== s1.split('').reverse().join('') && s2 !== s2.split('').reverse().join('')) {
        return false;
      }
      return true;
    }
    lt++;
    rt--;
  }

  return true;
};
