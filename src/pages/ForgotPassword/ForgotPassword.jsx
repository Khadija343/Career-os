import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function ForgotPassword() {
  return (
    <Card>
      <PageTitle title="Forgot Password" />

      <Input
        type="email"
        placeholder="Enter your email"
      />

      <Button text="Send Reset Link" />

      <Link to="/login">
        Back to Login
      </Link>
    </Card>
  );
}

export default ForgotPassword;