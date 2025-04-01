const flashcards = [
  //! Python vs Java Differences
  {
    question: "What are the 5 main differences between Python and Java?",
    answer: "1. Java is typed, Python is not typed\n2. Python uses indentation, Java uses curly braces\n3. Java is compiled, Python is interpreted\n4. Java is faster due to compilation and static typing\n5. Java enforces OOP, requiring code within classes",
  },

  //! Access Specifiers
  {
    question: "What is public access in Java?",
    answer: "Members declared as public are accessible from any class, regardless of the package it belongs to",
  },
  {
    question: "What is private access in Java?",
    answer: "Members declared as private are only accessible within the same class",
  },
  {
    question: "What is protected access in Java?",
    answer: "Members declared as protected are accessible within the same package and by subclasses in other packages",
  },
  {
    question: "What is default access in Java?",
    answer: "When no access specifier is used, members are accessible only within the same package",
  },

  //! Variables
  {
    question: "What is an instance variable in Java?",
    answer: "- Belongs to an instance of a class\n- Accessible from any instance method\n- Exists as long as object instance exists\n- Declared within class outside any method",
  },
  {
    question: "What is a local variable in Java?",
    answer: "- Limited to block of code where declared\n- Exists only within declared scope\n- Declared inside method, constructor, or block",
  },

  //! OOP Concepts
  {
    question: "What is inheritance in Java?",
    answer: "A mechanism that allows a class (subclass or child class) to inherit properties and behaviors from another class (superclass or parent class)",
  },
  {
    question: "What is polymorphism in Java?",
    answer: "Meaning 'many forms', it allows objects of different classes to be treated as objects of a common type. Commonly achieved through method overriding and method overloading",
  },
  {
    question: "What is method overloading in Java?",
    answer: "Method overloading occurs when multiple methods in the same class have the same name but differing signatures (different number or types of parameters)",
  },
  {
    question: "What is method overriding in Java?",
    answer: "Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass",
  },

  //! Abstract Classes and Interfaces
  {
    question: "What is an abstract class in Java?",
    answer: "An abstract class serves as a blueprint for other classes and cannot be instantiated directly. It may contain abstract methods and concrete methods. Any abstract methods declared inside must be declared as abstract.",
  },
  {
    question: "What is an interface in Java?",
    answer: "A contract that defines a set of methods a class must implement. It is a blueprint for classes, specifying what they must do, without dictating how they should do it. Interfaces can only contain default, static, and abstract methods.",
  },
  {
    question: "What are the differences between abstract classes and interfaces in terms of definition and inheritance?",
    answer: "Definition:\n- Abstract class: Cannot be instantiated, contains abstract and concrete methods\n- Interface: Specifies required methods, all methods abstract by default\n\nInheritance:\n- Abstract class: Class can inherit from only one\n- Interface: Class can implement multiple interfaces",
  },
  {
    question: "What are the differences between abstract classes and interfaces in terms of access modifiers and variables?",
    answer: "Access Modifiers:\n- Abstract class: Can have any access modifier\n- Interface: Methods and properties implicitly public\n\nVariables:\n- Abstract class: Can have any type of member variables\n- Interface: Variables are implicitly public, static, and final",
  },

  //! Exceptions
  {
    question: "What are checked exceptions in Java?",
    answer: "Checked exceptions are exceptions that must either be caught or declared in the method signature. The compiler enforces this requirement, ensuring that potential exceptions are handled. To handle checked exceptions you can use a try-catch block.",
  },
  {
    question: "What are unchecked exceptions in Java?",
    answer: "Unchecked exceptions, also known as runtime exceptions, inherit from the RuntimeException class or its subclass. Unlike checked exceptions, methods are not required to declare them in their throws clause, and calling code is not forced to catch them",
  },
];

export default flashcards;