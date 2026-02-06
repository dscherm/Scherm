---
name: five-e-lesson-design
description: "5E instructional model lesson design. Use when creating, editing, or improving 5E unit lessons, phase planning, activity selection, or lesson sequencing. Keywords: 5E, engage, explore, explain, elaborate, evaluate, lesson plan, phase, unit builder."
---

## 5E Instructional Model Lesson Design

This skill covers the complete workflow for designing 5E model units and lessons within the teacher-module-builder application, including phase planning, activity selection, lesson structure, and sequencing.

---

## 1. 5E Model Overview

The 5E model is a constructivist instructional framework where each phase builds on the previous one to move students from curiosity to mastery.

| Phase | Pedagogical Purpose | Student Role | Teacher Role |
|---|---|---|---|
| **Engage** | Activate prior knowledge and spark curiosity | Wonder, question, connect | Provoke, elicit, hook |
| **Explore** | Hands-on investigation and student-driven discovery | Investigate, experiment, test | Facilitate, observe, guide |
| **Explain** | Formalize understanding and introduce vocabulary | Articulate, define, connect | Direct, clarify, model |
| **Elaborate** | Apply and extend learning to new contexts | Transfer, create, extend | Coach, challenge, support |
| **Evaluate** | Assess understanding and reflect on learning | Demonstrate, reflect, self-assess | Assess, provide feedback |

### Phase Descriptions

- **Engage**: The opening hook. Students encounter a phenomenon, question, or problem that activates what they already know and creates a need to learn more. Activities include prediction polls, mystery hooks, discussion starters, and short provocative demos.
- **Explore**: Students investigate the concept through hands-on, student-centered activities before formal instruction. They build experience with the phenomenon through simulations, code playgrounds, manipulatives, and guided experiments.
- **Explain**: The teacher formalizes understanding by introducing precise vocabulary, concepts, and models. Students articulate their discoveries and connect informal observations to formal knowledge through worksheets, quizzes, and structured discussion.
- **Elaborate**: Students apply their new understanding to novel contexts and more complex problems. They extend learning through coding projects, group projects, challenge labs, and cross-curricular connections.
- **Evaluate**: Students demonstrate mastery and reflect on their learning journey. Both formative and summative assessments are used, including quizzes, challenge labs, code submissions, and portfolios.

---

## 2. Activity Selection Per Phase

