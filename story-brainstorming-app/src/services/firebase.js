import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';

// Firebase configuration - users should replace with their own
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
};

// Only initialize if config is provided
let app = null;
let auth = null;
let db = null;
let isConfigured = false;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  isConfigured = true;
}

const googleProvider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = async () => {
  if (!auth) throw new Error('Firebase not configured');
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Google sign in error:', error);
    throw error;
  }
};

export const logOut = async () => {
  if (!auth) return;
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

export const onAuthChange = (callback) => {
  if (!auth) return () => {};
  return onAuthStateChanged(auth, callback);
};

// Firestore functions for stories
export const syncStoryToCloud = async (userId, story) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const storyRef = doc(db, 'users', userId, 'stories', story.id);
    await setDoc(storyRef, {
      ...story,
      syncedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Sync story error:', error);
    throw error;
  }
};

export const getStoriesFromCloud = async (userId) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const storiesRef = collection(db, 'users', userId, 'stories');
    const snapshot = await getDocs(storiesRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Get stories error:', error);
    throw error;
  }
};

export const deleteStoryFromCloud = async (userId, storyId) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const storyRef = doc(db, 'users', userId, 'stories', storyId);
    await deleteDoc(storyRef);
    return true;
  } catch (error) {
    console.error('Delete story error:', error);
    throw error;
  }
};

// Firestore functions for voice sessions
export const syncSessionToCloud = async (userId, session) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const sessionRef = doc(db, 'users', userId, 'voiceSessions', session.id);
    await setDoc(sessionRef, {
      ...session,
      syncedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Sync session error:', error);
    throw error;
  }
};

export const getSessionsFromCloud = async (userId) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const sessionsRef = collection(db, 'users', userId, 'voiceSessions');
    const snapshot = await getDocs(sessionsRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Get sessions error:', error);
    throw error;
  }
};

export const deleteSessionFromCloud = async (userId, sessionId) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const sessionRef = doc(db, 'users', userId, 'voiceSessions', sessionId);
    await deleteDoc(sessionRef);
    return true;
  } catch (error) {
    console.error('Delete session error:', error);
    throw error;
  }
};

// Sync all data to cloud
export const syncAllToCloud = async (userId, stories, voiceSessions) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    // Sync all stories
    for (const story of stories) {
      await syncStoryToCloud(userId, story);
    }
    // Sync all voice sessions
    for (const session of voiceSessions) {
      await syncSessionToCloud(userId, session);
    }
    return true;
  } catch (error) {
    console.error('Sync all error:', error);
    throw error;
  }
};

// Get all data from cloud
export const getAllFromCloud = async (userId) => {
  if (!db) throw new Error('Firebase not configured');
  try {
    const stories = await getStoriesFromCloud(userId);
    const voiceSessions = await getSessionsFromCloud(userId);
    return { stories, voiceSessions };
  } catch (error) {
    console.error('Get all error:', error);
    throw error;
  }
};

// Subscribe to real-time updates
export const subscribeToStories = (userId, callback) => {
  if (!db) return () => {};
  const storiesRef = collection(db, 'users', userId, 'stories');
  return onSnapshot(storiesRef, (snapshot) => {
    const stories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(stories);
  });
};

export const subscribeToSessions = (userId, callback) => {
  if (!db) return () => {};
  const sessionsRef = collection(db, 'users', userId, 'voiceSessions');
  return onSnapshot(sessionsRef, (snapshot) => {
    const sessions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(sessions);
  });
};

export { auth, db, isConfigured };
