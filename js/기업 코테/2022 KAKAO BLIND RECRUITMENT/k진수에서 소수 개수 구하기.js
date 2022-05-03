const isPrime = num => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (n, k) => {
  let ans = 0;

  const convertNum = n.toString(k);
  const numArr = convertNum.split(0);

  for (const n of numArr) {
    if (n.length) {
      if (isPrime(Number(n))) ans++;
    }
  }

  return ans;
};

console.log(solution(437674, 3));
console.log(solution(110011, 10));
