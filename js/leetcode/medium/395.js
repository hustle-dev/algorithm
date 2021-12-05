/**
 * Longest Substring with At Least K Repeating Characters
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  for (const ch of Array.from(new Set(s))) {
    if (s.match(new RegExp(ch, 'g')).length < k) {
      return Math.max(...s.split(ch).map(str => longestSubstring(str, k)));
    }
  }
  return s.length;
};

console.log(longestSubstring('ababbc', 2));
