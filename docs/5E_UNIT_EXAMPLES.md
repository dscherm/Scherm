# 5E Unit Examples: Real Content Mapping

This document shows concrete examples of how the Teacher Module Builder transforms curriculum into 5E-structured units using the Cyber Range and Arrays/Loops module patterns.

---

## Example 1: Cybersecurity Fundamentals Unit (2 weeks)

### Teacher Input (Scope & Sequence)

```
Unit: Introduction to Cybersecurity
Duration: 2 weeks
Grade: 9-12

Learning Objectives:
- Understand basic cryptography concepts
- Recognize phishing and social engineering attacks
- Apply password security best practices

Standards:
- NICE Framework: T0028 (Conduct security reviews)
- CSTA 3B-NI-05 (Security measures)
```

### Generated 5E Unit Structure

---

#### ENGAGE (Days 1-2)

**Goal**: Hook students with a mystery, surface prior knowledge about security

##### Day 1: "You've Been Hacked" Scenario

| Activity | Type | Description |
|----------|------|-------------|
| **Opening Hook** | Digital (Challenge) | Students see a simulated "breach notification" email. Is it real or phishing? |
| **KWL Chart** | Non-Digital (Printable) | What do you KNOW about hackers? WANT to know? |
| **Four Corners Discussion** | Non-Digital (engage3 ready) | "Most hacks happen because of: A) Weak passwords B) Phishing C) Software bugs D) Insider threats" |

**Digital Challenge (Cyber Range Pattern)**:
```javascript
{
  id: 'engage-hook-1',
  title: 'Real or Fake?',
  difficulty: 'Easy',
  points: 10,
  prompt: `You receive this email:

From: security@your-school-edu.com
Subject: URGENT: Password Reset Required

"Dear Student,
Your account shows suspicious login attempts.
Click here to reset your password immediately:
http://school-secure-login.tk/reset"

Is this email LEGITIMATE or PHISHING?`,
  hints: [
    'Check the sender email carefully',
    'Look at the URL domain',
    'Real school emails use .edu, not .tk domains'
  ],
  answer: 'PHISHING',
  explanation: 'Red flags: .tk domain in link, urgency tactics, generic greeting. Always verify security emails through official school IT.'
}
```

**Printable Materials**:
- Entry Ticket: "Describe a time you or someone you know was targeted by a scam online"
- KWL Chart handout for cybersecurity
- Discussion protocol for Four Corners

##### Day 2: Encryption Mystery

| Activity | Type | Description |
|----------|------|-------------|
| **Caesar Cipher Challenge** | Digital | Decode a message (adapted from crypto-1) |
| **Manual Cipher Practice** | Non-Digital | Use cipher wheel to encode/decode messages |
| **Class Discussion** | Non-Digital | "Why would anyone need to hide a message?" |

**Non-Digital Activity (Printable)**:
```
CIPHER WHEEL ACTIVITY
━━━━━━━━━━━━━━━━━━━━

Materials: Paper cipher wheel (cut out and assemble)

Part 1: Encode Your Own Message
Write a secret message to your partner using shift-3:
Original: _________________________________
Encoded:  _________________________________

Part 2: Decode Partner's Message
Your partner's encoded message: _______________
Decoded message: _______________

Part 3: Reflection
What makes this cipher easy to break?
________________________________________________
```

---

#### EXPLORE (Days 3-5)

**Goal**: Hands-on investigation of security concepts

##### Day 3: Cryptography Lab

| Activity | Type | Description |
|----------|------|-------------|
| **Base64 & Hex Challenges** | Digital | Decode messages using different encodings |
| **Encoding vs Encryption** | Non-Digital | Sort activity: which provides security? |

**Digital Challenges (from Cyber Range)**:
- `crypto-2`: Base64 Encoding (15 pts)
- `crypto-3`: Hex Decoder (15 pts)
- `crypto-4`: ROT13 Message (20 pts)

