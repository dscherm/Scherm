---
name: write-activity-content
description: "Writing effective activity content, prompts, and instructions for lessons. Use when creating activity text, discussion prompts, challenge lab instructions, minds on hooks, exit tickets, or any student-facing content. Keywords: activity content, prompt writing, discussion prompt, challenge lab, minds on, exit ticket, instructions."
---

# Writing Effective Activity Content

This skill covers writing student-facing content for activities in the teacher-module-builder
project. Use it when composing activity instructions, designing discussion prompts,
crafting challenge lab scenarios, writing engaging Minds On hooks, authoring exit ticket
questions, or creating any content that students will read and respond to.

---

## Writing Engaging Activity Prompts -- General Principles

Every activity in the project follows a common structure stored in the lesson data:

```javascript
{
  id: "act_001",
  type: "work_time",           // one of 10 activity types
  title: "Investigate Reaction Rates",
  instructions: "...",         // the student-facing content
  duration: 20,                // minutes
  points: 0                   // optional point value
}
```

### Core Writing Principles

1. **Clear, student-friendly language**: Write at the reading level of the target grade
   band. Avoid jargon unless it has been explicitly taught. Define technical terms on
   first use.

2. **Action-oriented instructions**: Start with a verb. "Observe the simulation and
   record..." is stronger than "In this activity, you will be observing..."

3. **Context before task**: Provide the "why" before the "what." A brief framing sentence
   helps students understand purpose. Example: "Scientists use models to predict behavior.
   Today, you will build a model that predicts..."

4. **Success criteria included**: Tell students what a good result looks like. "Your
   explanation should include at least two pieces of evidence from the data table."

5. **Appropriate length by activity type**:

   | Activity Type | Instruction Length | Guidance |
   |--------------|-------------------|----------|
   | minds_on | 2-4 sentences | Brief and intriguing; spark curiosity |
   | work_time | 1-2 paragraphs | Clear steps; chunked for readability |
   | challenge_lab | 2-3 paragraphs + hints | Full scenario with scaffolded support |
   | discussion | 1 paragraph + question | Context then the discussion question |
   | share_out | 2-4 sentences | Protocol instructions and expectations |
   | exit_ticket | 1-3 sentences | Direct and focused; one clear prompt |
   | quiz | Per-question | Stems + options; clear and unambiguous |
   | video | 1-2 sentences | What to watch for; focus questions |
   | reading | 1-2 paragraphs | Reading purpose, annotation guidance |
   | presentation | 1 paragraph | Requirements, time limit, audience |

6. **Formatting for readability**: Use numbered steps for sequential tasks, bullet points
   for parallel options, and bold text for key terms. Content appears on generated Google
   Slides via `src/services/slidesService.js`, so keep formatting compatible.

---

## Minds On Hook Writing

The Minds On is the opening activity of a lesson, designed to activate prior knowledge
and spark curiosity. Types are defined in `MINDS_ON_HOOKS` in `src/data/activitySuggestions.js`.

### Prediction Poll Hooks

#### Predict the Outcome

- **Format**: Present a scenario, then ask students to predict what will happen
- **Structure**: Agree / Disagree / Not Sure (three-option poll)
- **Duration**: 3-5 minutes
- **Example**:
  > "A sealed bag of microwave popcorn is weighed before and after popping.
  > **Predict**: The bag will weigh MORE / LESS / THE SAME after popping.
  > Be ready to explain your reasoning to a partner."

#### Four Corners Debate

- **Format**: Post four positions in corners of the room; students physically move
- **Structure**: Strongly Agree / Agree / Disagree / Strongly Disagree
- **Duration**: 5-8 minutes
- **Example**:
  > "Statement: Social media does more harm than good for teenagers.
  > Move to the corner that matches your position. Be prepared to defend
  > your stance using at least one specific example."

### Mystery Hooks

#### Discrepant Event

- **Format**: Present a surprising or counterintuitive demonstration/result
- **Structure**: Show the event, then ask "Why did this happen?"
- **Duration**: 5-10 minutes
- **Example**:
  > "Watch this: I'm placing a heavy steel ship on the water -- it floats.
  > Now I'm placing a small steel marble on the water -- it sinks.
  > Both are steel. Both are in water. **Why does one float and one sink?**
  > Write your hypothesis in your notebook."

