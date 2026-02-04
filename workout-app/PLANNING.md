# Workout App - Implementation Plan

## Overview

A sleek, modern workout planning application that generates personalized weekly workout plans, tracks progress, and adapts future plans based on user performance.

## Key Features

1. **Exercise Diagrams/GIFs** - Button selector next to workout name to display animated exercise demonstrations
2. **Weekly Workout Plan Generator** - Creates plans based on user preferences (days/week, workout types, equipment)
3. **Daily Workout Lists** - Detailed exercise lists with sets, reps, and rest periods
4. **Progress Tracking** - Track weights, reps, workout duration, and completion rates
5. **Workout Tips** - Contextual tips for form, breathing, and common mistakes
6. **Adaptive Planning** - Uses weekly progress to adjust next week's plan (progressive overload, recovery)

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Framework |
| Vite | 5.0.0 | Build Tool |
| TypeScript | 5.3.0 | Type Safety |
| Zustand | 4.4.7 | State Management |
| Tailwind CSS | 3.4.0 | Styling |
| React Router | 6.21.0 | Routing |
| Lucide React | 0.294.0 | Icons |
| Recharts | 2.10.0 | Charts (for progress) |

---

## Project Structure

```
workout-app/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── components/
    │   ├── common/
    │   │   ├── Layout.tsx
    │   │   ├── Sidebar.tsx
    │   │   ├── Header.tsx
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   ├── Modal.tsx
    │   │   ├── ProgressBar.tsx
    │   │   └── index.ts
    │   ├── exercises/
    │   │   ├── ExerciseCard.tsx
    │   │   ├── ExerciseDiagramModal.tsx
    │   │   ├── ExerciseList.tsx
    │   │   ├── ExerciseTips.tsx
    │   │   └── index.ts
    │   ├── workout/
    │   │   ├── DailyWorkout.tsx
    │   │   ├── WorkoutTimer.tsx
    │   │   ├── ExerciseTracker.tsx
    │   │   ├── SetLogger.tsx
    │   │   └── index.ts
    │   ├── planner/
    │   │   ├── WeeklyPlanGenerator.tsx
    │   │   ├── WorkoutPreferences.tsx
    │   │   ├── WeeklyCalendar.tsx
    │   │   ├── DayCard.tsx
    │   │   └── index.ts
    │   ├── progress/
    │   │   ├── ProgressDashboard.tsx
    │   │   ├── WeeklyStats.tsx
    │   │   ├── ExerciseHistory.tsx
    │   │   ├── ProgressChart.tsx
    │   │   └── index.ts
    │   └── adaptive/
    │       ├── AdaptiveRecommendations.tsx
    │       ├── RecoveryIndicator.tsx
    │       ├── ProgressiveOverloadSuggestions.tsx
    │       └── index.ts
    ├── data/
    │   ├── exercises/
    │   │   ├── strength.ts
    │   │   ├── endurance.ts
    │   │   ├── flexibility.ts
    │   │   ├── hiit.ts
    │   │   └── index.ts
    │   ├── workoutTemplates.ts
    │   ├── tips.ts
    │   └── muscleGroups.ts
    ├── hooks/
    │   ├── useWorkout.ts
    │   ├── useProgress.ts
    │   ├── useAdaptivePlanning.ts
    │   └── index.ts
    ├── store/
    │   ├── workoutStore.ts
    │   ├── planStore.ts
    │   ├── progressStore.ts
    │   ├── settingsStore.ts
    │   └── index.ts
    ├── types/
    │   ├── exercise.ts
    │   ├── workout.ts
    │   ├── plan.ts
    │   ├── progress.ts
    │   └── index.ts
    └── utils/
        ├── planGenerator.ts
        ├── progressCalculator.ts
        ├── adaptiveAlgorithm.ts
        └── index.ts
```

---

## Data Models

### Exercise Type

