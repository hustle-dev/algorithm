/**
 * Minimum Deletions to Make Character Frequencies Unique
 * https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  const m = new Map();
  const nH = new Map();
  const temp = [];
  let answer = 0;

  for (const c of s) {
    m.set(c, m.get(c) + 1 || 1);
  }

  for (const n of m.values()) {
    temp.push(n);
  }

  temp.sort((a, b) => b - a);

  for (const num of temp) {
    if (!nH.has(num)) {
      nH.set(num, 1);
    } else {
      let nextNum = num - 1;
      while (nextNum > 0) {
        if (!nH.has(nextNum)) {
          nH.set(nextNum, 1);
          answer += num - nextNum;
          break;
        }
        nextNum--;
      }

      if (nextNum === 0) {
        answer += num;
      }
    }
  }
  return answer;
};
