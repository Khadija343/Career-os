import { useContext, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
// import { updateProfile } from "../../api/authService";
//until the backend is ready

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";

function EditProfile() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  function handleSubmit(e) {
    e.preventDefault();

    // Future:
    //
    // await updateProfile({
    //   name,
    //   email,
    // });

    console.log({
      name,
      email,
    });
  }

  return (
    <Card>
      <PageTitle title="Edit Profile" />

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />
        <br />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <Button
          text="Save Changes"
          type="submit"
        />
      </form>
    </Card>
  );
}

export default EditProfile;