```typescript
export type MuscleGroup =
  | 'chest' | 'back' | 'shoulders' | 'biceps' | 'triceps'
  | 'forearms' | 'core' | 'quadriceps' | 'hamstrings'
  | 'glutes' | 'calves' | 'full-body';

export type WorkoutCategory =
  | 'strength' | 'endurance' | 'flexibility' | 'hiit' | 'cardio' | 'mobility';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface ExerciseMedia {
  type: 'gif' | 'image' | 'video';
  url: string;
  thumbnail?: string;
}

export interface ExerciseTip {
  id: string;
  category: 'form' | 'breathing' | 'common-mistakes' | 'progression' | 'modification';
  content: string;
  importance: 'critical' | 'important' | 'helpful';
}

export interface Exercise {
  id: string;
  name: string;
  category: WorkoutCategory;
  muscleGroups: {
    primary: MuscleGroup[];
    secondary: MuscleGroup[];
  };
  difficulty: Difficulty;
  equipment: string[];
  description: string;
  instructions: string[];
  media: ExerciseMedia[];
  tips: ExerciseTip[];
  defaultSets: number;
  defaultReps: string;
  defaultRestSeconds: number;
  caloriesPerMinute: number;
  tags: string[];
}
```

### Workout & Completed Workout

```typescript
export interface WorkoutExercise {
  exerciseId: string;
  exercise: Exercise;
  targetSets: number;
  targetReps: string;
  targetWeight?: number;
  restSeconds: number;
  notes?: string;
  order: number;
}

export interface Workout {
  id: string;
  name: string;
  category: WorkoutCategory;
  description: string;
  targetMuscleGroups: MuscleGroup[];
  exercises: WorkoutExercise[];
  estimatedDurationMinutes: number;
  difficulty: Difficulty;
  warmupIncluded: boolean;
  cooldownIncluded: boolean;
}

export interface CompletedSet {
  setNumber: number;
  reps: number;
  weight?: number;
  duration?: number;
  rpe?: number; // Rate of Perceived Exertion 1-10
  completedAt: string;
}

export interface CompletedExercise {
  exerciseId: string;
  sets: CompletedSet[];
  notes?: string;
  skipped: boolean;
}

export interface CompletedWorkout {
  id: string;
  workoutId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalDurationMinutes: number;
  exercises: CompletedExercise[];
  overallRpe?: number;
  notes?: string;
  mood?: 'great' | 'good' | 'okay' | 'tired' | 'exhausted';
}
```

### Weekly Plan

```typescript
export interface UserPreferences {
  daysPerWeek: number;
  preferredWorkoutTypes: WorkoutCategory[];
  fitnessLevel: Difficulty;
  availableEquipment: string[];
  workoutDurationMinutes: number;
  excludedExercises: string[];
  goals: ('strength' | 'muscle-gain' | 'weight-loss' | 'endurance' | 'flexibility')[];
}

export interface PlannedDay {
  dayOfWeek: number; // 0 = Sunday
  isRestDay: boolean;
  workout?: Workout;
  focusAreas?: string[];
}

export interface WeeklyPlan {
  id: string;
  weekNumber: number;
  weekStartDate: string;
  days: PlannedDay[];
  createdAt: string;
  basedOnPreferences: UserPreferences;
  adaptiveAdjustments?: AdaptiveAdjustment[];
}

export interface AdaptiveAdjustment {
  type: 'volume-increase' | 'volume-decrease' | 'intensity-increase' |
        'intensity-decrease' | 'recovery-day' | 'exercise-swap';
  reason: string;
  appliedTo?: string;
  details: string;
}
```

### Progress Tracking

