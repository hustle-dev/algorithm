function solution(nums) {
  nums.sort((a, b) => a - b);

  while (nums.length > 1) {
    const v1 = nums.pop();
    const v2 = nums.pop();

    if (v1 === v2) continue;
    else {
      nums.push(Math.abs(v1 - v2));
    }
    nums.sort((a, b) => a - b);
  }

  return nums.length === 0 ? 0 : nums[0];
}

console.log(solution([7, 6, 3, 2, 4, 5, 1]));

// ------------------ MaxHeap 버전 ----------------------------

class MaxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(Number.MAX_SAFE_INTEGER);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    while (pos >= 1 && this.heap[pos] > this.heap[parseInt(pos / 2)]) {
      const curValue = this.heap[pos];
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      this.heap[parseInt(pos / 2)] = curValue;
      pos = parseInt(pos / 2);
    }
  }
  get() {
    const val = this.heap[1];
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return val;
  }
  downheap(pos, len) {
    const val = this.heap[pos];
    while (pos <= parseInt(len / 2)) {
      let child = pos * 2;
      if (this.heap[child] < this.heap[child + 1]) child += 1;
      if (val >= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = val;
  }
  size() {
    return this.heap.length - 1;
  }
  show() {
    for (let i = 1; i < this.size(); i++) {
      console.log(this.heap[i]);
    }
  }
}

function solution(nums) {
  const newHeap = new MaxHeap();

  for (let x of nums) {
    newHeap.insert(x);
  }

  while (newHeap.size() > 1) {
    const a = newHeap.get();
    const b = newHeap.get();
    if (a === b) continue;

    newHeap.insert(Math.abs(a - b));
  }

  if (newHeap.size() === 1) return newHeap.get();
  else return 0;
}

console.log(solution([7, 6, 3, 2, 4, 5, 1]));
