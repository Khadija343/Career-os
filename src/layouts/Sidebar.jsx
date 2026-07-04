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

        <li>Resume Analysis (Coming Soon)</li>

        <li>GitHub Analysis (Coming Soon)</li>

        <li>Roadmap (Coming Soon)</li>

        <li>AI Chat (Coming Soon)</li>

        <li>Interview Prep (Coming Soon)</li>

        <li>Projects (Coming Soon)</li>

        <li>Settings (Coming Soon)</li>
      </ul>
    </aside>
  );
}
//(Future pages: Jobs, Resume, Settings, etc.)

export default Sidebar;