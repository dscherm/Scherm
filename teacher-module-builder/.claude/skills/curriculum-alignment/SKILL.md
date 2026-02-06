---
name: curriculum-alignment
description: "Standards alignment and curriculum mapping for lesson and unit design. Use when adding standards, writing learning objectives, aligning to NGSS/Common Core/ISTE/CSTA, or checking grade-level appropriateness. Keywords: standards, NGSS, Common Core, ISTE, CSTA, learning objectives, Bloom's taxonomy, alignment."
---

# Curriculum Alignment & Standards Mapping

This skill covers standards alignment, learning objective writing, and curriculum mapping
for the teacher-module-builder project. Use this when adding standards to units, writing
measurable objectives, selecting appropriate grade-level content, or verifying that
assessments align with targeted standards.

---

## Supported Standards Frameworks

The project supports alignment to five major standards frameworks plus state-specific
standards. Each framework uses a distinct coding format.

### NGSS (Next Generation Science Standards)

- **Scope**: Science and Engineering Practices for K-12
- **Structure**: Performance Expectations combine Disciplinary Core Ideas, Science &
  Engineering Practices, and Crosscutting Concepts
- **Code format**: `[Grade Band]-[Domain][Core Idea]-[Number]`
- **Examples**: `MS-PS1-2` (Middle School Physical Science), `HS-LS2-7` (High School Life Science)
- **Best for**: Science units, engineering design challenges, STEM PBL projects

### Common Core Math (CCM)

- **Scope**: Mathematical content and practices for K-12
- **Structure**: Standards for Mathematical Practice (process) + Content Standards (knowledge)
- **Code format**: `[Grade].[Domain].[Cluster].[Standard]`
- **Examples**: `6.RP.A.3` (Grade 6, Ratios & Proportional Relationships), `HSF.IF.B.4`
- **Best for**: Math units, data analysis activities, quantitative reasoning in PBL

### Common Core ELA (CCELA)

- **Scope**: Reading, Writing, Speaking & Listening, Language for K-12
- **Structure**: Organized by strand (RI, RL, W, SL, L) and grade level
- **Code format**: `[Strand].[Grade].[Standard]`
- **Examples**: `RI.6.7` (Reading Informational, Grade 6), `W.8.1` (Writing, Grade 8)
- **Best for**: ELA units, research-based PBL, cross-curricular literacy

### ISTE Student Standards

- **Scope**: Technology and digital literacy for K-12
- **Structure**: 7 standards with indicators under each
- **Code format**: `[Standard].[Indicator]`
- **Examples**: `1.6.a` (Creative Communicator, indicator a), `1.4.d` (Innovative Designer, d)
- **Best for**: Technology-integrated lessons, CS/digital citizenship, multimedia projects

### CSTA (Computer Science Teachers Association)

- **Scope**: Computer science concepts and practices for K-12
- **Structure**: Organized by level and concept area
- **Code format**: `[Level]-[Concept Abbreviation]-[Number]`
- **Examples**: `2-AP-10` (Level 2, Algorithms & Programming), `3A-DA-09`
- **Best for**: CS units, coding activities, computational thinking PBL

### State-Specific Standards

- Store with `framework: "state"` and include the state abbreviation in the `code` field
- Follow the same object structure: `{ id, code, description, framework }`
- When a teacher references state standards, map them to the closest national equivalent
  for cross-referencing purposes

---

## How Standards Are Stored in the Project

Standards live in the Zustand stores as arrays of standard objects. Both the 5E unit
builder and PBL builder use the same object shape.

### Standard Object Shape

```javascript
{
  id: "std_abc123",          // Unique identifier (generated)
  code: "MS-PS1-2",          // The standard's official code
  description: "Analyze and interpret data on the properties of substances...",
  framework: "NGSS"          // One of: NGSS, CCM, CCELA, ISTE, CSTA, state
}
```

### 5E Unit Standards

- **Store**: `useUnitStore` in `src/hooks/useUnitStore.js`
- **Location**: `currentUnit.standards[]`
- **Add action**: `addStandard(standardObject)`
- **Remove action**: `removeStandard(standardId)`
- Standards apply to the entire 5E unit and appear in the unit overview slide

### PBL Unit Standards

- **Store**: `usePBLStore` in `src/hooks/usePBLStore.js`
- **Location**: `currentPBL.destination.standards[]`
- **Add action**: `addStandard(standardObject)`
- **Remove action**: `removeStandard(standardId)`
- Standards sit in the "destination" object alongside the driving question and final product

### Learning Objectives Storage

