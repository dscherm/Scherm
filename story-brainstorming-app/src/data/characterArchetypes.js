// Character archetypes and building blocks for story development

export const characterRoles = [
  {
    id: 'protagonist',
    name: 'Protagonist',
    description: 'The main character driving the story forward',
    color: '#22c55e'
  },
  {
    id: 'antagonist',
    name: 'Antagonist',
    description: 'The main opposition to the protagonist',
    color: '#ef4444'
  },
  {
    id: 'mentor',
    name: 'Mentor',
    description: 'A guide who helps the protagonist grow',
    color: '#3b82f6'
  },
  {
    id: 'sidekick',
    name: 'Sidekick/Ally',
    description: 'A loyal companion to the protagonist',
    color: '#f59e0b'
  },
  {
    id: 'love-interest',
    name: 'Love Interest',
    description: 'A romantic connection for the protagonist',
    color: '#ec4899'
  },
  {
    id: 'trickster',
    name: 'Trickster',
    description: 'A character who uses wit and deception',
    color: '#8b5cf6'
  },
  {
    id: 'herald',
    name: 'Herald',
    description: 'Announces change or the call to adventure',
    color: '#06b6d4'
  },
  {
    id: 'shapeshifter',
    name: 'Shapeshifter',
    description: 'A character whose loyalty is unclear',
    color: '#64748b'
  },
  {
    id: 'threshold-guardian',
    name: 'Threshold Guardian',
    description: 'Tests the protagonist before major challenges',
    color: '#84cc16'
  },
  {
    id: 'shadow',
    name: 'Shadow',
    description: 'Represents the protagonist\'s dark side',
    color: '#1e293b'
  },
  {
    id: 'supporting',
    name: 'Supporting Character',
    description: 'Helps fill out the world and story',
    color: '#94a3b8'
  }
];

export const characterArchetypes = [
  {
    id: 'hero',
    name: 'The Hero',
    description: 'Courageous and willing to sacrifice for others',
    strengths: ['Courage', 'Determination', 'Honor'],
    weaknesses: ['Arrogance', 'Self-doubt', 'Martyrdom'],
    examples: ['Harry Potter', 'Frodo Baggins', 'Katniss Everdeen']
  },
  {
    id: 'caregiver',
    name: 'The Caregiver',
    description: 'Nurturing and protective of others',
    strengths: ['Compassion', 'Generosity', 'Patience'],
    weaknesses: ['Self-neglect', 'Enabling', 'Martyrdom'],
    examples: ['Samwise Gamgee', 'Mary Poppins', 'Marge Simpson']
  },
  {
    id: 'explorer',
    name: 'The Explorer',
    description: 'Seeks new experiences and self-discovery',
    strengths: ['Curiosity', 'Independence', 'Ambition'],
    weaknesses: ['Restlessness', 'Alienation', 'Perfectionism'],
    examples: ['Indiana Jones', 'Moana', 'Bilbo Baggins']
  },
  {
    id: 'rebel',
    name: 'The Rebel/Outlaw',
    description: 'Questions authority and breaks rules',
    strengths: ['Independence', 'Bravery', 'Conviction'],
    weaknesses: ['Lawlessness', 'Self-destruction', 'Alienation'],
    examples: ['Robin Hood', 'Han Solo', 'V from V for Vendetta']
  },
  {
    id: 'lover',
    name: 'The Lover',
    description: 'Driven by passion and connection',
    strengths: ['Passion', 'Appreciation', 'Commitment'],
    weaknesses: ['Obsession', 'Jealousy', 'Loss of identity'],
    examples: ['Romeo', 'Elizabeth Bennet', 'Jack from Titanic']
  },
  {
    id: 'creator',
    name: 'The Creator',
    description: 'Imaginative and builds new things',
    strengths: ['Creativity', 'Vision', 'Self-expression'],
    weaknesses: ['Perfectionism', 'Self-doubt', 'Impracticality'],
    examples: ['Victor Frankenstein', 'Tony Stark', 'Willy Wonka']
  },
  {
    id: 'jester',
    name: 'The Jester',
    description: 'Uses humor and lives in the moment',
    strengths: ['Joy', 'Humor', 'Cleverness'],
    weaknesses: ['Frivolity', 'Cruelty', 'Irresponsibility'],
    examples: ['The Genie', 'Deadpool', 'Jack Sparrow']
  },
  {
    id: 'sage',
    name: 'The Sage/Mentor',
    description: 'Seeks truth and shares wisdom',
    strengths: ['Wisdom', 'Knowledge', 'Guidance'],
    weaknesses: ['Disconnection', 'Arrogance', 'Passivity'],
    examples: ['Gandalf', 'Dumbledore', 'Yoda']
  },
  {
    id: 'magician',
    name: 'The Magician',
    description: 'Transforms reality and makes dreams come true',
    strengths: ['Vision', 'Charisma', 'Power'],
    weaknesses: ['Manipulation', 'Corruption', 'Arrogance'],
    examples: ['Merlin', 'Doctor Strange', 'Morpheus']
  },
  {
    id: 'ruler',
    name: 'The Ruler',
    description: 'Seeks control and creates order',
    strengths: ['Leadership', 'Responsibility', 'Power'],
    weaknesses: ['Tyranny', 'Rigidity', 'Suspicion'],
    examples: ['King Arthur', 'Miranda Priestly', 'T\'Challa']
  },
  {
    id: 'innocent',
    name: 'The Innocent',
    description: 'Optimistic and sees the good in everything',
    strengths: ['Faith', 'Optimism', 'Honesty'],
    weaknesses: ['Naivety', 'Denial', 'Vulnerability'],
    examples: ['Dorothy', 'Forrest Gump', 'Buddy the Elf']
  },
  {
    id: 'everyman',
    name: 'The Everyman',
    description: 'Relatable and seeks belonging',
    strengths: ['Reliability', 'Empathy', 'Groundedness'],
    weaknesses: ['Lack of power', 'Conformity', 'Mediocrity'],
    examples: ['Bilbo Baggins', 'Peter Parker', 'John McClane']
  }
];

