---
name: pbl-unit-design
description: "Project-Based Learning unit design using backward design. Use when creating PBL units, milestones, entry events, driving questions, checkpoints, or mini-lessons. Keywords: PBL, project-based learning, milestone, entry event, driving question, backward design, Know/Need-to-Know."
---

## Project-Based Learning Unit Design

This skill covers the complete backward-design workflow for creating PBL units within the teacher-module-builder, including destination setting, entry events, milestone planning, daily mini-lessons, and final presentation design.

---

## 1. Backward Design Flow

PBL units are built using a 5-step backward-design wizard located in `src/components/pbl-builder/`. Each step corresponds to a wizard panel in `src/components/pbl-builder/steps/`.

### Step 1 - Destination (Start with the End)

Define what students will produce and what they need to learn to get there.

- **Final Project**: Title, description, public product format, intended audience
- **Essential Questions**: Open-ended driving questions that sustain inquiry across the unit
- **Cognitive Skills**: Select from the 8 cognitive skills in `src/data/cognitiveSkills.js`
- **Standards**: Aligned curriculum standards the project addresses

This step is stored in `destination` within `usePBLStore`.

### Step 2 - Launch (Create the Need to Know)

Design the opening experience that hooks students and generates authentic questions.

- **Entry Event**: A compelling experience that creates a real need to investigate
- **Know/Need-to-Know Board**: Capture what students already know and what they need to learn
- **Rubric Introduction**: Share the assessment criteria so students understand expectations from day one

This step is stored in `launch` within `usePBLStore`.

### Step 3 - Milestones (Map the Journey)

Plan 3 or more milestones that scaffold student work from launch to final product.

- Each milestone covers a week range and has learning objectives, activities, and a checkpoint
- Milestones should progressively build toward the final product
- Each milestone includes a checkpoint assessment for formative feedback
- Mini-lessons are attached to milestones for just-in-time instruction

This step is stored in `milestones[]` within `usePBLStore`.

### Step 4 - Daily Planning (Fill in the Details)

Design mini-lessons within each milestone.

- Short, focused instruction tied to specific learning targets
- Scheduled within the milestone's week range
- Supports the activities and checkpoint of the parent milestone

### Step 5 - Review (Plan the Finale)

Design the final presentation and reflection phase.

- **Presentation Format**: How students will share their work publicly
- **Audience**: Who will see the final product (community members, other classes, experts)
- **Preparation Activities**: Rehearsal, peer feedback, revision sessions
- **Celebration and Debrief**: Structured reflection on the learning journey

This step is stored in `finalPhase` within `usePBLStore`.

---

## 2. Entry Event Design

The entry event is the launch experience that creates authentic motivation. It is stored in `launch.entryEvent` within `usePBLStore`.

### Entry Event Schema

```js
{
  title: String,          // e.g. "Water Quality Mystery"
  description: String,    // detailed description of the event
  type: String,           // one of the types below
  duration: Number        // minutes (typically 30-90)
}
```

### Entry Event Types

| Type | Description | Best For | Duration |
|---|---|---|---|
| `guest_speaker` | Expert visitor shares a real-world problem | Community connection, career awareness | 45-60 min |
| `field_trip` | Visit a relevant site or organization | Place-based learning, sensory engagement | Half/full day |
| `video` | Documentary clip, news story, or student-made video | Quick launch, emotional hook, remote-friendly | 15-30 min |
| `hands_on_demo` | Teacher or student demonstration of a phenomenon | Science/engineering, visual learners | 20-40 min |
| `mystery_scenario` | Present a puzzling situation students must investigate | Critical thinking, narrative engagement | 30-45 min |
| `real_world_problem` | Present authentic data or a community challenge | Relevance, civic engagement | 30-60 min |

### Entry Event Design Principles

1. **Authenticity**: The event should feel real, not contrived. Use actual data, real experts, or genuine problems.
2. **Emotional Hook**: Students should feel surprise, concern, curiosity, or excitement.
3. **Need-to-Know Generation**: The event should naturally produce questions that align with the unit's learning objectives.
4. **Accessibility**: Every student should be able to engage regardless of prior knowledge.
5. **Connection to Final Product**: The entry event should clearly connect to what students will eventually create.

