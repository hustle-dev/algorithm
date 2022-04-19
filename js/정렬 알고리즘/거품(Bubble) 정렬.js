/**
 * @title 거품정렬
 * @link https://gmlwjd9405.github.io/2018/05/06/algorithm-bubble-sort.html
 * @description 거품정렬은 서로 인접한 두 원소를 검사하여 정렬한다.
 * 1회전을 수행하고 나면 가장 큰 자료가 맨 뒤로 이동한다.
 *
 * 최선, 평균, 최악의 경우 모두 시간복잡도가 O(n^2)이다.
 * 주어진 배열 안에서 교환(swap)을 통해 정렬이 수행되므로 O(1)이다.
 *
 * 장점
 * - 구현이 간단하고 소스코드 직관적이다.
 * - 정렬하고자 하는 배열 안에서 교환하는 방식, 다른 메모리 공간 필요 X
 * - 안정 정렬이다.
 * 단점
 * - 시간복잡도 측면에서 매우 비효율적이다.
 * - 정렬 돼있지 않은 원소가 정렬 됐을때의 자리로 가기 위해서, 교환 연산(swap)이 많이 일어난다.
 */
const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([6, 3, 7, 2, 1, 8, 9, 4, 5, 10]));

const bubble_sort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
};
console.log(bubble_sort([6, 3, 7, 2, 1, 8, 9, 4, 5, 10]));
