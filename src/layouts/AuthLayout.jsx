import { Link } from "react-router-dom";

import Logo from "../components/common/Logo";
import { ROUTES } from "../utils/constants";

// Similar to a Modal, but instead of wrapping popup content it wraps an
// entire page. No matter which auth page uses AuthLayout, the logo and
// centered card frame are always shown.
function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-12 text-white lg:px-8">
      <div className="mb-8">
        <Link to={ROUTES.HOME}>
          <Logo />
        </Link>
      </div>

      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}

export default AuthLayout;
