---
name: backend-development
description: "Firebase, Firestore, and Google API backend development. Use when working with database operations, authentication, Firestore collections, Google Slides API, or service functions. Keywords: Firebase, Firestore, Google Slides API, authentication, OAuth, database, CRUD, service, collection."
---

## Backend Development: Firebase, Firestore, and Google APIs

This skill covers all backend services, database operations, authentication flows, and external API integrations used in the teacher-module-builder application.

---

## 1. Firestore Collections and Data Schemas

### `units` Collection

Each document in the `units` collection represents a complete teaching unit (either 5E or PBL).

```javascript
{
  id: string,                    // Firestore document ID (auto-generated)
  title: string,                 // Unit title
  subject: string,               // e.g., "Science", "Math", "ELA"
  gradeLevel: string,            // e.g., "6", "7-8", "9-12"
  unitType: string,              // "5e" | "pbl"
  duration: {                    // Duration model
    weeks: number,
    daysPerWeek: number,
    minutesPerDay: number
  },
  essentialQuestion: string,     // Driving question for the unit
  objectives: [string],          // Learning objectives array
  vocabulary: [{                 // Key vocabulary terms
    term: string,
    definition: string
  }],
  standards: [{                  // Aligned standards
    code: string,
    description: string,
    source: string               // e.g., "NGSS", "CCSS-Math"
  }],
  lessons: [{                    // Lesson references or inline lesson data
    id: string,
    title: string,
    phase: string,               // "engage" | "explore" | "explain" | "elaborate" | "evaluate"
    dayNumber: number
  }],
  createdBy: string,             // Firebase Auth UID
  createdAt: Timestamp,          // serverTimestamp()
  updatedAt: Timestamp,          // serverTimestamp()
  status: string,                // "draft" | "published" | "archived"
  visibility: string             // "private" | "shared" | "marketplace"
}
```

### `lessons` Collection

Each document represents a single lesson within a unit.

```javascript
{
  id: string,                    // Firestore document ID
  unitId: string,                // Reference to parent unit
  title: string,                 // Lesson title
  phase: string,                 // 5E phase: "engage" | "explore" | "explain" | "elaborate" | "evaluate"
  dayNumber: number,             // Day number within the unit sequence
  mindsOn: {                     // Opening warm-up activity
    type: string,                // e.g., "question", "image", "video", "poll"
    prompt: string               // The actual prompt or question
  },
  activities: [{                 // Ordered list of lesson activities
    id: string,                  // Unique activity ID (uuid or nanoid)
    type: string,                // Activity type key from ACTIVITY_TYPES
    title: string,               // Activity display title
    instructions: string,        // Teacher/student instructions
    duration: number,            // Duration in minutes
    points: number,              // Point value for grading
    // ... type-specific fields (questions, rubric, etc.)
  }],
  shareOut: {                    // Closing share/discussion
    prompts: [string]            // Discussion prompts
  },
  exitTicket: {                  // Exit ticket assessment
    prompt: string,              // Question or prompt
    type: string                 // "open_response" | "multiple_choice" | "scale"
  },
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Status and Visibility Values

| Field | Values | Description |
|-------|--------|-------------|
| `status` | `draft` | Work in progress, editable |
| | `published` | Finalized, may be shared |
| | `archived` | Hidden from active view |
| `visibility` | `private` | Only visible to creator |
| | `shared` | Visible to other authenticated users |
| | `marketplace` | Listed in public marketplace |

---

## 2. Service Patterns in `src/services/unitService.js`

All Firestore operations follow consistent patterns. The service file exports standalone async functions.

### Unit CRUD Operations

```javascript
import { db } from './firebase';
import {
  collection, doc, addDoc, getDoc, getDocs,
  updateDoc, deleteDoc, query, where, orderBy,
  serverTimestamp, writeBatch
} from 'firebase/firestore';

// CREATE
export const createUnit = async (unitData, userId) => {
  const cleaned = cleanData({
    ...unitData,
    createdBy: userId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    status: 'draft',
    visibility: 'private',
  });
  const docRef = await addDoc(collection(db, 'units'), cleaned);
  return docRef.id;
};

// READ (single)
export const getUnit = async (unitId) => {
  const snap = await getDoc(doc(db, 'units', unitId));
  if (!snap.exists()) throw new Error('Unit not found');
  return { id: snap.id, ...snap.data() };
};

