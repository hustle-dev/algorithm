function solution(s) {
  let answer;
  let Q = new Set([s]);
  while (Q.size) {
    const next = new Set();
    for (let x of Q) {
      if (isValid(x)) {
        let answer = [...Q].filter(isValid);
        return answer[0] === '' ? 0 : answer.length;
      }
      for (let i = 0; i < x.length; i++) {
        next.add(x.slice(0, i) + x.slice(i + 1));
      }
    }
    Q = next;
  }
  return answer;
}
function isValid(str) {
  let cnt = 0;
  for (let ch of str) {
    if (ch === '(') cnt++;
    else if (ch === ')') cnt--;
    if (cnt < 0) return false;
  }
  return cnt === 0;
}
console.log(solution('()(()()'));
