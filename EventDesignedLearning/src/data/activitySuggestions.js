/**
 * Activity Suggestion Library
 * Pre-built activity templates inspired by educational research and best practices
 *
 * Sources:
 * - TeachEngineering: Engineering design challenges, 5E integration
 * - Edutopia: Inquiry-based learning strategies (Chalk Talk, Harkness, micro-inquiry)
 * - Maker Education: Hands-on building, tinkering, iteration
 * - Exploratorium: Science Snacks, open-ended tinkering
 * - MIT Edgerton Center: STEM projects, kinetic sculptures
 */

// ============================================
// MINDS ON / ENGAGE HOOKS
// ============================================

export const MINDS_ON_HOOKS = {
  prediction_poll: [
    {
      id: 'predict-outcome',
      name: 'Predict the Outcome',
      type: 'prediction_poll',
      description: 'Students predict what will happen before a demonstration or experiment',
      prompt: 'Before we begin, what do you predict will happen when [X]?',
      followUp: "Let's see if your prediction was correct...",
      source: 'Exploratorium Science Snacks',
      learningObjectives: ['Activate prior knowledge', 'Generate hypotheses'],
    },
    {
      id: 'four-corners-debate',
      name: 'Four Corners Debate',
      type: 'prediction_poll',
      description: 'Students physically move to corners representing their opinion',
      prompt: 'Move to the corner that represents your position: Strongly Agree, Agree, Disagree, Strongly Disagree',
      structure: ['State position', 'Discuss with corner group', 'Share reasoning', 'Allow corner changes'],
      source: 'Edutopia Inquiry Strategies',
      learningObjectives: ['Form opinions', 'Practice argumentation'],
    },
    {
      id: 'would-you-rather',
      name: 'Would You Rather?',
      type: 'discussion_prompt',
      description: 'Binary choice question related to the topic that sparks debate',
      prompt: 'Would you rather... [Option A] or [Option B]?',
      source: 'Edutopia',
      learningObjectives: ['Engage interest', 'Surface misconceptions'],
    },
  ],

  mystery_hook: [
    {
      id: 'discrepant-event',
      name: 'Discrepant Event',
      type: 'manipulative',
      description: 'Present something unexpected that contradicts assumptions',
      prompt: 'Watch carefully... Why do you think this happened?',
      materials: ['Demonstration materials', 'Observation sheet'],
      examples: [
        'A heavy object floating in water',
        'Code producing unexpected output',
        "A circuit that doesn't work as expected",
      ],
      source: 'Exploratorium Tinkering',
      learningObjectives: ['Spark curiosity', 'Challenge assumptions'],
    },
    {
      id: 'what-went-wrong',
      name: 'What Went Wrong?',
      type: 'challenge_lab',
      description: 'Present a broken solution and have students diagnose the problem',
      prompt: "This code/design doesn't work. What went wrong and how would you fix it?",
      source: 'TeachEngineering',
      learningObjectives: ['Debugging skills', 'Critical analysis'],
    },
    {
      id: 'mystery-artifact',
      name: 'Mystery Artifact',
      type: 'manipulative',
      description: 'Present an intriguing object or image and ask students to figure out what it is or does',
      source: 'MIT Edgerton',
      materials: ['Mystery object or image', 'Observation sheet'],
      structure: ['Observe silently (1 min)', 'Write 3 observations', 'Share and discuss as a class'],
      learningObjectives: ['Observation skills', 'Inference'],
    },
  ],

  discussion_protocol: [
    {
      id: 'chalk-talk',
      name: 'Chalk Talk (Silent Discussion)',
      type: 'discussion_prompt',
      description: 'Students respond in writing, creating a web of ideas',
      structure: [
        'Post a central question/statement on chart paper',
        'Students write responses and connect ideas silently',
        'Draw lines between related ideas',
        'Debrief verbally after 5-10 minutes',
      ],
      materials: ['Chart paper', 'Markers'],
      source: 'Edutopia',
      learningObjectives: ['Silent participation', 'Visual thinking'],
    },
    {
      id: 'think-pair-share',
      name: 'Think-Pair-Share',
      type: 'discussion_prompt',
      description: 'Individual reflection, partner discussion, class share',
      prompt: 'What do you already know about...?',
      structure: ['Think silently (1-2 min)', 'Turn to partner and share (2-3 min)', 'Share key ideas with class (3-5 min)'],
      materials: ['Timer', 'Discussion prompt on board'],
      source: 'Edutopia',
      learningObjectives: ['Reflection', 'Peer learning'],
    },
    {
      id: 'notice-wonder',
      name: 'Notice & Wonder',
      type: 'discussion_prompt',
      description: 'Students observe and generate questions',
      prompt: 'What do you NOTICE? What do you WONDER?',
      structure: ['Observe image/demo/code', 'Write observations', 'Write questions', 'Share and categorize'],
      source: 'Exploratorium',
      learningObjectives: ['Observation', 'Question generation'],
    },
  ],

  prior_knowledge: [
    {
      id: 'kwl-chart',
      name: 'KWL Chart',
      type: 'worksheet',
      description: 'What I Know, Want to know, Learned',
      structure: ['Fill in K and W columns at start', 'Complete L column at end of lesson'],
      materials: ['KWL template or chart paper'],
      source: 'Edutopia',
      learningObjectives: ['Activate prior knowledge', 'Set learning goals'],
    },
    {
      id: 'concept-map-starter',
      name: 'Concept Map Starter',
      type: 'worksheet',
      description: 'Students create initial concept map, revisit at end',
      prompt: 'Draw connections between these concepts: [provide 5-6 terms]',
      materials: ['Blank paper or digital tool'],
      source: 'TeachEngineering',
      learningObjectives: ['Organize knowledge', 'Identify relationships'],
    },
    {
      id: 'gallery-walk-intro',
      name: 'Gallery Walk Introduction',
      type: 'manipulative',
      description: 'Post images or examples around the room for students to explore',
      source: 'TeachEngineering',
      materials: ['Printed images or examples', 'Sticky notes', 'Markers'],
      structure: [
        { name: 'Walk & Observe', duration: 5, description: 'Students circulate and observe' },
        { name: 'Comment', duration: 3, description: 'Leave questions or reactions on sticky notes' },
        { name: 'Discuss', duration: 5, description: 'Whole-class debrief' },
      ],
      learningObjectives: ['Visual engagement', 'Peer interaction'],
    },
  ],
};

