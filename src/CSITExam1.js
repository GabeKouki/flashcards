const flashcards = [
  //! Chapter 1 - General Information
  {
    question: "What are the components of a von Neumann machine?",
    answer: "CPU\nMemory Unit\nInput Devices\nOutput Devices\nControl Unit",
  },
  {
    question: "The “von Neumann architecture” is another name for the _______.",
    answer: "Stored program concept",
  },
  {
    question: "What are the physical elements of a computing system?",
    answer: "System unit\nInput devices\nOutput devices\nStorage devices\nCommunications devices",
  },
  {
    question: "What are the advantages of a computer?",
    answer: "Accuracy\nStorage\nCommunications\nVersatility",
  },
  {
    question: "What are the categories of computers?",
    answer: "Supercomputer\nMainframe\nServer\nWorkstation\nPersonal Computer\nMobile Computer",
  },
  {
    question: "Which generation of hardware utilized vacuum tubes?",
    answer: "1st (First)",
  },
  {
    question: "Which generation of hardware utilized transistors?",
    answer: "2nd (Second)",
  },
  {
    question: "Which generation of hardware utilized integrated circuits?",
    answer: "3rd (Third)",
  },
  {
    question: "Which generation of hardware utilized microprocessors?",
    answer: "4th (Fourth)",
  },
  {
    question: "The _______ was the predecessor of the internet.",
    answer: "ARPANET",
  },
  {
    question: "Which generation of software developed machine learning?",
    answer: "1st (First)",
  },
  {
    question: "Which generation of software developed assembly languages?",
    answer: "2nd (Second)",
  },
  {
    question: "Which generation of software developed high-level languages?",
    answer: "3rd (Third)",
  },
  {
    question: "Which generation of software developed natural languages?",
    answer: "5th (Fifth)",
  },

  //! Chapter 2 - Data Representation
  {
    question: "_______ is a process used to return analog and digital signals to their original shape.",
    answer: "Reclocking",
  },
  {
    question: "ASCII stands for _______.",
    answer: "American Standard Code for Information Interchange",
  },
  {
    question: "ASCII uses _______ bits per character while Unicode uses _______ per character.",
    answer: "7, 16 bits",
  },
  {
    question: "Unicode is a _______ of ASCII.",
    answer: "Superset",
  },
  {
    question: "In order to work with the complete Russian alphabet on a computer, you would need to use the _______ coding scheme.",
    answer: "Unicode",
  },
  {
    question: "Compression methods that render some of the data as unrecoverable are called _______ compression.",
    answer: "Lossy",
  },
  {
    question: "Compression methods that can recover all of the original data are called _______ compression.",
    answer: "Lossless",
  },
  {
    question: "The data compression technique that replaces the most frequently used characters with a single character is called _______ encoding.",
    answer: "Keyword",
  },
  {
    question: "The data compression technique that replaces repeated sequences is called _______ encoding.",
    answer: "Run-length",
  },
  {
    question: "The data compression technique that replaces the most frequently used characters with a shorter number of bits is called _______ encoding.",
    answer: "Huffman",
  },
  {
    question: "Electric signals are digitized by _______.",
    answer: "Sampling",
  },
  {
    question: "A program that encodes and decodes audio or video data is called a _______.",
    answer: "Codec",
  },
  {
    question: "The _______ color model is additive while the _______ model is subtractive.",
    answer: "RGB, CMYK",
  },
  {
    question: "The number of pixels used to represent a picture is called the _______.",
    answer: "Resolution",
  },
  {
    question: "A picture that has been stored on a pixel-by-pixel basis is a _______ graphic.",
    answer: "Raster",
  },
  {
    question: "A picture that has been rendered using lines and geometric shapes is a _______ graphic.",
    answer: "Vector",
  },
  {
    question: "_______ compression is based on differences between consecutive frames.",
    answer: "Temporal",
  },
  {
    question: "_______ compression is based on removing redundant information within a frame.",
    answer: "Spatial",
  },

  //! Chapter 3 - Hardware
  {
    question: "A _______ is a device that performs basic operations on electrical signals.",
    answer: "Gate",
  },
  {
    question: "A _______ is a combination of gates designed to perform more complicated tasks.",
    answer: "Circuit",
  },
  {
    question: "A _______ is a mathematical expression used for two-valued logic.",
    answer: "Boolean Algebra",
  },
  {
    question: "A _______ is a graphical representation of a circuit.",
    answer: "Logic/Block diagrams",
  },
  {
    question: "A _______ shows all possible output values from a circuit.",
    answer: "Truth Tables",
  },
  {
    question: "The six logic gates are _______.",
    answer: "NOT\nAND\nOR\nXOR\nNAND\nNOR",
  },
  {
    question: "A _______ is the basic building block of a gate.",
    answer: "Transistor",
  },
  {
    question: "A _______ is a circuit that computes the sum of two bits.",
    answer: "Half Adder",
  },
  {
    question: "A _______ is a circuit that computes the sum of three bits.",
    answer: "Full Adder",
  },
  {
    question: "The _______ is the product of all the variables, complemented if the value is 0.",
    answer: "Minterms",
  },
  {
    question: "The _______ is the sum of all the minterms for which the function has a value of 1.",
    answer: "Sum-of-Products",
  },
  {
    question: "A _______ is a rectangular representation of the Complete-Sum-of-Products form of a Boolean expression.",
    answer: "Karnaugh map",
  },
  {
    question: "A _______ is the largest possible rectangle that a 1 is contained within.",
    answer: "Maximal rectangle",
  },
  {
    question: "The _______ is the reduced Boolean expression for a maximal rectangle.",
    answer: "Prime Implicant",
  },
  {
    question: "The _______ is called the “Brain” of a computer.",
    answer: "CPU",
  },
  {
    question: "What are the steps in the machine cycle?",
    answer: "Fetch\nDecode\nExecute\nStore",
  },
  {
    question: "The _______ is used to direct and coordinate the overall operation of the computer.",
    answer: "Control Unit",
  },
  {
    question: "The _______ is used to make comparisons between data items.",
    answer: "Arithmetic Logic Unit (ALU)",
  },
  {
    question: "_______ are used to temporarily store results during processing.",
    answer: "Registers",
  },
  {
    question: "During processing, the address of the next instruction is stored in the _______.",
    answer: "Program Counter",
  },
  {
    question: "During processing, the instruction being executed is stored in the _______.",
    answer: "Instruction Register",
  },
  {
    question: "During processing, intermediate arithmetic and logical results are stored in the _______.",
    answer: "Accumulator",
  },
  {
    question: "What factors affect the processor speed?",
    answer: "System Clock\nBus Width\nWord size\nAvailable memory\nHeat issues\nCache memory\nCoprocessors\nComplex Instruction Set Computing\nReduced instruction set computing\nPipelining\nParallel computing",
  },
  {
    question: "_______ begins the next instruction when the previous instruction reaches the next phase of the machine cycle.",
    answer: "Pipelining",
  },
  {
    question: "RAM is _______ which means the contents are erased when the power is turned off.",
    answer: "Volatile",
  },
  {
    question: "_______ uses three letter mnemonic codes to program a computer.",
    answer: "Assembly Language",
  },
  {
    question: "The four steps in the information processing cycle are _______.",
    answer: "Input\nProcess\nOutput\nStorage",
  },
  {
    question: "The _______ is used to move data from one computer location to another.",
    answer: "Buses",
  },
  {
    question: "The _______ controls the timing of all computer operations.",
    answer: "System Clock",
  },
  {
    question: "ROM is _______ which means the contents are saved even when the power is turned off.",
    answer: "Non-volatile",
  },
  {
    question: "_______ are devices used to store data when the computer is no longer running.",
    answer: "Secondary Storage",
  },
  {
    question: "What are the elements of a magnetic disk geometry?",
    answer: "Platters\nTracks\nSectors\nCylinders\nHeads",
  },
  {
    question: "What characteristics are shared by magnetic disk and optical disk storage?",
    answer: "Both are non-volatile storage",
  },
  {
    question: "_______ uses a spiral path which lands and pits to record data.",
    answer: "Optical Storage",
  },
  {
    question: "_______ is registered when a channel bit changes from land to pit or pit to land.",
    answer: "1 bit",
  },
  {
    question: "_______ is registered when there is no change.",
    answer: "0",
  },
  {
    question: "_______ uses a table to replace 8 bit codes with 14 bit codes for optical disks.",
    answer: "Eight-to-Fourteen-Modulation",
  },
  {
    question: "_______ uses transistors with control and floating gates to record bits.",
    answer: "Flash Memory",
  },
  {
    question: "What are the characteristics of a solid state drive (SSD).",
    answer: "Lack of moving parts",
  },
  {
    question: "What are the advantages of an SSD?",
    answer: "Faster\nQuieter\nFlexible Storage\nMore energy efficient",
  },
  {
    question: "What are the disadvantages of an SSD?",
    answer: "Cost more\nSmaller Storage",
  },
  {
    question: "_______ skips rewriting certain data when an SSD erases blocks.",
    answer: "TRIM",
  },
  {
    question: "_______ allows room for moving and deleting items without affecting the overall capacity of an SSD.",
    answer: "Overprovisioning",
  },

  //! Chapter 4 - System Software
  {
    question: "What are the steps in the boot process?",
    answer: "Power on\nBIOS is located\nPOST is run\nOS is loaded",
  },
  {
    question: "With a _______ the memory has been completely erased.",
    answer: "Cold Boot",
  },
  {
    question: "With a _______ the memory has not been completely erased.",
    answer: "Warm Boot",
  },
  {
    question: "What are the roles of the operating system?",
    answer: "Provides an interface the user can use to interact with the computer\nManages computer resources such as memory and input/output devices\nAllows an application program to interact with these other system resources",
  },
  {
    question: "A _______ requires the user to type a line of code to interact with the computer.",
    answer: "Command Line",
  },
  {
    question: "A _______ allows the user to select icons to interact with the computer.",
    answer: "GUI",
  },
  {
    question: "A _______ gives the illusion that each user in a time-sharing system has their own machine.",
    answer: "Virtual Machine",
  },
  {
    question: "A _______  is a small program used to communicate with various devices connected to the computer.",
    answer: "Device Driver",
  },
  {
    question: "_______ are created in memory and programs are loaded where they fit.",
    answer: "Fixed Partitions",
  },
  {
    question: "_______ are established in memory to handle the programs waiting to be loaded.",
    answer: "Dynamic Partitions",
  },
  {
    question: "The _______ algorithm loads a program into the first partition that has enough space.",
    answer: "First Fit",
  },
  {
    question: "The _______ algorithm loads a program into the partition in which it fits the best.",
    answer: "Best Fit",
  },
  {
    question: "The _______ algorithm loads a program into the largest remaining partition.",
    answer: "Worst Fit",
  },
  {
    question: "In paged memory management, the processes are divided into _______ and stored in memory _______.",
    answer: "Fixed-sized pages, frames",
  },
  {
    question: "In paged memory management, a logical address uses a _______ and _______.",
    answer: "Page number, Page offset",
  },
  {
    question: "_______ is the act of bringing a page from secondary storage into memory.",
    answer: "Page Swap",
  },
  {
    question: "_______ is caused by constant page swaps.",
    answer: "Thrashing",
  },
  {
    question: "The steps in the process life-cycle are _______.",
    answer: "New\nReady\nRunning\nWaiting\nTerminated",
  },
  {
    question: "_______ is the act of determining which process moves from the ready state to the running state.",
    answer: "CPU scheduling",
  },
  {
    question: "_______ occurs when a currently executing process voluntarily moves to the ready state.",
    answer: "Nonpreemptive scheduling",
  },
  {
    question: "_______ occurs when the OS forces a currently executing process to move to the ready state.",
    answer: "Preemptive scheduling",
  },
  {
    question: "_______ is the length of time between when a process first arrives in the ready state and when it exits the running state for the last time.",
    answer: "Turnaround Time",
  },
  {
    question: "The _______ algorithm moves a process to the running state based on the order in which they arrived in the ready state.",
    answer: "First come First served",
  },
  {
    question: "The _______ algorithm moves a process to the running state based on the length of time of the process.",
    answer: "Shortest Job Next",
  },
  {
    question: "The _______ algorithm utilizes a quantum to move a process to the running state.",
    answer: "Round Robin",
  },
  {
    question: "The _______ algorithm processes disk requests based on the order in which they were placed.",
    answer: "First come First served",
  },
  {
    question: "The _______ algorithm processes disk requests based on the proximity to the moving read/write head.",
    answer: "Shortest-seek-time-first",
  },
  {
    question: "The _______ algorithm processes disk requests based as they are encountered by the moving read/write head.",
    answer: "Scan",
  },
  {
    question: "A _______ is a logical view of a family system.",
    answer: "Directory tree",
  },
  {
    question: "The highest-level is called the _______.",
    answer: "Root directory",
  },
  {
    question: "_______ occurs when a file is stored in non-contiguous sectors.",
    answer: "Fragmentation",
  },
  {
    question: "_______ is the process whereby fragmented files are placed in contiguous sectors.",
    answer: "Defragmentation",
  },

  //! Chapter 5 - Application Software
  {
    question: "An _______ is the combination of people, hardware, software, computer networks and data used to manage operations.",
    answer: "Information Systems",
  },
  {
    question: "_______ are programs sold to the public on a retail basis.",
    answer: "Packaged Software",
  },
  {
    question: "_______ are programs created to meet a company's specific requirements.",
    answer: "Customized Software",
  },
  {
    question: "_______ are programs available for a small contribution fee.",
    answer: "Shareware",
  },
  {
    question: "_______ are programs provided at no charge.",
    answer: "Freeware",
  },
  {
    question: "_______ are programs owned by a developer but open to public contributions.",
    answer: "Open Source Software",
  },
  {
    question: "_______ are integrated programs designed to work well together.",
    answer: "Software Suites",
  },
  {
    question: "_______ links and automatically updates information between programs.",
    answer: "Object Linking and Embedding (OLE)",
  },
  {
    question: "_______ is raw, unorganized content.",
    answer: "Data",
  },
  {
    question: "_______ is data associated with other useful data on the same topic.",
    answer: "Information",
  },

  //! Chapter 6 - Communication
  {
    question: "Data is transferred over networks at speeds measured in _______.",
    answer: "Bits/Second",
  },
  {
    question: "A _______ may be used to help determine whether an error has occurred during transmission.",
    answer: "Parity Bit",
  },
  {
    question: "_______ sends 1 byte at a time.",
    answer: "Serial Transmission",
  },
  {
    question: "_______ sends 7 bytes plus a parity bit at a time.",
    answer: "Parallel Transmission",
  },
  {
    question: "The network topology that features one central computer is called the _______.",
    answer: "Star Topology",
  },
  {
    question: "The network topology that features computers linked in a circular pattern is called the _______.",
    answer: "Ring Topology",
  },
  {
    question: "The network topology that features computers linked along a line is called the _______.",
    answer: "Bus Topology",
  },
  {
    question: "What are the types of networks?",
    answer: "LAN\nWAN\nMAN\nIntranet",
  },
  {
    question: "The set of rules that defines processing on a network are called _______.",
    answer: "Protocols",
  },
  {
    question: "A _______ protects a network by filtering the traffic it allows.",
    answer: "Firewall",
  },
  {
    question: "_______ is the process of breaking up messages and routing the pieces across a network.",
    answer: "Packet Switching",
  },
  {
    question: "_______ can be used to verify that data has been downloaded correctly.",
    answer: "Checksum",
  },
  {
    question: "What are the three most popular algorithms used to generate a checksum?",
    answer: "SHA-1\nMD5\nCRC32",
  },
  {
    question: "_______ is the original language used to build web pages.",
    answer: "HTML",
  },
  {
    question: "A _______ allows the user to transfer between web pages.",
    answer: "Link",
  },
  {
    question: "_______ are used to describe the presentation of a web page.",
    answer: "CSS",
  },
  {
    question: "_______ is a portion of code designed to dynamically contribute to the content of a web page.",
    answer: "JavaScript",
  },
];


export default flashcards;