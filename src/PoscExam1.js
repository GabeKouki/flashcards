const flashcards = [
  //! CH1 - Five Principles of Politics
  {
    question: "What is an Autocracy?",
    answer: "A form of government in which a single individual rules.\nExamples: China, Russia, Iran, Saudi Arabia.",
  },
  {
    question: "What is an Oligarchy?",
    answer: "A form of government in which a small group of landowners, military officers, or wealthy merchants controls most of the governing decisions.\nExamples: Turkey, Ukraine.",
  },
  {
    question: "What is a Democracy?",
    answer: "A system of rule that permits citizens to play a significant part in government, usually through the selection of key public officials.\nExample: The United States.",
  },
  {
    question: "What are Constitutional Governments?",
    answer: "A system of rule that establishes specific limits on the powers of the government.",
  },
  {
    question: "What are Totalitarian Regimes?",
    answer: "A system of rule in which the government's power is not limited by law and in which the government seeks to eliminate other social institutions that might challenge it.",
  },
  {
    question: "What are Authoritarian Regimes?",
    answer: "A system of rule in which the government's power is not limited by law, though it may be restrained by other social institutions.",
  },

  //! CH2 - The Founding of the Constitution
  {
    question: "What were the developments that led to the Revolutionary War?",
    answer: "",
  },
  {
    question: "What was the Sugar Act?",
    answer: "A strongly enforced tax on sugar, molasses, and other products imported into the American colonies from non-British Caribbean sources. It mainly affected the New England merchants and the southern planters.",
  },
  {
    question: "What was the Stamp Act?",
    answer: "A tax passed by the British Parliament in 1765 to raise money for the British army stationed in the American colonies. The act required colonists to pay a tax on various printed materials and documents, including legal documents, newspapers, pamphlets, playing cards, and dice.",
  },
  {
    question: "What was the Boston Massacre?",
    answer: "An event where British soldiers fired upon a group of rowdy colonists in 1770, killing five and wounding others.",
  },
  {
    question: "What was the Tea Act?",
    answer: "A law passed in 1773 giving all control of the trade and delivery of tea to the East India Tea Company, including a tax on tea to raise money for the British Parliament.",
  },
  {
    question: "What was the Boston Tea Party?",
    answer: "An event in 1773 led by Samuel Adams to protest the British Parliament's tax on tea. Demonstrators boarded ships and threw chests of tea into Boston Harbor.",
  },
  {
    question: "What were the Articles of Confederation?",
    answer: "The United States' first written constitution, adopted by the Continental Congress in 1777, serving as the formal basis for America's national government until 1789.",
  },
  {
    question: "What was Shays' Rebellion?",
    answer: "A rebellion in 1787 led by Daniel Shays where a mob of farmers protested against the government of Massachusetts, seizing control of court buildings to prevent the state from taking possession of their farms.",
  },
  {
    question: "What was the Constitutional Convention?",
    answer: "A meeting organized by New England merchants and southern planters in 1787 to create a new government more capable of promoting commerce and protecting property from radical state legislatures.",
  },
  {
    question: "What was the Virginia Plan?",
    answer: "A proposal by James Madison for a system of representation in the national legislature based on state population or contributions to national revenue, featuring proportional representation, separation of powers, checks and balances, and legislative powers.",
  },
  {
    question: "What was the New Jersey Plan?",
    answer: "A proposal aimed at equal representation where each state would have one vote in Congress regardless of population, featuring a unicameral legislature and taxation powers.",
  },
  {
    question: "What was the Great Compromise?",
    answer: "An agreement reached at the Constitutional Convention in 1787 giving each state an equal number of senators and linking representation in the House of Representatives to population size.",
  },
  {
    question: "What was the Three-Fifths Compromise?",
    answer: "An agreement stating that only three-fifths of enslaved persons would be counted for the purpose of distributing congressional seats based on state populations.",
  },
  {
    question: "What are the three branches of the U.S. government?",
    answer: "Legislative, Executive, and Judicial branches.",
  },
  {
    question: "What is the role of the Legislative branch?",
    answer: "Makes laws. Composed of Congress (Senate and House of Representatives). Responsibilities include passing federal laws, controlling federal appropriations, approving treaties and presidential appointments, regulating interstate commerce, and establishing lower-court systems.",
  },
  {
    question: "What is the role of the Executive branch?",
    answer: "Enforces laws. Headed by the President. Responsibilities include enforcing laws, serving as commander in chief of armed forces, making foreign treaties, nominating Supreme Court justices and federal court judges, and pardoning those convicted in federal court.",
  },
  {
    question: "What is the role of the Judicial branch?",
    answer: "Interprets laws. Composed of the Supreme Court and other federal courts. Responsibilities include reviewing lower-court decisions, deciding the constitutionality of laws, and deciding cases involving disputes between states.",
  },
  {
    question: "What is the Separation of Powers?",
    answer: "The division of government power among several institutions that must cooperate in decision-making.",
  },
  {
    question: "What are Checks and Balances?",
    answer: "Mechanisms through which each branch of government can influence and limit the powers of the other branches.",
  },
  {
    question: "What is Federalism?",
    answer: "A system of government in which a constitution divides power between a central government and regional governments.",
  },
  {
    question: "How can the Constitution be amended?",
    answer: "Through a two-thirds vote in Congress and a three-fourths vote by the states.",
  },
  {
    question: "Who were the Federalists?",
    answer: "Supporters of a strong national government, consisting of property owners, creditors, and merchants. Led by Alexander Hamilton, James Madison, and George Washington.",
  },
  {
    question: "Who were the Anti-Federalists?",
    answer: "Supporters of a decentralized national government, consisting of small farmers, frontiersmen, debtors, and shopkeepers. Led by Patrick Henry, George Mason, Elbridge Gerry, and George Clinton.",
  },

  //! CH3 - Federalism and the Separation of Powers
  {
    question: "Define Dual Federalism.",
    answer: "A system where fundamental governmental powers are shared between the federal and state governments, with states exercising the most important powers.",
  },
  {
    question: "Define Cooperative Federalism.",
    answer: "A system where grants-in-aid are used strategically to encourage states and localities to pursue nationally defined goals.",
  },
  {
    question: "Define Regulated Federalism.",
    answer: "A form where Congress imposes legislation on state and local governments requiring them to meet national standards.",
  },
  {
    question: "What is Legislative Supremacy?",
    answer: "The preeminent position within the national government that the Constitution assigns to Congress.",
  },
  {
    question: "What is Executive Privilege?",
    answer: "The claim that confidential communications between the president and close advisers should not be revealed without the president’s consent.",
  },

  //! CH4 - Civil Liberties
  {
    question: "What was the significance of Barron v. Baltimore?",
    answer: "Confirmed the idea of dual citizenship—that the Bill of Rights did not apply to decisions or procedures of state governments.",
  },
  {
    question: "What is the Incorporation of the Bill of Rights?",
    answer: "The doctrine applying some of the Bill of Rights to the states through the Due Process Clause of the Fourteenth Amendment.",
  },
  {
    question: "What is the Establishment Clause?",
    answer: "First Amendment clause stating 'Congress shall make no law respecting an establishment of religion,' prohibiting the government from establishing an official church.",
  },
  {
    question: "What is the Lemon Test?",
    answer: "A rule that governmental action with respect to religion is permissible if it is secular in purpose, does not advance or inhibit religion, and does not lead to excessive entanglement with religion.",
  },
  {
    question: "What is the Free Exercise Clause?",
    answer: "First Amendment clause that protects the right of citizens to believe and practice whatever religion they choose.",
  },
  {
    question: "What was the outcome of Burwell v. Hobby Lobby Stores?",
    answer: "Allowed closely held corporations to deny birth control coverage to employees for religious reasons.",
  },
  {
    question: "What is Strict Scrutiny?",
    answer: "The strictest standard of judicial review where the government must show that the law serves a 'compelling state interest.'",
  },
  {
    question: "What is Political Speech and Sedition?",
    answer: "Speech commenting on government actions; sedition involves language intended to incite insurrection against authority.",
  },
  {
    question: "What was decided in Schenck v. United States (1917)?",
    answer: "Upheld the Espionage Act; ruled that speech posing a 'clear and present danger' to national security is not protected.",
  },
  {
    question: "What was decided in Brandenburg v. Ohio?",
    answer: "Established that speech is protected unless it is directed to inciting imminent lawless action and is likely to produce such action.",
  },
  {
    question: "Define Libel and Slander.",
    answer: "Libel is written, and slander is spoken statements made in reckless disregard of the truth, considered damaging and defamatory.",
  },
  {
    question: "What was the outcome of NY Times v. Sullivan?",
    answer: "Secured strong First Amendment protections for the press and public speakers on public affairs.",
  },
  {
    question: "What is Obscenity and Pornography in legal terms?",
    answer: "Speech or writing appealing to 'prurient interest,' lacking serious literary, artistic, political, or scientific value.",
  },
  {
    question: "What was decided in Miller v. California?",
    answer: "Redefined obscenity and ruled that obscene materials do not enjoy First Amendment protection.",
  },
  {
    question: "What is the Miller Test?",
    answer: "A three-part test to determine whether expression constitutes obscenity.",
  },
  {
    question: "What is the Right to Privacy?",
    answer: "The right to be left alone, including individual access to birth control and reproductive rights.",
  },
  {
    question: "What was the significance of Griswold v. Connecticut?",
    answer: "Established that a married couple has a right to privacy that cannot be infringed by state laws banning contraceptives.",
  },
  {
    question: "What was ruled in Roe v. Wade?",
    answer: "Established a constitutional right to abortion, striking down many state abortion laws.",
  },
  {
    question: "What was the impact of Dobbs v. Jackson Women's Health Organization?",
    answer: "Overturned Roe v. Wade, allowing states to limit or outlaw abortions and affecting the constitutional right to privacy.",
  },
];

export default flashcards;