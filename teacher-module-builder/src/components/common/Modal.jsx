import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children, title, icon, badge, maxWidth = 'max-w-2xl', fullHeight = false, headerExtra }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      // Focus trap
      if (e.key === 'Tab' && contentRef.current) {
        const focusableEls = contentRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableEls.length === 0) return;
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
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

      {/* Content */}
      <div
        ref={contentRef}
        className={`
          relative bg-dark-surface/95 backdrop-blur-xl border border-white/10 rounded-xl
          w-full ${maxWidth} ${fullHeight ? 'h-[90vh]' : 'max-h-[90vh]'}
          flex flex-col overflow-hidden shadow-2xl animate-scale-in
        `}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-dark-border bg-dark-bg/50">
            <div className="flex items-center gap-3">
              {icon && <span className="text-lg">{icon}</span>}
              <h2 className="font-semibold text-text-primary">{title}</h2>
              {badge}
            </div>
            <div className="flex items-center gap-2">
              {headerExtra}
              <button
                onClick={onClose}
                className="p-2 text-text-muted hover:text-text-primary rounded-lg hover:bg-dark-hover transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Body */}
        {children}
      </div>
    </div>
  );
}
