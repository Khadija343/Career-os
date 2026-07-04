// import { login as loginUser } from "../../api/authService";
// Uncomment when the backend is connected.

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { isValidEmail } from "../../utils/validation";
import { ROUTES } from "../../utils/constants";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";
import Alert from "../../components/ui/Alert";
import AuthLayout from "../../layouts/AuthLayout";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Check empty fields
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) { 
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      // Temporary dummy login.
      // TODO: Replace with loginUser() when backend is connected.

      const response = {
        data: {
          success: true,
          token: "DummyJWTToken123",
          user: {
            name: "Laiba",
            email,
          },
        },
      };
      // const response = await loginUser({
      //   email,
      //   password,
      // });


      if (response.data.success) {
        login(
          response.data.user,
          response.data.token
        );

        navigate(ROUTES.DASHBOARD);
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout>
      <Card>
        <PageTitle title="Login" subtitle="Welcome back, log in to continue." />

        <Alert message={error} />

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {loading && <Spinner />}

          <Button
            text={loading ? "Logging in..." : "Login"}
            type="submit"
            disabled={loading}
            fullWidth
          />
        </form>

        <div className="mt-6 flex flex-col items-center gap-3 text-sm">
          <Link to={ROUTES.FORGOT_PASSWORD} className="text-primary hover:underline">
            Forgot Password?
          </Link>

          <p className="text-white/50">
            Don&apos;t have an account?{" "}
            <Link to={ROUTES.SIGNUP} className="font-medium text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </Card>
    </AuthLayout>
  );
}

export default Login;


