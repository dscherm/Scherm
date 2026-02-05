import usePBLStore from '../../hooks/usePBLStore';
import { getSkillById } from '../../data/cognitiveSkills';
import { Users, ClipboardCheck, MessageCircle, Image } from 'lucide-react';

const ASSESSMENT_TYPES = [
  {
    id: 'peer_critique',
    name: 'Peer Critique',
    icon: Users,
    description: 'Students give structured feedback to each other',
  },
  {
    id: 'self_assessment',
    name: 'Self-Assessment',
    icon: ClipboardCheck,
    description: 'Students evaluate their own work against the rubric',
  },
  {
    id: 'conference',
    name: 'Teacher Conference',
    icon: MessageCircle,
    description: 'One-on-one feedback conversation',
  },
  {
    id: 'gallery_walk',
    name: 'Gallery Walk',
    icon: Image,
    description: 'Public display with written feedback',
  },
];

function CheckpointEditor({ checkpoint, milestoneIndex }) {
  const { currentUnit, updateMilestoneCheckpoint } = usePBLStore();
  const unitSkills = currentUnit.destination.cognitiveSkills;

  const toggleSkill = (skillId) => {
    const currentSkills = checkpoint.cognitiveSkills || [];
    const newSkills = currentSkills.includes(skillId)
      ? currentSkills.filter(s => s !== skillId)
      : [...currentSkills, skillId];
    updateMilestoneCheckpoint(milestoneIndex, { cognitiveSkills: newSkills });
  };

  return (
    <div className="space-y-4">
      {/* Checkpoint Title */}
      <div>
        <label className="label">Checkpoint Title</label>
        <input
          type="text"
          value={checkpoint.title || ''}
          onChange={(e) => updateMilestoneCheckpoint(milestoneIndex, { title: e.target.value })}
          placeholder={`Checkpoint ${milestoneIndex + 1}`}
          className="input"
        />
      </div>

      {/* Assessment Type */}
      <div>
        <label className="label">Assessment Type</label>
        <div className="grid grid-cols-2 gap-2">
          {ASSESSMENT_TYPES.map((type) => {
            const Icon = type.icon;
            const isSelected = checkpoint.assessmentType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => updateMilestoneCheckpoint(milestoneIndex, { assessmentType: type.id })}
                className={`
                  p-3 rounded-lg border text-left transition-all flex items-start gap-3
                  ${isSelected
                    ? 'border-pbl-cyan bg-pbl-cyan/10'
                    : 'border-dark-border hover:border-pbl-cyan/50'
                  }
                `}
              >
                <Icon className={`w-5 h-5 mt-0.5 ${isSelected ? 'text-pbl-cyan' : 'text-text-muted'}`} />
                <div>
                  <p className={`text-sm font-medium ${isSelected ? 'text-pbl-cyan' : 'text-text-primary'}`}>
                    {type.name}
                  </p>
                  <p className="text-xs text-text-muted">{type.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cognitive Skills to Assess */}
      <div>
        <label className="label">Skills to Assess at This Checkpoint</label>
        <p className="text-xs text-text-muted mb-3">
          Select which cognitive skills from your rubric will be assessed here
        </p>
        <div className="flex flex-wrap gap-2">
          {unitSkills.map((skillId) => {
            const skill = getSkillById(skillId);
            const isSelected = checkpoint.cognitiveSkills?.includes(skillId);
            return (
              <button
                key={skillId}
                onClick={() => toggleSkill(skillId)}
                className={`
                  skill-pill
                  ${isSelected ? 'skill-pill-selected' : ''}
                `}
                style={{
                  backgroundColor: isSelected ? `${skill?.color}20` : 'transparent',
                  borderColor: skill?.color || '#6b7280',
                  color: isSelected ? skill?.color : '#b8b8d1',
                  '--tw-ring-color': skill?.color,
                }}
              >
                {skill?.name || skillId}
              </button>
            );
          })}
          {unitSkills.length === 0 && (
            <p className="text-text-muted text-sm">
              No cognitive skills selected. Add them in Step 1 (Destination).
            </p>
          )}
        </div>
      </div>

      {/* Assessment Tips based on type */}
      {checkpoint.assessmentType && (
        <div className="p-3 bg-dark-bg rounded-lg border border-dark-border">
          <h5 className="text-sm font-medium text-text-primary mb-2">
            Tips for {ASSESSMENT_TYPES.find(t => t.id === checkpoint.assessmentType)?.name}
          </h5>
          <AssessmentTips type={checkpoint.assessmentType} />
        </div>
      )}
    </div>
  );
}

function AssessmentTips({ type }) {
  const tips = {
    peer_critique: [
      'Use structured feedback protocols (warm/cool feedback)',
      'Provide sentence starters to scaffold quality feedback',
      'Have students identify one piece of feedback to act on',
    ],
    self_assessment: [
      'Have students gather evidence from their work first',
      'Use the same rubric criteria they\'ll be graded on',
      'Follow up with goal-setting for next milestone',
    ],
    conference: [
      'Keep conferences short (5-10 minutes)',
      'Have students complete self-assessment beforehand',
      'Document agreed-upon next steps',
    ],
    gallery_walk: [
      'Provide structured feedback forms',
      'Use two types of sticky notes (warm/cool)',
      'Allow time for students to read and process feedback',
    ],
  };

  return (
    <ul className="text-sm text-text-secondary space-y-1">
      {tips[type]?.map((tip, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-pbl-cyan">•</span>
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  );
}

export default CheckpointEditor;
