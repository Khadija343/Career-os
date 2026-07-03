import { useState } from "react"; //useState is a hook to add states to functional compponents
import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log({ //Later we'll replace it with axios.post(...)
      email,
      password,
    });
  }
  
  return (
    <Card>
      <h2>Login</h2>

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

      <Button
        text="Login"
        onClick={handleLogin}
      />
    </Card>
  );
}

export default Login;


// after getting the backend ready, change handleLogin function with
// async function handleLogin() {
//   try {
//     const response = await axios.post(
//       "/api/v1/auth/login",
//       {
//         email,
//         password,
//       }
//     );

//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }