function solution(need, plan) {
  let answer = 'YES';

  const stack = need.split('');

  for (let i = plan.length - 1; i >= 0; i--) {
    if (stack[stack.length - 1] === plan[i]) stack.pop();
  }

  if (stack.length !== 0) {
    return 'NO';
  }

  return answer;
}

console.log(solution('CBA', 'CBDBAGE'));