```typescript
export interface ExerciseProgress {
  exerciseId: string;
  exerciseName: string;
  history: ExerciseHistoryEntry[];
  personalBests: {
    maxWeight?: number;
    maxReps?: number;
    maxVolume?: number;
    bestTime?: number;
  };
}

export interface WeeklyStats {
  weekStartDate: string;
  totalWorkouts: number;
  totalDurationMinutes: number;
  totalVolume: number;
  muscleGroupDistribution: Record<MuscleGroup, number>;
  categoryDistribution: Record<WorkoutCategory, number>;
  averageRpe: number;
  completionRate: number;
}

export interface ProgressMetrics {
  currentStreak: number;
  longestStreak: number;
  totalWorkoutsCompleted: number;
  totalMinutesWorkedOut: number;
  weeklyStats: WeeklyStats[];
  exerciseProgress: Record<string, ExerciseProgress>;
  achievements: Achievement[];
}
```

---

## Store Architecture

### workoutStore.ts - Active Workout State

```typescript
interface WorkoutStore {
  // Active workout state
  activeWorkout: Workout | null;
  currentExerciseIndex: number;
  currentSetIndex: number;
  workoutStartTime: string | null;
  completedExercises: CompletedExercise[];

  // Timer state
  isTimerRunning: boolean;
  restTimeRemaining: number;

  // UI state
  showDiagramModal: boolean;
  selectedExerciseId: string | null;

  // Actions
  startWorkout: (workout: Workout) => void;
  completeWorkout: () => CompletedWorkout;
  cancelWorkout: () => void;
  logSet: (set: CompletedSet) => void;
  skipExercise: () => void;
  nextExercise: () => void;
  openDiagramModal: (exerciseId: string) => void;
  closeDiagramModal: () => void;
}
```

### planStore.ts - Weekly Plan Management

```typescript
interface PlanStore {
  currentPlan: WeeklyPlan | null;
  planHistory: WeeklyPlan[];
  preferences: UserPreferences;

  todaysWorkout: () => PlannedDay | null;
  generateNewPlan: (preferences: UserPreferences) => void;
  regenerateDay: (dayIndex: number) => void;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  swapWorkout: (dayIndex: number, newWorkout: Workout) => void;
}
```

### progressStore.ts - Progress Tracking

```typescript
interface ProgressStore {
  completedWorkouts: CompletedWorkout[];
  metrics: ProgressMetrics;

  getWeeklyStats: (weekStartDate: string) => WeeklyStats;
  getExerciseHistory: (exerciseId: string) => ExerciseHistoryEntry[];
  recordWorkout: (workout: CompletedWorkout) => void;
  recalculateMetrics: () => void;
  checkAchievements: () => Achievement[];
}
```

---

## Key Components

### ExerciseCard Component

Displays a single exercise with:
- Exercise name with info button (opens diagram modal)
- Target sets/reps display
- Muscle group indicators with color coding
- Category badge (strength=purple, cardio=green, etc.)

### ExerciseDiagramModal Component

Full-screen modal containing:
- Large GIF/image display with zoom capability
- Step-by-step instructions list
- Tips organized by category tabs (Form, Breathing, Common Mistakes)
- "Got it" close button

### DailyWorkout Component

Active workout view with:
- Progress header (e.g., "Exercise 3 of 8")
- Current exercise card (prominently displayed)
- Set logger with weight/reps inputs
- Rest timer countdown
- Quick exercise info button
- Next/Previous/Skip navigation

### WeeklyPlanGenerator Component

Multi-step wizard:
1. Days selection (1-7)
2. Workout types (multi-select)
3. Fitness level
4. Equipment available
5. Goals
6. Plan preview with regenerate option

### ProgressDashboard Component

Dashboard with:
- Weekly stats cards (workouts, duration, volume)
- Current streak display
- Exercise progress charts
- Personal records section
- Achievement badges

---

## Plan Generation Algorithm

### Muscle Group Split Logic

```typescript
function determineSplit(daysPerWeek: number): string[] {
  switch (daysPerWeek) {
    case 1:
      return ['full-body'];
    case 2:
      return ['full-body', 'full-body'];
    case 3:
      return ['push', 'pull', 'legs'];
    case 4:
      return ['upper', 'lower', 'upper', 'lower'];
    case 5:
      return ['push', 'pull', 'legs', 'upper', 'lower'];
    case 6:
      return ['push', 'pull', 'legs', 'push', 'pull', 'legs'];
    case 7:
      return ['chest', 'back', 'shoulders', 'arms', 'legs', 'core', 'cardio'];
    default:
      return ['full-body'];
  }
}
```

