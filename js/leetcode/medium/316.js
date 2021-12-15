/**
 * Remove Duplicate Letters
 * https://leetcode.com/problems/remove-duplicate-letters/
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (stack.indexOf(s[i]) > -1) continue;
    while (
      stack.length &&
      stack[stack.length - 1] > char &&
      s.indexOf(stack[stack.length - 1], i) > i
    ) {
      stack.pop();
    }
    stack.push(char);
  }
  return stack.join('');
};
