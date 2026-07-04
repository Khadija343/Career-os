import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import Button from "../../components/ui/Button";
import { ROUTES } from "../../utils/constants";

import PageTitle from "../../components/common/PageTitle";
import Card from "../../components/ui/Card";
import Avatar from "../../components/ui/Avatar";

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

            <p className="text-sm text-white/50">No user information available.</p>
            </Card>
        );
    }

  return (
    <Card>
        <PageTitle title="My Profile" />

        <div className="mb-6 flex items-center gap-4">
          <Avatar name={user.name} size={56} />

          <div>
            <p className="text-base font-semibold text-white">{user.name}</p>
            <p className="text-sm text-white/50">{user.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={ROUTES.EDIT_PROFILE} className="sm:w-auto">
              <Button text="Edit Profile" fullWidth />
          </Link>

          <Button
            text="Back to Dashboard"
            variant="outline"
            onClick={() => navigate(ROUTES.DASHBOARD)}
            fullWidth
          />
        </div>
    </Card>
  );
}

export default Profile;

// Once the backend is ready, we'll update the page to call:
// const profile = await getProfile();



