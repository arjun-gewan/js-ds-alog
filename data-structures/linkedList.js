class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }

  print() {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value + (current.next ? ' -> ' : '');
      current = current.next;
    }
    console.log(output);
  }
}

module.exports = LinkedList;