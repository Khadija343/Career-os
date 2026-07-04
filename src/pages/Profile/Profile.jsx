import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import Button from "../../components/ui/Button";
import { ROUTES } from "../../utils/constants";

import PageTitle from "../../components/common/PageTitle";
import Card from "../../components/ui/Card";

function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

    useEffect(() => {
    // Future:
    // const response = await getProfile();
    // login(response.data.user, token);
    }, []); //dependency array: Run only once, when the component first loads.

    if (!user) {
        return (
            <Card>
            <PageTitle title="My Profile" />

            <p>No user information available.</p>
            </Card>
        );
    }

  return (
    <Card>
        <PageTitle title="My Profile" />

        <p style={{ marginBottom: "10px" }}>
            <strong>Name:</strong> {user.name}
        </p>

        <p style={{ marginBottom: "20px" }}>
            <strong>Email:</strong> {user.email}
        </p>

        <Link to={ROUTES.EDIT_PROFILE}>
            <Button text="Edit Profile" />
        </Link>

        <br />

        <Button
          text="Back to Dashboard"
          onClick={() => navigate(ROUTES.DASHBOARD)}
        />
    </Card>
  );
}

export default Profile;

// Once the backend is ready, we'll update the page to call:
// const profile = await getProfile();