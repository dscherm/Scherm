import { createContext, useContext, useState, useEffect, useRef } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessTokenRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (!user) {
        accessTokenRef.current = null;
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Get the Google OAuth credential with access token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        accessTokenRef.current = credential.accessToken;
      }
      return result.user;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      accessTokenRef.current = null;
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    }
  };

  // Get access token, re-authenticating if needed
  const getAccessToken = async () => {
    if (accessTokenRef.current) {
      return accessTokenRef.current;
    }

    // Need to re-authenticate to get a fresh token
    if (user) {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          accessTokenRef.current = credential.accessToken;
          return credential.accessToken;
        }
      } catch (error) {
        console.error('Failed to get access token:', error);
        throw error;
      }
    }

    return null;
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signOut,
    getAccessToken,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
