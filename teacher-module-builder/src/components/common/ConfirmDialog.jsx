import { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = 'Are you sure?',
  message = '',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  destructive = false,
}) {
  const dialogRef = useRef(null);
  const confirmBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus trap
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Focus the cancel button (safer default than confirm for destructive)
    const focusable = dialog.querySelectorAll('button');
    if (focusable.length > 0) {
      focusable[focusable.length - 1].focus(); // focus cancel (last) or confirm based on destructive
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const focusableEls = dialog.querySelectorAll('button:not([disabled])');
        const first = focusableEls[0];
        const last = focusableEls[focusableEls.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      {/* Dialog */}
      <div
        ref={dialogRef}
        className="relative bg-dark-surface/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl animate-scale-in"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-message"
      >
        <div className="flex items-start gap-4">
          {destructive && (
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
          )}
          <div className="flex-1">
            <h3 id="confirm-title" className="text-lg font-semibold text-text-primary">
              {title}
            </h3>
            {message && (
              <p id="confirm-message" className="mt-2 text-sm text-text-secondary">
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="btn btn-secondary"
          >
            {cancelLabel}
          </button>
          <button
            ref={confirmBtnRef}
            onClick={() => { onConfirm(); onClose(); }}
            className={`btn ${
              destructive
                ? 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500'
                : 'btn-primary'
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
