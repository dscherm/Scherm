import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import {
  syncStoryToCloud,
  syncSessionToCloud,
  deleteStoryFromCloud,
  deleteSessionFromCloud,
  subscribeToStories,
  subscribeToSessions,
  getAllFromCloud,
  isConfigured
} from '../services/firebase';

// Debounce helper for cloud sync
let syncTimeout = null;
const SYNC_DELAY = 1000; // 1 second debounce

const useStoryStore = create(
  subscribeWithSelector(
    persist(
      (set, get) => ({
        // Stories collection
        stories: [],
        currentStoryId: null,
        voiceSessions: [],

        // Sync state
        syncStatus: 'idle', // 'idle' | 'syncing' | 'synced' | 'error'
        lastSyncedAt: null,
        syncError: null,
        userId: null,
        cloudListenersActive: false,

        // Set user ID for cloud sync
        setUserId: (userId) => {
          set({ userId });
          if (userId) {
            get().initCloudSync();
          } else {
            get().stopCloudSync();
          }
        },

        // Initialize cloud sync listeners
        initCloudSync: async () => {
          const { userId, cloudListenersActive } = get();
          if (!userId || !isConfigured || cloudListenersActive) return;

          set({ syncStatus: 'syncing' });

          try {
            // First, fetch existing cloud data and merge
            const cloudData = await getAllFromCloud(userId);
            get().mergeCloudData(cloudData.stories || [], cloudData.voiceSessions || []);

            // Then upload any local-only data
            const { stories, voiceSessions } = get();
            for (const story of stories) {
              await syncStoryToCloud(userId, story);
            }
            for (const session of voiceSessions) {
              await syncSessionToCloud(userId, session);
            }

            // Set up real-time listeners
            const unsubStories = subscribeToStories(userId, (cloudStories) => {
              // Only update if data is different (avoid loops)
              const currentStories = get().stories;
              const hasChanges = cloudStories.some(cs => {
                const local = currentStories.find(s => s.id === cs.id);
                if (!local) return true;
                return new Date(cs.updatedAt || cs.syncedAt) > new Date(local.updatedAt);
              });
              if (hasChanges) {
                get().mergeCloudData(cloudStories, []);
              }
            });

            const unsubSessions = subscribeToSessions(userId, (cloudSessions) => {
              const currentSessions = get().voiceSessions;
              const hasNew = cloudSessions.some(cs => !currentSessions.find(s => s.id === cs.id));
              if (hasNew) {
                get().mergeCloudData([], cloudSessions);
              }
            });

            // Store unsubscribe functions
            set({
              cloudListenersActive: true,
              syncStatus: 'synced',
              lastSyncedAt: new Date().toISOString(),
              _unsubscribers: { stories: unsubStories, sessions: unsubSessions }
            });

          } catch (error) {
            console.error('Cloud sync init error:', error);
            set({ syncStatus: 'error', syncError: error.message });
          }
        },

        // Stop cloud sync
        stopCloudSync: () => {
          const state = get();
          if (state._unsubscribers) {
            state._unsubscribers.stories?.();
            state._unsubscribers.sessions?.();
          }
          set({
            cloudListenersActive: false,
            userId: null,
            _unsubscribers: null
          });
        },

        // Sync a single story to cloud (debounced)
        syncStory: (story) => {
          const { userId } = get();
          if (!userId || !isConfigured) return;

          set({ syncStatus: 'syncing' });

          // Clear existing timeout
          if (syncTimeout) clearTimeout(syncTimeout);

          // Debounce the sync
          syncTimeout = setTimeout(async () => {
            try {
              await syncStoryToCloud(userId, story);
              set({ syncStatus: 'synced', lastSyncedAt: new Date().toISOString() });
            } catch (error) {
              console.error('Sync error:', error);
              set({ syncStatus: 'error', syncError: error.message });
            }
          }, SYNC_DELAY);
        },

        // Sync a voice session to cloud
        syncSession: (session) => {
          const { userId } = get();
          if (!userId || !isConfigured) return;

          syncSessionToCloud(userId, session).catch(error => {
            console.error('Session sync error:', error);
          });
        },

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

          // Auto-sync to cloud
          get().syncStory(newStory);

          return newStory;
        },

        // Update current story
        updateStory: (updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id === state.currentStoryId) {
                updatedStory = { ...story, ...updates, updatedAt: new Date().toISOString() };
                return updatedStory;
              }
              return story;
            });
            return { stories: newStories };
          });

          // Auto-sync to cloud
          if (updatedStory) {
            get().syncStory(updatedStory);
          }
        },

        // Delete a story
        deleteStory: (storyId) => {
          const { userId } = get();

          set(state => ({
            stories: state.stories.filter(s => s.id !== storyId),
            currentStoryId: state.currentStoryId === storyId ? null : state.currentStoryId
          }));

          // Delete from cloud
          if (userId && isConfigured) {
            deleteStoryFromCloud(userId, storyId).catch(console.error);
          }
        },

        // Set current story
        setCurrentStory: (storyId) => {
          set({ currentStoryId: storyId });
        },

        // Update act content
        updateAct: (actId, updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                acts: story.acts.map(act =>
                  act.id === actId ? { ...act, ...updates } : act
                ),
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
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

          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
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
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);

          return newScene;
        },

        // Update a scene
        updateScene: (actId, sceneId, updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
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
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
        },

        // Delete a scene
        deleteScene: (actId, sceneId) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
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
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
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

          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id === state.currentStoryId) {
                updatedStory = {
                  ...story,
                  characters: [...story.characters, newCharacter],
                  updatedAt: new Date().toISOString()
                };
                return updatedStory;
              }
              return story;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);

          return newCharacter;
        },

        updateCharacter: (characterId, updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                characters: story.characters.map(char =>
                  char.id === characterId ? { ...char, ...updates } : char
                ),
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
        },

        deleteCharacter: (characterId) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                characters: story.characters.filter(char => char.id !== characterId),
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
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

          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id === state.currentStoryId) {
                updatedStory = {
                  ...story,
                  notes: [...story.notes, newNote],
                  updatedAt: new Date().toISOString()
                };
                return updatedStory;
              }
              return story;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);

          return newNote;
        },

        updateNote: (noteId, updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                notes: story.notes.map(note =>
                  note.id === noteId ? { ...note, ...updates } : note
                ),
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
        },

        deleteNote: (noteId) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                notes: story.notes.filter(note => note.id !== noteId),
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
        },

        // World building
        updateWorldBuilding: (updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                worldBuilding: { ...story.worldBuilding, ...updates },
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
        },

        // Theme
        updateTheme: (updates) => {
          let updatedStory = null;

          set(state => {
            const newStories = state.stories.map(story => {
              if (story.id !== state.currentStoryId) return story;
              updatedStory = {
                ...story,
                theme: { ...story.theme, ...updates },
                updatedAt: new Date().toISOString()
              };
              return updatedStory;
            });
            return { stories: newStories };
          });

          if (updatedStory) get().syncStory(updatedStory);
        },

        // Add a new voice session
        addVoiceSession: (sessionData) => {
          const newSession = {
            id: uuidv4(),
            title: sessionData.title || `Session ${new Date().toLocaleDateString()}`,
            transcript: sessionData.transcript || '',
            summary: sessionData.summary || '',
            linkedStoryId: sessionData.linkedStoryId || null,
            category: sessionData.category || 'brainstorm',
            tags: sessionData.tags || [],
            duration: sessionData.duration || 0,
            createdAt: new Date().toISOString()
          };

          set(state => ({
            voiceSessions: [...state.voiceSessions, newSession]
          }));

          // Auto-sync to cloud
          get().syncSession(newSession);

          return newSession;
        },

        // Update a voice session
        updateVoiceSession: (sessionId, updates) => {
          let updatedSession = null;

          set(state => ({
            voiceSessions: state.voiceSessions.map(session => {
              if (session.id === sessionId) {
                updatedSession = { ...session, ...updates };
                return updatedSession;
              }
              return session;
            })
          }));

          if (updatedSession) get().syncSession(updatedSession);
        },

        // Delete a voice session
        deleteVoiceSession: (sessionId) => {
          const { userId } = get();

          set(state => ({
            voiceSessions: state.voiceSessions.filter(session => session.id !== sessionId)
          }));

          // Delete from cloud
          if (userId && isConfigured) {
            deleteSessionFromCloud(userId, sessionId).catch(console.error);
          }
        },

        // Get sessions for current story
        getSessionsForStory: () => {
          const { voiceSessions, currentStoryId } = get();
          return voiceSessions.filter(s => s.linkedStoryId === currentStoryId || !s.linkedStoryId);
        },

        // Convert voice session to note
        convertSessionToNote: (sessionId) => {
          const { voiceSessions, addNote } = get();
          const session = voiceSessions.find(s => s.id === sessionId);
          if (!session) return null;

          return addNote({
            title: session.title,
            content: session.transcript + (session.summary ? `\n\n---\nSummary: ${session.summary}` : ''),
            category: session.category === 'character' ? 'character' :
                      session.category === 'plot' ? 'plot' :
                      session.category === 'world' ? 'world' : 'general',
            tags: [...session.tags, 'voice-session']
          });
        },

        // Merge cloud data with local data (for sync)
        mergeCloudData: (cloudStories, cloudSessions) => {
          set(state => {
            // Merge stories - cloud wins for conflicts based on updatedAt
            const mergedStories = [...state.stories];
            for (const cloudStory of cloudStories) {
              const localIndex = mergedStories.findIndex(s => s.id === cloudStory.id);
              if (localIndex === -1) {
                // New story from cloud
                mergedStories.push(cloudStory);
              } else {
                // Compare timestamps - newer wins
                const localStory = mergedStories[localIndex];
                const cloudDate = new Date(cloudStory.updatedAt || cloudStory.syncedAt);
                const localDate = new Date(localStory.updatedAt);
                if (cloudDate > localDate) {
                  mergedStories[localIndex] = cloudStory;
                }
              }
            }

            // Merge voice sessions
            const mergedSessions = [...state.voiceSessions];
            for (const cloudSession of cloudSessions) {
              const localIndex = mergedSessions.findIndex(s => s.id === cloudSession.id);
              if (localIndex === -1) {
                // New session from cloud
                mergedSessions.push(cloudSession);
              }
            }

            return {
              stories: mergedStories,
              voiceSessions: mergedSessions
            };
          });
        }
      }),
      {
        name: 'story-brainstormer-storage',
        version: 2,
        partialize: (state) => ({
          stories: state.stories,
          currentStoryId: state.currentStoryId,
          voiceSessions: state.voiceSessions,
          lastSyncedAt: state.lastSyncedAt
        })
      }
    )
  )
);

export default useStoryStore;
