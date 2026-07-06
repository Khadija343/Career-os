import { useEffect } from "react";

function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-3 rounded-lg text-white shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;