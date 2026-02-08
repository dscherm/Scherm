---
name: frontend-development
description: "Frontend development patterns for this React/Zustand/Tailwind project. Use when building components, managing state, adding wizard steps, creating activity editors, or styling with the dark theme. Keywords: React, Zustand, Tailwind, component, store, state management, wizard, activity editor, dark theme."
---

## Frontend Development Patterns

This skill covers all frontend architecture, component patterns, state management, routing, and styling conventions used in the teacher-module-builder application.

---

## 1. Project Structure

```
src/
├── main.jsx                  # Entry point, BrowserRouter with basename
├── App.jsx                   # Routes: /login, /, /unit/new, /unit/:unitId, /unit/:unitId/lesson/:lessonId
├── styles/index.css           # Tailwind + custom component classes
├── contexts/AuthContext.jsx   # Firebase Auth context with Google OAuth
├── services/
│   ├── firebase.js           # Firebase app, auth, db, storage, googleProvider
│   ├── unitService.js        # Firestore CRUD for units and lessons
│   └── slidesService.js      # Google Slides API integration
├── hooks/
│   ├── useUnitStore.js       # Zustand store for 5E unit builder
│   ├── usePBLStore.js        # Zustand store for PBL unit builder
│   ├── useSlides.js          # Google Slides generation hook
│   └── useUnits.js           # Firestore unit fetching hooks
├── data/
│   ├── activityTemplates.js  # 10 activity types + PHASE_ACTIVITIES mapping
│   ├── activitySuggestions.js # Minds On, Work Time, Exit Tickets, Share Out
│   ├── pblProtocols.js       # 10 PBL facilitation protocols
│   └── cognitiveSkills.js    # 8 cognitive skills with rubric criteria
└── components/
    ├── common/               # Layout, Login, ResearchNote
    ├── dashboard/            # Dashboard (unit listing)
    ├── create/               # CreateModal
    ├── unit-builder/         # UnitBuilder + WizardProgress + 5 steps
    ├── lesson-editor/        # LessonEditor + ActivitySuggestions + TeamRolesConfig
    ├── pbl-builder/          # PBLBuilder + 5 steps + Protocol/Checkpoint/Milestone editors
    ├── activities/           # ActivityPicker + ActivityEditor + type-specific editors
    └── slides/               # SlidesGeneratorModal
```

### Key Files by Purpose

| Purpose | File(s) |
|---------|---------|
| App entry & routing | `src/main.jsx`, `src/App.jsx` |
| 5E unit state | `src/hooks/useUnitStore.js` |
| PBL unit state | `src/hooks/usePBLStore.js` |
| Activity type registry | `src/data/activityTemplates.js` |
| Firestore operations | `src/services/unitService.js` |
| Google Slides generation | `src/services/slidesService.js` |
| Dark theme & components | `src/styles/index.css` |

---

## 2. Zustand Store Patterns

Both `useUnitStore` and `usePBLStore` follow an identical architecture using Zustand with the `persist` middleware for localStorage persistence.

### Store Template

```javascript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const DEFAULT_UNIT = {
  title: '',
  subject: '',
  gradeLevel: '',
  objectives: [],
  // ... remaining fields
};

const useStore = create(
  persist(
    (set, get) => ({
      // --- State ---
      currentUnit: { ...DEFAULT_UNIT },
      currentStep: 1,
      totalSteps: 5,

      // --- Simple field updates ---
      updateUnit: (updates) => set((state) => ({
        currentUnit: { ...state.currentUnit, ...updates }
      })),

      // --- Step navigation ---
      nextStep: () => set((state) => ({
        currentStep: Math.min(state.currentStep + 1, state.totalSteps)
      })),
      prevStep: () => set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 1)
      })),
      goToStep: (step) => set({ currentStep: step }),

      // --- Array operations (add) ---
      addObjective: (objective) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          objectives: [...state.currentUnit.objectives, objective]
        }
      })),

      // --- Array operations (remove by index) ---
      removeObjective: (index) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          objectives: state.currentUnit.objectives.filter((_, i) => i !== index)
        }
      })),

      // --- Array operations (update at index) ---
      updateObjective: (index, value) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          objectives: state.currentUnit.objectives.map((obj, i) =>
            i === index ? value : obj
          )
        }
      })),

      // --- Reset and load ---
      resetUnit: () => set({ currentUnit: { ...DEFAULT_UNIT }, currentStep: 1 }),
      loadUnit: (unit) => set({ currentUnit: unit, currentStep: 1 }),
    }),
    {
      name: 'storage-key',  // localStorage key
      partialize: (state) => ({
        currentUnit: state.currentUnit,
        currentStep: state.currentStep,
      }),
    }
  )
);

export default useStore;
```

