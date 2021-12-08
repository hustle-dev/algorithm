/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let answer = 0;
  const m = new Map();
  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], m.get(nums[i]) + 1 || 1);
  }

  for (const [key, val] of m.entries()) {
    if (k === 0) {
      if (val > 1) answer++;
    } else {
      if (m.has(key + k)) answer++;
    }
  }

  return answer;
};

// const solution = (nums, k) => {
//   const numsArr = [...new Set(nums)];
//   let answer = 0;
//   let cnt = 0;
//   const m = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     m.set(nums[i], m.get(nums[i]) + 1 || 1);
//     if (m.get(nums[i]) === 2) {
//       cnt++;
//     }
//   }
//   numsArr.sort((a, b) => a - b);

//   let lt = 0;

//   for (let rt = 1; rt < numsArr.length; rt++) {
//     const diff = Math.abs(numsArr[lt] - numsArr[rt]);
//     if (diff === k) {
//       answer++;
//     } else if (diff > k) {
//       while (Math.abs(numsArr[lt] - numsArr[rt]) > k) {
//         lt++;
//         if (Math.abs(numsArr[lt] - numsArr[rt]) === k) {
//           answer++;
//         }
//       }
//     }
//   }
//   if (k === 0) return cnt;

//   return answer;
// };

// const solution = (nums, k) => {
//   let answer = 0;
//   const m = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     m.set(nums[i], m.get(nums[i]) + 1 || 1);
//   }

//   for(const [key, val] of m.entries()) {
//     if(k === 0) {
//       if(val > 1) answer++;
//     } else {
//       if(m.has(key+k)) answer++;
//     }
//   }

//   return answer;
// };

// console.log(solution('31415'));