**Non-Digital Activity**:
```
ENCODING VS ENCRYPTION SORT
━━━━━━━━━━━━━━━━━━━━━━━━━━

Cut out cards and sort into two categories:

[ Base64 ]    [ Caesar Cipher ]    [ Morse Code ]
[ AES-256 ]   [ Hexadecimal ]      [ ROT13 ]
[ Binary ]    [ RSA ]              [ URL Encoding ]

┌─────────────────┐    ┌─────────────────┐
│    ENCODING     │    │   ENCRYPTION    │
│  (No secret!)   │    │ (Needs a key)   │
├─────────────────┤    ├─────────────────┤
│                 │    │                 │
│                 │    │                 │
│                 │    │                 │
└─────────────────┘    └─────────────────┘

Discussion Question:
Why does "encoding is not encryption" matter for security?
```

##### Day 4: Social Engineering Lab

| Activity | Type | Description |
|----------|------|-------------|
| **Phishing Challenge** | Digital | Identify red flags in emails (social-1) |
| **Pretexting Roleplay** | Non-Digital | Act out and identify manipulation tactics |
| **Red Flag Checklist** | Non-Digital | Create a phishing detection checklist |

**Digital Challenge (from Cyber Range)**:
```javascript
// Adapted from social-1: Phishing Email Detection
{
  id: 'explore-phishing-1',
  title: 'Spot the Phish',
  difficulty: 'Easy',
  points: 10,
  prompt: `Analyze this email and count the red flags:

From: security@amaz0n-support.com
Subject: URGENT: Your account will be closed!

"Dear Customer,
Your Amazon account has suspicious activity.
Click here immediately to verify your identity
or your account will be permanently closed within 24 hours!

Click: http://amaz0n-verify.tk/account"

How many red flags can you find?`,
  hints: [
    'Check the sender domain carefully',
    'Notice the tone and urgency',
    'Examine the link destination',
    'Look at the greeting'
  ],
  answer: '4',
  vocabularyTerms: ['phishing', 'social-engineering']
}
```

**Non-Digital Activity**:
```
SOCIAL ENGINEERING ROLEPLAY
━━━━━━━━━━━━━━━━━━━━━━━━━━

In pairs, practice these scenarios:

SCENARIO 1: The IT Caller
Person A: "Hi, this is Jake from IT. We're doing
security updates. Can you confirm your password?"

Person B: Practice a safe response.

SCENARIO 2: The Tailgater
Person A: "Hold the door! I forgot my badge."

Person B: Practice a safe response.

SCENARIO 3: The USB Drive
You find a USB labeled "Salary Info 2024"

What should you do?

━━━━━━━━━━━━━━━━━━━━━━━━━━
Discussion: What tactics do social engineers use?
□ Urgency    □ Authority    □ Scarcity
□ Liking     □ Fear         □ Curiosity
```

##### Day 5: Password Investigation

| Activity | Type | Description |
|----------|------|-------------|
| **Password Strength Challenges** | Digital | Compare password strength (password-1, 2) |
| **Entropy Calculator** | Digital | Calculate password combinations |
| **Password Policy Design** | Non-Digital | Groups create password policies |

---

#### EXPLAIN (Days 6-7)

**Goal**: Formalize vocabulary and concepts

##### Day 6: Security Vocabulary

| Activity | Type | Description |
|----------|------|-------------|
| **Interactive Glossary** | Digital | Explore terms with linked definitions |
| **Vocabulary Foldable** | Non-Digital | Create a security terms reference |
| **Concept Mapping** | Non-Digital | Connect: threats → vulnerabilities → defenses |

**Vocabulary Terms to Cover**:
```javascript
const unitVocabulary = [
  { term: 'phishing', definition: 'A social engineering attack using fake communications to steal information' },
  { term: 'encryption', definition: 'The process of converting data into a secret code to prevent unauthorized access' },
  { term: 'authentication', definition: 'Verifying the identity of a user, process, or device' },
  { term: 'social-engineering', definition: 'Psychological manipulation to trick people into revealing information' },
  { term: 'brute-force', definition: 'An attack that tries every possible combination until finding the correct one' },
  { term: 'hash', definition: 'A one-way function that converts data into a fixed-length fingerprint' }
];
```

