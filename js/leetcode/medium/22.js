/**
 * @title Generate Parentheses
 * @link https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
function solution(n) {
  function isValid(stack) {
    let temp = [];
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === '(') {
        temp.push('(');
      } else if (stack[i] === ')') {
        if (temp.length === 0 || temp[temp.length - 1] === ')') {
          temp.push(')');
        } else temp.pop();
      }
    }
    return temp.length;
  }

  let answer = [];
  let tempArr = ['(', ')'];
  let temp = [];
  let nS = new Set();

  function DFS(L) {
    if (L === n * 2) {
      if (!isValid(temp)) {
        nS.add(temp.slice().join(''));
      }
    } else {
      for (let i = 0; i < 2; i++) {
        temp.push(tempArr[i]);
        DFS(L + 1);
        temp.pop();
      }
    }
  }
  DFS(0);

  answer = Array.from(nS);
  return answer;
}

console.log(solution(3));
