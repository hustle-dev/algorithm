const solution = (n, k) => {
  let answer = 0;

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

  const convertNum = n.toString(k);

  let tempString = '';
  const numArr = [];

  for (let i = 0; i < convertNum.length; i++) {
    if (convertNum[i] !== '0') tempString += convertNum[i];
    else {
      numArr.push(tempString);
      tempString = '';
    }
  }
  if (tempString) {
    numArr.push(tempString);
  }

  numArr.forEach(num => {
    if (isPrime(Number(num))) {
      answer++;
    }
  });

  return answer;
};

console.log(solution(437674, 3));
console.log(solution(110011, 10));
