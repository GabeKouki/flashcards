const flashcards = [
  //! Chapter 7 - Tools Review
  {
    question: "What are the major classifications of a UML diagram?",
    answer: "Bhavoir, Interaction, Structure diagrams",
  },
  {
    question: "What are the elements of a UML diagram?",
    answer: "An oval, A stick figure, A rectangle",
  },
  {
    question: "What is the purpose of a data flow diagram?",
    answer: "Graphically represents the \"flow\" of data in an information system",
  },
  {
    question: "What are the elements of a data flow diagram?",
    answer: "A rectangle, A Circle, An open ended rectangle",
  },
  {
    question: "Data flow diagrams take data from an external _______ to an external _______.",
    answer: "Data Source or internal data store, internal data store or external data sink",
  },
  {
    question: "What are the characteristics and uses of a flowchart?",
    answer: "Uses symbols of various kinds connected with arrows, Illustrates a step-by-step solution, used to analyze designing and documenting a program",
  },
  {
    question: "What are the advantages of a version control system?",
    answer: "Multiple users can work on a single project simultaneously\nOne person can use multiple computers\nIntegrates work by different team members\nAccess to historical versions of the project",
  },
  {
    question: "_______ are the aspects that are centrally coordinated by a version control system.",
    answer: "Code changes, File Versions, Collaboration",
  },
  {
    question: "_______ is the process of storing a change in the version control database.",
    answer: "commit",
  },
  {
    question: "A _______ occurs when two people try to make different changes to the same point of code.",
    answer: "Conflict",
  },
  {
    question: "A _______ is a database in which changes are stored in a version control system.",
    answer: "Repository",
  },
  {
    question: "A developer's private copy of documents in a version control system is called a _______.",
    answer: "Working Copy",
  },
  {
    question: "What are the differences between centralized and distributed version control systems?",
    answer: "Centralized - each user gets their own working copy, with one centralized repository\nDistributed - Each user gets their own repository and working copy",
  },
  {
    question: "_______ are items that should be versioned by a version control system.",
    answer: "Source code, Web pages, Documentation, Design notes, Anything that changes",
  },
  {
    question: "_______ are items that should not be versioned by a version control system.",
    answer: "Correspondence like emails, general files (not truly editable), Things that don't change",
  },
  {
    question: "_______ allows developers to work on changes that won't affect others until its ready",
    answer: "Branching",
  },
  {
    question: "What are some of the best practices for a version control system?",
    answer: "Descriptive commit message, Make each commit a logical unit, share your changes, and incorporate others changes",
  },
  {
    question: "What are the differences between CPM and PERT?",
    answer: "CPM is well defined (we know the time in each block), Pert needs calculations to find the time",
  },
  {
    question: "Activities on the critical path are managed carefully because _______.",
    answer: "They can determine the fate of the project",
  },
  {
    question: "What are the six elements in a node of the digraph",
    answer: "Activity name\nLength of Activity\nEarliest start time\nEarliest finish time\nLatest start time\nLatest finish time",
  },
  {
    question: "What values are calculated in the forward pass",
    answer: "Early Start and Early finish",
  },
  {
    question: "What values are calculated in the backward pass",
    answer: "Late Start and Late finish",
  },
  {
    question: "The critical path is the set of activities that _______",
    answer: "Have a slack of 0",
  },
  {
    question: "The formula (optimistic + 4*expected + pessimistic)/6 gives the _______",
    answer: "Mean/time",
  },
  {
    question: "A Gantt chart is a bar chart that allows you to see",
    answer: "What the activities are\nWhen each activity begins and ends\nHow long each activity is scheduled for\nThe start and end date of the whole project",
  },

  //! Chapter 8 - Systems Development Review
  {
    question: "What are the steps in the Systems Development Life Cycle?",
    answer: "Planning, Requirements, Design, Development, Integration and Test, User acceptance",
  },
  {
    question: "_______ is an alternative to the classic development models",
    answer: "Agile Software Development",
  },
  {
    question: "_______ uses a sequential design process, tends to be quite rigid and has limited team synchronization",
    answer: "Classic Methodology",
  },
  {
    question: "_______ is divided into sprints, is highly flexible and has requirements prepared on a daily basis",
    answer: "Agile Methodology",
  },
  {
    question: "What are the pros of the agile methodology?",
    answer: "Focus is on Client\nTeams are motivated and self-organized\nQuality can be maintained",
  },
  {
    question: "What are the cons of the agile methodology?",
    answer: "Not useful for small projects\nNeeds an expert\nCost is high",
  },
  {
    question: "What are the pros of the classic methodology?",
    answer: "Easy to manage\nFaster delivery\nWell-documented",
  },
  {
    question: "What are the cons of the classic methodology?",
    answer: "Not ideal for large projects\nDifficult to move backwards\nTesting has to wait for development to be finished",
  },
  {
    question: "Interviews, questionnaires, observations and sampling are all techniques used for _______ in the Systems Development Life Cycle",
    answer: "Data collection techniques",
  },
  {
    question: "_______ is used to determine whether or not a new system will save money in the long run.",
    answer: "ROI (Return on Investment)",
  },
  {
    question: "Responsibility and oversight of a project is the focus of _______",
    answer: "Project Management",
  },
  {
    question: "What are the content sections of a System Requirements Specification?",
    answer: "Introduction\nBusiness Requirements Overview\nFunctional Requirements\nNon-Functional Requirements\nBusiness Process Model\nLogical Data Model\nRequirements Traceability Matrix\nAppendix A-D (Approvals)",
  },
  {
    question: "What is the purpose of the Business Requirements Overview",
    answer: "Specifies the overall goal of the system as it relates to business\nLists specific assumptions and/or constraints that need to be made\nLists the scope of the system",
  },
  {
    question: "What are the typical functional requirements",
    answer: "Business Rules\nTransaction corrections, adjustments, cancellations\nAdministrative functions\nAuthentication",
  },
  {
    question: "What are the typical non-functional requirements?",
    answer: "Design Constraints\nHardware\nSoftware\nPerformance\nReliability\nSupportability",
  },
  {
    question: "What is the purpose of the Business Process Model",
    answer: "Used to represent the processes of an enterprise\nHas the intent of analyzing and improving that process\nTypically performed by business analysts and managers",
  },
  {
    question: "What is the purpose of the Logical Data Model",
    answer: "Represents an organization's data in terms of entities and relationships",
  },
  {
    question: "What is the purpose of the Requirements Traceability Matrix",
    answer: "Describes and follows the life of a requirement\nTracks every change",
  },
  {
    question: "A _______ helps to visually communicate the critical steps and schedule for a project",
    answer: "Gnatt chart",
  },
  {
    question: "What are the main elements of the design phase",
    answer: "System Design Specification\nUML diagram\nData flow Diagram",
  },
  {
    question: "What are the content sections of a System Design Specification",
    answer: "Features, Operations, Screen layouts, business rules, Process diagrams",
  },
  {
    question: "Subordinates, dependencies and interfaces are all elements of _______",
    answer: "Detailed Design",
  },
  {
    question: "Software implementation involves _______",
    answer: "Purchase of an existing software package\nAdding/removing features from that software package\nCustomizing the user interfaces and reports\nPopulating the system with existing data",
  },
  {
    question: "Coding involves _______",
    answer: "Determining the appropriate languages to use for the system\nWriting the code for the various pieces of the project\nCommenting the code for clarity",
  },
  {
    question: "Hardware upgrade involves _______",
    answer: "Determining any new hardware that is needed for the system\nPurchasing the hardware\nConfiguring the hardware",
  },
  {
    question: "Interface construction involves _______",
    answer: "Coding the user interfaces\nDetermining and coding interfaces with existing software\nConfiguring interfaces with existing hardware",
  },
  {
    question: "In _______ testing, the tester has access to the internal data structures and algorithms",
    answer: "White box",
  },
  {
    question: "In _______ testing, the tester has no knowledge of the internal data structures and algorithms, tests as a user",
    answer: "Black Box",
  },
  {
    question: "In _______ testing, the tester has knowledge of the internal data structures and algorithms, but tests as a user",
    answer: "Gray Box",
  },
  {
    question: "Unit, Integration, Regression, Performance and stability are some of the levels of _______ for a system",
    answer: "Testing",
  },
  {
    question: "What are the four major strategies for converting to a new system?",
    answer: "Direct Cut, Parallel Systems, Pilot, Phase-in",
  },
  {
    question: "What groups of people need training for a new system?",
    answer: "System Admins\nTechnical support personnel\nEnd users",
  },
  {
    question: "Ongoing support, updates and additional changes are part of _______",
    answer: "Maintenance",
  },
  {
    question: "Documentation is _______",
    answer: "Ongoing",
  },

  //! Chapter 9 - Software Design and Development Review
  {
    question: "Asking questions is part of which of the Problem Solving Steps?",
    answer: "Understand the problem",
  },
  {
    question: "Looking for something familiar is part of which of the Problem Solving Steps?",
    answer: "Devise a plan",
  },
  {
    question: "As part of devising a plan, the process that breaks things into smaller units is called _______",
    answer: "Divide and conquer",
  },
  {
    question: "_______ is a set of unambiguous instructions for solving a problem",
    answer: "algorithms",
  },
  {
    question: "_______ focuses on the tasks to be done",
    answer: "Top-Down Design",
  },
  {
    question: "_______ focuses on the data involved",
    answer: "Object-Oriented Design",
  },
  {
    question: "In_______ languages, code is translated into machine-specific instructions prior to saving",
    answer: "Compiled",
  },
  {
    question: "In _______ languages, code is saved in its original form and translated at runtime",
    answer: "Interpreted",
  },
  {
    question: "What are the major programming paradigms?",
    answer: "Procedural, Functional, Object-Oriented, Scripting",
  },
  {
    question: "A _______ is a group of objects along with _______ that define behavior",
    answer: "Class, properties and responsibilities",
  },
  {
    question: "What are the object-oriented methodologies",
    answer: "Brainstorming\nFiltering\nScenarios\nResponsibility Algorithms",
  },
  {
    question: "_______ is designed to produce a list of candidate classes",
    answer: "Brainstorming",
  },
  {
    question: "_______ determines which are the core classes in the problem solution",
    answer: "Filtering",
  },
  {
    question: "_______ assign responsibilities to each class",
    answer: "Scenarios",
  },
  {
    question: "_______ involve what a class must know about itself",
    answer: "Encapsulation",
  },
  {
    question: "_______ involve what a class must be able to do",
    answer: "Responsibilities",
  },
  {
    question: "_______ fosters reuse and _______ allows duplicate method names",
    answer: "Inheritance, Polymorphism",
  },
  {
    question: "What are the generally accepted practices for clean code",
    answer: "Purpose of Comments\nComments do not make up for bad code\nExplain yourself in code",
  },
  {
    question: "What are the dangers of code comments",
    answer: "Writing Good comments\nMaintaining comments\nComments not adding functionality to the code",
  },
  {
    question: "Legal, clarification and TODO are types of _______ comments",
    answer: "Good",
  },
  {
    question: "What are some types of bad comments",
    answer: "Mumbling\nRedundant\nMisleading\nMandated",
  },
  {
    question: "Renaming variables, rewriting code and removing unnecessary comments are elements of _______",
    answer: "Refactoring",
  },

  //! Chapter 10 - Cybersecurity Review
  {
    question: "What are the levels of risk involved in computer security",
    answer: "Hacker\nUnauthorized access\nDenial of Service\nData Browsing\nCyberwar",
  },
  {
    question: "_______ and _______combine to dictate the level of risk for a computer system",
    answer: "Threat, Vulnerability",
  },
  {
    question: "An individual who breaks into security systems with malicious or criminal intent is called a _______",
    answer: "Black Hat Hacker",
  },
  {
    question: "An individual who is paid to break into security systems to find holes is called a _______",
    answer: "White Hat Hacker",
  },
  {
    question: "An individual who breaks into security systems and then demands a fee for finding a security hole is called a _______",
    answer: "Gray Hat Hacker",
  },
  {
    question: "What are the types of viruses?",
    answer: "Virus\nTransmission\nImpact\nMacro Virus\nVariant Virus\nStealth Virus\nWorm\nTrojan Horse Virus\nMultipartite Virus\nLogic Bomb Virus",
  },
  {
    question: "What other risks make computer systems vulnerable",
    answer: "Power Spike\nEmployee Theft",
  },
  {
    question: "What strategies are designed to protect against breaches of security",
    answer: "Physical Security\nFirewall\nChecksum\nNetwork Sniffer\nAntivirus Software\nData Backups\nDisaster Recovery Plan\nAuthentication\nEncryption\nVPN",
  },
  {
    question: "_______ converts data into non-understandable form",
    answer: "Encryption",
  },
  {
    question: "Plaintext is the opposite of _______",
    answer: "Ciphertext",
  },
  {
    question: "Ciphers that use the same key to encrypt and decrypt are _______",
    answer: "Symmetric encryption",
  },
  {
    question: "Private key encryption is also known as _______",
    answer: "Symmetric encryption",
  },
  {
    question: "An attack to defeat a password by guessing every possible password is _______",
    answer: "Brute Force",
  },
  {
    question: "Asymmetric cryptography relies on what key pair",
    answer: "Public Key and Private Key",
  },
  {
    question: "The set of all possible passwords is the _______",
    answer: "keyspace",
  },
  {
    question: "What is an encryption algorithm?",
    answer: "Creates ciphertext that is unreadable to anyone but the intended receipient",
  },
  {
    question: "VeraCrypt recommends a password length of at least _______ characters, digits and symbols.",
    answer: "20",
  },
  {
    question: "How might you secure your internet communications if you do not have access to a secure network?",
    answer: "VPN",
  },
  {
    question: "Which encryption algorithm is best for quickly and safely encrypting large amounts of data?",
    answer: "Full Disk Encryption",
  },
  {
    question: "Changing ciphertext to plaintext is _______",
    answer: "decryption",
  },
  {
    question: "Encrypting a message one byte at a time is what type of encryption",
    answer: "Stream Encryption",
  },
  {
    question: "_______ pertains to being able to verify the source of a message",
    answer: "Authentication",
  },
  {
    question: "_______ refers to a sender not being able to deny sending a message",
    answer: "non-repudiation",
  },
  {
    question: "Defeating passwords by exploiting weakness in the encryption method is _______",
    answer: "Cryptographic Attack",
  },
  {
    question: "The hiding of a secret message within an ordinary message is known as _______",
    answer: "Steganography",
  },
  {
    question: "The innocent file containing the secret file is the _______",
    answer: "Cover File",
  },
  {
    question: "_______ is not a preferred characteristic of a file in which to hide large secret files",
    answer: "Small File Size",
  },
  {
    question: "What factor most enhances the success of hiding files with files",
    answer: "Indistinguishability of the modified file from the original.",
  },
  {
    question: "The secret embedded file is called the _______",
    answer: "payload",
  },
  {
    question: "The main purpose of steganography is to _______",
    answer: "Conceal the existence of a secret message",
  },
  {
    question: "Data cannot be successfully concealed in _______",
    answer: "Highly Compressed Files",
  },
  {
    question: "What factors are considered when selecting a container file",
    answer: "File size\nFile format\nFile integrity\nFile usage",
  },
  {
    question: "What is a virtual machine (VM)",
    answer: "Pseudo computers",
  },
  {
    question: "Name three virtualization programs",
    answer: "VMware\nVirtualBox\nXen",
  },
  {
    question: "Name three reasons why people would use virtual computers",
    answer: "Effeciency\nSecurity\nCompatability",
  },
  {
    question: "The two types of hypervisors are _______ and _______",
    answer: "Bare Metal, Software",
  },
  {
    question: "_______ is a free, open source software program that specializes in container creation",
    answer: "CPU, Memory, Storage",
  },
  {
    question: "How does a container differ from a virtual machine",
    answer: "Containers encapsulate just the code needed to run an application",
  },
  {
    question: "Describe three different types of VHD files",
    answer: "Fixed VHD - fast processing, fixed storage\nDynamic VHD - changeable size\nDifferencing VHD - holds a copy of an existing disk",
  },
  {
    question: "Describe the use of microsoft sandbox",
    answer: "Sandbox is a vm created by the host system and is included in windows 10 and 11",
  }
];

export default flashcards;