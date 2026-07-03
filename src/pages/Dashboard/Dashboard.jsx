import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <div>
      <PageTitle title="Dashboard" />

      <p>Welcome to Career OS Dashboard.</p>

      <Button
        text="Logout"
        onClick={handleLogout}
      />
    </div>
  );
}

export default Dashboard;