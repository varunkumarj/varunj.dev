import { skills } from "@/constants/skills";
import PackageCard from "@/components/PackageCard";

export default function SkillsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold border-b pb-2 mb-6">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <PackageCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}
