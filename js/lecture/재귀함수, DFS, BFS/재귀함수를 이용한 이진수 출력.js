const solution = n => {
  if (n === 0) return '';
  else return solution(Math.floor(n / 2)) + String(n % 2);
};

console.log(solution(11));
