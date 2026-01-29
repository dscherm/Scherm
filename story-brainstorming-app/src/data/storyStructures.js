// Story structure definitions based on classic narrative frameworks

export const storyStructures = {
  freytag: {
    id: 'freytag',
    name: "Freytag's Pyramid",
    description: "Gustav Freytag's classic 5-part dramatic structure, perfect for tragedies and dramas",
    acts: [
      {
        id: 'exposition',
        name: 'Exposition',
        number: 1,
        color: '#22c55e',
        percentage: 15,
        description: 'Introduce the world, characters, and initial situation',
        keyElements: [
          'Setting and world-building',
          'Main character introduction',
          'Normal life before the story begins',
          'Hints at underlying conflict'
        ],
        questions: [
          'Where and when does your story take place?',
          'Who is your protagonist and what is their normal life like?',
          'What does your character want most?',
          'What hints can you drop about the coming conflict?'
        ]
      },
      {
        id: 'rising-action',
        name: 'Rising Action',
        number: 2,
        color: '#f59e0b',
        percentage: 30,
        description: 'Conflicts and complications build toward the climax',
        keyElements: [
          'Inciting incident that disrupts the status quo',
          'Escalating conflicts and obstacles',
          'Character development through challenges',
          'Stakes continue to rise'
        ],
        questions: [
          'What event disrupts your character\'s normal life?',
          'What obstacles does your protagonist face?',
          'How does each challenge change your character?',
          'What allies and enemies emerge?'
        ]
      },
      {
        id: 'climax',
        name: 'Climax',
        number: 3,
        color: '#ef4444',
        percentage: 10,
        description: 'The turning point - highest tension and dramatic peak',
        keyElements: [
          'Point of no return',
          'Maximum tension and conflict',
          'Critical decision or revelation',
          'Everything changes'
        ],
        questions: [
          'What is the moment of greatest tension?',
          'What critical choice must your character make?',
          'What truth is revealed at this moment?',
          'How does this moment change everything?'
        ]
      },
      {
        id: 'falling-action',
        name: 'Falling Action',
        number: 4,
        color: '#8b5cf6',
        percentage: 30,
        description: 'Consequences unfold as the story moves toward resolution',
        keyElements: [
          'Consequences of the climax',
          'Loose ends being tied up',
          'Character reflection',
          'Movement toward resolution'
        ],
        questions: [
          'What are the immediate consequences of the climax?',
          'How do characters react to the change?',
          'What remaining conflicts need resolution?',
          'Is there a final twist or reversal?'
        ]
      },
      {
        id: 'denouement',
        name: 'Denouement',
        number: 5,
        color: '#3b82f6',
        percentage: 15,
        description: 'Resolution and the new normal',
        keyElements: [
          'Final resolution of conflicts',
          'New status quo established',
          'Character transformation complete',
          'Emotional closure'
        ],
        questions: [
          'How has your protagonist changed?',
          'What is the new normal for your characters?',
          'What final image or moment ends your story?',
          'What theme or message is reinforced?'
        ]
      }
    ]
  },

  threeAct: {
    id: 'threeAct',
    name: 'Three-Act Structure',
    description: 'The most common Western story structure, used in film and novels',
    acts: [
      {
        id: 'act-1',
        name: 'Act 1: Setup',
        number: 1,
        color: '#22c55e',
        percentage: 25,
        description: 'Establish the world, characters, and the central conflict',
        keyElements: [
          'Opening hook',
          'Character introduction and ordinary world',
          'Inciting incident',
          'First plot point / Call to adventure'
        ],
        questions: [
          'What grabs the reader\'s attention immediately?',
          'Who is your protagonist in their ordinary world?',
          'What event disrupts their normal life?',
          'What drives your protagonist into Act 2?'
        ]
      },
      {
        id: 'act-2',
        name: 'Act 2: Confrontation',
        number: 2,
        color: '#f59e0b',
        percentage: 50,
        description: 'The protagonist faces escalating obstacles and grows',
        keyElements: [
          'Rising stakes and obstacles',
          'Midpoint reversal or revelation',
          'Character development and testing',
          'All seems lost moment',
          'Second plot point leading to Act 3'
        ],
        questions: [
          'What obstacles challenge your protagonist?',
          'What happens at the midpoint that changes everything?',
          'How does your character grow through trials?',
          'What is your "all is lost" moment?',
          'What drives the story into the final act?'
        ]
      },
      {
        id: 'act-3',
        name: 'Act 3: Resolution',
        number: 3,
        color: '#ef4444',
        percentage: 25,
        description: 'Climax and resolution of the central conflict',
        keyElements: [
          'Build to climax',
          'Final confrontation',
          'Climax - decisive moment',
          'Resolution and new equilibrium',
          'Final image'
        ],
        questions: [
          'How do all story threads converge?',
          'What is the final confrontation?',
          'How does your protagonist triumph or fail?',
          'What does the new normal look like?',
          'What final image resonates with readers?'
        ]
      }
    ]
  },

  fiveAct: {
    id: 'fiveAct',
    name: 'Five-Act Structure',
    description: 'Classical dramatic structure, ideal for plays and complex narratives',
    acts: [
      {
        id: 'act-1',
        name: 'Act 1: Exposition',
        number: 1,
        color: '#22c55e',
        percentage: 15,
        description: 'Introduction of setting, characters, and initial conflict',
        keyElements: [
          'World and tone establishment',
          'Character introductions',
          'Background information',
          'Initial conflict seeds'
        ],
        questions: [
          'What world are we entering?',
          'Who are your key characters?',
          'What is the initial status quo?',
          'What tensions simmer beneath the surface?'
        ]
      },
      {
        id: 'act-2',
        name: 'Act 2: Rising Action',
        number: 2,
        color: '#f59e0b',
        percentage: 20,
        description: 'Conflict develops and complications arise',
        keyElements: [
          'Inciting incident aftermath',
          'Protagonist commits to goal',
          'New characters and subplots',
          'Stakes established'
        ],
        questions: [
          'How does your protagonist respond to the inciting incident?',
          'What goal do they commit to?',
          'What complications arise?',
          'Who helps or hinders them?'
        ]
      },
      {
        id: 'act-3',
        name: 'Act 3: Climax',
        number: 3,
        color: '#ef4444',
        percentage: 30,
        description: 'The turning point and moment of highest tension',
        keyElements: [
          'Maximum conflict',
          'Critical decision',
          'Point of no return',
          'Revelation or reversal'
        ],
        questions: [
          'What is the moment of greatest conflict?',
          'What choice defines your protagonist?',
          'What truth is revealed?',
          'How does this change everything?'
        ]
      },
      {
        id: 'act-4',
        name: 'Act 4: Falling Action',
        number: 4,
        color: '#8b5cf6',
        percentage: 20,
        description: 'Consequences and movement toward resolution',
        keyElements: [
          'Aftermath of climax',
          'Character reactions',
          'Subplots resolving',
          'Final obstacles'
        ],
        questions: [
          'What are the consequences of the climax?',
          'How do characters deal with the change?',
          'What final obstacles remain?',
          'Is there a final twist?'
        ]
      },
      {
        id: 'act-5',
        name: 'Act 5: Denouement',
        number: 5,
        color: '#3b82f6',
        percentage: 15,
        description: 'Resolution and conclusion',
        keyElements: [
          'Final resolution',
          'Character fates revealed',
          'Theme reinforced',
          'Closure achieved'
        ],
        questions: [
          'How are all plot threads resolved?',
          'What happens to each character?',
          'What is the final message?',
          'What emotional note do you end on?'
        ]
      }
    ]
  },

  sevenAct: {
    id: 'sevenAct',
    name: 'Seven-Act Structure',
    description: 'Extended structure for epic narratives and series, with detailed beat mapping',
    acts: [
      {
        id: 'hook',
        name: 'Act 1: The Hook',
        number: 1,
        color: '#22c55e',
        percentage: 8,
        description: 'Grab attention and establish the tone',
        keyElements: [
          'Opening hook that grabs attention',
          'Tone and genre established',
          'Protagonist in their world',
          'Question or mystery posed'
        ],
        questions: [
          'What grabs the reader in the first scene?',
          'What tone are you setting?',
          'What question makes readers want to continue?',
          'What makes your protagonist interesting?'
        ]
      },
      {
        id: 'setup',
        name: 'Act 2: The Setup',
        number: 2,
        color: '#10b981',
        percentage: 12,
        description: 'Establish the world and what\'s at stake',
        keyElements: [
          'World-building details',
          'Character relationships',
          'Stakes establishment',
          'Foreshadowing'
        ],
        questions: [
          'What rules govern your world?',
          'Who are the important relationships?',
          'What could be lost?',
          'What hints at what\'s to come?'
        ]
      },
      {
        id: 'first-plot-point',
        name: 'Act 3: First Plot Point',
        number: 3,
        color: '#f59e0b',
        percentage: 15,
        description: 'The event that changes everything',
        keyElements: [
          'Inciting incident',
          'Point of no return',
          'Protagonist\'s decision',
          'New direction established'
        ],
        questions: [
          'What event disrupts the status quo?',
          'Why can\'t the protagonist go back?',
          'What choice do they make?',
          'What is the new goal?'
        ]
      },
      {
        id: 'midpoint',
        name: 'Act 4: The Midpoint',
        number: 4,
        color: '#ef4444',
        percentage: 20,
        description: 'Major reversal or revelation that shifts the story',
        keyElements: [
          'False victory or defeat',
          'Major revelation',
          'Shift in protagonist\'s approach',
          'Stakes raised dramatically'
        ],
        questions: [
          'What changes at the midpoint?',
          'What does the protagonist learn?',
          'How does their approach shift?',
          'What raises the stakes?'
        ]
      },
      {
        id: 'second-plot-point',
        name: 'Act 5: Second Plot Point',
        number: 5,
        color: '#ec4899',
        percentage: 15,
        description: 'The dark night of the soul',
        keyElements: [
          'All seems lost',
          'Protagonist\'s low point',
          'Final piece of the puzzle',
          'Decision to push forward'
        ],
        questions: [
          'What is your protagonist\'s lowest moment?',
          'What have they lost?',
          'What gives them hope or resolve?',
          'What final piece do they need?'
        ]
      },
      {
        id: 'climax',
        name: 'Act 6: The Climax',
        number: 6,
        color: '#8b5cf6',
        percentage: 18,
        description: 'The final confrontation and decisive moment',
        keyElements: [
          'Final battle or confrontation',
          'Everything at stake',
          'Protagonist\'s transformation complete',
          'Decisive action'
        ],
        questions: [
          'What is the final confrontation?',
          'How has your protagonist grown?',
          'What sacrifice must be made?',
          'How do they succeed or fail?'
        ]
      },
      {
        id: 'resolution',
        name: 'Act 7: The Resolution',
        number: 7,
        color: '#3b82f6',
        percentage: 12,
        description: 'Wrap up and the new world',
        keyElements: [
          'Consequences shown',
          'Character fates',
          'New equilibrium',
          'Final image or moment'
        ],
        questions: [
          'What is the aftermath?',
          'Where do your characters end up?',
          'What has changed in the world?',
          'What final moment resonates?'
        ]
      }
    ]
  }
};

export const getStructureById = (id) => storyStructures[id] || storyStructures.threeAct;

export const structureList = Object.values(storyStructures).map(s => ({
  id: s.id,
  name: s.name,
  description: s.description,
  actCount: s.acts.length
}));
