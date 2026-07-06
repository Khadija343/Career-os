import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo";
import Button from "../../components/ui/Button";

function Landing() {
  return (
    <div>
      <Logo />

      <h1>Hello Landing</h1>

      <Link to="/login">
        <Button text="Login" />
      </Link>
    </div>
  );
}

export default Landing;