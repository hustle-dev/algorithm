const solution = (s1, s2) => {
  let zeroToOne = 0;
  let oneToZero = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (s1[i] === '0') zeroToOne += 1;
      else oneToZero += 1;
    }
  }

  return Math.min(zeroToOne, oneToZero) + Math.abs(zeroToOne - oneToZero);
};

console.log(solution('11000111', '11100110'));
console.log(solution('11000111', '11111110'));
