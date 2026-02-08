import { useState } from 'react';
import usePBLStore from '../../hooks/usePBLStore';
import { Plus, X, Check, Circle, Clock } from 'lucide-react';

function KNTKBoard() {
  const {
    currentUnit,
    addKnow,
    removeKnow,
    addNeedToKnow,
    removeNeedToKnow,
    updateNeedToKnowStatus,
  } = usePBLStore();

  const { knows, needToKnows } = currentUnit.launch.knowNeedToKnow;
  const [newKnow, setNewKnow] = useState('');
  const [newNTK, setNewNTK] = useState('');

  const handleAddKnow = () => {
    if (newKnow.trim()) {
      addKnow(newKnow.trim());
      setNewKnow('');
    }
  };

  const handleAddNTK = () => {
    if (newNTK.trim()) {
      addNeedToKnow(newNTK.trim());
      setNewNTK('');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved':
        return <Check className="w-4 h-4 text-pbl-green" />;
      case 'in_progress':
        return <Clock className="w-4 h-4 text-pbl-orange" />;
      default:
        return <Circle className="w-4 h-4 text-text-muted" />;
    }
  };

  const cycleStatus = (id, currentStatus) => {
    const statusOrder = ['open', 'in_progress', 'resolved'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    const nextStatus = statusOrder[(currentIndex + 1) % statusOrder.length];
    updateNeedToKnowStatus(id, nextStatus);
  };

  return (
    <div className="kntk-board">
      {/* Know Column */}
      <div className="kntk-column kntk-column-know">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-pbl-green flex items-center gap-2">
            <Check className="w-4 h-4" />
            What We Know
          </h4>
          <span className="text-xs text-text-muted">{knows.length} items</span>
        </div>

        <div className="space-y-2 mb-4">
          {knows.map((item) => (
            <div key={item.id} className="kntk-item kntk-item-know group">
              <div className="flex items-start justify-between gap-2">
                <span className="text-text-secondary">{item.text}</span>
                <button
                  onClick={() => removeKnow(item.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-text-muted hover:text-red-400 transition-all"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newKnow}
            onChange={(e) => setNewKnow(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddKnow()}
            placeholder="Add what students know..."
            className="input flex-1 text-sm"
          />
          <button
            onClick={handleAddKnow}
            disabled={!newKnow.trim()}
            className="btn btn-secondary p-2"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Need to Know Column */}
      <div className="kntk-column kntk-column-ntk">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-pbl-yellow flex items-center gap-2">
            <Circle className="w-4 h-4" />
            What We Need to Know
          </h4>
          <span className="text-xs text-text-muted">{needToKnows.length} items</span>
        </div>

        <div className="space-y-2 mb-4">
          {needToKnows.map((item) => (
            <div
              key={item.id}
              className={`kntk-item kntk-item-ntk group ${
                item.status === 'resolved' ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start gap-2">
                <button
                  onClick={() => cycleStatus(item.id, item.status)}
                  className="mt-0.5 flex-shrink-0"
                  title={`Status: ${item.status || 'open'} (click to change)`}
                >
                  {getStatusIcon(item.status)}
                </button>
                <span
                  className={`flex-1 text-text-secondary ${
                    item.status === 'resolved' ? 'line-through' : ''
                  }`}
                >
                  {item.text}
                </span>
                <button
                  onClick={() => removeNeedToKnow(item.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 text-text-muted hover:text-red-400 transition-all"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newNTK}
            onChange={(e) => setNewNTK(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddNTK()}
            placeholder="Add what students need to learn..."
            className="input flex-1 text-sm"
          />
          <button
            onClick={handleAddNTK}
            disabled={!newNTK.trim()}
            className="btn btn-secondary p-2"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="mt-4 pt-4 border-t border-dark-border">
          <p className="text-xs text-text-muted mb-2">Click status to change:</p>
          <div className="flex gap-4 text-xs">
            <span className="flex items-center gap-1 text-text-muted">
              <Circle className="w-3 h-3" /> Open
            </span>
            <span className="flex items-center gap-1 text-pbl-orange">
              <Clock className="w-3 h-3" /> In Progress
            </span>
            <span className="flex items-center gap-1 text-pbl-green">
              <Check className="w-3 h-3" /> Resolved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KNTKBoard;
