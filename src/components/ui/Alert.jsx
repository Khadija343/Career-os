import { CheckCircle2, XCircle, AlertTriangle, Info } from "lucide-react";

const CONFIG = {
  error: {
    classes: "border-danger/30 bg-danger/10 text-danger",
    Icon: XCircle,
  },
  success: {
    classes: "border-success/30 bg-success/10 text-success",
    Icon: CheckCircle2,
  },
  warning: {
    classes: "border-yellow-500/30 bg-yellow-500/10 text-yellow-500",
    Icon: AlertTriangle,
  },
  info: {
    classes: "border-primary/30 bg-primary/10 text-primary",
    Icon: Info,
  },
};

function Alert({ message, type = "error" }) {
  if (!message) return null;

  const { classes, Icon } = CONFIG[type] || CONFIG.error;

  return (
    <div
      className={`mb-4 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm font-medium ${classes}`}
      role="alert"
    >
      <Icon size={18} className="mt-0.5 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

export default Alert;
