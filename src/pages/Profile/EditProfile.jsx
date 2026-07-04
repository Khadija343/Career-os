import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isValidEmail } from "../../utils/validation";
import { ROUTES } from "../../utils/constants";
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
    const [success, setSuccess] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        // Check for empty fields
        if (!name.trim() || !email.trim()) {
            setError("Please fill in all fields.");
            setLoading(false);
            return;
        }

        if (!isValidEmail(email)) { 
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

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

    setSuccess("Profile updated successfully!");

    setTimeout(() => {
        navigate(ROUTES.PROFILE);
    }, 1500);
}

  return (
    <Card>
        <PageTitle title="Edit Profile" subtitle="Update your name and email address." />

        <Alert message={error} />
        <Alert
            message={success}
            type="success"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {loading && <Spinner />}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            text={loading ? "Saving..." : "Save Changes"}
            type="submit"
            disabled={loading}
            fullWidth
          />

          <Button
            text="Back to Profile"
            type="button"
            variant="outline"
            onClick={() => navigate(ROUTES.PROFILE)}
            fullWidth
          />
        </div>
      </form>
    </Card>
  );
}

export default EditProfile;


