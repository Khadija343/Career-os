import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";

function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />

      <div>
        <Sidebar />

        <main>
          {children}
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;

// main
// This means:
// "This is the main content of the page."