import { MapPin } from "lucide-react";

function ProfileCard({ name, role, image, location }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-card p-8 text-center shadow-lg shadow-black/20">
      <img
        src={image}
        alt={name}
        className="mx-auto mb-5 h-28 w-28 rounded-full border-2 border-primary/30 object-cover shadow-lg shadow-primary/10 ring-4 ring-white/5"
      />

      <h2 className="text-2xl font-bold text-white">
        {name}
      </h2>

      <p className="mt-1 text-sm font-medium text-primary">
        {role}
      </p>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-white/50">
        <MapPin size={14} />
        {location}
      </p>
    </div>
  );
}

export default ProfileCard;
