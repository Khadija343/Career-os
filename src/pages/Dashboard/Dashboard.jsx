import PageTitle from "../../components/common/PageTitle";
import Card from "../../components/ui/Card";

function Dashboard() {
  return (
    <>
      <PageTitle
        title="Dashboard"
        subtitle="Welcome to Career OS Dashboard."
      />

      <Card>
        <p className="text-sm text-white/60">
          Your resume analysis, GitHub insights, and career roadmap will show
          up here as those features come online.
        </p>
      </Card>
    </>
  );
}

export default Dashboard;