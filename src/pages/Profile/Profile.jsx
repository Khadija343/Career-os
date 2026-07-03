import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

import PageTitle from "../../components/common/PageTitle";
import Card from "../../components/ui/Card";

function Profile() {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    // Future:
    // const response = await getProfile();
    }, []); //dependency array: Run only once, when the component first loads.

  return (
    <Card>
        <PageTitle title="My Profile" />

        <p>
            <strong>Name:</strong> {user?.name}
        </p>

        <p>
            <strong>Email:</strong> {user?.email} 
            {/* "If user exists, show name; otherwise, show nothing." */}
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