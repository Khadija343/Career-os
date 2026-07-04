import { Link } from "react-router-dom";
import { ROUTES } from "../utils/constants";

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to={ROUTES.DASHBOARD}>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to={ROUTES.PROFILE}>
            My Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}
//(Future pages: Jobs, Resume, Settings, etc.)

export default Sidebar;