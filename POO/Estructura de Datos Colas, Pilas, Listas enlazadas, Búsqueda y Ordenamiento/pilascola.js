function Stack() {
    this._size = 0;
    this._storage = {};
};
Stack.prototype.push = function(data) {
    var size = this._size++;
    this._storage[size] = data;
};
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
    if (size) {
        deletedData = this._storage[size];
        delete this._storage[size];
        this._size--;
        return deletedData;
    };
}; 

const miStack = new Stack();
miStack.push("elemento 1");
miStack.push("elemento 2");
miStack.push("elemento 3");
console.log (miStack);
miStack.pop();
console.log (miStack);

//Cola
function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        return deletedData;
    }
};

const miQueue = new Queue ();
miQueue.enqueue("elemento 1");
miQueue.enqueue("elemento 2");
miQueue.enqueue("elemento 3");
miQueue.enqueue("elemento 4");
console.log(miQueue);
console.log(miQueue.size());
miQueue.dequeue();