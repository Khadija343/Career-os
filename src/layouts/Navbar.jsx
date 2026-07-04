import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

import { ROUTES } from "../utils/constants";
import { AuthContext } from "../context/AuthContext";

import Logo from "../components/common/Logo";
import Button from "../components/ui/Button";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout() {
  logout();
  navigate(ROUTES.LOGIN);
}

  return (
    <nav className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-background/80 px-4 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-3">
        {onMenuClick && (
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          >
            <Menu size={20} />
          </button>
        )}

        <Logo />
      </div>

      <Button
        text="Logout"
        variant="outline"
        size="sm"
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