import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const createMilestone = (index) => ({
  id: `milestone-${index}-${Date.now()}`,
  title: '',
  type: '',
  description: '',
  weekRange: { start: index * 2 + 1, end: index * 2 + 2 },
  learningObjectives: [],
  checkpoint: {
    title: '',
    assessmentType: null,
    cognitiveSkills: [],
  },
  miniLessons: [],
});

const DEFAULT_PBL_UNIT = {
  title: '',
  subject: '',
  gradeLevel: '',
  duration: { totalWeeks: 7, totalDays: 35 },
  destination: {
    finalProject: {
      title: '',
      description: '',
      publicProduct: '',
      audience: '',
    },
    essentialQuestions: [],
    cognitiveSkills: [],
    standards: [],
  },
  launch: {
    entryEvent: {
      title: '',
      type: null,
      description: '',
      duration: 1,
    },
    rubricUrl: '',
    knowNeedToKnow: {
      knows: [],
      needToKnows: [],
    },
  },
  milestones: [createMilestone(0), createMilestone(1), createMilestone(2)],
  reflections: [
    { id: 'reflection-mid', title: 'Mid-Unit Reflection', weekNumber: 3 },
    { id: 'reflection-final', title: 'Final Reflection', weekNumber: 7 },
  ],
  finalPhase: {
    presentationFormat: '',
    audienceDetails: '',
  },
};

