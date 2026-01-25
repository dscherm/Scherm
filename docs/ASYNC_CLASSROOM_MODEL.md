# Asynchronous Classroom Model

This document describes the classroom flow and student experience for the Teacher Module Builder platform.

---

## Lesson Flow Structure

Every lesson follows this asynchronous structure, enabling students to work at their own pace while maintaining collaborative touchpoints:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          LESSON FLOW (60-90 min)                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  1. MINDS ON (Synchronous Start)                     ~10 min        │   │
│  │     ─────────────────────────────────────────────────────────────   │   │
│  │     • Group engagement activity                                      │   │
│  │     • All students participate together                              │   │
│  │     • Surfaces prior knowledge, creates curiosity                    │   │
│  │     • Teacher facilitates, monitors responses                        │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  2. WORK TIME (Asynchronous Core)                    ~40-60 min     │   │
│  │     ─────────────────────────────────────────────────────────────   │   │
│  │     • Students progress through activities at own pace               │   │
│  │     • Choice: Work solo OR collaborate with peers                    │   │
│  │     • Can request breakouts (peer help or teacher help)              │   │
│  │     • Team roles assigned for collaborative work                     │   │
│  │     • Teacher monitors, provides targeted support                    │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  3. SHARE OUT (Synchronous Close)                    ~10-15 min     │   │
│  │     ─────────────────────────────────────────────────────────────   │   │
│  │     • Students share discoveries, solutions, questions               │   │
│  │     • Brief discussion of key concepts                               │   │
│  │     • Exit ticket / reflection                                       │   │
│  │     • Preview of next lesson                                         │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Minds On (Synchronous Start)

### Purpose
- Activate prior knowledge
- Create curiosity and engagement
- Establish context for the lesson
- Build classroom community

### Activity Types

| Activity Type | Description | Best For |
|--------------|-------------|----------|
| **Think-Pair-Share** | Individual reflection → partner discussion → class share | Opening discussions |
| **Prediction Poll** | Real-time voting on outcomes or answers | Generating hypotheses |
| **Mystery Prompt** | Intriguing question or scenario | Creating curiosity |
| **Quick Challenge** | 2-3 minute low-stakes problem | Activating skills |
| **Media Analysis** | Short video/image with discussion prompts | Visual learners |
| **Vocabulary Preview** | Introduce key terms in context | New concept introduction |

### Implementation

```javascript
const mindsOnActivity = {
  id: 'minds-on-1',
  type: 'prediction_poll',
  duration: 10, // minutes
  synchronous: true,

  content: {
    prompt: "Before we explore loops, predict: How many lines of code would it take to draw 100 circles on screen?",
    options: [
      { id: 'a', text: '100 lines', votes: 0 },
      { id: 'b', text: '10 lines', votes: 0 },
      { id: 'c', text: '5 lines', votes: 0 },
      { id: 'd', text: '1 line', votes: 0 }
    ],
    revealAfter: 'all_voted', // or 'timer' or 'teacher_trigger'
    followUp: "Let's find out! By the end of today, you'll be able to do this in just a few lines."
  },

  teacherView: {
    showLiveVotes: true,
    showStudentNames: false, // anonymous during voting
    canRevealEarly: true
  }
};
```

### Student View (Minds On)

