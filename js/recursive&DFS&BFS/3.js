function solution(n) {
  const answer = [];
  const temp = [];

  function DFS(L) {
    if (L === n) {
      if (temp.length !== 0) answer.push(temp.slice());
    } else {
      temp.push(L + 1);
      DFS(L + 1);
      temp.pop();
      DFS(L + 1);
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3));
