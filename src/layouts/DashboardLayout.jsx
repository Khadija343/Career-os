import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// Wraps every authenticated page with the persistent top navbar and side
// navigation. The page content itself keeps full control of its own
// background/spacing so existing pages render unchanged inside it.
function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1">{children}</main>
      </div>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
