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

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    // Temporary dummy login
    // Replace this block later
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
      login(
        response.data.user,
        response.data.token
      );

      //After successful login, take the user to the Dashboard
      navigate("/dashboard");
    }
  }

  return (
    <Card>
      <PageTitle title="Login" />

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

        <Button
          text="Login"
          type="submit"
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