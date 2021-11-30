const solution = (n, primes) => {
  const ptr = Array(n).fill(0);
  const uglyArr = [1];

  for (let i = 1; i < n; i++) {
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < primes.length; j++) {
      minNum = Math.min(minNum, uglyArr[ptr[j]] * primes[j]);
    }
    uglyArr.push(minNum);

    for (let j = 0; j < primes.length; j++) {
      if (minNum === uglyArr[ptr[j]] * primes[j]) {
        ptr[j]++;
      }
    }
  }

  return uglyArr[n - 1];
};

console.log(solution(12, [2, 7, 13, 19]));
