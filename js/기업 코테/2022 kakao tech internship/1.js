const solution = (survey, choices) => {
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const str = survey[i];
    const front = str[0];
    const back = str[1];
    const grade = choices[i];

    if (grade < 4) {
      obj[front] += 4 - grade;
    } else if (grade > 4) {
      obj[back] += grade - 4;
    }
  }

  let ans = '';

  if (obj['R'] >= obj['T']) {
    ans += 'R';
  } else {
    ans += 'T';
  }

  if (obj['C'] >= obj['F']) {
    ans += 'C';
  } else {
    ans += 'F';
  }

  if (obj['J'] >= obj['M']) {
    ans += 'J';
  } else {
    ans += 'M';
  }

  if (obj['A'] >= obj['N']) {
    ans += 'A';
  } else {
    ans += 'N';
  }

  return ans;
};

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
