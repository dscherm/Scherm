import { useState } from 'react';
import usePBLStore from '../../../hooks/usePBLStore';
import CognitiveSkillsPicker from '../CognitiveSkillsPicker';
import ResearchNote from '../../common/ResearchNote';
import { Target, HelpCircle, Plus, X, Users, Lightbulb } from 'lucide-react';

function Step1Destination() {
  const {
    currentUnit,
    updateUnit,
    updateFinalProject,
    updateDestination,
    addEssentialQuestion,
    removeEssentialQuestion,
    updateEssentialQuestion,
    addStandard,
    removeStandard,
  } = usePBLStore();

  const { destination } = currentUnit;
  const [newQuestion, setNewQuestion] = useState('');
  const [newStandard, setNewStandard] = useState('');

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      addEssentialQuestion(newQuestion.trim());
      setNewQuestion('');
    }
  };

  const handleAddStandard = () => {
    if (newStandard.trim()) {
      addStandard(newStandard.trim());
      setNewStandard('');
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Section */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pbl-cyan/20 mb-4">
          <Target className="w-8 h-8 text-pbl-cyan" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Start with the Destination
        </h2>
        <p className="text-text-secondary">
          In backwards design, we begin with the end in mind. Define your final project,
          essential questions, and the cognitive skills students will develop.
        </p>
      </div>

      <ResearchNote title="Why Backwards Design?">
        Research shows that starting with clear learning goals and working backwards
        leads to more focused instruction and better student outcomes. The final project
        becomes the "north star" that guides all milestone planning.
      </ResearchNote>

      {/* Basic Info */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Unit Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Unit Title</label>
            <input
              type="text"
              value={currentUnit.title}
              onChange={(e) => updateUnit({ title: e.target.value })}
              placeholder="e.g., Designing Sustainable Cities"
              className="input"
            />
          </div>
          <div>
            <label className="label">Subject Area</label>
            <input
              type="text"
              value={currentUnit.subject}
              onChange={(e) => updateUnit({ subject: e.target.value })}
              placeholder="e.g., Environmental Science"
              className="input"
            />
          </div>
          <div>
            <label className="label">Grade Level</label>
            <input
              type="text"
              value={currentUnit.gradeLevel}
              onChange={(e) => updateUnit({ gradeLevel: e.target.value })}
              placeholder="e.g., 9-10"
              className="input"
            />
          </div>
          <div>
            <label className="label">Duration (Weeks)</label>
            <input
              type="number"
              value={currentUnit.duration.totalWeeks}
              onChange={(e) => updateUnit({
                duration: {
                  ...currentUnit.duration,
                  totalWeeks: parseInt(e.target.value) || 7,
                  totalDays: (parseInt(e.target.value) || 7) * 5
                }
              })}
              min={4}
              max={12}
              className="input"
            />
          </div>
        </div>
      </div>

      {/* Final Project */}
      <div className="card pbl-card-destination">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-pbl-cyan/20">
            <Lightbulb className="w-5 h-5 text-pbl-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Final Project</h3>
            <p className="text-sm text-text-muted">
              What will students create? Who is the authentic audience?
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="label">Project Title</label>
            <input
              type="text"
              value={destination.finalProject.title}
              onChange={(e) => updateFinalProject({ title: e.target.value })}
              placeholder="e.g., Urban Sustainability Proposal"
              className="input"
            />
          </div>

          <div>
            <label className="label">Project Description</label>
            <textarea
              value={destination.finalProject.description}
              onChange={(e) => updateFinalProject({ description: e.target.value })}
              placeholder="Describe what students will create and the problem they're solving..."
              className="input min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label flex items-center gap-2">
                <Users className="w-4 h-4" />
                Public Product
              </label>
              <input
                type="text"
                value={destination.finalProject.publicProduct}
                onChange={(e) => updateFinalProject({ publicProduct: e.target.value })}
                placeholder="e.g., Presentation to city council"
                className="input"
              />
              <p className="text-xs text-text-muted mt-1">
                How will students share their work publicly?
              </p>
            </div>

            <div>
              <label className="label flex items-center gap-2">
                <Users className="w-4 h-4" />
                Authentic Audience
              </label>
              <input
                type="text"
                value={destination.finalProject.audience}
                onChange={(e) => updateFinalProject({ audience: e.target.value })}
                placeholder="e.g., Local urban planners, community members"
                className="input"
              />
              <p className="text-xs text-text-muted mt-1">
                Who outside the classroom will see this work?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Essential Questions */}
      <div className="card">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-lg bg-pbl-purple/20">
            <HelpCircle className="w-5 h-5 text-pbl-purple" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Essential Questions</h3>
            <p className="text-sm text-text-muted">
              Open-ended questions that drive inquiry throughout the unit
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          {destination.essentialQuestions.map((question, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg border border-dark-border"
            >
              <span className="text-pbl-purple font-medium">Q{index + 1}</span>
              <input
                type="text"
                value={question}
                onChange={(e) => updateEssentialQuestion(index, e.target.value)}
                className="flex-1 bg-transparent border-none focus:outline-none text-text-primary"
              />
              <button
                onClick={() => removeEssentialQuestion(index)}
                className="p-1 text-text-muted hover:text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddQuestion()}
            placeholder="Add an essential question..."
            className="input flex-1"
          />
          <button
            onClick={handleAddQuestion}
            disabled={!newQuestion.trim()}
            className="btn btn-secondary"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <ResearchNote title="Crafting Essential Questions">
          Good essential questions are open-ended, thought-provoking, and require students
          to draw on multiple sources. They should not have a single "right" answer.
          Examples: "How do communities balance growth with sustainability?"
        </ResearchNote>
      </div>

      {/* Cognitive Skills */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Cognitive Skills</h3>
        <p className="text-sm text-text-muted mb-4">
          Select 3-4 skills that will be assessed across all milestones. These form the "connective tissue" of your rubric.
        </p>
        <CognitiveSkillsPicker />
      </div>

      {/* Standards (Optional) */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Standards Alignment</h3>
        <p className="text-sm text-text-muted mb-4">
          Optionally link to specific content standards
        </p>

        <div className="space-y-2 mb-4">
          {destination.standards.map((standard, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 bg-dark-bg rounded border border-dark-border text-sm"
            >
              <span className="flex-1 text-text-secondary">{standard}</span>
              <button
                onClick={() => removeStandard(index)}
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
            value={newStandard}
            onChange={(e) => setNewStandard(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddStandard()}
            placeholder="e.g., NGSS HS-ESS3-4"
            className="input flex-1"
          />
          <button
            onClick={handleAddStandard}
            disabled={!newStandard.trim()}
            className="btn btn-secondary"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1Destination;
