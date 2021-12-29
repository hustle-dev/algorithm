const solution = nums => {
  let answer = 0;
  let sum = 0;

  let odd = 0;
  let even = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum % 2) answer += 1;

    sum % 2 ? (answer += even) : (answer += odd);
    sum % 2 ? odd++ : even++;
  }

  return answer % 1000000007;
};
console.log(solution([1, 3, 5]));
