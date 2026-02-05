// Cognitive Skills for PBL Units
// These skills form the "connective tissue" of the rubric, assessed across all milestones

export const COGNITIVE_SKILLS = {
  analysis: {
    id: 'analysis',
    name: 'Analysis',
    description: 'Breaking down complex information, identifying patterns, and drawing conclusions',
    color: '#3b82f6', // blue
    icon: 'Search',
    rubricCriteria: {
      emerging: 'Identifies basic information but struggles to see patterns or connections',
      developing: 'Recognizes some patterns and makes basic connections between ideas',
      proficient: 'Consistently identifies patterns and draws logical conclusions from evidence',
      advanced: 'Synthesizes complex information, identifies subtle patterns, and generates insights',
    },
    verbs: ['analyze', 'compare', 'contrast', 'examine', 'investigate', 'categorize'],
  },

  communication: {
    id: 'communication',
    name: 'Communication',
    description: 'Expressing ideas clearly through writing, speaking, and visual media',
    color: '#8b5cf6', // purple
    icon: 'MessageSquare',
    rubricCriteria: {
      emerging: 'Ideas are unclear or disorganized; limited audience awareness',
      developing: 'Ideas are generally clear with some organization; basic audience awareness',
      proficient: 'Ideas are clear, well-organized, and appropriate for the audience',
      advanced: 'Communication is compelling, precisely organized, and highly effective for the audience',
    },
    verbs: ['present', 'explain', 'describe', 'articulate', 'demonstrate', 'illustrate'],
  },

  collaboration: {
    id: 'collaboration',
    name: 'Collaboration',
    description: 'Working effectively with others, sharing responsibility, and building on ideas',
    color: '#10b981', // green
    icon: 'Users',
    rubricCriteria: {
      emerging: 'Minimal contribution to team; difficulty working with others',
      developing: 'Contributes to team but may dominate or withdraw at times',
      proficient: 'Shares responsibility, respects others, and builds on team ideas',
      advanced: 'Elevates team performance; facilitates inclusion and maximizes group potential',
    },
    verbs: ['cooperate', 'contribute', 'negotiate', 'delegate', 'compromise', 'facilitate'],
  },

  creativity: {
    id: 'creativity',
    name: 'Creativity',
    description: 'Generating original ideas, making novel connections, and thinking divergently',
    color: '#f59e0b', // yellow
    icon: 'Lightbulb',
    rubricCriteria: {
      emerging: 'Relies on obvious solutions; minimal originality',
      developing: 'Shows some original thinking but may be limited in scope',
      proficient: 'Generates original ideas and makes novel connections',
      advanced: 'Produces innovative solutions; thinks beyond conventional boundaries',
    },
    verbs: ['design', 'create', 'invent', 'imagine', 'innovate', 'compose'],
  },

  critical_thinking: {
    id: 'critical_thinking',
    name: 'Critical Thinking',
    description: 'Evaluating evidence, questioning assumptions, and making reasoned judgments',
    color: '#ef4444', // red
    icon: 'Brain',
    rubricCriteria: {
      emerging: 'Accepts information at face value; limited questioning',
      developing: 'Questions some assumptions; basic evaluation of evidence',
      proficient: 'Evaluates evidence systematically; identifies bias and limitations',
      advanced: 'Sophisticated evaluation; questions underlying assumptions; nuanced judgment',
    },
    verbs: ['evaluate', 'justify', 'critique', 'assess', 'judge', 'defend'],
  },

  problem_solving: {
    id: 'problem_solving',
    name: 'Problem Solving',
    description: 'Defining problems, developing strategies, and implementing solutions',
    color: '#06b6d4', // cyan
    icon: 'Puzzle',
    rubricCriteria: {
      emerging: 'Difficulty identifying problems; relies on given solutions',
      developing: 'Identifies problems; attempts basic solution strategies',
      proficient: 'Clearly defines problems and develops effective solution strategies',
      advanced: 'Anticipates problems; develops multiple innovative solutions; iterates effectively',
    },
    verbs: ['solve', 'troubleshoot', 'debug', 'optimize', 'strategize', 'implement'],
  },

  self_direction: {
    id: 'self_direction',
    name: 'Self-Direction',
    description: 'Setting goals, managing time, and taking ownership of learning',
    color: '#ec4899', // pink
    icon: 'Compass',
    rubricCriteria: {
      emerging: 'Requires constant guidance; difficulty managing time or tasks',
      developing: 'Works independently with some prompting; basic time management',
      proficient: 'Sets and pursues goals independently; manages time effectively',
      advanced: 'Demonstrates exceptional initiative; seeks challenges; models self-direction',
    },
    verbs: ['plan', 'organize', 'prioritize', 'reflect', 'adapt', 'persevere'],
  },

  research: {
    id: 'research',
    name: 'Research',
    description: 'Finding, evaluating, and synthesizing information from multiple sources',
    color: '#14b8a6', // teal
    icon: 'BookOpen',
    rubricCriteria: {
      emerging: 'Uses limited sources; difficulty evaluating credibility',
      developing: 'Finds relevant sources; basic evaluation of credibility',
      proficient: 'Uses diverse, credible sources; synthesizes information effectively',
      advanced: 'Expertly navigates information landscape; synthesizes complex sources',
    },
    verbs: ['research', 'investigate', 'gather', 'synthesize', 'cite', 'verify'],
  },
};

// Skill categories for organization
export const SKILL_CATEGORIES = {
  thinking: ['analysis', 'critical_thinking', 'problem_solving'],
  interpersonal: ['communication', 'collaboration'],
  intrapersonal: ['creativity', 'self_direction'],
  academic: ['research'],
};

// Helper functions
export const getSkillById = (id) => COGNITIVE_SKILLS[id];

export const getSkillsByCategory = (category) => {
  return SKILL_CATEGORIES[category]?.map(id => COGNITIVE_SKILLS[id]) || [];
};

export const getAllSkills = () => Object.values(COGNITIVE_SKILLS);

export const getSkillColor = (skillId) => COGNITIVE_SKILLS[skillId]?.color || '#6b7280';

export const getSkillsForRubric = (skillIds) => {
  return skillIds.map(id => COGNITIVE_SKILLS[id]).filter(Boolean);
};

// Recommended skill combinations for different project types
export const RECOMMENDED_SKILL_COMBINATIONS = {
  stem: ['analysis', 'problem_solving', 'communication', 'collaboration'],
  humanities: ['research', 'critical_thinking', 'communication', 'creativity'],
  arts: ['creativity', 'communication', 'collaboration', 'self_direction'],
  interdisciplinary: ['analysis', 'collaboration', 'communication', 'problem_solving'],
};

export default COGNITIVE_SKILLS;