### Exercise Selection

1. Filter exercises by category and equipment availability
2. Match muscle groups to the day's focus
3. Balance compound and isolation movements
4. Ensure appropriate difficulty level
5. Apply volume based on user goals

---

## Adaptive Planning Algorithm

### Inputs Analyzed

1. **Completion Rate** - % of planned workouts completed
2. **RPE Trends** - Average perceived exertion over time
3. **Volume Progression** - Weight × Reps × Sets trends
4. **Rest Days** - Actual vs planned recovery
5. **Personal Records** - Recent PRs indicate readiness for progression

### Adaptation Rules

```typescript
function generateAdaptations(lastWeekStats: WeeklyStats): AdaptiveAdjustment[] {
  const adjustments: AdaptiveAdjustment[] = [];

  // Rule 1: Low completion → reduce volume
  if (lastWeekStats.completionRate < 0.7) {
    adjustments.push({
      type: 'volume-decrease',
      reason: 'Completion rate below 70%',
      details: 'Reducing sets by 1 per exercise'
    });
  }

  // Rule 2: High RPE → add recovery
  if (lastWeekStats.averageRpe > 8.5) {
    adjustments.push({
      type: 'recovery-day',
      reason: 'High average RPE indicates fatigue',
      details: 'Adding extra rest day mid-week'
    });
  }

  // Rule 3: Consistent completion → progressive overload
  if (lastWeekStats.completionRate > 0.9 && lastWeekStats.averageRpe < 7) {
    adjustments.push({
      type: 'intensity-increase',
      reason: 'Ready for progression',
      details: 'Suggesting 5% weight increase or +2 reps'
    });
  }

  return adjustments;
}
```

---

## UI/UX Flows

### First-Time Setup Flow

```
1. Welcome Screen
   → "Let's build your personalized workout plan"

2. Days Selection
   → "How many days can you work out?"
   → Interactive 1-7 day selector

3. Workout Types
   → "What types of workouts interest you?"
   → Checkboxes: Strength, Cardio, HIIT, Flexibility

4. Fitness Level
   → "What's your current fitness level?"
   → Beginner / Intermediate / Advanced cards

5. Equipment
   → "What equipment do you have?"
   → Multi-select: Dumbbells, Barbell, Bench, etc.

6. Plan Preview
   → Week calendar view with workout summaries
   → "Looks good!" or "Regenerate" buttons
```

### Active Workout Flow

```
1. Start Workout
   → Tap "Start" on today's workout card
   → Workout timer begins

2. Exercise Tracking
   → Current exercise displayed prominently
   → Info button opens diagram modal
   → Log each set: weight × reps
   → Rest timer after each set

3. Navigation
   → Swipe or tap to move between exercises
   → Skip button for exercises you want to pass

4. Completion
   → Summary of workout (duration, exercises, volume)
   → RPE rating slider (1-10)
   → Optional notes
   → "Finish Workout" saves to progress
```

### Progress Review Flow

```
1. Dashboard View
   → Weekly stats at a glance
   → Streak counter prominent
   → Quick access to this week's plan

2. Detailed Progress
   → Tap any stat to see history
   → Charts showing trends over time
   → Personal records highlighted

3. Exercise History
   → Select exercise to see all past sessions
   → Weight/reps progression graph
   → Tips for breaking plateaus
```

---

## Dark Theme Color Scheme

```javascript
// tailwind.config.js
colors: {
  dark: {
    bg: '#0a0a0f',
    surface: '#12121a',
    elevated: '#1a1a2e',
    border: '#2a2a3a',
    hover: '#252540',
  },
  workout: {
    strength: '#8b5cf6',    // purple
    cardio: '#10b981',      // green
    hiit: '#ef4444',        // red
    flexibility: '#3b82f6', // blue
    endurance: '#f59e0b',   // amber
  },
  status: {
    success: '#4ecca3',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b8b8d1',
    muted: '#6b6b8a',
  }
}
```

