function ProfileCard({ name, role, image, location }) {
  return (
    <div className="bg-card border border-white/5 rounded-xl shadow-lg shadow-black/20 p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto mb-4 border border-white/10"
      />

      <h2 className="text-2xl font-bold text-white">
        {name}
      </h2>

      <p className="text-white/50">
        {role}
      </p>

      <p className="text-white/50">
        📍 {location}
      </p>
    </div>
  );
}

export default ProfileCard;
