import { useNavigate } from "react-router-dom";

import Logo from "../components/common/Logo";
import Button from "../components/ui/Button";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <nav>
      <Logo />

      <Button
        text="Logout"
        onClick={handleLogout}
      />
    </nav>
  );
}

export default Navbar;