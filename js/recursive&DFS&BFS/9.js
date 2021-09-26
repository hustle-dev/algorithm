function solution(n, r) {
  let answer = 0;
  const chk = Array.from({ length: 35 }, () => Array(35).fill(0));

  function DFS(n, r) {
    if (chk[n][r] !== 0) return chk[n][r];
    if (r === 0 || n === r) return 1;
    else {
      chk[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
      return chk[n][r];
    }
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
