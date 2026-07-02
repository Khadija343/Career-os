import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function Signup() {
  return (
    <Card>
      <PageTitle title="Create Account" />

      <Input
        type="text"
        placeholder="Full Name"
      />

      <Input
        type="email"
        placeholder="Email"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Button text="Sign Up" />

      <p>
        Already have an account?
      </p>

      <Link to="/login">
        Login
      </Link>
    </Card>
  );
}

export default Signup;