/**
 * https://programmers.co.kr/learn/courses/30/lessons/70129
 * @param {string} s
 * @returns
 */

const solution = s => {
  let answer = [];
  let numOfChange = 0;
  let zero = 0;

  while (s !== '1') {
    if (s.match(/[0]/g)) {
      zero += s.match(/[0]/g).length;
    }

    s = s.replace(/[0]/g, '');
    const c = s.length;

    s = c.toString(2);

    numOfChange++;
  }

  answer = [numOfChange, zero];

  return answer;
};