// READ (user's units)
export const getUserUnits = async (userId) => {
  const q = query(
    collection(db, 'units'),
    where('createdBy', '==', userId),
    orderBy('updatedAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// UPDATE
export const updateUnit = async (unitId, updates) => {
  const cleaned = cleanData({
    ...updates,
    updatedAt: serverTimestamp(),
  });
  await updateDoc(doc(db, 'units', unitId), cleaned);
};

// DELETE (with cascade)
export const deleteUnit = async (unitId) => {
  const batch = writeBatch(db);
  // Delete all lessons in the unit
  const lessonsSnap = await getDocs(
    query(collection(db, 'lessons'), where('unitId', '==', unitId))
  );
  lessonsSnap.docs.forEach((d) => batch.delete(d.ref));
  // Delete the unit itself
  batch.delete(doc(db, 'units', unitId));
  await batch.commit();
};

// PUBLISH
export const publishUnit = async (unitId) => {
  await updateDoc(doc(db, 'units', unitId), {
    status: 'published',
    updatedAt: serverTimestamp(),
  });
};

// DUPLICATE
export const duplicateUnit = async (unitId, userId) => {
  const original = await getUnit(unitId);
  delete original.id;
  return createUnit({
    ...original,
    title: `${original.title} (Copy)`,
    status: 'draft',
  }, userId);
};
```

### Lesson CRUD Operations

```javascript
export const createLesson = async (lessonData) => {
  const cleaned = cleanData({
    ...lessonData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  const docRef = await addDoc(collection(db, 'lessons'), cleaned);
  return docRef.id;
};

export const getUnitLessons = async (unitId) => {
  const q = query(
    collection(db, 'lessons'),
    where('unitId', '==', unitId),
    orderBy('dayNumber', 'asc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getLesson = async (lessonId) => {
  const snap = await getDoc(doc(db, 'lessons', lessonId));
  if (!snap.exists()) throw new Error('Lesson not found');
  return { id: snap.id, ...snap.data() };
};

export const updateLesson = async (lessonId, updates) => {
  const cleaned = cleanData({
    ...updates,
    updatedAt: serverTimestamp(),
  });
  await updateDoc(doc(db, 'lessons', lessonId), cleaned);
};

export const deleteLesson = async (lessonId) => {
  await deleteDoc(doc(db, 'lessons', lessonId));
};
```

### Batch Operations

```javascript
// Atomic save: create or update unit + all its lessons
export const saveUnitWithLessons = async (unit, lessons, userId) => {
  const batch = writeBatch(db);

  // Create or update the unit document
  const unitRef = unit.id
    ? doc(db, 'units', unit.id)
    : doc(collection(db, 'units'));

  const unitData = cleanData({
    ...unit,
    createdBy: userId,
    updatedAt: serverTimestamp(),
    ...(unit.id ? {} : { createdAt: serverTimestamp() }),
  });
  batch.set(unitRef, unitData, { merge: true });

  // Create or update each lesson
  for (const lesson of lessons) {
    const lessonRef = lesson.id
      ? doc(db, 'lessons', lesson.id)
      : doc(collection(db, 'lessons'));

    const lessonData = cleanData({
      ...lesson,
      unitId: unitRef.id,
      updatedAt: serverTimestamp(),
      ...(lesson.id ? {} : { createdAt: serverTimestamp() }),
    });
    batch.set(lessonRef, lessonData, { merge: true });
  }

  await batch.commit();
  return unitRef.id;
};
```

### The `cleanData()` Utility

Firestore rejects documents containing `undefined` values. This recursive utility strips them:

```javascript
export const cleanData = (obj) => {
  if (obj === null || obj === undefined) return null;
  if (Array.isArray(obj)) return obj.map(cleanData);
  if (typeof obj === 'object' && !(obj instanceof Date) && !obj.toDate) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = cleanData(value);
      }
      return acc;
    }, {});
  }
  return obj;
};
```

Always wrap data in `cleanData()` before passing to Firestore `addDoc`, `setDoc`, or `updateDoc`.

---

## 3. Adding New Service Functions

When adding new Firestore operations, follow this pattern:

```javascript
import { db } from './firebase';
import {
  collection, doc, addDoc, getDoc, getDocs,
  updateDoc, deleteDoc, query, where, orderBy,
  serverTimestamp, writeBatch
} from 'firebase/firestore';

// Single document read
export const getItem = async (itemId) => {
  const snap = await getDoc(doc(db, 'collectionName', itemId));
  if (!snap.exists()) throw new Error('Not found');
  return { id: snap.id, ...snap.data() };
};

// Filtered query
export const getItemsByOwner = async (userId) => {
  const q = query(
    collection(db, 'collectionName'),
    where('createdBy', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

// Create with cleanData
export const createItem = async (data, userId) => {
  const cleaned = cleanData({
    ...data,
    createdBy: userId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  const docRef = await addDoc(collection(db, 'collectionName'), cleaned);
  return docRef.id;
};

// Update with cleanData
export const updateItem = async (itemId, updates) => {
  const cleaned = cleanData({
    ...updates,
    updatedAt: serverTimestamp(),
  });
  await updateDoc(doc(db, 'collectionName', itemId), cleaned);
};
```

### Conventions

- Always use `serverTimestamp()` for `createdAt` and `updatedAt`.
- Always wrap data in `cleanData()`.
- Always return the document ID on create.
- Always check `snap.exists()` on single document reads.
- Use `writeBatch` for multi-document atomic operations.
- For delete cascades, query and delete related documents in the same batch.

---

## 4. Firebase Auth with Google OAuth

### Firebase Setup (`src/services/firebase.js`)

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/presentations');
googleProvider.addScope('https://www.googleapis.com/auth/drive.file');
```

### Auth Context (`src/contexts/AuthContext.jsx`)

The AuthContext provides authentication state and methods to the entire app.

```javascript
// Key exports from AuthContext:
const { user, loading, signInWithGoogle, signOut, getAccessToken } = useAuth();
```

| Function | Description |
|----------|-------------|
| `signInWithGoogle()` | Opens Google OAuth popup, signs in, stores user |
| `signOut()` | Signs out the current user |
| `getAccessToken()` | Returns a fresh Google OAuth access token for API calls |
| `user` | Current user object: `{ uid, email, displayName, photoURL }` |
| `loading` | Boolean, true while auth state is being determined |

### Google OAuth Scopes

| Scope | Purpose |
|-------|---------|
| `https://www.googleapis.com/auth/presentations` | Create and edit Google Slides presentations |
| `https://www.googleapis.com/auth/drive.file` | Access files created by this app in Google Drive |

### Token Refresh

```javascript
// getAccessToken() in AuthContext
const getAccessToken = async () => {
  const token = await auth.currentUser.getIdToken(true);
  return token;
};
```

The `true` parameter forces a token refresh, ensuring the token is not expired when making API calls.

---

## 5. Google Slides API Integration

### Service File: `src/services/slidesService.js`

The Slides service creates lesson presentations using the Google Slides API.

### Main Entry Point

```javascript
export const createLessonSlides = async (accessToken, lesson, unit) => {
  // Step 1: Create a blank presentation
  const presentationId = await createPresentation(accessToken, lesson.title);

  // Step 2: Build all slide creation requests
  const requests = buildSlideRequests(lesson, unit);

  // Step 3: Execute batchUpdate with all requests
  await batchUpdate(accessToken, presentationId, requests);

  // Step 4: Return the presentation URL
  return `https://docs.google.com/presentation/d/${presentationId}/edit`;
};
```

### API Call Pattern

All Google API calls use `fetch()` with Bearer token authentication:

```javascript
const createPresentation = async (accessToken, title) => {
  const response = await fetch('https://slides.googleapis.com/v1/presentations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Slides API error: ${error.error?.message || response.statusText}`);
  }

  const data = await response.json();
  return data.presentationId;
};

const batchUpdate = async (accessToken, presentationId, requests) => {
  const response = await fetch(
    `https://slides.googleapis.com/v1/presentations/${presentationId}:batchUpdate`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requests }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Slides API batchUpdate error: ${error.error?.message || response.statusText}`);
  }

  return response.json();
};
```

### Slide Types Generated

| Slide | Content |
|-------|---------|
| Title Slide | Unit title, lesson title, phase, day number |
| Minds On | Opening prompt/question with phase icon |
| Activity Slides | One per activity: title, instructions, duration, points |
| Team Roles | Role assignments (if team-based lesson) |
| Share Out | Discussion prompts for closing |
| Exit Ticket | Assessment question/prompt |

### Phase and Activity Icons

```javascript
const PHASE_ICONS = {
  engage: '🧠',
  explore: '🔍',
  explain: '📖',
  elaborate: '🚀',
  evaluate: '📊',
};

const ACTIVITY_ICONS = {
  code_playground: '💻',
  challenge_lab: '🧩',
  quiz: '❓',
  discussion: '💬',
  research_task: '🔎',
  creative_project: '🎨',
  simulation: '🔬',
  debate: '⚖️',
  gallery_walk: '🖼️',
  reflection: '📝',
};
```

---

## 6. Custom Hooks in `src/hooks/`

### `useUnits.js` - Firestore Data Fetching

Provides two hooks for loading unit data from Firestore into components:

```javascript
// Hook 1: Load all units for the current user
export const useUserUnits = () => {
  // Returns:
  return {
    units,      // Array of unit objects
    loading,    // Boolean loading state
    error,      // Error message or null
    refresh,    // Function to re-fetch units
    remove,     // Function to delete a unit by ID
    duplicate,  // Function to duplicate a unit by ID
  };
};

// Hook 2: Load a single unit with its lessons
export const useUnit = (unitId) => {
  // Returns:
  return {
    unit,       // Unit object or null
    lessons,    // Array of lesson objects
    loading,    // Boolean loading state
    saving,     // Boolean saving state
    error,      // Error message or null
    save,       // Function to save current state to Firestore
    publish,    // Function to publish the unit
  };
};
```

### `useSlides.js` - Google Slides Generation

Wraps `slidesService.js` for component consumption:

```javascript
export const useSlides = () => {
  return {
    generating,    // Boolean, true while slides are being created
    error,         // Error message or null
    generateSlides, // (lesson, unit) => Promise<presentationUrl>
  };
};
```

### Hook Conventions

- Hooks handle loading, error, and success states internally.
- Hooks call service functions and manage React state around them.
- Components receive ready-to-use data and action functions.
- Error handling is done inside hooks with user-facing error messages.

---

## 7. Firestore Security Rules Considerations

When adding new collections or modifying access patterns, keep these rules in mind:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Authenticated users only
    match /units/{unitId} {
      allow read: if request.auth != null && (
        resource.data.createdBy == request.auth.uid ||
        resource.data.visibility in ['shared', 'marketplace']
      );
      allow write: if request.auth != null &&
        request.auth.uid == resource.data.createdBy;
      allow create: if request.auth != null;
    }

    match /lessons/{lessonId} {
      allow read, write: if request.auth != null;
      // Ideally validate that the user owns the parent unit
    }
  }
}
```

### Key Principles

- All reads and writes require authentication (`request.auth != null`).
- Users can only modify their own units (`createdBy == request.auth.uid`).
- Published/shared units are readable by all authenticated users.
- Lessons follow the access rules of their parent unit.
- New collections should follow the same ownership pattern.

---

## 8. Adding New Collections

Follow these steps when the application needs a new data type stored in Firestore.

1. **Define the data schema** with all fields, types, and default values.

2. **Create a service file** at `src/services/newCollectionService.js` following the patterns in `unitService.js`:
   - Import Firestore functions and `db` from `./firebase`
   - Implement CRUD operations: create, get, getByUser, update, delete
   - Use `cleanData()` for all write operations
   - Use `serverTimestamp()` for timestamps
   - Use `writeBatch` for multi-document operations

3. **Create a custom hook** at `src/hooks/useNewCollection.js`:
   - Wrap service calls with loading/error state management
   - Return data, loading, error, and action functions
   - Handle auth token retrieval if needed

4. **Consider batch operations** if the new collection has relationships with existing collections (parent-child, references).

5. **Update Firestore security rules** to cover the new collection with appropriate read/write permissions.

---

## 9. Environment Variables

Vite uses `import.meta.env` to access environment variables. Only variables prefixed with `VITE_` are exposed to client code.

### Required Variables

| Variable | Source | Description |
|----------|--------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase Console | Web API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Console | Auth domain (projectId.firebaseapp.com) |
| `VITE_FIREBASE_PROJECT_ID` | Firebase Console | Project identifier |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Console | Storage bucket (projectId.appspot.com) |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase Console | Cloud Messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase Console | Web app ID |

### Where to Find Values

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings (gear icon) > General
4. Scroll to "Your apps" > Web app
5. Copy the config values

### Google API Enablement

In addition to Firebase configuration, the following must be enabled in the [Google Cloud Console](https://console.cloud.google.com/):

- **Google Slides API**: Required for creating lesson presentations
- **Google Drive API**: Required for file access permissions

Enable these at APIs & Services > Library in the Cloud Console for the same project used by Firebase.
