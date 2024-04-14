class Node{
    constructor(val){
        this.val = val;
        this.netx = null ;
    };
};
 class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    push (val){
        const nNode = new Node(val);
        if (!this.head){
            this.head = nNode;
            this.tail = this.head;
        }else{
            this.tail.next = nNode;
            this.tail = nNode;
        }
        this.length++;
        return this.length;
    };
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let nTail = current;

        while (current.next){
            nTail = current;
            current = current.next;
        };
        this.tail = nTail;
        this.tail.next = 0;
        this.length++;

        if (this.length === 0){
            this.head = null;
            this.tail = null;
        };
        return current;
    };
    actualC(val){
        const nNode = new Node(val);
        if (!this.head){
            this.head = nNode;
            this.tail = this.head;
        }
        nNode.next = this.head;
        this.head = nNode;
        return this.length;
    };
    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;
        while (current) {
          next = current.next;
          current.next = previous;
          previous = current;
          current = next;
        }
        this.head = previous;
    };
 };

const lista = new LinkedList();
lista.push("a");
lista.push("b");
lista.push("c");
actualC
lista.pop();
lista.pop();
lista.pop();
console.log(lista);