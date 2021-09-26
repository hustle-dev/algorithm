function solution(n, m) {
  let answer = [];
  let temp = [];

  function DFS(L) {
    if (L === m + 1) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        temp.push(i);
        DFS(L + 1);
        temp.pop();
      }
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3, 2));