```
┌─────────────────────────────────────────────────────────────────┐
│  🧠 MINDS ON                                    ⏱️ 8:45 remaining │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Before we explore loops, predict:                               │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  How many lines of code would it take to draw           │    │
│  │  100 circles on screen?                                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│     ○ A) 100 lines                                               │
│     ○ B) 10 lines                                                │
│     ● C) 5 lines  ✓ Your choice                                  │
│     ○ D) 1 line                                                  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Waiting for classmates...  18/24 voted                  │    │
│  │  ████████████████░░░░░░░░  75%                           │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  💬 Share your reasoning with a partner:                         │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                                                          │    │
│  │  I think it's 5 because maybe you can use some kind      │    │
│  │  of repeat command...                                    │    │
│  │                                                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 2: Work Time (Asynchronous Core)

### Purpose
- Students engage with content at their own pace
- Support multiple learning modalities and speeds
- Enable peer collaboration and support
- Allow teacher to provide targeted interventions

### Work Modes

Students can choose how they want to work:

| Mode | Description | When to Use |
|------|-------------|-------------|
| **Solo** | Independent work, can still request help | Focused practice, assessments |
| **Pair** | Work with assigned or chosen partner | Collaborative problem-solving |
| **Team** | Work in assigned team with roles | Projects, complex challenges |

### Breakout Request System

Students can request help at any time:

```
┌─────────────────────────────────────────────────────────────────┐
│  🆘 REQUEST HELP                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  What kind of help do you need?                                  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  👥 PEER HELP                                            │    │
│  │     Get help from a classmate who's finished this        │    │
│  │     activity or is working on the same problem           │    │
│  │                                                          │    │
│  │  Available peer helpers: 3                                │    │
│  │  Estimated wait: < 2 min                                  │    │
│  │                                          [Request Peer]   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  👨‍🏫 TEACHER HELP                                         │    │
│  │     Request a 1-on-1 or small group session with         │    │
│  │     the teacher                                          │    │
│  │                                                          │    │
│  │  Current queue: 2 students                                │    │
│  │  Estimated wait: ~5 min                                   │    │
│  │                                        [Request Teacher]  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  💡 HINT                                                  │    │
│  │     Get a hint for this specific activity                │    │
│  │     (Hints used: 1 of 3)                                  │    │
│  │                                          [Get Next Hint]  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Brief description of what you're stuck on:                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  I don't understand why my loop runs 11 times instead    │    │
│  │  of 10...                                                │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Breakout Rooms (Virtual)

When a breakout is approved:

```
┌─────────────────────────────────────────────────────────────────┐
│  🚪 BREAKOUT ROOM: Peer Help                    [Leave Breakout] │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  You're connected with: Alex (Peer Helper)                       │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  SHARED WORKSPACE                                        │    │
│  │                                                          │    │
│  │  [Both students see the same code editor]                │    │
│  │                                                          │    │
│  │  for (let i = 0; i <= 10; i++) {                         │    │
│  │    console.log(i);     // Alex highlighted this line     │    │
│  │  }                                                       │    │
│  │                                                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  💬 Chat                                                         │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Alex: Look at your condition: i <= 10                   │    │
│  │  Alex: That means it runs when i equals 10 too!          │    │
│  │  You: OH! So it should be i < 10?                        │    │
│  │  Alex: Exactly! Try it and see.                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│  [Type a message...                              ] [Send]        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Progress Tracking During Work Time

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 YOUR PROGRESS                              Lesson 3: Loops   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Today's Activities:                                             │
│                                                                  │
│  ✅ Activity 1: Counting Loop          15 pts    [Completed]     │
│  🔄 Activity 2: Loop Through Array     20 pts    [In Progress]   │
│  ⬜ Activity 3: Animated Dots          25 pts    [Locked]        │
│  ⬜ Challenge: Pattern Maker           30 pts    [Locked]        │
│                                                                  │
│  ─────────────────────────────────────────────────────────────   │
│  Points today: 15 / 90                                           │
│  Time spent: 23 min                                              │
│  ─────────────────────────────────────────────────────────────   │
│                                                                  │
│  Work Mode: [Solo ▼]    [🆘 Request Help]                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 3: Share Out (Synchronous Close)

### Purpose
- Consolidate learning
- Celebrate discoveries and progress
- Surface common misconceptions
- Build classroom community
- Transition to exit reflection

### Share Out Types

| Type | Description | Duration |
|------|-------------|----------|
| **Gallery Walk** | Students view each other's work | 5-10 min |
| **Spotlight Share** | 2-3 students present solutions | 5-10 min |
| **Common Mistakes Review** | Teacher addresses patterns from monitoring | 5 min |
| **Peer Teaching** | Students explain concepts to class | 5-10 min |
| **Discussion Prompt** | Open-ended reflection question | 5-10 min |

### Implementation

```javascript
const shareOutActivity = {
  id: 'share-out-1',
  type: 'spotlight_share',
  duration: 10, // minutes
  synchronous: true,

  content: {
    prompt: "Share one discovery you made about loops today.",

    // Teacher can select students to share based on their work
    spotlightOptions: {
      autoSuggest: true, // System suggests students with interesting solutions
      maxSharers: 3,
      volunteerFirst: true, // Ask for volunteers before selecting
    },

    discussionPrompts: [
      "What patterns did you notice?",
      "What was tricky about this?",
      "How might you use this in a project?"
    ]
  },

  exitTicket: {
    prompt: "What's the difference between i < 10 and i <= 10 in a loop?",
    type: 'short_answer',
    required: true
  }
};
```

### Student View (Share Out)

```
┌─────────────────────────────────────────────────────────────────┐
│  🎤 SHARE OUT                                   ⏱️ 8 min remaining │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Today's Discussion:                                             │
│  "Share one discovery you made about loops today."               │
│                                                                  │
│  ─────────────────────────────────────────────────────────────   │
│                                                                  │
│  🎯 Currently Sharing: Jordan                                    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  "I found out that if you forget to increment i, the     │    │
│  │  loop runs forever and crashes! I had to refresh..."     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  💬 Class Reactions:                                             │
│  [😮 Same!]  [💡 Good point]  [❓ Question]                       │
│                                                                  │
│  ─────────────────────────────────────────────────────────────   │
│                                                                  │
│  ✋ [Volunteer to Share]                                          │
│                                                                  │
│  ─────────────────────────────────────────────────────────────   │
│                                                                  │
│  📝 EXIT TICKET (Required before leaving)                        │
│  What's the difference between i < 10 and i <= 10 in a loop?     │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                                                          │    │
│  │                                                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                            [Submit & Complete]   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Team Roles System

