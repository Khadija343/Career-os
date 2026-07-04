function Alert({ message, type = "error" }) {
  if (!message) return null;

  const styles = {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid",
    fontWeight: "500",
    backgroundColor:
      type === "error"
        ? "#f8d7da"
        : "#d1e7dd",

    color:
      type === "error"
        ? "#842029"
        : "#0f5132",

    borderColor:
      type === "error"
        ? "#f5c2c7"
        : "#badbcc",
  };

  return (
    <div style={styles}>
      {message}
    </div>
  );
}

export default Alert;