import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />

      <Sidebar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default DashboardLayout;

// main
// This means:
// "This is the main content of the page."