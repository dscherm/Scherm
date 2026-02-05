import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Default PBL Unit Structure following backwards design
const DEFAULT_PBL_UNIT = {
  title: '',
  subject: '',
  gradeLevel: '',
  unitType: 'pbl',
  duration: {
    totalWeeks: 7,
    totalDays: 35
  },

  // Step 1: Destination (Final Project & Cognitive Skills)
  destination: {
    finalProject: {
      title: '',
      description: '',
      publicProduct: '',
      audience: ''
    },
    essentialQuestions: [],
    cognitiveSkills: [], // ['analysis', 'communication', 'collaboration']
    standards: [],
  },

  // Step 2: Launch
  launch: {
    entryEvent: {
      title: '',
      description: '',
      type: '', // 'guest_speaker', 'video', 'simulation', 'field_trip', 'artifact'
      duration: 1
    },
    rubricUrl: '',
    knowNeedToKnow: {
      knows: [],
      needToKnows: []
    },
  },

  // Step 3: Milestones (3 total)
  milestones: [
    {
      id: 'milestone-1',
      title: '',
      weekRange: { start: 1, end: 2 },
      type: '', // 'lab', 'discussion', 'design_challenge', 'research', 'prototype'
      description: '',
      learningObjectives: [],
      activities: [],
      checkpoint: {
        title: '',
        cognitiveSkills: [], // Subset of unit's cognitive skills
        assessmentType: '', // 'peer_critique', 'self_assessment', 'conference', 'gallery_walk'
      },
      miniLessons: [],
    },
    {
      id: 'milestone-2',
      title: '',
      weekRange: { start: 3, end: 4 },
      type: '',
      description: '',
      learningObjectives: [],
      activities: [],
      checkpoint: {
        title: '',
        cognitiveSkills: [],
        assessmentType: '',
      },
      miniLessons: [],
    },
    {
      id: 'milestone-3',
      title: '',
      weekRange: { start: 5, end: 6 },
      type: '',
      description: '',
      learningObjectives: [],
      activities: [],
      checkpoint: {
        title: '',
        cognitiveSkills: [],
        assessmentType: '',
      },
      miniLessons: [],
    },
  ],

  // Step 4: Reflections
  reflections: [
    {
      id: 'reflection-mid',
      weekNumber: 3,
      title: 'Mid-Unit Reflection',
      prompts: []
    },
    {
      id: 'reflection-final',
      weekNumber: 8,
      title: 'Final Reflection',
      prompts: []
    },
  ],

  // Step 5: Final Phase
  finalPhase: {
    presentationFormat: '', // 'exhibition', 'panel', 'pitch', 'showcase', 'digital'
    audienceDetails: '',
    presentationDate: '',
    preparationActivities: [],
  },

  // Metadata
  status: 'draft',
  createdAt: null,
  updatedAt: null,
};

// Default milestone structure for creating new milestones
const DEFAULT_MILESTONE = {
  title: '',
  weekRange: { start: 1, end: 2 },
  type: '',
  description: '',
  learningObjectives: [],
  activities: [],
  checkpoint: {
    title: '',
    cognitiveSkills: [],
    assessmentType: '',
  },
  miniLessons: [],
};

// Default mini-lesson structure
const DEFAULT_MINI_LESSON = {
  id: '',
  title: '',
  duration: 15, // minutes
  learningTarget: '',
  instruction: '',
  practiceActivity: '',
  resources: [],
};

