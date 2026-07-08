function Badge({ text, variant = "default", className = "" }) {
  const variants = {
    default: "bg-white/10 text-white/70",
    primary: "bg-primary/15 text-primary",
    secondary: "bg-secondary/15 text-secondary",
    success: "bg-success/15 text-success",
    danger: "bg-danger/15 text-danger",
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium leading-none
        ${variants[variant] || variants.default} ${className}`}
    >
      {text}
    </span>
  );
}

export default Badge;
