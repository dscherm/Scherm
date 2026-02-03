import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  signInWithGoogle,
  logOut,
  onAuthChange,
  isConfigured
} from '../services/firebase';

const useAuth = create(
  persist(
    (set, get) => ({
      user: null,
      loading: true,
      error: null,
      isConfigured,

      // Initialize auth listener
      initAuth: () => {
        if (!isConfigured) {
          set({ loading: false, error: 'Firebase not configured' });
          return () => {};
        }

        return onAuthChange((user) => {
          set({
            user: user ? {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL
            } : null,
            loading: false,
            error: null
          });
        });
      },

      // Sign in
      signIn: async () => {
        if (!isConfigured) {
          set({ error: 'Firebase not configured' });
          return null;
        }

        set({ loading: true, error: null });
        try {
          const user = await signInWithGoogle();
          return user;
        } catch (error) {
          set({ error: error.message, loading: false });
          throw error;
        }
      },

      // Sign out
      signOut: async () => {
        try {
          await logOut();
          set({ user: null });
        } catch (error) {
          set({ error: error.message });
          throw error;
        }
      },

      // Check if user is signed in
      isSignedIn: () => {
        return !!get().user;
      },

      // Get user ID
      getUserId: () => {
        return get().user?.uid || null;
      }
    }),
    {
      name: 'story-brainstormer-auth',
      partialize: (state) => ({ user: state.user }) // Only persist user data
    }
  )
);

export default useAuth;
