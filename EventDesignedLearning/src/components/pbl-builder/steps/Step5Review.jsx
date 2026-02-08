import usePBLStore from '../../../hooks/usePBLStore';
import JourneyTimeline from '../JourneyTimeline';
import ResearchNote from '../../common/ResearchNote';
import { getSkillById } from '../../../data/cognitiveSkills';
import {
  CheckCircle2,
  AlertCircle,
  Target,
  Rocket,
  Mountain,
  Calendar,
  Presentation,
  Users,
  BookOpen,
} from 'lucide-react';

function Step5Review() {
  const { currentUnit, isStep1Complete, isStep2Complete, isStep3Complete, isStep4Complete } = usePBLStore();
  const { destination, launch, milestones, finalPhase } = currentUnit;

  const completionStatus = {
    destination: isStep1Complete(),
    launch: isStep2Complete(),
    milestones: isStep3Complete(),
    planning: isStep4Complete(),
  };

  const overallComplete =
    completionStatus.destination &&
    completionStatus.launch &&
    completionStatus.milestones;

  const StatusIcon = ({ complete }) =>
    complete ? (
      <CheckCircle2 className="w-5 h-5 text-pbl-green" />
    ) : (
      <AlertCircle className="w-5 h-5 text-pbl-orange" />
    );

  return (
    <div className="space-y-8">
      {/* Intro Section */}
      <div className="text-center max-w-2xl mx-auto">
        <div
          className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            overallComplete ? 'bg-pbl-green/20' : 'bg-pbl-orange/20'
          }`}
        >
          {overallComplete ? (
            <CheckCircle2 className="w-8 h-8 text-pbl-green" />
          ) : (
            <AlertCircle className="w-8 h-8 text-pbl-orange" />
          )}
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          {overallComplete ? 'Ready to Publish!' : 'Review Your PBL Unit'}
        </h2>
        <p className="text-text-secondary">
          {overallComplete
            ? 'Your unit is complete. Review the journey timeline below and publish when ready.'
            : 'Review your unit and complete any missing sections before publishing.'}
        </p>
      </div>

      {/* Completion Checklist */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Completion Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg">
            <StatusIcon complete={completionStatus.destination} />
            <div>
              <p className="font-medium text-text-primary">Destination</p>
              <p className="text-xs text-text-muted">Final project & skills</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg">
            <StatusIcon complete={completionStatus.launch} />
            <div>
              <p className="font-medium text-text-primary">Launch</p>
              <p className="text-xs text-text-muted">Entry event & K/NTK</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg">
            <StatusIcon complete={completionStatus.milestones} />
            <div>
              <p className="font-medium text-text-primary">Milestones</p>
              <p className="text-xs text-text-muted">3 checkpoints</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg">
            <StatusIcon complete={completionStatus.planning} />
            <div>
              <p className="font-medium text-text-primary">Daily Planning</p>
              <p className="text-xs text-text-muted">Mini-lessons</p>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Project Overview */}
        <div className="space-y-4">
          <div className="card pbl-card-destination">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-pbl-cyan" />
              <h3 className="font-semibold text-text-primary">Final Project</h3>
            </div>
            <h4 className="text-lg text-text-primary mb-2">
              {destination.finalProject.title || 'Untitled Project'}
            </h4>
            <p className="text-sm text-text-secondary mb-4">
              {destination.finalProject.description || 'No description provided'}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-text-muted">Public Product</p>
                <p className="text-text-primary">
                  {destination.finalProject.publicProduct || '—'}
                </p>
              </div>
              <div>
                <p className="text-text-muted">Audience</p>
                <p className="text-text-primary">
                  {destination.finalProject.audience || '—'}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-pbl-purple" />
              <h3 className="font-semibold text-text-primary">Essential Questions</h3>
            </div>
            <ul className="space-y-2">
              {destination.essentialQuestions.map((q, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-pbl-purple font-medium">Q{i + 1}.</span>
                  <span className="text-text-secondary">{q}</span>
                </li>
              ))}
              {destination.essentialQuestions.length === 0 && (
                <li className="text-text-muted text-sm">No essential questions defined</li>
              )}
            </ul>
          </div>

          <div className="card">
            <h3 className="font-semibold text-text-primary mb-3">Cognitive Skills</h3>
            <div className="flex flex-wrap gap-2">
              {destination.cognitiveSkills.map((skillId) => {
                const skill = getSkillById(skillId);
                return (
                  <span
                    key={skillId}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: `${skill?.color}20`,
                      color: skill?.color,
                    }}
                  >
                    {skill?.name || skillId}
                  </span>
                );
              })}
              {destination.cognitiveSkills.length === 0 && (
                <span className="text-text-muted text-sm">No skills selected</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Launch & Stats */}
        <div className="space-y-4">
          <div className="card pbl-card-launch">
            <div className="flex items-center gap-2 mb-3">
              <Rocket className="w-5 h-5 text-pbl-purple" />
              <h3 className="font-semibold text-text-primary">Entry Event</h3>
            </div>
            <h4 className="text-text-primary mb-2">
              {launch.entryEvent.title || 'Untitled Event'}
            </h4>
            <p className="text-sm text-text-secondary mb-3">
              {launch.entryEvent.description || 'No description provided'}
            </p>
            <div className="flex gap-4 text-sm">
              <span className="text-text-muted">
                Type: <span className="text-text-primary capitalize">{launch.entryEvent.type?.replace('_', ' ') || '—'}</span>
              </span>
              <span className="text-text-muted">
                Duration: <span className="text-text-primary">{launch.entryEvent.duration} period(s)</span>
              </span>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <Mountain className="w-5 h-5 text-pbl-orange" />
              <h3 className="font-semibold text-text-primary">Milestones Overview</h3>
            </div>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div key={m.id} className="flex items-center gap-3 p-2 bg-dark-bg rounded">
                  <div className="w-8 h-8 rounded-full bg-pbl-orange/20 text-pbl-orange flex items-center justify-center font-medium text-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-primary">
                      {m.title || `Milestone ${i + 1}`}
                    </p>
                    <p className="text-xs text-text-muted">
                      Weeks {m.weekRange.start}-{m.weekRange.end} •
                      {m.miniLessons?.length || 0} mini-lessons
                    </p>
                  </div>
                  <span className="text-xs text-text-muted capitalize">
                    {m.checkpoint.assessmentType?.replace('_', ' ') || 'No checkpoint'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-text-primary mb-3">Unit Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-dark-bg rounded text-center">
                <p className="text-2xl font-bold text-pbl-cyan">{currentUnit.duration.totalWeeks}</p>
                <p className="text-xs text-text-muted">Weeks</p>
              </div>
              <div className="p-3 bg-dark-bg rounded text-center">
                <p className="text-2xl font-bold text-pbl-orange">{milestones.length}</p>
                <p className="text-xs text-text-muted">Milestones</p>
              </div>
              <div className="p-3 bg-dark-bg rounded text-center">
                <p className="text-2xl font-bold text-pbl-yellow">
                  {milestones.reduce((acc, m) => acc + (m.miniLessons?.length || 0), 0)}
                </p>
                <p className="text-xs text-text-muted">Mini-Lessons</p>
              </div>
              <div className="p-3 bg-dark-bg rounded text-center">
                <p className="text-2xl font-bold text-pbl-green">
                  {destination.cognitiveSkills.length}
                </p>
                <p className="text-xs text-text-muted">Skills Assessed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Project Journey Timeline</h3>
        <JourneyTimeline unit={currentUnit} />
      </div>

      <ResearchNote title="Before You Publish">
        Consider sharing this unit with a colleague for feedback. Check that your
        checkpoints align with your cognitive skills, and that mini-lessons address
        likely "need-to-knows." Remember, PBL units evolve—you can always refine
        based on student needs during implementation.
      </ResearchNote>
    </div>
  );
}

export default Step5Review;
