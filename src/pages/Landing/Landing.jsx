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
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
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

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero */}
          <section className="mx-auto flex max-w-3xl flex-col items-center pt-16 pb-16 text-center sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
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

            <div className="mx-auto mt-8 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center">
              <Link to={ROUTES.SIGNUP} className="sm:w-auto">
                <Button text="Get Started" size="lg" fullWidth />
              </Link>
              <Link to={ROUTES.LOGIN} className="sm:w-auto">
                <Button text="Login" variant="outline" size="lg" fullWidth />
              </Link>
            </div>
          </section>

          {/* Features */}
          <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pb-24">
            <h2 className="mb-10 text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Features
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ title, description, icon: Icon }) => (
                <Card key={title} hover className="flex h-full flex-col">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
