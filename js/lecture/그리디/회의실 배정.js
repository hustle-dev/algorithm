const solution = meeting => {
  meeting.sort((a, b) => (a[1] <= b[1] ? -1 : a[0] <= b[0] ? -1 : 1));

  let cnt = 1;
  let end = meeting[0][1];

  for (let i = 1; i < meeting.length; i++) {
    if (end <= meeting[i][0]) {
      end = meeting[i][1];
      cnt += 1;
    }
  }

  return cnt;
};

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
