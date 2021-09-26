function solution(nums, m) {
  let answer = [];
  let temp = [];
  const ch = Array.from({ length: nums.length }, () => 0);

  function DFS(L) {
    if (L === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp.push(nums[i]);
          DFS(L + 1);
          temp.pop();
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution([3, 6, 9], 2));
