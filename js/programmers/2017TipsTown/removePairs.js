/**
 * https://programmers.co.kr/learn/courses/30/lessons/12973
 */

const solution = s => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }

    s[i] === stack[stack.length - 1] ? stack.pop() : stack.push(s[i]);
  }

  const answer = stack.length === 0 ? 1 : 0;

  return answer;
};

console.log(solution('baabaa'));
console.log(solution('cdcd'));
