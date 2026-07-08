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

      // 🔥 VERY IMPORTANT (UI update yahan se hota hai)
      onSuccess(data);

    } catch {
      setError("Failed to analyze GitHub profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card border border-white/5 p-6 rounded-xl shadow-lg shadow-black/20 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-white">
        GitHub Analysis
      </h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full rounded-xl border border-white/10 bg-background px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
      />

      {error && (
        <p className="text-danger text-sm mt-2">
          {error}
        </p>
      )}

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mt-4 w-full bg-primary text-white py-2 rounded-xl hover:bg-primary/90 transition disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </div>
  );
}

export default UploadGitHubCard;
