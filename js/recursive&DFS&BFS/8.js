const solution = (nums, m) => {
  const answer = [];
  const ch = Array(nums.length).fill(0);
  const temp = [];

  function DFS(L) {
    if (L === m) {
      answer.push([...temp]);
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
};

console.log(solution([3, 6, 9], 2));
