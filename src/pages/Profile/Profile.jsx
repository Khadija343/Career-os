import ProfileCard from "../../components/profile/ProfileCard";
import InfoCard from "../../components/profile/InfoCard";
import SectionTitle from "../../components/profile/SectionTitle";
import UploadResume from "../../components/profile/UploadResume";

function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-8">

      <ProfileCard
  name="Muntaha Mano"
  role="Frontend Developer"
  image="https://i.pravatar.cc/150"
  location="Pakistan"
/>

      <div className="mt-8">

        <SectionTitle title="Personal Information" />

        <InfoCard
          label="Email"
          value="muntaha@gmail.com"
        />

        <InfoCard
          label="Phone"
          value="+92 300 1234567"
        />

        <InfoCard
          label="Career Goal"
          value="Become a Full Stack AI Engineer"
        />

        <InfoCard
        label="Skills"
        value="React, Tailwind CSS, JavaScript"
        />

        <InfoCard
        label="Education"
        value="BS Software Engineering"
        />



      </div>

      <div className="mt-8">
        <UploadResume />
      </div>

    </div>
  );
}

export default Profile;