**Non-Digital Activity**:
```
SECURITY VOCABULARY FOLDABLE
━━━━━━━━━━━━━━━━━━━━━━━━━━

Fold paper into 6 sections. For each term:
- Front: Term + Icon
- Inside: Definition + Example

┌─────────┬─────────┬─────────┐
│PHISHING │ENCRYP-  │HASH     │
│  🎣     │ TION 🔐 │  #️⃣     │
├─────────┼─────────┼─────────┤
│SOCIAL   │BRUTE    │AUTHENT- │
│ENG. 🗣️  │FORCE 💪 │ICATION🔑│
└─────────┴─────────┴─────────┘
```

##### Day 7: Defense Strategies

| Activity | Type | Description |
|----------|------|-------------|
| **Security Layers Diagram** | Digital | Interactive defense-in-depth visual |
| **Teacher Direct Instruction** | Non-Digital | Structured notes on security principles |
| **Exit Ticket** | Digital | Quick comprehension check |

---

#### ELABORATE (Days 8-9)

**Goal**: Apply concepts to new, complex scenarios

##### Day 8: Advanced Challenges

| Activity | Type | Description |
|----------|------|-------------|
| **Firewall Rules** | Digital | Configure firewall (network-4, Hard) |
| **SQL Injection Basics** | Digital | Understand web vulnerabilities (web-2) |
| **Security Audit Worksheet** | Non-Digital | Evaluate a fictional company's security |

**Digital Challenge (from Cyber Range, adapted)**:
```javascript
// network-4: Firewall Rules
{
  id: 'elaborate-firewall-1',
  title: 'Configure the Firewall',
  difficulty: 'Hard',
  points: 30,
  prompt: `A firewall has these rules (processed in order):

1. ALLOW: Source 192.168.1.0/24, Port ANY
2. DENY: Port 23
3. ALLOW: Port 80
4. ALLOW: Port 443
5. DENY: ALL

Can a computer at 192.168.1.50 access Telnet (port 23)?
Can a computer at 10.0.0.5 access HTTP (port 80)?`,
  hints: [
    'Rules are processed top to bottom',
    '192.168.1.50 matches rule 1 first',
    '10.0.0.5 doesn\'t match rule 1, continues to rule 3'
  ],
  answer: 'FLAG{YES_YES}',
  vocabularyTerms: ['firewall', 'port', 'protocol']
}
```

##### Day 9: Security Awareness Campaign (Mini-Project)

| Activity | Type | Description |
|----------|------|-------------|
| **Project Planning** | Non-Digital | Groups plan an awareness campaign |
| **Resource Creation** | Digital + Non-Digital | Create posters, presentations, or videos |
| **Peer Feedback** | Non-Digital | Review other groups' materials |

**Project Prompt**:
```
SECURITY AWARENESS CAMPAIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━

Your team is the new Security Awareness Team at a company.
Create materials to educate employees about ONE of these topics:

□ Phishing Detection
□ Password Best Practices
□ Social Engineering Defense
□ Physical Security (Tailgating)

Deliverables (choose 2):
□ Poster (printable 11x17)
□ Infographic
□ Short video (60 seconds)
□ Quiz (5 questions minimum)
□ Email template with tips

Rubric:
- Accuracy of information (25%)
- Clarity and accessibility (25%)
- Visual appeal (25%)
- Actionable advice (25%)
```

---

#### EVALUATE (Day 10)

**Goal**: Demonstrate mastery, receive feedback

##### Mastery Assessment

| Activity | Type | Description |
|----------|------|-------------|
| **Challenge Assessment** | Digital | Complete 5 challenges independently |
| **Scenario Analysis** | Non-Digital | Written response to security scenario |
| **Self-Reflection** | Non-Digital | Learning reflection journal |

