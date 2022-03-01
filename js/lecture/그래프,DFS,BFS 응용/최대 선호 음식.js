const solution = (nums, d, k) => {
  const pow = new Array(d + 1).fill(0);
  const N = nums.length;
  const weightArr = new Array(N).fill(0);

  pow[1] = 1;
  for (let i = 2; i <= d; i++) {
    pow[i] = pow[i - 1] * 2;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      weightArr[i] += pow[nums[i][j]];
    }
  }

  let answer = 0;
  const DFS = (L, s, bits) => {
    if (L === k) {
      let sum = 0;
      for (let i = 0; i < N; i++) {
        if ((bits & weightArr[i]) === weightArr[i]) sum++;
      }
      answer = Math.max(answer, sum);
    } else {
      for (let i = s; i <= d; i++) {
        DFS(L + 1, i + 1, bits + pow[i]);
      }
    }
  };

  DFS(0, 1, 0);

  return answer;
};

console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3));