### Store Details

| Store | localStorage Key | Fields | Actions Count |
|-------|-----------------|--------|---------------|
| `useUnitStore` | `unit-builder-storage` | duration model, objectives, vocabulary, standards, lessons | ~20 actions |
| `usePBLStore` | `pbl-builder-storage` | destination, launch, milestones, reflections, finalPhase | 40+ actions |

### Consuming Stores in Components

```javascript
// Select individual values (prevents unnecessary re-renders)
const title = useUnitStore((state) => state.currentUnit.title);
const updateUnit = useUnitStore((state) => state.updateUnit);

// Select multiple values
const { currentStep, nextStep, prevStep } = useUnitStore((state) => ({
  currentStep: state.currentStep,
  nextStep: state.nextStep,
  prevStep: state.prevStep,
}));
```

### Important Conventions

- Always spread previous state when updating nested objects.
- Use `get()` inside actions when you need to read current state before writing.
- Never mutate state directly; always return a new object from `set()`.
- The `partialize` option controls which fields persist to localStorage. Only persist data fields, not UI state like loading indicators.

---

## 3. React Router Setup

### Entry Point (`src/main.jsx`)

```javascript
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter basename="/teacher-module-builder">
  <App />
</BrowserRouter>
```

The `basename` is critical because the app is deployed to a subdirectory. All `<Link>` and `useNavigate()` paths are relative to this base.

### Route Definitions (`src/App.jsx`)

```javascript
import { Routes, Route } from 'react-router-dom';

<AuthProvider>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="unit/new" element={<UnitBuilder />} />
      <Route path="unit/:unitId" element={<UnitBuilder />} />
      <Route path="unit/:unitId/lesson/:lessonId" element={<LessonEditor />} />
    </Route>
  </Routes>
</AuthProvider>
```

### Navigation Patterns

```javascript
import { useNavigate, useParams, Link } from 'react-router-dom';

// Programmatic navigation
const navigate = useNavigate();
navigate('/');                              // Go to dashboard
navigate(`/unit/${unitId}`);               // Go to unit editor
navigate(`/unit/${unitId}/lesson/${lessonId}`); // Go to lesson editor

// Route params
const { unitId, lessonId } = useParams();

// Link component
<Link to={`/unit/${unitId}`}>Back to Unit</Link>
```

### Layout Component

The `Layout` component at `src/components/common/Layout.jsx` provides the app shell with a sidebar/header and renders child routes via `<Outlet />`.

---

## 4. Component Architecture Patterns

### Wizard Step Components

Each builder (UnitBuilder, PBLBuilder) uses a multi-step wizard. Steps are separate components rendered conditionally based on `currentStep`.

```javascript
// In UnitBuilder.jsx
const steps = [
  { component: Step1Overview, label: 'Overview' },
  { component: Step2Objectives, label: 'Objectives' },
  { component: Step3Vocabulary, label: 'Vocabulary' },
  { component: Step4Standards, label: 'Standards' },
  { component: Step5Lessons, label: 'Lessons' },
];

const CurrentStepComponent = steps[currentStep - 1].component;
return <CurrentStepComponent />;
```

Each step component reads from and writes to the Zustand store directly:

```javascript
const Step2Objectives = () => {
  const objectives = useUnitStore((s) => s.currentUnit.objectives);
  const addObjective = useUnitStore((s) => s.addObjective);
  const removeObjective = useUnitStore((s) => s.removeObjective);

  return (
    <div className="space-y-4">
      {objectives.map((obj, i) => (
        <div key={i} className="card flex items-center gap-3">
          <span className="text-primary">{obj}</span>
          <button onClick={() => removeObjective(i)} className="btn-ghost">
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
```

### WizardProgress Component

`WizardProgress` renders a horizontal step indicator with clickable steps and visual state (completed, current, upcoming).

### Activity Editors

Activity editors are type-specific components. `ActivityEditor.jsx` acts as a router:

