import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
// import { updateProfile } from "../../api/authService";
//until the backend is ready

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";

function EditProfile() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();


  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (!name.trim() || !email.trim()) {
        alert("Please fill in all fields.");
        setLoading(false);
        return;
    }

    // Future:
    //
    // await updateProfile({
    //   name,
    //   email,
    // });

    const updatedUser = {
        ...user,
        name,
        email,
        };

        login(
        updatedUser,
        localStorage.getItem("token")
        );

        setLoading(false);

        alert("Profile updated successfully!");

        navigate("/profile");
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

        {loading && <Spinner />}

        <br />

        <Button
            text={loading ? "Saving..." : "Save Changes"}
            type="submit"
            disabled={loading}
        />
      </form>
    </Card>
  );
}

export default EditProfile;

//later when backend is connencted
// async function handleSubmit(e) {
//   e.preventDefault();

//   setLoading(true);

//   try {
//     const response = await updateProfile({
//       name,
//       email,
//     });

//     login(
//       response.data.user,
//       localStorage.getItem("token")
//     );

//     navigate("/profile");
//   } catch (error) {
//     alert("Profile update failed.");
//   } finally {
//     setLoading(false);
//   }
// }