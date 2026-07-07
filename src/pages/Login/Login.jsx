import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    const response = {
      data: {
        success: true,
        token: "DummyJWTToken123",
        user: {
          name: "Laiba",
          email: email,
        },
      },
    };

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard", { replace: true });
    }
  }

  return (
    <Card className="space-y-5">
      <div className="space-y-2">
        <PageTitle title="Welcome back" />
        <p className="text-sm text-slate-400">Sign in to continue your career growth journey.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error ? <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">{error}</p> : null}
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button text="Login" type="submit" className="w-full" />
      </form>

      <div className="flex items-center justify-between text-sm text-slate-400">
        <Link to="/forgot-password" className="hover:text-white">Forgot password?</Link>
        <Link to="/signup" className="hover:text-white">Create account</Link>
      </div>
    </Card>
  );
}

export default Login;