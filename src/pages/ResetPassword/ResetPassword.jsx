import { Link } from "react-router-dom";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function ResetPassword() {
  return (
    <Card>
      <PageTitle title="Reset Password" />

      <Input
        type="password"
        placeholder="New Password"
      />

      <Input
        type="password"
        placeholder="Confirm Password"
      />

      <Button text="Reset Password" />

      <Link to="/login">
        Back to Login
      </Link>
    </Card>
  );
}

export default ResetPassword;