import { useState } from 'react';
import usePBLStore from '../../../hooks/usePBLStore';
import KNTKBoard from '../KNTKBoard';
import ResearchNote from '../../common/ResearchNote';
import { Rocket, Video, Users, MapPin, FileText, Sparkles, Link } from 'lucide-react';

const ENTRY_EVENT_TYPES = [
  { id: 'guest_speaker', name: 'Guest Speaker', icon: Users, description: 'Expert shares real-world perspective' },
  { id: 'video', name: 'Video/Documentary', icon: Video, description: 'Compelling media to spark curiosity' },
  { id: 'simulation', name: 'Simulation', icon: Sparkles, description: 'Experience the problem firsthand' },
  { id: 'field_trip', name: 'Field Trip', icon: MapPin, description: 'Visit a relevant site or community' },
  { id: 'artifact', name: 'Artifact/Document', icon: FileText, description: 'Primary source or real object' },
];

function Step2Launch() {
  const {
    currentUnit,
    updateLaunch,
    updateEntryEvent,
  } = usePBLStore();

  const { launch } = currentUnit;

  return (
    <div className="space-y-8">
      {/* Intro Section */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pbl-purple/20 mb-4">
          <Rocket className="w-8 h-8 text-pbl-purple" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Launch the Project
        </h2>
        <p className="text-text-secondary">
          Week 1 sets the stage with an engaging entry event, rubric unpacking,
          and building the Know/Need-to-Know board that drives inquiry.
        </p>
      </div>

      <ResearchNote title="The Power of Entry Events">
        Research shows that emotional engagement is a prerequisite for deep learning.
        The entry event should create a "need to know" by presenting an authentic problem
        that students care about solving. The best entry events are memorable experiences,
        not just information delivery.
      </ResearchNote>

      {/* Entry Event */}
      <div className="card pbl-card-launch">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Entry Event</h3>

        <div className="space-y-4">
          <div>
            <label className="label">Event Title</label>
            <input
              type="text"
              value={launch.entryEvent.title}
              onChange={(e) => updateEntryEvent({ title: e.target.value })}
              placeholder="e.g., Visit from City Urban Planner"
              className="input"
            />
          </div>

          <div>
            <label className="label">Event Type</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {ENTRY_EVENT_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = launch.entryEvent.type === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => updateEntryEvent({ type: type.id })}
                    className={`
                      p-3 rounded-lg border text-left transition-all
                      ${isSelected
                        ? 'border-pbl-purple bg-pbl-purple/10'
                        : 'border-dark-border hover:border-pbl-purple/50'
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-pbl-purple' : 'text-text-muted'}`} />
                    <p className={`text-sm font-medium ${isSelected ? 'text-pbl-purple' : 'text-text-primary'}`}>
                      {type.name}
                    </p>
                    <p className="text-xs text-text-muted mt-1 hidden md:block">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="label">Event Description</label>
            <textarea
              value={launch.entryEvent.description}
              onChange={(e) => updateEntryEvent({ description: e.target.value })}
              placeholder="Describe what will happen during the entry event. What will students see, hear, or experience? How will you facilitate their initial reactions?"
              className="input min-h-[120px]"
            />
          </div>

          <div>
            <label className="label">Duration (class periods)</label>
            <input
              type="number"
              value={launch.entryEvent.duration}
              onChange={(e) => updateEntryEvent({ duration: parseInt(e.target.value) || 1 })}
              min={1}
              max={3}
              className="input w-32"
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-dark-bg rounded-lg border border-dark-border">
          <h4 className="text-sm font-medium text-text-primary mb-2">Entry Event Checklist</h4>
          <ul className="text-sm text-text-secondary space-y-1">
            <li className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-dark-border" readOnly />
              Creates emotional engagement (surprise, curiosity, empathy)
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-dark-border" readOnly />
              Presents an authentic problem or challenge
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-dark-border" readOnly />
              Allows time for student reactions and questions
            </li>
            <li className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-dark-border" readOnly />
              Connects to the final project/product
            </li>
          </ul>
        </div>
      </div>

      {/* Rubric Link */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Project Rubric</h3>
        <p className="text-sm text-text-muted mb-4">
          Link to your project rubric for rubric unpacking sessions
        </p>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="url"
              value={launch.rubricUrl}
              onChange={(e) => updateLaunch({ rubricUrl: e.target.value })}
              placeholder="https://docs.google.com/document/..."
              className="input pl-10"
            />
          </div>
        </div>

        <ResearchNote title="Rubric Unpacking Protocol">
          Take time in Week 1 to have students examine the rubric together.
          They should identify unclear terms, find or create exemplars for each level,
          and set personal goals. This builds ownership of success criteria.
        </ResearchNote>
      </div>

      {/* K/NTK Board */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-2">Know / Need-to-Know Board</h3>
        <p className="text-sm text-text-muted mb-4">
          Capture what students already know and what they need to discover.
          This drives the learning throughout the project.
        </p>

        <KNTKBoard />

        <ResearchNote title="Living Document">
          The K/NTK board should be visible and updated throughout the project.
          As students learn, move items from "Need to Know" to "Know" and
          celebrate when they answer their own questions through inquiry.
        </ResearchNote>
      </div>
    </div>
  );
}

export default Step2Launch;
