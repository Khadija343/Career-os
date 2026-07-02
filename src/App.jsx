// import Login from "./pages/Login/Login";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Badge from "./components/ui/Badge";
import Logo from "./components/common/Logo";
import PageTitle from "./components/common/PageTitle";

function App() {
  return (
    <div>
      <Logo />

      <PageTitle title="Welcome" />

      <Input placeholder="Email" />

      <br />

      <br />

      <Button text="Login" />

      <br />

      <br />

      <Badge text="Beta" />
      
    </div>
  );
}

export default App;