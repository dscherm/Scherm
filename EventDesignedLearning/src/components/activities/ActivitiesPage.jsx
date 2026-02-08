import { useState, useMemo } from 'react';
import {
  Search,
  Lightbulb,
  Clock,
  MessageSquare,
  CheckSquare,
  Filter,
  ChevronDown,
  ChevronRight,
  Play,
  Rocket,
} from 'lucide-react';
import { ACTIVITY_TYPES } from '../../data/activityTemplates';
import {
  MINDS_ON_HOOKS,
  WORK_TIME_ACTIVITIES,
  SHARE_OUT_PROTOCOLS,
  EXIT_TICKETS,
  ALL_MINDS_ON,
  ALL_WORK_TIME,
  ALL_SHARE_OUT,
  ALL_EXIT_TICKETS,
  searchActivities,
} from '../../data/activitySuggestions';
import CodePlaygroundPreview from './CodePlaygroundPreview';
import ChallengeLabPreview from './ChallengeLabPreview';
import QuizPreview from './QuizPreview';

const ACTIVITY_ICON_MAP = {
  manipulative: '🎴',
  group_project: '👥',
  challenge_lab: '🧩',
  code_playground: '💻',
  simulation: '🎮',
  discussion_prompt: '💬',
  discussion_protocol: '🗣️',
  quiz: '❓',
  worksheet: '📄',
  prediction_poll: '📊',
};

const MODE_STYLES = {
  digital: 'bg-blue-500/20 text-blue-300',
  'non-digital': 'bg-green-500/20 text-green-300',
  project: 'bg-purple-500/20 text-purple-300',
};

const SUBCATEGORY_LABELS = {
  prediction_poll: 'Prediction & Curiosity',
  mystery_hook: 'Mystery & Hooks',
  discussion_protocol: 'Discussion Protocols',
  prior_knowledge: 'Prior Knowledge',
  maker_tinkering: 'Maker / Tinkering',
  inquiry_based: 'Inquiry-Based',
  coding_digital: 'Coding & Digital',
  collaborative: 'Collaborative Learning',
  reflection: 'Reflection',
  metacognition: 'Metacognition',
  application: 'Application',
  quick_check: 'Quick Check',
  whole_class: 'Whole Class',
  gallery_style: 'Gallery Style',
  team_presentations: 'Team Presentations',
};

const FILTER_TABS = [
  { id: 'all', label: 'All', icon: Filter },
  { id: 'minds_on', label: 'Minds On', icon: Lightbulb },
  { id: 'work_time', label: 'Work Time', icon: Clock },
  { id: 'share_out', label: 'Share Out', icon: MessageSquare },
  { id: 'exit_tickets', label: 'Exit Tickets', icon: CheckSquare },
];

const COLLECTION_MAP = {
  minds_on: MINDS_ON_HOOKS,
  work_time: WORK_TIME_ACTIVITIES,
  share_out: SHARE_OUT_PROTOCOLS,
  exit_tickets: EXIT_TICKETS,
};

const FLAT_MAP = {
  minds_on: ALL_MINDS_ON,
  work_time: ALL_WORK_TIME,
  share_out: ALL_SHARE_OUT,
  exit_tickets: ALL_EXIT_TICKETS,
};

