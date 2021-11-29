/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  if (n === 1) return 1;

  const dp = Array(primes.length + 1).fill(0);
  console.log(dp);

  // return answer;
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
