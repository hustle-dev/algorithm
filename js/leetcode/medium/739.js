/**
 * Daily Temperatures
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
      let [_, idx] = stack.pop();
      answer[idx] = i - idx;
    }
    stack.push([temperatures[i], i]);
  }

  return answer;
};
