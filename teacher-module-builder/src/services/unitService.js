import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from './firebase';

const UNITS_COLLECTION = 'units';
const LESSONS_COLLECTION = 'lessons';

/**
 * Create a new unit
 */
export async function createUnit(userId, unitData) {
  const unit = {
    ...unitData,
    createdBy: userId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    status: 'draft', // draft, published, archived
    visibility: 'private', // private, shared, marketplace
  };

  const docRef = await addDoc(collection(db, UNITS_COLLECTION), unit);
  return { id: docRef.id, ...unit };
}

/**
 * Get a single unit by ID
 */
export async function getUnit(unitId) {
  const docRef = doc(db, UNITS_COLLECTION, unitId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
}

/**
 * Get all units for a user
 */
export async function getUserUnits(userId) {
  const q = query(
    collection(db, UNITS_COLLECTION),
    where('createdBy', '==', userId),
    orderBy('updatedAt', 'desc')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

/**
 * Update a unit
 */
export async function updateUnit(unitId, updates) {
  const docRef = doc(db, UNITS_COLLECTION, unitId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp()
  });
}

/**
 * Delete a unit and all its lessons
 */
export async function deleteUnit(unitId) {
  const batch = writeBatch(db);

  // Delete all lessons for this unit
  const lessonsQuery = query(
    collection(db, LESSONS_COLLECTION),
    where('unitId', '==', unitId)
  );
  const lessonsSnapshot = await getDocs(lessonsQuery);
  lessonsSnapshot.docs.forEach(doc => {
    batch.delete(doc.ref);
  });

  // Delete the unit
  batch.delete(doc(db, UNITS_COLLECTION, unitId));

  await batch.commit();
}

/**
 * Publish a unit (change status to published)
 */
export async function publishUnit(unitId) {
  await updateUnit(unitId, {
    status: 'published',
    publishedAt: serverTimestamp()
  });
}

/**
 * Create a lesson within a unit
 */
export async function createLesson(unitId, lessonData) {
  const lesson = {
    ...lessonData,
    unitId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  const docRef = await addDoc(collection(db, LESSONS_COLLECTION), lesson);
  return { id: docRef.id, ...lesson };
}

/**
 * Get all lessons for a unit
 */
export async function getUnitLessons(unitId) {
  const q = query(
    collection(db, LESSONS_COLLECTION),
    where('unitId', '==', unitId),
    orderBy('phase'),
    orderBy('dayNumber')
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

/**
 * Get a single lesson
 */
export async function getLesson(lessonId) {
  const docRef = doc(db, LESSONS_COLLECTION, lessonId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
}

/**
 * Update a lesson
 */
export async function updateLesson(lessonId, updates) {
  const docRef = doc(db, LESSONS_COLLECTION, lessonId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp()
  });
}

/**
 * Delete a lesson
 */
export async function deleteLesson(lessonId) {
  await deleteDoc(doc(db, LESSONS_COLLECTION, lessonId));
}

/**
 * Save unit with all lessons (batch operation)
 */
export async function saveUnitWithLessons(userId, unitData, lessons) {
  const batch = writeBatch(db);

  // Create or update unit
  let unitRef;
  if (unitData.id) {
    unitRef = doc(db, UNITS_COLLECTION, unitData.id);
    batch.update(unitRef, {
      ...unitData,
      updatedAt: serverTimestamp()
    });
  } else {
    unitRef = doc(collection(db, UNITS_COLLECTION));
    batch.set(unitRef, {
      ...unitData,
      createdBy: userId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'draft',
      visibility: 'private'
    });
  }

  // Handle lessons
  for (const lesson of lessons) {
    if (lesson.id && !lesson.id.startsWith('lesson-')) {
      // Existing lesson - update
      const lessonRef = doc(db, LESSONS_COLLECTION, lesson.id);
      batch.update(lessonRef, {
        ...lesson,
        unitId: unitRef.id,
        updatedAt: serverTimestamp()
      });
    } else {
      // New lesson - create
      const lessonRef = doc(collection(db, LESSONS_COLLECTION));
      batch.set(lessonRef, {
        ...lesson,
        id: undefined, // Remove temp id
        unitId: unitRef.id,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    }
  }

  await batch.commit();
  return unitRef.id;
}

/**
 * Duplicate a unit
 */
export async function duplicateUnit(unitId, userId) {
  // Get original unit
  const originalUnit = await getUnit(unitId);
  if (!originalUnit) throw new Error('Unit not found');

  // Get original lessons
  const originalLessons = await getUnitLessons(unitId);

  // Create new unit
  const newUnit = await createUnit(userId, {
    ...originalUnit,
    id: undefined,
    title: `${originalUnit.title} (Copy)`,
    status: 'draft',
    createdBy: userId
  });

  // Create copies of lessons
  for (const lesson of originalLessons) {
    await createLesson(newUnit.id, {
      ...lesson,
      id: undefined
    });
  }

  return newUnit;
}
