interface PackageCardProps {
  name: string;
  experience: number;
  projects: number;
}

export default function PackageCard({ name, experience, projects }: PackageCardProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:shadow-cyan-500/20 transition-shadow">
      <h3 className="text-white font-semibold mb-1">{name}</h3>
      <p className="text-gray-400 text-sm">{experience} yrs experience</p>
      <p className="text-gray-400 text-sm">{projects} projects</p>
    </div>
  );
}
