import { Link } from "react-router-dom";
import {
  FileText,
  GitBranch,
  Map,
  MessageSquare,
} from "lucide-react";

import Logo from "../../components/common/Logo";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Footer from "../../layouts/Footer";

import { ROUTES } from "../../utils/constants";

const FEATURES = [
  {
    title: "Resume Analysis",
    description:
      "Upload your resume and receive ATS scoring, skill analysis, strengths, weaknesses, and improvement suggestions.",
    icon: FileText,
  },
  {
    title: "GitHub Analysis",
    description:
      "Connect your GitHub profile and analyze repositories, languages, contributions, and project quality.",
    icon: GitBranch,
  },
  {
    title: "Personalized Roadmaps",
    description:
      "Generate an AI-powered learning roadmap tailored to your career goals and current skills.",
    icon: Map,
  },
  {
    title: "AI Career Assistant",
    description:
      "Ask career questions and receive personalized guidance powered by AI.",
    icon: MessageSquare,
  },
];

function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-white">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <Logo />

        <div className="flex items-center gap-2 sm:gap-3">
          <Link to={ROUTES.LOGIN}>
            <Button text="Login" variant="outline" size="sm" />
          </Link>
          <Link to={ROUTES.SIGNUP}>
            <Button text="Get Started" size="sm" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 px-4 sm:px-6 lg:px-10">
        <section className="mx-auto flex max-w-3xl flex-col items-center py-16 text-center sm:py-24">
          <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">
            AI-Powered Career Development Platform
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Career <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">OS</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Career OS helps students and early professionals become internship
            and job ready through AI-powered resume analysis, GitHub insights,
            personalized career roadmaps, interview preparation, and
            continuous career tracking.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={ROUTES.SIGNUP}>
              <Button text="Get Started" size="lg" fullWidth />
            </Link>
            <Link to={ROUTES.LOGIN}>
              <Button text="Login" variant="outline" size="lg" fullWidth />
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl pb-20 sm:pb-28">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Features
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map(({ title, description, icon: Icon }) => (
              <Card key={title} hover>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;