- 5E Units: `currentUnit.objectives[]` -- array of objective strings
- PBL Milestones: `milestone.learningObjectives[]` -- array of objective strings per milestone
- Each objective should be a single measurable statement

---

## Writing Measurable Learning Objectives

Use Bloom's Taxonomy to write objectives that are specific, measurable, and aligned to
the targeted standard. Every objective should follow the SWBAT format.

### The SWBAT Format

```
Students will be able to [verb] [content] [context/condition].
```

**Example**: "Students will be able to *analyze* data tables showing reaction rates to
*identify* patterns in how temperature affects chemical reactions."

### Bloom's Taxonomy Verb Reference

| Level | Cognitive Process | Verbs | Example Objective |
|-------|------------------|-------|-------------------|
| **Remember** | Retrieve knowledge | define, list, recall, identify, name, recognize, state | SWBAT *list* the three states of matter and *identify* examples of each. |
| **Understand** | Construct meaning | describe, explain, summarize, interpret, classify, compare | SWBAT *explain* how energy transfer causes changes in states of matter. |
| **Apply** | Use in new situation | use, demonstrate, implement, solve, execute, calculate | SWBAT *calculate* the energy required to change water from solid to liquid. |
| **Analyze** | Break into parts | compare, contrast, examine, differentiate, organize, attribute | SWBAT *compare* endothermic and exothermic reactions using data evidence. |
| **Evaluate** | Make judgments | judge, assess, critique, justify, defend, argue | SWBAT *justify* which material is best for insulation using experimental data. |
| **Create** | Produce new work | design, construct, produce, develop, formulate, compose | SWBAT *design* an experiment to test how surface area affects dissolving rate. |

### Objective Quality Checklist

- [ ] Starts with a measurable action verb (not "understand" or "learn about")
- [ ] Specifies the content or skill being demonstrated
- [ ] Includes context, condition, or criteria when possible
- [ ] Aligns directly to a targeted standard
- [ ] Is achievable within the lesson or unit timeframe
- [ ] Is assessable -- you can observe or measure whether a student met it

### Matching Objectives to 5E Phases

| Phase | Bloom's Levels | Purpose |
|-------|---------------|---------|
| Engage | Remember, Understand | Activate prior knowledge, generate curiosity |
| Explore | Apply, Analyze | Hands-on investigation, data collection |
| Explain | Understand, Analyze | Formalize concepts, build vocabulary |
| Elaborate | Analyze, Evaluate, Create | Transfer knowledge, extend thinking |
| Evaluate | All levels | Demonstrate mastery of objectives |

---

## Grade-Level Considerations

Activity design, language complexity, and cognitive demand should match the developmental
level of the target students.

### Elementary (K-5)

- **Cognitive focus**: Remember, Understand, Apply (concrete operations)
- **Activity duration**: 10-20 minutes per activity (shorter attention spans)
- **Language**: Simple, direct instructions; vocabulary scaffolding included
- **Activity types**: Hands-on exploration, guided discovery, drawing/labeling
- **Recommended activity types**: `minds_on` (visual hooks), `work_time` (guided),
  `share_out` (whole class), `exit_ticket` (quick check)
- **Standards note**: K-2 NGSS uses broader performance expectations; CC Math is
  domain-focused (counting, operations, geometry)

### Middle School (6-8)

- **Cognitive focus**: Understand through Evaluate (transitional thinking)
- **Activity duration**: 15-30 minutes per activity
- **Language**: Grade-appropriate academic vocabulary; sentence starters provided
- **Activity types**: Collaborative inquiry, structured debate, lab investigations
- **Recommended activity types**: All 10 types are appropriate; `challenge_lab` and
  `discussion` work especially well
- **Standards note**: NGSS uses MS- prefix; CC Math shifts to ratios, expressions,
  geometry, statistics

### High School (9-12)

- **Cognitive focus**: Analyze, Evaluate, Create (formal operations)
- **Activity duration**: 20-45 minutes per activity
- **Language**: Discipline-specific terminology; students construct their own explanations
- **Activity types**: Independent research, Socratic seminars, open-ended design challenges
- **Recommended activity types**: `challenge_lab` (complex), `discussion` (Socratic),
  `work_time` (independent), `quiz` (summative)
- **Standards note**: NGSS uses HS- prefix; CC Math uses domain codes (HSN, HSA, HSF, HSG, HSS)

---

## Alignment Process

Follow this step-by-step process when adding standards to a unit or verifying alignment.

### Step 1: Identify Target Standards

1. Determine the subject area and grade level
2. Select 1-3 primary standards that the unit will fully address
3. Optionally add 1-2 secondary/supporting standards
4. Add standards to the store using `addStandard()`:

