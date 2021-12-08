/**
 * Longest Palindromic Subsequence
 * https://leetcode.com/problems/longest-palindromic-subsequence/
 * @param {string} s
 * @return {number}
 */
// dp: i 번째에서 j번째 까지의 부분 문자열에서 얻을 수 있는 최대 palindrome의 길이
var longestPalindromeSubseq = function (s) {
  const dp = Array.from({ length: s.length }, () => Array(s.length).fill(0));

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = 2;
    else dp[i][i + 1] = 1;
  }

  for (let k = 2; k < s.length; k++) {
    for (let i = 0; i < s.length - 2; i++) {
      if (i + k < s.length) {
        if (s[i] === s[i + k]) dp[i][i + k] = dp[i + 1][i + k - 1] + 2;
        else dp[i][i + k] = Math.max(dp[i][i + k - 1], dp[i + 1][i + k]);
      }
    }
  }

  return dp[0][s.length - 1];
};

// console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('bbaccb'));