Activity selection is governed by the `PHASE_ACTIVITIES` map in `src/data/activityTemplates.js`. Each phase has **recommended** activities (best fit for the phase's purpose) and **allowed** activities (acceptable but not primary).

### Engage Phase
- **Recommended**: `prediction_poll`, `discussion_prompt`
- **Allowed**: `quiz`, `challenge_lab`
- **Rationale**: Prioritize activities that surface prior knowledge and create curiosity. Prediction polls let students commit to a hypothesis. Discussion prompts open inquiry.

### Explore Phase
- **Recommended**: `code_playground`, `simulation`, `manipulative`
- **Allowed**: `challenge_lab`, `worksheet`, `discussion_protocol`
- **Rationale**: Prioritize hands-on, student-driven investigation. Code playgrounds and simulations let students experiment freely. Manipulatives provide concrete experiences.

### Explain Phase
- **Recommended**: `worksheet`, `quiz`, `discussion_prompt`
- **Allowed**: `code_playground`, `challenge_lab`
- **Rationale**: Prioritize activities that formalize and check understanding. Worksheets structure note-taking and vocabulary. Quizzes surface misconceptions. Discussion prompts encourage articulation.

### Elaborate Phase
- **Recommended**: `code_playground`, `group_project`, `challenge_lab`
- **Allowed**: `simulation`, `worksheet`
- **Rationale**: Prioritize activities that require transfer and creative application. Coding projects and group projects demand higher-order thinking. Challenge labs push complexity.

### Evaluate Phase
- **Recommended**: `quiz`, `challenge_lab`, `code_playground`
- **Allowed**: `worksheet`, `group_project`
- **Rationale**: Prioritize activities that produce assessable evidence of learning. Quizzes measure recall and comprehension. Challenge labs and code playgrounds assess application and problem-solving.

---

## 3. All 10 Activity Types

Each activity type is defined in `src/data/activityTemplates.js` with its own schema, default configuration, and rendering component.

| Activity Type | Description | Key Features |
|---|---|---|
| `code_playground` | Interactive coding environment using p5.js | Starter code, live preview, auto-grading hooks |
| `challenge_lab` | Problem-solving challenges with progressive hints | Hint system, difficulty tiers, point values |
| `simulation` | Visual simulations with adjustable parameters | Parameter sliders, observation prompts, data collection |
| `quiz` | Multiple choice and short answer questions | Question bank, randomization, instant feedback |
| `prediction_poll` | Real-time class voting on predictions | Anonymous voting, result reveal, discussion trigger |
| `discussion_prompt` | Open-ended discussion questions | Sentence starters, accountable talk stems |
| `worksheet` | Printable PDF worksheets | Graphic organizers, fill-in, vocabulary support |
| `discussion_protocol` | Structured discussion formats | Think-Pair-Share, Jigsaw, Socratic Seminar, Fishbowl |
| `manipulative` | Hands-on card and physical activities | Card sorts, matching, sequencing, physical models |
| `group_project` | Collaborative multi-session projects | Role assignments, milestones, collaboration rubric |

---

## 4. Phase Duration Guidance

Default durations are defined in `useUnitStore.js` via `DEFAULT_UNIT`. Adjust using `updateDuration(phase, days)`.

### Default Unit (10 days)

| Phase | Days | Percentage |
|---|---|---|
| Engage | 2 | 20% |
| Explore | 3 | 30% |
| Explain | 2 | 20% |
| Elaborate | 2 | 20% |
| Evaluate | 1 | 10% |

### Quick Unit (5 days)

| Phase | Days |
|---|---|
| Engage | 1 |
| Explore | 1 |
| Explain | 1 |
| Elaborate | 1 |
| Evaluate | 1 |

### Extended Unit (15 days)

| Phase | Days |
|---|---|
| Engage | 2 |
| Explore | 4 |
| Explain | 3 |
| Elaborate | 3 |
| Evaluate | 3 |

### Duration Rules
- `totalDays` must equal the sum of all phase days.
- Explore should generally receive the most time (investigation is the core of 5E).
- Evaluate can be as short as 1 day but should not exceed Explore.
- Adjust via `updateDuration(phase, days)` in `useUnitStore`.

---

## 5. Lesson Structure Within Phases

Each lesson is edited in `src/components/lesson-editor/LessonEditor.jsx` and contains four sections. Suggestion data comes from `src/data/activitySuggestions.js`.

### Minds On (Opening Hook, 5-10 min)

Sourced from `MINDS_ON_HOOKS` in `activitySuggestions.js`:

| Hook Type | Description | Example |
|---|---|---|
| `prediction_poll` | Students predict an outcome before the lesson | "What will happen when we double the loop count?" |
| `mystery_hook` | Present a puzzling phenomenon or artifact | "Why does this code produce a spiral instead of a circle?" |
| `discussion_protocol` | Quick structured talk (Turn and Talk, Think-Pair-Share) | "Tell your partner one thing you remember about variables." |
| `prior_knowledge` | KWL chart, brainstorm, or concept map activation | "List 3 things you already know about conditionals." |

### Work Time (Main Activities, 20-35 min)

The core instructional block. Select from the 10 activity types via the `ActivityPicker` component. Multiple activities can be sequenced within a single lesson. Each activity object includes:

```js
{
  id: String,        // unique identifier
  type: String,      // one of 10 activity types
  title: String,     // display name
  instructions: String,
  duration: Number,  // minutes
  points: Number     // optional point value
}
```

### Share Out (Closing Discussion, 5-10 min)

Sourced from `SHARE_OUT_PROTOCOLS` in `activitySuggestions.js`:

**Whole Class Protocols:**
- Whip Around: Each student shares one takeaway in rapid succession
- Popcorn Share: Students voluntarily share, "popping" up when ready
- Fishbowl: Inner circle discusses while outer circle observes and notes

**Gallery Style Protocols:**
- Silent Gallery Walk: Students circulate and leave sticky-note feedback
- Speed Dating Share: Pairs rotate on a timer to share work

**Team Presentation Protocols:**
- Lightning Talks: 60-90 second micro-presentations per group
- Demo Day: Groups demonstrate a working product or solution

### Exit Ticket (Quick Assessment, 3-5 min)

Sourced from `EXIT_TICKETS` in `activitySuggestions.js`:

**Reflection:**
- 3-2-1: 3 things learned, 2 connections, 1 question
- Muddiest Point: What is still confusing?
- One Sentence Summary: Summarize today's learning in one sentence
- Headline: Write a newspaper headline for today's lesson

**Metacognition:**
- Confidence Check: Rate understanding on a scale
- Stuck/Unstuck: What got you stuck? What got you unstuck?
- Learning Target Self-Assessment: How close are you to the target?

**Application:**
- Real World Connection: Where does this show up outside school?
- What If: What would happen if we changed one variable?
- Teach Someone: Explain today's concept to a younger student

**Quick Check:**
- Quick Question: One targeted content question
- Thumbs Up/Down/Sideways: Nonverbal comprehension check

---

## 6. Transition Strategies Between Phases

Smooth transitions between 5E phases maintain coherence and momentum. Each transition should explicitly connect what students just did to what comes next.

### Engage to Explore
- Build on the curiosity or question raised in Engage.
- Frame the exploration as an investigation into the Engage phenomenon.
- Provide just enough structure (materials, guiding questions) without giving away answers.
- Example: "You predicted X would happen. Now let's test it in the simulation."

### Explore to Explain
- Debrief student discoveries from Explore before formalizing.
- Use student language first, then introduce formal vocabulary.
- Have students share observations before the teacher explains the concept.
- Example: "Several groups noticed the pattern changed. Let's name what's happening."

### Explain to Elaborate
- Bridge from understanding to application with a clear prompt.
- Increase complexity or change the context from what was explained.
- Encourage creative transfer rather than rote repetition.
- Example: "Now that we understand loops, let's use them to build something new."

### Elaborate to Evaluate
- Reflect on extended work before formal assessment.
- Use Elaborate products as formative data to inform evaluation design.
- Give students a chance to self-assess before the summative evaluation.
- Example: "Look at your project. Which learning targets can you demonstrate?"

---

## 7. Key Project Files

| File | Purpose |
|---|---|
| `src/data/activityTemplates.js` | Activity type definitions, `PHASE_ACTIVITIES` map, default configs |
| `src/data/activitySuggestions.js` | `MINDS_ON_HOOKS`, `SHARE_OUT_PROTOCOLS`, `EXIT_TICKETS`, `WORK_TIME_ACTIVITIES` |
| `src/hooks/useUnitStore.js` | Zustand store for 5E unit state, `DEFAULT_UNIT`, `updateDuration()`, `addLesson()`, `updateLesson()` |
| `src/components/unit-builder/` | Multi-step wizard UI for building 5E units |
| `src/components/lesson-editor/LessonEditor.jsx` | Four-section lesson editing interface (Minds On, Work Time, Share Out, Exit Ticket) |
| `src/components/lesson-editor/ActivityPicker.jsx` | Activity type selection UI with phase-aware filtering |

---

## 8. Data Structures

### Unit Shape

```js
{
  id: String,
  title: String,
  subject: String,          // e.g. "Computer Science", "Math", "Science"
  gradeLevel: String,       // e.g. "9-10", "6-8"
  unitType: '5e',
  duration: {
    totalDays: 10,          // sum of all phase days
    engage: 2,
    explore: 3,
    explain: 2,
    elaborate: 2,
    evaluate: 1
  },
  essentialQuestion: String,
  objectives: [String],
  vocabulary: [{ term: String, definition: String }],
  standards: [{ code: String, description: String }],
  lessons: [Lesson],
  status: String,           // 'draft' | 'published'
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Lesson Shape

```js
{
  id: String,
  title: String,
  phase: String,            // 'engage' | 'explore' | 'explain' | 'elaborate' | 'evaluate'
  dayNumber: Number,        // which day in the unit (1-based)
  mindsOn: {
    type: String,           // from MINDS_ON_HOOKS
    prompt: String
  },
  activities: [{
    id: String,
    type: String,           // one of 10 activity types
    title: String,
    instructions: String,
    duration: Number,       // minutes
    points: Number          // optional
  }],
  shareOut: {
    protocol: String,       // from SHARE_OUT_PROTOCOLS
    prompts: [String]
  },
  exitTicket: {
    type: String,           // from EXIT_TICKETS
    prompt: String
  }
}
```

### Store Actions (useUnitStore)

| Action | Signature | Purpose |
|---|---|---|
| `setUnit` | `(unit) => void` | Replace the entire unit state |
| `updateDuration` | `(phase, days) => void` | Change a single phase's day count and recalculate total |
| `addLesson` | `(phase) => void` | Append a new blank lesson to a phase |
| `updateLesson` | `(lessonId, updates) => void` | Merge partial updates into a lesson |
| `removeLesson` | `(lessonId) => void` | Delete a lesson from the unit |
| `reorderLessons` | `(phase, orderedIds) => void` | Reorder lessons within a phase |
| `addActivity` | `(lessonId, activityType) => void` | Add a new activity to a lesson's Work Time |
| `updateActivity` | `(lessonId, activityId, updates) => void` | Edit an existing activity |
| `removeActivity` | `(lessonId, activityId) => void` | Remove an activity from a lesson |

---

## 9. Design Principles for Quality 5E Lessons

When creating or reviewing 5E lessons, apply these principles:

1. **Phenomenon-First**: Start every unit with an observable, relevant phenomenon rather than a definition.
2. **Student Sense-Making**: Explore must come before Explain. Students build understanding before the teacher formalizes it.
3. **Coherent Storyline**: Every lesson should connect to the unit's essential question. Transitions between phases should be explicit.
4. **Activity Variety**: Vary activity types across lessons to maintain engagement and address multiple learning modalities.
5. **Assessment Integration**: Embed formative assessment throughout (exit tickets, polls, checks) rather than concentrating it only in Evaluate.
6. **Appropriate Rigor**: Match activities to the cognitive demand of each phase. Engage is low-floor; Elaborate and Evaluate are high-ceiling.
7. **Time Realism**: Ensure activity durations fit within a class period. A lesson with Minds On (5 min) + Work Time (30 min) + Share Out (8 min) + Exit Ticket (5 min) fits a standard 48-minute period.
