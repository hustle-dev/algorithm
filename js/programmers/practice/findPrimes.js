/**
 * https://programmers.co.kr/learn/courses/30/lessons/12921
 * @param {number} n
 * @returns
 */

const solution = n => {
  let count = 0;

  const ch = Array(n + 1).fill(0);

  if (n < 1) return 0;

  for (let i = 2; i <= n; i++) {
    if (ch[i] === 0) count++;
    for (let j = i * i; j <= n; j += i) ch[j] = 1;
  }

  return count;
};

console.log(solution(10));
console.log(solution(5));
