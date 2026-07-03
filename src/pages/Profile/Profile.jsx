import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import PageTitle from "../../components/common/PageTitle";
import Card from "../../components/ui/Card";

function Profile() {
  const { user } = useContext(AuthContext);

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
    </Card>
  );
}

export default Profile;

// Once the backend is ready, we'll update the page to call:
// const profile = await getProfile();