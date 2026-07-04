function Button({
  text,
  children,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  disabled = false,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-primary text-white shadow-sm shadow-primary/30 hover:bg-primary/90 focus-visible:ring-primary",
    secondary:
      "bg-secondary text-white shadow-sm shadow-secondary/30 hover:bg-secondary/90 focus-visible:ring-secondary",
    success:
      "bg-success text-white shadow-sm shadow-success/30 hover:bg-success/90 focus-visible:ring-success",
    danger:
      "bg-danger text-white shadow-sm shadow-danger/30 hover:bg-danger/90 focus-visible:ring-danger",
    outline:
      "bg-transparent text-white border border-white/15 hover:bg-white/5 hover:border-white/25 focus-visible:ring-white/30",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {text || children}
    </button>
  );
}

export default Button;