// ============================================
// WORK TIME ACTIVITIES BY CATEGORY
// ============================================

export const WORK_TIME_ACTIVITIES = {
  maker_tinkering: [
    {
      id: 'paper-tower-challenge',
      name: 'Tower Building Challenge',
      type: 'manipulative',
      description: 'Build the tallest tower using limited materials',
      materials: ['Paper', 'Tape', 'Scissors'],
      structure: [
        { name: 'Plan', duration: 5, description: 'Design your tower' },
        { name: 'Build', duration: 15, description: 'Construct with limited materials' },
        { name: 'Test', duration: 5, description: 'Measure and test stability' },
      ],
      learningObjectives: ['Structural engineering', 'Iteration', 'Constraints'],
      source: 'Maker Education',
    },
    {
      id: 'catapult-design',
      name: 'Catapult Design Challenge',
      type: 'manipulative',
      description: 'Design and build a catapult to launch objects at targets',
      materials: ['Popsicle sticks', 'Rubber bands', 'Spoon', 'Small objects'],
      structure: [
        { name: 'Research', duration: 5, description: 'Study catapult designs' },
        { name: 'Design', duration: 5, description: 'Sketch your design' },
        { name: 'Build', duration: 15, description: 'Construct catapult' },
        { name: 'Test & Iterate', duration: 10, description: 'Test for distance, accuracy, and consistency' },
      ],
      learningObjectives: ['Projectile motion', 'Energy transfer', 'Angles'],
      source: 'Maker Education / TeachEngineering',
    },
    {
      id: 'kinetic-sculpture',
      name: 'Kinetic Sculpture',
      type: 'group_project',
      description: 'Create a moving sculpture using simple machines (inspired by Calder & Ganson)',
      materials: ['Wire', 'Paper', 'Motors (optional)', 'Found objects'],
      learningObjectives: ['Balance', 'Gearing', 'Energy sources', 'Motion'],
      source: 'MIT Edgerton Center',
    },
    {
      id: 'rube-goldberg',
      name: 'Rube Goldberg Machine',
      type: 'group_project',
      description: 'Create a chain-reaction contraption with minimum 5 steps',
      materials: ['Various classroom materials', 'Ramps', 'Balls', 'Dominos'],
      learningObjectives: ['Cause and effect', 'Energy transfer', 'Simple machines'],
      source: 'Exploratorium Tinkering Studio',
    },
    {
      id: 'circuit-art',
      name: 'Light-Up Art Project',
      type: 'manipulative',
      description: 'Create art that lights up using simple circuits',
      materials: ['LED lights', 'Copper tape', 'Coin batteries', 'Paper/cardstock'],
      learningObjectives: ['Circuits', 'Conductivity', 'Art + Engineering'],
      source: 'MIT Edgerton Center',
    },
  ],

  inquiry_based: [
    {
      id: 'micro-inquiry-predict',
      name: 'Micro-Inquiry: Predictions',
      type: 'discussion_prompt',
      description: '5-10 minute focused inquiry to spark curiosity',
      structure: [
        'Present a phenomenon or problem',
        'Students make predictions',
        'Test or reveal outcome',
        'Discuss surprises',
      ],
      source: 'Edutopia',
      learningObjectives: ['Scientific thinking', 'Prediction'],
    },
    {
      id: 'inquiry-detective',
      name: 'Inquiry Detectives',
      type: 'discussion_prompt',
      description: 'Students generate and investigate their own questions (rotate weekly)',
      structure: [
        'Assign 2-3 students as inquiry detectives',
        'Detectives generate questions about the topic',
        'Class votes on most interesting question',
        'Explore the question together',
      ],
      source: 'Edutopia',
      learningObjectives: ['Question formulation', 'Student-led inquiry'],
    },
    {
      id: 'controlled-experiment',
      name: 'Design Your Own Experiment',
      type: 'challenge_lab',
      description: 'Students design and conduct a controlled experiment',
      structure: [
        'Identify the question',
        'Form a hypothesis',
        'Identify variables (independent, dependent, controlled)',
        'Design procedure',
        'Collect data',
        'Analyze and conclude',
      ],
      source: 'TeachEngineering',
      learningObjectives: ['Scientific method', 'Experimental design'],
    },
  ],

  coding_digital: [
    {
      id: 'debug-challenge',
      name: 'Bug Hunt Challenge',
      type: 'challenge_lab',
      description: 'Find and fix bugs in provided code with progressive hints',
      materials: ['Buggy code samples', 'Debugging checklist'],
      structure: ['Read the buggy code', 'Identify errors', 'Fix bugs', 'Compare with solution'],
      learningObjectives: ['Debugging', 'Reading code', 'Problem solving'],
      launchable: true,
    },
    {
      id: 'code-remix',
      name: 'Code Remix',
      type: 'code_playground',
      description: 'Modify working code to create something new',
      structure: ['Explore starter code', 'Change one thing', 'Add a feature', 'Combine with another concept'],
      source: 'Exploratorium (remix culture)',
      learningObjectives: ['Code modification', 'Creative coding'],
      launchable: true,
    },
    {
      id: 'simulation-exploration',
      name: 'Simulation Exploration',
      type: 'simulation',
      description: 'Explore an interactive simulation and document observations',
      structure: ['Free exploration (5 min)', 'Answer guided questions', 'Make and test predictions'],
      learningObjectives: ['Discover patterns', 'Build intuition'],
      source: 'Exploratorium',
      launchable: true,
    },
    {
      id: 'pair-programming',
      name: 'Pair Programming',
      type: 'code_playground',
      description: 'Two students work together: one types (driver), one directs (navigator)',
      structure: ['Assign roles', 'Code together (10-15 min)', 'Switch roles', 'Continue coding'],
      learningObjectives: ['Collaboration', 'Code review', 'Communication'],
      launchable: true,
    },
    {
      id: 'code-along',
      name: 'Code-Along',
      type: 'code_playground',
      description: 'Teacher demonstrates while students follow along and modify code',
      source: 'TeachEngineering',
      materials: ['Code editor', 'Starter code'],
      learningObjectives: ['Build procedural knowledge', 'Practice syntax'],
      launchable: true,
    },
    {
      id: 'peer-debugging',
      name: 'Peer Debugging',
      type: 'code_playground',
      description: "Partners trade code and find/fix bugs together",
      source: 'TeachEngineering',
      materials: ['Buggy code samples', 'Debugging checklist'],
      learningObjectives: ['Practice debugging', "Read others' code"],
      launchable: true,
    },
  ],

  collaborative: [
    {
      id: 'jigsaw',
      name: 'Jigsaw Activity',
      type: 'group_project',
      description: 'Each group member becomes expert on one piece, then teaches the group',
      structure: [
        'Divide content into sections',
        'Each member reads their section',
        'Expert groups discuss (15 min)',
        'Return to home groups to teach (10 min)',
      ],
      source: 'Edutopia',
      learningObjectives: ['Develop expertise', 'Practice teaching'],
    },
    {
      id: 'gallery-walk-work',
      name: 'Gallery Walk',
      type: 'discussion_protocol',
      description: "Students view and respond to each other's posted work",
      structure: [
        'Post student work around room',
        'Rotate in groups with sticky notes',
        'Leave feedback',
        'Return to own work to read feedback',
      ],
      materials: ['Display space', 'Sticky notes', 'Feedback stems'],
      source: 'Edutopia',
      learningObjectives: ['Peer feedback', 'Critical analysis'],
    },
    {
      id: 'peer-teaching',
      name: 'Peer Teaching Stations',
      type: 'group_project',
      description: 'Students teach each other at rotating stations',
      structure: [
        'Each student/group becomes expert on one concept',
        'Set up teaching stations',
        'Peers rotate through stations (10 min each)',
        'Teaching reinforces learning',
      ],
      source: 'Edutopia',
      learningObjectives: ['Teaching as learning', 'Communication'],
    },
    {
      id: 'station-rotation',
      name: 'Station Rotation',
      type: 'manipulative',
      description: 'Students rotate between learning stations with different activities',
      source: 'Edutopia',
      materials: ['Station materials', 'Rotation timer', 'Task cards'],
      structure: ['Station 1 (10 min)', 'Rotate (1 min)', 'Station 2 (10 min)', 'Rotate', 'Station 3 (10 min)'],
      learningObjectives: ['Differentiated learning', 'Self-paced exploration'],
    },
    {
      id: 'design-challenge',
      name: 'Mini Design Challenge',
      type: 'challenge_lab',
      description: 'Time-boxed challenge to solve a specific problem with constraints',
      source: 'MIT Edgerton',
      materials: ['Challenge brief', 'Materials list', 'Timer'],
      structure: [
        { name: 'Understand', duration: 5 },
        { name: 'Plan', duration: 5 },
        { name: 'Build/Code', duration: 15 },
        { name: 'Test', duration: 5 },
      ],
      learningObjectives: ['Apply concepts', 'Iterate solutions'],
    },
  ],
};

