function solution(nums) {
  let answer;
  let lt = 0;

  for (let rt = 1; rt < nums.length; rt++) {
    let flag = false;
    let left = nums[lt];
    let right = nums[rt];

    while (left > 0 && right < 0) {
      flag = true;
      if (Math.abs(left) === Math.abs(right)) {
        nums.splice(lt, 2);
        lt--;
        rt--;
      } else {
        if (Math.abs(left) > Math.abs(right)) {
          nums.splice(rt, 1);
        } else {
          nums.splice(lt, 1);
          lt--;
          rt--;
        }
      }

      left = nums[lt];
      right = nums[rt];
    }

    if (flag) continue;
    lt++;
  }

  console.log(nums);

  return answer;
}

console.log(solution([-2, -1, 2, 1, -3, 2]));
