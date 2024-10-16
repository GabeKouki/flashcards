const flashcards = [
  //! Definitions
  {
    question: "What is the definition of an even integer?",
    answer: "An integer n is even if and only if there exists some integer k such that n = 2k.",
  },
  {
    question: "What is the definition of an odd integer?",
    answer: "An integer n is odd if and only if there exists some integer k such that n = 2k + 1.",
  },
  {
    question: "What is the definition of a rational number?",
    answer: "A real number r is rational if and only if there exist integers a and b with b != 0 such that r = a/b.",
    explanation: "THe set of rational numbers is denoted by Q.",
  },
  {
    question: "What is the definition of divisibility?",
    answer: "For integers a and b with a != 0, we say that a DIVIDES b, written a | b, if and only if b = ac for some integer c.",
    explanation: "When a divides b, we also say equvalently that (a is a FACTOR of b) (a is a DIVISOR of b) (b is DIVISIBLE by a) (b is a MULTIPLE of a).",
  },
  {
    question: "What is the definition of a prime number?",
    answer: "An integer n >= 2 is PRIME if and only if for all positive integers r and sm if n = rs then r = 1 or s = 1."
  }, 
  {
    question: "What is a mersenne prime?",
    answer: "A mersenne prime is a prime of the form 2^p - 1, where p is prime.",
  }
]

export default flashcards;