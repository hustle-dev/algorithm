function solution(nums) {
  let answer;
  let distance = 999;

  const dist = Array.from({ length: nums.length }, () => 999);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      distance = 0;
      dist[i] = Math.min(distance, dist[i]);
    } else {
      distance++;
      dist[i] = Math.min(distance, dist[i]);
    }
  }

  distance = 999;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 1) {
      distance = 0;
      dist[i] = Math.min(distance, dist[i]);
    } else {
      distance++;
      dist[i] = Math.min(distance, dist[i]);
    }
  }

  answer = Math.max(...dist);

  return answer;
}

console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));
