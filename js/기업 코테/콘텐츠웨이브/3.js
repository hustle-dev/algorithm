const recur = arr => {
  if (arr.length === 1) return arr;

  arr.reverse();
  const N = arr.length;

  let arr1;
  let arr2;
  if (arr.length % 2 === 0) {
    arr1 = recur(arr.slice(0, N / 2));
    arr2 = recur(arr.slice(N / 2));
  } else {
    arr1 = recur(arr.slice(0, Math.floor(N / 2) + 1));
    arr2 = recur(arr.slice(Math.floor(N / 2) + 1));
  }

  return arr1.concat(arr2);
};

function solution(arr) {
  const answer = recur(arr);

  return answer;
}
