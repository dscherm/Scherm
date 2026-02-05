import { useState } from 'react';
import usePBLStore from '../../../hooks/usePBLStore';
import MilestoneEditor from '../MilestoneEditor';
import ResearchNote from '../../common/ResearchNote';
import { Mountain, ChevronRight, CheckCircle2 } from 'lucide-react';

function Step3Milestones() {
  const { currentUnit, selectedMilestoneIndex, setSelectedMilestone } = usePBLStore();
  const { milestones, duration } = currentUnit;
  const [expandedMilestone, setExpandedMilestone] = useState(0);

  const getMilestoneStatus = (milestone) => {
    const hasTitle = milestone.title?.trim();
    const hasType = milestone.type?.trim();
    const hasCheckpoint = milestone.checkpoint?.assessmentType;
    return hasTitle && hasType && hasCheckpoint ? 'complete' : hasTitle ? 'partial' : 'empty';
  };

  const getWeekLabel = (weekRange) => {
    if (weekRange.start === weekRange.end) {
      return `Week ${weekRange.start}`;
    }
    return `Weeks ${weekRange.start}-${weekRange.end}`;
  };

  return (
    <div className="space-y-8">
      {/* Intro Section */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pbl-orange/20 mb-4">
          <Mountain className="w-8 h-8 text-pbl-orange" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Plan Your Milestones
        </h2>
        <p className="text-text-secondary">
          Break the project into 3 milestones, each with a checkpoint that assesses
          the cognitive skills from your rubric. This creates multiple feedback loops.
        </p>
      </div>

      <ResearchNote title="The Power of Milestones">
        Milestones provide structure without being prescriptive. Each milestone should
        result in a tangible product that builds toward the final project. Checkpoints
        allow you to assess the same cognitive skills in different contexts, showing
        growth over time.
      </ResearchNote>

      {/* Timeline Overview */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Unit Timeline ({duration.totalWeeks} Weeks)</h3>
        <div className="relative">
          {/* Timeline bar */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: duration.totalWeeks }, (_, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full h-2 rounded-full ${
                    i === 0 ? 'bg-pbl-purple' :
                    i < 2 ? 'bg-pbl-orange' :
                    i === 2 ? 'bg-pbl-green' :
                    i < 5 ? 'bg-pbl-orange' :
                    i < 7 ? 'bg-pbl-orange' :
                    'bg-pbl-cyan'
                  }`}
                />
                <span className="text-xs text-text-muted mt-1">W{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Phase labels */}
          <div className="flex text-xs">
            <div className="w-[14%] text-center">
              <span className="badge badge-pbl-purple">Launch</span>
            </div>
            <div className="w-[29%] text-center">
              <span className="badge badge-pbl-orange">Milestone 1</span>
            </div>
            <div className="w-[14%] text-center">
              <span className="badge badge-pbl-green">Reflect</span>
            </div>
            <div className="w-[29%] text-center">
              <span className="badge badge-pbl-orange">Milestone 2-3</span>
            </div>
            <div className="w-[14%] text-center">
              <span className="badge badge-cyan">Final</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Cards */}
      <div className="space-y-4">
        {milestones.map((milestone, index) => {
          const status = getMilestoneStatus(milestone);
          const isExpanded = expandedMilestone === index;

          return (
            <div key={milestone.id} className="card pbl-card-milestone">
              {/* Milestone Header */}
              <button
                onClick={() => setExpandedMilestone(isExpanded ? -1 : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold
                    ${status === 'complete' ? 'bg-pbl-green text-dark-bg' :
                      status === 'partial' ? 'bg-pbl-orange/20 text-pbl-orange' :
                      'bg-dark-border text-text-muted'}
                  `}>
                    {status === 'complete' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {milestone.title || `Milestone ${index + 1}`}
                    </h4>
                    <p className="text-sm text-text-muted">
                      {getWeekLabel(milestone.weekRange)} • {milestone.type || 'No type selected'}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-text-muted transition-transform ${
                    isExpanded ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <MilestoneEditor
                    milestone={milestone}
                    index={index}
                    totalWeeks={duration.totalWeeks}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Cognitive Skills Reminder */}
      <div className="card bg-pbl-cyan/5 border-pbl-cyan/30">
        <h4 className="font-medium text-text-primary mb-2">Selected Cognitive Skills</h4>
        <p className="text-sm text-text-secondary mb-3">
          Each checkpoint should assess a subset of these skills:
        </p>
        <div className="flex flex-wrap gap-2">
          {currentUnit.destination.cognitiveSkills.map((skillId) => (
            <span
              key={skillId}
              className="px-3 py-1 rounded-full bg-pbl-cyan/20 text-pbl-cyan text-sm"
            >
              {skillId.replace('_', ' ')}
            </span>
          ))}
          {currentUnit.destination.cognitiveSkills.length === 0 && (
            <span className="text-text-muted text-sm">
              No skills selected yet. Go back to Step 1 to add cognitive skills.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step3Milestones;