export const characterQuestions = {
  basic: [
    'What is your character\'s full name? Any nicknames?',
    'How old is your character?',
    'What do they look like? Any distinguishing features?',
    'What is their voice like? How do they speak?',
    'What are their mannerisms and habits?'
  ],
  background: [
    'Where did your character grow up?',
    'What was their family like?',
    'What key events shaped who they are?',
    'What is their greatest achievement before the story?',
    'What is their biggest regret?'
  ],
  psychology: [
    'What is your character\'s greatest fear?',
    'What do they want more than anything?',
    'What do they need (even if they don\'t know it)?',
    'What is their fatal flaw?',
    'What are they most proud of about themselves?'
  ],
  motivation: [
    'What is your character\'s main goal in the story?',
    'What is standing in their way?',
    'What will they sacrifice to achieve their goal?',
    'What line will they never cross?',
    'How do they justify their actions?'
  ],
  relationships: [
    'Who is the most important person in their life?',
    'Who do they trust completely?',
    'Who do they clash with and why?',
    'What kind of first impression do they make?',
    'How do they handle conflict with others?'
  ],
  growth: [
    'What does your character believe at the start of the story?',
    'What truth do they need to learn?',
    'What will they be like at the end of the story?',
    'What moment will change them the most?',
    'What theme does their arc represent?'
  ]
};

export const characterTraits = {
  positive: [
    'Brave', 'Loyal', 'Honest', 'Compassionate', 'Intelligent',
    'Creative', 'Determined', 'Patient', 'Humble', 'Generous',
    'Resourceful', 'Charismatic', 'Empathetic', 'Optimistic', 'Witty'
  ],
  negative: [
    'Arrogant', 'Jealous', 'Impulsive', 'Stubborn', 'Manipulative',
    'Cowardly', 'Selfish', 'Cynical', 'Reckless', 'Vindictive',
    'Insecure', 'Obsessive', 'Dishonest', 'Impatient', 'Cruel'
  ],
  neutral: [
    'Ambitious', 'Reserved', 'Analytical', 'Competitive', 'Skeptical',
    'Passionate', 'Independent', 'Perfectionist', 'Mysterious', 'Traditional',
    'Unconventional', 'Pragmatic', 'Idealistic', 'Stoic', 'Dramatic'
  ]
};

export const getArchetypeById = (id) => characterArchetypes.find(a => a.id === id);
export const getRoleById = (id) => characterRoles.find(r => r.id === id);
