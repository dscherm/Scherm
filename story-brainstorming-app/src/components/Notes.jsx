import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Trash2, Tag, BookOpen, User, Globe, Lightbulb, Search } from 'lucide-react';
import useStoryStore from '../hooks/useStoryStore';

const noteCategories = [
  { id: 'general', name: 'General', icon: Lightbulb, color: '#64748b' },
  { id: 'plot', name: 'Plot', icon: BookOpen, color: '#6366f1' },
  { id: 'character', name: 'Character', icon: User, color: '#f59e0b' },
  { id: 'world', name: 'World', icon: Globe, color: '#22c55e' },
  { id: 'research', name: 'Research', icon: Search, color: '#ec4899' }
];

const Notes = () => {
  const { storyId } = useParams();
  const getCurrentStory = useStoryStore(state => state.getCurrentStory);
  const addNote = useStoryStore(state => state.addNote);
  const updateNote = useStoryStore(state => state.updateNote);
  const deleteNote = useStoryStore(state => state.deleteNote);

  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [filter, setFilter] = useState('all');
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    category: 'general',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  const story = getCurrentStory();

  if (!story) {
    return (
      <div className="p-4 text-center py-20">
        <p className="text-slate-400">Story not found</p>
      </div>
    );
  }

  const notes = story.notes || [];
  const filteredNotes = filter === 'all'
    ? notes
    : notes.filter(n => n.category === filter);

  const handleCreateNote = () => {
    if (!newNote.title.trim() && !newNote.content.trim()) return;

    addNote(newNote);
    setShowModal(false);
    setNewNote({ title: '', content: '', category: 'general', tags: [] });
  };

  const handleDeleteNote = (e, noteId) => {
    e.stopPropagation();
    if (confirm('Delete this note?')) {
      deleteNote(noteId);
      if (selectedNote?.id === noteId) {
        setSelectedNote(null);
      }
    }
  };

  const addTag = () => {
    if (!tagInput.trim()) return;
    if (selectedNote) {
      updateNote(selectedNote.id, {
        tags: [...(selectedNote.tags || []), tagInput.trim()]
      });
      setSelectedNote({
        ...selectedNote,
        tags: [...(selectedNote.tags || []), tagInput.trim()]
      });
    } else {
      setNewNote({
        ...newNote,
        tags: [...newNote.tags, tagInput.trim()]
      });
    }
    setTagInput('');
  };

  const removeTag = (tag) => {
    if (selectedNote) {
      const newTags = (selectedNote.tags || []).filter(t => t !== tag);
      updateNote(selectedNote.id, { tags: newTags });
      setSelectedNote({ ...selectedNote, tags: newTags });
    } else {
      setNewNote({
        ...newNote,
        tags: newNote.tags.filter(t => t !== tag)
      });
    }
  };

  const getCategoryInfo = (categoryId) => {
    return noteCategories.find(c => c.id === categoryId) || noteCategories[0];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="p-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">Notes</h2>
          <p className="text-slate-400 text-sm">{notes.length} notes</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2 py-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          All
        </button>
        {noteCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-colors flex items-center gap-2 ${
              filter === cat.id
                ? 'text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
            style={{
              backgroundColor: filter === cat.id ? cat.color : undefined
            }}
          >
            <cat.icon className="w-4 h-4" />
            {cat.name}
          </button>
        ))}
      </div>

      {/* Notes List */}
      {filteredNotes.length === 0 ? (
        <div className="card text-center py-12">
          <Lightbulb className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-slate-400 mb-4">
            {filter === 'all' ? 'No notes yet' : `No ${filter} notes`}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary"
          >
            Create Your First Note
          </button>
        </div>
      ) : (
        <div className="grid gap-3">
          {filteredNotes.map(note => {
            const category = getCategoryInfo(note.category);
            const CategoryIcon = category.icon;

            return (
              <button
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className="card text-left hover:bg-slate-700 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <CategoryIcon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium truncate">
                        {note.title || 'Untitled Note'}
                      </h4>
                      <button
                        onClick={(e) => handleDeleteNote(e, note.id)}
                        className="p-1 text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {note.content && (
                      <p className="text-sm text-slate-400 line-clamp-2 mt-1">
                        {note.content}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-slate-500">
                        {formatDate(note.createdAt)}
                      </span>
                      {note.tags?.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-slate-700 rounded text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {note.tags?.length > 2 && (
                        <span className="text-xs text-slate-500">
                          +{note.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* New Note Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-end justify-center z-50">
          <div className="bg-slate-800 w-full max-w-lg rounded-t-3xl p-6 animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-6" />

            <h3 className="text-xl font-bold mb-6">New Note</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                <input
                  type="text"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  placeholder="Note title"
                  className="input-field"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {noteCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setNewNote({ ...newNote, category: cat.id })}
                      className={`px-3 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors ${
                        newNote.category === cat.id
                          ? 'text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                      style={{
                        backgroundColor: newNote.category === cat.id ? cat.color : undefined
                      }}
                    >
                      <cat.icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Content</label>
                <textarea
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  placeholder="Write your note..."
                  className="textarea-field h-40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tags</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Add a tag"
                    className="input-field flex-1 py-2"
                  />
                  <button onClick={addTag} className="btn-secondary px-4 py-2">
                    <Tag className="w-4 h-4" />
                  </button>
                </div>
                {newNote.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {newNote.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 rounded-lg text-sm flex items-center gap-1"
                      >
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="text-slate-400 hover:text-red-400"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button onClick={() => setShowModal(false)} className="btn-secondary flex-1">
                Cancel
              </button>
              <button onClick={handleCreateNote} className="btn-primary flex-1">
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View/Edit Note Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-black/70 flex items-end justify-center z-50">
          <div className="bg-slate-800 w-full max-w-lg rounded-t-3xl p-6 animate-slide-up max-h-[90vh] overflow-y-auto">
            <div className="w-12 h-1 bg-slate-600 rounded-full mx-auto mb-6" />

            <div className="space-y-4">
              <input
                type="text"
                value={selectedNote.title}
                onChange={(e) => {
                  updateNote(selectedNote.id, { title: e.target.value });
                  setSelectedNote({ ...selectedNote, title: e.target.value });
                }}
                placeholder="Note title"
                className="text-xl font-bold bg-transparent border-none outline-none w-full"
              />

              <div className="flex flex-wrap gap-2">
                {noteCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      updateNote(selectedNote.id, { category: cat.id });
                      setSelectedNote({ ...selectedNote, category: cat.id });
                    }}
                    className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors ${
                      selectedNote.category === cat.id
                        ? 'text-white'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                    style={{
                      backgroundColor: selectedNote.category === cat.id ? cat.color : undefined
                    }}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>

              <textarea
                value={selectedNote.content}
                onChange={(e) => {
                  updateNote(selectedNote.id, { content: e.target.value });
                  setSelectedNote({ ...selectedNote, content: e.target.value });
                }}
                placeholder="Write your note..."
                className="textarea-field h-48"
              />

              <div>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Add a tag"
                    className="input-field flex-1 py-2"
                  />
                  <button onClick={addTag} className="btn-secondary px-4 py-2">
                    <Tag className="w-4 h-4" />
                  </button>
                </div>
                {selectedNote.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {selectedNote.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700 rounded-lg text-sm flex items-center gap-1"
                      >
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="text-slate-400 hover:text-red-400"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setSelectedNote(null)}
              className="btn-primary w-full mt-6"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
