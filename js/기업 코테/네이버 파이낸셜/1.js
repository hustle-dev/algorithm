const solution = (recruits, s1, s2) => {
  const senior = [];
  const junior = [];

  for (const [a, b] of recruits) {
    if (a >= s1 || b >= s2) {
      senior.push([a, b]);
    } else {
      junior.push([a, b]);
    }
  }

  senior.sort((a, b) => (b[0] + b[1] === a[0] + a[1] ? b[0] - a[0] : b[0] + b[1] - (a[0] + a[1])));
  junior.sort((a, b) => (b[0] + b[1] === a[0] + a[1] ? b[0] - a[0] : b[0] + b[1] - (a[0] + a[1])));

  const expert = [];
  let ans = [];

  while (true) {
    // 이 경우는 senior에서 expert를 골라내야 하는 경우
    if (senior.length >= junior.length) {
      const repush = senior.shift();
      expert.push(repush);
      ans.push(repush);
      // 이 경우는 senior 혹은 junior에서 expert를 골라내야 하는 경우
    } else {
      const [s1, s2] = senior[0];
      const [j1, j2] = junior[0];

      if (s1 + s2 === j1 + j2 && expert.length + 2 < senior.length) {
        // 여기서 senior꺼 빼줌
        const repush = senior.shift();
        expert.push(repush);
        ans.push(repush);
      } else {
        // 여기서 junior꺼 빼줌
        const repush = junior.shift();
        expert.push(repush);
        ans.push(repush);
      }
    }

    if (expert.length < senior.length && senior.length < junior.length) {
      break;
    }
  }

  //   console.log(expert);
  //   console.log(senior);
  //   console.log(junior);
  //   console.log('ans: ', ans);

  if (ans.length === 1) return ans[0];
  else {
    let minE1 = 100;
    let minE2 = 100;
    for (const [a, b] of ans) {
      if (minE1 > a) minE1 = a;

      if (minE2 > b) minE2 = b;
    }
    return [minE1, minE2];
  }
};

console.log(
  solution(
    [
      [1, 50],
      [1, 60],
      [3, 70],
      [0, 65],
      [2, 50],
      [1, 90],
    ],
    2,
    70
  )
);

console.log(
  solution(
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 3],
      [1, 2],
      [2, 0],
      [2, 0],
      [2, 1],
    ],
    2,
    4
  )
);

console.log(
  solution(
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [2, 0],
      [0, 2],
      [1, 1],
    ],
    2,
    2
  )
);

console.log(
  solution(
    [
      [0, 2],
      [0, 3],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 3],
      [3, 2],
    ],
    2,
    3
  )
);
