import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";

function Navbar() {
  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || { name: "Muntaha Mano" };
    } catch {
      return { name: "Muntaha Mano" };
    }
  })();

  // Extract initial safely, filtering out empty spaces
  const userInitial = user.name?.trim().charAt(0).toUpperCase() || "?";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-900/50 bg-slate-950/75 px-6 py-4 backdrop-blur-md flex items-center justify-between">
      {/* Mobile Logo */}
      <div className="flex items-center gap-4 md:hidden">
        <Logo />
      </div>

      {/* Desktop Brand */}
      <div className="hidden md:block">
        <h2 className="text-lg font-semibold text-slate-200">Career OS Console</h2>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-semibold text-white">{user.name}</p>
          <p className="text-xs text-slate-400">Premium Member</p>
        </div>

        <Link 
          to="/profile" 
          className="h-10 w-10 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold hover:bg-blue-500/20 hover:text-blue-300 transition duration-200"
          aria-label="View Profile"
        >
          {userInitial}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
