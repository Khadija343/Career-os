import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { isValidEmail } from "../../utils/validation";
import { ROUTES } from "../../utils/constants";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";
import Alert from "../../components/ui/Alert";
import AuthLayout from "../../layouts/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    // Empty fields
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    // Email validation
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    // ====================================================
    // Temporary dummy signup
    // Replace this block when backend is connected
    // ====================================================

    const response = {
      data: {
        success: true,
      },
    };

    // TODO:
    // Replace dummy signup with:
    // const response = await registerUser({
    //   name,
    //   email,
    //   password,
    // });

    if (response.data.success) {
      setLoading(false);

      setSuccess("Account created successfully!");

      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 1500);
    } else {
      setLoading(false);
      setError("Registration failed.");
    }


  }

  return (
    <AuthLayout>
      <Card>
        <PageTitle title="Create Account" subtitle="Start your career journey with Career OS." />

        <Alert message={error} />

        <Alert
          message={success}
          type="success"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {loading && <Spinner />}

          <Button
            text={loading ? "Creating Account..." : "Sign Up"}
            type="submit"
            disabled={loading}
            fullWidth
          />
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account?{" "}
          <Link to={ROUTES.LOGIN} className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </Card>
    </AuthLayout>
  );
}

export default Signup;


