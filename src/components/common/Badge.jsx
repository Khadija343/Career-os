function Badge({ text, color = "bg-blue-600" }) {
  return (
    <span
      className={`${color} text-white px-3 py-1 rounded-full text-sm`}
    >
      {text}
    </span>
  );
}

export default Badge;