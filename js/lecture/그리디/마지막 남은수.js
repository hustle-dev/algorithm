const solution = nums => {
  while (nums.length > 1) {
    nums.sort((a, b) => a - b);

    const max1 = nums.pop();
    const max2 = nums.pop();

    if (max1 !== max2) nums.push(Math.abs(max1 - max2));
  }

  return nums.length === 0 ? 0 : nums[0];
};

console.log(solution([5, 2, 4, 3, 1]));
console.log(solution([7, 6, 3, 2, 4, 5, 1]));

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

const solution = nums => {
  const nH = new MaxHeap();

  for (let i = 0; i < nums.length; i++) {
    nH.insert(nums[i]);
  }

  while (nH.size() > 1) {
    const max1 = nH.get();
    const max2 = nH.get();

    if (max1 !== max2) nH.insert(Math.abs(max1 - max2));
  }

  return nH.size() === 0 ? 0 : nH.get();
};

console.log(solution([5, 2, 4, 3, 1]));
console.log(solution([7, 6, 3, 2, 4, 5, 1]));
