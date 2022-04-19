/**
 * @title 병합 정렬
 * @link https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html
 * @description 분할 정복 방법으로 매우 빠른 수행 속도, 퀵소트와 같이 많이 언급되며 안정정렬이다.
 *
 * 평균적으로 O(nlogn)
 *
 * 장점
 * - 속도가 빠르다.
 * - 데이터가 무엇이든 간에 정렬되는 시간은 동일하다.
 *
 * 단점
 * - 레코드를 배열로 구성하면 임시 배열이 필요하다.
 * - 레코드들의 크기가 큰 경우 이동횟수가 많아짐으로 매우 큰 시간적 낭비를 초래한다.
 * - 크기가 큰 경우 연결리스트를 사용하면 다른 어떤 정렬방법보다 효율적이다.
 *
 */
const mergeSort = arr => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(left.slice(leftIndex), right.slice(rightIndex));
};

console.log(mergeSort([5, 3, 8, 4, 9, 1, 6, 2, 7]));
console.log(mergeSort([6, 3, 7, 2, 1, 8, 9, 4, 5, 10]));
