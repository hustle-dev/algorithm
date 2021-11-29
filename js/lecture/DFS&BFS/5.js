/**
 * 최대 선호 음식
 * @param {number[]} nums
 * @param {number} D
 * @param {number} K
 * @returns
 */
const solution = (nums, D, K) => {
  let answer = Number.MIN_SAFE_INTEGER;
  const N = nums.length;

  const pow = Array.from({ length: D + 1 }, () => 0);
  const st = Array.from({ length: nums.length }, () => 0);
  pow[1] = 1;

  for (let i = 2; i <= D; i++) {
    pow[i] = pow[i - 1] * 2;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      st[i] += pow[nums[i][j]];
    }
  }

  function DFS(L, s, bits) {
    if (L === K) {
      let cnt = 0;
      for (let j = 0; j < N; j++) {
        if ((bits & st[j]) === st[j]) cnt++;
      }
      answer = Math.max(answer, cnt);
    } else {
      for (let i = s; i <= D; i++) {
        DFS(L + 1, i + 1, bits + pow[i]);
      }
    }
  }

  DFS(0, 1, 0);

  return answer;
};

console.log(solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3));