### The Three Core Roles

| Role | Icon | Purpose |
|------|------|---------|
| **Explainer** | 🧩 | Guide teammates through coding logic and model strong programming practices |
| **Leader** | 🧭 | Keep the group organized, accountable, on-task, and equitable in participation |
| **Questioner** | ❓ | Deepen understanding by asking critical questions and sharing researched insights |

---

### 🧩 EXPLAINER — The Coding Guide

**Purpose**: Guide teammates through coding logic and model strong programming practices.

**Key Responsibilities**:
- Explain concepts and debug *with* others, not *for* them
- Model clean code structure and commenting
- Track common issues and share fixes with the group
- Help others understand *why* the code works

| Do ✅ | Don't 🚫 |
|-------|----------|
| Offer hints and reasoning, not answers | Rewrite others' code |
| Encourage efficient and readable code | Dominate discussion |
| Stay patient and constructive | Correct without explanation |

**Quick Self-Check**:
- Did I help others understand the logic?
- Did I demonstrate professional coding habits?
- Did I empower others to solve their own problems?

---

### 🧭 LEADER — The Project Facilitator

**Purpose**: Keep the group organized, accountable, on-task, and equitable in participation.

**Key Responsibilities**:
- Start sessions by clarifying goals and roles
- Make sure everyone contributes meaningfully
- Check in to ensure the group understands
- Push the Explainer to effectively communicate to the team
- Keep track of time and milestones
- Communicate with the teacher if the whole team needs help
- Summarize team progress

| Do ✅ | Don't 🚫 |
|-------|----------|
| Keep the team focused and positive | Micromanage or ignore quieter voices |
| Check in with each teammate regularly | Let discussions drift |
| Document progress or blockers | Do all the talking |

**Quick Self-Check**:
- Did I maintain team structure and flow?
- Did I ensure equal participation?
- Did I guide, not control?

---

### ❓ QUESTIONER — The Researcher / Reflective Learner

**Purpose**: Deepen understanding by asking critical questions and sharing researched insights.

**Key Responsibilities**:
- Ask "why" and "how" questions to clarify logic
- Research unknown syntax or functions and summarize for peers
- Keep a learning log of discoveries and confusions
- Lead debrief discussions with key takeaways

| Do ✅ | Don't 🚫 |
|-------|----------|
| Ask meaningful, curiosity-driven questions | Ask off-topic or filler questions |
| Share short summaries of what you find | Rely on others to do the research |
| Help the group connect concepts | Avoid discussions or documentation |

**Quick Self-Check**:
- Did I ask questions that improved team understanding?
- Did I research and share relevant info?
- Did I help connect concepts and logic?

---

### Team Role Evaluation Rubric

