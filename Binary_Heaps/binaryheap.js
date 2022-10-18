//binary heap--> all node smaller than root node ......
//two child nodes
//left children  are filled first
//Priority Queue --> a data structure where each element has a property.Elements which higher priorities are served before elements with lower priorities...

class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 1;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (rightChild > element && swap === null) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChild;
          }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }

  extractMax() {
    const max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = newNode(val, priority);

    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 1;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (rightChild.priority > element.priority && swap === null) ||
            (swap !== null && rightChild.priority > leftChild.priority)
          ) {
            swap = rightChild;
          }
        }

        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(1);
heap.insert(45);
heap.extractMax();

let ER = new PriorityQueue();
ER.enqueue("common cold", 2);
ER.enqueue("gunshot head", 1);
ER.enqueue("cold", 3);
ER.dequeue();
