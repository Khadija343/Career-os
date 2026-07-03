import { login } from "../../api/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    // Temporary dummy login
    // Replace this block with axios later
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
      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
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

// after completing backend, only replace the dummy response inside handleSubmit with an Axios request.

// import axios from "axios";

// const response = await axios.post(
//   "/api/v1/auth/login",
//   {
//     email,
//     password,
//   }
// );