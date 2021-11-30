/**
 * Count Binary Substrings
 * https://leetcode.com/problems/count-binary-substrings/
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let answer = 0;

  let lt = 0;
  let groupNum = 1;

  for (let rt = 1; rt < s.length; rt++) {
    if (s[rt] === s[rt - 1]) groupNum++;
    else {
      answer += Math.min(groupNum, lt);
      lt = groupNum;
      groupNum = 1;
    }
  }
  answer += Math.min(groupNum, lt);
  return answer;
};
