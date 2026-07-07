import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
    if (success) setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all fields to create your account.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    localStorage.removeItem("token");
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
      })
    );

    setSuccess("Account created successfully! Redirecting to login...");
    window.setTimeout(() => navigate("/login", { replace: true }), 600);
  }

  function handleGoogleSignup() {
    localStorage.removeItem("token");
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "Google User", email: "google.user@example.com" })
    );
    navigate("/login", { replace: true });
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md space-y-5 border border-slate-700/70 bg-slate-900/70 shadow-2xl">
        <div className="space-y-2 text-center">
          <div className="mb-2 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            Career OS
          </div>
          <PageTitle title="Create your account" />
          <p className="text-sm text-slate-400">Start building a stronger professional profile today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error ? <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}
          {success ? <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">{success}</p> : null}
          <Input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <Button text="Create Account" type="submit" className="w-full" />
        </form>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-700" />
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">or</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-4 py-3 font-semibold text-slate-100 transition duration-200 hover:border-blue-500 hover:bg-slate-700"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-slate-400">
          Already have an account? <Link to="/login" className="font-semibold text-blue-400 hover:text-blue-300">Login</Link>
        </p>
      </Card>
    </div>
  );
}

export default Signup;