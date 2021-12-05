/**
 * Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sH = new Map();

  for (const char of t) {
    sH.set(char, sH.get(char) + 1 || 1);
  }

  let lt = 0;
  let minLt = null;
  let minRt = null;
  let uniqueChars = sH.size;

  for (let rt = 0; rt < s.length; rt++) {
    if (sH.has(s[rt])) {
      sH.set(s[rt], sH.get(s[rt]) - 1);
      if (sH.get(s[rt]) === 0) {
        uniqueChars -= 1;
      }
    }

    while (uniqueChars === 0 && lt <= rt) {
      if (minLt === null || minRt - minLt > rt - lt) {
        minLt = lt;
        minRt = rt;
      }

      if (sH.has(s[lt])) {
        sH.set(s[lt], sH.get(s[lt]) + 1);

        if (sH.get(s[lt]) === 1) {
          uniqueChars += 1;
        }
      }
      lt++;
    }
  }

  return minLt === null ? '' : s.substring(minLt, minRt + 1);
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
console.log(minWindow('a', 'a'));
console.log(minWindow('a', 'aa'));
console.log(minWindow('bdab', 'ab'));