**Mastery Challenge Set**:
```javascript
const masteryAssessment = {
  required: 4, // Must pass 4 of 5 for mastery
  challenges: [
    { id: 'mastery-crypto', from: 'crypto-5', points: 25 }, // Hash Detective
    { id: 'mastery-network', from: 'network-3', points: 25 }, // Protocol Detective
    { id: 'mastery-password', from: 'password-4', points: 30 }, // Password Hashing
    { id: 'mastery-web', from: 'web-4', points: 15 }, // HTTPS vs HTTP
    { id: 'mastery-social', from: 'social-4', points: 25 } // USB Baiting
  ]
};
```

**Mastery Criteria**:
```
MASTERY LEVELS
━━━━━━━━━━━━━━

□ MASTERED (90%+): Proceed to advanced topics
  - 5/5 challenges correct
  - Full project completion

□ PROFICIENT (75-89%): Ready for next unit
  - 4/5 challenges correct
  - Project meets expectations

□ DEVELOPING (60-74%): Targeted review needed
  - 3/5 challenges correct
  - Schedule 1:1 support

□ BEGINNING (<60%): Intervention required
  - Fewer than 3 challenges correct
  - Extended learning time
```

---

## Example 2: Arrays & Loops Programming Unit (3 weeks)

### Teacher Input (Scope & Sequence)

```
Unit: Arrays and Iteration in p5.js
Duration: 3 weeks
Grade: 9-12

Learning Objectives:
- Store and access data in arrays
- Use loops to iterate over collections
- Apply array methods for filtering and transformation

Standards:
- CSTA 2-AP-12 (Design algorithms with iteration)
- CSTA 2-AP-13 (Decompose problems into procedures)
```

### Generated 5E Unit Structure

---

#### ENGAGE (Days 1-2)

**Goal**: Hook with creative coding, surface prior knowledge

##### Day 1: "Why Arrays?" Demo

| Activity | Type | Description |
|----------|------|-------------|
| **Interactive Demo** | Digital | Teacher shows a pattern that would need 100 variables without arrays |
| **Prediction Activity** | Non-Digital | "How many lines of code to draw 100 circles?" |
| **Discussion** | Non-Digital | "What makes code repetitive?" |

**Digital Hook (Code Demo)**:
```javascript
// The HARD way (no arrays, no loops)
// This would take 100 lines...
circle(10, 200, 20);
circle(30, 200, 20);
circle(50, 200, 20);
// ... 97 more lines!

// The SMART way (with arrays and loops)
let xs = [10, 30, 50, 70, 90, 110, 130];
for (let i = 0; i < xs.length; i++) {
  circle(xs[i], 200, 20);
}
// 5 lines instead of 100!
```

##### Day 2: Click Collector Preview

| Activity | Type | Description |
|----------|------|-------------|
| **Mini-Project Preview** | Digital | Show finished Click Collector game |
| **Reverse Engineering** | Non-Digital | "What data needs to be stored?" |
| **Entry Ticket** | Non-Digital | "What do you already know about lists/arrays?" |

---

#### EXPLORE (Days 3-7)

**Goal**: Hands-on investigation of array and loop concepts

##### Day 3: Array Basics

| Activity | Type | Description |
|----------|------|-------------|
| **Color Palette Array** | Digital | Exercise w1d1-1 (10 pts) |
| **First, Last, Middle** | Digital | Exercise w1d1-2 (10 pts) |
| **Index Card Arrays** | Non-Digital | Physical array manipulation |

**Digital Exercise (from Arrays module)**:
```javascript
// w1d1-1: Color Palette Array
{
  id: "w1d1-1",
  title: "Color Palette Array",
  difficulty: "Easy",
  points: 10,
  prompt: "Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",
  starterCode: `function setup() {
  createCanvas(800, 500);
  // Create your palette array here
}