| Category | Surpassing (4) | Meeting (3) | Approaching (2) | Not Meeting (1) |
|----------|----------------|-------------|-----------------|-----------------|
| **Explaining** | Teaches others clearly; deep mastery | Teaches others, patient, seeks to help | Impatiently teaches others, writes code for others | Avoids explaining at all |
| **Collaboration & Communication** | Elevates entire group; listens & adapts | Communicates ideas clearly | Participates inconsistently | Rarely contributes or listens |
| **Leadership / Initiative** | Anticipates needs; motivates team | Keeps group on task | Needs reminders | Avoids responsibility |
| **Inquiry & Problem Solving** | Asks insightful, deep questions | Asks relevant clarifiers | Occasionally participates | Avoids inquiry |
| **Professionalism / Growth** | Reflects and improves consistently | Accepts feedback | Limited reflection | Resistant to feedback |
| **Team Progression** | Stays on task, seeks help when needed, ensures team meets deadline | Occasionally off-task but refocuses when prompted by leader | Off-task, only refocuses when prompted by teacher | Off task most of the class |

---

### Post-Challenge Reflection Questions

Students complete these after each collaborative session:

```
┌─────────────────────────────────────────────────────────────────┐
│  📝 TEAM REFLECTION                                              │
├─────────────────────────────────────────────────────────────────┤
│  Name: ___________________  Role: ___________________            │
│                                                                  │
│  1. What coding skill or concept did you strengthen today?       │
│     ________________________________________________________    │
│                                                                  │
│  2. How did you contribute to your team's success?               │
│     ________________________________________________________    │
│                                                                  │
│  3. What question or challenge helped you grow the most?         │
│     ________________________________________________________    │
│                                                                  │
│  4. If you switched roles next time, what would you do           │
│     differently?                                                 │
│     ________________________________________________________    │
│                                                                  │
│  5. What could your group improve in communication or            │
│     collaboration?                                               │
│     ________________________________________________________    │
│                                                                  │
│  Rate yourself using the rubric (1-4 for each category):        │
│  • Explaining: ___  • Collaboration: ___  • Initiative: ___     │
│  • Inquiry: ___     • Professionalism: ___ • Progression: ___   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Role Assignment

Teachers can:
1. **Auto-assign**: System rotates roles each lesson/unit
2. **Manual assign**: Teacher selects who plays which role
3. **Student choice**: Students claim roles (negotiation within team)
4. **Skill-based**: System suggests roles based on student strengths and past performance

**Team Size**: 3 students (one per role) is ideal. For larger teams:
- 4 students: Add a second Questioner or rotate roles mid-session
- 5-6 students: Split into two mini-teams or add specialized sub-roles

### Team Formation

```javascript
const teamFormation = {
  method: 'teacher_assigned', // or 'random', 'student_choice', 'skill_balanced'

  teams: [
    {
      id: 'team-1',
      name: 'Cyber Squad',
      members: [
        { studentId: 'student-1', role: 'explainer', icon: '🧩' },
        { studentId: 'student-2', role: 'leader', icon: '🧭' },
        { studentId: 'student-3', role: 'questioner', icon: '❓' }
      ]
    },
    // ... more teams
  ],

  rotateRoles: 'weekly', // or 'daily', 'per_unit', 'never'

  // Track role history to ensure all students try all roles
  roleHistory: {
    'student-1': ['explainer', 'leader', 'questioner'],
    'student-2': ['leader', 'questioner'],
    // ...
  }
};
```

### Team View During Work Time

```
┌─────────────────────────────────────────────────────────────────┐
│  👥 TEAM: Cyber Squad                          Activity 3 of 4   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Team Members:                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  🧩 Alex (Explainer)       ✅ Activity 3    [On Track]   │    │
│  │  🧭 Jordan (Leader)        🔄 Activity 2    [Working]    │    │
│  │  ❓ Sam (Questioner)       ⚠️ Activity 2    [Needs Help] │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Your Role: 🧭 Leader                                            │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Your responsibilities today:                            │    │
│  │  • Keep the team focused and on-task                     │    │
│  │  • Check in with Sam - they may need support             │    │
│  │  • Make sure Alex explains, not just gives answers       │    │
│  │  • Track time: 25 min remaining for work time            │    │
│  │  • Summarize team progress before share out              │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  ⚡ Leader Quick Actions:                                        │
│  [Check In: Sam] [Time Check: Team] [Request Teacher Consult]   │
│                                                                  │
│  Team Chat:                                                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Jordan (🧭): Sam, how's it going? Stuck on something?   │    │
│  │  Sam (❓): Yeah, why does the loop run 11 times?         │    │
│  │  Jordan (🧭): Good question! Alex, can you help explain? │    │
│  │  Alex (🧩): Sure! Look at the condition: i <= 10...      │    │
│  │  Alex (🧩): That includes 10, so it runs 0,1,2...10      │    │
│  │  Sam (❓): OH! So <= means "up to AND including"?        │    │
│  └─────────────────────────────────────────────────────────┘    │
│  [Type message...                               ] [Send]         │
│                                                                  │
│  [📞 Start Team Call]  [🆘 Request Teacher for Whole Team]       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Role-Specific Prompts

