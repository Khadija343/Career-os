function Spinner({ size = 22, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center py-2 ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div
        style={{ width: size, height: size }}
        className="animate-spin rounded-full border-2 border-white/15 border-t-primary"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
