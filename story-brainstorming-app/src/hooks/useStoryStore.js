import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

const useStoryStore = create(
  persist(
    (set, get) => ({
      // Stories collection
      stories: [],
      currentStoryId: null,

      // Get current story
      getCurrentStory: () => {
        const { stories, currentStoryId } = get();
        return stories.find(s => s.id === currentStoryId) || null;
      },

      // Create a new story
      createStory: (storyData) => {
        const newStory = {
          id: uuidv4(),
          title: storyData.title || 'Untitled Story',
          logline: storyData.logline || '',
          genre: storyData.genre || '',
          structureType: storyData.structureType || 'threeAct',
          acts: storyData.acts || [],
          characters: [],
          notes: [],
          worldBuilding: {
            setting: '',
            rules: '',
            history: '',
            culture: ''
          },
          theme: {
            central: '',
            symbols: [],
            questions: []
          },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        set(state => ({
          stories: [...state.stories, newStory],
          currentStoryId: newStory.id
        }));

        return newStory;
      },

      // Update current story
      updateStory: (updates) => {
        set(state => ({
          stories: state.stories.map(story =>
            story.id === state.currentStoryId
              ? { ...story, ...updates, updatedAt: new Date().toISOString() }
              : story
          )
        }));
      },

      // Delete a story
      deleteStory: (storyId) => {
        set(state => ({
          stories: state.stories.filter(s => s.id !== storyId),
          currentStoryId: state.currentStoryId === storyId ? null : state.currentStoryId
        }));
      },

      // Set current story
      setCurrentStory: (storyId) => {
        set({ currentStoryId: storyId });
      },

      // Update act content
      updateAct: (actId, updates) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              acts: story.acts.map(act =>
                act.id === actId ? { ...act, ...updates } : act
              ),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      // Add a scene to an act
      addScene: (actId, sceneData) => {
        const newScene = {
          id: uuidv4(),
          title: sceneData.title || 'New Scene',
          summary: sceneData.summary || '',
          notes: sceneData.notes || '',
          characters: sceneData.characters || [],
          location: sceneData.location || '',
          order: sceneData.order || 0
        };

        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              acts: story.acts.map(act => {
                if (act.id !== actId) return act;
                return {
                  ...act,
                  scenes: [...(act.scenes || []), newScene]
                };
              }),
              updatedAt: new Date().toISOString()
            };
          })
        }));

        return newScene;
      },

      // Update a scene
      updateScene: (actId, sceneId, updates) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              acts: story.acts.map(act => {
                if (act.id !== actId) return act;
                return {
                  ...act,
                  scenes: (act.scenes || []).map(scene =>
                    scene.id === sceneId ? { ...scene, ...updates } : scene
                  )
                };
              }),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      // Delete a scene
      deleteScene: (actId, sceneId) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              acts: story.acts.map(act => {
                if (act.id !== actId) return act;
                return {
                  ...act,
                  scenes: (act.scenes || []).filter(scene => scene.id !== sceneId)
                };
              }),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      // Character management
      addCharacter: (characterData) => {
        const newCharacter = {
          id: uuidv4(),
          name: characterData.name || 'New Character',
          role: characterData.role || 'supporting',
          archetype: characterData.archetype || '',
          age: characterData.age || '',
          appearance: characterData.appearance || '',
          personality: characterData.personality || '',
          background: characterData.background || '',
          motivation: characterData.motivation || '',
          goal: characterData.goal || '',
          fear: characterData.fear || '',
          flaw: characterData.flaw || '',
          arc: characterData.arc || '',
          relationships: characterData.relationships || [],
          traits: characterData.traits || [],
          notes: characterData.notes || ''
        };

        set(state => ({
          stories: state.stories.map(story =>
            story.id === state.currentStoryId
              ? { ...story, characters: [...story.characters, newCharacter], updatedAt: new Date().toISOString() }
              : story
          )
        }));

        return newCharacter;
      },

      updateCharacter: (characterId, updates) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              characters: story.characters.map(char =>
                char.id === characterId ? { ...char, ...updates } : char
              ),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      deleteCharacter: (characterId) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              characters: story.characters.filter(char => char.id !== characterId),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      // Notes management
      addNote: (noteData) => {
        const newNote = {
          id: uuidv4(),
          title: noteData.title || 'New Note',
          content: noteData.content || '',
          category: noteData.category || 'general',
          linkedActId: noteData.linkedActId || null,
          linkedCharacterId: noteData.linkedCharacterId || null,
          tags: noteData.tags || [],
          createdAt: new Date().toISOString()
        };

        set(state => ({
          stories: state.stories.map(story =>
            story.id === state.currentStoryId
              ? { ...story, notes: [...story.notes, newNote], updatedAt: new Date().toISOString() }
              : story
          )
        }));

        return newNote;
      },

      updateNote: (noteId, updates) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              notes: story.notes.map(note =>
                note.id === noteId ? { ...note, ...updates } : note
              ),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      deleteNote: (noteId) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              notes: story.notes.filter(note => note.id !== noteId),
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      // World building
      updateWorldBuilding: (updates) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              worldBuilding: { ...story.worldBuilding, ...updates },
              updatedAt: new Date().toISOString()
            };
          })
        }));
      },

      // Theme
      updateTheme: (updates) => {
        set(state => ({
          stories: state.stories.map(story => {
            if (story.id !== state.currentStoryId) return story;
            return {
              ...story,
              theme: { ...story.theme, ...updates },
              updatedAt: new Date().toISOString()
            };
          })
        }));
      }
    }),
    {
      name: 'story-brainstormer-storage',
      version: 1
    }
  )
);

export default useStoryStore;
