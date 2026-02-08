import { useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { createLessonSlides } from '../services/slidesService';

/**
 * Hook for generating Google Slides from lessons
 */
export function useSlides() {
  const { user, getAccessToken } = useAuth();
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [generatedSlides, setGeneratedSlides] = useState(null);

  const generateSlides = useCallback(async (lesson, unit) => {
    if (!user) {
      setError('You must be logged in to generate slides');
      return null;
    }

    setIsGenerating(true);
    setError(null);
    setGeneratedSlides(null);

    try {
      const accessToken = await getAccessToken();

      if (!accessToken) {
        throw new Error('Could not get access token. Please sign in again.');
      }

      const result = await createLessonSlides(accessToken, lesson, unit);
      setGeneratedSlides(result);
      return result;
    } catch (err) {
      console.error('Failed to generate slides:', err);
      setError(err.message || 'Failed to generate slides');
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, [user, getAccessToken]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearGeneratedSlides = useCallback(() => {
    setGeneratedSlides(null);
  }, []);

  return {
    generateSlides,
    isGenerating,
    error,
    generatedSlides,
    clearError,
    clearGeneratedSlides,
  };
}

export default useSlides;
