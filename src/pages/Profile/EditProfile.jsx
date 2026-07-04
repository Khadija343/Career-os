import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
// import { updateProfile } from "../../api/authService";
// Uncomment when the backend is ready.

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageTitle from "../../components/common/PageTitle";
import Spinner from "../../components/ui/Spinner";
import Alert from "../../components/ui/Alert";

function EditProfile() {
    const { user, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        // Check for empty fields
        if (!name.trim() || !email.trim()) {
            setError("Please fill in all fields.");
            setLoading(false);
            return;
        }

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

    // ====================================================
    // Future backend integration:
    //
    // const response = await updateProfile({
    //   name,
    //   email,
    // });
    //
    // login(
    //   response.data.user,
    //   localStorage.getItem("token")
    // );
    // ====================================================

    // Temporary frontend update
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

      <Alert message={error} />

      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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