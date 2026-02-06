---
name: assessment-design
description: "Assessment design for formative and summative evaluation. Use when creating exit tickets, quizzes, rubrics, checkpoints, peer critique protocols, or self-assessments. Keywords: assessment, exit ticket, quiz, rubric, formative, summative, checkpoint, peer critique, self-assessment, cognitive skills."
---

# Assessment Design

This skill covers formative and summative assessment design for the teacher-module-builder
project. Use it when creating exit tickets, designing quizzes, building rubrics from
cognitive skills, configuring PBL checkpoints, or planning assessment strategies that
align with learning objectives.

---

## Exit Ticket Types

Exit tickets are brief end-of-lesson assessments that provide immediate feedback on
student understanding. The project defines exit ticket types in the `EXIT_TICKETS`
object in `src/data/activitySuggestions.js`.

### Reflection Exit Tickets

Best for: Consolidating learning, making connections, synthesizing key ideas.

| Name | Description | When to Use |
|------|-------------|-------------|
| **3-2-1** | 3 things learned, 2 questions remaining, 1 connection to prior knowledge | End of Explain or Elaborate phase; provides structured reflection |
| **Muddiest Point** | Students identify the concept they found most confusing | After introducing new material; identifies re-teaching needs |
| **One Sentence Summary** | Summarize today's learning in a single sentence | End of any lesson; checks for big-picture understanding |
| **Headline** | Write a newspaper headline capturing the main idea | End of Explain phase; creative synthesis of key concept |

### Metacognition Exit Tickets

Best for: Building self-awareness, developing student agency, monitoring confidence.

| Name | Description | When to Use |
|------|-------------|-------------|
| **Confidence Check** | Rate understanding on a scale (e.g., 1-5 or emoji scale) | Quick pulse check; reveals gap between actual and perceived understanding |
| **Stuck/Unstuck** | Describe where you got stuck and how you got unstuck | After problem-solving activities; builds perseverance awareness |
| **Learning Target Self-Assessment** | Students rate themselves against the stated objective | When objectives are displayed; builds goal awareness |

### Application Exit Tickets

Best for: Transfer of learning, real-world connections, deeper thinking.

| Name | Description | When to Use |
|------|-------------|-------------|
| **Real World Connection** | Describe how today's learning connects to the real world | After Elaborate phase; checks for transfer beyond classroom |
| **What If** | Respond to a hypothetical scenario using today's learning | After Explore or Explain; checks for flexible application |
| **Teach Someone** | Explain today's concept as if teaching a younger student | End of Explain phase; Feynman technique for understanding |

### Quick Check Exit Tickets

Best for: Rapid formative data, binary assessment, time-limited situations.

| Name | Description | When to Use |
|------|-------------|-------------|
| **Quick Question** | One targeted question on the key concept | When time is short (2-3 min); pinpoints specific understanding |
| **Thumbs Up/Down/Sideways** | Simple three-level self-assessment | Fastest option (30 seconds); useful for pacing decisions |

### Exit Ticket Selection Guide by 5E Phase

| Phase | Recommended Types | Rationale |
|-------|------------------|-----------|
| Engage | Quick Check, Metacognition | Baseline data, prior knowledge check |
| Explore | Metacognition, Application | Process reflection, early connections |
| Explain | Reflection, Quick Check | Concept understanding, vocabulary check |
| Elaborate | Application, Reflection | Transfer, synthesis, extension |
| Evaluate | Quick Check, Metacognition | Final understanding, self-assessment |

---

## Checkpoint Design for PBL

PBL checkpoints are assessment moments embedded within milestones. They are managed
through `usePBLStore` in `src/hooks/usePBLStore.js` and edited via
`src/components/pbl-builder/CheckpointEditor.jsx`.

### Checkpoint Object Structure

```javascript
{
  title: "Peer Critique: Research Findings",
  cognitiveSkills: ["analysis", "communication"],   // from cognitiveSkills.js
  assessmentType: "peer_critique",                   // one of the types below
  duration: 25,                                      // minutes
  instructions: "Use the Kind-Specific-Helpful protocol..."
}
```

### Assessment Types

#### peer_critique (20-30 minutes)

- **Protocol**: Kind, Specific, Helpful feedback
- **Structure**: Students exchange work, provide written feedback using sentence starters
- **Sentence starters**: "I notice...", "I wonder...", "What if you tried..."
- **Best for**: Draft review, design feedback, mid-project improvement
- **Cognitive skills**: communication, critical_thinking, collaboration
- **Setup**: Pair students strategically; provide feedback forms or digital templates