The system provides contextual prompts based on the student's role:

**For Explainer** 🧩:
```
┌─────────────────────────────────────────────────────────────────┐
│  🧩 EXPLAINER TIPS                                               │
├─────────────────────────────────────────────────────────────────┤
│  A teammate is stuck. Instead of giving the answer:             │
│                                                                  │
│  ✅ Ask: "What do you think happens on line 3?"                  │
│  ✅ Say: "Try changing the <= to < and see what happens"         │
│  ✅ Model: "When I'm confused, I add console.log() to see..."    │
│                                                                  │
│  🚫 Avoid: "Just change it to i < 10, that fixes it"             │
└─────────────────────────────────────────────────────────────────┘
```

**For Leader** 🧭:
```
┌─────────────────────────────────────────────────────────────────┐
│  🧭 LEADER CHECK-IN                                              │
├─────────────────────────────────────────────────────────────────┤
│  Time for a quick team check! Ask:                              │
│                                                                  │
│  • "How's everyone doing on Activity 2?"                         │
│  • "Sam, you've been quiet - everything okay?"                   │
│  • "We have 20 minutes left - are we on track?"                  │
│                                                                  │
│  If the whole team is stuck:                                     │
│  [🆘 Request Teacher Consult for Team]                           │
└─────────────────────────────────────────────────────────────────┘
```

**For Questioner** ❓:
```
┌─────────────────────────────────────────────────────────────────┐
│  ❓ QUESTIONER PROMPTS                                           │
├─────────────────────────────────────────────────────────────────┤
│  Good questions to ask your team:                               │
│                                                                  │
│  • "Why does this work? What would break it?"                    │
│  • "What does [term] actually mean?"                             │
│  • "How is this different from what we did yesterday?"           │
│                                                                  │
│  📚 Research something? Add it to your learning log:            │
│  [+ Add Discovery]                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Focus Mode & Tab Monitoring

### Why Focus Mode?

Students often get distracted by other tabs. Rather than being punitive, Focus Mode creates gentle accountability.

### How It Works

```javascript
// Focus Mode Implementation
class FocusMode {
  constructor(studentId, activityId) {
    this.studentId = studentId;
    this.activityId = activityId;
    this.focusLog = [];
    this.isActive = true;

    // Listen for tab visibility changes
    document.addEventListener('visibilitychange', () => {
      this.handleVisibilityChange();
    });

    // Listen for window blur (clicked outside browser)
    window.addEventListener('blur', () => {
      this.handleBlur();
    });
  }

  handleVisibilityChange() {
    const timestamp = Date.now();

    if (document.hidden) {
      // Student switched away
      this.focusLog.push({
        event: 'tab_hidden',
        timestamp,
        activityId: this.activityId
      });

      // Log to Firebase for teacher visibility
      this.logToFirebase('focus_lost', timestamp);

      // Show gentle reminder when they return
      this.showReturnReminder = true;

    } else {
      // Student returned
      const awayDuration = timestamp - this.lastHiddenTime;

      this.focusLog.push({
        event: 'tab_visible',
        timestamp,
        awayDuration
      });

      this.logToFirebase('focus_returned', timestamp, awayDuration);

      if (this.showReturnReminder) {
        this.displayReminder(awayDuration);
      }
    }
  }

