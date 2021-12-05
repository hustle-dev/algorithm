/**
 * Minimum Window Substring
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const m = new Map();

  for (const c of t) {
    m.set(c, m.get(c) + 1 || 1);
  }

  let lt = 0;
  let start = null;
  let end = null;
  let uniqueC = m.size;
  for (let rt = 0; rt < s.length; rt++) {
    if (m.has(s[rt])) {
      m.set(s[rt], m.get(s[rt]) - 1);

      if (m.get(s[rt]) === 0) {
        uniqueC -= 1;
      }
    }

    while (uniqueC === 0 && lt <= rt) {
      if (end - start > rt - lt || start === null) {
        start = lt;
        end = rt;
      }
      if (m.has(s[lt])) {
        m.set(s[lt], m.get(s[lt]) + 1);

        if (m.get(s[lt]) === 1) {
          uniqueC++;
        }
      }
      lt++;
    }
  }

  return start === null ? '' : s.substring(start, end + 1);
};
