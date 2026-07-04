import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ROUTES } from "../../utils/constants";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";
import Alert from "../../components/ui/Alert";
import AuthLayout from "../../layouts/AuthLayout";

function ResetPassword() {
  const navigate = useNavigate();

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

    if (!password.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // ====================================================
    // Temporary dummy reset password
    // Replace this block when backend is connected
    // ====================================================

    const response = {
      data: {
        success: true,
      },
    };

    // TODO:
    // Replace dummy response with:
    // const response = await resetPassword({
    //   password,
    // });

    if (response.data.success) {
      setLoading(false);

      setSuccess("Password reset successfully!");

      setTimeout(() => {
        navigate(ROUTES.LOGIN);
      }, 1500);
    } else {
      setLoading(false);
      setError("Unable to reset password.");
    }
  }

  return (
    <AuthLayout>
      <Card>
        <PageTitle title="Reset Password" subtitle="Choose a new password for your account." />

        <Alert message={error} />

        <Alert
          message={success}
          type="success"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            placeholder="New Password"
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
            text={loading ? "Updating..." : "Reset Password"}
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

export default ResetPassword;

//Reset Password is usually not linked from anywhere in the app. 
// The user reaches it from the email sent by the backend.