---

## 3. Driving Questions

Driving questions (essential questions) sustain inquiry throughout the unit. They are stored as `destination.essentialQuestions[]` in `usePBLStore`.

### Characteristics of Strong Driving Questions

- **Open-ended**: Cannot be answered with a simple yes/no or a single fact
- **Student-friendly**: Written in accessible language, not academic jargon
- **Standards-aligned**: Investigation of the question naturally covers target standards
- **Engaging**: Students genuinely want to know the answer
- **Revisitable**: The answer deepens as students learn more throughout the unit

### Examples by Subject Area

| Subject | Driving Question |
|---|---|
| Computer Science | "How can we build an app that helps our school reduce food waste?" |
| Science | "Why is the water in our local creek unsafe, and what can we do about it?" |
| Math | "How can we use data to convince the city council to add a crosswalk near our school?" |
| ELA | "Whose stories are missing from our community's history, and how can we tell them?" |
| Social Studies | "How do the decisions of local government affect our daily lives?" |
| Arts | "How can public art transform an overlooked space in our neighborhood?" |

### Multiple Questions Strategy

Most PBL units benefit from 1-3 driving questions:
- **Primary question**: The overarching inquiry that spans the entire unit
- **Supporting questions**: Narrower questions that address specific milestones or content areas
- All questions should be answerable through the final product

---

## 4. Know/Need-to-Know Board

The K/NTK board is a living document that captures student thinking after the entry event. It is stored in `launch.knowNeedToKnow` within `usePBLStore`.

### Data Structure

```js
{
  knows: [
    { id: String, text: String }
  ],
  needToKnows: [
    {
      id: String,
      text: String,
      status: String,            // 'open' | 'in_progress' | 'addressed'
      assignedMilestone: String  // milestone id or null
    }
  ]
}
```

### Status Tracking Workflow

```
open --> in_progress --> addressed
```

- **open**: Question has been identified but not yet scheduled for instruction
- **in_progress**: Question is being addressed in the current milestone
- **addressed**: Question has been answered through instruction or investigation

### Using the K/NTK Board for Planning

1. After the entry event, capture all student questions in `needToKnows`.
2. Group related questions and map them to milestones via `assignedMilestone`.
3. Verify that every Need-to-Know is assigned to at least one milestone.
4. Update status as the unit progresses to track coverage.
5. If new Need-to-Knows emerge mid-unit, add them and assign to remaining milestones.
6. By the final phase, all Need-to-Knows should be `addressed`.

---

## 5. Milestone Types

Milestones are the major scaffolded checkpoints that structure student work from launch to final product. Default milestone types are defined in `usePBLStore`.

### Milestone Schema

```js
{
  id: String,
  title: String,
  weekRange: [Number, Number],    // e.g. [1, 2] for weeks 1-2
  type: String,                   // one of the types below
  description: String,
  learningObjectives: [String],
  activities: [String],           // activity descriptions
  checkpoint: {
    title: String,
    cognitiveSkills: [String],    // from cognitiveSkills.js
    assessmentType: String        // from checkpoint types
  },
  miniLessons: [{
    id: String,
    title: String,
    duration: Number,             // minutes (10-20)
    learningTarget: String,
    instruction: String
  }]
}
```

### Milestone Types

| Type | Description | Typical Activities | Best For |
|---|---|---|---|
| `research` | Students gather and analyze information | Source evaluation, interviews, data collection | Early milestones, building content knowledge |
| `design_challenge` | Students design a solution or plan | Sketching, prototyping, planning documents | Engineering, creative projects |
| `lab` | Students conduct experiments or investigations | Data collection, analysis, hypothesis testing | Science, empirical inquiry |
| `discussion` | Students engage in structured academic discourse | Seminars, debates, fishbowl discussions | Humanities, ethical dilemmas |
| `prototype` | Students build and test a working version | Construction, coding, iteration, testing | Later milestones, moving toward final product |

### Milestone Sequencing Principles

