import { Lightbulb } from 'lucide-react';

function ResearchNote({ title, children }) {
  return (
    <div className="research-note">
      <div className="flex items-center gap-2 research-note-title">
        <Lightbulb className="w-4 h-4" />
        <span>{title || 'Research Note'}</span>
      </div>
      <div className="research-note-content">
        {children}
      </div>
    </div>
  );
}

export default ResearchNote;
