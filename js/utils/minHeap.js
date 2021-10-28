class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(Number.MIN_SAFE_INTEGER);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    while (pos >= 1 && this.heap[pos] < this.heap[parseInt(pos / 2)]) {
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
      if (this.heap[child] > this.heap[child + 1]) child += 1;
      if (val <= this.heap[child]) break;
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

const newHeap = new MinHeap();

for (let i = 10; i >= 0; i--) {
  newHeap.insert(i);
}

console.log(newHeap);