// ============================================
// EXIT TICKETS BY TYPE
// ============================================

export const EXIT_TICKETS = {
  reflection: [
    {
      id: '3-2-1',
      name: '3-2-1 Reflection',
      type: 'worksheet',
      description: '3 things learned, 2 things interesting, 1 question remaining',
      prompt: '3 things you learned, 2 things you found interesting, 1 question you still have',
      source: 'Edutopia',
      learningObjectives: ['Synthesize learning', 'Self-assess understanding'],
    },
    {
      id: 'muddiest-point',
      name: 'Muddiest Point',
      type: 'worksheet',
      description: 'Students identify the concept they found most confusing',
      prompt: "What was the most confusing part of today's lesson?",
      source: 'Edutopia',
      learningObjectives: ['Identify gaps', 'Guide instruction'],
    },
    {
      id: 'one-sentence-summary',
      name: 'One Sentence Summary',
      type: 'worksheet',
      description: 'Summarize the entire lesson in one complete sentence',
      prompt: 'In one sentence, explain the most important thing you learned today.',
      source: 'TeachEngineering',
      learningObjectives: ['Synthesize', 'Prioritize information'],
    },
    {
      id: 'headline',
      name: 'Write the Headline',
      type: 'worksheet',
      description: "If today's lesson were a news story, what would the headline be?",
      prompt: "If today's lesson were a news story, what would the headline be?",
      source: 'Edutopia',
      learningObjectives: ['Summarization', 'Key idea extraction'],
    },
  ],

  metacognition: [
    {
      id: 'confidence-check',
      name: 'Confidence Check',
      type: 'quiz',
      description: 'Rate confidence on each learning objective from 1-5',
      prompt: 'How confident are you that you can [learning objective]?',
      source: 'Edutopia',
      learningObjectives: ['Self-assessment', 'Metacognition'],
    },
    {
      id: 'stuck-unstuck',
      name: 'Stuck to Unstuck',
      type: 'worksheet',
      description: 'Reflect on where you got stuck and how you resolved it',
      prompt: 'Where did you get stuck today? How did you get unstuck (or what would help)?',
      source: 'Edutopia',
      learningObjectives: ['Problem-solving awareness', 'Growth mindset'],
    },
    {
      id: 'learning-target-check',
      name: 'Learning Target Self-Assessment',
      type: 'quiz',
      description: "Rate your understanding of today's learning target on a 1-4 scale",
      prompt: "Rate your understanding of today's learning target: 1-4",
      source: 'Edutopia',
      learningObjectives: ['Self-assessment', 'Goal awareness'],
    },
  ],

  application: [
    {
      id: 'real-world-connection',
      name: 'Real World Connection',
      type: 'worksheet',
      description: 'Connect classroom learning to real-world situations',
      prompt: 'How might you use what you learned today outside of class?',
      source: 'TeachEngineering',
      learningObjectives: ['Transfer', 'Relevance'],
    },
    {
      id: 'what-if',
      name: 'What If?',
      type: 'worksheet',
      description: 'Apply learning to hypothetical scenarios',
      prompt: "What if [scenario]? How would you apply today's learning?",
      source: 'Edutopia',
      learningObjectives: ['Application', 'Critical thinking'],
    },
    {
      id: 'teach-someone',
      name: 'Teach Someone',
      type: 'worksheet',
      description: "Explain today's main concept as if teaching a friend or family member",
      prompt: "How would you explain today's main concept to a friend or family member?",
      source: 'Edutopia',
      learningObjectives: ['Simplification', 'Deep understanding'],
    },
  ],

  quick_check: [
    {
      id: 'ticket-out',
      name: 'Quick Question',
      type: 'quiz',
      description: 'Answer a specific content question before leaving',
      prompt: 'Answer this question before you leave: [specific question about content]',
      source: 'Edutopia',
      learningObjectives: ['Content check', 'Quick assessment'],
    },
    {
      id: 'thumbs',
      name: 'Thumbs Up/Down/Sideways',
      type: 'quiz',
      description: 'Quick visual self-assessment of understanding',
      prompt: 'Show your understanding: Thumbs up (got it), sideways (mostly), down (confused)',
      source: 'Edutopia',
      learningObjectives: ['Quick check', 'Visual assessment'],
    },
  ],
};

