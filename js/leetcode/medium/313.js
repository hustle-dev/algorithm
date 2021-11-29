/**
 * Super Ugly Number
 * https://leetcode.com/problems/super-ugly-number/
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const ptr = Array(primes.length).fill(0);
  const ugly = [1];

  for (let i = 1; i < n; i++) {
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < primes.length; j++) {
      minNum = Math.min(minNum, primes[j] * ugly[ptr[j]]);
    }
    ugly.push(minNum);

    for (let j = 0; j < primes.length; j++) {
      if (minNum === primes[j] * ugly[ptr[j]]) ptr[j]++;
    }
  }

  return ugly[n - 1];
};
