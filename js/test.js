// 덱 풀이법
const solution = (nums, k) => {
  const answer = [];
  const deque = [];

  for (let i = 0; i < k - 1; i++) {
    while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
      deque.pop();
    }
    deque.push([nums[i], i]);
  }

  for (let i = k - 1; i < nums.length; i++) {
    while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) {
      deque.pop();
    }
    deque.push([nums[i], i]);
    answer.push(deque[0][0]);
    if (deque[0][1] === i - k + 1) deque.shift();
  }

  return answer;
};

console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3));
