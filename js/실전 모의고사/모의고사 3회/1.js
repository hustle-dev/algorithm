const solution = dice => {
  let answer = 0;
  let sum;

  // 0 -> 5
  // 1 -> 3
  // 2 -> 4

  let curSelect;
  let nextSelect;
  for (let k = 0; k < 6; k++) {
    sum = 0;
    curSelect = dice[0][k];

    if (k === 0) {
      nextSelect = dice[0][5];
    } else if (k === 1) {
      nextSelect = dice[0][3];
    } else if (k === 2) {
      nextSelect = dice[0][4];
    } else if (k === 3) {
      nextSelect = dice[0][1];
    } else if (k === 4) {
      nextSelect = dice[0][2];
    } else {
      nextSelect = dice[0][0];
    }
    // console.log('intial: ', curSelect, nextSelect);
    for (let l = 6; l >= 1; l--) {
      if (l !== curSelect && l !== nextSelect) {
        sum += l;
        break;
      }
    }
    for (let i = 1; i < dice.length; i++) {
      for (let l = 0; l < 6; l++) {
        if (nextSelect === dice[i][l]) {
          curSelect = nextSelect;

          if (l === 0) {
            nextSelect = dice[i][5];
          } else if (l === 1) {
            nextSelect = dice[i][3];
          } else if (l === 2) {
            nextSelect = dice[i][4];
          } else if (l === 3) {
            nextSelect = dice[i][1];
          } else if (l === 4) {
            nextSelect = dice[i][2];
          } else {
            nextSelect = dice[i][0];
          }
          break;
        }
      }
      // console.log('inner: ', curSelect, nextSelect);
      for (let l = 6; l >= 1; l--) {
        if (l !== curSelect && l !== nextSelect) {
          sum += l;
          break;
        }
      }
    }
    // console.log(sum);
    answer = Math.max(answer, sum);
  }

  return answer;
};

console.log(
  solution([
    [2, 3, 1, 6, 5, 4],
    [3, 1, 2, 4, 6, 5],
    [5, 6, 4, 1, 3, 2],
    [1, 3, 6, 2, 4, 5],
    [4, 1, 6, 5, 2, 3],
  ])
);
