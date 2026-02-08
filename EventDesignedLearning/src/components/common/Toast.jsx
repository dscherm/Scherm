import { useEffect, useState } from 'react';
import { useToast } from '../../contexts/ToastContext';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const ICONS = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const STYLES = {
  success: 'border-green-500/30 text-green-400',
  error: 'border-red-500/30 text-red-400',
  info: 'border-blue-500/30 text-blue-400',
};

const PROGRESS_COLORS = {
  success: 'bg-green-400',
  error: 'bg-red-400',
  info: 'bg-blue-400',
};

function ToastItem({ toast, onRemove }) {
  const [progress, setProgress] = useState(100);
  const [isExiting, setIsExiting] = useState(false);
  const Icon = ICONS[toast.type] || Info;

  useEffect(() => {
    if (toast.duration <= 0) return;
    const start = toast.createdAt;
    const end = start + toast.duration;
    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(0, ((end - now) / toast.duration) * 100);
      setProgress(remaining);
      if (remaining > 0) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [toast.duration, toast.createdAt]);

  const handleRemove = () => {
    setIsExiting(true);
    setTimeout(() => onRemove(toast.id), 200);
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-lg border backdrop-blur-md
        bg-dark-surface/90 shadow-lg shadow-black/20
        ${STYLES[toast.type]}
        ${isExiting ? 'animate-slide-out-right' : 'animate-slide-in-right'}
      `}
      role="alert"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Icon className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm text-text-primary flex-1">{toast.message}</p>
        <button
          onClick={handleRemove}
          className="p-1 text-text-muted hover:text-text-primary transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      {toast.duration > 0 && (
        <div className="h-0.5 w-full bg-dark-border">
          <div
            className={`h-full ${PROGRESS_COLORS[toast.type]} transition-none`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem toast={toast} onRemove={removeToast} />
        </div>
      ))}
    </div>
  );
}
