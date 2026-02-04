import { useCallback } from 'react';
import { X, Search, Cpu, CircuitBoard, Wrench, ExternalLink, Zap, Filter, Volume2, Music, Disc } from 'lucide-react';
import { useSynthStore, useCircuitStore } from '../store';
import type { SynthModule, SynthProject, SynthCategory, SkillLevel } from '../types';

const CATEGORIES: { value: SynthCategory; label: string; icon: React.ReactNode }[] = [
  { value: 'oscillator', label: 'Oscillator', icon: <Zap size={12} /> },
  { value: 'filter', label: 'Filter', icon: <Filter size={12} /> },
  { value: 'amplifier', label: 'VCA', icon: <Volume2 size={12} /> },
  { value: 'modulation', label: 'Modulation', icon: <Music size={12} /> },
  { value: 'effect', label: 'Effects', icon: <Disc size={12} /> },
  { value: 'complete', label: 'Complete', icon: <CircuitBoard size={12} /> },
  { value: 'drum', label: 'Drums', icon: <Disc size={12} /> },
];

const SKILL_LEVELS: { value: SkillLevel; label: string; color: string }[] = [
  { value: 'beginner', label: 'Beginner', color: 'bg-green-500' },
  { value: 'intermediate', label: 'Intermediate', color: 'bg-yellow-500' },
  { value: 'advanced', label: 'Advanced', color: 'bg-red-500' },
];

