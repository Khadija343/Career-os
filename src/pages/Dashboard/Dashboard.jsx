import Card from "../../components/ui/Card";
import PageTitle from "../../components/common/PageTitle";

function Dashboard() {
  return (
    <div>
      <PageTitle title="Dashboard" />

      <p>Welcome back!</p>

      <Card>
        <h3>Career Score</h3>
        <p>89</p>
      </Card>

      <Card>
        <h3>Resume Score</h3>
        <p>90</p>
      </Card>

      <Card>
        <h3>GitHub Score</h3>
        <p>83</p>
      </Card>

      <Card>
        <h3>Roadmap Progress</h3>
        <p>54%</p>
      </Card>
    </div>
  );
}

export default Dashboard;