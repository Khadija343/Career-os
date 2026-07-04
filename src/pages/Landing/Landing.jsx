import { Link } from "react-router-dom";

import Logo from "../../components/common/Logo";
import Button from "../../components/ui/Button";

import { ROUTES } from "../../utils/constants";

function Landing() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <Logo />

      <h1>Career OS</h1>

      <h2>AI-Powered Career Development Platform</h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.6",
        }}
      >
        Career OS helps students and early professionals become internship
        and job ready through AI-powered resume analysis, GitHub insights,
        personalized career roadmaps, interview preparation, and continuous
        career tracking.
      </p>

      <div style={{ marginBottom: "40px" }}>
        <Link to={ROUTES.SIGNUP}>
          <Button text="Get Started" />
        </Link>

        {" "}

        <Link to={ROUTES.LOGIN}>
          <Button text="Login" />
        </Link>
      </div>

      <hr />

      <h2>Features</h2>

      <div style={{ marginTop: "20px" }}>
        <h3>Resume Analysis</h3>

        <p>
          Upload your resume and receive ATS scoring, skill analysis,
          strengths, weaknesses, and improvement suggestions.
        </p>

        <h3>GitHub Analysis</h3>

        <p>
          Connect your GitHub profile and analyze repositories, languages,
          contributions, and project quality.
        </p>

        <h3>Personalized Roadmaps</h3>

        <p>
          Generate an AI-powered learning roadmap tailored to your career
          goals and current skills.
        </p>

        <h3>AI Career Assistant</h3>

        <p>
          Ask career questions and receive personalized guidance powered by AI.
        </p>
      </div>

      <hr />

      <p style={{ marginTop: "30px" }}>
        © 2026 Career OS
      </p>
    </div>
  );
}

export default Landing;