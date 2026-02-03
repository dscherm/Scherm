import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useStoryStore from '../hooks/useStoryStore';

export default function AuthProvider({ children }) {
  const { initAuth, user } = useAuth();
  const { setUserId } = useStoryStore();

  // Initialize auth listener on mount
  useEffect(() => {
    const unsubscribe = initAuth();
    return () => unsubscribe?.();
  }, []);

  // When user changes, update the store
  useEffect(() => {
    if (user?.uid) {
      setUserId(user.uid);
    } else {
      setUserId(null);
    }
  }, [user?.uid]);

  return children;
}