  displayReminder(awayDuration) {
    // Gentle, non-judgmental reminder
    const seconds = Math.floor(awayDuration / 1000);

    if (seconds > 30) {
      showNotification({
        message: `Welcome back! You were away for ${seconds} seconds. Need any help?`,
        actions: [
          { label: "I'm good", action: 'dismiss' },
          { label: "Request help", action: 'request_help' }
        ]
      });
    }
  }
}
```

### Teacher View of Focus Data

```
┌─────────────────────────────────────────────────────────────────┐
│  👁️ FOCUS MONITORING                           Period 3         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Class Focus Score: 87%                                          │
│  ████████████████████░░░  (21/24 students focused)               │
│                                                                  │
│  ⚠️ Students with frequent tab switches:                         │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Student       │ Switches │ Time Away │ Current Status   │    │
│  ├─────────────────────────────────────────────────────────┤    │
│  │  Marcus        │    5     │   3:42    │ 🔴 Away now      │    │
│  │  Priya         │    3     │   1:15    │ 🟢 Working       │    │
│  │  Devon         │    3     │   2:30    │ 🟡 Just returned │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Actions:                                                        │
│  [Send Nudge to Away Students]  [Start Check-in with Marcus]    │
│                                                                  │
│  Note: Focus data is for teacher awareness only.                 │
│  Students see encouraging reminders, not penalties.              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Focus Mode Settings (Teacher Configurable)

```javascript
const focusModeSettings = {
  enabled: true,

  // What to track
  trackTabSwitches: true,
  trackWindowBlur: true,
  trackIdleTime: true,
  idleThreshold: 120, // seconds before considered idle

  // Student experience
  showReturnReminders: true,
  reminderTone: 'encouraging', // 'encouraging' | 'neutral' | 'strict'
  pauseTimerWhenAway: false, // Optional: pause activity timer

  // Teacher notifications
  notifyAfterSwitches: 3, // Alert teacher after N switches
  notifyAfterAwayTime: 180, // Alert after N seconds away

  // What students see
  studentCanSeeOwnStats: true, // Show their own focus stats
  studentCanSeeClassStats: false, // Don't show class comparison
};
```

---

## Slide Generation System

### Auto-Generated Slide Deck Structure

For each lesson, the system generates a slide deck:

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 GENERATED SLIDES                          Lesson 3: Loops   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Slide 1: Title                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │         LESSON 3: LOOPS                                  │    │
│  │         Arrays & Iteration Unit                          │    │
│  │                                                          │    │
│  │         Today's Objective:                               │    │
│  │         Use for loops to repeat code efficiently         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Slide 2: Minds On Prompt                                        │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │         🧠 MINDS ON                                       │    │
│  │                                                          │    │
│  │         How many lines of code would it take             │    │
│  │         to draw 100 circles on screen?                   │    │
│  │                                                          │    │
│  │         A) 100 lines    C) 5 lines                       │    │
│  │         B) 10 lines     D) 1 line                        │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Slide 3-5: Vocabulary                                           │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │         📚 KEY TERM: Loop                                 │    │
│  │                                                          │    │
│  │         A control structure that repeats code            │    │
│  │         multiple times                                   │    │
│  │                                                          │    │
│  │         for (let i = 0; i < 10; i++) {                   │    │
│  │           // This runs 10 times!                         │    │
│  │         }                                                │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Slide 6-8: Activity Instructions                                │
│  Slide 9: Share Out Prompt                                       │
│  Slide 10: Exit Ticket                                           │
│                                                                  │
│  Export Options:                                                 │
│  [📊 Google Slides]  [📄 PowerPoint]  [📑 PDF]  [🖥️ Present Now]  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Slide Generation API

```javascript
const slideGenerator = {
  async generateDeck(lesson) {
    const slides = [];

    // Title slide
    slides.push({
      type: 'title',
      content: {
        title: lesson.title,
        subtitle: lesson.unit.title,
        objective: lesson.objective
      }
    });

    // Minds On slide
    if (lesson.mindsOn) {
      slides.push({
        type: 'minds_on',
        content: lesson.mindsOn
      });
    }

    // Vocabulary slides (one per term, or grouped)
    for (const term of lesson.vocabularyTerms) {
      slides.push({
        type: 'vocabulary',
        content: {
          term: term.term,
          definition: term.definition,
          example: term.example
        }
      });
    }

    // Activity instruction slides
    for (const activity of lesson.activities) {
      slides.push({
        type: 'activity_instructions',
        content: {
          title: activity.title,
          instructions: activity.instructions,
          duration: activity.duration
        }
      });
    }

    // Share out slide
    slides.push({
      type: 'share_out',
      content: lesson.shareOut
    });

    // Exit ticket slide
    slides.push({
      type: 'exit_ticket',
      content: lesson.exitTicket
    });

    return slides;
  },

  async exportToGoogleSlides(slides, title) {
    // Uses Google Slides API
    const presentation = await slides.presentations.create({
      title: title
    });

    for (const slide of slides) {
      await this.addSlide(presentation.presentationId, slide);
    }

    return presentation.presentationId;
  },

  async exportToPDF(slides) {
    // Uses jsPDF or similar
    // Returns downloadable PDF
  },

  async exportToPowerPoint(slides) {
    // Uses PptxGenJS
    // Returns downloadable .pptx
  }
};
```

