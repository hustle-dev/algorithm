function solution(nums) {
  let answer = 'YES';
  let i;

  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      continue;
    } else {
      break;
    }
  }

  for (i; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      continue;
    } else {
      break;
    }
  }

  if (i === nums.length - 1) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 4, 3, 2, 2]));
