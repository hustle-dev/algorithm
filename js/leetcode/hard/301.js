/**
 * Remove Invalid Parentheses
 * https://leetcode.com/problems/remove-invalid-parentheses/
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const isValid = str => {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') cnt++;
      else if (str[i] === ')') cnt--;
      if (cnt < 0) return false;
    }
    return cnt === 0;
  };

  let answer;
  let Q = new Set([s]);
  while (Q.size) {
    const next = new Set();
    for (let x of Q) {
      if (isValid(x)) {
        let answer = [...Q].filter(isValid);
        return answer;
      }
      for (let i = 0; i < x.length; i++) {
        next.add(x.slice(0, i) + x.slice(i + 1));
      }
    }
    Q = next;
  }
  return answer;
};
