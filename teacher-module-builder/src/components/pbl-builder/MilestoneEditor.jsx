import { useState } from 'react';
import usePBLStore from '../../hooks/usePBLStore';
import CheckpointEditor from './CheckpointEditor';
import { Plus, X, Target, BookOpen } from 'lucide-react';

const MILESTONE_TYPES = [
  { id: 'research', name: 'Research & Investigation', description: 'Students gather and analyze information' },
  { id: 'design_challenge', name: 'Design Challenge', description: 'Students create prototypes or solutions' },
  { id: 'lab', name: 'Lab/Experiment', description: 'Hands-on investigation and data collection' },
  { id: 'discussion', name: 'Discussion/Debate', description: 'Structured discourse and argumentation' },
  { id: 'prototype', name: 'Prototype/Build', description: 'Create physical or digital artifacts' },
  { id: 'presentation', name: 'Presentation/Pitch', description: 'Share findings with an audience' },
];

function MilestoneEditor({ milestone, index, totalWeeks }) {
  const {
    updateMilestone,
    addMilestoneObjective,
    removeMilestoneObjective,
  } = usePBLStore();

  const [newObjective, setNewObjective] = useState('');

  const handleAddObjective = () => {
    if (newObjective.trim()) {
      addMilestoneObjective(index, newObjective.trim());
      setNewObjective('');
    }
  };

  // Calculate default week ranges based on milestone index
  const getDefaultWeekRange = (milestoneIndex) => {
    switch (milestoneIndex) {
      case 0: return { start: 1, end: 2 };
      case 1: return { start: 3, end: 4 };
      case 2: return { start: 5, end: 6 };
      default: return { start: 1, end: 2 };
    }
  };

  const weekRange = milestone.weekRange || getDefaultWeekRange(index);

  return (
    <div className="space-y-6">
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">Milestone Title</label>
          <input
            type="text"
            value={milestone.title}
            onChange={(e) => updateMilestone(index, { title: e.target.value })}
            placeholder={`e.g., Research Phase, Prototype Design...`}
            className="input"
          />
        </div>
        <div>
          <label className="label">Week Range</label>
          <div className="flex items-center gap-2">
            <select
              value={weekRange.start}
              onChange={(e) => updateMilestone(index, {
                weekRange: { ...weekRange, start: parseInt(e.target.value) }
              })}
              className="input"
            >
              {Array.from({ length: totalWeeks }, (_, i) => (
                <option key={i} value={i + 1}>Week {i + 1}</option>
              ))}
            </select>
            <span className="text-text-muted">to</span>
            <select
              value={weekRange.end}
              onChange={(e) => updateMilestone(index, {
                weekRange: { ...weekRange, end: parseInt(e.target.value) }
              })}
              className="input"
            >
              {Array.from({ length: totalWeeks }, (_, i) => (
                <option key={i} value={i + 1}>Week {i + 1}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Milestone Type */}
      <div>
        <label className="label">Milestone Type</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {MILESTONE_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => updateMilestone(index, { type: type.id })}
              className={`
                p-3 rounded-lg border text-left transition-all
                ${milestone.type === type.id
                  ? 'border-pbl-orange bg-pbl-orange/10'
                  : 'border-dark-border hover:border-pbl-orange/50'
                }
              `}
            >
              <p className={`text-sm font-medium ${milestone.type === type.id ? 'text-pbl-orange' : 'text-text-primary'}`}>
                {type.name}
              </p>
              <p className="text-xs text-text-muted mt-1">{type.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="label">Description</label>
        <textarea
          value={milestone.description}
          onChange={(e) => updateMilestone(index, { description: e.target.value })}
          placeholder="Describe what students will accomplish during this milestone..."
          className="input min-h-[100px]"
        />
      </div>

      {/* Learning Objectives */}
      <div>
        <label className="label flex items-center gap-2">
          <Target className="w-4 h-4" />
          Learning Objectives
        </label>
        <div className="space-y-2 mb-3">
          {milestone.learningObjectives?.map((obj, objIndex) => (
            <div
              key={objIndex}
              className="flex items-center gap-2 p-2 bg-dark-bg rounded border border-dark-border"
            >
              <span className="flex-1 text-sm text-text-secondary">{obj}</span>
              <button
                onClick={() => removeMilestoneObjective(index, objIndex)}
                className="p-1 text-text-muted hover:text-red-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newObjective}
            onChange={(e) => setNewObjective(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddObjective()}
            placeholder="Students will be able to..."
            className="input flex-1"
          />
          <button
            onClick={handleAddObjective}
            disabled={!newObjective.trim()}
            className="btn btn-secondary"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Checkpoint */}
      <div className="pt-6 border-t border-dark-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-lg bg-pbl-cyan/20">
            <BookOpen className="w-5 h-5 text-pbl-cyan" />
          </div>
          <div>
            <h4 className="font-semibold text-text-primary">Checkpoint Assessment</h4>
            <p className="text-sm text-text-muted">
              How will you assess student progress at the end of this milestone?
            </p>
          </div>
        </div>
        <CheckpointEditor
          checkpoint={milestone.checkpoint}
          milestoneIndex={index}
        />
      </div>
    </div>
  );
}

export default MilestoneEditor;
