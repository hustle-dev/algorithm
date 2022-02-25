const solution = n => {
  const answer = [];
  const temp = [];

  const DFS = L => {
    if (L === n + 1) {
      if (temp.length !== 0) {
        answer.push([...temp]);
        return;
      }
    } else {
      temp.push(L);
      DFS(L + 1);
      temp.pop();
      DFS(L + 1);
    }
  };

  DFS(1);

  return answer;
};

console.log(solution(3));
