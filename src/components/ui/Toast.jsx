import { useEffect } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const CONFIG = {
  success: {
    classes: "border-success/30 bg-card text-success",
    Icon: CheckCircle2,
  },
  error: {
    classes: "border-danger/30 bg-card text-danger",
    Icon: XCircle,
  },
};

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const { classes, Icon } = CONFIG[type] || CONFIG.success;

  return (
    <div
      role="status"
      className={`fixed top-5 right-5 z-50 flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium text-white shadow-xl shadow-black/30 ${classes}`}
    >
      <Icon size={18} className="shrink-0" />
      <span>{message}</span>
    </div>
  );
}

export default Toast;