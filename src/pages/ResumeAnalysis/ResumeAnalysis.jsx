import ScoreCard from "../../components/resume/ScoreCard";
import AnalysisCard from "../../components/resume/AnalysisCard";
import KeywordTag from "../../components/resume/KeywordTag";
import SuggestionCard from "../../components/resume/SuggestionCard";
import UploadResumeCard from "../../components/resume/UploadResumeCard";

function ResumeAnalysis() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        📄 Resume Analysis
      </h1>

      {/* Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <ScoreCard
          title="Resume Score"
          score="92%"
        />

        <ScoreCard
          title="ATS Score"
          score="88%"
        />

      </div>

      
      <div className="mt-8">

        <AnalysisCard
          title="Strengths"
          type="success"
          items={[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Git"
          ]}
        />

        <AnalysisCard
          title="Weaknesses"
          type="danger"
          items={[
            "Docker",
            "Kubernetes",
            "CI/CD"
          ]}
        />

      </div>

      {/* Keywords */}
      <div className="mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Matched Keywords
        </h2>

        <div className="flex flex-wrap gap-3">

          <KeywordTag keyword="React" matched />

          <KeywordTag keyword="JavaScript" matched />

          <KeywordTag keyword="Tailwind" matched />

          <KeywordTag keyword="Node.js" matched />
          <KeywordTag keyword="Docker" matched={false} />

        </div>

      </div>

      {/* Suggestions */}

      <div className="mt-8">

        <SuggestionCard
          suggestion="Add measurable achievements."
        />

        <SuggestionCard
          suggestion="Improve resume summary."
        />

        <SuggestionCard
  suggestion="Include more project achievements with measurable results."
/>

      </div>

      <div className="mt-8">

        <UploadResumeCard />

      </div>

    </div>
  );
}

export default ResumeAnalysis;