1. **Build Complexity**: Early milestones focus on knowledge acquisition; later milestones focus on application and synthesis.
2. **3+ Milestones Minimum**: Most units need at least 3 milestones to provide adequate scaffolding.
3. **Week Ranges Should Not Overlap**: Each milestone covers a distinct time period.
4. **Final Milestone Connects to Product**: The last milestone should produce a draft or prototype of the final product.
5. **Each Milestone Has a Checkpoint**: Formative assessment at every milestone ensures students stay on track.

---

## 6. Checkpoint Assessment Types

Each milestone includes a checkpoint for formative feedback. Checkpoint types map to protocols defined in `src/data/pblProtocols.js`.

### Checkpoint Schema

```js
{
  title: String,
  cognitiveSkills: [String],      // skills being assessed
  assessmentType: String          // one of the types below
}
```

### Assessment Types

| Type | Description | Duration | Best For |
|---|---|---|---|
| `peer_critique` | Students give structured feedback on peer work | 20-30 min | Revision cycles, collaborative growth |
| `self_assessment` | Students evaluate their own work against criteria | 15-20 min | Metacognition, self-regulation |
| `gallery_walk` | Students display work and circulate to view and comment | 30-45 min | Visual products, diverse perspectives |
| `conference` | Teacher meets 1:1 or with small groups for feedback | 5-10 min/student | Personalized feedback, struggling students |
| `presentation` | Students present progress to the class or a panel | Variable | Communication skills, oral defense |
| `portfolio_review` | Students curate and reflect on collected work samples | 20-30 min | Longitudinal growth, self-direction |

---

## 7. PBL Protocols

All 10 PBL protocols are defined in `src/data/pblProtocols.js`, organized by when they are used in the PBL cycle.

### Launch Protocols

| Protocol | Duration | Purpose |
|---|---|---|
| `entry_event` | 30-60 min | Structured facilitation of the entry event experience |
| `rubric_unpacking` | 45-60 min | Students analyze the rubric to understand quality criteria and success indicators |
| `know_need_to_know` | 30-45 min | Facilitated brainstorm to populate the K/NTK board after the entry event |

### Milestone Protocols

| Protocol | Duration | Purpose |
|---|---|---|
| `peer_critique` | 20-30 min | Structured "Kind, Specific, Helpful" feedback on work-in-progress |
| `tuning_protocol` | 45-60 min | Presenter shares work, participants ask clarifying questions, then give warm/cool feedback |
| `gallery_walk` | 30-45 min | Silent circulation with sticky-note feedback, followed by debrief discussion |

### Reflection Protocols

| Protocol | Duration | Purpose |
|---|---|---|
| `reflection_journal` | 10-15 min | Guided journal prompts for individual processing of learning |
| `success_analysis` | 20-30 min | Group analysis of what is working well and what needs adjustment |

### Checkpoint Protocols

| Protocol | Duration | Purpose |
|---|---|---|
| `checkpoint_conference` | 5-10 min/student | One-on-one or small-group check-in with the teacher using a structured protocol |
| `self_assessment` | 15-20 min | Students rate themselves on cognitive skill rubrics and set goals for the next milestone |

### Final Protocols

| Protocol | Duration | Purpose |
|---|---|---|
| `presentation_prep` | 1-2 periods | Rehearsal, peer feedback on presentations, revision of delivery and materials |
| `celebration_debrief` | 30-45 min | Structured celebration of learning followed by reflective debrief on the PBL experience |

---

## 8. Cognitive Skills

The 8 cognitive skills are defined in `src/data/cognitiveSkills.js` and are used throughout PBL for learning objectives, checkpoint assessments, and rubrics.

### Skills by Category

| Category | Skills | Description |
|---|---|---|
| **Thinking** | `analysis`, `critical_thinking`, `creativity` | How students process, evaluate, and generate ideas |
| **Interpersonal** | `communication`, `collaboration` | How students interact and work with others |
| **Intrapersonal** | `self_direction` | How students manage their own learning |
| **Academic** | `problem_solving`, `research` | How students investigate and solve problems |

### Rubric Levels

Each cognitive skill uses a four-level rubric progression:

