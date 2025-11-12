import { ListNode } from '../extensions/list-node.js';


export default class Queue {

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined;  
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return value;
  }

}
