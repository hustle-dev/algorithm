/**
 * @title 삽입 정렬
 * @link https://gmlwjd9405.github.io/2018/05/06/algorithm-insertion-sort.html
 * @description 손 안의 카드를 정렬하는 알고리즘. 선택 정렬과 유사하지만 좀 더 효율적임
 *
 * 최악의 경우 O(n^2), 모두 정렬되어 있는 경우, 즉 최선의 경우 O(n)
 * 주어진 배열 안에서 교환(swap)을 통해 정렬이 수행되므로 O(1)이다.
 *
 * 장점
 * - 알고리즘이 단순하다.
 * - 정렬되어 있는 경우, 매우 효율적이다.
 * - 배열 안에서 교환하는 방식으로 다른 메모리 공간을 필요로 하지 않는다.
 * - 안정 정렬이다.
 * 단점
 * - 비효율적
 * - 배열의 길이가 길어질수록 비효율적이다.
 */
const insertionSort = arr => {
  for (let index = 1; index < arr.length; index++) {
    const temp = arr[index];
    let prev = index - 1;
    while (prev >= 0 && arr[prev] > temp) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = temp;
  }
  return arr;
};
console.log(insertionSort([6, 3, 7, 2, 1, 8, 9, 4, 5, 10]));