| Level | Description |
|---|---|
| **Emerging** | Beginning to demonstrate the skill with significant support |
| **Developing** | Demonstrates the skill inconsistently or with some support |
| **Proficient** | Demonstrates the skill consistently and independently |
| **Advanced** | Demonstrates the skill with depth, nuance, and transfer to new contexts |

### Recommended Skill Combinations by Domain

| Domain | Primary Skills | Supporting Skills |
|---|---|---|
| **STEM** | `analysis`, `problem_solving`, `research` | `collaboration`, `communication` |
| **Humanities** | `critical_thinking`, `communication`, `research` | `collaboration`, `self_direction` |
| **Arts** | `creativity`, `communication`, `self_direction` | `collaboration`, `critical_thinking` |
| **Interdisciplinary** | `problem_solving`, `collaboration`, `communication` | `creativity`, `research`, `self_direction` |

### Mapping Skills to Milestones

- Each milestone checkpoint should assess 1-3 cognitive skills.
- Skills should appear in multiple milestones for iterative growth.
- The final presentation should assess communication plus the unit's primary skills.
- Self-assessment checkpoints should always include `self_direction`.

---

## 9. Mini-Lesson Design

Mini-lessons are short, focused instructional segments embedded within milestones. They provide just-in-time teaching when students need specific skills or content knowledge.

### Mini-Lesson Schema

```js
{
  id: String,
  title: String,            // e.g. "How to Write a Survey Question"
  duration: Number,         // 10-20 minutes
  learningTarget: String,   // specific, measurable target
  instruction: String       // description of the instruction
}
```

### Mini-Lesson Design Principles

1. **Just-in-Time**: Teach skills when students need them for their current milestone work, not weeks in advance.
2. **Short and Focused**: 10-20 minutes maximum. One learning target per mini-lesson.
3. **Immediately Applicable**: Students should use the skill in their project work immediately after the mini-lesson.
4. **Skills-Based**: Focus on transferable skills (how to cite sources, how to give feedback, how to read a data table) rather than content delivery.
5. **Differentiated**: Not all students need every mini-lesson. Use data from checkpoints to target instruction.

### Common Mini-Lesson Topics by Milestone Type

| Milestone Type | Mini-Lesson Topics |
|---|---|
| `research` | Evaluating sources, taking notes, synthesizing information, citing evidence |
| `design_challenge` | Design thinking process, sketching techniques, constraints analysis |
| `lab` | Lab safety, data collection methods, graphing and analysis, controlling variables |
| `discussion` | Active listening, building on ideas, using evidence in arguments |
| `prototype` | Iteration strategies, user testing, technical skills specific to the product |

---

## 10. Key Project Files

| File | Purpose |
|---|---|
| `src/hooks/usePBLStore.js` | Zustand store for PBL unit state, all CRUD operations, default structures |
| `src/data/pblProtocols.js` | All 10 PBL protocol definitions with durations, steps, and facilitation notes |
| `src/data/cognitiveSkills.js` | 8 cognitive skills with categories, rubric levels, and recommended combinations |
| `src/components/pbl-builder/` | PBL builder wizard container and shared components |
| `src/components/pbl-builder/steps/` | Individual wizard step components (Destination, Launch, Milestones, DailyPlanning, Review) |
| `src/components/pbl-builder/steps/DestinationStep.jsx` | Final project, essential questions, standards selection |
| `src/components/pbl-builder/steps/LaunchStep.jsx` | Entry event design and K/NTK board |
| `src/components/pbl-builder/steps/MilestonesStep.jsx` | Milestone planning with checkpoints and activities |
| `src/components/pbl-builder/steps/DailyPlanningStep.jsx` | Mini-lesson scheduling within milestones |
| `src/components/pbl-builder/steps/ReviewStep.jsx` | Final phase planning and unit summary |

---

## 11. PBL Unit Data Structure

The complete PBL unit shape as managed by `usePBLStore`:

