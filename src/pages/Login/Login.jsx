//import { login as loginUser } from "../../api/authService";
//since the backend isnt connected yet
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";

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

    if (!email || !password) {
    setError("Please enter email and password.");
    setLoading(false);
    return;
    }

    try {
      // Temporary dummy login
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

      if (response.data.success) {
        login(
          response.data.user,
          response.data.token
        );

        navigate("/dashboard");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <PageTitle title="Login" />
      
      {error && (
        <p
          style={{
            color: "red",
            marginBottom: "15px",
          }}
        >
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />

        {loading && <Spinner />}
        <br />

        <Button
          text={loading ? "Logging in..." : "Login"}
          type="submit"
          disabled={loading} //button becomes disabled while processing.
        />
      </form>
    </Card>
  );
}

export default Login;

// after completing backend, only replace the dummy with this:

// const response = await loginUser({
//   email,
//   password,
// });