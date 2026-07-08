import { useState } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";

import aiService from "../../services/aiService";
import Button from "../ui/Button";

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
    <div className="rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">

      <h2 className="mb-4 text-xl font-bold text-white">
        Upload Resume
      </h2>

      {/* DROP AREA */}
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-white/15 p-8 text-center transition-colors hover:border-primary/40 hover:bg-white/[0.02]"
      >
        <UploadCloud size={28} className="text-white/40" />

        <p className="text-sm text-white/50">
          Drag & drop your resume here
        </p>

        <p className="text-xs text-white/30">
          or click to choose a file
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          disabled={loading}
          onChange={(e) => setFile(e.target.files[0])}
          className="sr-only"
        />
      </label>

      {/* Selected file */}
      {file && (
        <p className="mt-3 flex items-center gap-1.5 text-sm text-success">
          <CheckCircle2 size={16} />
          Selected: {file.name}
        </p>
      )}

      {/* ERROR (NO ALERTS) */}
      {error && (
        <div className="mt-3 rounded-lg bg-danger/10 p-2 text-sm text-danger">
          {error}
        </div>
      )}

      {/* BUTTON */}
      <Button
        onClick={() => handleUpload()}
        disabled={loading}
        fullWidth
        className="mt-4"
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </Button>

      {/* LOADING BAR */}
      {loading && (
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-pulse rounded-full bg-primary"></div>
        </div>
      )}
    </div>
  );
}

export default UploadResumeCard;
