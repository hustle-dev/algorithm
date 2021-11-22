/**
 * Prime Number of Set Bits in Binary Representation
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/
 * @param {number} left
 * @param {number} right
 * @returns
 */

const countPrimeSetBits = (left, right) => {
  let answer = 0;

  const isPrime = num => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = left; i <= right; i++) {
    const binaryNum = i.toString(2);
    let numOfOne = 0;
    for (let j = 0; j < binaryNum.length; j++) {
      if (binaryNum[j] === '1') numOfOne++;
    }

    if (isPrime(numOfOne)) answer++;
  }

  return answer;
};

console.log(countPrimeSetBits(10, 15));
