import { useState } from "react";
import { Link } from "react-router-dom";

import { isValidEmail } from "../../utils/validation";
import { ROUTES } from "../../utils/constants";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";
import Alert from "../../components/ui/Alert";
import AuthLayout from "../../layouts/AuthLayout";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    if (!email.trim()) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // ====================================================
    // Temporary dummy forgot password
    // Replace this block when backend is connected
    // ====================================================
    const response = {
      data: {
        success: true,
      },
    };

    // TODO:
    // Replace dummy response with: const response = await forgotPassword(email);

    if (response.data.success) {
      setLoading(false);
      setSuccess("Password reset link sent successfully.");
    } else {
      setLoading(false);
      setError("Something went wrong.");
    }
  }

  return (
    <AuthLayout>
      <Card>
        <PageTitle
          title="Forgot Password"
          subtitle="Enter your email and we'll send you a reset link."
        />

        <Alert message={error} />
        <Alert message={success} type="success" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {loading && <Spinner />}

          <Button
            text={loading ? "Sending..." : "Send Reset Link"}
            type="submit"
            disabled={loading}
            fullWidth
          />
        </form>

        <p className="mt-6 text-center text-sm">
          <Link to={ROUTES.LOGIN} className="font-medium text-primary hover:underline">
            Back to Login
          </Link>
        </p>
      </Card>
    </AuthLayout>
  );
}

export default ForgotPassword;
