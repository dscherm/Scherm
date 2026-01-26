# Teacher Module Builder: Deep Dive Product Specification

## Vision Statement

**Empower teachers to transform their curriculum into engaging, inquiry-based learning experiences using the 5E instructional model—without writing code.**

Teachers input their scope and sequence or unit plans, and the platform generates structured, interactive lessons that blend digital challenges (like Cyber Range and Arrays/Loops modules) with printable, hands-on activities.

---

## Core Pedagogical Frameworks

### Primary: 5E Instructional Model

Based on the [BSCS 5E Model](https://www.hmhco.com/blog/5e-instructional-model), developed by Rodger W. Bybee in 1987:

| Phase | Purpose | Duration | Student Role | Teacher Role |
|-------|---------|----------|--------------|--------------|
| **Engage** | Hook interest, surface prior knowledge | 1-2 days | Question, connect | Provoke curiosity |
| **Explore** | Hands-on investigation | 2-3 days | Investigate, discover | Facilitate, observe |
| **Explain** | Formalize concepts | 1-2 days | Articulate understanding | Direct instruction |
| **Elaborate** | Apply to new contexts | 2-3 days | Transfer, extend | Coach, challenge |
| **Evaluate** | Demonstrate mastery | 1-2 days | Reflect, demonstrate | Assess, feedback |

> **Research Note**: The 5E model shows "significantly better acquisition of scientific concepts" compared to traditional instruction ([Bybee et al., 2006](https://pmc.ncbi.nlm.nih.gov/articles/PMC2931660/)). Best used over 2-3 weeks per unit—not compressed into single lessons.

### Supporting Frameworks

| Framework | Integration Point |
|-----------|-------------------|
| **Project-Based Learning (PBL)** | Elaborate phase culminates in authentic projects |
| **Inquiry-Based Learning** | Explore phase is student-driven investigation |
| **Mastery-Based Learning** | Evaluate phase uses competency checkpoints |
| **Universal Design for Learning (UDL)** | Multiple modalities: digital + physical + collaborative |

---

## How Curriculum Input Works

### Teacher Input Options

```
┌─────────────────────────────────────────────────────────────────┐
│  📥 CURRICULUM INPUT METHODS                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. PASTE SCOPE & SEQUENCE                                       │
│     ┌──────────────────────────────────────────────────────┐    │
│     │ Unit 3: Arrays and Data Structures                    │    │
│     │ Week 1: Array fundamentals, indexing, length          │    │
│     │ Week 2: Iteration patterns, for loops                 │    │
│     │ Week 3: Array methods, filtering, mapping             │    │
│     │ Week 4: 2D arrays, nested loops                       │    │
│     │ Standards: CSTA 2-AP-12, 2-AP-13                       │    │
│     └──────────────────────────────────────────────────────┘    │
│                                                                  │
│  2. UPLOAD UNIT PLAN (PDF/DOCX)                                  │
│     [📄 Drop files here or click to upload]                      │
│                                                                  │
│  3. SELECT FROM STANDARDS                                        │
│     ☑ CSTA K-12 CS Standards                                     │
│     ☐ Common Core Math                                           │
│     ☐ NGSS Science                                               │
│     ☐ NICE Cybersecurity Framework                               │
│                                                                  │
│  4. GUIDED WIZARD                                                │
│     Subject: [Computer Science  ▼]                               │
│     Grade:   [9-12             ▼]                                │
│     Topic:   [_________________]                                 │
│     Duration: [2 weeks         ▼]                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Curriculum Parsing Pipeline

```
Teacher Input (text/file)
        │
        ▼
┌───────────────────┐
│  Content Parser   │ ──▶ Extracts: topics, objectives, standards, duration
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  5E Mapper        │ ──▶ Distributes content across 5 phases
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Activity Matcher │ ──▶ Selects digital & non-digital activities
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Lesson Generator │ ──▶ Creates structured lesson plans with resources
└───────────────────┘
        │
        ▼
   Generated Unit (editable)
```

---

## 5E Phase Activity Design

### How Each Phase Maps to Module Templates

#### ENGAGE Phase (1-2 days)
**Goal**: Hook curiosity, surface misconceptions, connect to prior knowledge

| Activity Type | Digital (Cyber Range Style) | Non-Digital (Printable) |
|--------------|----------------------------|------------------------|
| **Hook Challenge** | Interactive puzzle that reveals the problem | Printed mystery scenario card |
| **KWL Chart** | Digital KWL board with class aggregation | Printable KWL worksheet |
| **Prediction Poll** | Real-time class voting on outcomes | Four Corners movement activity |
| **Phenomenon Video** | Embedded video with pause-and-predict | Discussion protocol handout |
| **Prior Knowledge Probe** | Quick diagnostic quiz (3-5 questions) | Entry ticket worksheet |

**Example - Cybersecurity Unit**:
> *"Your school's network has been compromised. Suspicious traffic is flowing to an unknown IP address. What's happening and how would you investigate?"*
> - **Digital**: Interactive network traffic visualization (from Cyber Range)
> - **Non-Digital**: Printed network diagram with annotations to make

---

#### EXPLORE Phase (2-3 days)
**Goal**: Student-driven investigation, hands-on experimentation

| Activity Type | Digital | Non-Digital |
|--------------|---------|-------------|
| **Guided Investigation** | Interactive challenges with progressive hints | Lab worksheet with guiding questions |
| **Discovery Playground** | Code sandbox with open exploration | Manipulative-based exploration |
| **Data Collection** | Simulated data gathering tools | Data recording sheets |
| **Collaborative Investigation** | Shared digital workspace | Group investigation protocol |
| **Misconception Confrontation** | Scenario that breaks expectations | Predict-Observe-Explain handout |

**Example - Arrays Unit**:
> *Students explore array indexing by building a "Click Collector" game*
> - **Digital**: p5.js editor with starter code (from Arrays module)
> - **Non-Digital**: Index card arrays - physically arrange and access "elements"

---

#### EXPLAIN Phase (1-2 days)
**Goal**: Formalize understanding, introduce vocabulary, direct instruction

| Activity Type | Digital | Non-Digital |
|--------------|---------|-------------|
| **Vocabulary Builder** | Interactive glossary with linked terms | Vocabulary foldable/flipbook |
| **Concept Mapping** | Drag-and-drop concept organizer | Paper-based concept map |
| **Worked Examples** | Step-by-step code walkthrough | Annotated example printout |
| **Student Explanations** | Record & share understanding | Think-Pair-Share protocol |
| **Formative Check** | Quick comprehension quiz | Exit ticket |

**Example - Cryptography Unit**:
> *Students learn cipher terminology and encoding principles*
> - **Digital**: Interactive vocabulary with hover definitions (from Cyber Range)
> - **Non-Digital**: Cipher wheel manipulative, vocabulary journal

---

#### ELABORATE Phase (2-3 days)
**Goal**: Apply knowledge to new contexts, extend understanding through projects

| Activity Type | Digital | Non-Digital |
|--------------|---------|-------------|
| **Transfer Challenge** | New problem using learned concepts | Real-world application worksheet |
| **Mini-Project** | Build something using new skills | Design challenge with constraints |
| **Cross-Curricular Connection** | Interdisciplinary application | Research & presentation |
| **Peer Teaching** | Create tutorial for others | Teaching poster/handout |
| **Extension Challenge** | Advanced problem for acceleration | Challenge card deck |

**Example - Loops Unit**:
> *Students create a "Particle Fountain" animation applying loop concepts*
> - **Digital**: Capstone project in p5.js editor (from Arrays module)
> - **Non-Digital**: Storyboard their animation on paper first, plan logic with flowchart

---

#### EVALUATE Phase (1-2 days)
**Goal**: Demonstrate mastery, receive feedback, reflect on learning

| Activity Type | Digital | Non-Digital |
|--------------|---------|-------------|
| **Performance Task** | Complete a challenge independently | Practical skills demonstration |
| **Portfolio Submission** | Upload completed project | Physical portfolio review |
| **Self-Assessment** | Rubric-based self-evaluation | Reflection journal |
| **Peer Review** | Structured feedback exchange | Peer feedback form |
| **Mastery Quiz** | Competency-based assessment | Written assessment |

**Mastery Criteria Example**:
```
□ Proficient (80%+)  → Move to next unit
□ Developing (60-79%) → Targeted practice + retest
□ Beginning (<60%)    → Intervention loop
```

---

## Activity Type Catalog

### Digital Activities (Computer-Based)

Based on Cyber Range and Arrays/Loops module patterns:

```
┌────────────────────────────────────────────────────────────────┐
│  🖥️ DIGITAL ACTIVITY TYPES                                     │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CHALLENGE LAB (Cyber Range Pattern)                           │
│  ├── Text-based prompt with scenario                           │
│  ├── Answer validation (text, flag, regex)                     │
│  ├── Progressive hints (3 levels)                              │
│  ├── Vocabulary term highlighting                              │
│  ├── Points & difficulty rating                                │
│  └── Explanation on completion                                 │
│                                                                 │
│  CODE PLAYGROUND (Arrays/Loops Pattern)                        │
│  ├── p5.js editor with live preview                            │
│  ├── Starter code template                                     │
│  ├── Output validation (visual or console)                     │
│  ├── Solution reveal after attempts                            │
│  ├── Checkpoint progression                                    │
│  └── Mini-project culmination                                  │
│                                                                 │
│  INTERACTIVE SIMULATION                                         │
│  ├── Visual demonstration of concept                           │
│  ├── Adjustable parameters                                     │
│  ├── Observation prompts                                       │
│  └── Data collection interface                                 │
│                                                                 │
│  FORMATIVE ASSESSMENT                                           │
│  ├── Multiple choice / multiple select                         │
│  ├── Short answer with validation                              │
│  ├── Code completion (fill in blanks)                          │
│  └── Immediate feedback with explanations                      │
│                                                                 │
│  COLLABORATIVE WORKSPACE                                        │
│  ├── Shared document/board                                     │
│  ├── Real-time sync via Firebase                               │
│  ├── Role-based contributions                                  │
│  └── Teacher observation view                                  │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### Non-Digital Activities (Printable/Physical)

```
┌────────────────────────────────────────────────────────────────┐
│  📄 NON-DIGITAL ACTIVITY TYPES                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PRINTABLE WORKSHEETS                                           │
│  ├── Guided notes with blanks                                  │
│  ├── Practice problem sets                                     │
│  ├── Data recording sheets                                     │
│  ├── Graphic organizers                                        │
│  └── Exit tickets / entry tickets                              │
│                                                                 │
│  MANIPULATIVE ACTIVITIES                                        │
│  ├── Card sorting exercises                                    │
│  ├── Cut-and-paste sequencing                                  │
│  ├── Physical simulations (CS Unplugged style)                 │
│  ├── Role-play protocols                                       │
│  └── Gallery walk materials                                    │
│                                                                 │
│  DISCUSSION PROTOCOLS                                           │
│  ├── Four Corners prompts (engage3 cube ready!)                │
│  ├── Think-Pair-Share guides                                   │
│  ├── Socratic seminar questions                                │
│  ├── Fishbowl discussion setup                                 │
│  └── Debate position cards                                     │
│                                                                 │
│  PROJECT PLANNING                                               │
│  ├── Project proposal template                                 │
│  ├── Design thinking canvas                                    │
│  ├── Storyboard templates                                      │
│  ├── Pseudocode planning sheets                                │
│  └── Peer feedback forms                                       │
│                                                                 │
│  ASSESSMENT MATERIALS                                           │
│  ├── Self-assessment rubrics                                   │
│  ├── Peer review checklists                                    │
│  ├── Reflection journals                                       │
│  ├── Portfolio cover sheets                                    │
│  └── Mastery tracking charts                                   │
│                                                                 │
│  REFERENCE MATERIALS                                            │
│  ├── Vocabulary flashcards (printable)                         │
│  ├── Quick reference guides                                    │
│  ├── Syntax cheat sheets                                       │
│  ├── Process posters                                           │
│  └── Concept anchor charts                                     │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## Firebase Architecture

### Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     FIREBASE SERVICES                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   Firebase   │  │   Firestore  │  │   Firebase   │           │
│  │     Auth     │  │   Database   │  │   Storage    │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│         │                 │                 │                    │
│         │    ┌────────────┴────────────┐    │                    │
│         │    │                         │    │                    │
│         ▼    ▼                         ▼    ▼                    │
│  ┌─────────────────┐           ┌─────────────────┐              │
│  │ TEACHER PORTAL  │◀─────────▶│ STUDENT PORTAL  │              │
│  │                 │  realtime │                 │              │
│  │ • Create units  │   sync    │ • Complete work │              │
│  │ • Monitor class │           │ • Track progress│              │
│  │ • View analytics│           │ • Access hints  │              │
│  │ • Grade work    │           │ • Submit projects│             │
│  └─────────────────┘           └─────────────────┘              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Firestore Data Model

```javascript
// COLLECTIONS STRUCTURE

/users/{userId}
  ├── role: "teacher" | "student"
  ├── email: string
  ├── displayName: string
  ├── schoolId: string (optional)
  ├── createdAt: timestamp
  └── settings: { theme, notifications, etc. }

/schools/{schoolId}
  ├── name: string
  ├── teachers: [userId references]
  ├── students: [userId references]
  └── subscription: { tier, expiresAt }

/classes/{classId}
  ├── name: string
  ├── teacherId: userId reference
  ├── students: [userId references]
  ├── joinCode: string (for student enrollment)
  ├── activeUnits: [unitId references]
  ├── settings: { pacing, mastery thresholds }
  └── createdAt: timestamp

/units/{unitId}
  ├── title: string
  ├── description: string
  ├── createdBy: userId reference
  ├── subject: string
  ├── gradeLevel: string
  ├── duration: { weeks: number, totalDays: number }
  ├── standards: [{ code, description }]
  ├── visibility: "private" | "shared" | "public"
  ├── phases: {
  │     engage: { days: number, lessonIds: [] },
  │     explore: { days: number, lessonIds: [] },
  │     explain: { days: number, lessonIds: [] },
  │     elaborate: { days: number, lessonIds: [] },
  │     evaluate: { days: number, lessonIds: [] }
  │   }
  ├── vocabulary: [{ term, definition, category }]
  └── createdAt: timestamp

/lessons/{lessonId}
  ├── unitId: reference
  ├── phase: "engage" | "explore" | "explain" | "elaborate" | "evaluate"
  ├── dayNumber: number
  ├── title: string
  ├── objectives: [string]
  ├── activities: [{
  │     id: string,
  │     type: "challenge" | "playground" | "simulation" | "worksheet" | etc.,
  │     mode: "digital" | "non-digital",
  │     content: { ... activity-specific data ... },
  │     duration: number (minutes),
  │     order: number
  │   }]
  ├── materials: [{
  │     name: string,
  │     type: "printable" | "link" | "file",
  │     url: string (Storage reference or external)
  │   }]
  └── teacherNotes: string

/activities/{activityId}
  ├── lessonId: reference
  ├── type: string
  ├── mode: "digital" | "non-digital"
  ├── title: string
  ├── instructions: string
  ├── content: {
  │     // For Challenge Lab:
  │     prompt: string,
  │     hints: [string],
  │     answer: string,
  │     explanation: string,
  │     points: number,
  │     difficulty: "easy" | "medium" | "hard"
  │
  │     // For Code Playground:
  │     starterCode: string,
  │     solution: string,
  │     testCases: [{ input, expected }],
  │
  │     // For Non-Digital:
  │     printableUrl: string (Firebase Storage),
  │     instructions: string,
  │     teacherGuide: string
  │   }
  ├── vocabularyTerms: [string]
  └── estimatedMinutes: number

/progress/{progressId}
  ├── odsl: classId + "-" + lessonId + "-" + odsl
  ├── odsl: userId reference
  ├── classId: reference
  ├── lessonId: reference
  ├── activityId: reference
  ├── status: "not_started" | "in_progress" | "completed" | "needs_review"
  ├── attempts: number
  ├── hintsUsed: number
  ├── score: number (for graded activities)
  ├── maxScore: number
  ├── responses: { ... student work data ... }
  ├── startedAt: timestamp
  ├── completedAt: timestamp
  └── feedback: { teacherComment, autoFeedback }

/classProgress/{classId}/units/{unitId}
  ├── studentProgress: {
  │     [userId]: {
  │       currentPhase: string,
  │       completedLessons: [lessonId],
  │       totalPoints: number,
  │       masteryStatus: "in_progress" | "proficient" | "mastered"
  │     }
  │   }
  └── aggregates: {
        averageCompletion: number,
        phaseDistribution: { engage: n, explore: n, ... },
        strugglingStudents: [userId],
        commonMisconceptions: [{ activityId, errorPattern, count }]
      }
```

### Real-Time Sync Patterns

```javascript
// Teacher Dashboard - Real-time class monitoring
const classProgressRef = doc(db, 'classProgress', classId, 'units', unitId);
onSnapshot(classProgressRef, (doc) => {
  updateDashboard(doc.data());
});

// Student Progress - Real-time updates
const progressRef = collection(db, 'progress');
const q = query(progressRef,
  where('studentId', '==', currentUser.uid),
  where('classId', '==', currentClassId)
);
onSnapshot(q, (snapshot) => {
  updateProgressDisplay(snapshot.docs);
});

// Live Activity Feed (for teacher)
const recentActivity = query(
  collection(db, 'progress'),
  where('classId', '==', classId),
  orderBy('completedAt', 'desc'),
  limit(20)
);
```

---

## User Flows

### Teacher Flow: Create a Unit

```
┌─────────────────────────────────────────────────────────────────┐
│  TEACHER: CREATE UNIT FLOW                                       │
└─────────────────────────────────────────────────────────────────┘

    ┌──────────┐
    │  START   │
    └────┬─────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────────────────────────┐
│ Select Input    │────▶│ Options:                            │
│ Method          │     │ • Paste scope/sequence              │
└─────────────────┘     │ • Upload unit plan document         │
                        │ • Select from standards             │
                        │ • Use guided wizard                 │
                        └─────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│ System parses   │
│ & generates     │
│ 5E structure    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────────────────────────┐
│ Review & Edit   │────▶│ For each phase:                     │
│ Unit Structure  │     │ • Adjust day allocations            │
└─────────────────┘     │ • Review generated lessons          │
                        │ • Swap/add activities               │
                        │ • Upload custom materials           │
                        └─────────────────────────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────────────────────────┐
│ Configure       │────▶│ • Select digital vs non-digital mix │
│ Activities      │     │ • Customize challenge prompts       │
└─────────────────┘     │ • Set point values                  │
                        │ • Add/edit vocabulary               │
                        │ • Upload printables                 │
                        └─────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│ Preview Unit    │
│ (student view)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────────────────────────┐
│ Assign to Class │────▶│ • Select class(es)                  │
│                 │     │ • Set start date                    │
└─────────────────┘     │ • Configure pacing                  │
                        │ • Enable/disable activities         │
                        └─────────────────────────────────────┘
         │
         ▼
    ┌──────────┐
    │   DONE   │──▶ Students see unit in their dashboard
    └──────────┘
```

### Teacher Flow: Monitor Progress

```
┌─────────────────────────────────────────────────────────────────┐
│  TEACHER DASHBOARD                                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ CLASS: Period 3 Computer Science        [Unit 4: Arrays] │    │
│  ├─────────────────────────────────────────────────────────┤    │
│  │                                                          │    │
│  │  5E PHASE DISTRIBUTION           RECENT ACTIVITY         │    │
│  │  ┌────────────────────────┐     ┌────────────────────┐   │    │
│  │  │ Engage   ████████░░ 8  │     │ • Alex completed   │   │    │
│  │  │ Explore  ██████░░░░ 6  │     │   Challenge 3.2    │   │    │
│  │  │ Explain  ████░░░░░░ 4  │     │ • Sam requested    │   │    │
│  │  │ Elaborate ██░░░░░░░░ 2 │     │   hint on Ex 2.4   │   │    │
│  │  │ Evaluate ░░░░░░░░░░ 0  │     │ • Jordan struggling│   │    │
│  │  └────────────────────────┘     │   (5+ attempts)    │   │    │
│  │                                  └────────────────────┘   │    │
│  │  MASTERY STATUS                  ACTION ITEMS            │    │
│  │  ┌────────────────────────┐     ┌────────────────────┐   │    │
│  │  │ Mastered:      4 (20%) │     │ ⚠ 3 students need  │   │    │
│  │  │ Proficient:    8 (40%) │     │   intervention     │   │    │
│  │  │ Developing:    6 (30%) │     │ 📝 12 submissions  │   │    │
│  │  │ Beginning:     2 (10%) │     │   awaiting review  │   │    │
│  │  └────────────────────────┘     └────────────────────┘   │    │
│  │                                                          │    │
│  │  [View Individual Students]  [Export Progress Report]    │    │
│  │                                                          │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Student Flow: Complete Unit

```
┌─────────────────────────────────────────────────────────────────┐
│  STUDENT: UNIT PROGRESSION FLOW                                  │
└─────────────────────────────────────────────────────────────────┘

    ┌──────────┐
    │  LOGIN   │
    └────┬─────┘
         │
         ▼
┌─────────────────┐
│ Student         │
│ Dashboard       │──▶ See assigned units, current progress
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Select Unit     │──▶ "Unit 4: Arrays and Loops"
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│  UNIT VIEW                                                       │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  🎯 ENGAGE        ✓ Complete                            │    │
│  │  🔍 EXPLORE       ▶ In Progress (Day 2 of 3)            │    │
│  │  📖 EXPLAIN       🔒 Locked                              │    │
│  │  🚀 ELABORATE     🔒 Locked                              │    │
│  │  📊 EVALUATE      🔒 Locked                              │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  Current Activity: Explore Day 2                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Today's Activities:                                     │    │
│  │  ☑ Exercise 2.1: Loop Basics (15 pts) ✓                  │    │
│  │  ☐ Exercise 2.2: Counting Loops (20 pts)                 │    │
│  │  ☐ Exercise 2.3: Loop Challenge (25 pts)                 │    │
│  │  📄 Worksheet: Loop Tracing (print or complete online)   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│ Complete        │
│ Activity        │──▶ Digital: Interactive challenge/code
└────────┬────────┘    Non-Digital: Download PDF, mark complete
         │
         ▼
┌─────────────────┐
│ Receive         │
│ Feedback        │──▶ Automatic feedback + teacher comments
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Progress        │
│ Updates         │──▶ Points added, phase progression
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Next Activity   │
│ or Phase        │──▶ Unlock next content when ready
└─────────────────┘
```

---

## Module Template Mapping

### How Existing Modules Map to 5E Phases

#### Cyber Range → Challenge Lab Template

| 5E Phase | Cyber Range Pattern | Adaptation |
|----------|---------------------|------------|
| **Engage** | Network breach scenario | Opening hook challenge (low stakes) |
| **Explore** | Easy challenges with hints | Guided investigation challenges |
| **Explain** | Vocabulary page | Embedded vocabulary instruction |
| **Elaborate** | Medium/Hard challenges | Transfer & application challenges |
| **Evaluate** | Point-based completion | Mastery assessment challenges |

#### Arrays/Loops → Code Playground Template

| 5E Phase | Arrays/Loops Pattern | Adaptation |
|----------|---------------------|------------|
| **Engage** | Visual p5.js demos | Interactive code demos |
| **Explore** | Day exercises with starter code | Scaffolded coding exploration |
| **Explain** | Inline code comments, hints | Code walkthroughs with vocabulary |
| **Elaborate** | Mini-projects (Click Collector, etc.) | Capstone/transfer projects |
| **Evaluate** | Challenge exercises | Coding assessments |

### New Activity Templates Needed

| Template | Based On | Purpose |
|----------|----------|---------|
| **Simulation Lab** | New (p5.js based) | Interactive concept visualizations |
| **Discussion Prompt** | Four Corners (engage3) | Classroom discourse activities |
| **Worksheet Builder** | New | Generate printable materials |
| **Assessment Builder** | Cyber Range validation | Create quizzes and tests |

---

## Technical Stack

### Frontend (React + Vite)

```
/teacher-portal
├── src/
│   ├── components/
│   │   ├── curriculum/          # Curriculum input & parsing
│   │   ├── unit-builder/        # 5E unit construction
│   │   ├── activity-editor/     # Activity configuration
│   │   ├── dashboard/           # Progress monitoring
│   │   └── common/              # Shared components
│   ├── hooks/
│   │   ├── useFirestore.js      # Firestore operations
│   │   ├── useAuth.js           # Authentication
│   │   └── useRealtime.js       # Real-time subscriptions
│   ├── services/
│   │   ├── curriculumParser.js  # Parse scope/sequence
│   │   ├── lessonGenerator.js   # Generate 5E lessons
│   │   └── printableGenerator.js # Create PDFs
│   └── data/
│       ├── activityTemplates.js # Configurable templates
│       └── vocabularyBank.js    # Pre-loaded terms

/student-portal
├── src/
│   ├── components/
│   │   ├── unit-view/           # Unit navigation
│   │   ├── activities/          # Activity renderers
│   │   │   ├── ChallengeLab.jsx
│   │   │   ├── CodePlayground.jsx
│   │   │   ├── Simulation.jsx
│   │   │   └── Worksheet.jsx
│   │   ├── progress/            # Progress tracking
│   │   └── vocabulary/          # Glossary & flashcards
│   └── hooks/
│       └── useProgress.js       # Track student progress
```

### Firebase Configuration

```javascript
// firebase.config.js
const firebaseConfig = {
  // Standard Firebase config
};

// Firestore security rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Teachers can read/write their own units
    match /units/{unitId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == resource.data.createdBy;
    }

    // Students can read assigned units, write their progress
    match /progress/{progressId} {
      allow read, write: if request.auth.uid == resource.data.studentId;
    }

    // Teachers can read all class progress
    match /classProgress/{classId}/{document=**} {
      allow read: if isTeacherOfClass(classId);
    }
  }
}
```

### Printable Generation

```javascript
// Using jsPDF or similar for printable generation
import { jsPDF } from 'jspdf';

function generateWorksheet(activity) {
  const doc = new jsPDF();

  // Header
  doc.setFontSize(18);
  doc.text(activity.title, 20, 20);

  // Instructions
  doc.setFontSize(12);
  doc.text(activity.instructions, 20, 35);

  // Content (varies by activity type)
  renderActivityContent(doc, activity);

  // Footer with space for name/date
  doc.text('Name: ________________  Date: ________', 20, 280);

  return doc;
}
```

---

## Integration with engage3

### Future Hardware Integration Points

```
┌─────────────────────────────────────────────────────────────────┐
│  ENGAGE3 CUBE INTEGRATION (FUTURE)                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Teacher Module Builder                    engage3 Cubes         │
│  ┌─────────────────────┐                  ┌──────────────┐      │
│  │                     │                  │   ┌─A─┐      │      │
│  │  Discussion Prompt  │ ───generates───▶ │  ┌┴───┴┐     │      │
│  │  Activity           │                  │  │     │     │      │
│  │  • 4 positions      │                  │  │  G  │B    │      │
│  │  • Prompt text      │                  │  │     │     │      │
│  │  • Follow-up Qs     │                  │  └┬───┬┘     │      │
│  │                     │                  │   └─C─┘ D    │      │
│  └─────────────────────┘                  └──────────────┘      │
│           │                                      │               │
│           │         Firebase Real-time           │               │
│           └──────────────────────────────────────┘               │
│                            │                                     │
│                            ▼                                     │
│                   Student Responses                              │
│                   • Position selected (A/B/C/D)                  │
│                   • Response recorded                            │
│                   • Aggregated for teacher view                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Shared Data Layer

The Teacher Module Builder will use the same Firebase structure that engage3 cubes can read from:

```javascript
// Activity types compatible with engage3
const ENGAGE3_COMPATIBLE = [
  'four_corners',      // A, B, C, D positions
  'poll',              // Quick class votes
  'exit_ticket',       // End-of-class check
  'discussion_prompt'  // Open-ended with positions
];

// When creating these activities, format for cube consumption
function formatForEngage3(activity) {
  return {
    id: activity.id,
    type: activity.type,
    prompt: activity.content.prompt,
    options: activity.content.options, // For four corners
    classId: activity.classId,
    active: true,
    createdAt: serverTimestamp()
  };
}
```

---

## MVP Roadmap

### Phase 1: Foundation (Weeks 1-6)

| Week | Focus | Deliverables |
|------|-------|--------------|
| 1-2 | **Project Setup** | Vite + React scaffold, Firebase setup, auth flow |
| 3-4 | **Teacher Portal Core** | Unit builder UI, 5E phase structure, lesson editor |
| 5-6 | **Challenge Lab Template** | Port Cyber Range pattern, answer validation, hints |

### Phase 2: Core Features (Weeks 7-12)

| Week | Focus | Deliverables |
|------|-------|--------------|
| 7-8 | **Code Playground Template** | Port Arrays/Loops pattern, p5.js integration |
| 9-10 | **Student Portal** | Unit view, activity completion, progress tracking |
| 11-12 | **Real-time Sync** | Teacher dashboard, live progress, Firebase listeners |

### Phase 3: Content & Polish (Weeks 13-18)

| Week | Focus | Deliverables |
|------|-------|--------------|
| 13-14 | **Printables System** | PDF generation, worksheet templates, materials library |
| 15-16 | **Curriculum Parser** | Scope/sequence input, lesson generation |
| 17-18 | **Polish & Testing** | UX refinement, testing, documentation |

### Phase 4: Scale (Post-MVP)

- Marketplace for shared units
- LMS integrations (Canvas, Google Classroom)
- engage3 cube integration
- AI-assisted content generation
- Advanced analytics

---

## Key Decisions to Make

### Must Decide Now

1. **Product Name**: What should this be called?
2. **Hosting Model**: Firebase Hosting, or separate infrastructure?
3. **Authentication**: Google-only, or multiple providers?
4. **Initial Subject Focus**: CS only, or broader from start?

### Can Decide Later

1. Pricing model
2. Marketplace features
3. AI content generation
4. engage3 integration specifics
5. LMS integration priorities

---

## Next Steps

1. [ ] Set up project repository structure
2. [ ] Configure Firebase project
3. [ ] Create design mockups for teacher portal
4. [ ] Build authentication flow
5. [ ] Implement 5E unit builder skeleton
6. [ ] Port Challenge Lab template from Cyber Range
7. [ ] Port Code Playground template from Arrays/Loops

---

## References

- [5E Instructional Model - HMH](https://www.hmhco.com/blog/5e-instructional-model)
- [BSCS 5E Research](https://pmc.ncbi.nlm.nih.gov/articles/PMC2931660/)
- [5E Lesson Planning Guide - Nearpod](https://nearpod.com/blog/5e-lesson-plan/)
- [engage3 Project](https://github.com/dscherm/egnage3)
