/**
 * @title Word Pattern
 * @link https://leetcode.com/problems/word-pattern/
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(' ');
  const map = new Map();

  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    const pat = pattern[i];
    const word = words[i];

    if (map.has(pat) && map.get(pat) !== word) return false;
    map.set(pat, word);
  }
  return true;
};