---

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Project setup (Vite, TypeScript, Tailwind)
- [ ] Type definitions
- [ ] Basic Zustand stores
- [ ] Layout, Sidebar, common components
- [ ] React Router setup

### Phase 2: Exercise Data & Display (Week 2)
- [ ] Exercise data files (40+ exercises)
- [ ] ExerciseCard component
- [ ] ExerciseDiagramModal
- [ ] Exercise tips display
- [ ] Exercise library browser

### Phase 3: Plan Generator (Week 3)
- [ ] Plan generation algorithm
- [ ] WorkoutPreferences wizard
- [ ] WeeklyCalendar view
- [ ] Plan storage and history
- [ ] Day regeneration

### Phase 4: Active Workout (Week 4)
- [ ] DailyWorkout component
- [ ] Set logging interface
- [ ] Rest timer with countdown
- [ ] Workout completion flow
- [ ] Real-time progress tracking

### Phase 5: Progress Tracking (Week 5)
- [ ] Progress recording
- [ ] ProgressDashboard
- [ ] Exercise history charts
- [ ] Streak tracking
- [ ] Achievement system

### Phase 6: Adaptive Planning (Week 6)
- [ ] Adaptive algorithm implementation
- [ ] Recommendations UI
- [ ] Recovery indicators
- [ ] Progressive overload suggestions
- [ ] Testing and refinement

---

## Sample Exercise Data

```typescript
{
  id: 'barbell-bench-press',
  name: 'Barbell Bench Press',
  category: 'strength',
  muscleGroups: {
    primary: ['chest'],
    secondary: ['triceps', 'shoulders']
  },
  difficulty: 'intermediate',
  equipment: ['barbell', 'bench'],
  description: 'A compound pushing movement targeting the chest.',
  instructions: [
    'Lie on a flat bench with feet on the floor',
    'Grip the bar slightly wider than shoulder-width',
    'Unrack and position bar over chest',
    'Lower to mid-chest with control',
    'Press back up to starting position'
  ],
  media: [
    { type: 'gif', url: '/exercises/bench-press.gif' }
  ],
  tips: [
    {
      id: 'bbp-form-1',
      category: 'form',
      content: 'Keep shoulder blades pinched together for stability.',
      importance: 'critical'
    },
    {
      id: 'bbp-breathing-1',
      category: 'breathing',
      content: 'Inhale on the way down, exhale through the press.',
      importance: 'important'
    },
    {
      id: 'bbp-mistake-1',
      category: 'common-mistakes',
      content: 'Avoid flaring elbows to 90° - keep them at 45-75°.',
      importance: 'critical'
    }
  ],
  defaultSets: 3,
  defaultReps: '8-12',
  defaultRestSeconds: 90,
  caloriesPerMinute: 8,
  tags: ['compound', 'push', 'mass-builder']
}
```

---

## Exercise Media Sources

For GIFs and diagrams, consider these options:
1. **Create custom** - Use animation tools to create branded GIFs
2. **Open source** - Use CC-licensed exercise illustrations
3. **API integration** - ExerciseDB API, Wger API
4. **Static assets** - Host in `/public/exercises/`

Recommended structure:
```
public/
└── exercises/
    ├── strength/
    │   ├── bench-press.gif
    │   ├── squat.gif
    │   └── deadlift.gif
    ├── cardio/
    │   ├── jumping-jacks.gif
    │   └── burpees.gif
    └── flexibility/
        ├── hamstring-stretch.gif
        └── quad-stretch.gif
```

---

## Next Steps

1. Review and approve this plan
2. Set up the project with the defined structure
3. Begin Phase 1 implementation
4. Iteratively build and test each feature
5. Deploy for user testing
