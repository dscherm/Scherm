import React from 'react';
import { exercises } from '../data/exercises';
import { learningObjectives } from '../data/vocabulary';

function Dashboard({ onSelectWeek, completedExercises, totalPoints }) {
  const weeks = [
    { key: 'week1', num: 1, color: '#00ff88' },
    { key: 'week2', num: 2, color: '#00d4ff' },
    { key: 'week3', num: 3, color: '#ff6b6b' },
    { key: 'week4', num: 4, color: '#ffd93d' }
  ];

  const getWeekProgress = (weekKey) => {
    const week = exercises[weekKey];
    let total = 0;
    let completed = 0;

    for (const day of week.days) {
      for (const ex of day.exercises) {
        total++;
        if (completedExercises.includes(ex.id)) {
          completed++;
        }
      }
    }

    return { total, completed, percent: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  return (
    <div className="dashboard">
      <div className="welcome-section">
        <h1>Arrays, Loops & Traversal</h1>
        <p className="subtitle">Interactive p5.js Learning Platform</p>
        <p className="description">
          Master the fundamentals of programming with hands-on exercises.
          Learn to store data in arrays, repeat actions with loops, and
          process every element with traversal patterns.
        </p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">{totalPoints}</div>
          <div className="stat-label">Total Points</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{completedExercises.length}</div>
          <div className="stat-label">Exercises Done</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4</div>
          <div className="stat-label">Weeks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">20</div>
          <div className="stat-label">Days</div>
        </div>
      </div>

      <h2 className="section-title">Select a Week</h2>

      <div className="weeks-grid">
        {weeks.map(({ key, num, color }) => {
          const week = exercises[key];
          const progress = getWeekProgress(key);
          const objectives = learningObjectives[key] || [];

          return (
            <div
              key={key}
              className="week-card"
              style={{ '--accent-color': color }}
              onClick={() => onSelectWeek(key)}
            >
              <div className="week-header">
                <span className="week-number">Week {num}</span>
                <span className="week-progress">{progress.completed}/{progress.total}</span>
              </div>

              <h3 className="week-title">{week.title}</h3>
              <p className="week-idea">{week.bigIdea}</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>

              <div className="objectives-preview">
                <strong>You'll learn to:</strong>
                <ul>
                  {objectives.slice(0, 3).map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className="week-days">
                {week.days.length} days of exercises
              </div>
            </div>
          );
        })}
      </div>

      <div className="unit-overview">
        <h2>Unit Structure</h2>
        <div className="structure-grid">
          <div className="structure-item">
            <div className="structure-icon">📋</div>
            <h4>Daily Exercises</h4>
            <p>Short, focused coding tasks that build skills incrementally</p>
          </div>
          <div className="structure-item">
            <div className="structure-icon">🎮</div>
            <h4>Mini-Projects</h4>
            <p>End-of-week projects that combine skills into something real</p>
          </div>
          <div className="structure-item">
            <div className="structure-icon">🏆</div>
            <h4>Final Capstone</h4>
            <p>A complete Grid Adventure Game using all concepts</p>
          </div>
          <div className="structure-item">
            <div className="structure-icon">📖</div>
            <h4>Vocabulary</h4>
            <p>Programming terms with clear definitions and examples</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
