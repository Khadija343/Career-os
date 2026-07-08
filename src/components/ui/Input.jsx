function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  error = "",
  className = "",
}) {
  return (
    <div className="w-full text-left">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-white
          placeholder:text-white/35 outline-none transition-all duration-200
          focus:ring-2 focus:ring-offset-0
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            error
              ? "border-danger/60 focus:border-danger/60 focus:ring-danger/30"
              : "border-white/10 focus:border-primary/50 focus:ring-primary/30"
          } ${className}`}
      />
      {error && <p className="mt-1.5 text-xs font-medium text-danger">{error}</p>}
    </div>
  );
}

export default Input;
