const solution = s => {
  let answer = 0;
  const dp = new Array(26).fill(1);
  dp[0] = false;

  function DFS(L, str) {
    if (str.length === 0) {
      answer++;
    } else {
      for (let i = 0; i <= 1; i++) {
        const tempString = str.slice(0, i + 1);
        if (i === 1 && str.length === 1) return;
        if (!dp[Number(tempString)]) return;
        DFS(L + 1, str.slice(i + 1));
      }
    }
  }

  DFS(0, s);

  return answer;
};

console.log(solution('25114'));
console.log(solution('1025'));
