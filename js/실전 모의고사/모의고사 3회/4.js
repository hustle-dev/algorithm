const solution = (grid, clockwise) => {
  let answer = [];
  let temp = [];
  const N = grid.length;
  const ch = Array.from({ length: N }, () => 0);
  if (clockwise === true) {
    const reverseGrid = grid.map(el => el.split('').reverse().join(''));

    for (let i = 0; i < N; i++) {
      temp = [];
      for (let j = N - 1; j >= N - i - 1; j--) {
        if (!reverseGrid[j].length) {
          continue;
        }
        if (ch[j] > 0) {
          temp.push(
            reverseGrid[j]
              .split('')
              .splice(reverseGrid[j].length - 2)
              .join('')
          );
          reverseGrid[j] = reverseGrid[j]
            .split('')
            .splice(0, reverseGrid[j].length - 2)
            .join('');
        } else {
          temp.push(reverseGrid[j].split('').splice(reverseGrid[j].length - 1));
          reverseGrid[j] = reverseGrid[j]
            .split('')
            .splice(0, reverseGrid[j].length - 1)
            .join('');
          ch[j] = 1;
        }
      }
      answer.push(temp.join(''));
    }
  } else {
    const reverseGrid = grid.map(el => el.split('').reverse().join(''));

    for (let i = 0; i < N; i++) {
      temp = [];
      for (let j = N - i - 1; j <= N - 1; j++) {
        if (!reverseGrid[j].length) {
          continue;
        }
        if (ch[j] > 0) {
          temp.push(reverseGrid[j].split('').splice(0, 2).join(''));
          reverseGrid[j] = reverseGrid[j].split('').splice(2).join('');
        } else {
          temp.push(reverseGrid[j].split('').splice(0, 1));
          reverseGrid[j] = reverseGrid[j].split('').splice(1).join('');
          ch[j] = 1;
        }
      }
      answer.push(temp.join(''));
    }
  }

  return answer;
};

console.log(solution(['1', '234', '56789'], true));
console.log(solution(['A', 'MAN', 'DRINK', 'WATER11'], false));