#### self_assessment (15-20 minutes)

- **Protocol**: Students evaluate their own work against rubric criteria
- **Structure**: Students rate themselves on each rubric dimension, provide evidence
- **Best for**: Building metacognition, goal setting, identifying growth areas
- **Cognitive skills**: self_direction, critical_thinking
- **Setup**: Provide the rubric in advance; model self-assessment with an exemplar

#### gallery_walk (30-45 minutes)

- **Protocol**: Work displayed around room; students circulate and provide feedback
- **Structure**: Silent viewing (5 min) then written feedback on sticky notes or forms
- **Best for**: Sharing multiple pieces of work, cross-pollinating ideas, celebrating progress
- **Cognitive skills**: communication, analysis, creativity
- **Setup**: Provide structured feedback prompts; assign viewing order to avoid clustering

#### conference (5-10 minutes per student)

- **Protocol**: One-on-one teacher-student conversation about progress
- **Structure**: Teacher asks guiding questions; student reflects on process and product
- **Guiding questions**: "What's working?", "Where are you stuck?", "What's your next step?"
- **Best for**: Individual feedback, relationship building, catching struggling students
- **Cognitive skills**: self_direction, communication
- **Setup**: Schedule slots; provide other students with independent work during conferences

#### presentation (varies by class size)

- **Protocol**: Student or group presents work to an audience
- **Structure**: Formal presentation with Q&A period
- **Best for**: Final product sharing, public speaking practice, culminating assessment
- **Cognitive skills**: communication, self_direction
- **Setup**: Provide presentation guidelines, time limits, and audience expectations

#### portfolio_review (20-30 minutes)

- **Protocol**: Students compile and annotate a collection of work over time
- **Structure**: Selection of artifacts, written reflection on growth, goal setting
- **Best for**: Documenting learning journey, longitudinal assessment, student ownership
- **Cognitive skills**: self_direction, critical_thinking, communication
- **Setup**: Define required artifact count; provide reflection prompts

### Checkpoint Placement Strategy

- **Milestone 1** (Launch): self_assessment or conference -- establish baselines
- **Milestone 2** (Research/Explore): peer_critique -- improve early drafts
- **Milestone 3** (Create/Build): gallery_walk -- share works in progress
- **Milestone 4** (Refine): peer_critique or conference -- final feedback round
- **Milestone 5** (Present): presentation or portfolio_review -- culminating assessment

---

## Quiz Design Best Practices

Quizzes are one of the 10 activity types in the project. They are configured through
`src/components/activities/QuizEditor.jsx` and defined in `src/data/activityTemplates.js`.

### Quiz Activity Structure

```javascript
{
  id: "act_quiz_001",
  type: "quiz",
  title: "Chemical Reactions Formative Check",
  instructions: "Answer the following questions...",
  duration: 15,             // minutes
  points: 20,               // total points
  settings: {
    timeLimit: 15,          // minutes (0 = no limit)
    attempts: 1,            // number of attempts allowed
    showResults: true,      // show results after submission
    randomizeQuestions: false
  },
  questions: [...]          // array of question objects
}
```

### Multiple Choice Question Design

**Strong distractor principles:**
- Each distractor should represent a common misconception or procedural error
- Avoid "all of the above" and "none of the above"
- Keep answer choices parallel in length and structure
- Randomize correct answer position

**Example with misconception-based distractors:**

```
Q: What happens to the total mass when iron rusts?
A) It increases (correct -- oxygen is added)
B) It decreases (misconception: "things get lighter when they decay")
C) It stays the same (misconception: confusing closed/open system)
D) It doubles (misconception: confusing mass with volume change)
```

### Short Answer Question Design

- State the expected response format: "In 2-3 sentences, explain..."
- Provide clear rubric criteria for partial credit
- Avoid questions with multiple equally valid interpretations
- Consider providing a word bank for vocabulary-focused questions

### Quiz as Learning Tool (Retrieval Practice)

Low-stakes quizzes are powerful learning tools when used as retrieval practice:

- **Frequency**: Short quizzes frequently (every 2-3 lessons) rather than long quizzes rarely
- **Stakes**: Keep point values low; emphasize learning over grading
- **Feedback**: Immediate feedback is critical; show correct answers and explanations
- **Spacing**: Quiz on material from previous lessons, not just the current one
- **Settings**: Allow multiple attempts (`attempts: 2-3`) for learning-focused quizzes

### Formative vs Summative Quiz Comparison

