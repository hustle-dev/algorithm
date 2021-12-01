function solution(n) {
  let answer = '';

  function recursive(n) {
    if (n === 0) return;
    recursive(parseInt(n / 2));
    answer += n % 2;
  }

  recursive(n);
  return answer;
}

console.log(solution(11));
