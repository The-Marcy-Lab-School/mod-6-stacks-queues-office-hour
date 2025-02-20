class Stack {
  #stack = [];

  size() {
    return this.#stack.length;
  }

  isEmpty(){
    return this.size() === 0;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#stack.pop();
  }
  
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.#stack[this.size() - 1];
  }

  push(i){
    this.#stack.push(i);
  }

  
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2


const editorStack = new Stack();

const addWord = (word) =>{
  editorStack.push(word);
}

const undo = () => {
  return editorStack.pop();
}

// Example usage:
addWord("Hello");
console.log(editorStack.peek()); // "Hello"
addWord("World");
console.log(editorStack.peek()); // "World"
console.log(editorStack.size()); // 2
console.log(undo());             // "World"
console.log(editorStack.size()); // 1
console.log(undo());             // "Hello"
console.log(editorStack.size()); // 0


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
