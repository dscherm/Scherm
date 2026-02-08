import { useState } from 'react';
import { getProtocolsByPhase, getRecommendedProtocols } from '../../data/pblProtocols';
import { X, ChevronDown, ChevronRight, Clock, BookOpen } from 'lucide-react';

function ProtocolSidebar({ context, onClose }) {
  const [expandedProtocol, setExpandedProtocol] = useState(null);
  const protocols = getRecommendedProtocols(context);

  return (
    <div className="w-96 bg-dark-surface border-l border-dark-border h-full overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-dark-surface border-b border-dark-border p-4 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-pbl-purple" />
            <h3 className="font-semibold text-text-primary">Protocol Guide</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-text-muted hover:text-text-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-text-muted mt-1">
          Best practices for {context} phase
        </p>
      </div>

      {/* Protocols List */}
      <div className="p-4 space-y-3">
        {protocols.map((protocol) => (
          <ProtocolCard
            key={protocol.id}
            protocol={protocol}
            isExpanded={expandedProtocol === protocol.id}
            onToggle={() => setExpandedProtocol(
              expandedProtocol === protocol.id ? null : protocol.id
            )}
          />
        ))}
      </div>
    </div>
  );
}

function ProtocolCard({ protocol, isExpanded, onToggle }) {
  return (
    <div className="protocol-card">
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="font-medium text-text-primary flex items-center gap-2">
              {protocol.name}
            </h4>
            <p className="text-xs text-text-muted mt-1">
              {protocol.purpose}
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {protocol.duration}
              </span>
              <span
                className="px-2 py-0.5 rounded"
                style={{ backgroundColor: `${protocol.color}20`, color: protocol.color }}
              >
                {protocol.phase}
              </span>
            </div>
          </div>
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-text-muted" />
          ) : (
            <ChevronRight className="w-5 h-5 text-text-muted" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-dark-border space-y-4">
          {/* Steps */}
          {protocol.steps && (
            <div>
              <h5 className="text-xs font-medium text-text-muted uppercase mb-2">Steps</h5>
              <ol className="space-y-2">
                {protocol.steps.map((step, i) => (
                  <li key={i} className="protocol-step">
                    <span className="protocol-step-number">{i + 1}</span>
                    <span className="text-text-secondary">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tips */}
          {protocol.tips && (
            <div>
              <h5 className="text-xs font-medium text-text-muted uppercase mb-2">Tips</h5>
              <ul className="space-y-1">
                {protocol.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-pbl-purple">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Norms (for critique protocols) */}
          {protocol.norms && (
            <div>
              <h5 className="text-xs font-medium text-text-muted uppercase mb-2">Norms</h5>
              <ul className="space-y-1">
                {protocol.norms.map((norm, i) => (
                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-pbl-cyan">✓</span>
                    <span>{norm}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sentence Starters (for feedback protocols) */}
          {protocol.sentenceStarters && (
            <div>
              <h5 className="text-xs font-medium text-text-muted uppercase mb-2">Sentence Starters</h5>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-pbl-green mb-1">Warm Feedback</p>
                  {protocol.sentenceStarters.warm?.map((starter, i) => (
                    <p key={i} className="text-xs text-text-muted italic">"{starter}"</p>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-pbl-orange mb-1">Cool Feedback</p>
                  {protocol.sentenceStarters.cool?.map((starter, i) => (
                    <p key={i} className="text-xs text-text-muted italic">"{starter}"</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Prompts (for reflection protocols) */}
          {protocol.prompts && (
            <div>
              <h5 className="text-xs font-medium text-text-muted uppercase mb-2">Prompt Categories</h5>
              {Object.entries(protocol.prompts).map(([category, prompts]) => (
                <div key={category} className="mb-2">
                  <p className="text-xs text-pbl-purple capitalize mb-1">{category}</p>
                  {prompts.map((prompt, i) => (
                    <p key={i} className="text-xs text-text-muted ml-2">• {prompt}</p>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* Examples (for entry events) */}
          {protocol.examples && (
            <div>
              <h5 className="text-xs font-medium text-text-muted uppercase mb-2">Examples</h5>
              <ul className="space-y-1">
                {protocol.examples.map((example, i) => (
                  <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-pbl-yellow">→</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProtocolSidebar;
