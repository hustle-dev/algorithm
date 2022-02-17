const solution = nums => {
  let answer = 'YES';
  const N = nums.length;

  let i = 0;
  while (i < N) {
    if (nums[i] >= nums[i + 1]) break;
    i++;
  }

  if (i === 0 || i === N) return 'NO';

  for (i; i < N - 1; i++) {
    if (nums[i] < nums[i + 1]) return 'NO';
  }

  return answer;
};

console.log(solution([1, 2, 3, 4, 5, 3, 1]));
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution([1, 2, 3, 4, 5]));