function draw() {
  // Use palette[0] for background
  background(240);
}`,
  hints: [
    "Arrays are created with square brackets: let arr = []",
    "Put strings in quotes inside the brackets",
    "Access elements with arrayName[index]",
    "The first element is at index 0"
  ],
  vocabularyTerms: ["array", "index", "element"]
}
```

**Non-Digital Activity**:
```
INDEX CARD ARRAYS
━━━━━━━━━━━━━━━━━

Materials: 10 index cards per student

Setup:
1. Write numbers 0-9 on bottom corner of cards
2. Write a color name on each card

Activities:

TASK 1: Access by Index
Partner calls out an index, you show that card.
"Show me index 3!" → Show card with 3

TASK 2: Find the Length
How many cards are in your array?
Array length = ____

TASK 3: Last Element
What index is the last card?
Formula: length - 1 = ____

TASK 4: Push and Pop
PUSH: Add a new card to the end
POP: Remove the last card
What's the new length after push? ____
What's the new length after pop? ____
```

##### Days 4-5: Push, Pop, and Parallel Arrays

**Digital Exercises**:
- w1d2-1: Click to Add (push)
- w1d2-2: Undo with Pop
- w1d3-1: X and Y Positions (parallel arrays)

**Non-Digital Activity**:
```
PARALLEL ARRAYS WORKSHEET
━━━━━━━━━━━━━━━━━━━━━━━━

You're tracking student data with two arrays:
names = ["Ana", "Bob", "Cat", "Dan"]
scores = [85, 92, 78, 95]

Questions:

1. What is names[2]? __________
2. What is scores[2]? __________
3. These are "parallel" because ________________

4. Who has the highest score?
   First find max in scores: ________
   Then use same index in names: ________

5. Add a new student "Eve" with score 88:
   names.push(________)
   scores.push(________)

6. Fill in the table:
   ┌───────┬───────┬────────┐
   │ Index │ Name  │ Score  │
   ├───────┼───────┼────────┤
   │   0   │       │        │
   │   1   │       │        │
   │   2   │       │        │
   │   3   │       │        │
   │   4   │       │        │
   └───────┴───────┴────────┘
```

##### Days 6-7: Loop Investigation

**Digital Exercises**:
- w2d1-1: Counting Loop (for loop basics)
- w2d1-2: Loop Through Array
- w2d2-1: Animated Dots

**Non-Digital Activity**:
```
LOOP TRACING WORKSHEET
━━━━━━━━━━━━━━━━━━━━━━

Trace through this code by hand:

let nums = [10, 20, 30];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  total = total + nums[i];
}

console.log(total);

Fill in the table:

┌──────────┬──────────┬─────────────┬───────────┐
│ Loop #   │ i value  │ nums[i]     │ total     │
├──────────┼──────────┼─────────────┼───────────┤
│ Before   │    -     │      -      │     0     │
│ Loop 1   │    0     │             │           │
│ Loop 2   │          │             │           │
│ Loop 3   │          │             │           │
│ After    │    -     │      -      │           │
└──────────┴──────────┴─────────────┴───────────┘

Final output: ________
```

---

#### EXPLAIN (Days 8-9)

**Goal**: Formalize array/loop vocabulary and patterns

##### Day 8: Array Vocabulary

| Activity | Type | Description |
|----------|------|-------------|
| **Interactive Glossary** | Digital | Array terms with linked examples |
| **Vocabulary Cards** | Non-Digital | Create flashcards for terms |
| **Code Annotation** | Non-Digital | Label parts of array code |

**Vocabulary to Formalize**:
```javascript
const arrayVocabulary = [
  { term: 'array', definition: 'An ordered collection of values stored in a single variable' },
  { term: 'index', definition: 'The position of an element in an array, starting at 0' },
  { term: 'element', definition: 'A single value stored in an array' },
  { term: 'length', definition: 'The number of elements in an array' },
  { term: 'push', definition: 'Add an element to the end of an array' },
  { term: 'pop', definition: 'Remove and return the last element of an array' },
  { term: 'iteration', definition: 'Repeating a process for each element in a collection' },
  { term: 'loop', definition: 'A control structure that repeats code multiple times' }
];
```

