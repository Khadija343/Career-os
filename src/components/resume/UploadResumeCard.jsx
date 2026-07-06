import { useState } from "react";
import aiService from "../../services/aiService";

function UploadResumeCard({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 📌 Upload handler
  const handleUpload = async (selectedFile) => {
    const uploadFile = selectedFile || file;

    if (!uploadFile) {
      setError("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", uploadFile);

    setLoading(true);
    setError("");

    try {
      const response = await aiService.uploadResume(formData);

      // backend response parent ko bhejna
      onUploadSuccess(response);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Upload failed. Backend not connected."
      );
    } finally {
      setLoading(false);
    }
  };

  // 📌 Drag & Drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-4">
        Upload Resume
      </h2>

      {/* DROP AREA */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
      >
        <p className="text-gray-500">
          Drag & drop your resume here
        </p>

        <p className="text-sm text-gray-400 mt-1">
          or choose file below
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          disabled={loading}
          onChange={(e) => setFile(e.target.files[0])}
          className="mt-3"
        />
      </div>

      {/* Selected file */}
      {file && (
        <p className="mt-2 text-green-600 text-sm">
          Selected: {file.name}
        </p>
      )}

      {/* ERROR (NO ALERTS) */}
      {error && (
        <div className="mt-3 bg-red-100 text-red-600 p-2 rounded">
          {error}
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={() => handleUpload()}
        disabled={loading}
        className={`mt-4 px-5 py-2 rounded text-white ${
          loading
            ? "bg-gray-400"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </button>

      {/* LOADING BAR */}
      {loading && (
        <div className="mt-4 w-full bg-gray-200 h-2 rounded">
          <div className="h-2 bg-blue-500 animate-pulse w-full rounded"></div>
        </div>
      )}
    </div>
  );
}

export default UploadResumeCard;