```javascript
const editorMap = {
  quiz: QuizEditor,
  challenge_lab: ChallengeLabEditor,
  code_playground: CodePlaygroundEditor,
  discussion: DiscussionEditor,
  research_task: ResearchTaskEditor,
  creative_project: CreativeProjectEditor,
  simulation: SimulationEditor,
  debate: DebateEditor,
  gallery_walk: GalleryWalkEditor,
  reflection: ReflectionEditor,
};

const ActivityEditor = ({ activity, onChange }) => {
  const Editor = editorMap[activity.type];
  if (!Editor) return <GenericEditor activity={activity} onChange={onChange} />;
  return <Editor activity={activity} onChange={onChange} />;
};
```

### ActivityPicker

`ActivityPicker` displays a grid of activity type cards. It filters available types based on the current 5E phase using the `PHASE_ACTIVITIES` mapping from `src/data/activityTemplates.js`.

### PBL-Specific Components

- **ProtocolSidebar**: Displays the 10 PBL facilitation protocols from `src/data/pblProtocols.js`
- **KNTKBoard**: Know / Need to Know / Think / Know board for PBL launch
- **JourneyTimeline**: Visual timeline of PBL milestones and checkpoints
- **CognitiveSkillsPicker**: Selects cognitive skills from `src/data/cognitiveSkills.js` with rubric criteria

---

## 5. Adding New Wizard Steps

Follow these steps to add a new step (e.g., Step 6) to an existing builder.

1. **Create the step component** in the appropriate `steps/` directory:
   - 5E builder: `src/components/unit-builder/steps/Step6NewStep.jsx`
   - PBL builder: `src/components/pbl-builder/steps/Step6NewStep.jsx`

2. **Add to the parent builder's step array** in `UnitBuilder.jsx` or `PBLBuilder.jsx`:
   ```javascript
   const steps = [
     // ... existing steps
     { component: Step6NewStep, label: 'New Step' },
   ];
   ```

3. **Update `totalSteps`** in the Zustand store (`useUnitStore.js` or `usePBLStore.js`):
   ```javascript
   totalSteps: 6,  // was 5
   ```

4. **Add a validation function** if the step has required fields:
   ```javascript
   isStep6Complete: () => {
     const { currentUnit } = get();
     return currentUnit.newField && currentUnit.newField.length > 0;
   },
   ```

5. **Add any new state fields** to the store's `DEFAULT_UNIT` object and relevant actions.

---

## 6. Adding New Activity Editors

To add a new activity type with its own editor:

1. **Create the editor component** at `src/components/activities/NewTypeEditor.jsx`:
   ```javascript
   const NewTypeEditor = ({ activity, onChange }) => {
     return (
       <div className="space-y-4">
         <label className="label">Specific Field</label>
         <input
           className="input"
           value={activity.specificField || ''}
           onChange={(e) => onChange({ ...activity, specificField: e.target.value })}
         />
       </div>
     );
   };
   export default NewTypeEditor;
   ```

2. **Register in `ActivityEditor.jsx`** by adding to the `editorMap`:
   ```javascript
   import NewTypeEditor from './NewTypeEditor';
   const editorMap = {
     // ... existing editors
     new_type: NewTypeEditor,
   };
   ```

3. **Define the activity type** in `src/data/activityTemplates.js`:
   ```javascript
   export const ACTIVITY_TYPES = [
     // ... existing types
     {
       type: 'new_type',
       label: 'New Type',
       icon: 'Lightbulb',
       description: 'Description of what this activity does',
       defaultDuration: 15,
       defaultPoints: 10,
       fields: ['specificField', 'anotherField'],
     },
   ];
   ```

4. **Add to `PHASE_ACTIVITIES`** for relevant 5E phases:
   ```javascript
   export const PHASE_ACTIVITIES = {
     engage: ['discussion', 'new_type'],
     explore: ['challenge_lab', 'new_type'],
     // ...
   };
   ```

5. **Export from index** at `src/components/activities/index.js`.

---

## 7. Tailwind Dark Theme System

The entire application uses a dark theme. Colors are defined as CSS custom properties and mapped to Tailwind utility classes in `src/styles/index.css`.

### Color Token Reference

