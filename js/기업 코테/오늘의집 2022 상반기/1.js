const solution = rounds => {
  const N = rounds.length;
  let answer = 0;

  const aSelect = new Array(N).fill(0);
  const bSelect = new Array(N).fill(0);
  const cSelect = new Array(N).fill(0);
  const dSelect = new Array(N).fill(0);

  const aSelectCouple = new Array(N).fill(0);
  const bSelectCouple = new Array(N).fill(0);
  const cSelectCouple = new Array(N).fill(0);
  const dSelectCouple = new Array(N).fill(0);

  const matchObj = {
    a: aSelect,
    b: bSelect,
    c: cSelect,
    d: dSelect,
  };

  for (let i = 0; i < N; i++) {
    aSelect[i] = rounds[i][0];
    bSelect[i] = rounds[i][1];
    cSelect[i] = rounds[i][2];
    dSelect[i] = rounds[i][3];
  }

  for (let i = 0; i < N; i++) {
    if (
      matchObj[aSelect[i]][i] === 'a' &&
      aSelectCouple[i - 1] !== aSelect[i] &&
      aSelect[i] !== 'a'
    ) {
      aSelectCouple[i] = aSelect[i];
    }

    if (
      matchObj[bSelect[i]][i] === 'b' &&
      bSelectCouple[i - 1] !== bSelect[i] &&
      bSelect[i] !== 'b'
    ) {
      bSelectCouple[i] = bSelect[i];
    }

    if (
      matchObj[cSelect[i]][i] === 'c' &&
      cSelectCouple[i - 1] !== cSelect[i] &&
      cSelect[i] !== 'c'
    ) {
      cSelectCouple[i] = cSelect[i];
    }

    if (
      matchObj[dSelect[i]][i] === 'd' &&
      dSelectCouple[i - 1] !== dSelect[i] &&
      dSelect[i] !== 'd'
    ) {
      dSelectCouple[i] = dSelect[i];
    }
  }

  // 서로 선택하여 커플된 경우 선택
  for (let i = 1; i < N; i++) {
    if (aSelect[i] === aSelectCouple[i - 1]) {
      answer++;
    }
    if (bSelect[i] === bSelectCouple[i - 1]) {
      answer++;
    }
    if (cSelect[i] === cSelectCouple[i - 1]) {
      answer++;
    }
    if (dSelect[i] === dSelectCouple[i - 1]) {
      answer++;
    }
  }

  // 자기 자신 선택한경우
  for (let i = 0; i < N; i++) {
    if (aSelect[i] === 'a') {
      answer++;
    }
    if (bSelect[i] === 'b') {
      answer++;
    }
    if (cSelect[i] === 'c') {
      answer++;
    }
    if (dSelect[i] === 'd') {
      answer++;
    }
  }

  return answer;
};

console.log(
  solution([
    ['b', 'a', 'a', 'd'],
    ['b', 'c', 'a', 'c'],
    ['b', 'a', 'd', 'c'],
  ])
);
console.log(
  solution([
    ['b', 'a', 'd', 'c'],
    ['b', 'a', 'c', 'd'],
  ])
);
console.log(
  solution([
    ['b', 'a', 'd', 'c'],
    ['d', 'c', 'b', 'a'],
    ['b', 'a', 'd', 'c'],
  ])
);
console.log(
  solution([
    ['d', 'a', 'a', 'a'],
    ['c', 'a', 'a', 'a'],
    ['b', 'a', 'a', 'a'],
  ])
);
