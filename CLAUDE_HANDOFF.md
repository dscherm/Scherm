# Teacher Module Builder - Development Handoff

## Project Summary

We're building a **Teacher Module Builder** that helps teachers create engaging, inquiry-based lessons using:
- **5E Instructional Framework**: Engage → Explore → Explain → Elaborate → Evaluate
- **Async Classroom Model**: Minds On (sync) → Work Time (async) → Share Out (sync)
- **Team Roles**: Explainer (🧩), Leader (🧭), Questioner (❓)
- **Google Slides Generation**: Auto-generate slide decks from lessons
- **Activity Suggestion System**: AI-powered suggestions based on educational research

---

## What's Been Built

### Core Features ✅
1. **5-Step Unit Builder Wizard** (`/unit/new` or `/unit/:id`)
   - Step 1: Basic Info (title, subject, grade, essential question)
   - Step 2: Learning Objectives & Vocabulary
   - Step 3: Phase Duration (days per 5E phase)
   - Step 4: Build Lessons (clickable to edit)
   - Step 5: Review & Publish

2. **Lesson Editor** (`/unit/:id/lesson/:lessonId`)
   - Minds On section (engagement prompts)
   - Work Time section (activities + team roles)
   - Share Out section (discussion protocols)
   - Exit Ticket section
   - **Generate Slides** button → creates Google Slides
   - **Suggestions** button → shows activity suggestions panel

3. **Activity System**
   - Activity Picker with 10+ activity types
   - Editors for: Quiz, Discussion, Code Playground, Challenge Lab, Worksheet, Prediction Poll
   - Activity Suggestions panel with curated templates

4. **Google Slides Integration**
   - Creates presentations via Google Slides API
   - Generates slides for: Title, Minds On, Activities, Team Roles, Share Out, Exit Ticket

5. **Firebase Integration**
   - Authentication (Google OAuth)
   - Firestore for units/lessons persistence
   - Auto-save functionality

6. **Flexible Creation Modal**
   - Generate from Topic
   - Upload Curriculum
   - Upload Lesson
   - Build from Scratch

### Activity Suggestions Library ✅
Created `src/data/activitySuggestions.js` with templates inspired by:
- **TeachEngineering**: Engineering design challenges, 5E integration
- **Edutopia**: Inquiry-based learning (Chalk Talk, Harkness, micro-inquiry)
- **Maker Education**: Hands-on building, tinkering, iteration
- **Exploratorium**: Science Snacks, open-ended exploration
- **MIT Edgerton Center**: STEM projects, kinetic sculptures

Categories:
- Minds On Hooks (prediction polls, mystery hooks, discussion protocols)
- Work Time Activities (maker/tinkering, inquiry, coding, collaborative)
- Share Out Protocols (whole class, gallery walk, presentations)
- Exit Tickets (reflection, metacognition, application)

---

## Key Files

### Components
- `src/components/unit-builder/UnitBuilder.jsx` - Main wizard container
- `src/components/unit-builder/steps/Step1-5*.jsx` - Wizard steps
- `src/components/lesson-editor/LessonEditor.jsx` - Lesson editing with suggestions
- `src/components/lesson-editor/ActivitySuggestions.jsx` - Suggestions panel
- `src/components/lesson-editor/TeamRolesConfig.jsx` - Team role configuration
- `src/components/activities/*.jsx` - Activity editors
- `src/components/slides/SlidesGeneratorModal.jsx` - Slides generation UI
- `src/components/create/CreateModal.jsx` - Flexible creation entry points
- `src/components/dashboard/Dashboard.jsx` - Main dashboard

### Services & Data
- `src/services/slidesService.js` - Google Slides API integration
- `src/services/unitService.js` - Firestore CRUD operations
- `src/services/firebase.js` - Firebase configuration
- `src/data/activitySuggestions.js` - Activity templates library
- `src/data/activityTemplates.js` - Activity type definitions

### Hooks & State
- `src/hooks/useUnitStore.js` - Zustand store for unit state
- `src/hooks/useUnits.js` - Firestore unit operations
- `src/hooks/useSlides.js` - Slides generation hook
- `src/contexts/AuthContext.jsx` - Auth + OAuth tokens

---

## What Still Needs Work

### Immediate Tasks
1. **Access Google Drive** - User has teaching materials, slides, and activity examples in their Drive that should inform the suggestion system
2. **Enhance Activity Suggestions** - Add more specific templates based on user's actual teaching materials
3. **AI-Powered Generation** - Use AI to generate activity content based on topic/objectives

### Future Enhancements
- Topic-based content generation (AI)
- Document parsing for uploaded curriculum
- Printable materials (PDF generation)
- Activity preview/student view
- Batch slides generation for all lessons

---

## Google Drive MCP Setup

The user has set up Google Drive MCP locally. Key folders to explore:
- Teaching materials and pedagogy examples
- Existing slide templates
- Activity examples
- Lesson plans

---

## Continuation Prompt

Copy this prompt to continue on local Claude Code CLI:

```
I'm continuing work on the Teacher Module Builder in /home/user/Scherm/teacher-module-builder

We've built:
- 5E unit builder with 5-step wizard
- Lesson editor with Minds On, Work Time, Share Out, Exit Ticket sections
- Activity suggestion system with templates from TeachEngineering, Edutopia, Maker Ed, Exploratorium, MIT Edgerton
- Google Slides generation
- Firebase persistence

Now I need you to:
1. Use the Google Drive MCP to explore my Drive and find teaching materials, activity examples, and slide templates
2. Look at folders related to teaching, pedagogy, lessons, and activities
3. Analyze the content to understand my teaching style and preferred activity formats
4. Enhance the activity suggestions in src/data/activitySuggestions.js with templates based on my actual materials
5. Add any new activity types or formats you discover

Key files to reference:
- src/data/activitySuggestions.js (current suggestions library)
- src/components/lesson-editor/ActivitySuggestions.jsx (suggestions UI)
- src/components/lesson-editor/LessonEditor.jsx (where suggestions are used)
- docs/5E_UNIT_EXAMPLES.md (pedagogical framework examples)

Start by listing what's in my Google Drive and identifying relevant teaching materials.
```

---

## Running the Project

```bash
cd /home/user/Scherm/teacher-module-builder
npm install
npm run dev
```

Requires `.env` file with Firebase config:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## Git Branch

Working branch: `claude/teacher-modules-brainstorm-DBb1z`

Recent commits:
- Add activity suggestion system inspired by educational research
- Improve lesson and slides workflow discoverability
- Fix auto-save causing step reset in UnitBuilder
- Fix publish flow to use saved unit ID
- Add flexible creation modal with multiple entry points
