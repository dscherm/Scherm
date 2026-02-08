import usePBLStore from '../../hooks/usePBLStore';
import { COGNITIVE_SKILLS, SKILL_CATEGORIES } from '../../data/cognitiveSkills';
import {
  Search,
  MessageSquare,
  Users,
  Lightbulb,
  Brain,
  Puzzle,
  Compass,
  BookOpen,
} from 'lucide-react';

const SKILL_ICONS = {
  analysis: Search,
  communication: MessageSquare,
  collaboration: Users,
  creativity: Lightbulb,
  critical_thinking: Brain,
  problem_solving: Puzzle,
  self_direction: Compass,
  research: BookOpen,
};

function CognitiveSkillsPicker() {
  const { currentUnit, toggleCognitiveSkill } = usePBLStore();
  const selectedSkills = currentUnit.destination.cognitiveSkills;

  const isSelected = (skillId) => selectedSkills.includes(skillId);

  return (
    <div className="space-y-6">
      {/* Selected Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-muted">
          Select 3-4 skills to assess throughout the unit
        </p>
        <span className={`text-sm font-medium ${
          selectedSkills.length < 2 ? 'text-red-400' :
          selectedSkills.length <= 4 ? 'text-pbl-green' :
          'text-pbl-orange'
        }`}>
          {selectedSkills.length} selected
          {selectedSkills.length < 2 && ' (minimum 2)'}
          {selectedSkills.length > 4 && ' (consider fewer)'}
        </span>
      </div>

      {/* Skills by Category */}
      <div className="space-y-4">
        {Object.entries(SKILL_CATEGORIES).map(([category, skillIds]) => (
          <div key={category}>
            <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
              {category.replace('_', ' ')} Skills
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skillIds.map((skillId) => {
                const skill = COGNITIVE_SKILLS[skillId];
                const Icon = SKILL_ICONS[skillId] || Search;
                const selected = isSelected(skillId);

                return (
                  <button
                    key={skillId}
                    onClick={() => toggleCognitiveSkill(skillId)}
                    className={`
                      p-3 rounded-lg border text-left transition-all flex items-start gap-3
                      ${selected
                        ? 'ring-2 ring-offset-2 ring-offset-dark-bg'
                        : 'border-dark-border hover:border-opacity-50'
                      }
                    `}
                    style={{
                      borderColor: selected ? skill.color : undefined,
                      backgroundColor: selected ? `${skill.color}10` : undefined,
                      '--tw-ring-color': skill.color,
                    }}
                  >
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className="font-medium text-sm"
                        style={{ color: selected ? skill.color : '#ffffff' }}
                      >
                        {skill.name}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5 line-clamp-2">
                        {skill.description}
                      </p>
                    </div>
                    {selected && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Skills Summary */}
      {selectedSkills.length > 0 && (
        <div className="pt-4 border-t border-dark-border">
          <h4 className="text-sm font-medium text-text-primary mb-2">
            Selected Skills for This Unit
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skillId) => {
              const skill = COGNITIVE_SKILLS[skillId];
              return (
                <span
                  key={skillId}
                  className="px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                  }}
                >
                  {skill.name}
                  <button
                    onClick={() => toggleCognitiveSkill(skillId)}
                    className="hover:opacity-70"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Rubric Preview */}
      {selectedSkills.length > 0 && (
        <div className="p-4 bg-dark-bg rounded-lg border border-dark-border">
          <h4 className="text-sm font-medium text-text-primary mb-3">
            Rubric Preview
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="text-left py-2 text-text-muted">Skill</th>
                  <th className="text-left py-2 text-text-muted">Emerging</th>
                  <th className="text-left py-2 text-text-muted">Developing</th>
                  <th className="text-left py-2 text-text-muted">Proficient</th>
                  <th className="text-left py-2 text-text-muted">Advanced</th>
                </tr>
              </thead>
              <tbody>
                {selectedSkills.slice(0, 3).map((skillId) => {
                  const skill = COGNITIVE_SKILLS[skillId];
                  return (
                    <tr key={skillId} className="border-b border-dark-border/50">
                      <td
                        className="py-2 font-medium"
                        style={{ color: skill.color }}
                      >
                        {skill.name}
                      </td>
                      <td className="py-2 text-text-muted max-w-[120px] truncate">
                        {skill.rubricCriteria.emerging}
                      </td>
                      <td className="py-2 text-text-muted max-w-[120px] truncate">
                        {skill.rubricCriteria.developing}
                      </td>
                      <td className="py-2 text-text-muted max-w-[120px] truncate">
                        {skill.rubricCriteria.proficient}
                      </td>
                      <td className="py-2 text-text-muted max-w-[120px] truncate">
                        {skill.rubricCriteria.advanced}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {selectedSkills.length > 3 && (
              <p className="text-text-muted text-xs mt-2">
                + {selectedSkills.length - 3} more skills
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CognitiveSkillsPicker;
