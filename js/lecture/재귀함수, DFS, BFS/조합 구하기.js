const solution = (n, m) => {
  const answer = [];
  const temp = [];

  const DFS = (L, s) => {
    if (L === m) {
      answer.push([...temp]);
    } else {
      for (let i = s; i <= n; i++) {
        temp.push(i);
        DFS(L + 1, i + 1);
        temp.pop();
      }
    }
  };

  DFS(0, 1);
  return answer;
};

console.log(solution(4, 2));
