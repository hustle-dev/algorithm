/**
 * Palindrome Partitioning
 * https://leetcode.com/problems/palindrome-partitioning/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const answer = [];
  const temp = [];
  const isPalindrome = str => str === str.split('').reverse().join('');
  function DFS(start, str) {
    if (start === str.length) {
      answer.push([...temp]);
      return;
    }
    for (let i = start + 1; i <= s.length; i++) {
      const subStr = s.substring(start, i);
      if (isPalindrome(subStr)) {
        temp.push(subStr);
        DFS(i, str);
        temp.pop();
      }
    }
  }
  DFS(0, s);
  return answer;
};
