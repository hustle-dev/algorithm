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
