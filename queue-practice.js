'use strict';
class _Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.fist = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

}

function peek(q) {
  return q.first.value;
}

function isEmpty(q) {
  if (q.first === null) {
    return true;
  }
  return false;
}

function display(q) {
  let currentChar = q.first;

  while(currentChar.next !== null){
    console.log(currentChar.value);
    currentChar = currentChar.next;
  }
}

function main() {
  let starTreqQ = new Queue();

  starTreqQ.enqueue('kirk');
  starTreqQ.enqueue('Spock');
  starTreqQ.enqueue('Uhura');
  starTreqQ.enqueue('Sulu');
  starTreqQ.enqueue('Checkov');
  display(starTreqQ);

}