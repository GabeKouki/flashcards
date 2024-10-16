// Desktop\Code\flashcard\flashcards\src\ITExam1.js

const flashcards = [
  //! ADT vs Data Structure
  {
    question: "What is an Abstract Data Type (ADT)?",
    answer: "An ADT is a collection of data and a set of operations on that data, without specifying how data is stored or how the operations actually work.",
  },
  {
    question: "What are the three types of operations that ADTs usually have?",
    answer: "Operations that add data to the collection, remove data from the collection, or answer questions about data in the collection.",
  },
  {
    question: "What is a Data Structure?",
    answer: "A Data Structure is an implementation of an ADT; it answers the 'how' questions regarding data storage and operation execution.",
  },
  {
    question: "Can one ADT have multiple data structures?",
    answer: "Yes, one ADT can have several data structures with the same operations working in different ways or with data stored differently.",
  },
  {
    question: "Why is a creation operation necessary in an ADT?",
    answer: "All ADTs need a creation operation to initialize the data structure before any other operations can be performed.",
  },
  //! Big Oh Analysis
  {
    question: "What is an algorithm?",
    answer: "An algorithm is a set of instructions to solve a problem; it takes input, processes it, and produces output.",
  },
  {
    question: "How is a program related to an algorithm?",
    answer: "A program is an implementation of an algorithm using data structures; Program = Algorithm + Data Structures.",
  },
  {
    question: "What are the two main performance metrics for algorithms?",
    answer: "Time (how fast an algorithm runs) and Space (how much memory is used).",
  },
  {
    question: "What factors affect time-based analysis of algorithms?",
    answer: "Number of significant operations, input size, contents of the input, and type of processing.",
  },
  {
    question: "How do loops affect time estimation in algorithms?",
    answer: "The running time of statements inside a loop is multiplied by the number of iterations.",
  },
  {
    question: "What is Big-O notation?",
    answer: "Big-O notation represents the worst-case time complexity of an algorithm.",
  },
  {
    question: "Order the following time complexities from fastest to slowest: O(1), O(log n), O(n), O(n^2).",
    answer: "O(1) < O(log n) < O(n) < O(n^2).",
  },
  {
    question: "What is amortized analysis?",
    answer: "Amortized analysis calculates the running time over a series of operations to determine the average time per operation.",
  },
  //! Arrays
  {
    question: "What are the properties of arrays?",
    answer: "Elements are ordered, indexing starts from 0, and all data elements need to be of the same type.",
  },
  {
    question: "What are basic array operations?",
    answer: "Find the length, insert an element, remove/delete an element, concatenate, slice, loop through, and sort.",
  },
  {
    question: "What is the difference between compact arrays and referential arrays?",
    answer: "Compact arrays store elements in contiguous memory locations with lower memory overhead, while referential arrays store references to elements, using additional memory.",
  },
  {
    question: "How are strings represented in memory in terms of arrays?",
    answer: "Each character in a string has a fixed size and is stored in a compact array.",
  },
  //! Stacks
  {
    question: "What is a stack in terms of ADT?",
    answer: "A stack is an ADT that follows the Last-In-First-Out (LIFO) principle, where only the topmost element is accessible.",
    explanation: "Last In First Out, meaning the last element added to the stack is the first one to be removed from the stack.",
  },
  {
    question: "What are common use cases for stacks?",
    answer: "Function call management, expression evaluation, memory management, undo/redo functionality, parsing, and backtracking.",
  },
  {
    question: "What are the primary operations in a stack?",
    answer: "Push (add an element to the top), Pop (remove and retrieve the top element), Peek (Top) (access the top element), is_empty, and len.",
  },
  {
    question: "How can a stack be implemented using arrays (lists in Python)?",
    answer: "Use list methods like append() for push, pop() for pop, and indexing [-1] for top.",
  },
  //! Infix/Postfix Operations
  {
    question: "What is infix notation?",
    answer: "In infix notation, the operator is placed between operands (e.g., A + B).",
  },
  {
    question: "What is postfix notation?",
    answer: "In postfix notation, the operator is placed after the operands (e.g., AB+).",
  },
  {
    question: "Why is postfix notation advantageous for computers?",
    answer: "Because it eliminates the need for parentheses and operator precedence handling, simplifying evaluation.",
  },
  {
    question: "How are infix expressions converted to postfix using a stack?",
    answer: "By scanning the infix expression, using a stack to store operators, and considering operator precedence and associativity.",
  },
  {
    question: "What is the operator precedence from highest to lowest?",
    answer: "Parentheses override normal precedence, then *, /, %, followed by + and -.",
  },
  //! Queues
  {
    question: "What is a queue in terms of ADT?",
    answer: "A queue is an ADT that follows the First-In-First-Out (FIFO) principle.",
  },
  {
    question: "What are common applications of queues?",
    answer: "Job scheduling, CPU task management, printer queues, customer service lines, and buffering.",
  },
  {
    question: "What are the primary operations in a queue?",
    answer: "Enqueue (add element to the back), Dequeue (remove and return the front element), first, is_empty, and len.",
  },
  {
    question: "How can a queue be implemented in Python?",
    answer: "Using a list with append() for enqueue and pop(0) for dequeue.",
  },
  //! Deques
  {
    question: "What is a deque?",
    answer: "A deque (double-ended queue) is an ADT allowing insertion and deletion at both the front and back.",
  },
  {
    question: "What are applications of deques?",
    answer: "Parallel processing environments, task scheduling, and algorithms like BFS that require efficient front and back operations.",
  },
  {
    question: "What are the primary operations in a deque?",
    answer: "add_first, add_last, delete_first, delete_last, first, last, is_empty, and len.",
  },
  //! Linked Lists
  {
    question: "Why are linked lists used as an alternative to arrays?",
    answer: "Because dynamic arrays can consume more space, and insertions/deletions at interior positions are expensive.",
  },
  {
    question: "What is a singly linked list?",
    answer: "A list where each node has a reference to its data and the next node, allowing unidirectional traversal.",
  },
  {
    question: "What is a doubly linked list?",
    answer: "A list where each node has references to its data, the next node, and the previous node, allowing bidirectional traversal.",
  },
  {
    question: "What is a circular linked list?",
    answer: "A linked list where the last node points back to the head node, forming a loop.",
  },
  {
    question: "What are sentinel nodes?",
    answer: "Dummy nodes that do not contain actual data and are used to simplify boundary conditions in linked lists.",
    explanation: "Sentinel nodes are used as placeholders to provide a reference to the head or tail of a linked list, or to indicate the end of a list."
  },
  //! Implementing Stacks and Queues with Linked Lists
  {
    question: "How is a stack implemented using a linked list?",
    answer: "By using the head node as the top of the stack; push and pop operations correspond to insertions and deletions at the head.",
  },
  {
    question: "How is a queue implemented using a linked list?",
    answer: "By maintaining references to both head and tail; enqueue at the tail and dequeue at the head.",
  },
  //! Choosing Data Structures
  {
    question: "When is an array the best data structure to use?",
    answer: "For fixed-sized collections needing fast index-based access and minimal insertion/deletion operations.",
  },
  {
    question: "When is a linked list the best data structure to use?",
    answer: "For dynamic data with frequent insertions/deletions, especially at the head or tail.",
  },
  {
    question: "When is a doubly linked list preferred over a singly linked list?",
    answer: "When bidirectional traversal is needed or frequent insertions/deletions occur at both ends or interior nodes.",
  },
  {
    question: "What data structure is ideal for managing function call management or undo functionality?",
    answer: "A stack, due to its LIFO nature.",
  },
  {
    question: "What data structure is ideal for job scheduling or print queuing?",
    answer: "A queue, due to its FIFO nature.",
  },
  {
    question: "When is a circular linked list most useful?",
    answer: "In applications requiring continuous looping, like round-robin scheduling or multiplayer games.",
  },
  //! Trees
  {
    question: "What are trees in data structures?",
    answer: "Trees are hierarchical, non-linear data structures consisting of nodes connected by edges.",
  },
  {
    question: "What are common applications of trees?",
    answer: "File systems, databases, website DOM structures, and organizing hierarchical data.",
  },
  {
    question: "Define the following tree terminology: root node, leaf node, parent, child, siblings.",
    answer: "Root node: topmost node; Leaf node: a node with no children; Parent: a node with child nodes; Child: a node descended from another; Siblings: nodes sharing the same parent.",
  },
  {
    question: "What is an ordered tree?",
    answer: "A tree where there is a defined linear order among the siblings of each node.",
  },
  {
    question: "What is the depth of a node in a tree?",
    answer: "The number of ancestors of that node excluding the node itself.",
  },
  {
    question: "What is the height of a tree?",
    answer: "The maximum depth among all the nodes in the tree.",
  },
  {
    question: "What is a binary tree?",
    answer: "A tree where each node has at most two children, referred to as the left child and right child.",
  },
  {
    question: "What is a proper (or full) binary tree?",
    answer: "A binary tree where every internal node has exactly two children.",
  },
  //! Tree Traversal
  {
    question: "What is pre-order traversal in a tree?",
    answer: "Visiting the root node first, then recursively traversing the left and right subtrees.",
    explanation: "Root - Left - Right",
  },
  {
    question: "What is post-order traversal in a tree?",
    answer: "Recursively traversing the left and right subtrees first, then visiting the root node.",
    explanation: "Left - Right - Root", 
  },
  {
    question: "What is in-order traversal in a binary tree?",
    answer: "Recursively traversing the left subtree, visiting the root node, then traversing the right subtree.",
    explanation: "Left - Root - Right",
  },
];

export default flashcards;