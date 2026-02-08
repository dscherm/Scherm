export const COGNITIVE_SKILLS = {
  analysis: {
    name: 'Analysis',
    description: 'Breaking down complex information into parts, examining relationships and patterns',
    color: '#3b82f6',
    rubricCriteria: {
      emerging: 'Identifies basic facts but struggles to break down complex information',
      developing: 'Can identify parts of a problem and some relationships between them',
      proficient: 'Breaks down complex problems systematically, identifies patterns and relationships',
      advanced: 'Synthesizes analysis across multiple sources, identifies subtle patterns and implications',
    },
  },
  communication: {
    name: 'Communication',
    description: 'Expressing ideas clearly through writing, speaking, and visual media',
    color: '#8b5cf6',
    rubricCriteria: {
      emerging: 'Shares ideas but lacks clarity or organization',
      developing: 'Communicates main ideas with some supporting details',
      proficient: 'Presents ideas clearly with evidence, adapts to audience',
      advanced: 'Compelling communication that persuades and inspires, uses multiple modalities effectively',
    },
  },
  collaboration: {
    name: 'Collaboration',
    description: 'Working effectively with others, managing conflict, and building on diverse perspectives',
    color: '#06b6d4',
    rubricCriteria: {
      emerging: 'Participates when prompted but relies on others to lead',
      developing: "Contributes to group work and listens to others' ideas",
      proficient: "Takes initiative, builds on others' ideas, manages disagreements constructively",
      advanced: 'Facilitates group productivity, leverages team strengths, mentors peers',
    },
  },
  creativity: {
    name: 'Creativity',
    description: 'Generating original ideas, making unexpected connections, and thinking divergently',
    color: '#f59e0b',
    rubricCriteria: {
      emerging: 'Reproduces existing ideas with minimal variation',
      developing: 'Generates some original ideas when prompted',
      proficient: 'Produces novel solutions and makes unexpected connections between concepts',
      advanced: "Consistently innovates, takes creative risks, and inspires others' creativity",
    },
  },
  critical_thinking: {
    name: 'Critical Thinking',
    description: 'Evaluating evidence, reasoning logically, and questioning assumptions',
    color: '#ef4444',
    rubricCriteria: {
      emerging: 'Accepts information at face value without questioning',
      developing: 'Identifies some biases and evaluates basic claims',
      proficient: 'Evaluates evidence quality, identifies logical fallacies, questions assumptions',
      advanced: 'Constructs well-reasoned arguments, anticipates counterarguments, evaluates complex systems',
    },
  },
  problem_solving: {
    name: 'Problem Solving',
    description: 'Defining problems, generating solutions, and iterating based on feedback',
    color: '#10b981',
    rubricCriteria: {
      emerging: 'Identifies that a problem exists but needs guidance to define it',
      developing: 'Defines problems and proposes one or two solutions',
      proficient: 'Systematically defines problems, generates multiple solutions, tests and iterates',
      advanced: 'Tackles ambiguous problems, designs elegant solutions, transfers strategies to new contexts',
    },
  },
  self_direction: {
    name: 'Self-Direction',
    description: 'Setting goals, managing time, reflecting on learning, and persisting through challenges',
    color: '#ec4899',
    rubricCriteria: {
      emerging: 'Needs frequent reminders to stay on task and meet deadlines',
      developing: 'Sets basic goals and manages time with some support',
      proficient: 'Sets meaningful goals, manages time independently, reflects on progress',
      advanced: 'Drives own learning, seeks feedback proactively, adapts strategies based on reflection',
    },
  },
  research: {
    name: 'Research',
    description: 'Finding, evaluating, and synthesizing information from multiple sources',
    color: '#6366f1',
    rubricCriteria: {
      emerging: 'Uses limited sources without evaluating credibility',
      developing: 'Finds relevant sources and identifies basic credibility indicators',
      proficient: 'Uses diverse, credible sources and synthesizes information across them',
      advanced: 'Conducts original research, triangulates sources, identifies gaps in existing knowledge',
    },
  },
};

export const SKILL_CATEGORIES = {
  thinking: ['analysis', 'critical_thinking', 'problem_solving', 'creativity'],
  interpersonal: ['communication', 'collaboration'],
  intrapersonal: ['self_direction', 'research'],
};

export function getSkillById(skillId) {
  return COGNITIVE_SKILLS[skillId] || null;
}
