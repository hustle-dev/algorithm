const solution = n => {
  let answer = '';

  const DFS = L => {
    if (L > n) return;
    else {
      DFS(L * 2);
      answer += L + ' ';
      DFS(L * 2 + 1);
    }
  };

  DFS(1);

  return answer;
};

console.log(solution(7));
