/**
 * Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let lt = 0;
  let v = new Map();
  let maxCnt = 0;
  let answer = 0;

  for (let rt = 0; rt < s.length; rt++) {
    v.set(s[rt], v.get(s[rt]) + 1 || 1);

    if (v.get(s[rt]) > maxCnt) maxCnt = v.get(s[rt]);

    if (rt - lt + 1 - maxCnt > k) {
      v.set(s[lt], v.get(s[lt]) - 1);
      lt++;
    }

    answer = Math.max(answer, rt - lt + 1);
  }

  return answer;
};

console.log(characterReplacement('AABABBA', 1));
