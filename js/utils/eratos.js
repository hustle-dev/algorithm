/**
 * return numOfPrimes until n
 *
 * @param {number} n
 * @returns {number} numOfPrimes
 */

const eratos = n => {
  let count = 0;

  const ch = Array(n).fill(0);

  if (n < 1) return 0;

  for (let i = 2; i < n; i++) {
    if (ch[i] === 0) count++;
    for (let j = i * i; j < n; j += i) ch[j] = 1;
  }

  return count;
};
