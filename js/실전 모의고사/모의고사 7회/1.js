const solution = (nums, k) => {
  if (nums.length % k !== 0) return 'NO';
  nums.sort((a, b) => a - b);
  const m = new Map();
  for (const n of nums) {
    m.set(n, m.get(n) + 1 || 1);
  }

  for (let [key, val] of m) {
    let compKey = key;
    if (val !== 0) {
      while (compKey < key + k) {
        if (!m.has(compKey) || m.get(compKey) < val) return 'NO';
        else {
          m.set(compKey, m.get(compKey) - val);
          if (m.get(compKey) === 0) m.delete(compKey);
          compKey += 1;
        }
      }
    }
  }
  return 'YES';
};
console.log(solution([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3));

// 강사님 풀이
// const solution = (nums, k) => {
//   if (nums.length % k !== 0) return 'NO';
//   const map = new Map();
//   nums.forEach(x => map.set(x, (map.get(x) || 0) + 1));
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (map.get(nums[i]) > 0) {
//       for (let j = 0; j < k; j++) {
//         if (map.get(nums[i] + j) > 0) {
//           map.set(nums[i] + j, map.get(nums[i] + j) - 1);
//         } else {
//           return 'NO';
//         }
//       }
//     }
//   }
//   return 'YES';
// };
