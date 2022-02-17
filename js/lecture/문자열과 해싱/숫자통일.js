const solution = s => {
  let cur = s[0];

  let oneToZero = 0;
  let zeroToOne = 0;

  if (cur === '0') zeroToOne += 1;
  else oneToZero += 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      if (s[i] === '1') oneToZero += 1;
      else zeroToOne += 1;
    }
  }

  return Math.min(zeroToOne, oneToZero);
};

console.log(solution('100001111'));
console.log(solution('10010111100'));
