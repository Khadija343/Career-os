function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`w-full rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20
        transition-all duration-200
        ${hover ? "hover:-translate-y-0.5 hover:border-white/10 hover:shadow-xl hover:shadow-black/30" : ""}
        ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