| Aspect | Formative Quiz | Summative Quiz |
|--------|---------------|----------------|
| Purpose | Check understanding, inform instruction | Measure mastery, assign grade |
| Timing | During or between lessons | End of unit or phase |
| Stakes | Low (participation credit) | Higher (graded) |
| Attempts | Multiple (2-3) | Single |
| Feedback | Immediate with explanations | After all students complete |
| Length | 3-5 questions, 5-10 min | 10-20 questions, 20-30 min |
| Question types | Quick recall, application | Full range including analysis |

---

## Rubric Design with Cognitive Skills

The project includes 8 cognitive skills defined in `src/data/cognitiveSkills.js`. Each
skill has pre-built rubric criteria across 4 proficiency levels.

### The 8 Cognitive Skills

| Skill | Description | Key Verbs |
|-------|-------------|-----------|
| `analysis` | Breaking down complex information to understand parts and relationships | examine, compare, contrast, categorize, investigate |
| `communication` | Expressing ideas clearly in written, oral, and visual forms | present, articulate, explain, illustrate, document |
| `collaboration` | Working effectively with others toward shared goals | cooperate, negotiate, contribute, listen, delegate |
| `creativity` | Generating novel ideas, approaches, or products | design, invent, imagine, innovate, remix |
| `critical_thinking` | Evaluating evidence, reasoning logically, making sound judgments | evaluate, argue, justify, question, assess |
| `problem_solving` | Identifying problems and developing systematic solutions | troubleshoot, debug, iterate, optimize, strategize |
| `self_direction` | Managing one's own learning, setting goals, reflecting on progress | plan, reflect, persevere, adapt, monitor |
| `research` | Finding, evaluating, and synthesizing information from multiple sources | investigate, curate, synthesize, cite, verify |

### Rubric Proficiency Levels

Each cognitive skill defines rubric criteria at four levels:

| Level | Label | General Description |
|-------|-------|-------------------|
| 1 | **Emerging** | Student shows initial awareness but needs significant support |
| 2 | **Developing** | Student demonstrates partial understanding with some independence |
| 3 | **Proficient** | Student meets expectations independently and consistently |
| 4 | **Advanced** | Student exceeds expectations, shows sophistication and depth |

### Example Rubric Criteria (Analysis Skill)

```javascript
// From cognitiveSkills.js
analysis: {
  rubricCriteria: {
    emerging: "Identifies basic information but struggles to break it into component parts or find relationships.",
    developing: "Breaks information into parts and identifies some relationships with support.",
    proficient: "Independently analyzes information, identifies patterns, and explains relationships between parts.",
    advanced: "Conducts sophisticated analysis, identifies subtle patterns, and draws insightful conclusions supported by evidence."
  }
}
```

### Recommended Skill Combinations by Domain

Select 3-4 cognitive skills per rubric. Avoid using all 8 -- focus on the most relevant.

| Domain | Primary Skills | Secondary Skills |
|--------|---------------|-----------------|
| **STEM** | analysis, problem_solving | communication, collaboration |
| **Humanities** | research, critical_thinking | communication, creativity |
| **Arts** | creativity, communication | collaboration, self_direction |
| **Interdisciplinary** | analysis, collaboration | communication, problem_solving |
| **CS/Technology** | problem_solving, creativity | analysis, collaboration |
| **PBL (General)** | collaboration, communication | critical_thinking, self_direction |

### Building a Custom Rubric

1. Select 3-4 cognitive skills appropriate for the assessment
2. Pull the `rubricCriteria` from each selected skill in `cognitiveSkills.js`
3. Customize the criteria to match the specific assignment
4. Add task-specific indicators to each level
5. Assign point values or weights to each skill

**Example rubric for a science PBL presentation:**

| Skill | Emerging (1) | Developing (2) | Proficient (3) | Advanced (4) |
|-------|-------------|----------------|-----------------|---------------|
| analysis | States findings without explanation | Explains some findings with basic evidence | Clearly analyzes data and explains patterns with supporting evidence | Sophisticated analysis with multiple evidence types and nuanced conclusions |
| communication | Presentation is unclear or disorganized | Mostly clear with some organizational gaps | Well-organized, clear, engaging presentation | Compelling, polished presentation adapted to audience |
| collaboration | Minimal contribution to group work | Contributes when prompted; some cooperation | Active contributor; supports team effectively | Elevates team performance; facilitates others' contributions |

---

## Formative Assessment Strategies Embedded in Lessons

Formative assessment should be woven throughout every lesson, not just at the end. Here
is how each activity type serves as a formative assessment opportunity.

### Minds On as Pre-Assessment

