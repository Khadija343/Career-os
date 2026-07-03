import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

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