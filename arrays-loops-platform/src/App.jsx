import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import WeekView from './components/WeekView';
import ExerciseDetail from './components/ExerciseDetail';
import VocabularyPage from './components/VocabularyPage';

const STORAGE_KEY = 'arrays-loops-progress';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [completedExercises, setCompletedExercises] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        setCompletedExercises(data.completedExercises || []);
        setTotalPoints(data.totalPoints || 0);
      }
    } catch (err) {
      console.error('Error loading progress:', err);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        completedExercises,
        totalPoints
      }));
    } catch (err) {
      console.error('Error saving progress:', err);
    }
  }, [completedExercises, totalPoints]);

  const handleSelectWeek = (weekKey) => {
    setSelectedWeek(weekKey);
    setCurrentView('week');
  };

  const handleSelectExercise = (exerciseId) => {
    setSelectedExercise(exerciseId);
    setCurrentView('exercise');
  };

  const handleCompleteExercise = (exerciseId, points) => {
    if (!completedExercises.includes(exerciseId)) {
      setCompletedExercises([...completedExercises, exerciseId]);
      setTotalPoints(totalPoints + points);
    }
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedWeek(null);
    setSelectedExercise(null);
  };

  const handleBackToWeek = () => {
    setCurrentView('week');
    setSelectedExercise(null);
  };

  const handleShowVocabulary = () => {
    setCurrentView('vocabulary');
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCompletedExercises([]);
      setTotalPoints(0);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <h1 onClick={handleBackToDashboard} style={{ cursor: 'pointer' }}>
            Arrays & Loops
          </h1>
        </div>
        <nav className="header-nav">
          <button
            className={currentView === 'dashboard' ? 'active' : ''}
            onClick={handleBackToDashboard}
          >
            Dashboard
          </button>
          <button
            className={currentView === 'vocabulary' ? 'active' : ''}
            onClick={handleShowVocabulary}
          >
            Vocabulary
          </button>
        </nav>
        <div className="header-right">
          <div className="points-display">
            <span className="points-value">{totalPoints}</span>
            <span className="points-label">points</span>
          </div>
        </div>
      </header>

      <main className="main-content">
        {currentView === 'dashboard' && (
          <Dashboard
            onSelectWeek={handleSelectWeek}
            completedExercises={completedExercises}
            totalPoints={totalPoints}
          />
        )}

        {currentView === 'week' && selectedWeek && (
          <WeekView
            weekKey={selectedWeek}
            onSelectExercise={handleSelectExercise}
            onBack={handleBackToDashboard}
            completedExercises={completedExercises}
          />
        )}

        {currentView === 'exercise' && selectedExercise && (
          <ExerciseDetail
            exerciseId={selectedExercise}
            onBack={handleBackToWeek}
            onComplete={handleCompleteExercise}
            isCompleted={completedExercises.includes(selectedExercise)}
          />
        )}

        {currentView === 'vocabulary' && (
          <VocabularyPage onBack={handleBackToDashboard} />
        )}
      </main>

      <footer className="footer">
        <p>Arrays, Loops & Traversal | p5.js Learning Platform</p>
        <button className="reset-button" onClick={handleResetProgress}>
          Reset Progress
        </button>
      </footer>
    </div>
  );
}

export default App;
