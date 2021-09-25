function solution(meeting) {
  let answer = 0;
  let et = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  answer += 1;
  et = meeting[0][1];

  for (let i = 1; i < meeting.length; i++) {
    if (et <= meeting[i][0]) {
      answer += 1;
      et = meeting[i][1];
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
