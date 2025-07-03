import { skills, SkillCategory } from "@/constants/skills";
import PackageCard from "@/components/PackageCard";

export default function SkillsPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category as SkillCategory;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  // Category display names
  const categoryNames: Record<SkillCategory, string> = {
    language: "Programming Languages",
    frontend: "Frontend Technologies",
    backend: "Backend Technologies",
    cloud: "Cloud & DevOps"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold border-b pb-2 mb-6 text-primary-500">Skills</h1>
      
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary-400">
            {categoryNames[category as SkillCategory]}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categorySkills.map((skill) => (
              <PackageCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
