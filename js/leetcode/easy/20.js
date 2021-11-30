/**
 * Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  if (s.length <= 1) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (s[i] === ')') {
        if (stack[stack.length - 1] === '(') stack.pop();
        else return false;
      } else if (s[i] === ']') {
        if (stack[stack.length - 1] === '[') stack.pop();
        else return false;
      } else {
        if (stack[stack.length - 1] === '{') stack.pop();
        else return false;
      }
    }
  }

  if (stack.length !== 0) return false;
  return true;
};
