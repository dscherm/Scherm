import { getSkillById } from '../../data/cognitiveSkills';
import {
  Target,
  Rocket,
  Mountain,
  CheckCircle,
  RefreshCw,
  Presentation,
  Flag,
} from 'lucide-react';

function JourneyTimeline({ unit }) {
  const { destination, launch, milestones, reflections, finalPhase, duration } = unit;

  // Build timeline items
  const timelineItems = [];

  // 1. Destination (shown at top, not as timeline item)
  // 2. Launch
  timelineItems.push({
    id: 'launch',
    type: 'launch',
    title: 'Project Launch',
    subtitle: launch.entryEvent.title || 'Entry Event',
    week: 1,
    icon: Rocket,
    color: '#a55eea',
    details: [
      'Entry Event',
      'Rubric Unpacking',
      'K/NTK Board',
    ],
  });

  // 3. Milestones with Checkpoints
  milestones.forEach((milestone, index) => {
    // Milestone
    timelineItems.push({
      id: milestone.id,
      type: 'milestone',
      title: milestone.title || `Milestone ${index + 1}`,
      subtitle: milestone.type?.replace('_', ' ') || 'Work Phase',
      week: milestone.weekRange.start,
      weekEnd: milestone.weekRange.end,
      icon: Mountain,
      color: '#ff6b6b',
      details: milestone.learningObjectives?.slice(0, 2) || [],
      miniLessons: milestone.miniLessons?.length || 0,
    });

    // Checkpoint
    if (milestone.checkpoint.assessmentType) {
      timelineItems.push({
        id: `${milestone.id}-checkpoint`,
        type: 'checkpoint',
        title: milestone.checkpoint.title || `Checkpoint ${index + 1}`,
        subtitle: milestone.checkpoint.assessmentType?.replace('_', ' '),
        week: milestone.weekRange.end,
        icon: CheckCircle,
        color: '#00d9ff',
        skills: milestone.checkpoint.cognitiveSkills || [],
      });
    }

    // Add mid-reflection after milestone 1
    if (index === 0 && reflections[0]) {
      timelineItems.push({
        id: reflections[0].id,
        type: 'reflection',
        title: reflections[0].title || 'Mid-Unit Reflection',
        subtitle: 'Student Reflection',
        week: reflections[0].weekNumber || 3,
        icon: RefreshCw,
        color: '#26de81',
      });
    }
  });

  // 4. Final Phase
  timelineItems.push({
    id: 'final',
    type: 'final',
    title: 'Final Presentations',
    subtitle: finalPhase.presentationFormat?.replace('_', ' ') || 'Public Product',
    week: duration.totalWeeks - 1,
    weekEnd: duration.totalWeeks,
    icon: Presentation,
    color: '#fd79a8',
    details: finalPhase.audienceDetails ? [finalPhase.audienceDetails] : [],
  });

  // Final reflection
  if (reflections[1]) {
    timelineItems.push({
      id: reflections[1].id,
      type: 'reflection',
      title: reflections[1].title || 'Final Reflection',
      subtitle: 'Celebrate & Debrief',
      week: duration.totalWeeks,
      icon: Flag,
      color: '#26de81',
    });
  }

  return (
    <div className="pbl-timeline">
      {/* Destination Header */}
      <div className="mb-8 p-4 bg-pbl-cyan/10 border border-pbl-cyan/30 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-pbl-cyan/20">
            <Target className="w-6 h-6 text-pbl-cyan" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">
              {destination.finalProject.title || 'Final Project'}
            </h3>
            <p className="text-sm text-text-muted">
              {destination.finalProject.audience && `For: ${destination.finalProject.audience}`}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      {timelineItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="pbl-timeline-item">
            {/* Dot */}
            <div
              className={`pbl-timeline-dot ${item.type}`}
              style={{ backgroundColor: item.color }}
            >
              <Icon className="w-3 h-3 text-dark-bg" />
            </div>

            {/* Content */}
            <div className="pbl-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-text-primary">{item.title}</h4>
                  <p className="text-sm text-text-muted capitalize">{item.subtitle}</p>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.weekEnd && item.weekEnd !== item.week
                    ? `W${item.week}-${item.weekEnd}`
                    : `Week ${item.week}`}
                </span>
              </div>

              {/* Details */}
              {item.details && item.details.length > 0 && (
                <ul className="text-sm text-text-secondary space-y-1 mb-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span style={{ color: item.color }}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {/* Mini-lessons count */}
              {item.miniLessons !== undefined && item.miniLessons > 0 && (
                <p className="text-xs text-text-muted">
                  {item.miniLessons} mini-lesson{item.miniLessons !== 1 ? 's' : ''} planned
                </p>
              )}

              {/* Skills for checkpoints */}
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.skills.map((skillId) => {
                    const skill = getSkillById(skillId);
                    return (
                      <span
                        key={skillId}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${skill?.color}20`,
                          color: skill?.color,
                        }}
                      >
                        {skill?.name || skillId}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default JourneyTimeline;
