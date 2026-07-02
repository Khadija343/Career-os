import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";

function Login() {
  return (
    <Card>
      <h2>Login</h2>

      <Input
        type="email"
        placeholder="Email"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Button text="Login" />
    </Card>
  );
}

export default Login;