/**
 * Maximum Units on a Truck
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let max = 0;
  let curSize = 0;

  for (const [size, units] of boxTypes) {
    if (size <= truckSize - curSize) {
      max += size * units;
      curSize += size;
    } else {
      max += (truckSize - curSize) * units;
      break;
    }
  }

  return max;
};