```js
{
  id: String,
  title: String,
  subject: String,
  gradeLevel: String,
  unitType: 'pbl',
  duration: {
    totalWeeks: 7,              // total unit length
    totalDays: 35               // calculated from weeks
  },
  destination: {
    finalProject: {
      title: String,
      description: String,
      publicProduct: String,    // e.g. "Website", "Presentation", "Physical Model"
      audience: String          // e.g. "City council", "School community", "Parents"
    },
    essentialQuestions: [String],
    cognitiveSkills: [String],  // ids from cognitiveSkills.js
    standards: [{
      code: String,
      description: String
    }]
  },
  launch: {
    entryEvent: {
      title: String,
      description: String,
      type: String,             // guest_speaker | field_trip | video | hands_on_demo | mystery_scenario | real_world_problem
      duration: Number          // minutes
    },
    rubricUrl: String,          // link to project rubric
    knowNeedToKnow: {
      knows: [{ id: String, text: String }],
      needToKnows: [{
        id: String,
        text: String,
        status: String,         // open | in_progress | addressed
        assignedMilestone: String
      }]
    }
  },
  milestones: [{
    id: String,
    title: String,
    weekRange: [Number, Number],
    type: String,               // lab | discussion | design_challenge | research | prototype
    description: String,
    learningObjectives: [String],
    activities: [String],
    checkpoint: {
      title: String,
      cognitiveSkills: [String],
      assessmentType: String    // peer_critique | self_assessment | gallery_walk | conference | presentation | portfolio_review
    },
    miniLessons: [{
      id: String,
      title: String,
      duration: Number,         // 10-20 minutes
      learningTarget: String,
      instruction: String
    }]
  }],
  reflections: [{
    id: String,
    weekNumber: Number,
    title: String,
    prompts: [String]
  }],
  finalPhase: {
    presentationFormat: String,     // e.g. "Panel presentation", "Exhibition", "Demo Day"
    audienceDetails: String,        // description of who attends
    presentationDate: String,       // ISO date
    preparationActivities: [String] // list of prep activity descriptions
  },
  status: String,               // 'draft' | 'published'
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Store Actions (usePBLStore)

| Action | Signature | Purpose |
|---|---|---|
| `setUnit` | `(unit) => void` | Replace the entire PBL unit state |
| `updateDestination` | `(updates) => void` | Merge updates into `destination` |
| `updateLaunch` | `(updates) => void` | Merge updates into `launch` |
| `addMilestone` | `(milestone) => void` | Append a new milestone |
| `updateMilestone` | `(milestoneId, updates) => void` | Merge updates into a milestone |
| `removeMilestone` | `(milestoneId) => void` | Delete a milestone |
| `reorderMilestones` | `(orderedIds) => void` | Change milestone order |
| `addMiniLesson` | `(milestoneId, miniLesson) => void` | Add a mini-lesson to a milestone |
| `updateMiniLesson` | `(milestoneId, miniLessonId, updates) => void` | Edit a mini-lesson |
| `removeMiniLesson` | `(milestoneId, miniLessonId) => void` | Remove a mini-lesson |
| `addNeedToKnow` | `(text) => void` | Add a new Need-to-Know item |
| `updateNeedToKnow` | `(id, updates) => void` | Update status or assignment of a NTK item |
| `updateFinalPhase` | `(updates) => void` | Merge updates into `finalPhase` |

---

## 12. PBL Design Quality Checklist

When creating or reviewing a PBL unit, verify the following:

1. **Clear Public Product**: The final product is tangible, meaningful, and shared with an audience beyond the classroom.
2. **Authentic Driving Question**: The essential question connects to real-world issues students care about.
3. **Standards Coverage**: All target standards are addressed through milestones and the final product.
4. **Scaffolded Milestones**: Milestones build progressively from knowledge acquisition to product creation.
5. **Formative Checkpoints**: Every milestone has a checkpoint that provides actionable feedback before moving forward.
6. **K/NTK Coverage**: Every Need-to-Know is mapped to a milestone and eventually addressed.
7. **Cognitive Skill Development**: Skills are practiced across multiple milestones with increasing independence.
8. **Student Voice and Choice**: Students have meaningful decisions about their approach, product format, or focus area.
9. **Reflection Integration**: Regular reflection opportunities (journals, self-assessments) are built into the timeline.
10. **Realistic Timeline**: Week ranges account for the complexity of activities and allow buffer time for iteration.
