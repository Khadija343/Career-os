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

    // Empty email
    if (!email.trim()) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    // Validate email
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
    // Replace dummy response with:
    // const response = await forgotPassword(email);

    if (response.data.success) {
      setLoading(false);
      setSuccess("Password reset link sent successfully.");
    } else {
      setLoading(false);
      setError("Something went wrong.");
    }
  }

  return (
    <Card>
      <PageTitle title="Forgot Password" />

      <Alert message={error} />

      <Alert
        message={success}
        type="success"
      />

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        {loading && <Spinner />}

        <br />

        <Button
          text={loading ? "Sending..." : "Send Reset Link"}
          type="submit"
          disabled={loading}
        />
      </form>

      <br />

      <Link to={ROUTES.LOGIN}>
        Back to Login
      </Link>
    </Card>
  );
}

export default ForgotPassword;