// ============================================
// SHARE OUT PROTOCOLS
// ============================================

export const SHARE_OUT_PROTOCOLS = {
  whole_class: [
    {
      id: 'whip-around',
      name: 'Whip Around',
      type: 'discussion_protocol',
      description: 'Quick share from every student in one word or phrase',
      prompt: 'In one word/phrase, share [X]',
      source: 'Edutopia',
      learningObjectives: ['Participation', 'Concise expression'],
    },
    {
      id: 'popcorn-share',
      name: 'Popcorn Share',
      type: 'discussion_protocol',
      description: 'Students share voluntarily, "popcorning" to the next person',
      structure: ['One student shares', 'They pick the next person', 'Can say "pass"', 'No repeating what was said'],
      source: 'Edutopia',
      learningObjectives: ['Active listening', 'Voluntary sharing'],
    },
    {
      id: 'fishbowl',
      name: 'Fishbowl Discussion',
      type: 'discussion_protocol',
      description: 'Inner circle discusses while outer circle observes, then rotate',
      structure: ['Inner circle (4-6) discusses topic (7 min)', 'Outer circle takes notes', 'Switch roles (7 min)', 'Debrief observations (5 min)'],
      materials: ['Discussion questions', 'Observation sheet'],
      source: 'Edutopia',
      learningObjectives: ['Discussion skills', 'Active listening'],
    },
    {
      id: 'socratic-seminar',
      name: 'Socratic Seminar',
      type: 'discussion_protocol',
      description: 'Student-led discussion driven by open-ended questions',
      source: 'Edutopia',
      materials: ['Essential question', 'Text or evidence', 'Discussion tracker'],
      learningObjectives: ['Practice argumentation', "Build on others' ideas"],
    },
  ],

  gallery_style: [
    {
      id: 'gallery-walk-silent',
      name: 'Silent Gallery Walk',
      type: 'discussion_protocol',
      description: 'View work in silence, leave written feedback using stems',
      materials: ['Sticky notes for feedback'],
      structure: ['Post work (2 min)', 'Gallery walk with feedback (10 min)', 'Read feedback (3 min)', 'Reflect (2 min)'],
      source: 'Edutopia',
      learningObjectives: ['Written feedback', 'Reflection'],
    },
    {
      id: 'speed-dating-share',
      name: 'Speed Dating Share',
      type: 'discussion_protocol',
      description: 'Rapid 2-minute paired shares, rotating partners 3-4 times',
      structure: ['Partner A shares (1 min)', 'Partner B shares (1 min)', 'Rotate to new partner', 'Repeat 3-4 times'],
      source: 'Edutopia',
      learningObjectives: ['Concise communication', 'Multiple perspectives'],
    },
  ],

  team_presentations: [
    {
      id: 'lightning-talks',
      name: 'Lightning Talks',
      type: 'discussion_protocol',
      description: '2-3 minute rapid presentations focusing on key insights',
      structure: ['Prep (3 min)', 'Presentations (2-3 min each)', 'Q&A after each (1 min)'],
      materials: ['Timer', 'Optional: 1 slide per group'],
      source: 'TeachEngineering',
      learningObjectives: ['Presentation skills', 'Synthesis'],
    },
    {
      id: 'demo-day',
      name: 'Demo Day',
      type: 'discussion_protocol',
      description: 'Teams demonstrate their working projects live',
      structure: ['Brief context (30 sec)', 'Live demonstration', "One thing you'd improve", 'Questions from class'],
      source: 'MIT Edgerton Center',
      learningObjectives: ['Presentation', 'Reflection', 'Public speaking'],
    },
  ],
};

