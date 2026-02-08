import { useState } from 'react';
import useUnitStore from '../../../hooks/useUnitStore';
import { Target, BookOpen, Plus, X, Edit2, Check } from 'lucide-react';

function Step2Objectives() {
  const {
    currentUnit,
    addObjective,
    removeObjective,
    updateObjective,
    addVocabularyTerm,
    removeVocabularyTerm,
    updateVocabularyTerm
  } = useUnitStore();

  const [newObjective, setNewObjective] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const [newTerm, setNewTerm] = useState({ term: '', definition: '' });
  const [showAddTerm, setShowAddTerm] = useState(false);

  const handleAddObjective = () => {
    if (newObjective.trim()) {
      addObjective(newObjective.trim());
      setNewObjective('');
    }
  };

  const handleSaveEdit = (index) => {
    if (editValue.trim()) {
      updateObjective(index, editValue.trim());
    }
    setEditingIndex(null);
    setEditValue('');
  };

  const handleAddTerm = () => {
    if (newTerm.term.trim() && newTerm.definition.trim()) {
      addVocabularyTerm(newTerm);
      setNewTerm({ term: '', definition: '' });
      setShowAddTerm(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Learning Objectives */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-accent-purple" />
          <h2 className="text-lg font-semibold text-text-primary">Learning Objectives</h2>
        </div>
        <p className="text-sm text-text-muted mb-4">
          What should students be able to DO by the end of this unit? Use action verbs (create, analyze, explain, etc.)
        </p>

        {/* Objectives list */}
        <div className="space-y-2 mb-4">
          {currentUnit.objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-dark-surface border border-dark-border rounded-lg group"
            >
              <span className="w-6 h-6 bg-accent-purple/20 rounded-full flex items-center justify-center text-xs text-accent-purple font-medium">
                {index + 1}
              </span>

              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 bg-dark-bg border border-dark-border rounded px-3 py-1 text-sm"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveEdit(index);
                      if (e.key === 'Escape') setEditingIndex(null);
                    }}
                  />
                  <button
                    onClick={() => handleSaveEdit(index)}
                    className="p-1 text-green-400 hover:bg-green-400/10 rounded"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <span className="flex-1 text-text-primary">{objective}</span>
                  <button
                    onClick={() => {
                      setEditingIndex(index);
                      setEditValue(objective);
                    }}
                    className="p-1 text-text-muted hover:text-text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => removeObjective(index)}
                    className="p-1 text-text-muted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Add new objective */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newObjective}
            onChange={(e) => setNewObjective(e.target.value)}
            placeholder="Add a learning objective..."
            className="input flex-1"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddObjective();
            }}
          />
          <button
            onClick={handleAddObjective}
            disabled={!newObjective.trim()}
            className="btn btn-primary disabled:opacity-50"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Suggestions */}
        {currentUnit.objectives.length === 0 && (
          <div className="mt-4 p-4 bg-dark-hover rounded-lg">
            <p className="text-sm text-text-muted mb-2">Example objectives:</p>
            <div className="space-y-2">
              {[
                'Write for loops that execute a specific number of times',
                'Use loops to iterate through arrays',
                'Debug common loop errors (off-by-one, infinite loops)',
              ].map((example) => (
                <button
                  key={example}
                  onClick={() => addObjective(example)}
                  className="block w-full text-left text-sm text-text-secondary hover:text-text-primary p-2 rounded hover:bg-dark-surface transition-colors"
                >
                  + {example}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Vocabulary */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-text-primary">Key Vocabulary</h2>
          </div>
          <button
            onClick={() => setShowAddTerm(true)}
            className="btn btn-secondary text-sm"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Term
          </button>
        </div>

        {/* Vocabulary list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentUnit.vocabulary.map((term) => (
            <div
              key={term.id}
              className="p-4 bg-dark-surface border border-dark-border rounded-lg group relative"
            >
              <button
                onClick={() => removeVocabularyTerm(term.id)}
                className="absolute top-2 right-2 p-1 text-text-muted hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
              <h4 className="font-medium text-text-primary mb-1">{term.term}</h4>
              <p className="text-sm text-text-muted">{term.definition}</p>
              {term.example && (
                <p className="text-xs text-text-muted mt-2 italic">
                  Example: {term.example}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Add term modal */}
        {showAddTerm && (
          <div className="mt-4 p-4 bg-dark-surface border border-dark-border rounded-lg">
            <h4 className="font-medium text-text-primary mb-3">Add Vocabulary Term</h4>
            <div className="space-y-3">
              <input
                type="text"
                value={newTerm.term}
                onChange={(e) => setNewTerm({ ...newTerm, term: e.target.value })}
                placeholder="Term"
                className="input"
                autoFocus
              />
              <textarea
                value={newTerm.definition}
                onChange={(e) => setNewTerm({ ...newTerm, definition: e.target.value })}
                placeholder="Definition"
                className="input resize-none"
                rows={2}
              />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => {
                    setShowAddTerm(false);
                    setNewTerm({ term: '', definition: '' });
                  }}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTerm}
                  disabled={!newTerm.term.trim() || !newTerm.definition.trim()}
                  className="btn btn-primary disabled:opacity-50"
                >
                  Add Term
                </button>
              </div>
            </div>
          </div>
        )}

        {currentUnit.vocabulary.length === 0 && !showAddTerm && (
          <p className="text-sm text-text-muted text-center py-8">
            No vocabulary terms yet. Add key terms students should learn.
          </p>
        )}
      </div>
    </div>
  );
}

export default Step2Objectives;
