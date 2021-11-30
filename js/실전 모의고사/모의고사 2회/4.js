const solution = (nums, t) => {
  let answer = 0;
  let cnt = 0;
  const pow = Array(t + 1).fill(0);
  const st = Array(nums.length).fill(0);
  pow[1] = 1;

  for (let i = 2; i <= t; i++) {
    pow[i] = pow[i - 1] * 2;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      st[i] += pow[nums[i][j]];
    }
  }

  function DFS(s, bits) {
    answer++;
    for (let j = 0; j < nums.length; j++) {
      if ((bits & st[j]) === st[j]) {
        cnt++;
        break;
      }
    }
    for (let i = s; i <= t; i++) {
      DFS(i + 1, bits + pow[i]);
    }
  }

  DFS(1, 0);
  return answer - cnt;
};
console.log(solution([[2], [1, 3]], 4));