const usePBLStore = create(
  persist(
    (set, get) => ({
      currentStep: 1,
      totalSteps: 5,
      currentUnit: JSON.parse(JSON.stringify(DEFAULT_PBL_UNIT)),
      selectedMilestoneIndex: 0,

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, state.totalSteps),
        })),

      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      setSelectedMilestone: (index) =>
        set({ selectedMilestoneIndex: index }),

      updateUnit: (updates) =>
        set((state) => ({
          currentUnit: { ...state.currentUnit, ...updates },
        })),

      updateDestination: (updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: { ...state.currentUnit.destination, ...updates },
          },
        })),

      updateFinalProject: (updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              finalProject: {
                ...state.currentUnit.destination.finalProject,
                ...updates,
              },
            },
          },
        })),

      addEssentialQuestion: (question) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              essentialQuestions: [
                ...state.currentUnit.destination.essentialQuestions,
                question,
              ],
            },
          },
        })),

      removeEssentialQuestion: (index) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              essentialQuestions:
                state.currentUnit.destination.essentialQuestions.filter(
                  (_, i) => i !== index
                ),
            },
          },
        })),

      updateEssentialQuestion: (index, value) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              essentialQuestions:
                state.currentUnit.destination.essentialQuestions.map((q, i) =>
                  i === index ? value : q
                ),
            },
          },
        })),

      addStandard: (standard) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              standards: [
                ...state.currentUnit.destination.standards,
                standard,
              ],
            },
          },
        })),

      removeStandard: (index) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            destination: {
              ...state.currentUnit.destination,
              standards: state.currentUnit.destination.standards.filter(
                (_, i) => i !== index
              ),
            },
          },
        })),

      toggleCognitiveSkill: (skillId) =>
        set((state) => {
          const current = state.currentUnit.destination.cognitiveSkills;
          const updated = current.includes(skillId)
            ? current.filter((s) => s !== skillId)
            : [...current, skillId];
          return {
            currentUnit: {
              ...state.currentUnit,
              destination: {
                ...state.currentUnit.destination,
                cognitiveSkills: updated,
              },
            },
          };
        }),

      updateLaunch: (updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: { ...state.currentUnit.launch, ...updates },
          },
        })),

      updateEntryEvent: (updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: {
              ...state.currentUnit.launch,
              entryEvent: {
                ...state.currentUnit.launch.entryEvent,
                ...updates,
              },
            },
          },
        })),

      addKnow: (text) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: {
              ...state.currentUnit.launch,
              knowNeedToKnow: {
                ...state.currentUnit.launch.knowNeedToKnow,
                knows: [
                  ...state.currentUnit.launch.knowNeedToKnow.knows,
                  { id: `know-${Date.now()}`, text },
                ],
              },
            },
          },
        })),

      removeKnow: (id) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: {
              ...state.currentUnit.launch,
              knowNeedToKnow: {
                ...state.currentUnit.launch.knowNeedToKnow,
                knows: state.currentUnit.launch.knowNeedToKnow.knows.filter(
                  (k) => k.id !== id
                ),
              },
            },
          },
        })),

      addNeedToKnow: (text) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: {
              ...state.currentUnit.launch,
              knowNeedToKnow: {
                ...state.currentUnit.launch.knowNeedToKnow,
                needToKnows: [
                  ...state.currentUnit.launch.knowNeedToKnow.needToKnows,
                  { id: `ntk-${Date.now()}`, text, status: 'open' },
                ],
              },
            },
          },
        })),

      removeNeedToKnow: (id) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: {
              ...state.currentUnit.launch,
              knowNeedToKnow: {
                ...state.currentUnit.launch.knowNeedToKnow,
                needToKnows:
                  state.currentUnit.launch.knowNeedToKnow.needToKnows.filter(
                    (n) => n.id !== id
                  ),
              },
            },
          },
        })),

      updateNeedToKnowStatus: (id, status) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            launch: {
              ...state.currentUnit.launch,
              knowNeedToKnow: {
                ...state.currentUnit.launch.knowNeedToKnow,
                needToKnows:
                  state.currentUnit.launch.knowNeedToKnow.needToKnows.map((n) =>
                    n.id === id ? { ...n, status } : n
                  ),
              },
            },
          },
        })),

      updateMilestone: (index, updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === index ? { ...m, ...updates } : m
            ),
          },
        })),

      addMilestoneObjective: (milestoneIndex, objective) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    learningObjectives: [
                      ...m.learningObjectives,
                      objective,
                    ],
                  }
                : m
            ),
          },
        })),

      removeMilestoneObjective: (milestoneIndex, objIndex) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    learningObjectives: m.learningObjectives.filter(
                      (_, j) => j !== objIndex
                    ),
                  }
                : m
            ),
          },
        })),

      updateMilestoneCheckpoint: (milestoneIndex, updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? { ...m, checkpoint: { ...m.checkpoint, ...updates } }
                : m
            ),
          },
        })),

      addMiniLesson: (milestoneIndex, lesson) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    miniLessons: [
                      ...(m.miniLessons || []),
                      { id: `ml-${Date.now()}`, ...lesson },
                    ],
                  }
                : m
            ),
          },
        })),

      updateMiniLesson: (milestoneIndex, lessonId, updates) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    miniLessons: (m.miniLessons || []).map((l) =>
                      l.id === lessonId ? { ...l, ...updates } : l
                    ),
                  }
                : m
            ),
          },
        })),

      removeMiniLesson: (milestoneIndex, lessonId) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    miniLessons: (m.miniLessons || []).filter(
                      (l) => l.id !== lessonId
                    ),
                  }
                : m
            ),
          },
        })),

      addMilestoneActivity: (milestoneIndex, activity) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    activities: [
                      ...(m.activities || []),
                      { id: `act-${Date.now()}`, ...activity },
                    ],
                  }
                : m
            ),
          },
        })),

      removeMilestoneActivity: (milestoneIndex, activityId) =>
        set((state) => ({
          currentUnit: {
            ...state.currentUnit,
            milestones: state.currentUnit.milestones.map((m, i) =>
              i === milestoneIndex
                ? {
                    ...m,
                    activities: (m.activities || []).filter(
                      (a) => a.id !== activityId
                    ),
                  }
                : m
            ),
          },
        })),

      isStep1Complete: () => {
        const { destination, title } = get().currentUnit;
        return (
          title.trim() !== '' &&
          destination.finalProject.title.trim() !== '' &&
          destination.essentialQuestions.length > 0 &&
          destination.cognitiveSkills.length >= 2
        );
      },

      isStep2Complete: () => {
        const { launch } = get().currentUnit;
        return (
          launch.entryEvent.title.trim() !== '' &&
          launch.entryEvent.type !== null
        );
      },

      isStep3Complete: () => {
        const { milestones } = get().currentUnit;
        return milestones.every(
          (m) =>
            m.title.trim() !== '' &&
            m.type.trim() !== '' &&
            m.checkpoint.assessmentType !== null
        );
      },

      isStep4Complete: () => {
        const { milestones } = get().currentUnit;
        return milestones.some(
          (m) => m.miniLessons && m.miniLessons.length > 0
        );
      },

      resetUnit: () =>
        set({
          currentUnit: JSON.parse(JSON.stringify(DEFAULT_PBL_UNIT)),
          currentStep: 1,
          selectedMilestoneIndex: 0,
        }),

      loadUnit: (unit) =>
        set({
          currentUnit: unit,
          currentStep: 1,
          selectedMilestoneIndex: 0,
        }),
    }),
    {
      name: 'pbl-builder-storage',
      partialize: (state) => ({
        currentUnit: state.currentUnit,
        currentStep: state.currentStep,
        selectedMilestoneIndex: state.selectedMilestoneIndex,
      }),
    }
  )
);

export default usePBLStore;
