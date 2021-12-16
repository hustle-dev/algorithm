/**
 * Prison Cells After N Days
 * https://leetcode.com/problems/prison-cells-after-n-days/
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
  let temp = cells;
  const convertCells = cellArr => {
    const newArr = [];
    for (let i = 0; i < cellArr.length; i++) {
      if (i === 0 || i === cellArr.length - 1) newArr[i] = 0;
      if (cellArr[i - 1] === cellArr[i + 1]) newArr[i] = 1;
      else newArr[i] = 0;
    }
    return newArr;
  };

  const N = n % 14;

  if (N === 0) {
    for (let i = 0; i < 14; i++) {
      temp = convertCells(temp);
    }
    return temp;
  } else {
    for (let i = 0; i < N; i++) {
      temp = convertCells(temp);
    }
    return temp;
  }
};
