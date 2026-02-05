// PBL Protocols - Best practices embedded throughout the unit
// These protocols guide teachers through key PBL facilitation moments

export const PBL_PROTOCOLS = {
  // Launch Phase Protocols
  entry_event: {
    id: 'entry_event',
    name: 'Entry Event Protocol',
    phase: 'launch',
    purpose: 'Hook students into the project with an engaging, authentic experience',
    duration: '30-60 minutes',
    icon: 'Rocket',
    color: '#a55eea',
    steps: [
      'Set the stage: Create anticipation without revealing the full project',
      'Present the event: Guest speaker, video, simulation, or hands-on experience',
      'Allow emotional response: Give students time to react and discuss',
      'Surface initial questions: What do you wonder? What do you want to know?',
      'Connect to real-world: How does this affect our community/world?',
    ],
    tips: [
      'The best entry events create emotional engagement, not just intellectual curiosity',
      'Avoid giving too much information - let students discover through inquiry',
      'Consider inviting a community member or expert to add authenticity',
    ],
    examples: [
      'Video call with a professional facing the problem students will solve',
      'Simulation where students experience the problem firsthand',
      'Field trip or virtual tour to see the real-world context',
      'Provocative news article or data visualization',
    ],
  },

  rubric_unpacking: {
    id: 'rubric_unpacking',
    name: 'Rubric Unpacking Protocol',
    phase: 'launch',
    purpose: 'Help students understand success criteria and take ownership of learning goals',
    duration: '45-60 minutes',
    icon: 'FileSearch',
    color: '#a55eea',
    steps: [
      'Distribute the rubric and allow silent reading time (5 min)',
      'Pair discussion: What words or phrases are unclear? (5 min)',
      'Whole class: Clarify vocabulary and expectations (10 min)',
      'Small groups: Find or create examples for each level (15 min)',
      'Gallery walk: Share and discuss exemplars (10 min)',
      'Individual reflection: Which skills will be most challenging for me? (5 min)',
    ],
    tips: [
      'Use student-friendly language in rubrics',
      'Show exemplars from previous years (with permission)',
      'Have students rewrite criteria in their own words',
      'Revisit the rubric at each checkpoint',
    ],
    resources: [
      'Rubric annotation template',
      'Exemplar collection guide',
      'Self-assessment tracker',
    ],
  },

  know_need_to_know: {
    id: 'know_need_to_know',
    name: 'Know/Need-to-Know Board Protocol',
    phase: 'launch',
    purpose: 'Activate prior knowledge and identify learning gaps to drive inquiry',
    duration: '30-45 minutes',
    icon: 'Columns',
    color: '#a55eea',
    steps: [
      'Present the driving question or project challenge',
      'Individual brainstorm: What do you already know? (sticky notes)',
      'Individual brainstorm: What do you need to know? (different color)',
      'Share and cluster: Group similar ideas together',
      'Prioritize: Which need-to-knows are most urgent?',
      'Assign: How will we find answers? Who will investigate what?',
    ],
    tips: [
      'Keep the board visible throughout the project',
      'Update regularly - move items as they are learned',
      'Use need-to-knows to drive mini-lessons',
      'Celebrate when students answer their own questions',
    ],
    boardStructure: {
      columns: ['What We Know', 'What We Need to Know', 'How We\'ll Learn It'],
      colors: ['green', 'yellow', 'blue'],
    },
  },

  // Milestone Protocols
  peer_critique: {
    id: 'peer_critique',
    name: 'Peer Critique Protocol',
    phase: 'milestone',
    purpose: 'Provide kind, specific, and helpful feedback to improve work',
    duration: '20-30 minutes per round',
    icon: 'Users',
    color: '#00d9ff',
    steps: [
      'Present work: Creator shares without defending (3-5 min)',
      'Clarifying questions: Audience asks factual questions only (2 min)',
      'Warm feedback: What is working well? Be specific. (3 min)',
      'Cool feedback: What could be improved? Offer suggestions. (5 min)',
      'Reflect: Creator shares one piece of feedback they\'ll act on (1 min)',
    ],
    norms: [
      'Be Kind: Frame feedback to help, not hurt',
      'Be Specific: "The third paragraph..." not "It\'s confusing"',
      'Be Helpful: Offer actionable suggestions',
      'Focus on the work, not the person',
    ],
    sentenceStarters: {
      warm: [
        'I notice that you...',
        'The strongest part is... because...',
        'Your work effectively...',
      ],
      cool: [
        'Have you considered...',
        'I wonder if...',
        'One suggestion might be...',
        'What if you tried...',
      ],
    },
  },

  tuning_protocol: {
    id: 'tuning_protocol',
    name: 'Tuning Protocol',
    phase: 'milestone',
    purpose: 'Fine-tune work in progress with structured peer feedback',
    duration: '45-60 minutes',
    icon: 'Sliders',
    color: '#00d9ff',
    steps: [
      'Presentation (10 min): Share work and focusing question',
      'Clarifying Questions (5 min): Quick factual questions only',
      'Examination (10 min): Silent examination of the work',
      'Pause (3 min): Presenter reflects silently',
      'Discussion (15 min): Group discusses while presenter listens and takes notes',
      'Reflection (5 min): Presenter shares key takeaways',
      'Debrief (5 min): Group reflects on the process',
    ],
    tips: [
      'The presenter must stay silent during the discussion phase',
      'Appoint a facilitator to keep time and ensure norms',
      'Focus feedback on the presenter\'s focusing question',
    ],
  },

  gallery_walk: {
    id: 'gallery_walk',
    name: 'Gallery Walk Protocol',
    phase: 'milestone',
    purpose: 'Share multiple pieces of work efficiently while gathering diverse feedback',
    duration: '30-45 minutes',
    icon: 'Image',
    color: '#00d9ff',
    steps: [
      'Setup: Post work around the room with feedback forms',
      'Silent viewing (5-10 min): Walk and observe all pieces first',
      'Feedback round 1 (10 min): Write warm feedback on sticky notes',
      'Feedback round 2 (10 min): Write cool feedback on sticky notes',
      'Return to own work: Read feedback received',
      'Whole class: Share patterns and insights',
    ],
    materials: [
      'Sticky notes (two colors)',
      'Feedback sentence starters posted',
      'Timer',
    ],
  },

  // Reflection Protocols
  reflection_journal: {
    id: 'reflection_journal',
    name: 'Reflection Journal Protocol',
    phase: 'reflection',
    purpose: 'Build metacognitive awareness and track growth over time',
    duration: '10-15 minutes',
    icon: 'BookOpen',
    color: '#26de81',
    prompts: {
      process: [
        'What strategy worked well for me today?',
        'What was challenging and how did I handle it?',
        'What will I do differently next time?',
      ],
      content: [
        'What is the most important thing I learned?',
        'What questions do I still have?',
        'How does this connect to what I already knew?',
      ],
      collaboration: [
        'How did I contribute to my team today?',
        'What did I learn from a teammate?',
        'How could our team work more effectively?',
      ],
    },
    tips: [
      'Make reflection routine, not an add-on',
      'Vary prompts to avoid repetition',
      'Occasionally share reflections (with permission)',
      'Use reflections to inform mini-lessons',
    ],
  },

  success_analysis: {
    id: 'success_analysis',
    name: 'Success Analysis Protocol',
    phase: 'reflection',
    purpose: 'Analyze completed work to identify strategies worth repeating',
    duration: '20-30 minutes',
    icon: 'Trophy',
    color: '#26de81',
    steps: [
      'Identify success: What went well in this milestone?',
      'Analyze process: What specific actions led to that success?',
      'Extract strategies: What can I do again in future work?',
      'Share with team: What strategies can we adopt as a group?',
      'Document: Add successful strategies to team norms or personal toolkit',
    ],
  },

  // Checkpoint Protocols
  checkpoint_conference: {
    id: 'checkpoint_conference',
    name: 'Checkpoint Conference Protocol',
    phase: 'checkpoint',
    purpose: 'One-on-one feedback conversation to guide next steps',
    duration: '5-10 minutes per student',
    icon: 'MessageCircle',
    color: '#00d9ff',
    structure: [
      'Student self-assessment: Share where you think you are on the rubric',
      'Evidence review: Look at specific work samples together',
      'Teacher feedback: Confirm, clarify, or redirect assessment',
      'Goal setting: Identify 1-2 specific next steps',
      'Support plan: What do you need to reach your goals?',
    ],
    tips: [
      'Have students complete self-assessment before the conference',
      'Focus on growth, not just current performance',
      'Document goals for follow-up',
      'Schedule brief check-ins between formal conferences',
    ],
  },

  self_assessment: {
    id: 'self_assessment',
    name: 'Self-Assessment Protocol',
    phase: 'checkpoint',
    purpose: 'Students evaluate their own progress against the rubric',
    duration: '15-20 minutes',
    icon: 'ClipboardCheck',
    color: '#00d9ff',
    steps: [
      'Review the rubric criteria for this checkpoint',
      'Gather evidence: Which work samples demonstrate each skill?',
      'Rate yourself: Where are you on each criterion?',
      'Justify: Write 1-2 sentences explaining your rating with evidence',
      'Set goals: What will you do to improve before the next checkpoint?',
    ],
    template: {
      skill: '',
      selfRating: '', // emerging, developing, proficient, advanced
      evidence: '',
      nextSteps: '',
    },
  },

  // Final Phase Protocols
  presentation_prep: {
    id: 'presentation_prep',
    name: 'Presentation Preparation Protocol',
    phase: 'final',
    purpose: 'Prepare students for authentic audience presentations',
    duration: '1-2 class periods',
    icon: 'Presentation',
    color: '#ff6b6b',
    steps: [
      'Audience analysis: Who will be there? What do they care about?',
      'Key messages: What are the 3-5 things they must understand?',
      'Structure: Hook, main points, call to action',
      'Visual aids: Design slides/posters that support, not replace, speaking',
      'Practice: Rehearse with feedback, practice Q&A',
      'Logistics: Room setup, technology check, timing',
    ],
    tips: [
      'Invite authentic audience members (community members, experts)',
      'Help students anticipate questions',
      'Practice handling technology failures gracefully',
      'Build in time for Q&A preparation',
    ],
  },

  celebration_debrief: {
    id: 'celebration_debrief',
    name: 'Celebration & Debrief Protocol',
    phase: 'final',
    purpose: 'Honor the journey and harvest learning for future projects',
    duration: '30-45 minutes',
    icon: 'PartyPopper',
    color: '#26de81',
    steps: [
      'Celebrate: Acknowledge accomplishments and growth',
      'Appreciate: Thank team members and supporters',
      'Reflect: What are you most proud of?',
      'Learn: What would you do differently?',
      'Apply: How will you use what you learned?',
    ],
    activities: [
      'Shout-outs: Students recognize each other\'s contributions',
      'Gallery walk: Display final products',
      'Letter to future students: Advice for next year\'s class',
      'Skills inventory: What new skills did you develop?',
    ],
  },
};

// Protocol categories
export const PROTOCOL_PHASES = {
  launch: ['entry_event', 'rubric_unpacking', 'know_need_to_know'],
  milestone: ['peer_critique', 'tuning_protocol', 'gallery_walk'],
  reflection: ['reflection_journal', 'success_analysis'],
  checkpoint: ['checkpoint_conference', 'self_assessment'],
  final: ['presentation_prep', 'celebration_debrief'],
};

// Helper functions
export const getProtocolById = (id) => PBL_PROTOCOLS[id];

export const getProtocolsByPhase = (phase) => {
  return PROTOCOL_PHASES[phase]?.map(id => PBL_PROTOCOLS[id]) || [];
};

export const getAllProtocols = () => Object.values(PBL_PROTOCOLS);

export const getRecommendedProtocols = (context) => {
  // Returns protocols recommended for a specific context
  switch (context) {
    case 'launch':
      return getProtocolsByPhase('launch');
    case 'milestone':
      return [...getProtocolsByPhase('milestone'), ...getProtocolsByPhase('checkpoint')];
    case 'reflection':
      return getProtocolsByPhase('reflection');
    case 'final':
      return getProtocolsByPhase('final');
    default:
      return getAllProtocols();
  }
};

export default PBL_PROTOCOLS;