#### What Went Wrong

- **Format**: Present a flawed solution, experiment, or argument for students to diagnose
- **Structure**: Identify the error, explain why it is wrong, suggest a fix
- **Duration**: 5-8 minutes
- **Example**:
  > "A student calculated that 3/4 + 2/3 = 5/7. They added the numerators
  > and added the denominators. **What went wrong?** Explain the error
  > and show the correct solution."

### Discussion Protocol Hooks

#### Chalk Talk (Silent Written Discussion)

- **Format**: Post a question on chart paper; students respond in writing silently
- **Structure**: Write, read others' responses, respond to peers -- all in silence
- **Duration**: 5-10 minutes
- **Example**:
  > "In the center of your table's chart paper, you'll find the question:
  > **What makes a community sustainable?**
  > Silently write your ideas around the question. Read what your tablemates
  > write. Draw lines connecting related ideas. Add to others' thoughts.
  > Remember: this is a SILENT conversation."

#### Think-Pair-Share

- **Format**: Individual thinking, partner discussion, then whole-class sharing
- **Structure**: Think (1 min) --> Pair (2 min) --> Share (3-5 min)
- **Duration**: 5-8 minutes
- **Example**:
  > "**Think** (1 minute): What do you already know about how plants get energy?
  > **Pair** (2 minutes): Share your ideas with your elbow partner. Find one
  > thing you agree on and one thing you're unsure about.
  > **Share**: Be ready to share your pair's ideas with the class."

#### Notice and Wonder

- **Format**: Show an image, data set, or artifact; students list observations and questions
- **Structure**: Two columns: "I notice..." and "I wonder..."
- **Duration**: 5-7 minutes
- **Example**:
  > "Look at this graph showing global temperature over the last 200 years.
  > In your notebook, make two columns:
  > **I Notice...** (What do you observe? Stick to facts.)
  > **I Wonder...** (What questions does this raise?)"

### Prior Knowledge Hooks

#### KWL Chart

- **Format**: Three-column chart -- Know, Want to Know, Learned (L filled in at end)
- **Duration**: 5-7 minutes
- **Example**:
  > "We're starting our unit on ecosystems. In your KWL chart:
  > **K** -- What do you already KNOW about ecosystems? List at least 3 things.
  > **W** -- What do you WANT to know? Write at least 2 questions.
  > We'll come back to fill in the **L** column at the end of the unit."

#### Concept Map Starter

- **Format**: Provide key terms; students map relationships before instruction
- **Duration**: 5-10 minutes
- **Example**:
  > "Here are 6 terms: *photosynthesis, sunlight, glucose, chlorophyll, carbon
  > dioxide, oxygen*. Arrange these terms on your paper and draw arrows
  > showing how they connect. Label each arrow with a short phrase.
  > It's okay if you're unsure -- we'll revisit your map after today's lesson."

### Tips for Writing Effective Minds On Hooks

- Make it intriguing -- curiosity drives engagement
- Connect to student experience and real-world contexts
- Keep it brief: 5-10 minutes maximum
- It should raise questions, not answer them
- Lower the barrier to entry -- every student should be able to participate
- Avoid requiring knowledge that has not been taught yet

---

## Challenge Lab Prompt Structure

Challenge labs are the most complex activity type. They present an open-ended or
semi-structured problem with scaffolded hint progressions.

### Template Structure

```
**Context/Scenario**
[Real-world framing that makes the challenge authentic and relevant]

**Your Challenge**
[Clear, specific objective statement]

**Constraints**
- [Time limit]
- [Available materials/tools]
- [Parameters or rules]

**Hints** (use only if you need them!)
- Hint 1: [Direction nudge]
- Hint 2: [Strategy hint]
- Hint 3: [Near-solution]

**Success Criteria**
[How students know they have succeeded]

**Extension** (for early finishers)
[Additional challenge that deepens or extends the task]
```

### Writing the Context/Scenario

Frame the challenge in a real-world context that students find relevant:

- **Science**: "A local water treatment plant needs to test..."
- **Math**: "A school is redesigning the playground and needs to calculate..."
- **ELA**: "A magazine editor needs a persuasive article about..."
- **CS**: "A game developer's code has a bug that causes..."
- **Social Studies**: "The city council is debating a new policy..."