### Teacher Slide Customization

```
┌─────────────────────────────────────────────────────────────────┐
│  ✏️ CUSTOMIZE SLIDES                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Theme: [Dark Mode ▼]  Font: [Inter ▼]  Accent: [🟣 Purple ▼]    │
│                                                                  │
│  Include:                                                        │
│  ☑ Title slide                                                   │
│  ☑ Minds On prompt                                               │
│  ☑ Vocabulary terms (☑ All  ○ Selected: ___)                     │
│  ☑ Activity instructions                                         │
│  ☐ Activity solutions (hidden by default)                        │
│  ☑ Share out prompt                                              │
│  ☑ Exit ticket                                                   │
│                                                                  │
│  Add custom slides:                                              │
│  [+ Add Blank Slide]  [+ Add Image Slide]  [+ Add Video Slide]  │
│                                                                  │
│  ─────────────────────────────────────────────────────────────   │
│                                                                  │
│  [Preview]  [Export to Google Slides]  [Download PDF]            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Firebase Data Model Updates

### New Collections for Async Classroom

```javascript
// Breakout requests
/breakoutRequests/{requestId}
  ├── studentId: userId reference
  ├── classId: reference
  ├── lessonId: reference
  ├── activityId: reference
  ├── type: 'peer' | 'teacher'
  ├── status: 'pending' | 'matched' | 'in_progress' | 'completed'
  ├── description: string
  ├── matchedWith: userId reference (for peer) or null
  ├── roomId: string (for virtual room)
  ├── requestedAt: timestamp
  ├── matchedAt: timestamp
  ├── completedAt: timestamp
  └── feedback: { helpful: boolean, notes: string }

// Focus tracking
/focusLogs/{logId}
  ├── studentId: userId reference
  ├── classId: reference
  ├── lessonId: reference
  ├── activityId: reference
  ├── event: 'focus_lost' | 'focus_returned' | 'idle_start' | 'idle_end'
  ├── timestamp: timestamp
  ├── awayDuration: number (milliseconds, if returning)
  └── sessionId: string

// Team assignments
/teams/{teamId}
  ├── classId: reference
  ├── lessonId: reference (or unitId for persistent teams)
  ├── name: string
  ├── members: [{
  │     studentId: userId reference,
  │     role: string,
  │     joinedAt: timestamp
  │   }]
  ├── chatMessages: subcollection
  └── createdAt: timestamp

// Generated slides
/slides/{slideSetId}
  ├── lessonId: reference
  ├── createdBy: userId reference
  ├── slides: [{ type, content, order }]
  ├── theme: { colors, fonts }
  ├── googleSlidesId: string (if exported)
  ├── pdfUrl: string (if generated)
  └── createdAt: timestamp
```

---

## Next Steps

1. **Receive team roles document** - Integrate specific roles into the system
2. **Build unit builder UI** - Start with lesson structure editor
3. **Implement Minds On templates** - Prediction polls, discussion prompts
4. **Implement Work Time engine** - Progress tracking, breakout requests
5. **Implement Share Out templates** - Spotlight share, exit tickets
6. **Build slide generator** - Google Slides API integration
7. **Implement Focus Mode** - Tab monitoring with teacher dashboard

---

## Questions for You

1. For the **Minds On** phase - do you want students to see each other's responses in real-time (like a live poll), or keep responses private until reveal?

2. For **breakout matching** - should the system auto-match peers based on who's available, or should students see available helpers and choose?

3. For **Share Out** - do you want the system to automatically suggest students to spotlight based on interesting solutions it detected?

4. **Slide themes** - should we design a few preset themes, or let teachers fully customize colors/fonts?
