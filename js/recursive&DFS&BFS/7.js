const solution = (n, m) => {
  const answer = [];
  const temp = [];

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= n; i++) {
        temp.push(i);
        DFS(L + 1);
        temp.pop();
      }
    }
  }

  DFS(0);

  return answer;
};

console.log(solution(3, 2));
