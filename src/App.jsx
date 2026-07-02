import DashboardLayout from "./layouts/DashboardLayout";
import PageTitle from "./components/common/PageTitle";
import Card from "./components/ui/Card";

function App() {
  return (
    <DashboardLayout>
      <Card>
        <PageTitle title="Dashboard" />
        <p>Welcome to Career OS!</p>
      </Card>
    </DashboardLayout>
  );
}

export default App;