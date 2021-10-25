/**
 * https://programmers.co.kr/learn/courses/30/lessons/17677
 */

const solution = (str1, str2) => {
  const str1Lower = str1.toLowerCase();
  const str2Lower = str2.toLowerCase();
  let str1Arr = [];
  let str2Arr = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const twoWords = str1Lower.substring(i, i + 2);
    if (!twoWords.match(/[^a-z]/g)) {
      str1Arr.push(twoWords);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const twoWords = str2Lower.substring(i, i + 2);
    if (!twoWords.match(/[^a-z]/g)) {
      str2Arr.push(twoWords);
    }
  }

  if (str1Arr.length === 0 && str2Arr.length === 0) return 65536;

  let intersecNum = 0;
  let unionNum = 0;

  for (let i = 0; i < str1Arr.length; i++) {
    if (str2Arr.includes(str1Arr[[i]])) {
      const temp = str1Arr[i];
      str1Arr[str1Arr.indexOf(temp)] = -1;
      str2Arr[str2Arr.indexOf(temp)] = -1;

      intersecNum += 1;
    }
  }

  unionNum =
    str1Arr.filter(el => el !== -1).length + str2Arr.filter(el => el !== -1).length + intersecNum;

  return parseInt((intersecNum / unionNum) * 65536);
};

console.log(solution('FRANCE', 'french'));
// console.log(solution('handshake', 'shake hands'));
// console.log(solution('aa1+aa2', 'AAAA12'));
// console.log(solution('E=M*C^2', 'e=m*c^2'));
