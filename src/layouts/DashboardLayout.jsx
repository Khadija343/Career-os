import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

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

      <Footer />
    </>
  );
}

export default DashboardLayout;

// main
// This means:
// "This is the main content of the page."