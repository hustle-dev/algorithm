const solution = nums => {
  const ch = Array(9).fill(0);
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    ch[i] = 1;
    for (let j = 1; j < nums.length; j++) {
      ch[j] = 1;
      for (let k = 2; k < nums.length; k++) {
        ch[k] = 1;
        for (let i1 = 0; i1 < nums.length; i1++) {
          if (ch[i1] === 1) continue;
          for (let i2 = 0; i2 < nums.length; i2++) {
            if (ch[i2] === 1) continue;
            for (let i3 = 0; i3 < nums.length; i3++) {
              if (ch[i3] === 1) continue;

              let group1 = nums[i] + nums[j] + nums[k];
              let group2 = nums[i1] + nums[i2] + nums[i3];
              let group3 = total - (group1 + group2);

              let max = Math.max(group1, group2, group3);
              let min = Math.min(group1, group2, group3);

              answer = Math.min(answer, max - min);
            }
            ch[i2] = 0;
          }
          ch[i1] = 0;
        }
        ch[k] = 0;
      }
      ch[j] = 0;
    }
    ch[i] = 0;
  }

  return answer;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 11]));
