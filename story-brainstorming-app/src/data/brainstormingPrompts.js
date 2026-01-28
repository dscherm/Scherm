// Brainstorming prompts and questions to inspire story ideas

export const storyStarters = [
  {
    id: 'what-if',
    category: 'What If',
    prompts: [
      'What if you woke up and everyone had forgotten who you were?',
      'What if you could hear everyone\'s thoughts for one day?',
      'What if a letter arrived from your future self?',
      'What if magic was real, but only worked when no one was watching?',
      'What if the villain won—what happens next?',
      'What if you discovered your whole life was a simulation?',
      'What if you could undo one decision from your past?',
      'What if animals suddenly started talking?',
      'What if a natural disaster revealed a hidden underground city?',
      'What if two rival families had to work together to survive?'
    ]
  },
  {
    id: 'character-driven',
    category: 'Character-Driven',
    prompts: [
      'A character discovers their mentor has been lying to them all along.',
      'Two strangers are forced to rely on each other in a crisis.',
      'A villain who believes they\'re doing the right thing.',
      'A character must choose between love and duty.',
      'Someone returns home after years away to find everything has changed.',
      'A character inherits something unexpected that changes their life.',
      'Two best friends end up on opposite sides of a conflict.',
      'A character discovers they have powers they can\'t control.',
      'Someone must impersonate another person to survive.',
      'A character learns the person they hate most is family.'
    ]
  },
  {
    id: 'conflict',
    category: 'Conflict Starters',
    prompts: [
      'A secret that could destroy everything comes to light.',
      'Two groups with opposing goals must share limited resources.',
      'A character is accused of a crime they didn\'t commit.',
      'A promise made years ago comes due at the worst possible time.',
      'An outside threat forces enemies to become allies.',
      'A character must betray someone they love to save many others.',
      'The rules of society are challenged by a rebel.',
      'A character\'s success threatens someone else\'s survival.',
      'A misunderstanding escalates into a dangerous situation.',
      'Something precious is stolen, and someone will do anything to get it back.'
    ]
  },
  {
    id: 'setting-driven',
    category: 'Setting-Driven',
    prompts: [
      'A small town with a dark secret everyone protects.',
      'A journey across a dangerous, uncharted landscape.',
      'A city where different social classes never interact—until now.',
      'An isolated location where escape seems impossible.',
      'A world where technology has failed or been banned.',
      'A place that exists between two worlds.',
      'A sanctuary that turns out to be a prison.',
      'A location that changes based on who enters it.',
      'A dying world with one last hope.',
      'A familiar place transformed by an extraordinary event.'
    ]
  }
];

export const genrePrompts = {
  fantasy: {
    name: 'Fantasy',
    questions: [
      'What makes your magic system unique?',
      'What are the costs or limitations of magic?',
      'How does magic affect society and politics?',
      'What mythical creatures exist in your world?',
      'What is the history of magic in your world?'
    ],
    themes: ['Good vs. Evil', 'Coming of Age', 'Power and Responsibility', 'Identity', 'Destiny vs. Choice']
  },
  scifi: {
    name: 'Science Fiction',
    questions: [
      'What technology defines your world?',
      'How has technology changed human society?',
      'What ethical dilemmas does your tech create?',
      'Is faster-than-light travel possible?',
      'What is the relationship between humans and AI?'
    ],
    themes: ['Human vs. Machine', 'Progress and Its Costs', 'Identity', 'Exploration', 'Survival']
  },
  mystery: {
    name: 'Mystery/Thriller',
    questions: [
      'What is the central crime or puzzle?',
      'Who has the means, motive, and opportunity?',
      'What clues will you plant for the reader?',
      'What red herrings will mislead them?',
      'What personal stakes does your detective have?'
    ],
    themes: ['Truth and Justice', 'Appearances vs. Reality', 'Trust', 'Obsession', 'Redemption']
  },
  romance: {
    name: 'Romance',
    questions: [
      'What initially brings your characters together?',
      'What keeps them apart?',
      'What do they each need to learn or change?',
      'What is the moment they realize they\'re in love?',
      'What threatens their relationship?'
    ],
    themes: ['Love Conquers All', 'Self-Discovery', 'Second Chances', 'Sacrifice', 'Belonging']
  },
  horror: {
    name: 'Horror',
    questions: [
      'What is the source of fear in your story?',
      'Is the threat supernatural, human, or psychological?',
      'What makes your protagonist vulnerable?',
      'How do you build dread and tension?',
      'What are the rules of your horror?'
    ],
    themes: ['Survival', 'The Unknown', 'Guilt and Punishment', 'Isolation', 'Loss of Control']
  },
  literary: {
    name: 'Literary Fiction',
    questions: [
      'What theme are you exploring?',
      'How does your protagonist embody this theme?',
      'What symbol or motif recurs throughout?',
      'What internal conflict drives your character?',
      'What truth about life are you revealing?'
    ],
    themes: ['Identity', 'Loss and Grief', 'Family', 'Time', 'Society and Class', 'Human Connection']
  }
};

export const plotQuestions = {
  opening: [
    'What is happening in the opening scene?',
    'What makes readers want to keep reading?',
    'What question does the opening raise?',
    'What mood or tone are you establishing?',
    'What do we learn about the protagonist immediately?'
  ],
  conflict: [
    'What does your protagonist want?',
    'What\'s stopping them from getting it?',
    'What happens if they fail?',
    'What internal conflict mirrors the external conflict?',
    'Who or what is the main source of opposition?'
  ],
  stakes: [
    'What does your protagonist stand to lose?',
    'What do they stand to gain?',
    'Why should readers care about the outcome?',
    'How do the stakes escalate throughout the story?',
    'What makes this situation uniquely difficult for this character?'
  ],
  resolution: [
    'How does your protagonist ultimately succeed or fail?',
    'What sacrifice must they make?',
    'How have they changed by the end?',
    'What is the emotional payoff for readers?',
    'What final image or moment ends the story?'
  ]
};

export const worldBuildingQuestions = [
  'What makes your world different from ours?',
  'What are the rules of your world?',
  'What is the history that shaped this world?',
  'What social structures or hierarchies exist?',
  'What does daily life look like for ordinary people?',
  'What conflicts exist within this world?',
  'What technology or magic exists?',
  'What religions or belief systems exist?',
  'What cultural traditions are important?',
  'What is the geography and climate like?'
];

export const themeQuestions = [
  'What universal truth does your story explore?',
  'What question are you asking readers to consider?',
  'What does your protagonist learn by the end?',
  'What message do you want readers to take away?',
  'How does your plot demonstrate your theme?',
  'What symbols or motifs reinforce your theme?',
  'What opposing viewpoints exist on your theme?',
  'How do different characters represent aspects of your theme?'
];

export const getRandomPrompt = (category) => {
  const categoryData = storyStarters.find(c => c.id === category);
  if (!categoryData) return null;
  const prompts = categoryData.prompts;
  return prompts[Math.floor(Math.random() * prompts.length)];
};

export const getAllCategories = () => storyStarters.map(c => ({ id: c.id, category: c.category }));
