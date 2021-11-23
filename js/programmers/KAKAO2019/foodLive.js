/**
 * https://programmers.co.kr/learn/courses/30/lessons/42891?language=javascript
 * @param {number[]} food_times
 * @param {number} k
 * @returns
 */
function solution(food_times, k) {
  food_times.unshift(0);
  let sortFoodTimes = [...food_times];
  sortFoodTimes.sort((a, b) => a - b);

  let rest = food_times.length - 1;

  for (let i = 1; i < sortFoodTimes.length; i++) {
    if (k < rest * (sortFoodTimes[i] - sortFoodTimes[i - 1])) {
      let idx = k % rest;
      let cnt = 0;
      for (let j = 1; j < food_times.length; j++) {
        // console.log(idx, cnt);
        if (food_times[j] >= sortFoodTimes[i]) {
          if (idx === cnt) {
            return j;
          }
          cnt++;
        }
      }
    } else {
      k -= rest * (sortFoodTimes[i] - sortFoodTimes[i - 1]);
      rest--;
    }
  }

  return -1;
}

console.log(solution([1, 2, 3], 7));