### Writing the Task Description

Be specific about what students must produce or demonstrate:

- "Design and test a filter that removes at least 80% of particulate matter"
- "Write a function that takes an array and returns the second-largest value"
- "Construct an argument for or against the policy using at least 3 primary sources"

### Designing Hint Progressions

Hints should scaffold without giving away the answer. Each level provides more support.

| Level | Purpose | Writing Pattern | Example |
|-------|---------|----------------|---------|
| **Hint 1** | Direction nudge | "Consider what happens when..." / "Think about the relationship between..." | "Consider what happens to the particles when the water passes through a finer mesh." |
| **Hint 2** | Strategy hint | "Try using the ___ approach" / "A useful strategy is..." | "Try layering multiple filter materials from coarse to fine, like gravel, sand, then charcoal." |
| **Hint 3** | Near-solution | "Here's a partial approach..." / "Start with this, then..." | "Start with a gravel layer (2cm), then sand (3cm), then activated charcoal (2cm). Test and measure turbidity." |

### Writing Success Criteria

Students need to know what "done" looks like:

- Quantitative: "Your filter reduces turbidity by at least 80%"
- Qualitative: "Your explanation includes a claim, at least two pieces of evidence, and reasoning connecting them"
- Process: "You have tested at least 3 iterations and documented changes between each"

### Writing Extensions

Extensions should deepen thinking, not just add more of the same:

- "What if you had to filter salt water instead of muddy water?"
- "Can you optimize your solution to use fewer materials?"
- "Create a tutorial that would help a younger student solve a similar problem"

---

## Discussion Prompt Design

Discussions are configured using templates from `src/data/activityTemplates.js` and
suggestions from `src/data/activitySuggestions.js`.

### Open-Ended Discussion Prompts

Strong discussion prompts have these qualities:

- **Multiple valid responses**: No single "right" answer
- **Evidence-based**: Require students to support their position
- **Accessible**: All students can enter the conversation
- **Generative**: Lead to further questions and deeper thinking

**Weak prompt**: "What is photosynthesis?"
**Strong prompt**: "If plants could suddenly no longer perform photosynthesis, which
ecosystem would collapse first and why? Support your claim with evidence."

### Discussion Protocol Formats

#### Four Corners

- **Setup**: Post four positions/options in room corners
- **Prompt pattern**: "Statement: [debatable claim]. Move to the corner that represents
  your position. Prepare to defend your stance with at least one specific example."
- **Best for**: Controversial topics, opinion-based discussions, physical movement break

#### Fishbowl

- **Setup**: Inner circle (4-6 students) discusses; outer circle observes and takes notes
- **Prompt pattern**: "[Context]. Inner circle: discuss [question]. Outer circle: track
  the strongest argument you hear and one question you would ask."
- **Best for**: Modeling discussion skills, focused small-group dialogue

#### Socratic Seminar

- **Setup**: Text-based; students prepare by annotating a shared reading
- **Prompt pattern**: "Based on your reading of [text], consider: [open-ended question].
  Use specific evidence from the text to support your response. Build on or
  respectfully challenge your classmates' ideas."
- **Best for**: Deep textual analysis, evidence-based reasoning, advanced classes

#### Think-Pair-Share

- **Setup**: Individual reflection, partner discussion, whole-class sharing
- **Prompt pattern**: "**Think** (1 min): [question]. **Pair** (2 min): Share with
  your partner and find common ground. **Share**: Be ready to report your pair's
  key insight."
- **Best for**: Low-risk entry, building confidence, ensuring all voices contribute

### Discussion Quality Indicators

When writing prompts, aim for these cognitive markers:

- **Higher-order thinking**: Prompts require analysis, evaluation, or creation (not just recall)
- **Multiple perspectives**: The question can be approached from different angles
- **Evidence requirement**: Students must cite data, text, or experience
- **Productive disagreement**: Reasonable people could disagree

---

## Share Out Protocol Selection

Share Out protocols are defined in `SHARE_OUT_PROTOCOLS` in `src/data/activitySuggestions.js`.
Choose based on time, group size, and formality.