##### Day 9: Loop Patterns

| Activity | Type | Description |
|----------|------|-------------|
| **Pattern Identification** | Digital | Match loop patterns to use cases |
| **Worked Examples** | Non-Digital | Teacher walks through complex loops |
| **Pattern Reference Sheet** | Non-Digital | Create loop pattern cheat sheet |

**Non-Digital Activity**:
```
LOOP PATTERN REFERENCE SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PATTERN 1: Count-Controlled Loop
Use when: You know exactly how many times to repeat
┌────────────────────────────────────────┐
│ for (let i = 0; i < 10; i++) {         │
│   // runs exactly 10 times             │
│ }                                      │
└────────────────────────────────────────┘

PATTERN 2: Array Traversal
Use when: You need to do something with each element
┌────────────────────────────────────────┐
│ for (let i = 0; i < arr.length; i++) { │
│   // process arr[i]                    │
│ }                                      │
└────────────────────────────────────────┘

PATTERN 3: Accumulator
Use when: You need to combine all elements (sum, count)
┌────────────────────────────────────────┐
│ let total = 0;                         │
│ for (let i = 0; i < arr.length; i++) { │
│   total = total + arr[i];              │
│ }                                      │
└────────────────────────────────────────┘

PATTERN 4: Search
Use when: You need to find a specific element
┌────────────────────────────────────────┐
│ let found = -1;                        │
│ for (let i = 0; i < arr.length; i++) { │
│   if (arr[i] === target) {             │
│     found = i;                         │
│   }                                    │
│ }                                      │
└────────────────────────────────────────┘
```

---

#### ELABORATE (Days 10-13)

**Goal**: Apply to complex projects, extend understanding

##### Days 10-11: Click Collector Project

| Activity | Type | Description |
|----------|------|-------------|
| **Project Planning** | Non-Digital | Storyboard game features |
| **Core Implementation** | Digital | Build the game step-by-step |
| **Extension Challenges** | Digital | Add extra features |

**Project Specification**:
```
CLICK COLLECTOR GAME
━━━━━━━━━━━━━━━━━━━━

Build a game where:
1. Targets appear at random positions
2. Click targets to collect points
3. Track all target positions in arrays
4. Display score on screen

Requirements:
□ Store x positions in one array
□ Store y positions in another array
□ Use a loop to draw all targets
□ Remove collected targets

Extensions (bonus points):
□ Add different colored targets worth different points
□ Add a timer
□ Add high score tracking
□ Add sound effects
```

##### Days 12-13: Pattern Poster Project

| Activity | Type | Description |
|----------|------|-------------|
| **Design Planning** | Non-Digital | Sketch poster design on paper |
| **Implementation** | Digital | Create visual pattern with loops |
| **Gallery Walk** | Non-Digital | View and give feedback on peer work |

---

#### EVALUATE (Days 14-15)

**Goal**: Demonstrate mastery through code and reflection

##### Day 14: Code Assessment

| Activity | Type | Description |
|----------|------|-------------|
| **Independent Challenges** | Digital | Complete 5 exercises without hints |
| **Code Tracing Test** | Non-Digital | Predict output of given code |

**Mastery Challenges**:
```javascript
const masteryAssessment = {
  required: 4, // Must pass 4 of 5 for proficiency
  challenges: [
    { id: 'mastery-array-access', points: 15 },
    { id: 'mastery-push-pop', points: 20 },
    { id: 'mastery-loop-basic', points: 20 },
    { id: 'mastery-traversal', points: 25 },
    { id: 'mastery-parallel', points: 25 }
  ]
};
```

##### Day 15: Portfolio & Reflection

