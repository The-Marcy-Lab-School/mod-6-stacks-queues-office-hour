class Queue {
  #values = [];

  enqueue(data) {
    this.#values.push(data)
  }

  dequeue() {
    return this.#values.shift();
  }

  peek() {
    return this.#values[0];
  }

  size() {
    return this.#values.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const printerQueue = new Queue();

const addDocument = (document) => {
  printerQueue.enqueue(document);
}

const printDocument = () => {
  return printerQueue.dequeue();
}


// Example usage:
addDocument("Document 1");
addDocument("Document 2");
addDocument("Document 3");
console.log(printerQueue.peek()); // "Document 1"

console.log(printerQueue.size()); // 3
console.log(printDocument()); // "Document 1"
console.log(printerQueue.size()); // 2
console.log(printerQueue.peek()); // "Document 2"
console.log(printDocument()); // "Document 2"
console.log(printerQueue.size()); // 1