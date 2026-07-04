import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

import PageTitle from "../../components/common/PageTitle";
import Card from "../../components/ui/Card";

function Profile() {
  const { user } = useContext(AuthContext);

    if (!user) {
        return (
            <Card>
            <PageTitle title="My Profile" />

            <p>No user information available.</p>
            </Card>
        );
    }

  useEffect(() => {
    // Future:
    // const response = await getProfile();
    // login(response.data.user, token);
    }, []); //dependency array: Run only once, when the component first loads.

  return (
    <Card>
        <PageTitle title="My Profile" />

        <p style={{ marginBottom: "10px" }}>
            <strong>Name:</strong> {user.name}
        </p>

        <p style={{ marginBottom: "20px" }}>
            <strong>Email:</strong> {user.email}
        </p>

        <Link to="/profile/edit">
            <Button text="Edit Profile" />
        </Link>
    </Card>
  );
}

export default Profile;

// Once the backend is ready, we'll update the page to call:
// const profile = await getProfile();