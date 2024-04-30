class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    };
};
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    };
  
    insertAtTail(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      }
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    };
};
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    };
  
    deleteFromHead() {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
    };
};