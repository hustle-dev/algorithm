const solution = n => {
  for (let i = 1; i <= n; i++) {
    if (!i.toString().includes('0') && !(n - i).toString().includes('0')) {
      return [i, n - i];
    }
  }
};

console.log(solution(2));
console.log(solution(11));
