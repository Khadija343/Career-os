import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../utils/constants";
import { AuthContext } from "../context/AuthContext";

import Logo from "../components/common/Logo";
import Button from "../components/ui/Button";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
  logout();
  navigate(ROUTES.LOGIN);
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

//later may have 
// Logo
// Search
// Notifications
// Profile Avatar
// Logout