/**
 * https://programmers.co.kr/learn/courses/30/lessons/17680
 */

const solution = (cacheSize, cities) => {
  let answer = 0;
  let queue = [];

  cities.forEach(el => {
    const ele = el.toLowerCase();
    if (!queue.includes(ele)) {
      answer += 5;
      queue.push(ele);
    } else {
      answer += 1;
      const repush = queue.splice(queue.indexOf(ele), 1);
      queue = [...queue, ...repush];
    }

    if (queue.length > cacheSize) {
      queue.shift();
    }
  });

  return answer;
};

// console.log(
//   solution(3, [
//     'Jeju',
//     'Pangyo',
//     'Seoul',
//     'NewYork',
//     'LA',
//     'Jeju',
//     'Pangyo',
//     'Seoul',
//     'NewYork',
//     'LA',
//   ])
// );
// console.log(
//   solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'])
// );

console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));