const usePBLStore = create(
  persist(
    (set, get) => ({
      // Current PBL unit being edited
      currentUnit: { ...DEFAULT_PBL_UNIT },

      // Wizard state
      currentStep: 1,
      totalSteps: 5,

      // Selected milestone for detailed editing (Step 4)
      selectedMilestoneIndex: 0,

      // Actions - Navigation
      setCurrentStep: (step) => set({ currentStep: step }),

      nextStep: () => set((state) => ({
        currentStep: Math.min(state.currentStep + 1, state.totalSteps)
      })),

      prevStep: () => set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 1)
      })),

      setSelectedMilestone: (index) => set({ selectedMilestoneIndex: index }),

      // Actions - Basic Unit Info
      updateUnit: (updates) => set((state) => ({
        currentUnit: { ...state.currentUnit, ...updates }
      })),

      updateDuration: (updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          duration: { ...state.currentUnit.duration, ...updates }
        }
      })),

      // Actions - Destination (Step 1)
      updateDestination: (updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: { ...state.currentUnit.destination, ...updates }
        }
      })),

      updateFinalProject: (updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: {
            ...state.currentUnit.destination,
            finalProject: { ...state.currentUnit.destination.finalProject, ...updates }
          }
        }
      })),

      addEssentialQuestion: (question) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: {
            ...state.currentUnit.destination,
            essentialQuestions: [...state.currentUnit.destination.essentialQuestions, question]
          }
        }
      })),

      removeEssentialQuestion: (index) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: {
            ...state.currentUnit.destination,
            essentialQuestions: state.currentUnit.destination.essentialQuestions.filter((_, i) => i !== index)
          }
        }
      })),

      updateEssentialQuestion: (index, value) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: {
            ...state.currentUnit.destination,
            essentialQuestions: state.currentUnit.destination.essentialQuestions.map((q, i) =>
              i === index ? value : q
            )
          }
        }
      })),

      toggleCognitiveSkill: (skillId) => set((state) => {
        const currentSkills = state.currentUnit.destination.cognitiveSkills;
        const newSkills = currentSkills.includes(skillId)
          ? currentSkills.filter(s => s !== skillId)
          : [...currentSkills, skillId];
        return {
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              cognitiveSkills: newSkills
            }
          }
        };
      }),

      addStandard: (standard) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: {
            ...state.currentUnit.destination,
            standards: [...state.currentUnit.destination.standards, standard]
          }
        }
      })),

      removeStandard: (index) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          destination: {
            ...state.currentUnit.destination,
            standards: state.currentUnit.destination.standards.filter((_, i) => i !== index)
          }
        }
      })),

      // Actions - Launch (Step 2)
      updateLaunch: (updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: { ...state.currentUnit.launch, ...updates }
        }
      })),

      updateEntryEvent: (updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: {
            ...state.currentUnit.launch,
            entryEvent: { ...state.currentUnit.launch.entryEvent, ...updates }
          }
        }
      })),

      addKnow: (item) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: {
            ...state.currentUnit.launch,
            knowNeedToKnow: {
              ...state.currentUnit.launch.knowNeedToKnow,
              knows: [...state.currentUnit.launch.knowNeedToKnow.knows, {
                id: `know-${Date.now()}`,
                text: item
              }]
            }
          }
        }
      })),

      removeKnow: (id) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: {
            ...state.currentUnit.launch,
            knowNeedToKnow: {
              ...state.currentUnit.launch.knowNeedToKnow,
              knows: state.currentUnit.launch.knowNeedToKnow.knows.filter(k => k.id !== id)
            }
          }
        }
      })),

      addNeedToKnow: (item) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: {
            ...state.currentUnit.launch,
            knowNeedToKnow: {
              ...state.currentUnit.launch.knowNeedToKnow,
              needToKnows: [...state.currentUnit.launch.knowNeedToKnow.needToKnows, {
                id: `ntk-${Date.now()}`,
                text: item,
                status: 'open' // 'open', 'in_progress', 'resolved'
              }]
            }
          }
        }
      })),

      removeNeedToKnow: (id) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: {
            ...state.currentUnit.launch,
            knowNeedToKnow: {
              ...state.currentUnit.launch.knowNeedToKnow,
              needToKnows: state.currentUnit.launch.knowNeedToKnow.needToKnows.filter(n => n.id !== id)
            }
          }
        }
      })),

      updateNeedToKnowStatus: (id, status) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          launch: {
            ...state.currentUnit.launch,
            knowNeedToKnow: {
              ...state.currentUnit.launch.knowNeedToKnow,
              needToKnows: state.currentUnit.launch.knowNeedToKnow.needToKnows.map(n =>
                n.id === id ? { ...n, status } : n
              )
            }
          }
        }
      })),

      // Actions - Milestones (Step 3)
      updateMilestone: (index, updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === index ? { ...m, ...updates } : m
          )
        }
      })),

      updateMilestoneCheckpoint: (milestoneIndex, updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? { ...m, checkpoint: { ...m.checkpoint, ...updates } }
              : m
          )
        }
      })),

      addMilestoneActivity: (milestoneIndex, activity) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? { ...m, activities: [...m.activities, { id: `activity-${Date.now()}`, ...activity }] }
              : m
          )
        }
      })),

      updateMilestoneActivity: (milestoneIndex, activityId, updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? {
                  ...m,
                  activities: m.activities.map(a =>
                    a.id === activityId ? { ...a, ...updates } : a
                  )
                }
              : m
          )
        }
      })),

      removeMilestoneActivity: (milestoneIndex, activityId) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? { ...m, activities: m.activities.filter(a => a.id !== activityId) }
              : m
          )
        }
      })),

      addMilestoneObjective: (milestoneIndex, objective) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? { ...m, learningObjectives: [...m.learningObjectives, objective] }
              : m
          )
        }
      })),

      removeMilestoneObjective: (milestoneIndex, objIndex) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? { ...m, learningObjectives: m.learningObjectives.filter((_, j) => j !== objIndex) }
              : m
          )
        }
      })),

      // Actions - Mini-Lessons (Step 4)
      addMiniLesson: (milestoneIndex, lesson) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? {
                  ...m,
                  miniLessons: [...m.miniLessons, {
                    id: `mini-lesson-${Date.now()}`,
                    ...DEFAULT_MINI_LESSON,
                    ...lesson
                  }]
                }
              : m
          )
        }
      })),

      updateMiniLesson: (milestoneIndex, lessonId, updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? {
                  ...m,
                  miniLessons: m.miniLessons.map(l =>
                    l.id === lessonId ? { ...l, ...updates } : l
                  )
                }
              : m
          )
        }
      })),

      removeMiniLesson: (milestoneIndex, lessonId) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          milestones: state.currentUnit.milestones.map((m, i) =>
            i === milestoneIndex
              ? { ...m, miniLessons: m.miniLessons.filter(l => l.id !== lessonId) }
              : m
          )
        }
      })),

      // Actions - Reflections
      updateReflection: (reflectionId, updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          reflections: state.currentUnit.reflections.map(r =>
            r.id === reflectionId ? { ...r, ...updates } : r
          )
        }
      })),

      addReflectionPrompt: (reflectionId, prompt) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          reflections: state.currentUnit.reflections.map(r =>
            r.id === reflectionId
              ? { ...r, prompts: [...r.prompts, prompt] }
              : r
          )
        }
      })),

      removeReflectionPrompt: (reflectionId, promptIndex) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          reflections: state.currentUnit.reflections.map(r =>
            r.id === reflectionId
              ? { ...r, prompts: r.prompts.filter((_, i) => i !== promptIndex) }
              : r
          )
        }
      })),

      // Actions - Final Phase (Step 5)
      updateFinalPhase: (updates) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          finalPhase: { ...state.currentUnit.finalPhase, ...updates }
        }
      })),

      addPreparationActivity: (activity) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          finalPhase: {
            ...state.currentUnit.finalPhase,
            preparationActivities: [
              ...state.currentUnit.finalPhase.preparationActivities,
              { id: `prep-${Date.now()}`, ...activity }
            ]
          }
        }
      })),

      removePreparationActivity: (id) => set((state) => ({
        currentUnit: {
          ...state.currentUnit,
          finalPhase: {
            ...state.currentUnit.finalPhase,
            preparationActivities: state.currentUnit.finalPhase.preparationActivities.filter(a => a.id !== id)
          }
        }
      })),

      // Reset and Load
      resetUnit: () => set({
        currentUnit: { ...DEFAULT_PBL_UNIT },
        currentStep: 1,
        selectedMilestoneIndex: 0
      }),

      loadUnit: (unit) => set({
        currentUnit: { ...DEFAULT_PBL_UNIT, ...unit },
        currentStep: 1,
        selectedMilestoneIndex: 0
      }),

      // Validation helpers
      isStep1Complete: () => {
        const { destination } = get().currentUnit;
        return (
          destination.finalProject.title &&
          destination.finalProject.description &&
          destination.essentialQuestions.length > 0 &&
          destination.cognitiveSkills.length >= 2
        );
      },

      isStep2Complete: () => {
        const { launch } = get().currentUnit;
        return (
          launch.entryEvent.title &&
          launch.entryEvent.description
        );
      },

      isStep3Complete: () => {
        const { milestones } = get().currentUnit;
        return milestones.every(m =>
          m.title &&
          m.type &&
          m.checkpoint.assessmentType
        );
      },

      isStep4Complete: () => {
        const { milestones } = get().currentUnit;
        return milestones.some(m => m.miniLessons.length > 0 || m.activities.length > 0);
      },

      getStepCompletion: () => {
        const state = get();
        return {
          1: state.isStep1Complete(),
          2: state.isStep2Complete(),
          3: state.isStep3Complete(),
          4: state.isStep4Complete(),
          5: true, // Review is always accessible
        };
      },
    }),
    {
      name: 'pbl-builder-storage',
      partialize: (state) => ({
        currentUnit: state.currentUnit,
        currentStep: state.currentStep,
        selectedMilestoneIndex: state.selectedMilestoneIndex
      }),
    }
  )
);

export { DEFAULT_PBL_UNIT, DEFAULT_MILESTONE, DEFAULT_MINI_LESSON };
export default usePBLStore;
