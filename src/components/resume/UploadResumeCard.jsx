import { useState } from "react";
import aiService from "../../services/aiService";

function UploadResumeCard() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await aiService.uploadResume(formData);
      console.log(response);
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Backend is not connected yet.");
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
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Upload Resume
      </button>
    </div>
  );
}

export default UploadResumeCard;