- **Prediction Poll**: Reveals prior knowledge and misconceptions before instruction
- **KWL Chart**: Documents what students already know (K) and want to know (W)
- **Concept Map Starter**: Shows existing mental models and connections
- **Data to collect**: Note common predictions/misconceptions to address during Explain
- **Action**: If most students have accurate prior knowledge, accelerate pacing; if
  misconceptions are widespread, plan targeted instruction

### During Work Time: Observation and Questioning

- **Circulate** with a clipboard or device to record observations
- **Ask probing questions**: "Why did you choose that approach?", "What would happen if...?"
- **Quick check techniques**: Finger voting (1-5), mini-whiteboards, partner retell
- **Look for**: Common errors, productive struggle vs. unproductive frustration, pacing
- **Action**: Pull small groups for re-teaching; adjust time allocation; provide hints

### Share Out as Informal Assessment

- **Listen for**: Use of academic vocabulary, accuracy of explanations, depth of reasoning
- **Whip Around**: Every student speaks briefly -- quick scan for understanding
- **Gallery Walk feedback**: Written responses reveal analytical thinking level
- **Action**: Note students who struggle to articulate; plan follow-up support

### Exit Tickets as Daily Formative Data

- **Collect and sort**: Quickly sort into "got it," "almost," and "not yet" piles
- **Quantify**: Track percentage of students at each level over time
- **Respond**: Address "not yet" group in the next lesson's Minds On
- **Pattern tracking**: If the same students are consistently "not yet," plan intervention

### Metacognition Exit Tickets for Self-Awareness

- **Confidence Check + Quick Question combo**: Compare self-rated confidence with actual
  performance to identify students who think they understand but do not (and vice versa)
- **Stuck/Unstuck**: Builds problem-solving awareness; reveals productive struggle habits
- **Action**: Calibrate students' self-assessment accuracy over time; celebrate growth
  in metacognitive skills

---

## Using Assessment Data to Inform Instruction

Assessment is only valuable if it drives instructional decisions. Follow this cycle.

### The Formative Assessment Cycle

```
Teach --> Assess --> Analyze --> Adjust --> Re-teach/Advance
  ^                                              |
  |______________________________________________|
```

### Adjust Pacing Based on Exit Ticket Responses

| Result | Action |
|--------|--------|
| 80%+ "got it" | Proceed to next lesson; provide extension for advanced students |
| 60-80% "got it" | Brief review at start of next lesson; targeted small group support |
| Below 60% "got it" | Re-teach using a different approach before moving on |

### Re-teach Based on Quiz Results

- Identify the specific questions with lowest scores
- Analyze the most common wrong answers to understand the misconception
- Design a targeted mini-lesson addressing that specific misconception
- Use a different modality than the original instruction (visual if was verbal, etc.)
- Re-assess with a similar but not identical question

### Group Students by Readiness

- Use exit ticket or quiz data to form flexible groups
- **Approaching**: More scaffolding, concrete examples, guided practice
- **Meeting**: On-level practice with some independence
- **Exceeding**: Extension tasks, peer tutoring, enrichment challenges
- Regroup frequently (every 1-2 weeks) based on new data

### Modify Upcoming Lessons Based on Checkpoint Outcomes

In PBL units, checkpoint data should influence subsequent milestone planning:

- **Peer critique reveals weak research**: Add a research skill mini-lesson
- **Self-assessment shows low confidence**: Build in more structured scaffolding
- **Gallery walk feedback is surface-level**: Model deeper feedback strategies
- **Conference reveals off-track students**: Adjust milestone timeline or scope

---

## Key Project Files

| File | Purpose |
|------|---------|
| `src/data/activitySuggestions.js` | `EXIT_TICKETS` object with all exit ticket types and categories |
| `src/data/cognitiveSkills.js` | 8 cognitive skills with descriptions, verbs, and `rubricCriteria` at 4 levels |
| `src/data/pblProtocols.js` | PBL assessment protocols (peer critique, gallery walk, etc.) |
| `src/hooks/usePBLStore.js` | PBL store with checkpoint structure in milestones |
| `src/data/activityTemplates.js` | Activity type definitions including quiz template |
| `src/components/activities/QuizEditor.jsx` | Quiz question editor UI with settings |
| `src/components/pbl-builder/CheckpointEditor.jsx` | Checkpoint configuration UI |
| `src/components/activities/ExitTicketEditor.jsx` | Exit ticket selection and customization |
| `src/components/rubric/RubricBuilder.jsx` | Rubric creation from cognitive skills |
