const e = require("express");

class Stack {

  #stack = [];

  size() {
    return this.#stack.length;
  }

  isEmpty(){
    return this.size() === 0;
  }
//remove the last element of the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#stack.pop();
  }
  // This method returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#stack[this.size() - 1];
  }

  push(i){
    this.#stack.push(i);
  }

  showAll(){
    return [...this.#stack];
  }
}

// Example usage:
// const stack = new Stack();
// console.log(stack)

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek())

// console.log(stack.peek()); // 30
// console.log(stack.pop());  // 30
// console.log(stack.size()); // 2


// const editorStack = new Stack();

// const addWord = (word) =>{
//   editorStack.push(word);
// }

// const undo = () => {
//   return editorStack.pop();
// }

// // Example usage:
// addWord("Hello");


// console.log(editorStack.peek()); // "Hello"
// addWord("World");
// console.log(editorStack.peek()); // "World"
// console.log(editorStack.size()); // 2
// console.log(editorStack.showAll()); // ["Hello", "World"] 
// console.log(undo());             // "World"
// console.log(editorStack.size()); // 1
// console.log(editorStack.peek()); // World
// console.log(undo());             // "Hello"
// console.log(editorStack.size()); // 0


const pagesStack = new Stack();

const goToNewPage = (page) => {
  pagesStack.push(page);
}
const goBackToPrevious = () => {
  if (pagesStack.isEmpty()) {
    console.log("No more pages to go back to.");
    return null;
  }
  return pagesStack.pop();
}

// Example usage:
goToNewPage("Page 1");
goToNewPage("Page 2");
goToNewPage("Page 3");
console.log(pagesStack.peek()); // "Page 3"

goBackToPrevious();
console.log(pagesStack.peek()); // "Page 2"
goBackToPrevious();
console.log(pagesStack.peek()); // "Page 1"
goBackToPrevious();
