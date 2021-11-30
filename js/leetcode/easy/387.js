/**
 * First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const sH = new Map();
  let str = '';

  for (const word of s) {
    sH.set(word, sH.get(word) + 1 || 1);
  }

  for (const info of sH.entries()) {
    if (info[1] === 1) {
      str = info[0];
      break;
    }
  }

  if (str.length === 0) return -1;

  return s.indexOf(str);
};

// lastIndexOf라는 메서드 사용 --> 이 메서드 알아두면 좋은듯!

// var firstUniqChar = function (s) {
//   for (i = 0; i < s.length; i++) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
//   return -1;
// };
