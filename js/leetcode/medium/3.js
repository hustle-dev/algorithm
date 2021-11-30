/**
 * Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  const queue = [];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (queue.includes(s[i])) {
      if (s[i] === queue[0]) {
        queue.shift();
        queue.push(s[i]);
      } else {
        let curWord = queue.shift();
        while (curWord !== s[i]) {
          curWord = queue.shift();
        }
        queue.push(s[i]);
      }
    } else {
      queue.push(s[i]);
    }
    answer = Math.max(answer, queue.length);
  }

  return answer;
};
