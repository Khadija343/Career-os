import { X } from "lucide-react";

// A Modal is a popup window that appears on top of the current page.
function Modal({ children, isOpen = true, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-card p-6 shadow-2xl shadow-black/40">
        {(title || onClose) && (
          <div className="mb-4 flex items-center justify-between">
            {title && <h3 className="text-lg font-bold text-white">{title}</h3>}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg p-1 text-white/50 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}

export default Modal;