```javascript
// 5E Unit
useUnitStore.getState().addStandard({
  id: generateId(),
  code: "MS-PS1-2",
  description: "Analyze and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred.",
  framework: "NGSS"
});

// PBL Unit
usePBLStore.getState().addStandard({
  id: generateId(),
  code: "MS-PS1-2",
  description: "Analyze and interpret data on the properties of substances...",
  framework: "NGSS"
});
```

### Step 2: Map Standards to Phases or Milestones

**For 5E Units:**

| Standard Component | Maps To Phase |
|-------------------|---------------|
| Background knowledge | Engage |
| Investigation/data | Explore |
| Core concept | Explain |
| Transfer/extension | Elaborate |
| Full performance expectation | Evaluate |

**For PBL Units:**

- Map each standard to the milestone where students demonstrate that skill
- The final product (in `destination.finalProduct`) should address all primary standards
- Checkpoints within milestones verify progress toward standards

### Step 3: Verify Assessment Alignment

For each targeted standard, confirm:

1. At least one activity directly addresses the standard
2. The exit ticket or checkpoint measures progress toward the standard
3. Assessment verbs match the standard's cognitive demand
   - If the standard says "analyze," the assessment must require analysis, not just recall
4. The final assessment (Evaluate phase or final product) fully addresses the standard

### Step 4: Cross-Reference Cognitive Skills

Use the cognitive skills from `src/data/cognitiveSkills.js` to verify alignment:

- Match the standard's verbs to cognitive skill categories
- Ensure rubric criteria (from `cognitiveSkills[skill].rubricCriteria`) align with
  the standard's expectations
- Example: NGSS standard requiring "analyze and interpret data" maps to the `analysis`
  cognitive skill

---

## Standards Quick Reference -- Code Formats

Use these patterns to validate and format standards codes entered by teachers.

| Framework | Pattern | Example | Description |
|-----------|---------|---------|-------------|
| NGSS | `[Band]-[Domain][DCI]-[#]` | `MS-PS1-2` | MS=Middle School, PS=Physical Science, 1=DCI, 2=PE number |
| CC Math | `[Grade].[Domain].[Cluster].[#]` | `6.RP.A.3` | Grade 6, Ratios & Proportional, Cluster A, Standard 3 |
| CC ELA | `[Strand].[Grade].[#]` | `RI.6.7` | Reading Informational, Grade 6, Standard 7 |
| ISTE | `1.[Standard].[Indicator]` | `1.6.a` | ISTE prefix, Standard 6 (Creative Communicator), indicator a |
| CSTA | `[Level]-[Concept]-[#]` | `2-AP-10` | Level 2, Algorithms & Programming, Standard 10 |

### NGSS Grade Band Prefixes

- `K` -- Kindergarten
- `2` -- Grades K-2 band
- `3` -- Grade 3
- `4` -- Grade 4
- `5` -- Grade 5
- `MS` -- Middle School (6-8)
- `HS` -- High School (9-12)

### NGSS Domain Codes

- `PS` -- Physical Science
- `LS` -- Life Science
- `ESS` -- Earth and Space Science
- `ETS` -- Engineering, Technology, and Applications of Science

### CC Math Domain Codes (Middle School)

- `RP` -- Ratios & Proportional Relationships
- `NS` -- The Number System
- `EE` -- Expressions & Equations
- `G` -- Geometry
- `SP` -- Statistics & Probability

### CC ELA Strand Codes

- `RL` -- Reading Literature
- `RI` -- Reading Informational Text
- `W` -- Writing
- `SL` -- Speaking & Listening
- `L` -- Language

---

## Key Project Files

| File | Purpose |
|------|---------|
| `src/hooks/useUnitStore.js` | 5E unit store; standards in `currentUnit.standards[]` |
| `src/hooks/usePBLStore.js` | PBL store; standards in `currentPBL.destination.standards[]` |
| `src/data/cognitiveSkills.js` | Cognitive skill definitions with rubric criteria and verbs |
| `src/components/unit-builder/StandardsEditor.jsx` | UI for adding/removing standards |
| `src/components/pbl-builder/DestinationEditor.jsx` | PBL destination with standards |
| `src/services/slidesService.js` | Standards appear on generated Google Slides |

---

## Additional Reference

See `standards-reference.md` in this directory for detailed standards listings including:

- NGSS Performance Expectations by grade band with examples
- Science & Engineering Practices and Crosscutting Concepts
- Common Core Standards for Mathematical Practice (SMP 1-8)
- Common Core ELA strands with example standards
- ISTE Student Standards 1-7 with indicators
- CSTA standards by concept area
- Bloom's Taxonomy alignment table with activity type mapping
