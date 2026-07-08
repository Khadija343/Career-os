import ProfileCard from "../../components/profile/ProfileCard";
import InfoCard from "../../components/profile/InfoCard";
import SectionTitle from "../../components/profile/SectionTitle";
import UploadResume from "../../components/profile/UploadResume";

function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl space-y-8 px-6 py-8 lg:px-8 lg:py-12">

        <ProfileCard
          name="Muntaha Mano"
          role="Frontend Developer"
          image="https://i.pravatar.cc/150"
          location="Pakistan"
        />

        <div>
          <SectionTitle title="Personal Information" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoCard label="Email" value="muntaha@gmail.com" />
            <InfoCard label="Phone" value="+92 300 1234567" />
            <InfoCard
              label="Career Goal"
              value="Become a Full Stack AI Engineer"
            />
            <InfoCard
              label="Skills"
              value="React, Tailwind CSS, JavaScript"
            />
            <InfoCard label="Education" value="BS Software Engineering" />
          </div>
        </div>

        <div className="flex justify-center sm:justify-start">
          <UploadResume />
        </div>

      </div>
    </div>
  );
}

export default Profile;
