const solution = n => {
  let answer = '';
  const recur = n => {
    if (n <= 1) answer = n + answer;
    else {
      answer = (n % 2) + answer;
      return recur(Math.floor(n / 2));
    }
  };

  recur(n);

  return answer;
};

console.log(solution(11));