| Token | CSS Variable | Hex Value | Usage |
|-------|-------------|-----------|-------|
| `dark-bg` | `--color-dark-bg` | `#0f0f1a` | Page background |
| `dark-surface` | `--color-dark-surface` | `#1a1a2e` | Cards, panels |
| `dark-border` | `--color-dark-border` | `#2d2d44` | Borders, dividers |
| `dark-hover` | `--color-dark-hover` | `#252540` | Hover backgrounds |
| `accent-purple` | `--color-accent-purple` | `#8b5cf6` | Primary actions, links |
| `accent-blue` | `--color-accent-blue` | `#3b82f6` | Info, secondary actions |
| `accent-green` | `--color-accent-green` | `#10b981` | Success, completion |
| `accent-yellow` | `--color-accent-yellow` | `#f59e0b` | Warnings, in-progress |
| `accent-red` | `--color-accent-red` | `#ef4444` | Errors, destructive |
| `text-primary` | `--color-text-primary` | `#ffffff` | Headings, body text |
| `text-secondary` | `--color-text-secondary` | `#b8b8d1` | Subtext, descriptions |
| `text-muted` | `--color-text-muted` | `#6b6b8a` | Placeholders, disabled |

### Custom Component Classes

Defined in `src/styles/index.css` using `@apply`:

```css
/* Buttons */
.btn { @apply px-4 py-2 rounded-lg font-medium transition-colors; }
.btn-primary { @apply btn bg-accent-purple hover:bg-purple-500 text-white; }
.btn-secondary { @apply btn bg-dark-surface border border-dark-border hover:bg-dark-hover text-primary; }
.btn-ghost { @apply btn bg-transparent hover:bg-dark-hover text-secondary; }

/* Cards and inputs */
.card { @apply bg-dark-surface border border-dark-border rounded-xl p-4; }
.input { @apply bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-primary placeholder-text-muted focus:border-accent-purple focus:outline-none; }
.label { @apply text-sm font-medium text-secondary mb-1 block; }
.badge { @apply inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium; }
```

### 5E Phase Color Classes

```css
.phase-engage { @apply bg-purple-500/20 text-purple-300 border-purple-500/30; }
.phase-explore { @apply bg-blue-500/20 text-blue-300 border-blue-500/30; }
.phase-explain { @apply bg-green-500/20 text-green-300 border-green-500/30; }
.phase-elaborate { @apply bg-yellow-500/20 text-yellow-300 border-yellow-500/30; }
.phase-evaluate { @apply bg-red-500/20 text-red-300 border-red-500/30; }
```

### Badge Variants

```css
.badge-purple { @apply bg-purple-500/20 text-purple-300; }
.badge-blue { @apply bg-blue-500/20 text-blue-300; }
.badge-green { @apply bg-green-500/20 text-green-300; }
.badge-yellow { @apply bg-yellow-500/20 text-yellow-300; }
.badge-red { @apply bg-red-500/20 text-red-300; }
```

---

## 8. State Management Decision Guide

| Data Type | Where to Store | Why |
|-----------|---------------|-----|
| Form input values (text being typed) | `useState` | Temporary, local to one component |
| UI toggles (modals open, dropdowns) | `useState` | Ephemeral UI state |
| Temporary selections (picker highlights) | `useState` | No need to persist |
| Unit/lesson being built | Zustand store | Persists across components and page reloads via localStorage |
| Current wizard step | Zustand store | Survives navigation between pages |
| Saved/published units | Firebase Firestore | Permanent cloud storage, shared across devices |
| User authentication state | `AuthContext` | Needed app-wide, provided by Firebase Auth |
| Access tokens for Google APIs | `AuthContext` | Tied to auth session, refreshed via Firebase |

### When to Use `get()` vs Selectors

- Use **selectors** (`useStore((s) => s.field)`) in components for reactive updates.
- Use **`get()`** inside store actions when computing new state based on current state.

---

## 9. Key Dependencies and Usage

### Icons (lucide-react)

```javascript
import { Plus, Trash2, Save, ChevronRight, GripVertical, Eye, Edit2 } from 'lucide-react';

<Plus size={16} className="text-accent-purple" />
<Trash2 size={14} className="text-accent-red" />
```

Always use `size` prop for consistent sizing. Common sizes: 14 (inline), 16 (buttons), 20 (card headers), 24 (page headers).

### Drag and Drop (@dnd-kit)

Used for reordering activities within a lesson:

```javascript
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Wrap list in DndContext + SortableContext
// Each item uses useSortable() hook
// Handle onDragEnd to reorder the activities array in the store
```

### React Router DOM

```javascript
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';
```

All navigation within the app uses these primitives. Never use `window.location` for internal navigation.
