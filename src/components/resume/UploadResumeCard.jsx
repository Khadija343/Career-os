import { useState } from "react";
import aiService from "../../services/aiService";

function UploadResumeCard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setLoading(true);

    try {
      const response = await aiService.uploadResume(formData);

      console.log("Resume Upload:", response);

      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error("Resume Upload Error:", error);

      alert(
        error.response?.data?.message ||
          "Backend is not connected yet."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        disabled={loading}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`mt-4 px-5 py-2 rounded-lg text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload Resume"}
      </button>

      {loading && (
        <div className="flex justify-center mt-6">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

export default UploadResumeCard;