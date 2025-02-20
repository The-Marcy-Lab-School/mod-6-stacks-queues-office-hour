# Stacks and Queues: Use Cases

## 1. Use Cases for Stack (LIFO)

### **Use Case 1: Undo Feature in Text Editors**
In a text editor, when you type something and want to "undo" an action, a stack is a great choice.

- Every time you make a change (like typing a letter or deleting), that action gets pushed onto a stack.
- When you hit "undo," the most recent action is popped off the stack and undone.
- The last change is always the first one undone, which is exactly how a stack works.

#### **Example:**
- You type "Hello" → `push("Hello")`
- You type "World" → `push("World")`
- You press "Undo" → `pop()` removes "World", so now you're back to "Hello".

### **Use Case 2: Browser History (Back Button)**
When you browse websites, your browser keeps track of the pages you visited using a stack.

- Each time you visit a new page, it’s pushed onto the stack.
- When you press the "back" button, the most recent page is popped off, taking you back to the previous page.

#### **Example:**
- Visit `Page1` → `push("Page1")`
- Visit `Page2` → `push("Page2")`
- Click "Back" → `pop()` removes "Page2", you go back to "Page1".

---

## 2. Use Cases for Queue (FIFO)

### **Use Case 1: Print Queue**
Imagine a printer that prints documents. The first document you send to the printer should be the first to print. A queue is perfect for this because of its FIFO (First In, First Out) nature.

- Documents are added to the end of the queue (enqueue).
- The printer processes and prints the document at the front of the queue (dequeue).

#### **Example:**
- Document1 → `enqueue("Document1")`
- Document2 → `enqueue("Document2")`
- Printer prints Document1 first → `dequeue()` removes "Document1".
- Now the printer prints Document2 → `dequeue()` removes "Document2".

### **Use Case 2: Customer Service Call Center**
In a call center, customers are added to a queue when they call in. The first customer to call should be the first one to speak with an agent.

- As customers call in, they are added to the end of the queue.
- The agent picks the first person in the queue to speak with, then that person is removed from the queue.

#### **Example:**
- Customer1 calls → `enqueue("Customer1")`
- Customer2 calls → `enqueue("Customer2")`
- Agent answers Customer1 → `dequeue()` removes "Customer1".
- Next, the agent answers Customer2 → `dequeue()` removes "Customer2".

---

## Why Use Stacks and Queues?

- **Stacks** help in scenarios where the most recent item is the one you want to access or remove first (e.g., undo actions, back button etc...).
- **Queues** are ideal when you want to process items in the order they were added, like in a line at a ticket counter or a printer queue.

These data structures are simple, but they efficiently manage tasks that require a specific order of processing!
