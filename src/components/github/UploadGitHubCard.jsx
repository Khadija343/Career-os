import { useState } from "react";
import { GitBranch } from "lucide-react";

import { analyzeGithub } from "../../api/githubApi";
import Input from "../ui/Input";
import Button from "../ui/Button";

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
    <div className="w-full max-w-md rounded-2xl border border-white/5 bg-card p-6 shadow-lg shadow-black/20">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
        <GitBranch size={20} className="text-primary" />
        GitHub Analysis
      </h2>

      <Input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={error}
      />

      <Button
        onClick={handleAnalyze}
        disabled={loading}
        fullWidth
        className="mt-4"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </Button>
    </div>
  );
}

export default UploadGitHubCard;
