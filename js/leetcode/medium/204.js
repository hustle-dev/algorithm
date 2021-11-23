/**
 * @title Count Primes
 * @link https://leetcode.com/problems/count-primes/
 * @param {number} n
 * @returns
 */
function solution(n) {
  let answer = 0;
  const ch = Array(n).fill(0);

  if (n === 0) return 0;
  if (n === 1) return 0;

  for (let i = 2; i < n; i++) {
    if (ch[i] === 0) {
      answer++;
      for (let j = i * i; j < n; j += i) ch[j] = 1;
    }
  }

  return answer;
}

console.log(solution(10));