### Whole Class Protocols

| Protocol | Duration | Description | Best For |
|----------|----------|-------------|----------|
| **Whip Around** | 5-10 min | Each student shares one quick takeaway in rapid succession | Every voice heard; quick synthesis |
| **Popcorn Share** | 5-10 min | Volunteers share; teacher facilitates flow | Low-pressure; student choice |
| **Fishbowl** | 15-20 min | Small group discusses while class observes; groups rotate | Modeling discussion; focused dialogue |

### Gallery Style Protocols

| Protocol | Duration | Description | Best For |
|----------|----------|-------------|----------|
| **Silent Gallery Walk** | 15-20 min | Work posted; students circulate silently with feedback sticky notes | Visual work; written feedback; low-pressure |
| **Speed Dating Share** | 10-15 min | Pairs face each other in two lines; share and rotate every 2 minutes | Quick peer-to-peer; high energy; many interactions |

### Team Presentation Protocols

| Protocol | Duration | Description | Best For |
|----------|----------|-------------|----------|
| **Lightning Talks** | 15-25 min | Each group presents for 2-3 minutes; strict time limit | Efficiency; many groups; focused messages |
| **Demo Day** | 30-45 min | Extended presentations with demonstrations and Q&A | Final products; culminating showcase; audience feedback |

### Selection Criteria Matrix

| Factor | Whip Around | Popcorn | Gallery Walk | Speed Dating | Lightning | Demo Day |
|--------|------------|---------|-------------|-------------|-----------|----------|
| Time available | Low | Low | Medium | Medium | Medium | High |
| Every voice | Yes | No | Written | Yes | Group rep | Group rep |
| Formality | Low | Low | Medium | Low | Medium | High |
| Movement | No | No | Yes | Yes | No | No |
| Best phase | Any | Any | Elaborate | Explore | Evaluate | Evaluate |

---

## Exit Ticket Writing

Refer to the Assessment Design skill for the full exit ticket type reference. This
section focuses on writing effective exit ticket prompts.

### Writing Tips by Category

#### Reflection Prompts

- **3-2-1**: "Write 3 things you learned today, 2 things you found interesting, and
  1 question you still have."
- **Muddiest Point**: "What concept from today's lesson is still the muddiest (most
  confusing) for you? Be as specific as you can."
- **One Sentence Summary**: "Summarize today's main idea in exactly one sentence.
  Challenge: use at least one vocabulary word from today."
- **Headline**: "If today's lesson were a news story, what would the headline be?
  Write it in 10 words or fewer."

#### Metacognition Prompts

- **Confidence Check**: "On a scale of 1-5, how confident are you that you could explain
  [concept] to someone who missed class today? Circle your rating and explain why you
  chose it in 1-2 sentences."
- **Stuck/Unstuck**: "Describe one moment today when you felt stuck. What did you do
  to get unstuck? If you're still stuck, what would help?"
- **Learning Target Self-Assessment**: "Our learning target today was: [objective].
  Rate yourself: Got it / Almost / Not yet. What is one piece of evidence from your
  work today that supports your rating?"

#### Application Prompts

- **Real World Connection**: "Describe one way today's concept shows up in the real
  world outside of school. Be specific about where and how."
- **What If**: "What if [changed variable/condition]? How would the outcome be different?
  Use what you learned today to predict."
- **Teach Someone**: "Explain [today's concept] as if you were teaching it to a 5th
  grader (or younger sibling). Use simple language and an example."

#### Quick Check Prompts

- **Quick Question**: Write one targeted question that addresses the lesson's key
  learning objective. Avoid multi-part questions. Example: "What is the difference
  between a physical change and a chemical change? Give one example of each."
- **Thumbs Up/Down/Sideways**: "Show a thumbs up if you feel confident about [concept],
  sideways if you're getting there, or down if you need more help."

---

## Subject-Specific Writing Tips

### Science

- Frame activities around inquiry: "What do you think will happen when...?"
- Use observation language: "Record what you see, hear, and measure"
- Encourage hypothesis formation: "Based on the data, what can you conclude?"
- Include safety reminders where appropriate
- Connect to Science & Engineering Practices (see standards-reference in curriculum-alignment)

### Math

