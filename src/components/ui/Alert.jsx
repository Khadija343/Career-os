function Alert({ message, type = "error" }) {
  if (!message) return null;

  const styles = {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    backgroundColor:
      type === "error" ? "#f8d7da" : "#d1e7dd",
    color:
      type === "error" ? "#842029" : "#0f5132",
  };

  return (
    <div style={styles}>
      {message}
    </div>
  );
}

export default Alert;