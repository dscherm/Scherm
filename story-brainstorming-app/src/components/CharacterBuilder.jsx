import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, ChevronRight, Trash2 } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';
import { characterRoles, characterArchetypes } from '../data/characterArchetypes';

const CharacterBuilder = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const getCurrentStory = useStoryStore(state => state.getCurrentStory);
  const addCharacter = useStoryStore(state => state.addCharacter);
  const deleteCharacter = useStoryStore(state => state.deleteCharacter);

  const [showModal, setShowModal] = useState(false);
  const [newCharacter, setNewCharacter] = useState({
    name: '',
    role: 'supporting',
    archetype: ''
  });

  const story = getCurrentStory();

  if (!story) {
    return (
      <div className="p-4 text-center py-20">
        <p className="text-slate-400">Story not found</p>
      </div>
    );
  }

  const handleCreateCharacter = () => {
    if (!newCharacter.name.trim()) return;

    const character = addCharacter(newCharacter);
    setShowModal(false);
    setNewCharacter({ name: '', role: 'supporting', archetype: '' });
    navigate(`/story/${storyId}/character/${character.id}`);
  };

  const handleDeleteCharacter = (e, characterId) => {
    e.stopPropagation();
    if (confirm('Delete this character?')) {
      deleteCharacter(characterId);
    }
  };

  const getRoleColor = (roleId) => {
    const role = characterRoles.find(r => r.id === roleId);
    return role?.color || '#64748b';
  };

  const groupedCharacters = story.characters?.reduce((acc, char) => {
    const role = char.role || 'supporting';
    if (!acc[role]) acc[role] = [];
    acc[role].push(char);
    return acc;
  }, {}) || {};

  return (
    <div className="p-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Characters</h2>
          <p className="text-slate-400 text-sm">{story.characters?.length || 0} characters</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2 py-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Character List by Role */}
      {story.characters?.length === 0 ? (
        <div className="card text-center py-12">
          <div className="w-16 h-16 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Plus className="w-8 h-8 text-slate-500" />
          </div>
          <p className="text-slate-400 mb-4">No characters yet</p>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            Create Your First Character
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {characterRoles.map(role => {
            const chars = groupedCharacters[role.id];
            if (!chars || chars.length === 0) return null;

            return (
              <div key={role.id}>
                <h3 className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: role.color }}
                  />
                  {role.name}
                </h3>

                <div className="space-y-2">
                  {chars.map(character => (
                    <button
                      key={character.id}
                      onClick={() => navigate(`/story/${storyId}/character/${character.id}`)}
                      className="w-full card hover:bg-slate-700 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                          style={{
                            backgroundColor: `${getRoleColor(character.role)}20`,
                            color: getRoleColor(character.role)
                          }}
                        >
                          {character.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <h4 className="font-semibold">{character.name}</h4>
                          {character.archetype && (
                            <p className="text-sm text-slate-400">
                              {characterArchetypes.find(a => a.id === character.archetype)?.name || character.archetype}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => handleDeleteCharacter(e, character.id)}
                            className="p-2 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <ChevronRight className="w-5 h-5 text-slate-500" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Character Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-end justify-center z-50">
          <div className="bg-slate-800 w-full max-w-lg rounded-t-3xl p-6 animate-slide-up max-h-[85vh] overflow-y-auto">
            <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-6" />

            <h3 className="text-xl font-bold mb-6">New Character</h3>

            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Character Name *
                </label>
                <input
                  type="text"
                  value={newCharacter.name}
                  onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
                  placeholder="Enter character name"
                  className="input-field"
                  autoFocus
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Story Role
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {characterRoles.slice(0, 6).map(role => (
                    <button
                      key={role.id}
                      onClick={() => setNewCharacter({ ...newCharacter, role: role.id })}
                      className={`p-3 rounded-xl text-left transition-colors ${
                        newCharacter.role === role.id
                          ? 'ring-2 ring-primary-500'
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                      style={{
                        backgroundColor: newCharacter.role === role.id ? `${role.color}20` : undefined
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: role.color }}
                        />
                        <span className="font-medium text-sm">{role.name}</span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{role.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Archetype */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Archetype (optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {characterArchetypes.slice(0, 8).map(archetype => (
                    <button
                      key={archetype.id}
                      onClick={() => setNewCharacter({
                        ...newCharacter,
                        archetype: newCharacter.archetype === archetype.id ? '' : archetype.id
                      })}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        newCharacter.archetype === archetype.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {archetype.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCharacter}
                disabled={!newCharacter.name.trim()}
                className="btn-primary flex-1 disabled:opacity-50"
              >
                Create Character
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterBuilder;
