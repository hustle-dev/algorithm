const solution = nums => {
  let answer = 0;
  const setArr = [...new Set(nums)];
  // const ch = new Array(100000).fill(0);

  function DFS(s, sum) {
    if (sum && sum % 2 === 1) {
      // ch[sum] = 1;
      answer++;
    }
    for (let i = s; i < setArr.length; i++) {
      DFS(i + 1, sum + setArr[i]);
    }
  }

  DFS(0, 0);

  return answer % 1000000007;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// JK 풀이
// const solution = nums => {
//   let answer = 0;
//   let sum = 0;

//   let odd = 0;
//   let even = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];

//     if (sum % 2 === 1) answer++;
//     sum % 2 === 0 ? (answer += odd) : (answer += even);
//     sum % 2 === 0 ? (even += 1) : (odd += 1);
//   }
//   return answer;
// };

// function solution(nums) {
//   let cnt={0:1, 1:0};
//   let answer=0;
//   let sum=0;
//   for(let i=0; i<nums.length; i++){
//       sum+=nums[i];
//       if(sum%2==1){
//           answer+=cnt[0];
//       }
//       else answer+=cnt[1];
//       cnt[sum%2]++;
//   }
//   return answer;
// }