export function SynthBrowser() {
  const {
    isOpen,
    closeBrowser,
    activeTab,
    setActiveTab,
    filters,
    setSearchFilter,
    toggleCategoryFilter,
    toggleSkillFilter,
    clearFilters,
    filteredModules,
    filteredProjects,
    selectedModuleId,
    selectModule,
    selectedProjectId,
    selectProject,
    selectedModule,
    selectedProject,
  } = useSynthStore();

  const { loadCircuit, clearCircuit } = useCircuitStore();

  const modules = filteredModules();
  const projects = filteredProjects();
  const module = selectedModule();
  const project = selectedProject();

  const handleLoadModule = useCallback(() => {
    if (!module) return;
    clearCircuit();
    loadCircuit(
      module.baseCircuit.components.map(c => ({ ...c, selected: false })),
      module.baseCircuit.wires.map(w => ({ ...w, selected: false }))
    );
    closeBrowser();
  }, [module, clearCircuit, loadCircuit, closeBrowser]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeBrowser}
      />

      {/* Modal */}
      <div className="relative ml-auto w-[850px] h-full bg-[#0a0a12] border-l border-[#2a2a3a] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#2a2a3a]">
          <div className="flex items-center gap-3">
            <Cpu className="text-[#f39c12]" size={24} />
            <div>
              <h2 className="text-lg font-semibold text-white">DIY Synth Library</h2>
              <p className="text-xs text-gray-500">Browse modules and complete synth projects</p>
            </div>
          </div>
          <button
            onClick={closeBrowser}
            className="p-2 rounded-lg hover:bg-[#1a1a2e] transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#2a2a3a]">
          <button
            onClick={() => setActiveTab('arduino')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'arduino'
                ? 'text-[#4ecca3] border-b-2 border-[#4ecca3] bg-[#1a1a2e]'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a2e]'
            }`}
          >
            <Wrench size={16} />
            Arduino / DIY Modules
          </button>
          <button
            onClick={() => setActiveTab('pcb')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'pcb'
                ? 'text-[#f39c12] border-b-2 border-[#f39c12] bg-[#1a1a2e]'
                : 'text-gray-400 hover:text-white hover:bg-[#1a1a2e]'
            }`}
          >
            <CircuitBoard size={16} />
            PCB Synth Projects
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left side - Search and list */}
          <div className="w-[340px] border-r border-[#2a2a3a] flex flex-col">
            {/* Search */}
            <div className="p-3 border-b border-[#2a2a3a]">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder={activeTab === 'arduino' ? 'Search modules...' : 'Search synths...'}
                  value={filters.search}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-[#1a1a2e] border border-[#2a2a3a] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#4ecca3]"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="p-3 border-b border-[#2a2a3a] space-y-2">
              {/* Categories */}
              <div className="flex flex-wrap gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => toggleCategoryFilter(cat.value)}
                    className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
                      filters.categories.includes(cat.value)
                        ? 'bg-[#4ecca3] text-black'
                        : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Skill levels */}
              <div className="flex gap-1">
                {SKILL_LEVELS.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => toggleSkillFilter(level.value)}
                    className={`flex items-center gap-1.5 px-2 py-1 text-xs rounded transition-colors ${
                      filters.skillLevels.includes(level.value)
                        ? 'bg-[#4ecca3] text-black'
                        : 'bg-[#1a1a2e] text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${level.color}`} />
                    {level.label}
                  </button>
                ))}
                {(filters.categories.length > 0 || filters.skillLevels.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="px-2 py-1 text-xs text-gray-500 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              {activeTab === 'arduino' ? (
                modules.length > 0 ? (
                  modules.map((mod) => (
                    <ModuleCard
                      key={mod.id}
                      module={mod}
                      isSelected={selectedModuleId === mod.id}
                      onClick={() => selectModule(mod.id)}
                    />
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-sm">No modules found</p>
                  </div>
                )
              ) : (
                projects.length > 0 ? (
                  projects.map((proj) => (
                    <ProjectCard
                      key={proj.id}
                      project={proj}
                      isSelected={selectedProjectId === proj.id}
                      onClick={() => selectProject(proj.id)}
                    />
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <p className="text-sm">No projects found</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right side - Details */}
          <div className="flex-1 flex flex-col">
            {activeTab === 'arduino' && module ? (
              <ModuleDetails module={module} onLoad={handleLoadModule} />
            ) : activeTab === 'pcb' && project ? (
              <ProjectDetails project={project} />
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Cpu size={48} className="mx-auto mb-4 opacity-30" />
                  <p className="text-sm">
                    {activeTab === 'arduino'
                      ? 'Select a module to see details'
                      : 'Select a project to see details'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModuleCard({
  module,
  isSelected,
  onClick,
}: {
  module: SynthModule;
  isSelected: boolean;
  onClick: () => void;
}) {
  const skillColor = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500',
  }[module.skillLevel];

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-colors ${
        isSelected
          ? 'bg-[#4ecca3]/20 border border-[#4ecca3]'
          : 'bg-[#1a1a2e] border border-transparent hover:border-[#3a3a4a]'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${skillColor}`} />
            <span className="text-sm font-medium text-white truncate">{module.name}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{module.description}</p>
        </div>
        <span className="text-xs text-gray-500 capitalize px-2 py-0.5 bg-[#0a0a12] rounded">
          {module.category}
        </span>
      </div>
    </button>
  );
}

function ProjectCard({
  project,
  isSelected,
  onClick,
}: {
  project: SynthProject;
  isSelected: boolean;
  onClick: () => void;
}) {
  const skillColor = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500',
  }[project.skillLevel];

  const routeLabel = {
    arduino: 'Arduino',
    pcb: 'PCB',
    breadboard: 'Breadboard',
  }[project.route];

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-colors ${
        isSelected
          ? 'bg-[#f39c12]/20 border border-[#f39c12]'
          : 'bg-[#1a1a2e] border border-transparent hover:border-[#3a3a4a]'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${skillColor}`} />
            <span className="text-sm font-medium text-white truncate">{project.name}</span>
          </div>
          {project.author && (
            <p className="text-xs text-gray-500">by {project.author}</p>
          )}
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{project.description}</p>
        </div>
        <span className="text-xs text-gray-500 px-2 py-0.5 bg-[#0a0a12] rounded">
          {routeLabel}
        </span>
      </div>
    </button>
  );
}

function ModuleDetails({
  module,
  onLoad,
}: {
  module: SynthModule;
  onLoad: () => void;
}) {
  const skillColor = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  }[module.skillLevel];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-[#2a2a3a]">
        <h3 className="text-xl font-semibold text-white">{module.name}</h3>
        <div className="flex items-center gap-3 mt-2">
          <span className={`text-xs font-medium ${skillColor} capitalize`}>
            {module.skillLevel}
          </span>
          <span className="text-xs text-gray-500 capitalize">{module.category}</span>
          <span className="text-xs text-gray-500">Arduino/DIY</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Description</h4>
          <p className="text-sm text-gray-300">{module.description}</p>
        </div>

        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Features</h4>
          <ul className="space-y-1">
            {module.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#4ecca3] mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Key Components</h4>
          <div className="flex flex-wrap gap-1">
            {module.components.map((comp) => (
              <span
                key={comp}
                className="px-2 py-1 text-xs bg-[#1a1a2e] text-gray-300 rounded"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {module.sourceUrl && (
          <div>
            <a
              href={module.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#4ecca3] hover:underline"
            >
              <ExternalLink size={14} />
              View Source / Schematic
            </a>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-[#2a2a3a]">
        <button
          onClick={onLoad}
          className="w-full py-2 bg-[#4ecca3] text-black font-medium rounded-lg hover:bg-[#3dbb92] transition-colors"
        >
          Load Circuit to Canvas
        </button>
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: SynthProject }) {
  const skillColor = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  }[project.skillLevel];

  const routeLabel = {
    arduino: 'Arduino-based',
    pcb: 'PCB Kit',
    breadboard: 'Breadboard',
  }[project.route];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-[#2a2a3a]">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        {project.author && (
          <p className="text-sm text-gray-400">by {project.author}</p>
        )}
        <div className="flex items-center gap-3 mt-2">
          <span className={`text-xs font-medium ${skillColor} capitalize`}>
            {project.skillLevel}
          </span>
          <span className="text-xs text-gray-500 capitalize">{project.category}</span>
          <span className="text-xs text-gray-500">{routeLabel}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Description</h4>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>

        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Features</h4>
          <ul className="space-y-1">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-[#f39c12] mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Tags</h4>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-[#1a1a2e] text-gray-300 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {project.sourceUrl && (
          <div>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#f39c12] hover:underline"
            >
              <ExternalLink size={14} />
              View Project / Documentation
            </a>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 border-t border-[#2a2a3a] bg-[#1a1a2e]">
        <p className="text-xs text-gray-500 text-center">
          PCB projects are reference designs. Visit the source for build instructions, BOMs, and PCB files.
        </p>
      </div>
    </div>
  );
}