- Present problems in context: "A store is having a 30% off sale..."
- Encourage multiple solution paths: "Solve this problem in two different ways"
- Include visual representations: "Draw a diagram or model to show..."
- Build in estimation before calculation: "Before solving, estimate the answer"
- Use error analysis: "This student's work has a mistake. Find and fix it."

### ELA

- Root prompts in specific texts: "Based on paragraph 3 of the article..."
- Require evidence-based claims: "Support your answer with a direct quote"
- Encourage creative expression alongside analytical writing
- Include both reading and writing components when possible
- Use mentor texts as models: "Using the author's technique of..., write your own..."

### CS / Technology

- Frame as debug scenarios: "This code should print 1-10 but outputs something else"
- Use design challenges: "Create an algorithm that sorts these items by..."
- Include code reading before code writing activities
- Build in iterative testing: "Test your solution with these 3 inputs..."
- Connect to real tools students will use

### Social Studies

- Use primary sources: "Read this letter from 1863 and identify..."
- Encourage perspective-taking: "How might a [person/group] have viewed this event?"
- Connect to current events: "How does this historical pattern relate to today?"
- Use maps, data tables, and visual sources as prompts
- Build in civic action: "What could be done about this issue in our community?"

---

## Cognitive Load Considerations

When writing activity content, manage the cognitive demands placed on students.

### Match Complexity to Phase

| 5E Phase | Cognitive Load | Writing Approach |
|----------|---------------|-----------------|
| Engage | Low | Familiar contexts, simple language, one question |
| Explore | Medium | Guided steps, scaffolded instructions, concrete tasks |
| Explain | Medium-High | New vocabulary introduced with definitions, worked examples |
| Elaborate | High | Transfer tasks, open-ended problems, minimal scaffolding |
| Evaluate | Varies | Match to assessment purpose; clear but not leading |

### Chunking Multi-Step Instructions

Break complex tasks into numbered steps. Each step should contain one action.

**Too much at once:**
> "Collect water samples from three locations, measure the pH of each using the test
> strips, record your data in the table, calculate the average, and create a bar graph
> comparing the three locations."

**Properly chunked:**
> 1. Collect a water sample from each of the 3 locations. Label your containers.
> 2. Test the pH of each sample using a test strip. Record in the data table.
> 3. Calculate the average pH across your 3 samples.
> 4. Create a bar graph comparing pH levels at the 3 locations.

### Using Visual Supports

- Reference diagrams, images, or models when describing complex ideas
- On slides (via `slidesService.js`), pair text with visuals
- Use tables to organize comparison tasks
- Include labeled diagrams for procedural activities

### Providing Worked Examples

Before asking students to practice independently, show a completed example:

> "**Example**: The question asks for the unit rate. 12 cookies for $4.00 means
> $4.00 / 12 = $0.33 per cookie. Now you try: 18 apples for $6.00 = ? per apple."

### Limiting New Concepts

- Introduce a maximum of 2-3 new concepts per lesson
- Build on previously learned material
- If a lesson requires more than 3 new concepts, split it across multiple days
- Use the Engage phase to activate relevant prior knowledge before introducing new material

---

## Key Project Files

| File | Purpose |
|------|---------|
| `src/data/activitySuggestions.js` | `MINDS_ON_HOOKS`, `SHARE_OUT_PROTOCOLS`, `EXIT_TICKETS` -- all activity suggestion objects |
| `src/data/activityTemplates.js` | Activity type definitions, default structures, and type-specific fields |
| `src/components/activities/` | Activity editor components for each of the 10 activity types |
| `src/components/lesson-editor/LessonEditor.jsx` | Main lesson editor where activities are composed and ordered |
| `src/services/slidesService.js` | Google Slides generation -- activity content appears on generated slides |
| `src/hooks/useUnitStore.js` | 5E unit store with lesson and activity data |
| `src/hooks/usePBLStore.js` | PBL store with milestone activities |
| `src/data/cognitiveSkills.js` | Cognitive skill verbs used in activity design |
| `src/components/activities/ChallengeLabEditor.jsx` | Challenge lab editor with hint progression fields |
| `src/components/activities/DiscussionEditor.jsx` | Discussion prompt editor with protocol selection |
