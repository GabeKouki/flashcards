const flashcards = [
  //!Chapter 5 - Civil Rights
  {
    question: "What is the definition of Civil Rights?",
    answer: "The rules that government must follow in regard to the treatment of individuals, especially concerning participation in political and social life.",
  },
  {
    question: "What is the role of the Equal Protection Clause in protecting civil rights in the states?",
    answer: "The provision of the Fourteenth Amendment guaranteeing citizens 'the equal protection of the laws'. This clause has been the basis for the civil rights of Black Americans, women, and other groups. It creates the foundation for asserting equal civil rights for all persons.",
    explanation: "Forces a state to govern impartially—not draw distinctions between individuals solely on differences that are irrelevant to a legitimate governmental objective"
  },
  {
    question: "Explain the Plessy v. Ferguson case and its significance",
    answer: "This 1896 case examined a Louisiana statute requiring racial segregation on public carriers. The Supreme Court upheld the constitutionality of racial segregation under the 'separate but equal' doctrine.\n\nPress '1' for more details",
    explanation: "This case established the 'separate but equal' doctrine that would stand for over 50 years. It essentially legitimized racial segregation and Jim Crow laws across the United States. The Court's ruling suggested that segregation was constitutional as long as facilities for both races were 'equal', though in practice they rarely were."
  },
  {
    question: "What was the significance of Brown v. Board of Education?",
    answer: "This landmark 1954 case overturned Plessy v. Ferguson by ruling that separate educational facilities are inherently unequal. The Court found that segregation in public education violated the Equal Protection Clause of the 14th Amendment.\n\nPress '1' for more details",
    explanation: "The Court specifically reasoned that segregation in public education instilled a sense of inferiority that had a detrimental effect on the education and personal growth of African American children. This decision was instrumental in dismantling legal segregation in the United States and became a catalyst for the civil rights movement."
  },
  {
    question: "What is de jure segregation?",
    answer: "Racial segregation that is a direct result of law or official policy.",
  },
  {
    question: "What is de facto segregation?",
    answer: "Racial segregation that is not a direct result of law but reflects residential patterns, income distributions, or other social factors.",
  },
  {
    question: "Compare and contrast de jure and de facto segregation",
    answer: "De jure segregation comes from laws and official policies, while de facto segregation results from social patterns and practices without official legal backing.",
    explanation: "De jure segregation can be directly challenged in court as unconstitutional, while de facto segregation is harder to address through legal means as it results from private choices and social/economic factors."
  },
  {
    question: "What is Affirmative Action?",
    answer: "A policy or program designed to correct historical injustices committed against specific groups by making special efforts to provide members of these groups with access to educational and employment opportunities.",
  },
  {
    question: "Explain the University of California v. Bakke case and its significance",
    answer: "In this 1978 case, Allan Bakke challenged UC Davis Medical School's admission policy which reserved 16 out of 100 slots for minorities. While Bakke won admission because the specific quota system was ruled unconstitutional, the Court held that race could still be considered as one factor in admissions.\n\nPress '1' for more details",
    explanation: "This case established that while rigid quota systems in college admissions were unconstitutional, race could still be considered as one factor among many in achieving diversity in higher education. This created the framework for how universities would approach affirmative action for decades to come."
  },
  {
    question: "Explain the Gratz v. Bollinger case",
    answer: "In this 2003 case, the Supreme Court struck down the University of Michigan's undergraduate admissions system that automatically awarded points to underrepresented minority applicants. The Court found this mechanical point system violated the Equal Protection Clause.\n\nPress '1' for more details",
    explanation: "The case challenged Michigan's point-based undergraduate admissions system where minorities automatically received 20 points out of 100 needed for admission. The Court ruled this system was not narrowly tailored enough to achieve the university's interest in diversity, as it made race a decisive factor rather than considering each applicant holistically."
  },
  {
    question: "Explain the Grutter v. Bollinger case",
    answer: "In this 2003 companion case to Gratz, the Supreme Court upheld the University of Michigan Law School's more individualized admissions process that considered race as one factor among many in creating a diverse student body.\n\nPress '1' for more details",
    explanation: "Unlike the undergraduate program challenged in Gratz, the law school's program individually evaluated each applicant and considered race as one factor among many in a holistic review. The Court found this approach was narrowly tailored to achieve the compelling state interest of educational diversity. This case set the standard for how universities could legally consider race in admissions until it was overturned in 2023."
  },
  //! Chapter 6 - Congress
  {
    question: "What is Delegate Representation?",
    answer: "Legislators who vote according to the preferences of their constituents, directly representing the will of the people who elected them.",
  },
  {
    question: "What is Trustee Representation?",
    answer: "Legislators who vote according to what they think is best for their constituents, using their own judgment even if it differs from constituents' preferences.",
  },
  {
    question: "What is Agency Representation?",
    answer: "The type of representation in which representatives are held accountable to their constituents through elections. Constituents have the power to 'hire and fire' their representatives through voting.",
  },
  {
    question: "Compare the three types of representation",
    answer: "Delegate: Votes based on constituent preferences\nTrustee: Votes based on personal judgment\nAgency: Focuses on electoral accountability",
    explanation: "These models represent different approaches to how representatives should make decisions and be accountable to their constituents."
  },
  {
    question: "What are the key differences between the House and Senate?",
    answer: "Key structural and power differences between chambers:\n\nPress '1' for more details",
    explanation: "House:\n- 435 members\n- 2-year terms\n- Population-based representation\n- Initiates money bills\n- Led by Speaker\n\nSenate:\n- 100 members\n- 6-year terms\n- Equal state representation\n- Confirms appointments\n- More deliberative\n- Has filibuster"
  },
  {
    question: "What unique powers does the House of Representatives have?",
    answer: "1. Initiating all money bills\n2. Larger representation based on state population\n3. Stricter debate rules\n4. First impeachment vote",
  },
  {
    question: "What unique powers does the Senate have?",
    answer: "1. Confirming presidential appointments\n2. Ratifying treaties\n3. Conducting impeachment trials\n4. Filibuster power\n5. Equal representation per state",
  },
  {
    question: "What is gerrymandering?",
    answer: "The practice of drawing electoral districts in a way that gives advantage to one political party.",
  },
  {
    question: "What is 'packing' in gerrymandering?",
    answer: "Concentrating opposition voters into few districts to minimize their influence in other districts.",
  },
  {
    question: "What is 'cracking' in gerrymandering?",
    answer: "Spreading opposition voters across many districts so they can't form a majority in any district.",
  },
  {
    question: "Who is the Speaker of the House?",
    answer: "The chief presiding officer of the House of Representatives, elected by the majority party. This person is the most important party and House leader.",
  },
  {
    question: "What is the role of the House Majority Leader?",
    answer: "Leads the majority party in the House, schedules legislation, and works to advance the party's agenda.",
  },
  {
    question: "What is the role of the House Minority Leader?",
    answer: "Leads the minority party in the House, offers alternative policies, and coordinates opposition when necessary.",
  },
  {
    question: "What is the role of the Vice President in the Senate?",
    answer: "Serves as President of the Senate, though rarely attends except for ceremonial occasions or to cast tie-breaking votes.",
  },
  {
    question: "What is the role of the Senate President Pro Tempore?",
    answer: "Presides over the Senate in the Vice President's absence. Traditionally the senior member of the majority party.",
  },
  {
    question: "What is the role of the Senate Majority Leader?",
    answer: "Controls the Senate floor agenda, schedules votes, and leads the majority party's legislative efforts.",
  },
  {
    question: "What is the role of the Senate Minority Leader?",
    answer: "Leads the minority party in the Senate, coordinates opposition, and negotiates with the majority.",
  },
  {
    question: "What is the whip system?",
    answer: "Party's communications network in each house that polls members on their voting intentions and conveys leadership's views.",
  },
  {
    question: "What is logrolling?",
    answer: "Agreements among members to vote for one another's bills - a form of vote trading.",
  },
  {
    question: "What is gatekeeping authority in standing committees?",
    answer: "The power to decide if policy changes will be considered, effectively controlling which bills advance.",
  },
  {
    question: "What is proposal power in standing committees?",
    answer: "The ability to bring proposals before the full legislature for consideration.",
  },
  {
    question: "What is oversight power in standing committees?",
    answer: "The authority to monitor and investigate executive agencies' implementation of laws.",
  },
  {
    question: "Explain the process of how a bill becomes a law",
    answer: "Basic steps in the legislative process:\n1. Bill Introduction\n2. Committee Review\n3. House Debate and Vote\n4. Senate Debate and Vote\n5. Conference Committee (if needed)\n6. Final Approval\n7. Presidential Action\n\nPress '1' for more details",
    explanation: "Detailed Process:\n1. Representative sponsors bill\n2. Assigned to committee for study\n3. House Rules Committee sets debate rules\n4. House votes (simple majority)\n5. Similar process in Senate\n6. Conference committee resolves differences\n7. Both chambers vote on final version\n8. President signs or vetoes"
  },
  {
    question: "What is the role of the House Rules Committee?",
    answer: "The Rules Committee adopts rules governing how bills will be considered by the House, including:\n- Time allowed for debate\n- Which amendments can be offered\n- Special procedures for consideration",
  },
  {
    question: "What is a filibuster?",
    answer: "A tactic where senators prevent action on legislation by continuously holding the floor and speaking until the majority abandons the legislation.",
  },
  {
    question: "What is cloture?",
    answer: "Procedure requiring three-fifths of the Senate (60 votes) to end debate and force a vote.",
  },
  {
    question: "What is the role of the conference committee?",
    answer: "Conference committees are formed to reconcile differences between House and Senate versions of a bill. They:\n- Include members from both chambers\n- Require majority support from both delegations\n- Produce compromise versions of bills",
  },
  {
    question: "What is a regular veto?",
    answer: "When the president rejects a bill within 10 days and returns it to Congress with objections.",
  },
  {
    question: "What is a pocket veto?",
    answer: "When a bill dies automatically if Congress adjourns during the 10-day period and the president has taken no action.",
  },
  {
    question: "What is a veto override?",
    answer: "When Congress passes a bill over the president's veto with a two-thirds majority in both chambers.",
  },
  //! Chapter 7 - The Presidency
  {
    question: "What are expressed powers of the president?",
    answer: "Powers explicitly granted by the Constitution, such as:\n- Commander in Chief\n- Pardons\n- Treaty making",
  },
  {
    question: "What are delegated powers of the president?",
    answer: "Powers assigned by Congress to execute, such as:\n- Environmental regulation\n- Federal agency oversight",
  },
  {
    question: "What are inherent powers of the president?",
    answer: "Powers not expressed but claimed as presidential rights, such as:\n- Emergency actions\n- Executive privilege\n- Executive agreements",
  },
  {
    question: "Compare the three types of presidential powers",
    answer: "Overview of presidential powers:\n\nPress '1' for more details",
    explanation: "Expressed Powers: Explicitly in Constitution\nDelegated Powers: Given by Congress\nInherent Powers: Claimed from role as president\n\nExamples:\nExpressed: Commander in Chief\nDelegated: Agency oversight\nInherent: Executive privilege"
  },
  {
    question: "What are the president's military powers abroad?",
    answer: "Commander in Chief of armed forces, with authority to direct military operations and strategy.",
  },
  {
    question: "What are the president's military powers at home?",
    answer: "Can deploy troops domestically to:\n1. Maintain essential national services\n2. Enforce federal court orders\n3. Protect federal civil rights\n\nPress '1' for more details",
    explanation: "Presidents aren't obligated to deploy troops just because a state requests them. They have discretion in domestic deployment and can act independently if federal interests are at stake. This power is balanced against state sovereignty and constitutional limitations."
  },
  {
    question: "What is a presidential reprieve?",
    answer: "A postponement of punishment granted by the president.",
  },
  {
    question: "What is a presidential pardon?",
    answer: "Forgiveness of a crime and cancellation of penalty granted by the president.",
  },
  {
    question: "What is presidential amnesty?",
    answer: "A pardon extended to a group of persons rather than an individual.",
  },
  {
    question: "What are the president's additional judicial powers?",
    answer: "Beyond pardons, the president can:\n- Nominate federal judges\n- Nominate Supreme Court justices\n- Direct Justice Department priorities\n- Choose which laws to defend in court",
  },
  {
    question: "What are the president's diplomatic powers?",
    answer: "1. Make treaties (with Senate consent)\n2. Negotiate with foreign governments\n3. Recognize foreign governments\n4. Appoint ambassadors\n5. Receive foreign diplomats",
  },
  {
    question: "What are the president's legislative powers?",
    answer: "1. Sign or veto legislation\n2. Recommend legislation to Congress\n3. Call special sessions of Congress\n4. Issue executive orders\n5. Submit annual budget",
  },
  {
    question: "What is the Cabinet?",
    answer: "The heads of the major departments of the federal government who advise the president.",
  },
  {
    question: "What is the White House Staff?",
    answer: "Personal advisers to the president, often given the title 'special assistant', who provide direct support and counsel.",
  },
  {
    question: "What is the Executive Office of the President?",
    answer: "Permanent agencies that perform defined management tasks for the president, including:\n- Office of Management and Budget\n- Council of Economic Advisers\n- National Security Council",
  },
  {
    question: "What is the role of the Vice President?",
    answer: "1. Successor to president if needed\n2. President of the Senate\n3. Tie-breaking vote in Senate\n4. Adviser to president",
  },
  {
    question: "Compare the formal resources of presidential power",
    answer: "Overview of presidential support structure:\n\nPress '1' for more details",
    explanation: "Cabinet: Department heads, formal advisers\nWhite House Staff: Personal advisers, more influential in modern era\nExecutive Office: Permanent management support\nVice President: Expanded role in recent administrations"
  },
  {
    question: "What is the myth of Executive Superiority in Emergencies?",
    answer: "The false belief that presidents are automatically better at handling emergencies than Congress.",
  },
  {
    question: "What is the myth of Superior Presidential Responsiveness?",
    answer: "The false belief that presidents are more responsive to public interest than Congress.",
  },
  {
    question: "What is the myth of the Presidency as More Democratic?",
    answer: "The false belief that the presidency is more democratic than Congress, when Congress may better reflect diverse public opinions.",
  },
  {
    question: "Compare the three myths of presidential power",
    answer: "Overview of presidential power myths:\n\nPress '1' for more details",
    explanation: "Myth 1: Presidents aren't automatically better in emergencies - Congress often acts effectively\n\nMyth 2: Presidents can be as influenced by special interests as Congress\n\nMyth 3: Congress, with its many members, may better reflect diverse public opinions"
  },
  //! Chapter 9 - Federal Courts
  {
    question: "What is a criminal case?",
    answer: "Actions that allegedly violate laws protecting health, safety, morals, and community welfare.",
  },
  {
    question: "What is a civil case?",
    answer: "Disputes between individuals or between government and individuals that don't involve criminal penalties.",
  },
  {
    question: "Compare criminal and civil cases",
    answer: "Key differences in case types:\n\nPress '1' for more details",
    explanation: "Criminal Cases:\n- State/government prosecutes\n- Potential jail/prison time\n- Higher burden of proof\n- Constitutional protections\n\nCivil Cases:\n- Private parties dispute\n- Monetary damages/injunctions\n- Lower burden of proof\n- Fewer constitutional protections"
  },
  {
    question: "What is a precedent?",
    answer: "Past cases whose principles are used as the basis for present decisions.",
  },
  {
    question: "What is stare decisis?",
    answer: "Doctrine requiring courts to follow earlier decisions in similar cases ('let the decision stand').",
  },
  {
    question: "Why are precedent and stare decisis important for Court legitimacy?",
    answer: "They maintain court authority by:\n\nPress '1' for more details",
    explanation: "- Creates predictability in law\n- Ensures consistent application\n- Maintains court's institutional integrity\n- Can be overturned when necessary for social progress"
  },
  {
    question: "What is original jurisdiction?",
    answer: "Cases that can be brought directly to a court initially.",
  },
  {
    question: "What is appellate jurisdiction?",
    answer: "Cases that can be appealed to a higher court from a lower court decision.",
  },
  {
    question: "What are District Courts?",
    answer: "Federal trial courts that hear both civil and criminal cases, use juries, and take evidence.",
  },
  {
    question: "What are Circuit Courts of Appeals?",
    answer: "Intermediate appellate courts that review decisions of district courts but don't hear new evidence or use juries.",
  },
  {
    question: "What is the Supreme Court's role?",
    answer: "The highest court that serves as the final interpreter of the Constitution, selectively accepting cases of national importance.",
  },
  {
    question: "Compare the levels of federal courts",
    answer: "Structure and roles of federal courts:\n\nPress '1' for more details",
    explanation: "Trial Courts (District):\n- Hear evidence\n- Have witnesses\n- Use juries\n\nAppeals Courts (Circuit):\n- No new evidence\n- No witnesses\n- No jury\n- Review legal errors\n\nSupreme Court:\n- Final interpreter of Constitution\n- Selective case acceptance\n- National precedents"
  },
  {
    question: "What is judicial review?",
    answer: "Power of courts to determine if actions of president, Congress, and state legislatures are constitutional.",
  },
  {
    question: "What was the significance of Marbury v. Madison?",
    answer: "1803 case that established judicial review\n\nPress '1' for more details",
    explanation: "Case Details:\n- Arose from dispute over judicial appointments\n- Court found it couldn't grant Marbury's request due to unconstitutional law\n- Established Court's power to declare laws unconstitutional\n- Set precedent for judicial review power"
  },
  {
    question: "What is a writ of certiorari?",
    answer: "Formal request for Supreme Court to review a lower court decision.",
  },
  {
    question: "What types of cases does the Supreme Court typically accept?",
    answer: "1. Between US and states\n2. Between multiple states\n3. Involving foreign diplomats\n4. With national significance\n\nPress '1' for more details",
    explanation: "Process:\n- Lawyers file petition for writ\n- Four justices must agree to hear case ('Rule of Four')\n- Court accepts only about 1% of petitions\n- Focus on constitutional issues or circuit splits"
  },
  {
    question: "What is judicial activism?",
    answer: "Philosophy that courts should consider broader societal implications beyond constitutional text.",
  },
  {
    question: "What is judicial restraint?",
    answer: "Philosophy that courts should strictly adhere to constitutional text and precedent.",
  },
  {
    question: "Compare judicial activism and judicial restraint",
    answer: "Different approaches to judicial interpretation:\n\nPress '1' for more details",
    explanation: "Activism:\n- Courts should adapt to changing times\n- Consider broader social impact\n- More flexible interpretation\n\nRestraint:\n- Strict textual interpretation\n- Defer to legislative branch\n- Follow precedent closely\n\nDebate continues over proper role of courts in democratic society"
  }
];

export default flashcards;