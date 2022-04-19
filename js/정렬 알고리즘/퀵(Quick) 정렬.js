/**
 * @title 퀵 정렬
 * @link https://gmlwjd9405.github.io/2018/05/10/algorithm-quick-sort.html
 * @description 분할 정복 방법으로 매우 빠른 수행 속도, 배열을 비균등하게 분할한다.
 *
 * 최악의 경우 O(n^2), 평균적으로 O(nlogn)
 * 공간 복잡도는 O(logn)이다.
 *
 * 장점
 * - 속도가 빠르다.
 * - 추가 메모리 공간을 필요로 하지 않는다.
 *
 * 단점
 * - 정렬된 리스트에 대해서는 수행시간 더 많이 걸린다.
 * - 퀵 정렬의 불균형 분할을 방지하기 위하여 피벗을 선택할 때 더욱 리스트를 균등하게 분할할 수 있는 데이터를 선택
 * - 불안정 정렬
 *
 *
 */
const solution = arr => {
  quickSort(arr, 0, arr.length - 1);

  return arr;
};

const quickSort = (arr, left, right) => {
  if (left >= right) return;

  const p = partition(arr, left, right);

  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
};

const partition = (arr, left, right) => {
  const pivot = arr[left];
  let i = left;
  let j = right;

  while (i < j) {
    while (pivot < arr[j]) j--;

    while (i < j && pivot >= arr[i]) i++;

    swap(arr, i, j);
  }
  arr[left] = arr[i];
  arr[i] = pivot;

  return i;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(solution([5, 3, 8, 4, 9, 1, 6, 2, 7]));
console.log(solution([6, 3, 7, 2, 1, 8, 9, 4, 5, 10]));