function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCards, setExpandedCards] = useState({});
  const [previewActivity, setPreviewActivity] = useState(null);
  const [previewType, setPreviewType] = useState(null);

  const toggleCard = (activityId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [activityId]: !prev[activityId],
    }));
  };

  const launchPreview = (activity) => {
    const type = activity.type;
    if (type === 'code_playground') {
      setPreviewType('code');
      setPreviewActivity({ content: { starterCode: '// Write your code here\nfunction setup() {\n  createCanvas(400, 400);\n}\n\nfunction draw() {\n  background(220);\n  ellipse(mouseX, mouseY, 50, 50);\n}', language: 'p5js', instructions: activity.description, hints: [] }, config: { showSolution: true, autoRun: true } });
    } else if (type === 'challenge_lab') {
      setPreviewType('challenge');
      setPreviewActivity({ content: { prompt: activity.description + '\n\n' + (activity.prompt || ''), hints: ['Think about the problem step by step', 'Look at the structure carefully', 'Try a different approach'], answer: 'demo', explanation: 'This is a preview of the challenge lab experience.' }, config: { maxAttempts: 3, showExplanation: true } });
    } else if (type === 'quiz') {
      setPreviewType('quiz');
      setPreviewActivity({ content: { questions: [{ id: 'demo-1', type: 'multiple_choice', question: 'This is a sample quiz question. What do you think?', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 0, explanation: 'This is a demo quiz preview.' }] }, config: { showFeedback: true, allowRetry: true, passingScore: 70 } });
    } else if (type === 'simulation') {
      setPreviewType('code');
      setPreviewActivity({ content: { starterCode: '// Interactive Simulation\nlet particles = [];\n\nfunction setup() {\n  createCanvas(400, 400);\n  for (let i = 0; i < 50; i++) {\n    particles.push({\n      x: random(width),\n      y: random(height),\n      vx: random(-2, 2),\n      vy: random(-2, 2),\n      size: random(5, 15)\n    });\n  }\n}\n\nfunction draw() {\n  background(30, 30, 60);\n  for (let p of particles) {\n    p.x += p.vx;\n    p.y += p.vy;\n    if (p.x < 0 || p.x > width) p.vx *= -1;\n    if (p.y < 0 || p.y > height) p.vy *= -1;\n    fill(100, 200, 255, 150);\n    noStroke();\n    ellipse(p.x, p.y, p.size);\n  }\n}', language: 'p5js', instructions: activity.description, hints: [] }, config: { showSolution: false, autoRun: true } });
    }
  };

  const closePreview = () => {
    setPreviewActivity(null);
    setPreviewType(null);
  };

  // When searching, return flat results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const results = searchActivities(searchQuery);
    if (activeTab !== 'all') {
      const collectionIds = new Set((FLAT_MAP[activeTab] || []).map(a => a.id));
      return results.filter(a => collectionIds.has(a.id));
    }
    return results;
  }, [searchQuery, activeTab]);

  // Subcategory sections for the active tab
  const sections = useMemo(() => {
    if (searchResults) return null; // search mode - use flat list

    if (activeTab === 'all') {
      return [
        { title: 'Minds On / Engage Hooks', subcategories: MINDS_ON_HOOKS },
        { title: 'Work Time Activities', subcategories: WORK_TIME_ACTIVITIES },
        { title: 'Share Out Protocols', subcategories: SHARE_OUT_PROTOCOLS },
        { title: 'Exit Tickets', subcategories: EXIT_TICKETS },
      ];
    }

    const collection = COLLECTION_MAP[activeTab];
    if (!collection) return [];

    const tabTitle = FILTER_TABS.find(t => t.id === activeTab)?.label || activeTab;
    return [{ title: tabTitle, subcategories: collection }];
  }, [activeTab, searchResults]);

  const totalCount = searchResults
    ? searchResults.length
    : (sections || []).reduce((sum, s) => sum + Object.values(s.subcategories).flat().length, 0);

  const isLaunchable = (activity) => {
    return activity.launchable || ['code_playground', 'challenge_lab', 'quiz', 'simulation'].includes(activity.type);
  };

  const renderActivityCard = (activity, index) => {
    const icon = ACTIVITY_ICON_MAP[activity.type] || '📋';
    const cardKey = `${activity.id}-${index}`;
    const isExpanded = expandedCards[cardKey];
    const canLaunch = isLaunchable(activity);

    return (
      <div
        key={cardKey}
        className="bg-dark-surface/80 backdrop-blur-sm border border-dark-border rounded-xl overflow-hidden hover:border-accent-purple/50 transition-all duration-200 hover:shadow-lg hover:shadow-accent-purple/5"
      >
        {/* Card Header */}
        <div
          className="p-4 cursor-pointer"
          onClick={() => toggleCard(cardKey)}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">{icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-text-primary">{activity.name}</h3>
                <div className="flex items-center gap-1">
                  {canLaunch && (
                    <span className="text-xs px-1.5 py-0.5 bg-green-500/20 text-green-300 rounded flex items-center gap-1 animate-pulse-subtle">
                      <Rocket className="w-3 h-3" /> Launch
                    </span>
                  )}
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0" />
                  )}
                </div>
              </div>
              <p className="text-sm text-text-muted mt-1 line-clamp-2">{activity.description}</p>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {activity.source && (
                  <span className="inline-block text-xs px-2 py-0.5 bg-accent-purple/20 text-accent-purple rounded">
                    {activity.source}
                  </span>
                )}
              </div>

              {activity.materials && activity.materials.length > 0 && (
                <div className="flex gap-1.5 mt-2 flex-wrap">
                  {activity.materials.map((material, mi) => (
                    <span
                      key={mi}
                      className="text-xs px-2 py-0.5 bg-dark-bg text-text-muted rounded border border-dark-border"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <div className="px-4 pb-4 border-t border-dark-border">
            <div className="pt-3 space-y-3 text-sm">
              {activity.prompt && (
                <div>
                  <span className="font-medium text-text-secondary">Prompt:</span>
                  <p className="text-text-muted mt-1 italic">"{activity.prompt}"</p>
                </div>
              )}

              {activity.structure && Array.isArray(activity.structure) && (
                <div>
                  <span className="font-medium text-text-secondary">Steps:</span>
                  <ol className="list-decimal list-inside mt-1 space-y-1 text-text-muted">
                    {activity.structure.map((step, si) => (
                      <li key={si}>
                        {typeof step === 'string'
                          ? step
                          : `${step.name || ''}${step.duration ? ` (${step.duration} min)` : ''}${step.description ? ` - ${step.description}` : ''}`}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {activity.learningObjectives && activity.learningObjectives.length > 0 && (
                <div>
                  <span className="font-medium text-text-secondary">Learning Objectives:</span>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {activity.learningObjectives.map((obj, oi) => (
                      <span key={oi} className="text-xs px-2 py-1 bg-accent-purple/20 text-accent-purple rounded">
                        {obj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activity.examples && (
                <div>
                  <span className="font-medium text-text-secondary">Examples:</span>
                  <ul className="list-disc list-inside mt-1 space-y-1 text-text-muted">
                    {activity.examples.map((ex, ei) => <li key={ei}>{ex}</li>)}
                  </ul>
                </div>
              )}

              {/* Launch button */}
              {canLaunch && (
                <button
                  onClick={(e) => { e.stopPropagation(); launchPreview(activity); }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-colors mt-2"
                >
                  <Play className="w-4 h-4" /> Launch Virtual Preview
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Activity Library</h1>
        <p className="text-text-secondary">
          Browse {totalCount} curated activities for your lessons. Activities marked with <Rocket className="w-3.5 h-3.5 inline text-green-400" /> can be launched virtually.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search activities by name, description, or source..."
            className="input pl-10 w-full"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTER_TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-accent-purple text-white'
                  : 'bg-dark-surface text-text-secondary hover:text-text-primary hover:bg-dark-hover border border-dark-border'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-text-muted">
          {totalCount} activit{totalCount === 1 ? 'y' : 'ies'} found
          {searchQuery.trim() && (
            <span> for "<span className="text-accent-purple">{searchQuery}</span>"</span>
          )}
        </p>
      </div>

      {/* Content */}
      {searchResults ? (
        /* Flat search results */
        searchResults.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted text-lg">No activities match your search.</p>
            <p className="text-text-muted text-sm mt-2">Try a different search term or filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-fade-in">
            {searchResults.map((activity, index) => renderActivityCard(activity, index))}
          </div>
        )
      ) : (
        /* Subcategorized sections */
        <div className="space-y-10">
          {(sections || []).map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b border-dark-border relative">
                <span className="text-gradient">{section.title}</span>
                <div className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-accent-purple to-accent-blue" />
              </h2>
              <div className="space-y-6">
                {Object.entries(section.subcategories).map(([subKey, activities]) => (
                  <div key={subKey}>
                    <h3 className="text-sm font-semibold text-accent-purple uppercase tracking-wider mb-3">
                      {SUBCATEGORY_LABELS[subKey] || subKey.replace(/_/g, ' ')}
                      <span className="text-text-muted font-normal ml-2">({activities.length})</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-fade-in">
                      {activities.map((activity, index) => renderActivityCard(activity, index))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Preview Modals */}
      {previewActivity && previewType === 'code' && (
        <CodePlaygroundPreview activity={previewActivity} onClose={closePreview} />
      )}
      {previewActivity && previewType === 'challenge' && (
        <ChallengeLabPreview activity={previewActivity} onClose={closePreview} />
      )}
      {previewActivity && previewType === 'quiz' && (
        <QuizPreview activity={previewActivity} onClose={closePreview} />
      )}
    </div>
  );
}

export default ActivitiesPage;
