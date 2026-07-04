function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function Avatar({ image, alt = "", name = "", size = 40, className = "" }) {
  const dimension = { width: size, height: size };

  if (image) {
    return (
      <img
        src={image}
        alt={alt || name || "Avatar"}
        style={dimension}
        className={`rounded-full border border-white/10 object-cover ${className}`}
      />
    );
  }

  return (
    <div
      style={dimension}
      className={`flex items-center justify-center rounded-full border border-white/10
        bg-gradient-to-br from-primary to-secondary text-sm font-semibold text-white ${className}`}
    >
      {getInitials(name) || "?"}
    </div>
  );
}

export default Avatar;

