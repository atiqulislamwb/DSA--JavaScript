//Stack-->Lifo --> last in first out

//Stack used
// 1.Managing function invocations
// 2.Undo/Redo
// 3.Routing

// let stack = [];
// stack.push("google");
// stack.push("instagram");
// stack.push("twitter");
// stack.pop();
// stack.pop();
// stack.push("youtube");
// stack.unshift("facebook");
// console.log(stack);

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let stack = new Stack();
stack.push("google");
stack.push("facebook");
stack.push("twitter");
stack.push("discord");
stack.pop();

console.log(stack);
//Big O -->
// insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)

// -------------------------<>-------------------------------------

//Queue-->Fifo -->  first in first out
//Queue used-->
// 1 some game,
// 2 background download
// 3 upload / download
// 4 printing / task process

// let queue = [];
// queue.push("google");
// queue.push("instagram");
// queue.push("twitter");
// queue.shift();
// queue.shift();

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const queue = new Queue();
queue.enqueue("google");
queue.enqueue("github");
queue.enqueue("twitch");
queue.dequeue();
queue.dequeue();
console.log(queue);

//Big O -->
// insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)
