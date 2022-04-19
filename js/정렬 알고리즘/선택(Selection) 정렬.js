/**
 * @title 선택 정렬
 * @link https://github.com/GimunLee/tech-refrigerator/blob/master/Algorithm/%EC%84%A0%ED%83%9D%20%EC%A0%95%EB%A0%AC%20(Selection%20Sort).md#%EC%84%A0%ED%83%9D-%EC%A0%95%EB%A0%AC-selection-sort
 * @description 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택
 *
 * 최선, 평균, 최악의 경우 모두 시간복잡도가 O(n^2)이다.
 * 주어진 배열 안에서 교환(swap)을 통해 정렬이 수행되므로 O(1)이다.
 *
 * 장점
 * - 알고리즘이 단순하다.
 * - 거품 정렬에 비해 실제로 교환하는 횟수가 적기 때문에 효율적이다.
 * - 배열 안에서 교환하는 방식으로 다른 메모리 공간을 필요로 하지 않는다.
 * 단점
 * - 비효율적
 * - 불안정 정렬
 *
 * 안정 정렬: 동일한 값에 대해 기존의 순서가 유지되는 정렬 방식
 * 불안정 정렬: 동일한 값에 대해 기존의 순서가 유지되지 않는 방식
 *
 * 예시: 2 2 1 3이라는 배열에서 선택정렬을 하면 1 2 2 3 이 되는데 3번째 2는 원래 2번째 2보다 앞에있는데
 * 뒤에 왔기 때문에 불안정 정렬!
 */
const selectionSort = arr => {
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
console.log(selectionSort([6, 3, 7, 2, 1, 8, 9, 4, 5, 10]));
