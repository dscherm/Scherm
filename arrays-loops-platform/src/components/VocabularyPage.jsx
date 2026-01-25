import React, { useState } from 'react';
import { vocabulary, categories, getTermsByCategory } from '../data/vocabulary';

function VocabularyPage({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const getFilteredTerms = () => {
    let terms = Object.entries(vocabulary).map(([id, term]) => ({ id, ...term }));

    if (selectedCategory !== 'all') {
      terms = terms.filter(t => t.category === selectedCategory);
    }

    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      terms = terms.filter(t =>
        t.term.toLowerCase().includes(lower) ||
        t.definition.toLowerCase().includes(lower)
      );
    }

    return terms.sort((a, b) => a.term.localeCompare(b.term));
  };

  const filteredTerms = getFilteredTerms();

  return (
    <div className="vocabulary-page">
      <button className="back-button" onClick={onBack}>
        ← Back to Dashboard
      </button>

      <h1>Programming Vocabulary</h1>
      <p className="page-description">
        Key terms and concepts for arrays, loops, and traversal.
        Click any term card to see its definition and example.
      </p>

      <div className="vocab-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          <button
            className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="vocab-count">
        Showing {filteredTerms.length} terms
      </div>

      <div className="vocab-grid">
        {filteredTerms.map(term => (
          <div key={term.id} className="vocab-card">
            <div className="vocab-card-header">
              <h3>{term.term}</h3>
              <span className="vocab-category">{term.category}</span>
            </div>
            <p className="vocab-definition">{term.definition}</p>
            {term.example && (
              <code className="vocab-example">{term.example}</code>
            )}
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="no-results">
          No terms found matching your search.
        </div>
      )}
    </div>
  );
}

export default VocabularyPage;