// ============================================
// FLAT ARRAY HELPERS (for backward compat)
// ============================================

export const ALL_MINDS_ON = Object.values(MINDS_ON_HOOKS).flat();
export const ALL_WORK_TIME = Object.values(WORK_TIME_ACTIVITIES).flat();
export const ALL_EXIT_TICKETS = Object.values(EXIT_TICKETS).flat();
export const ALL_SHARE_OUT = Object.values(SHARE_OUT_PROTOCOLS).flat();

const ALL_ACTIVITIES = [
  ...ALL_MINDS_ON,
  ...ALL_WORK_TIME,
  ...ALL_SHARE_OUT,
  ...ALL_EXIT_TICKETS,
];

// ============================================
// ACTIVITY SUGGESTION ENGINE
// ============================================

export function getActivitySuggestions({ phase }) {
  const suggestions = {
    mindsOn: [],
    workTime: [],
    shareOut: [],
    exitTicket: [],
  };

  if (phase === 'engage') {
    suggestions.mindsOn = [
      ...MINDS_ON_HOOKS.prediction_poll,
      ...MINDS_ON_HOOKS.mystery_hook,
      ...MINDS_ON_HOOKS.prior_knowledge,
    ];
  } else {
    suggestions.mindsOn = [
      ...MINDS_ON_HOOKS.discussion_protocol.slice(0, 2),
      MINDS_ON_HOOKS.prior_knowledge[0],
    ];
  }

  switch (phase) {
    case 'engage':
      suggestions.workTime = [
        ...WORK_TIME_ACTIVITIES.inquiry_based,
        WORK_TIME_ACTIVITIES.collaborative[0],
      ];
      break;
    case 'explore':
      suggestions.workTime = [
        ...WORK_TIME_ACTIVITIES.maker_tinkering,
        ...WORK_TIME_ACTIVITIES.inquiry_based,
        ...WORK_TIME_ACTIVITIES.coding_digital.filter(a => a.id.includes('simulation') || a.id.includes('remix')),
      ];
      break;
    case 'explain':
      suggestions.workTime = [
        ...WORK_TIME_ACTIVITIES.collaborative,
        WORK_TIME_ACTIVITIES.coding_digital.find(a => a.id === 'pair-programming'),
      ].filter(Boolean);
      break;
    case 'elaborate':
      suggestions.workTime = [
        ...WORK_TIME_ACTIVITIES.maker_tinkering.filter(a => a.type === 'group_project'),
        ...WORK_TIME_ACTIVITIES.coding_digital,
        WORK_TIME_ACTIVITIES.inquiry_based[2],
      ];
      break;
    case 'evaluate':
      suggestions.workTime = [
        WORK_TIME_ACTIVITIES.coding_digital[0],
        ...WORK_TIME_ACTIVITIES.collaborative.filter(a => a.id === 'peer-teaching'),
      ];
      break;
    default:
      suggestions.workTime = [
        ...WORK_TIME_ACTIVITIES.inquiry_based,
        ...WORK_TIME_ACTIVITIES.coding_digital.slice(0, 2),
      ];
  }

  if (phase === 'elaborate' || phase === 'evaluate') {
    suggestions.shareOut = [
      ...SHARE_OUT_PROTOCOLS.team_presentations,
      ...SHARE_OUT_PROTOCOLS.gallery_style,
    ];
  } else {
    suggestions.shareOut = [...SHARE_OUT_PROTOCOLS.whole_class];
  }

  if (phase === 'evaluate') {
    suggestions.exitTicket = [
      ...EXIT_TICKETS.application,
      ...EXIT_TICKETS.metacognition,
    ];
  } else if (phase === 'explore') {
    suggestions.exitTicket = [
      ...EXIT_TICKETS.reflection,
      EXIT_TICKETS.metacognition[1],
    ];
  } else {
    suggestions.exitTicket = [
      ...EXIT_TICKETS.quick_check,
      ...EXIT_TICKETS.reflection.slice(0, 2),
    ];
  }

  return suggestions;
}

export function getActivityTemplates(activityType) {
  return ALL_WORK_TIME.filter(a => a.type === activityType);
}

export function searchActivities(query) {
  const lower = query.toLowerCase();
  return ALL_ACTIVITIES.filter(
    (a) =>
      a.name?.toLowerCase().includes(lower) ||
      a.description?.toLowerCase().includes(lower) ||
      (a.source && a.source.toLowerCase().includes(lower))
  );
}
