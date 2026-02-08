export const ACTIVITY_TYPES = {
  CODE_PLAYGROUND: {
    id: 'code_playground',
    name: 'Code Playground',
    icon: '💻',
    description: 'Interactive coding environment for hands-on practice',
    mode: 'digital',
    category: 'digital',
    phases: ['explore', 'elaborate'],
    recommended: ['explore', 'elaborate'],
  },
  CHALLENGE_LAB: {
    id: 'challenge_lab',
    name: 'Challenge Lab',
    icon: '🧩',
    description: 'Problem-solving challenges with scaffolded hints',
    mode: 'digital',
    category: 'digital',
    phases: ['explore', 'elaborate', 'evaluate'],
    recommended: ['elaborate', 'evaluate'],
  },
  WORKSHEET: {
    id: 'worksheet',
    name: 'Worksheet',
    icon: '📄',
    description: 'Guided practice with questions and exercises',
    mode: 'non-digital',
    category: 'non-digital',
    phases: ['explain', 'elaborate', 'evaluate'],
    recommended: ['explain'],
  },
  QUIZ: {
    id: 'quiz',
    name: 'Quiz',
    icon: '❓',
    description: 'Assessment with multiple question types',
    mode: 'digital',
    category: 'digital',
    phases: ['evaluate'],
    recommended: ['evaluate'],
  },
  DISCUSSION_PROMPT: {
    id: 'discussion_prompt',
    name: 'Discussion Prompt',
    icon: '💬',
    description: 'Guided discussion for collaborative thinking',
    mode: 'non-digital',
    category: 'non-digital',
    phases: ['engage', 'explain', 'elaborate'],
    recommended: ['engage', 'explain'],
  },
  PREDICTION_POLL: {
    id: 'prediction_poll',
    name: 'Prediction Poll',
    icon: '📊',
    description: 'Students predict outcomes before exploring',
    mode: 'digital',
    category: 'digital',
    phases: ['engage'],
    recommended: ['engage'],
  },
  SIMULATION: {
    id: 'simulation',
    name: 'Simulation',
    icon: '🎮',
    description: 'Interactive simulation to model concepts',
    mode: 'digital',
    category: 'digital',
    phases: ['explore', 'elaborate'],
    recommended: ['explore'],
  },
  MANIPULATIVE: {
    id: 'manipulative',
    name: 'Manipulative Activity',
    icon: '🎴',
    description: 'Hands-on physical materials for learning',
    mode: 'non-digital',
    category: 'non-digital',
    phases: ['engage', 'explore'],
    recommended: ['explore'],
  },
  GROUP_PROJECT: {
    id: 'group_project',
    name: 'Group Project',
    icon: '👥',
    description: 'Collaborative project work in teams',
    mode: 'project',
    category: 'project',
    phases: ['elaborate', 'evaluate'],
    recommended: ['elaborate'],
  },
};

export function getRecommendedActivities(phase) {
  const lowerPhase = phase?.toLowerCase();
  return Object.values(ACTIVITY_TYPES).filter(
    (a) => a.recommended && a.recommended.includes(lowerPhase)
  );
}

export function getAllowedActivities(phase) {
  const lowerPhase = phase?.toLowerCase();
  return Object.values(ACTIVITY_TYPES).filter(
    (a) => a.phases && a.phases.includes(lowerPhase)
  );
}
