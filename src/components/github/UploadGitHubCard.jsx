import { useState } from "react";
import { analyzeGithub } from "../../api/githubApi";

function UploadGitHubCard({ onSuccess }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!username) {
      setError("Please enter GitHub username");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await analyzeGithub(username);

      console.log("GitHub Data:", data);

      // 🔥 VERY IMPORTANT (UI update yahan se hota hai)
      onSuccess(data);

    } catch (err) {
      setError("Failed to analyze GitHub profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">
        GitHub Analysis
      </h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border p-2 rounded"
      />

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default UploadGitHubCard;