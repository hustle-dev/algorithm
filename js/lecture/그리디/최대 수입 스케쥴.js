const solution = nums => {
  nums.sort((a, b) => (b[0] === a[0] ? b[1] - a[1] : b[0] - a[0]));
  const m = new Map();
  let maxIndex = 0;
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxIndex < nums[i][1]) maxIndex = nums[i][1];
  }

  for (let i = 1; i <= maxIndex; i++) {
    m.set(i, i);
  }

  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i][1])) {
      answer += nums[i][0];
      if (m.get(nums[i][1]) === 1) m.delete(nums[i][1]);
      else m.set(nums[i][1], m.get(nums[i][1]) - 1);
      maxIndex -= 1;
    }

    if (maxIndex === 0) break;
  }

  return answer;
};

console.log(
  solution([
    [50, 2],
    [20, 1],
    [40, 2],
    [60, 3],
    [30, 3],
    [30, 1],
  ])
);

console.log(
  solution([
    [50, 2],
    [40, 2],
    [20, 1],
    [10, 1],
  ])
);

// ----------- MaxHeap 사용 코드---------------------

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//     this.heap.push(Number.MAX_SAFE_INTEGER);
//   }
//   insert(val) {
//     this.heap.push(val);
//     this.upheap(this.heap.length - 1);
//   }
//   upheap(pos) {
//     const val = this.heap[pos];
//     while (pos >= 1 && val > this.heap[parseInt(pos / 2)]) {
//       this.heap[pos] = this.heap[parseInt(pos / 2)];
//       pos = parseInt(pos / 2);
//     }
//     this.heap[pos] = val;
//   }
//   get() {
//     const val = this.heap[1];
//     if (this.heap.length === 2) return this.heap.pop();
//     this.heap[1] = this.heap.pop();
//     this.downheap(1, this.heap.length - 1);
//     return val;
//   }
//   downheap(pos, len) {
//     const val = this.heap[pos];
//     while (pos <= parseInt(len / 2)) {
//       let child = pos * 2;
//       if (this.heap[child] < this.heap[child + 1]) child += 1;
//       if (val >= this.heap[child]) break;
//       this.heap[pos] = this.heap[child];
//       pos = child;
//     }
//     this.heap[pos] = val;
//   }
//   size() {
//     return this.heap.length - 1;
//   }
//   show() {
//     for (let i = 1; i <= this.size(); i++) {
//       console.log(this.heap[i]);
//     }
//   }
// }

// function solution(nums) {
//   let answer = 0;
//   nums.sort((a, b) => {
//     if (a[1] === b[1]) return b[0] - a[0];
//     return b[1] - a[1];
//   });

//   const maxD = nums[0][1];
//   const newHeap = new MaxHeap();

//   let j = 0;
//   for (let i = maxD; i >= 1; i--) {
//     for (; j < nums.length; j++) {
//       if (nums[j][1] < i) break;
//       newHeap.insert(nums[j][0]);
//     }

//     if (newHeap.size() > 0) {
//       answer += newHeap.get();
//     }
//   }

//   return answer;
// }

// console.log(
//   solution([
//     [50, 2],
//     [20, 1],
//     [40, 2],
//     [60, 3],
//     [30, 3],
//     [30, 1],
//   ])
// );