| Activity | Type | Description |
|----------|------|-------------|
| **Portfolio Submission** | Digital | Upload completed projects |
| **Self-Assessment** | Non-Digital | Rate own understanding on rubric |
| **Reflection Journal** | Non-Digital | Written reflection on learning |

**Reflection Prompts**:
```
UNIT REFLECTION
━━━━━━━━━━━━━━━

1. What was the most challenging concept for you?
   How did you work through it?

2. Describe a moment when something "clicked" for you.

3. Look at your Click Collector game. What would you
   add or change if you had more time?

4. How might you use arrays and loops in a future project?

5. Rate your understanding (circle one):
   Beginning     Developing     Proficient     Mastered

6. What questions do you still have?
```

---

## Digital vs Non-Digital Balance Guidelines

### Recommended Ratios by Phase

| 5E Phase | Digital | Non-Digital | Rationale |
|----------|---------|-------------|-----------|
| **Engage** | 30% | 70% | Discussion and curiosity require human interaction |
| **Explore** | 60% | 40% | Hands-on investigation; mix of both modalities |
| **Explain** | 40% | 60% | Vocabulary and formalization need varied practice |
| **Elaborate** | 70% | 30% | Project work benefits from digital tools |
| **Evaluate** | 50% | 50% | Balance of digital assessment and reflection |

### Activity Pairing Strategies

| Digital Activity | Pairs Well With (Non-Digital) |
|-----------------|-------------------------------|
| Coding challenge | Paper-based code tracing |
| Interactive simulation | Physical manipulative exploration |
| Online vocabulary | Flashcard creation |
| Digital assessment | Self-assessment rubric |
| Collaborative workspace | Gallery walk |

---

## Printable Material Templates

### Template 1: Exit Ticket

```
┌─────────────────────────────────────────────────────┐
│  EXIT TICKET                     Date: ___________  │
├─────────────────────────────────────────────────────┤
│  Name: ______________________                       │
│                                                     │
│  1. What's the most important thing you learned?   │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                     │
│  2. What's still confusing?                         │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                     │
│  3. Rate your understanding today:                  │
│     😕  →  🤔  →  😊  →  🤩                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Template 2: Vocabulary Tracker

```
┌─────────────────────────────────────────────────────┐
│  VOCABULARY TRACKER           Unit: _____________   │
├────────┬────────────────────────┬──────────────────┤
│  Term  │      Definition        │   My Example     │
├────────┼────────────────────────┼──────────────────┤
│        │                        │                  │
├────────┼────────────────────────┼──────────────────┤
│        │                        │                  │
├────────┼────────────────────────┼──────────────────┤
│        │                        │                  │
├────────┼────────────────────────┼──────────────────┤
│        │                        │                  │
├────────┼────────────────────────┼──────────────────┤
│        │                        │                  │
└────────┴────────────────────────┴──────────────────┘
```

### Template 3: Peer Feedback Form

```
┌─────────────────────────────────────────────────────┐
│  PEER FEEDBACK                                       │
├─────────────────────────────────────────────────────┤
│  Reviewer: _______________                           │
│  Author: _________________                           │
│  Project: ________________                           │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ⭐ STARS (What's working well)                      │
│  1. ____________________________________________     │
│  2. ____________________________________________     │
│                                                      │
│  💡 WISHES (Suggestions for improvement)             │
│  1. ____________________________________________     │
│  2. ____________________________________________     │
│                                                      │
│  ❓ WONDERS (Questions I have)                       │
│  1. ____________________________________________     │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## Next Steps

These examples demonstrate how the Teacher Module Builder will transform curriculum input into structured 5E units. The system will:

1. **Parse** teacher's scope & sequence
2. **Generate** 5E phase structure with appropriate timing
3. **Match** activities from the Challenge Lab and Code Playground templates
4. **Create** both digital and non-digital materials
5. **Track** student progress through Firebase
6. **Report** mastery levels to teachers

Teachers can customize every aspect while maintaining pedagogically sound structure.
